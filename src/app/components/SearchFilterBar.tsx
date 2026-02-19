import React, { useState, useEffect } from 'react';
import { 
  MagnifyingGlassIcon, CalendarIcon, PinIcon, TasklistIcon, FunnelIcon, BookmarkIcon, XMarkIcon, CheckmarkIcon,
  MenuGridIcon, ArrowDownIcon
} from '@navikt/aksel-icons';
import { format, isSameDay, addDays, isWithinInterval, startOfDay, endOfDay, parseISO } from 'date-fns';
import { PostData, PostType, cyrToLat } from './Cards';

export interface FilterState {
  query: string;
  dateRange: 'all' | 'today' | 'tomorrow' | 'week';
  type: 'all' | PostType;
  location: string;
  sort: 'newest' | 'oldest' | 'closest';
}

interface SearchFilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  onSaveSearch?: (filters: FilterState) => void;
  savedSearches?: FilterState[];
  isLoggedIn: boolean;
  language: 'cir' | 'lat';
  onEnableLocation?: () => void;
  locationEnabled?: boolean;
  viewMode: 'list' | 'calendar';
  onViewChange: (mode: 'list' | 'calendar') => void;
  showDateFilter?: boolean;
  showTypeFilter?: boolean;
  showViewToggle?: boolean;
}

