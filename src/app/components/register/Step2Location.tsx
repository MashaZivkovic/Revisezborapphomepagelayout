import React, { useState, useEffect, useRef } from 'react';
import { RegisterFormData, MesnaZajednica } from './types';
import { MagnifyingGlassIcon, XMarkIcon, InformationIcon } from '@navikt/aksel-icons';
import { toast } from 'sonner';

interface Step2LocationProps {
  formData: RegisterFormData;
  updateFormData: (data: Partial<RegisterFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  t: (s: string) => string;
}

const MOCK_MESNE_ZAJEDNICE: MesnaZajednica[] = [
  { id: 1, name: 'Vračar', opstina: 'Vračar', grad: 'Beograd', lat: 44.7981, lon: 20.4716, osm_id: 'm1' },
  { id: 2, name: 'Stari Grad', opstina: 'Stari Grad', grad: 'Beograd', lat: 44.8178, lon: 20.4570, osm_id: 'm2' },
  { id: 3, name: 'Novi Beograd', opstina: 'Novi Beograd', grad: 'Beograd', lat: 44.8152, lon: 20.4208, osm_id: 'm3' },
  { id: 4, name: 'Zemun', opstina: 'Zemun', grad: 'Beograd', lat: 44.8436, lon: 20.4005, osm_id: 'm4' },
  { id: 5, name: 'Palilula', opstina: 'Palilula', grad: 'Beograd', lat: 44.8158, lon: 20.4735, osm_id: 'm5' },
  { id: 6, name: 'Voždovac', opstina: 'Voždovac', grad: 'Beograd', lat: 44.7770, lon: 20.4764, osm_id: 'm6' },
  { id: 7, name: 'Liman 1', opstina: 'Novi Sad', grad: 'Novi Sad', lat: 45.2441, lon: 19.8435, osm_id: 'm7' },
  { id: 8, name: 'Liman 2', opstina: 'Novi Sad', grad: 'Novi Sad', lat: 45.2400, lon: 19.8390, osm_id: 'm8' },
  { id: 9, name: 'Liman 3', opstina: 'Novi Sad', grad: 'Novi Sad', lat: 45.2360, lon: 19.8350, osm_id: 'm9' },
  { id: 10, name: 'Liman 4', opstina: 'Novi Sad', grad: 'Novi Sad', lat: 45.2320, lon: 19.8300, osm_id: 'm10' },
  { id: 11, name: 'Medijana', opstina: 'Medijana', grad: 'Niš', lat: 43.3225, lon: 21.9033, osm_id: 'm11' },
  { id: 12, name: 'Palilula (Niš)', opstina: 'Palilula', grad: 'Niš', lat: 43.3100, lon: 21.8900, osm_id: 'm12' },
  { id: 13, name: 'Aerodrom', opstina: 'Aerodrom', grad: 'Kragujevac', lat: 44.0200, lon: 20.9200, osm_id: 'm13' },
  { id: 14, name: 'Stari Grad (Kragujevac)', opstina: 'Stari Grad', grad: 'Kragujevac', lat: 44.0100, lon: 20.9100, osm_id: 'm14' },
];

export function Step2Location({ formData, updateFormData, onNext, onBack, t }: Step2LocationProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MesnaZajednica[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length < 2) {
        setResults([]);
        setShowDropdown(false);
        return;
      }

      setLoading(true);
      // Mock search instead of Supabase query
      const filtered = MOCK_MESNE_ZAJEDNICE.filter(mz => 
        mz.name.toLowerCase().includes(query.toLowerCase()) || 
        mz.grad.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filtered);
      setShowDropdown(true);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (mz: MesnaZajednica) => {
    if (formData.mesneZajednice.some((item) => item.id === mz.id)) {
      toast.info(t('Ова месна заједница је већ изабрана.'));
      setQuery('');
      setShowDropdown(false);
      return;
    }
    updateFormData({
      mesneZajednice: [...formData.mesneZajednice, mz],
    });
    setQuery('');
    setShowDropdown(false);
  };

  const handleRemove = (id: number) => {
    updateFormData({
      mesneZajednice: formData.mesneZajednice.filter((item) => item.id !== id),
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-1">
        <div className="mb-6">
           <div className="flex justify-between items-center mb-2">
            <label className="block text-[16px] text-foreground font-normal leading-[20px]">
              {t('Локација')}*
            </label>
            <InformationIcon className="text-primary text-[24px]" title={t('Одаберите месне заједнице које ваш збор покрива')} />
          </div>

          <div className="relative" ref={dropdownRef}>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('Нпр. Врачар, Београд, Србија')}
                className="w-full bg-background border border-primary rounded-lg py-3 pl-4 pr-10 text-[16px] text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                {loading ? (
                  <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                ) : (
                  <MagnifyingGlassIcon className="text-[20px]" />
                )}
              </div>
            </div>

            {showDropdown && results.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {results.map((mz) => (
                  <button
                    key={mz.id}
                    onClick={() => handleSelect(mz)}
                    className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b last:border-0 border-border flex flex-col"
                  >
                    <span className="font-bold text-foreground">{mz.name}</span>
                    <span className="text-xs text-muted-foreground">{mz.opstina}, {mz.grad}</span>
                  </button>
                ))}
              </div>
            )}
            
            {showDropdown && query.length >= 2 && results.length === 0 && !loading && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-border rounded-lg shadow-lg p-4 text-center text-muted-foreground">
                {t('Нема резултата.')}
              </div>
            )}
          </div>

          {/* Selected Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {formData.mesneZajednice.map((mz) => (
              <div
                key={mz.id}
                className="flex items-center gap-2 bg-accent text-primary px-3 py-1.5 rounded-full border border-primary/20 animate-in fade-in zoom-in duration-200"
              >
                <span className="text-sm font-medium">{mz.name}</span>
                <button
                  onClick={() => handleRemove(mz.id)}
                  className="hover:bg-primary/10 rounded-full p-0.5 transition-colors"
                >
                  <XMarkIcon className="text-[16px]" />
                </button>
              </div>
            ))}
          </div>
          
          {formData.mesneZajednice.length === 0 && (
            <p className="mt-2 text-xs text-muted-foreground">
              {t('Претражите и додајте бар једну месну заједницу.')}
            </p>
          )}
        </div>
      </div>

      <div className="mt-auto pt-6 flex gap-3 border-t border-accent">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 rounded-xl font-bold text-sm text-muted-foreground bg-card hover:bg-accent transition-colors"
        >
          {t('Назад')}
        </button>
        <button
          onClick={onNext}
          disabled={formData.mesneZajednice.length === 0}
          className="flex-2 bg-primary text-primary-foreground py-3.5 px-8 rounded-xl font-bold text-sm shadow-lg disabled:opacity-50 hover:bg-primary/90 transition-colors"
        >
          {t('Даље')}
        </button>
      </div>
    </div>
  );
}