import React from 'react';
import { RegisterFormData } from './types';
import { CheckmarkCircleIcon } from '@navikt/aksel-icons';

interface Step1BasicInfoProps {
  formData: RegisterFormData;
  updateFormData: (data: Partial<RegisterFormData>) => void;
  onNext: () => void;
  onCancel: () => void;
  t: (s: string) => string;
}

export function Step1BasicInfo({ formData, updateFormData, onNext, onCancel, t }: Step1BasicInfoProps) {
  const isValid = formData.name && formData.zborName && formData.email && formData.password;

  return (
    <div className="flex flex-col h-full font-['Noto_Sans']">
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-primary uppercase mb-1.5 ml-1">{t('Ваше име')}</label>
              <input
                value={formData.name}
                onChange={(e) => updateFormData({ name: e.target.value })}
                type="text"
                className="w-full bg-card border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 text-foreground"
                placeholder={t('Петар Петровић')}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-primary uppercase mb-1.5 ml-1">{t('Име збора')}</label>
              <input
                value={formData.zborName}
                onChange={(e) => updateFormData({ zborName: e.target.value })}
                type="text"
                className="w-full bg-card border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 text-foreground"
                placeholder={t('Збор ...')}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-primary uppercase mb-1.5 ml-1">{t('Имејл (који је на листи подршке)')}</label>
            <input
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              type="email"
              className="w-full bg-card border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 text-foreground"
              placeholder="primer@domain.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-primary uppercase mb-1.5 ml-1">{t('Лозинка за апликацију')}</label>
            <input
              value={formData.password}
              onChange={(e) => updateFormData({ password: e.target.value })}
              type="password"
              className="w-full bg-card border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 text-foreground"
              placeholder="••••••••"
            />
          </div>
          <div className="bg-accent p-4 rounded-xl border border-primary/10 mt-2">
            <div className="flex items-center gap-2 mb-2">
              <CheckmarkCircleIcon className="text-[16px] text-primary" />
              <span className="text-xs font-bold text-primary">{t('Процес верификације')}</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">
              {t('Аутоматски проверавамо ваш имејл у бази оних који су стали уз студенте. Након тога, ваш збор постаје верификован.')}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-3 pt-4 border-t border-border">
        <button
          onClick={onCancel}
          className="flex-1 py-3.5 rounded-xl font-bold text-sm text-muted-foreground bg-card hover:bg-accent transition-colors"
        >
          {t('Одустани')}
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className="flex-2 bg-primary text-white py-3.5 px-8 rounded-xl font-bold text-sm shadow-lg disabled:opacity-50 hover:bg-primary/90 transition-colors"
        >
          {t('Даље')}
        </button>
      </div>
    </div>
  );
}
