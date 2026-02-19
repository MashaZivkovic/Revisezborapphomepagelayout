import React, { useState, useMemo } from 'react';
import { Calendar } from './ui/calendar';
import { PostData, PostCard, cyrToLat, ZborData } from './Cards';
import { isSameDay, parseISO, startOfDay, format } from 'date-fns';
import { srLatn, srCyrl } from 'date-fns/locale';

interface CalendarViewProps {
  events: PostData[];
  onAuthRequired: () => void;
  onZborClick: (zbor: ZborData) => void;
  followedZborIds: string[];
  onToggleFollow: (id: string) => void;
  language: 'cir' | 'lat';
  locationEnabled?: boolean;
}

export function CalendarView({
  events,
  onAuthRequired,
  onZborClick,
  followedZborIds,
  onToggleFollow,
  language,
  locationEnabled
}: CalendarViewProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const isLat = language === 'lat';
  const t = (txt: string) => isLat ? cyrToLat(txt) : txt;
  
  // Filter only event type posts and parse their dates
  const eventPosts = useMemo(() => {
    return events.filter(p => p.type === 'dogadjaj' || p.type === 'protestna_setnja');
  }, [events]);

  // Group events by date for the calendar modifiers
  const eventDates = useMemo(() => {
    return eventPosts.map(p => {
        if (p.eventDate) return parseISO(p.eventDate);
        if (p.eventInfo?.startTime) return parseISO(p.eventInfo.startTime);
        if (p.createdAt) return parseISO(p.createdAt);
        return new Date();
    });
  }, [eventPosts]);

  const selectedDateEvents = useMemo(() => {
    if (!date) return [];
    return eventPosts.filter(p => {
      const pDate = p.eventDate ? parseISO(p.eventDate) : 
                   (p.eventInfo?.startTime ? parseISO(p.eventInfo.startTime) : 
                   (p.createdAt ? parseISO(p.createdAt) : new Date()));
      return isSameDay(pDate, date);
    });
  }, [date, eventPosts]);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          modifiers={{
            hasEvent: eventDates
          }}
          modifiersClassNames={{
            hasEvent: "bg-purple-100 font-bold text-purple-700 hover:bg-purple-200"
          }}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          {date ? (
            <>
              <span className="capitalize">
                {format(date, 'EEEE, d. MMMM', { locale: isLat ? srLatn : undefined })} 
                {/* Fallback for cyrillic locale if not available or just use text replacement */}
                {!isLat && ` (${t(format(date, 'EEEE, d. MMMM'))})`}
              </span>
              <span className="text-sm font-normal text-slate-500 ml-2">
                ({selectedDateEvents.length} {t('догађаја')})
              </span>
            </>
          ) : (
            t('Изаберите датум')
          )}
        </h3>

        {selectedDateEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {selectedDateEvents.map(post => (
              <PostCard 
                key={post.id} 
                post={post} 
                onAuthRequired={onAuthRequired} 
                onZborClick={onZborClick}
                isFollowed={followedZborIds.includes(post.zbor.id)}
                onToggleFollow={onToggleFollow}
                language={language}
                showDistance={locationEnabled}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <p className="text-slate-500">{t('Нема догађаја за изабрани датум.')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
