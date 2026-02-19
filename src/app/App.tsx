import React, { useState, useEffect } from 'react';
import { 
  HouseIcon, BellIcon, PersonIcon, MagnifyingGlassIcon, PinIcon, LocationPinIcon, MenuGridIcon, TasklistIcon, 
  CalendarIcon, MegaphoneIcon, ChevronLeftIcon, PaperplaneIcon, ExternalLinkIcon, XMarkIcon, 
  ThumbUpIcon, ThumbDownIcon, ChatIcon, PlusIcon, ChevronDownIcon, CompassIcon, 
  CheckmarkIcon, MenuElipsisVerticalIcon, LeaveIcon, CogIcon, QuestionmarkIcon, CheckmarkCircleIcon
} from '@navikt/aksel-icons';
import { PostCard, ZborCard, PostData, ZborData, PostType, cyrToLat } from './components/Cards';
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
import ZborAppLogoT1 from '../imports/ZborAppLogoT1';
import ZborAppLogoT2 from '../imports/ZborAppLogoT2';
import ShareIcon from '../imports/ShareIcon';
import { toast } from 'sonner';
import { supabase } from '/src/lib/supabase';
import { projectId } from '/utils/supabase/info';
import * as kv from '/supabase/functions/server/kv_store';

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
    title: 'Нова обј��ва: Збор Врачар',
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

