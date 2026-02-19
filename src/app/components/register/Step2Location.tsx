import React, { useState, useEffect, useRef } from 'react';
import { RegisterFormData, MesnaZajednica } from './types';
import { MagnifyingGlassIcon, XMarkIcon, InformationIcon } from '@navikt/aksel-icons';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const SERVER_URL = `https://${projectId}.supabase.co/functions/v1/make-server-e535a4b3`;

interface Step2LocationProps {
  formData: RegisterFormData;
  updateFormData: (data: Partial<RegisterFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  t: (s: string) => string;
}

export function Step2Location({ formData, updateFormData, onNext, onBack, t }: Step2LocationProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MesnaZajednica[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [availableMesneZajednice, setAvailableMesneZajednice] = useState<MesnaZajednica[]>([]);

  // Fetch Mesne Zajednice from backend
  useEffect(() => {
    setLoading(true);
    fetch(`${SERVER_URL}/mesne-zajednice`, {
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`
      }
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('Mesne zajednice fetched:', data);
        if (Array.isArray(data)) {
           setAvailableMesneZajednice(data);
        } else {
           console.error('Data is not an array:', data);
           toast.error(t('Greška pri učitavanju podataka o lokacijama.'));
        }
      })
      .catch(err => {
        console.error('Error fetching mesne zajednice:', err);
        toast.error(t('Nije moguće učitati lokacije. Proverite konekciju.'));
      })
      .finally(() => setLoading(false));
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length < 2) {
        setResults([]);
        setShowDropdown(false);
        return;
      }

      setLoading(true);
      // Search in fetched data
      const q = query.toLowerCase();
      const filtered = availableMesneZajednice.filter(mz => 
        (mz.name && mz.name.toLowerCase().includes(q)) || 
        (mz.opstina && mz.opstina.toLowerCase().includes(q)) ||
        (mz.grad && mz.grad.toLowerCase().includes(q))
      );
      
      setResults(filtered);
      setShowDropdown(true);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, availableMesneZajednice]);

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
          <div className="relative" ref={dropdownRef}>
            <div className="relative">
              <div className="flex justify-between items-center mb-1.5 ml-1">
                <label className="block text-xs font-bold text-foreground uppercase">{t('Локација')}*</label>
                <InformationIcon className="text-primary text-[16px]" title={t('Одаберите месне заједнице које ваш збор покрива')} />
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('Нпр. Врачар, Београд, Србија')}
                  className="w-full bg-card border border-border rounded-xl py-3 pl-4 pr-10 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {loading ? (
                    <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                  ) : (
                    <MagnifyingGlassIcon className="text-[20px]" />
                  )}
                </div>
              </div>
            </div>

            {showDropdown && results.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto">
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