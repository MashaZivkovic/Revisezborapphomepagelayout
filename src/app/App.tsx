import React, { useState, useEffect } from 'react';
import '../styles/index.css';
import { 
  BellIcon, PinIcon, MagnifyingGlassIcon, XMarkIcon, 
  MenuElipsisVerticalIcon, ChevronLeftIcon, ChatIcon, MenuGridIcon, LocationPinIcon, MoonIcon, SunIcon
} from '@navikt/aksel-icons';
import { PostCard, PostData, ZborData, cyrToLat } from './components/Cards';
import { SearchFilterBar, FilterState } from './components/SearchFilterBar';
import { CalendarView } from './components/CalendarView';
import { isSameDay, addDays, isWithinInterval, parseISO, startOfDay, subHours } from 'date-fns';
import { RegisterZborFlow } from './components/register/RegisterZborFlow';
import { UserFeedbackModal } from './components/UserFeedbackModal';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import Footer from '../imports/Footer';
import Onama from '../imports/Onama';
import PolitikaPrivatnosti from '../imports/PolitikaPrivatnosti';
import UsloviKoriscenja from '../imports/UsloviKoriscenja';
import ShareIcon from '../imports/ShareIcon';
import ZborAppLogoT1 from '../imports/ZborAppLogoT1';
import ZborDetailPage from '../imports/Објава'; // Imported from library
import { toast } from 'sonner';
import { supabase } from '/src/lib/supabase';
import { projectId } from '/utils/supabase/info';

import { ProfileView } from './components/ProfileView';
import MapComponent from './components/MapComponent';

const SERVER_URL = `https://${projectId}.supabase.co/functions/v1/make-server-e535a4b3`;

// Figma assets
import imgViber from "figma:asset/d335c472bb3d4d3818fbe6f4ac4323035313d649.png";
import imgUjedinjeni from "figma:asset/caab0c42a68c2f9e88bab8a16c5aa620fc15ac2a.png";
import imgImage131 from "figma:asset/a65ec11c88c339e47927307cbacf47ccbbe48e16.png";

const MOCK_MAP_IMAGE = "https://images.unsplash.com/photo-1584972191378-d70853fc47fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwbWFwJTIwdmVjdG9yJTIwc3R5bGV8ZW58MXx8fHwxNzcxNDk1NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const MOCK_PROTEST_IMAGE = "https://images.unsplash.com/photo-1674050631751-308d13eb6680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm93ZCUyMHdhbGtpbmclMjBwcm90ZXN0JTIwY2l0eSUyMHN0cmVldCUyMGJsdXJyZWQlMjBnZW5lcmljfGVufDF8fHx8MTc3MTUwNjk0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const MOCK_PARK_IMAGE = "https://images.unsplash.com/photo-1717572494480-ebaf5648f60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrJTIwYmVsZ3JhZGUlMjBzZXJiaWElMjBzdW5ueSUyMGRheXxlbnwxfHx8fDE3NzE1MDY5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const MOCK_ZBOROVI: ZborData[] = [
  {
    id: 'z1',
    name: 'Збор Коњарник',
    avatar: imgViber,
    location: 'Коњарник, Београд',
    distance: 1.2,
    description: 'Место окупљања становника Коњарника ради заједничког решавања локалних проблема и унапређења нашег насеља.',
    stats: { members: 452, posts: 124, events: 15 }
  },
  {
    id: 'z2',
    name: 'Збор Врачар',
    avatar: imgUjedinjeni,
    location: 'Врачар, Београд',
    distance: 0.8,
    description: 'Врачарски збор је посвећен очувању духа Врачара и борби за боље услове живота свих наших суседа.',
    stats: { members: 890, posts: 310, events: 42 }
  },
  {
    id: 'z3',
    name: 'Збор Лиман 3',
    avatar: imgImage131,
    location: 'Лиман, Нови Сад',
    distance: 82,
    description: 'Заједница грађана Лимана 3. Овде се договарамо о свему што је важно за наш крај.',
    stats: { members: 1200, posts: 560, events: 88 }
  }
];

const today = new Date();

