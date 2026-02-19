import React from 'react';
import { 
  HeartIcon, ChatIcon, ExternalLinkIcon, PinIcon, PersonGroupIcon, CalendarIcon, MegaphoneIcon, 
  CheckmarkCircleIcon, PlusIcon, MenuElipsisHorizontalIcon, PersonCheckmarkIcon, 
  XMarkIcon, ClockIcon, ExclamationmarkTriangleIcon
} from '@navikt/aksel-icons';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner';
import { ReportCommentModal } from './ReportCommentModal';

// Primary color: #4F378A
const PRIMARY_COLOR = '#4F378A';

export interface ZborData {
  id: string;
  name: string;
  avatar: string;
  location: string;
  distance?: number; // Distance in km
  description: string;
  stats: {
    members: number;
    posts: number;
    events: number;
  };
}

export type PostType = 'objava' | 'dogadjaj' | 'protestna_setnja';

export interface PostData {
  id: string;
  type: PostType;
  zbor: ZborData;
  timestamp: string;
  title: string;
  body?: string;
  image?: string;
  tags?: string[];
  likes: number;
  comments: number;
  commentsList?: { id: string, author: string, text: string, time: string }[];
  attendees?: number; // Number of people attending the event
  createdAt?: string; // ISO string for sorting/filtering
  eventDate?: string; // ISO string for event filtering
  eventInfo?: {
    location: string; // Start location
    startTime: string; // Start datetime
    endTime?: string;  // End datetime (or time)
    endLocation?: string; // End location (for protests)
  };
}

// Cyrillic to Latin conversion helper
export const cyrToLat = (text: string): string => {
  const map: { [key: string]: string } = {
    'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g', 'Д': 'D', 'д': 'd',
    'Ђ': 'Đ', 'ђ': 'đ', 'Е': 'E', 'е': 'e', 'Ж': 'Ž', 'ж': 'ž', 'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i',
    'Ј': 'J', 'ј': 'j', 'К': 'K', 'к': 'k', 'Л': 'L', 'л': 'l', 'Љ': 'Lj', 'љ': 'lj', 'М': 'M', 'м': 'm',
    'Н': 'N', 'н': 'n', 'Њ': 'Nj', 'њ': 'nj', 'О': 'O', 'о': 'o', 'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r',
    'С': 'S', 'с': 's', 'Т': 'T', 'т': 't', 'Ћ': 'Ć', 'ћ': 'ć', 'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f',
    'Х': 'H', 'х': 'h', 'Ц': 'C', 'ц': 'c', 'Ч': 'Č', 'ч': 'č', 'Џ': 'Dž', 'џ': 'dž', 'Ш': 'Š', 'ш': 'š'
  };
  return text.split('').map(char => map[char] || char).join('');
};

export function TypeBadge({ type, isLat }: { type: PostType, isLat: boolean }) {
  let bgColor = '#e65100'; 
  let label = isLat ? 'OBJAVA' : 'ОБЈАВА';
  
  if (type === 'dogadjaj') {
    bgColor = '#166244'; 
    label = isLat ? 'DOGAĐAJ' : 'ДОГАЂАЈ';
  } else if (type === 'protestna_setnja') {
    bgColor = '#bd0000'; 
    label = isLat ? 'PROTESTNA ŠETNJA' : 'ПРОТЕСТНА ШЕТЊА';
  }

  return (
    <div 
      className="px-2 py-0.5 rounded text-[10px] font-bold text-white tracking-wider font-['Noto_Sans']"
      style={{ backgroundColor: bgColor }}
    >
      {label}
    </div>
  );
}