function AuthModal({ isOpen, onClose, t }: { isOpen: boolean, onClose: () => void, t: (s: string) => string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success(t('Успешно сте се пријавили!'));
      onClose();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
      <div className="bg-background rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-foreground">{t('Пријава')}</h3>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
               <XMarkIcon className="text-[20px] text-muted-foreground" />
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
       <div className="bg-white p-2 rounded-full text-primary shadow-sm shrink-0">
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

function ZborDetailPage({ 
  zbor, 
  posts,
  onBack, 
  onAuthRequired, 
  isFollowed, 
  onToggleFollow, 
  language,
  showDistance
}: { 
  zbor: ZborData, 
  posts: PostData[],
  onBack: () => void, 
  onAuthRequired: () => void,
  isFollowed: boolean,
  onToggleFollow: (id: string) => void,
  language: 'cir' | 'lat',
  showDistance: boolean
}) {
  const [activeTab, setActiveTab] = useState<'objave' | 'dogadjaji'>('objave');
  const isLat = language === 'lat';
  const t = (txt: string) => isLat ? cyrToLat(txt) : txt;
  
  const filteredPosts = posts.filter(p => p.zbor.id === zbor.id && (activeTab === 'objave' ? p.type === 'objava' : (p.type === 'dogadjaj' || p.type === 'protestna_setnja')));

  return (
    <div className="flex flex-col min-h-full bg-background">
      <div className="bg-background border-b border-accent sticky top-0 z-30 px-4 py-4 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-1 text-primary font-bold">
          <ChevronLeftIcon className="text-[20px]" />
          <span>{t('Назад')}</span>
        </button>
        <button className="text-foreground">
          <MagnifyingGlassIcon className="text-[22px]" />
        </button>
      </div>

      <div className="px-4 py-6 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="size-20 lg:size-24 rounded-full overflow-hidden border-2 border-accent shadow-sm">
            <ImageWithFallback src={zbor.avatar} alt={zbor.name} className="size-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">{t(zbor.name)}</h1>
            <div className="flex items-center gap-2 mt-1">
              <PinIcon className="text-[14px] text-foreground/70" />
              <span className="text-sm text-foreground/70 font-medium">{t(zbor.location)}</span>
              {showDistance && zbor.distance !== undefined && (
                <span className="text-[10px] font-bold text-chart-2 bg-chart-2/10 px-1.5 py-0.5 rounded ml-1 inline-block">
                  {zbor.distance} km {t('од вас')}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
           <div className="size-[22px] cursor-pointer hover:opacity-80 text-primary">
              <ShareIcon />
           </div>
           <ChatIcon className="text-[22px] text-primary cursor-pointer hover:opacity-80" />
        </div>

        <p className="text-sm lg:text-base text-foreground leading-relaxed mb-6 max-w-2xl">
           {t(zbor.description)}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
           <button 
             onClick={() => onToggleFollow(zbor.id)} 
             className={`px-8 py-3.5 rounded-lg font-bold shadow-md transition-all ${isFollowed ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-primary text-primary-foreground shadow-primary/20 hover:bg-primary/90'}`}
           >
              {isFollowed ? t('Откажи праћење') : t('Запрати збор')}
           </button>
           <button className="px-8 py-3.5 border-2 border-primary text-primary rounded-lg font-bold hover:bg-accent transition-colors">
              {t('Подели страницу')}
           </button>
        </div>

        <div className="flex border-b border-border mb-6">
           <button onClick={() => setActiveTab('objave')} className={`px-8 py-3 font-bold text-sm transition-all border-b-2 ${activeTab === 'objave' ? 'border-primary text-primary' : 'border-transparent text-foreground/70'}`}>{t('Објаве')}</button>
           <button onClick={() => setActiveTab('dogadjaji')} className={`px-8 py-3 font-bold text-sm transition-all border-b-2 ${activeTab === 'dogadjaji' ? 'border-primary text-primary' : 'border-transparent text-foreground/70'}`}>{t('Догађаји')}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 pb-20 lg:pb-10">
           {filteredPosts.map(post => (
             <PostCard 
               key={post.id} 
               post={post} 
               onAuthRequired={onAuthRequired} 
               isFollowed={isFollowed}
               onToggleFollow={onToggleFollow}
               language={language}
               showDistance={showDistance}
             />
           ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<'feed' | 'map' | 'zborovi' | 'notifications' | 'profile' | 'zbor-detail' | 'about' | 'privacy' | 'terms'>('feed');
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
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
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
    <div className="flex flex-col lg:flex-row h-screen bg-background max-w-screen-2xl mx-auto shadow-2xl relative overflow-hidden">
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} t={t} />
      <RegisterZborFlow isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} t={t} />
      <UserFeedbackModal isOpen={isUXModalOpen} onClose={() => setIsUXModalOpen(false)} t={t} />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100] lg:hidden animate-in fade-in duration-200 flex justify-end">
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
                  {t('Региструј збор')}
                </button>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeGmJe4HKBhpqihb9FB8y9F_gLN_cLsRJCUpVa9I1AkH2dxiQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left py-2 text-primary font-bold text-lg hover:translate-x-1 transition-transform"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('Анкета')}
                </a>
                <button className="text-left py-2 text-primary font-bold text-lg hover:translate-x-1 transition-transform">
                  {t('О нама')}
                </button>
                <button className="text-left py-2 text-primary font-bold text-lg hover:translate-x-1 transition-transform">
                  {t('Услови коришћења')}
                </button>
                <button className="text-left py-2 text-primary font-bold text-lg hover:translate-x-1 transition-transform">
                  {t('Политика приватности')}
                </button>
              </div>

              <div className="h-px bg-border my-2"></div>

              {/* Login Section */}
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-foreground mb-2">{t('Улогујте се')}</h2>
                
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-foreground text-sm">{t('Имејл')}</label>
                  <input 
                    type="email" 
                    placeholder={t('Унесите имејл')}
                    className="w-full border border-border rounded-md py-3 px-4 text-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-bold text-foreground text-sm">{t('Лозинка')}</label>
                  <input 
                    type="password" 
                    placeholder={t('Унесите лозинку')}
                    className="w-full border border-border rounded-md py-3 px-4 text-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <button className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-md shadow-md hover:bg-primary/90 transition-colors">
                    {t('Пријави се')}
                  </button>
                  <button className="w-full border border-primary text-primary font-bold py-3.5 rounded-md hover:bg-accent transition-colors">
                    {t('Заборављена лозинка')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-accent shrink-0 z-40">
        <div className="p-8 flex items-center gap-3">
          <div className="w-[140px] h-[35px]">
             <ZborAppLogoT2 />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <button 
            onClick={() => setActiveView('feed')}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all ${activeView === 'feed' ? 'bg-accent text-primary' : 'text-foreground/70 hover:bg-card'}`}
          >
            <HouseIcon className="text-[22px]" />
            {t('Почетна')}
          </button>
          <button 
            onClick={() => setActiveView('map')}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all ${activeView === 'map' ? 'bg-accent text-primary' : 'text-foreground/70 hover:bg-card'}`}
          >
            <LocationPinIcon className="text-[22px]" />
            {t('Мапа')}
          </button>
          <button 
            onClick={() => setActiveView('zborovi')}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all ${activeView === 'zborovi' ? 'bg-accent text-primary' : 'text-foreground/70 hover:bg-card'}`}
          >
            <CompassIcon className="text-[22px]" />
            {t('Истражи зборове')}
          </button>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeGmJe4HKBhpqihb9FB8y9F_gLN_cLsRJCUpVa9I1AkH2dxiQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all text-foreground/70 hover:bg-card"
          >
            <TasklistIcon className="text-[22px]" />
            {t('Анкета')}
          </a>
          <button 
            onClick={() => setActiveView('notifications')}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all ${activeView === 'notifications' ? 'bg-accent text-primary' : 'text-foreground/70 hover:bg-card'}`}
          >
            <div className="flex items-center gap-4">
              <BellIcon className="text-[22px]" />
              {t('Обавештења')}
            </div>
            {unreadCount > 0 && (
              <span className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-full">{unreadCount}</span>
            )}
          </button>
        </nav>

        <div className="px-4 py-8 space-y-2 border-t border-accent">
           <button className="w-full flex items-center gap-4 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary">
              <CogIcon className="text-[18px]" />
              {t('Подешавања')}
           </button>
           <button className="w-full flex items-center gap-4 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary">
              <QuestionmarkIcon className="text-[18px]" />
              {t('Центар за помоћ')}
           </button>
           <div className="mt-4 pt-4 border-t border-accent px-4 flex items-center gap-3">
              <div onClick={() => setActiveView('profile')} className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer group">
                  <div className="size-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-colors">JD</div>
                  <div className="flex-1 min-w-0">
                     <p className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">Јован Дучић</p>
                     <p className="text-[10px] text-foreground/70 truncate">jovan.d@email.rs</p>
                  </div>
              </div>
              <LeaveIcon className="text-[16px] text-foreground/70 cursor-pointer hover:text-red-500" />
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="lg:hidden bg-primary px-4 flex items-center justify-between shrink-0 z-30 h-[60px]">
          <div className="flex items-center gap-2 w-[120px] h-[35px]">
             <ZborAppLogoT1 />
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLanguage(prev => prev === 'cir' ? 'lat' : 'cir')}
              onMouseEnter={() => setIsLangHovered(true)}
              onMouseLeave={() => setIsLangHovered(false)}
              className="flex items-center gap-1 border border-white/60 px-2 py-1 rounded-md text-[10px] text-white font-bold transition-all hover:bg-white/10"
            >
              <span>{isLangHovered ? (language === 'cir' ? 'LAT' : 'ЋИР') : (language === 'cir' ? 'ЋИР' : 'LAT')}</span>
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="text-white p-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {/* Desktop Top Search (Hidden on Mobile) */}
        <header className="hidden lg:flex items-center justify-end px-8 py-4 bg-white border-b border-accent shrink-0">
           <div className="flex items-center gap-6">
              <button 
                onClick={() => setLanguage(prev => prev === 'cir' ? 'lat' : 'cir')}
                onMouseEnter={() => setIsLangHovered(true)}
                onMouseLeave={() => setIsLangHovered(false)}
                className="text-xs font-bold text-primary border border-primary px-3 py-1.5 rounded-lg hover:bg-accent transition-colors"
              >
                {isLangHovered ? (language === 'cir' ? 'PREBACI NA LATINICU' : 'PREBACI NA ĆIRILICU') : (language === 'cir' ? 'ЋИРИЛИЦА' : 'LATINICA')}
              </button>
              <button className="text-foreground/70 hover:text-primary relative">
                <BellIcon className="text-[24px]" />
                {unreadCount > 0 && <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border border-white"></span>}
              </button>
           </div>
        </header>

        {/* View Content Area */}
        <div className="flex-1 overflow-hidden relative flex flex-col lg:flex-row">
          
          <div className="flex-1 overflow-y-auto relative flex flex-col">
            <div className="flex-1 flex flex-col">
              {isLocating && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-[60] flex flex-col items-center justify-center">
                   <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                   <p className="text-sm font-bold text-primary animate-pulse">{t('Одређивање ваше локације...')}</p>
                </div>
              )}

              {activeView === 'feed' && (
                <div className="flex-1 flex flex-col px-4 py-6 lg:px-8">
                   <div className="max-w-4xl mx-auto w-full">
                      <SearchFilterBar 
                        onFilterChange={handleFilterChange} 
                        onSaveSearch={handleSaveSearch}
                        isLoggedIn={!!user}
                        language={language}
                        onEnableLocation={handleEnableLocation}
                        locationEnabled={locationEnabled}
                        viewMode={viewMode}
                        onViewChange={setViewMode}
                      />
                      
                      {viewMode === 'calendar' ? (
                        <div className="mb-10">
                          <CalendarView 
                            events={sortedPosts}
                            onAuthRequired={openAuth}
                            onZborClick={handleZborClick}
                            followedZborIds={followedZborIds}
                            onToggleFollow={toggleFollow}
                            language={language}
                            locationEnabled={locationEnabled}
                          />
                        </div>
                      ) : (
                        <>
                          <div className="mb-10">
                            <div className="flex items-center justify-between mb-6">
                              <h2 className="text-lg lg:text-xl font-bold text-foreground uppercase tracking-wider flex items-center gap-3">
                                <CalendarIcon className="text-[22px]" />
                                {filters.sort === 'closest' && locationEnabled ? t('Најближи догађаји') : t('Новији догађаји')}
                              </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                              {events.map(post => (
                                <PostCard 
                                  key={post.id} 
                                  post={post} 
                                  onAuthRequired={openAuth} 
                                  onZborClick={handleZborClick}
                                  isFollowed={followedZborIds.includes(post.zbor.id)}
                                  onToggleFollow={toggleFollow}
                                  language={language}
                                  showDistance={locationEnabled}
                                />
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <h2 className="text-lg lg:text-xl font-bold text-foreground uppercase tracking-wider flex items-center gap-3">
                                <MegaphoneIcon className="text-[22px]" />
                                {filters.sort === 'closest' && locationEnabled ? t('Најближе објаве') : t('Новије објаве')}
                              </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                              {regularPosts.map(post => (
                                <PostCard 
                                  key={post.id} 
                                  post={post} 
                                  onAuthRequired={openAuth} 
                                  onZborClick={handleZborClick}
                                  isFollowed={followedZborIds.includes(post.zbor.id)}
                                  onToggleFollow={toggleFollow}
                                  language={language}
                                  showDistance={locationEnabled}
                                />
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                   </div>
                </div>
              )}

              {activeView === 'map' && (
                <div className="h-full flex flex-col relative bg-slate-100 min-h-[500px]">
                    <MapComponent 
                      zborovi={sortedZborovi} 
                      posts={posts.length > 0 ? posts : MOCK_POSTS} 
                      onZborClick={handleZborClick}
                      onPostClick={(post) => handleZborClick(post.zbor)}
                      language={language}
                    />
                </div>
              )}

              {activeView === 'zborovi' && (
                <div className="flex-1 px-4 py-6 lg:px-8 max-w-5xl mx-auto w-full">
                    <SearchFilterBar 
                      onFilterChange={handleFilterChange} 
                      onSaveSearch={handleSaveSearch}
                      isLoggedIn={!!user}
                      language={language}
                      onEnableLocation={handleEnableLocation}
                      locationEnabled={locationEnabled}
                      viewMode={viewMode}
                      onViewChange={setViewMode}
                      showDateFilter={false}
                      showTypeFilter={false}
                      showViewToggle={false}
                    />
                    <h2 className="text-2xl font-bold text-foreground mb-8">
                      {locationEnabled ? t('Најближи зборови вама') : t('Истражите зборове')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {sortedZborovi.map(zbor => (
                        <ZborCard 
                          key={zbor.id} 
                          zbor={zbor} 
                          onZborClick={handleZborClick}
                          isFollowed={followedZborIds.includes(zbor.id)}
                          onToggleFollow={toggleFollow}
                          language={language}
                          showDistance={locationEnabled}
                        />
                      ))}
                    </div>
                </div>
              )}

              {activeView === 'notifications' && (
                <NotificationsView 
                  notifications={MOCK_NOTIFICATIONS} 
                  followedIds={followedZborIds} 
                  onZborClick={handleZborIdClick}
                  t={t}
                />
              )}

              {activeView === 'zbor-detail' && selectedZbor && (
                <ZborDetailPage 
                  zbor={selectedZbor} 
                  posts={posts.length > 0 ? posts : MOCK_POSTS}
                  onBack={() => setActiveView('feed')} 
                  onAuthRequired={openAuth}
                  isFollowed={followedZborIds.includes(selectedZbor.id)}
                  onToggleFollow={toggleFollow}
                  language={language}
                  showDistance={locationEnabled}
                />
              )}
              
              {activeView === 'about' && <Onama />}
              {activeView === 'privacy' && <PolitikaPrivatnosti />}
              {activeView === 'terms' && <UsloviKoriscenja />}
              {activeView === 'profile' && (
                <ProfileView 
                  user={user} 
                  followedZborovi={sortedZborovi.filter(z => followedZborIds.includes(z.id))}
                  onZborClick={handleZborClick}
                  t={t}
                />
              )}
            </div>
            
            {activeView !== 'map' && (
              <div className="shrink-0 z-10 relative">
                <Footer 
                  onNavigate={(view) => {
                    if (view === 'home') setActiveView('feed');
                    else setActiveView(view);
                  }} 
                  onRegister={openRegister} 
                />
              </div>
            )}
            
            {/* Mobile bottom spacer for nav */}
            <div className="h-[100px] lg:hidden shrink-0" />
          </div>

          {/* Desktop Right Sidebar (Trends/Suggestions) */}
          <aside className="hidden xl:flex flex-col w-80 bg-background border-l border-accent p-6 shrink-0 overflow-y-auto">
             <div className="bg-white rounded-2xl p-5 border border-accent shadow-sm mb-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                   <MegaphoneIcon className="text-[18px] text-primary" />
                   {t('Актуелно у Београду')}
                </h3>
                <div className="space-y-4">
                   <div className="cursor-pointer group">
                      <p className="text-[10px] font-bold text-foreground/70 uppercase mb-0.5 group-hover:text-primary">#екологија</p>
                      <p className="text-sm font-bold text-foreground leading-tight">Протест против сече дрвећа у Његошевој</p>
                   </div>
                   <div className="cursor-pointer group">
                      <p className="text-[10px] font-bold text-foreground/70 uppercase mb-0.5 group-hover:text-primary">#инфраструктура</p>
                      <p className="text-sm font-bold text-foreground leading-tight">Нова расвета у Устаничкој улици</p>
                   </div>
                   <div className="cursor-pointer group">
                      <p className="text-[10px] font-bold text-foreground/70 uppercase mb-0.5 group-hover:text-primary">#заједница</p>
                      <p className="text-sm font-bold text-foreground leading-tight">Акција чишћења Чубурског парка</p>
                   </div>
                </div>
             </div>

             <div className="bg-primary rounded-2xl p-6 text-primary-foreground shadow-lg shadow-primary/20">
                <h3 className="font-bold text-lg mb-2">{t('Региструјте свој збор')}</h3>
                <p className="text-xs text-primary-foreground/80 leading-relaxed mb-4">
                   {t('Ваш збор је одлучио да користи ову платформу? Региструјте га овде. Верификујемо све који су стали уз студенте.')}
                </p>
                <button 
                  onClick={openRegister}
                  className="w-full bg-background text-primary py-2.5 rounded-xl text-xs font-bold hover:bg-accent transition-colors"
                >
                   {t('Региструј збор')}
                </button>
             </div>
          </aside>
        </div>

        {/* Mobile Bottom Nav (Visible on Mobile Only) */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white border-t border-accent px-2 pt-3 pb-6 flex items-center justify-around z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] h-[80px]">
          <button 
            onClick={() => setActiveView('feed')}
            className={`flex flex-col items-center gap-1 transition-all min-w-[60px] ${activeView === 'feed' ? 'text-primary' : 'text-foreground/70'}`}
          >
            <HouseIcon className="text-[24px]" strokeWidth={activeView === 'feed' ? 1.5 : 1} />
            <span className="text-[10px] font-bold uppercase tracking-tight">{t('Почетна')}</span>
          </button>
          <button 
            onClick={() => setActiveView('map')}
            className={`flex flex-col items-center gap-1 transition-all min-w-[60px] ${activeView === 'map' ? 'text-primary' : 'text-foreground/70'}`}
          >
            <LocationPinIcon className="text-[24px]" strokeWidth={activeView === 'map' ? 1.5 : 1} />
            <span className="text-[10px] font-bold uppercase tracking-tight">{t('Мапа')}</span>
          </button>
          <button 
            onClick={() => setActiveView('zborovi')}
            className={`flex flex-col items-center gap-1 transition-all min-w-[60px] ${activeView === 'zborovi' ? 'text-primary' : 'text-foreground/70'}`}
          >
            <CompassIcon className="text-[24px]" strokeWidth={activeView === 'zborovi' ? 1.5 : 1} />
            <span className="text-[10px] font-bold uppercase tracking-tight">{t('Зборови')}</span>
          </button>
          <button 
            onClick={() => setActiveView('notifications')}
            className={`flex flex-col items-center gap-1 relative transition-all min-w-[60px] ${activeView === 'notifications' ? 'text-primary' : 'text-foreground/70'}`}
          >
            <div className="relative">
              <BellIcon className="text-[24px]" strokeWidth={activeView === 'notifications' ? 1.5 : 1} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 size-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {unreadCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tight">{t('Обавештења')}</span>
          </button>
          <button 
             onClick={() => setActiveView('profile')}
             className={`flex flex-col items-center gap-1 transition-all min-w-[60px] ${activeView === 'profile' ? 'text-primary' : 'text-foreground/70'}`}
          >
            <PersonIcon className="text-[24px]" strokeWidth={activeView === 'profile' ? 1.5 : 1} />
            <span className="text-[10px] font-bold uppercase tracking-tight">{t('Профил')}</span>
          </button>
        </div>

      </main>
    </div>
  );
}