const MOCK_POSTS: PostData[] = [
  {
    id: 'p1',
    type: 'dogadjaj',
    zbor: MOCK_ZBOROVI[0],
    timestamp: 'пре 2 сата',
    createdAt: subHours(today, 2).toISOString(),
    eventDate: today.toISOString(),
    title: 'Збор грађана Коњарника о новом парку',
    image: MOCK_PARK_IMAGE,
    eventInfo: {
      location: 'Парк код 6. гимназије',
      startTime: '26. Јун 2025, 18:30ч',
      endTime: '20:30ч'
    },
    likes: 45,
    comments: 12,
    attendees: 87
  },
  {
    id: 'p5',
    type: 'protestna_setnja',
    zbor: MOCK_ZBOROVI[1],
    timestamp: 'пре 3 сата',
    createdAt: subHours(today, 3).toISOString(),
    eventDate: addDays(today, 2).toISOString(),
    title: 'Протест против сече стабала на Врачару',
    image: MOCK_PROTEST_IMAGE,
    eventInfo: {
      location: 'Цветни Трг, Београд',
      startTime: '28. Јун 2025, 17:00ч',
      endLocation: 'Градска скупштина',
      endTime: '28. Јун 2025, 20:00ч'
    },
    likes: 342,
    comments: 89,
    attendees: 1240
  },
  {
    id: 'p2',
    type: 'objava',
    zbor: MOCK_ZBOROVI[1],
    timestamp: 'пре 5 сати',
    createdAt: subHours(today, 5).toISOString(),
    title: 'Успешно завршена акција чишћења Чубурског парка!',
    body: 'Хвала свим комшијама који су се одазвали данашњој акцији. Прикупили смо преко 20 џакова отпада и офарбали клупе.',
    likes: 128,
    comments: 24
  }
];

interface NotificationData {
  id: string;
  type: 'post' | 'event' | 'alert' | 'zbor';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  zborId: string;
  avatar: string;
}

const MOCK_NOTIFICATIONS: NotificationData[] = [
  {
    id: 'n1',
    type: 'event',
    title: 'Нови догађај: Збор Коњарник',
    message: 'Заказан је нови збор грађана о новом парку за 26. јун.',
    timestamp: 'пре 10 минута',
    isRead: false,
    zborId: 'z1',
    avatar: imgViber
  },
  {
    id: 'n2',
    type: 'post',
    title: 'Нова објва: Збор Врачар',
    message: 'Објављен је извештај са акције чишћења Чубурског парка.',
    timestamp: 'пре 2 сата',
    isRead: false,
    zborId: 'z2',
    avatar: imgUjedinjeni
  },
  {
    id: 'n3',
    type: 'alert',
    title: 'Хитно: Врачар',
    message: 'Почела је сеча стабала у Његошевој! Окупимо се!',
    timestamp: 'пре 4 сата',
    isRead: true,
    zborId: 'z2',
    avatar: imgUjedinjeni
  }
];