export function ActionButton({ icon: Icon, count, onClick }: { icon: any, count?: number, onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-1.5 text-[#575168] hover:text-primary transition-colors">
      <Icon className="text-[18px]" />
      {count !== undefined && <span className="text-sm font-medium">{count}</span>}
    </button>
  );
}

export function PostCard({ 
  post, 
  onAuthRequired, 
  onZborClick, 
  isFollowed, 
  onToggleFollow,
  language,
  showDistance
}: { 
  post: PostData, 
  onAuthRequired: () => void, 
  onZborClick?: (zbor: ZborData) => void,
  isFollowed: boolean,
  onToggleFollow: (id: string) => void,
  language: 'cir' | 'lat',
  showDistance?: boolean
}) {
  const isLat = language === 'lat';
  const t = (txt: string) => isLat ? cyrToLat(txt) : txt;
  const isEvent = post.type === 'dogadjaj' || post.type === 'protestna_setnja';
  const isProtest = post.type === 'protestna_setnja';
  const [showComments, setShowComments] = React.useState(false);
  const [reportCommentId, setReportCommentId] = React.useState<string | null>(null);

  const handleCommentsClick = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setShowComments(!showComments);
  };

  const mockComments = (post.commentsList || [
    { id: 'c1', author: 'Марко Марковић', text: 'Свака част на иницијативи!', time: 'пре 10 мин' },
    { id: 'c2', author: 'Јелена Јовановић', text: 'Видимо се тамо!', time: 'пре 20 мин' }
  ]).map(c => ({...c, text: t(c.text), author: t(c.author), time: t(c.time)}));

  const handleReportComment = (commentId: string) => {
    setReportCommentId(commentId);
  };
  
  const handleReportSubmit = (reason: string) => {
    // Here we would send the report to the backend
    console.log(`Reporting comment ${reportCommentId} for reason: ${reason}`);
    toast.success(t('Коментар је успешно пријављен. Хвала вам што помажете да одржимо заједницу сигурном.'));
    setReportCommentId(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] overflow-hidden mb-4 border border-border font-['Noto_Sans']">
      <ReportCommentModal 
        isOpen={!!reportCommentId}
        onClose={() => setReportCommentId(null)}
        onSubmit={handleReportSubmit}
        t={t}
      />
      <div className="px-4 pt-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <TypeBadge type={post.type} isLat={isLat} />
           {isFollowed && (
             <span className="flex items-center gap-1 text-[9px] font-bold text-primary bg-accent px-1.5 py-0.5 rounded">
                <PersonCheckmarkIcon className="text-[10px]" />
                {t('ПРАТИТЕ')}
             </span>
           )}
           {showDistance && post.zbor.distance !== undefined && (
             <span className="flex items-center gap-1 text-[9px] font-bold text-[#166244] bg-[#e8f5e9] px-1.5 py-0.5 rounded">
                <PinIcon className="text-[10px] rotate-45" />
                {post.zbor.distance} km
             </span>
           )}
        </div>
        <span className="text-[11px] text-[#575168] font-medium">{t(post.timestamp)}</span>
      </div>

      <div className="flex items-center gap-3 p-4 pt-2">
        <div className="size-10 rounded-full overflow-hidden flex-shrink-0 bg-accent cursor-pointer" onClick={() => onZborClick?.(post.zbor)}>
          <ImageWithFallback src={post.zbor.avatar} alt={post.zbor.name} className="size-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground truncate leading-tight hover:text-primary transition-colors cursor-pointer" onClick={() => onZborClick?.(post.zbor)}>
              {t(post.zbor.name)}
            </h3>
            <button 
              onClick={() => onToggleFollow(post.zbor.id)}
              className={`text-[10px] font-bold px-2 py-1 rounded transition-colors ${isFollowed ? 'text-red-600 bg-red-50 hover:bg-red-100' : 'text-primary bg-accent hover:bg-primary hover:text-white'}`}
            >
              {isFollowed ? t('ОТПРАТИ') : t('ЗАПРАТИ')}
            </button>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#575168] mt-0.5">
            <PinIcon className="text-[10px]" />
            <span className="truncate">{t(post.zbor.location)}</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-2">
        <h4 className="text-base font-bold text-foreground mb-2 leading-snug">
          {t(post.title)}
        </h4>
        
        {post.image && (
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-3 border border-border relative group cursor-pointer">
             <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
          </div>
        )}

        {isEvent && post.eventInfo ? (
          <div className="bg-card rounded-lg border border-accent overflow-hidden mb-3">
             {isProtest ? (
               <div className="grid grid-cols-2 divide-x divide-accent">
                  <div className="p-3">
                     <div className="flex items-center gap-1.5 mb-2 text-primary">
                        <span className="text-[10px] font-bold uppercase tracking-wider">{t('ПОЧЕТАК')}</span>
                     </div>
                     <div className="flex flex-col gap-1.5">
                        <div className="flex items-start gap-1.5">
                           <PinIcon className="text-[12px] text-foreground/70 mt-0.5 shrink-0" />
                           <span className="text-xs font-bold text-foreground leading-tight">{t(post.eventInfo.location)}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                           <CalendarIcon className="text-[12px] text-foreground/70 mt-0.5 shrink-0" />
                           <span className="text-xs text-foreground/80 leading-tight">{t(post.eventInfo.startTime)}</span>
                        </div>
                     </div>
                  </div>
                  <div className="p-3 bg-accent/30">
                     <div className="flex items-center gap-1.5 mb-2 text-primary">
                        <span className="text-[10px] font-bold uppercase tracking-wider">{t('КРАЈ')}</span>
                     </div>
                     <div className="flex flex-col gap-1.5">
                        <div className="flex items-start gap-1.5">
                           <PinIcon className="text-[12px] text-foreground/70 mt-0.5 shrink-0" />
                           <span className="text-xs font-bold text-foreground leading-tight">{t(post.eventInfo.endLocation || post.eventInfo.location)}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                           <ClockIcon className="text-[12px] text-foreground/70 mt-0.5 shrink-0" />
                           <span className="text-xs text-foreground/80 leading-tight">{t(post.eventInfo.endTime || '')}</span>
                        </div>
                     </div>
                  </div>
               </div>
             ) : (
               <div className="p-3">
                 <div className="flex items-start gap-2 mb-2">
                   <PinIcon className="text-[16px] text-primary shrink-0 mt-0.5" />
                   <div className="flex flex-col">
                      <span className="text-[10px] text-primary font-bold uppercase tracking-wider mb-0.5">{t('Локација')}</span>
                      <span className="text-sm text-[#383838] font-medium">{t(post.eventInfo.location)}</span>
                   </div>
                 </div>
                 <div className="flex items-start gap-2">
                   <CalendarIcon className="text-[16px] text-primary shrink-0 mt-0.5" />
                   <div className="flex flex-col">
                      <span className="text-[10px] text-primary font-bold uppercase tracking-wider mb-0.5">{t('Време')}</span>
                      <span className="text-sm text-[#383838] font-medium">
                         {t(post.eventInfo.startTime)}
                         {post.eventInfo.endTime && ` - ${t(post.eventInfo.endTime)}`}
                      </span>
                   </div>
                 </div>
               </div>
             )}
          </div>
        ) : (
          post.body && (
            <p className="text-sm text-[#383838] mb-3 leading-relaxed">
              {t(post.body)}
            </p>
          )
        )}
      </div>

      <div className="border-t border-[#f4f1f5]">
        <div className={`flex items-center justify-between px-4 py-3 ${isEvent ? 'pb-2' : ''}`}>
          <div className="flex items-center gap-6">
            <ActionButton icon={HeartIcon} count={post.likes} onClick={onAuthRequired} />
            <ActionButton icon={ChatIcon} count={post.comments} onClick={handleCommentsClick} />
            <ActionButton icon={ExternalLinkIcon} />
          </div>
          
          {!isEvent && (
            <button className="text-[11px] font-bold text-primary uppercase tracking-wider">
               {t('Прочитај више')}
            </button>
          )}

          {isEvent && post.attendees !== undefined && (
            <div className="flex items-center gap-1.5 text-[#575168] bg-slate-50 px-2 py-1 rounded-md">
              <PersonGroupIcon className="text-[16px]" />
              <span className="text-xs font-bold">{post.attendees}</span>
              <span className="text-[10px] uppercase tracking-wider font-bold hidden sm:inline">{t('ДОЛАЗИ')}</span>
            </div>
          )}
        </div>

        {isEvent && (
          <div className="px-4 pb-3">
             <button onClick={onAuthRequired} className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-[#3d2a6a] transition-colors shadow-sm">
               <CheckmarkCircleIcon className="text-[18px]" />
               {t('Придружи се')}
             </button>
          </div>
        )}
      </div>

      {showComments && (
        <div className="bg-slate-50 border-t border-slate-100 p-4 animate-in slide-in-from-top-2 duration-200">
           <h5 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">{t('Коментари')} ({post.comments || mockComments.length})</h5>
           <div className="space-y-4 mb-4">
              {mockComments.map(comment => (
                <div key={comment.id} className="flex gap-2">
                   <div className="size-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                      {comment.author.charAt(0)}
                   </div>
                   <div className="flex-1">
                      <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                         <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold text-foreground">{comment.author}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-slate-400">{comment.time}</span>
                              <button 
                                onClick={() => handleReportComment(comment.id)} 
                                className="text-slate-300 hover:text-red-500 transition-colors"
                                title={t('Пријави коментар')}
                              >
                                <ExclamationmarkTriangleIcon className="text-[14px]" />
                              </button>
                            </div>
                         </div>
                         <p className="text-xs text-slate-700 leading-relaxed">{comment.text}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
           <button 
             onClick={onAuthRequired}
             className="w-full py-2 bg-white border border-dashed border-slate-300 rounded-lg text-xs font-medium text-slate-500 hover:text-primary hover:border-primary transition-colors"
           >
             {t('Пријави се да би коментарисао')}
           </button>
        </div>
      )}
    </div>
  );
}

export function ZborCard({ 
  zbor, 
  onZborClick, 
  isFollowed, 
  onToggleFollow,
  language,
  showDistance
}: { 
  zbor: ZborData, 
  onZborClick?: (zbor: ZborData) => void,
  isFollowed: boolean,
  onToggleFollow: (id: string) => void,
  language: 'cir' | 'lat',
  showDistance?: boolean
}) {
  const isLat = language === 'lat';
  const t = (txt: string) => isLat ? cyrToLat(txt) : txt;

  return (
    <div 
      className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] overflow-hidden mb-4 border border-border font-['Noto_Sans'] cursor-pointer hover:border-primary transition-all relative"
      onClick={() => onZborClick?.(zbor)}
    >
      <div className="absolute top-0 right-0 p-2 flex flex-col items-end gap-1">
         {isFollowed && (
           <span className="flex items-center gap-1 text-[9px] font-bold text-white bg-primary px-2 py-1 rounded-bl-lg rounded-tr-lg">
              <PersonCheckmarkIcon className="text-[10px]" />
              {t('ПРАТИТЕ')}
           </span>
         )}
         {showDistance && zbor.distance !== undefined && (
           <span className="flex items-center gap-1 text-[9px] font-bold text-[#166244] bg-[#e8f5e9] px-2 py-1 rounded-bl-lg">
              <PinIcon className="text-[10px] rotate-45" />
              {zbor.distance} km
           </span>
         )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="size-12 rounded-full overflow-hidden flex-shrink-0 bg-accent border border-muted">
            <ImageWithFallback src={zbor.avatar} alt={zbor.name} className="size-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-foreground truncate">
              {t(zbor.name)}
            </h3>
            <div className="flex items-center gap-1 text-xs text-[#575168]">
              <PinIcon className="text-[12px]" />
              <span className="truncate">{t(zbor.location)}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#383838] line-clamp-2 mb-4 leading-relaxed">
          {t(zbor.description)}
        </p>

        <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#f4f1f5] mb-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-primary mb-0.5">
              <PersonGroupIcon className="text-[14px]" />
              <span className="text-sm font-bold">{zbor.stats.members}</span>
            </div>
            <span className="text-[9px] text-[#575168] uppercase tracking-wider font-bold">{t('Чланова')}</span>
          </div>
          <div className="flex flex-col items-center border-x border-[#f4f1f5]">
            <div className="flex items-center gap-1 text-primary mb-0.5">
              <MegaphoneIcon className="text-[14px]" />
              <span className="text-sm font-bold">{zbor.stats.posts}</span>
            </div>
            <span className="text-[9px] text-[#575168] uppercase tracking-wider font-bold">{t('Објава')}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-primary mb-0.5">
              <CalendarIcon className="text-[14px]" />
              <span className="text-sm font-bold">{zbor.stats.events}</span>
            </div>
            <span className="text-[9px] text-[#575168] uppercase tracking-wider font-bold">{t('Догађаја')}</span>
          </div>
        </div>

        <button 
          className={`w-full flex items-center justify-center gap-2 border-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${isFollowed ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' : 'bg-white border-primary text-primary hover:bg-accent'}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFollow(zbor.id);
          }}
        >
          {isFollowed ? <XMarkIcon className="text-[18px]" /> : <PlusIcon className="text-[18px]" />}
          {isFollowed ? t('Откажи праћење') : t('Придружи се збору')}
        </button>
      </div>
    </div>
  );
}