export function SearchFilterBar({ 
  onFilterChange, 
  onSaveSearch, 
  isLoggedIn, 
  language, 
  onEnableLocation, 
  locationEnabled,
  viewMode,
  onViewChange,
  showDateFilter = true,
  showTypeFilter = true,
  showViewToggle = true
}: SearchFilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    query: '',
    dateRange: 'all',
    type: 'all',
    location: '',
    sort: 'newest'
  });
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSortExpanded, setIsSortExpanded] = useState(false);
  const isLat = language === 'lat';
  const t = (txt: string) => isLat ? cyrToLat(txt) : txt;

  // Initialize from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const newFilters: FilterState = {
      query: params.get('q') || '',
      dateRange: (params.get('date') as any) || 'all',
      type: (params.get('type') as any) || 'all',
      location: params.get('loc') || '',
      sort: (params.get('sort') as any) || 'newest'
    };
    
    // Check for view mode in URL
    const view = params.get('view');
    if (view === 'calendar' || view === 'list') {
      onViewChange(view);
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  }, []);

  // Update URL and parent when filters change
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    // Special handling for sort=closest
    if (key === 'sort' && value === 'closest') {
      if (onEnableLocation) {
        onEnableLocation();
      }
    }

    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);

    const params = new URLSearchParams(window.location.search);
    if (value && value !== 'all') {
      params.set(key === 'query' ? 'q' : key === 'dateRange' ? 'date' : key === 'location' ? 'loc' : key, value);
    } else {
      params.delete(key === 'query' ? 'q' : key === 'dateRange' ? 'date' : key === 'location' ? 'loc' : key);
    }
    
    // Preserve view param
    if (viewMode !== 'list') {
      params.set('view', viewMode);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };
  
  const handleViewChangeInternal = (mode: 'list' | 'calendar') => {
    onViewChange(mode);
    const params = new URLSearchParams(window.location.search);
    params.set('view', mode);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const clearFilters = () => {
    const defaultFilters: FilterState = {
      query: '',
      dateRange: 'all',
      type: 'all',
      location: '',
      sort: 'newest'
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
    
    // Also reset view? Maybe not.
    const params = new URLSearchParams(window.location.search);
    // Remove filter params
    ['q', 'date', 'type', 'loc', 'sort'].forEach(k => params.delete(k));
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const activeFiltersCount = (filters.dateRange !== 'all' ? 1 : 0) + (filters.type !== 'all' ? 1 : 0) + (filters.location ? 1 : 0);

  const getSortLabel = (sort: string) => {
    switch(sort) {
      case 'newest': return t('Најновије');
      case 'oldest': return t('Најстарије');
      case 'closest': return t('Најближе');
      default: return t('Најновије');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 p-4">
      {/* Search Input */}
      <div className="relative mb-4">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
        <input
          type="text"
          placeholder={t('Претражи зборове, догађаје...')}
          value={filters.query}
          onChange={(e) => handleFilterChange('query', e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-purple-500/20 text-slate-700 placeholder:text-slate-400 font-medium"
        />
      </div>

      {/* Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {/* Filter Button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-bold text-sm transition-colors border ${isExpanded || activeFiltersCount > 0 ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
          >
            <FunnelIcon className="text-lg" />
            <span className="hidden sm:inline">{t('Филтери')}</span>
            {activeFiltersCount > 0 && (
              <span className="bg-purple-600 text-white text-[10px] size-5 flex items-center justify-center rounded-full ml-1">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsSortExpanded(!isSortExpanded)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg font-bold text-sm transition-colors border bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              <ArrowDownIcon className="text-lg" />
              <span className="hidden sm:inline">{getSortLabel(filters.sort)}</span>
              {filters.sort === 'closest' && <PinIcon className="text-sm rotate-45 text-purple-600" />}
            </button>
            
            {isSortExpanded && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-20 animate-in fade-in zoom-in-95 duration-200">
                <button 
                  onClick={() => { handleFilterChange('sort', 'newest'); setIsSortExpanded(false); }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-slate-50 ${filters.sort === 'newest' ? 'text-purple-700 bg-purple-50' : 'text-slate-700'}`}
                >
                  {t('Најновије')}
                </button>
                <button 
                  onClick={() => { handleFilterChange('sort', 'oldest'); setIsSortExpanded(false); }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-slate-50 ${filters.sort === 'oldest' ? 'text-purple-700 bg-purple-50' : 'text-slate-700'}`}
                >
                  {t('Најстарије')}
                </button>
                <button 
                  onClick={() => { handleFilterChange('sort', 'closest'); setIsSortExpanded(false); }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-slate-50 flex items-center justify-between ${filters.sort === 'closest' ? 'text-purple-700 bg-purple-50' : 'text-slate-700'}`}
                >
                  {t('Најближе')}
                  <PinIcon className="text-xs" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* View Toggle */}
        {showViewToggle && (
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => handleViewChangeInternal('list')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-purple-700' : 'text-slate-500 hover:text-slate-700'}`}
              title={t('Листа')}
            >
              <TasklistIcon className="text-lg" />
              <span className="hidden sm:inline">{t('Листа')}</span>
            </button>
            <button
              onClick={() => handleViewChangeInternal('calendar')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'calendar' ? 'bg-white shadow-sm text-purple-700' : 'text-slate-500 hover:text-slate-700'}`}
              title={t('Календар')}
            >
              <CalendarIcon className="text-lg" />
              <span className="hidden sm:inline">{t('Календар')}</span>
            </button>
          </div>
        )}
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Date Filter */}
          {showDateFilter && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <CalendarIcon className="text-sm" /> {t('Датум')}
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: t('Све') },
                  { id: 'today', label: t('Данас') },
                  { id: 'tomorrow', label: t('Сутра') },
                  { id: 'week', label: t('Ове недеље') }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleFilterChange('dateRange', opt.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${filters.dateRange === opt.id ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Type Filter */}
          {showTypeFilter && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <TasklistIcon className="text-sm" /> {t('Тип')}
              </label>
              <select 
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="all">{t('Сви типови')}</option>
                <option value="dogadjaj">{t('Догађај')}</option>
                <option value="protestna_setnja">{t('Протестна шетња')}</option>
                <option value="objava">{t('Објава')}</option>
              </select>
            </div>
          )}

          {/* Location Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <PinIcon className="text-sm" /> {t('Локација')}
            </label>
            <div className="relative">
              <PinIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder={t('Унесите град или општину...')}
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Summary */}
      {activeFiltersCount > 0 && !isExpanded && (
        <div className="mt-3 flex flex-wrap gap-2">
          {filters.dateRange !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-purple-50 text-purple-700 text-xs font-bold">
              {filters.dateRange === 'today' ? t('Данас') : filters.dateRange === 'tomorrow' ? t('Сутра') : t('Ове недеље')}
              <button onClick={() => handleFilterChange('dateRange', 'all')}><XMarkIcon className="text-sm" /></button>
            </span>
          )}
          {filters.type !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-purple-50 text-purple-700 text-xs font-bold">
              {filters.type === 'dogadjaj' ? t('Догађај') : filters.type === 'protestna_setnja' ? t('Протест') : t('Објава')}
              <button onClick={() => handleFilterChange('type', 'all')}><XMarkIcon className="text-sm" /></button>
            </span>
          )}
          {filters.location && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-purple-50 text-purple-700 text-xs font-bold">
              {filters.location}
              <button onClick={() => handleFilterChange('location', '')}><XMarkIcon className="text-sm" /></button>
            </span>
          )}
          <button onClick={clearFilters} className="text-xs text-slate-500 underline hover:text-slate-700 ml-1">
            {t('Очисти све')}
          </button>
        </div>
      )}
    </div>
  );
}