function AuthModal({ isOpen, onClose, t, onLogin }: { isOpen: boolean, onClose: () => void, t: (s: string) => string, onLogin?: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success(t('Успешно сте се пријавили!'));
      if (onLogin) onLogin(); else onClose();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-[2000] flex items-center justify-center p-6 backdrop-blur-sm">
      <div className="bg-background rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-foreground">{t('Пријава')}</h3>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
               <XMarkIcon className="text-[20px] text-primary" />
            </button>
          </div>
          <div className="space-y-4">
             <div>
                <label className="block text-xs font-bold text-primary mb-1.5 ml-1">{t('Имејл')}</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full bg-card border-none rounded-xl py-3 px-4 text-sm" />
             </div>
             <div>
                <label className="block text-xs font-bold text-primary mb-1.5 ml-1">{t('Лозинка')}</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full bg-card border-none rounded-xl py-3 px-4 text-sm" />
             </div>
             <button 
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-sm shadow-lg disabled:opacity-50"
             >
                {loading ? t('Пријава...') : t('Пријави се')}
             </button>
             <button className="w-full text-xs font-bold text-foreground/70 mt-2">{t('Заборављена лозинка?')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationBanner({ onEnable, t }: { onEnable: () => void, t: (s: string) => string }) {
  return (
    <div className="bg-accent border border-primary/10 rounded-xl p-4 mb-6 flex items-start gap-3 shadow-sm">
       <div className="bg-card p-2 rounded-full text-primary shadow-sm shrink-0">
          <PinIcon className="text-[18px] rotate-45" />
       </div>
       <div className="flex-1">
          <h4 className="text-sm font-bold text-foreground mb-1">{t('Пронађи најближе зборове')}</h4>
          <p className="text-xs text-foreground/80 leading-relaxed mb-3">
             {t('Укључите геолокацију да бисмо вам приказали зборове и догађаје у вашој непосредној близини.')}
          </p>
          <button 
            onClick={onEnable}
            className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
             {t('Укључи локацију')}
          </button>
       </div>
    </div>
  );
}

function NotificationsView({ 
  notifications, 
  followedIds, 
  onZborClick, 
  t 
}: { 
  notifications: NotificationData[], 
  followedIds: string[], 
  onZborClick: (id: string) => void,
  t: (s: string) => string 
}) {
  const [activeTab, setActiveTab] = useState<'followed' | 'other'>('followed');

  const followedNotifications = notifications.filter(n => followedIds.includes(n.zborId));
  const otherNotifications = notifications.filter(n => !followedIds.includes(n.zborId));

  const displayList = activeTab === 'followed' ? followedNotifications : otherNotifications;

  return (
    <div className="flex flex-col bg-background h-full">
      <div className="px-4 py-6 border-b border-accent">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t('Обавештења')}</h2>
        <div className="flex bg-accent p-1 rounded-xl max-w-sm">
          <button 
            onClick={() => setActiveTab('followed')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'followed' ? 'bg-white text-primary shadow-sm' : 'text-foreground/70'}`}
          >
            {t('ПРАТИМ')}
          </button>
          <button 
            onClick={() => setActiveTab('other')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'other' ? 'bg-white text-primary shadow-sm' : 'text-foreground/70'}`}
          >
            {t('ОСТАЛО')}
          </button>
        </div>
      </div>

      <div className="flex-1">
        {displayList.length > 0 ? (
          <div className="divide-y divide-accent">
            {displayList.map(notif => (
              <div 
                key={notif.id} 
                className={`p-4 flex gap-3 hover:bg-card transition-colors cursor-pointer ${!notif.isRead ? 'bg-primary/5' : ''}`}
                onClick={() => onZborClick(notif.zborId)}
              >
                <div className="relative shrink-0">
                   <div className="size-12 rounded-full overflow-hidden border border-accent">
                      <ImageWithFallback src={notif.avatar} alt="Avatar" className="size-full object-cover" />
                   </div>
                   {!notif.isRead && (
                     <div className="absolute -top-0.5 -right-0.5 size-3.5 bg-primary border-2 border-white rounded-full"></div>
                   )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-0.5">
                    <h4 className={`text-sm leading-tight pr-2 ${notif.isRead ? 'text-foreground font-medium' : 'text-foreground font-bold'}`}>
                       {t(notif.title)}
                    </h4>
                    <span className="text-[10px] text-foreground/70 whitespace-nowrap">{t(notif.timestamp)}</span>
                  </div>
                  <p className="text-xs text-foreground/80 line-clamp-2 leading-relaxed">
                    {t(notif.message)}
                  </p>
                </div>
                <button className="self-center p-1 text-foreground/70">
                   <MenuElipsisVerticalIcon className="text-[16px]" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
             <div className="size-20 bg-accent rounded-full flex items-center justify-center mb-4 text-primary">
                <BellIcon className="text-[40px]" strokeWidth={1.5} />
             </div>
             <h3 className="text-lg font-bold text-foreground mb-2">{t('Нема нових обавештења')}</h3>
             <p className="text-sm text-foreground/70 leading-relaxed">
                {activeTab === 'followed' 
                  ? t('Овде ће се појављивати новости из зборова које пратите.') 
                  : t('Овде ће се појављивати предлози и општа обавештења.')}
             </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<'feed' | 'map' | 'zborovi' | 'notifications' | 'profile' | 'zbor-detail' | 'about' | 'privacy' | 'terms' | 'admin'>('feed');
  const [posts, setPosts] = useState<PostData[]>([]);
  const [user, setUser] = useState<any>(null);
  const [selectedZbor, setSelectedZbor] = useState<ZborData | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    fetch(`${SERVER_URL}/posts`)
      .then(res => res.json())
      .then(data => setPosts(Array.isArray(data) ? data : []))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isUXModalOpen, setIsUXModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'cir' | 'lat'>('cir');
  const [isLangHovered, setIsLangHovered] = useState(false);
  const [followedZborIds, setFollowedZborIds] = useState<string[]>(['z1', 'z2']);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'calendar' | 'map'>('list');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const [filters, setFilters] = useState<FilterState>({
    query: '',
    dateRange: 'all',
    type: 'all',
    location: '',
    sort: 'newest'
  });

  const isLat = language === 'lat';
  const t = (txt: string) => isLat ? cyrToLat(txt) : txt;

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    if (newFilters.sort === 'closest' && !locationEnabled) {
      handleEnableLocation();
    }
  };
  
  // Sync activeView with viewMode for Map
  const handleViewChange = (mode: 'list' | 'calendar' | 'map') => {
    setViewMode(mode);
    if (mode === 'map' && activeView !== 'feed') {
      setActiveView('feed');
    }
  };

  const handleSaveSearch = (currentFilters: FilterState) => {
    if (!user) return;
    try {
      const saved = JSON.parse(localStorage.getItem(`saved_searches_${user.id}`) || '[]');
      saved.push(currentFilters);
      localStorage.setItem(`saved_searches_${user.id}`, JSON.stringify(saved));
      toast.success(t('Претрага је сачувана!'));
    } catch (e) {
      console.error(e);
    }
  };

  const handleEnableLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setLocationEnabled(true);
      setIsLocating(false);
      // Removed setActiveView('feed') to avoid switching if user was on map
    }, 1500);
  };

  const handleZborClick = (zbor: ZborData) => {
    setSelectedZbor(zbor);
    setActiveView('zbor-detail');
  };

  const handleZborIdClick = (id: string) => {
    const zbor = MOCK_ZBOROVI.find(z => z.id === id);
    if (zbor) handleZborClick(zbor);
  };

  const toggleFollow = (id: string) => {
    setFollowedZborIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const openAuth = () => setIsAuthModalOpen(true);
  const openRegister = () => setIsRegisterModalOpen(true);

  const sortedPosts = [...(posts.length > 0 ? posts : MOCK_POSTS)].filter(post => {
    // Query
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matches = 
        post.title.toLowerCase().includes(q) ||
        (post.body?.toLowerCase().includes(q)) ||
        post.zbor.name.toLowerCase().includes(q) ||
        post.eventInfo?.location.toLowerCase().includes(q);
      if (!matches) return false;
    }
    
    // Type
    if (filters.type !== 'all' && post.type !== filters.type) return false;
    
    // Location
    if (filters.location) {
       const loc = filters.location.toLowerCase();
       if (!post.zbor.location.toLowerCase().includes(loc) && !post.eventInfo?.location.toLowerCase().includes(loc)) return false;
    }

    // Date
    if (filters.dateRange !== 'all') {
      const dateToCheck = post.eventDate ? parseISO(post.eventDate) : (post.createdAt ? parseISO(post.createdAt) : new Date());
      const now = new Date();
      
      if (filters.dateRange === 'today') {
         if (!isSameDay(dateToCheck, now)) return false;
      } else if (filters.dateRange === 'tomorrow') {
         if (!isSameDay(dateToCheck, addDays(now, 1))) return false;
      } else if (filters.dateRange === 'week') {
         if (!isWithinInterval(dateToCheck, { start: startOfDay(now), end: addDays(now, 7) })) return false;
      }
    }
    return true;
  }).sort((a, b) => {
    if (filters.sort === 'newest') {
       return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    }
    if (filters.sort === 'oldest') {
       return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
    }

    if (filters.sort === 'closest') {
      const distA = a.zbor.distance || 999;
      const distB = b.zbor.distance || 999;
      if (distA !== distB) return distA - distB;
    }
    const aFollowed = followedZborIds.includes(a.zbor.id);
    const bFollowed = followedZborIds.includes(b.zbor.id);
    if (aFollowed && !bFollowed) return -1;
    if (!aFollowed && bFollowed) return 1;
    return 0;
  });

  const sortedZborovi = [...MOCK_ZBOROVI].filter(zbor => {
    // Only filter zborovi if we are in a view that uses them, or just always filter them based on query/location
    // Note: Type and Date filters don't apply to Zborovi
    
    // Query
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matches = 
        zbor.name.toLowerCase().includes(q) || 
        zbor.location.toLowerCase().includes(q) || 
        zbor.description.toLowerCase().includes(q);
      if (!matches) return false;
    }
    
    // Location
    if (filters.location) {
       const loc = filters.location.toLowerCase();
       if (!zbor.location.toLowerCase().includes(loc)) return false;
    }

    return true;
  }).sort((a, b) => {
    if (locationEnabled || filters.sort === 'closest') {
      const distA = a.distance || 999;
      const distB = b.distance || 999;
      return distA - distB;
    }
    return 0;
  });

  const events = sortedPosts.filter(p => p.type === 'dogadjaj' || p.type === 'protestna_setnja');
  const regularPosts = sortedPosts.filter(p => p.type === 'objava');

  const unreadCount = MOCK_NOTIFICATIONS.filter(n => !n.isRead && followedZborIds.includes(n.zborId)).length;

  // Show UX banner after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsUXModalOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background max-w-screen-2xl mx-auto shadow-2xl relative overflow-hidden">
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        t={t} 
        onLogin={() => {
          setIsAuthModalOpen(false);
          setActiveView('admin');
        }} 
      />
      <RegisterZborFlow isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} t={t} />
      <UserFeedbackModal isOpen={isUXModalOpen} onClose={() => setIsUXModalOpen(false)} t={t} />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-[2000] lg:hidden animate-in fade-in duration-200 flex justify-end">
          <div className="w-[320px] h-full bg-background shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">
            <div className="p-6 flex flex-col gap-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">{t('Навигација')}</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                  <XMarkIcon className="text-[24px] text-primary" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => { setActiveView('feed'); setIsMenuOpen(false); }} 
                  className="text-left py-2 text-primary font-bold text-lg hover:translate-x-1 transition-transform"
                >
                  {t('Почетна')}
                </button>
                <button 
                  onClick={() => { openRegister(); setIsMenuOpen(false); }} 
                  className="text-left py-2 text-primary font-bold text-lg hover:translate-x-1 transition-transform"
                >
                  {t('Покрени нови збор')}
                </button>
                <button 
                  onClick={() => { setActiveView('about'); setIsMenuOpen(false); }} 
                  className="text-left py-2 text-foreground font-medium text-lg hover:translate-x-1 transition-transform"
                >
                  {t('О нама')}
                </button>
                <button 
                  onClick={() => { setActiveView('privacy'); setIsMenuOpen(false); }} 
                  className="text-left py-2 text-foreground font-medium text-lg hover:translate-x-1 transition-transform"
                >
                  {t('Политика приватности')}
                </button>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center justify-between pt-6 border-t border-accent">
                <span className="font-bold text-foreground">{t('Тамна тема')}</span>
                <button 
                  onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
                  className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-primary' : 'bg-gray-300'}`}
                >
                  <div className={`absolute top-1 left-1 size-6 bg-white rounded-full shadow-sm transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}>
                    {theme === 'dark' ? <MoonIcon className="text-primary text-xs" /> : <SunIcon className="text-gray-500 text-xs" />}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-[#4f378a] text-white py-4 px-4 lg:px-8 shadow-md sticky top-0 z-[1000]">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveView('feed')}>
            <button className="lg:hidden p-1 mr-2" onClick={(e) => { e.stopPropagation(); setIsMenuOpen(true); }}>
               <MenuGridIcon className="text-[28px]" />
            </button>
            <div className="h-10 lg:h-12 w-auto">
               <ZborAppLogoT1 />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => setActiveView('feed')} className={`font-bold hover:text-white/80 transition-colors ${activeView === 'feed' ? 'underline decoration-2 underline-offset-4' : ''}`}>
              {t('Почетна')}
            </button>
            <button onClick={() => setActiveView('zborovi')} className={`font-bold hover:text-white/80 transition-colors ${activeView === 'zborovi' ? 'underline decoration-2 underline-offset-4' : ''}`}>
              {t('Зборови')}
            </button>
            <button onClick={() => setActiveView('map')} className={`font-bold hover:text-white/80 transition-colors ${activeView === 'map' ? 'underline decoration-2 underline-offset-4' : ''}`}>
              {t('Мапа')}
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 lg:gap-5">
            <button className="p-2 relative hover:bg-white/10 rounded-full transition-colors" onClick={() => setActiveView('notifications')}>
              <BellIcon className="text-[24px]" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 size-2.5 bg-red-500 border border-[#4f378a] rounded-full animate-pulse"></span>
              )}
            </button>
            
            {user ? (
              <div className="flex items-center gap-3 cursor-pointer hover:bg-white/10 py-1.5 px-3 rounded-lg transition-colors" onClick={() => setActiveView('profile')}>
                 <div className="size-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                    {user.email?.[0].toUpperCase()}
                 </div>
                 <span className="hidden lg:inline text-sm font-bold">{t('Профил')}</span>
              </div>
            ) : (
              <button 
                onClick={openAuth}
                className="bg-white text-[#4f378a] px-5 py-2 rounded-lg font-bold text-sm hover:bg-white/90 transition-colors shadow-sm"
              >
                {t('Пријава')}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {activeView === 'map' && (
             <div className="h-full w-full relative">
                <div className="absolute top-4 left-4 z-[500] w-[calc(100%-32px)] max-w-md">
                   <SearchFilterBar 
                      filters={filters} 
                      onFilterChange={handleFilterChange} 
                      t={t} 
                      viewMode={viewMode}
                      onViewChange={handleViewChange}
                      onSaveSearch={() => handleSaveSearch(filters)}
                   />
                </div>
                <MapComponent 
                   posts={sortedPosts} 
                   zborovi={sortedZborovi} 
                   userLocation={null}
                   onMarkerClick={(type, id) => {
                      if (type === 'zbor') handleZborIdClick(id);
                      // Handle post click if needed
                   }}
                />
                <MapLegend t={t} />
             </div>
          )}

          {activeView === 'feed' && (
            <div className="max-w-7xl mx-auto w-full p-4 lg:p-8">
               <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Sidebar (Desktop) */}
                  <div className="hidden lg:block w-64 shrink-0 space-y-6">
                     <div className="bg-card rounded-xl p-6 shadow-sm border border-accent">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                              <LocationPinIcon className="text-[24px]" />
                           </div>
                           <div>
                              <p className="text-xs text-foreground/60 font-bold uppercase tracking-wider">{t('Ваша локација')}</p>
                              <p className="text-sm font-bold text-foreground">Врачар, Београд</p>
                           </div>
                        </div>
                        <button onClick={openRegister} className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold text-sm shadow-md hover:bg-primary/90 transition-colors">
                           {t('Покрени нови збор')}
                        </button>
                     </div>

                     <div className="bg-card rounded-xl p-6 shadow-sm border border-accent">
                        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                           <span className="size-2 bg-green-500 rounded-full"></span>
                           {t('Активни зборови')}
                        </h3>
                        <div className="space-y-4">
                           {MOCK_ZBOROVI.slice(0, 3).map(zbor => (
                              <div key={zbor.id} onClick={() => handleZborClick(zbor)} className="flex items-center gap-3 cursor-pointer group">
                                 <div className="size-10 rounded-full overflow-hidden border border-accent group-hover:border-primary transition-colors">
                                    <ImageWithFallback src={zbor.avatar} alt={zbor.name} className="size-full object-cover" />
                                 </div>
                                 <div>
                                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{t(zbor.name)}</p>
                                    <p className="text-[10px] text-foreground/60">{zbor.stats?.members} {t('чланова')}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Main Feed */}
                  <div className="flex-1 min-w-0">
                     <SearchFilterBar 
                        filters={filters} 
                        onFilterChange={handleFilterChange} 
                        t={t} 
                        viewMode={viewMode}
                        onViewChange={handleViewChange}
                        onSaveSearch={() => handleSaveSearch(filters)}
                     />
                     
                     {!locationEnabled && <LocationBanner onEnable={handleEnableLocation} t={t} />}

                     {viewMode === 'list' && (
                        <div className="space-y-6 mt-6">
                           {sortedPosts.map(post => (
                              <PostCard 
                                key={post.id} 
                                post={post} 
                                onAuthRequired={openAuth}
                                isFollowed={followedZborIds.includes(post.zbor.id)}
                                onToggleFollow={toggleFollow}
                                language={language}
                                showDistance={locationEnabled}
                              />
                           ))}
                           {sortedPosts.length === 0 && (
                              <div className="text-center py-20 bg-card rounded-2xl border border-dashed border-accent">
                                 <p className="text-foreground/60 font-medium">{t('Нема резултата за вашу претрагу.')}</p>
                                 <button onClick={() => setFilters({ ...filters, query: '', type: 'all', dateRange: 'all' })} className="text-primary font-bold text-sm mt-2 hover:underline">
                                    {t('Поништи филтере')}
                                 </button>
                              </div>
                           )}
                        </div>
                     )}

                     {viewMode === 'calendar' && (
                        <div className="mt-6">
                           <CalendarView posts={events} onEventClick={(id) => console.log(id)} t={t} />
                        </div>
                     )}
                  </div>

                  {/* Right Sidebar (Desktop) - Statistics */}
                  <div className="hidden xl:block w-72 shrink-0">
                     <div className="sticky top-24 space-y-6">
                        <div className="bg-card rounded-xl p-6 shadow-sm border border-accent">
                           <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">{t('Статистика')}</h3>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="bg-accent/50 p-3 rounded-lg text-center">
                                 <p className="text-2xl font-black text-primary">124</p>
                                 <p className="text-[10px] text-foreground/60 font-bold">{t('ЗБОРОВА')}</p>
                              </div>
                              <div className="bg-accent/50 p-3 rounded-lg text-center">
                                 <p className="text-2xl font-black text-chart-2">5.2k</p>
                                 <p className="text-[10px] text-foreground/60 font-bold">{t('КОМШИЈА')}</p>
                              </div>
                              <div className="bg-accent/50 p-3 rounded-lg text-center col-span-2">
                                 <p className="text-2xl font-black text-chart-4">89</p>
                                 <p className="text-[10px] text-foreground/60 font-bold">{t('АКЦИЈА ОВОГ МЕСЕЦА')}</p>
                              </div>
                           </div>
                        </div>
                        
                        <div className="bg-[#4f378a] rounded-xl p-6 shadow-lg text-white text-center relative overflow-hidden">
                           <div className="relative z-10">
                              <h3 className="font-bold text-lg mb-2">{t('Подржи ЗборАпп')}</h3>
                              <p className="text-xs opacity-80 mb-4 leading-relaxed">
                                 {t('Помозите нам да градимо јаче локалне заједнице.')}
                              </p>
                              <button className="bg-white text-[#4f378a] w-full py-2.5 rounded-lg font-bold text-sm hover:bg-white/90 transition-colors">
                                 {t('Донирај')}
                              </button>
                           </div>
                           <div className="absolute top-0 right-0 size-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          )}

          {activeView === 'zborovi' && (
             <div className="max-w-5xl mx-auto p-4 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t('Сви зборови')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {sortedZborovi.map(zbor => (
                      <ZborCard 
                        key={zbor.id} 
                        zbor={zbor} 
                        onClick={handleZborClick} 
                        isFollowed={followedZborIds.includes(zbor.id)}
                        onToggleFollow={toggleFollow}
                        t={t}
                      />
                   ))}
                </div>
             </div>
          )}

          {activeView === 'zbor-detail' && selectedZbor && (
            <ZborDetailPage 
              zbor={selectedZbor}
              posts={sortedPosts}
              onBack={() => setActiveView('feed')}
              isFollowed={followedZborIds.includes(selectedZbor.id)}
              onToggleFollow={toggleFollow}
            />
          )}

          {activeView === 'notifications' && (
             <NotificationsView 
               notifications={MOCK_NOTIFICATIONS} 
               followedIds={followedZborIds} 
               onZborClick={handleZborIdClick} 
               t={t} 
             />
          )}

          {activeView === 'profile' && user && (
             <ProfileView user={user} t={t} onLogout={async () => { await supabase.auth.signOut(); setUser(null); setActiveView('feed'); }} />
          )}

          {activeView === 'admin' && (
             <AdminDashboard />
          )}

          {(activeView === 'about' || activeView === 'privacy' || activeView === 'terms') && (
             <div className="max-w-4xl mx-auto p-8 bg-card min-h-full">
                {activeView === 'about' && <Onama />}
                {activeView === 'privacy' && <PolitikaPrivatnosti />}
                {activeView === 'terms' && <UsloviKoriscenja />}
             </div>
          )}
        </div>
      </div>
    </div>
  );
}