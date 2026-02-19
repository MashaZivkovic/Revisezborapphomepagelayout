import React, { useState } from 'react';
import { RegisterFormData, MesnaZajednica } from './types';
import { Step1BasicInfo } from './Step1BasicInfo';
import { Step2Location } from './Step2Location';
import { Step3Details } from './Step3Details';
import { ConfirmationScreen } from './ConfirmationScreen';
import { XMarkIcon } from '@navikt/aksel-icons';
import { toast } from 'sonner';
import { projectId } from '/utils/supabase/info';

const SERVER_URL = `https://${projectId}.supabase.co/functions/v1/make-server-e535a4b3`;

interface RegisterZborFlowProps {
  isOpen: boolean;
  onClose: () => void;
  t: (s: string) => string;
}

export function RegisterZborFlow({ isOpen, onClose, t }: RegisterZborFlowProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    zborName: '',
    email: '',
    password: '',
    description: '',
    logoFile: null,
    mesneZajednice: []
  });

  if (!isOpen) return null;

  const updateFormData = (data: Partial<RegisterFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('zborName', formData.zborName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('mesneZajednice', JSON.stringify(formData.mesneZajednice));
      if (formData.logoFile) {
        formDataToSend.append('logo', formData.logoFile);
      }

      const response = await fetch(`${SERVER_URL}/register-zbor`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      setIsSuccess(true);
      toast.success(t('Успешна регистрација!'));
    } catch (error: any) {
      console.error('Registration error:', error);
      toast.error(error.message || t('Дошло је до грешке приликом регистрације.'));
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
        <div className="bg-background rounded-2xl w-full max-w-lg h-[600px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
            <div className="p-6 pb-2 border-b border-accent flex justify-end">
                <button onClick={onClose} className="p-2 hover:bg-card rounded-full transition-colors">
                    <XMarkIcon className="text-[20px] text-muted-foreground" />
                </button>
            </div>
            <div className="flex-1 p-6 pt-4 overflow-hidden">
                <ConfirmationScreen 
                  mesneZajednice={formData.mesneZajednice} 
                  onClose={onClose} 
                  t={t} 
                />
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
      <div className="bg-background rounded-2xl w-full max-w-lg h-[600px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
        {/* Header */}
        <div className="p-6 pb-2 border-b border-accent">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {step === 1 && t('Региструјте свој збор')}
                {step === 2 && t('Локација збора')}
                {step === 3 && t('Детаљи збора')}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('Корак')} {step} {t('од')} 3
              </p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-card rounded-full transition-colors">
              <XMarkIcon className="text-[20px] text-muted-foreground" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-accent h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300 ease-in-out" 
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 pt-4 overflow-hidden">
            {step === 1 && (
                <Step1BasicInfo 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    onNext={handleNext} 
                    onCancel={onClose} 
                    t={t} 
                />
            )}
            {step === 2 && (
                <Step2Location 
                    formData={formData} 
                    updateFormData={updateFormData} 
                    onNext={handleNext} 
                    onBack={handleBack} 
                    t={t} 
                />
            )}
            {step === 3 && (
                <Step3Details
                    formData={formData}
                    updateFormData={updateFormData}
                    onSubmit={handleSubmit}
                    onBack={handleBack}
                    loading={loading}
                    t={t}
                />
            )}
        </div>
      </div>
    </div>
  );
}