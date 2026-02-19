import React from 'react';
import { RegisterFormData } from './types';

interface Step3DetailsProps {
  formData: RegisterFormData;
  updateFormData: (data: Partial<RegisterFormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
  loading: boolean;
  t: (s: string) => string;
}

export function Step3Details({ formData, updateFormData, onSubmit, onBack, loading, t }: Step3DetailsProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-primary uppercase mb-1.5 ml-1">{t('Кратак опис збора')}</label>
            <textarea
              value={formData.description}
              onChange={(e) => updateFormData({ description: e.target.value })}
              className="w-full bg-card border-none rounded-xl py-3 px-4 text-sm min-h-[120px] focus:ring-2 focus:ring-primary/20 resize-none text-foreground"
              placeholder={t('Опишите ваш збор...')}
            />
          </div>
          {/* Logo upload could go here */}
          <div>
            <label className="block text-xs font-bold text-primary uppercase mb-1.5 ml-1">{t('Лого збора (опционо)')}</label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    updateFormData({ logoFile: e.target.files[0] });
                  }
                }}
                className="hidden"
                id="logo-upload"
              />
              <label
                htmlFor="logo-upload"
                className="flex items-center justify-center p-4 bg-card rounded-xl text-center border-2 border-dashed border-border cursor-pointer hover:bg-accent transition-colors"
              >
                {formData.logoFile ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-primary truncate max-w-[200px]">{formData.logoFile.name}</span>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        updateFormData({ logoFile: null });
                      }}
                      className="text-xs text-red-500 hover:underline"
                    >
                      {t('Уклони')}
                    </button>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">{t('Кликните да додате лого')}</p>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-3 pt-4 border-t border-border">
        <button
          onClick={onBack}
          disabled={loading}
          className="flex-1 py-3.5 rounded-xl font-bold text-sm text-muted-foreground bg-card hover:bg-accent transition-colors"
        >
          {t('Назад')}
        </button>
        <button
          onClick={onSubmit}
          disabled={loading}
          className="flex-2 bg-primary text-white py-3.5 px-8 rounded-xl font-bold text-sm shadow-lg disabled:opacity-50 hover:bg-primary/90 transition-colors"
        >
          {loading ? t('Обрада...') : t('Пошаљи захтев')}
        </button>
      </div>
    </div>
  );
}
