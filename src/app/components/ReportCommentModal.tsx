import React, { useState } from 'react';
import { XMarkIcon, ExclamationmarkTriangleIcon } from '@navikt/aksel-icons';

interface ReportCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
  t: (text: string) => string;
}

export function ReportCommentModal({ isOpen, onClose, onSubmit, t }: ReportCommentModalProps) {
  const [reason, setReason] = useState('');
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    const reasonsToSubmit = selectedReasons.map(r => r === 'other' ? `${r}: ${reason}` : r);
    onSubmit(reasonsToSubmit.join(', '));
    setReason('');
    setSelectedReasons([]);
  };

  const toggleReason = (id: string) => {
    setSelectedReasons(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const reasons = [
    { id: 'spam', label: t('Нежељени садржај / Спам') },
    { id: 'hate_speech', label: t('Говор мржње') },
    { id: 'harassment', label: t('Узнемиравање') },
    { id: 'violence', label: t('Насиље') },
    { id: 'other', label: t('Остало') }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3 text-red-600">
              <div className="bg-red-50 p-2 rounded-full">
                <ExclamationmarkTriangleIcon className="text-[24px]" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('Пријави коментар')}</h3>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
            >
               <XMarkIcon className="text-[20px]" />
            </button>
          </div>
          
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            {t('Одаберите разлог због којег пријављујете овај коментар. Ваша пријава ће бити анонимна.')}
          </p>

          <div className="space-y-2 mb-4">
            {reasons.map((r) => (
              <label 
                key={r.id} 
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${selectedReasons.includes(r.id) ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-red-200 hover:bg-slate-50'}`}
              >
                <input 
                  type="checkbox" 
                  name="report_reason" 
                  value={r.id} 
                  checked={selectedReasons.includes(r.id)}
                  onChange={() => toggleReason(r.id)}
                  className="accent-red-600 size-4 rounded"
                />
                <span className={`text-sm font-medium ${selectedReasons.includes(r.id) ? 'text-red-700' : 'text-slate-700'}`}>
                  {r.label}
                </span>
              </label>
            ))}
          </div>

          {selectedReasons.includes('other') && (
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={t('Додатно објашњење...')}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 mb-4 min-h-[80px]"
            />
          )}

          <div className="flex gap-3 mt-2">
            <button 
              onClick={onClose}
              className="flex-1 py-2.5 px-4 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
            >
              {t('Одустани')}
            </button>
            <button 
              onClick={handleSubmit}
              disabled={selectedReasons.length === 0 || (selectedReasons.includes('other') && !reason.trim())}
              className="flex-1 py-2.5 px-4 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-red-600/20"
            >
              {t('Пошаљи пријаву')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
