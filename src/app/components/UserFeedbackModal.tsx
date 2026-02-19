import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

// Imports from existing SVG definitions
import svgPathsYes from "../../imports/svg-njnd2c6hiv";
import svgPathsWhat from "../../imports/svg-ve42e540w1";
import svgPathsOther from "../../imports/svg-nj6uyhg4qc";
import svgPathsWhy from "../../imports/svg-y7s9z8dzye";
import svgPathsNo from "../../imports/svg-74lek1mbp9";
import svgPathsProblem from "../../imports/svg-izueh56lmj";

type Step = 'question' | 'details_yes' | 'details_no' | 'input_other' | 'input_problem' | 'thanks';

interface UserFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: (s: string) => string;
}

export function UserFeedbackModal({ isOpen, onClose, t }: UserFeedbackModalProps) {
  const [step, setStep] = useState<Step>('question');
  const [selectedThumb, setSelectedThumb] = useState<'up' | 'down' | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [otherText, setOtherText] = useState('');

  if (!isOpen) return null;

  const handleThumbClick = (thumb: 'up' | 'down') => {
    setSelectedThumb(thumb);
    setTimeout(() => {
      setStep(thumb === 'up' ? 'details_yes' : 'details_no');
    }, 300);
  };

  const handleOptionToggle = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const handleSubmitDetails = () => {
    if (selectedOptions.includes('Друго') || selectedOptions.includes('Other')) {
      setStep(step === 'details_yes' ? 'input_other' : 'input_problem');
    } else {
      finishSubmission();
    }
  };

  const finishSubmission = () => {
    // Here we would send data to backend
    toast.success(t('Хвала на повратним информацијама!'));
    onClose();
    // Reset state after close
    setTimeout(() => {
        setStep('question');
        setSelectedThumb(null);
        setSelectedOptions([]);
        setOtherText('');
    }, 500);
  };

  // --- Views ---

  // 1. Question View (Da / Ne)
  if (step === 'question') {
    return (
      <div className="fixed bottom-24 right-4 z-[70] animate-in slide-in-from-bottom-10 duration-500">
        <div className="bg-background flex flex-col items-start overflow-hidden py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] w-[332px]">
          
          {/* Header */}
          <div className="flex flex-col items-start relative shrink-0 w-full">
            <div className="relative shrink-0 w-full px-[24px] mb-4">
              <div className="flex items-start justify-between relative w-full">
                <div className="flex flex-col gap-[4px] items-start relative">
                  <div className="font-normal leading-[40px] text-foreground text-[20px]">
                    <p className="mb-0">{t('Да ли сте пронашли')}</p>
                    <p>{t('то што сте желели?')}</p>
                  </div>
                </div>
                <button onClick={onClose} className="block cursor-pointer relative shrink-0 size-[24px]">
                    <X size={24} className="text-primary" />
                </button>
              </div>
            </div>
            <div className="h-[1px] bg-border w-full shrink-0" />
          </div>

          {/* Thumbs */}
          <div className="flex items-center justify-center relative shrink-0 w-full mt-6 mb-6">
             <div className="flex gap-[107px] items-center">
                {/* Thumb Up */}
                <button onClick={() => handleThumbClick('up')} className="transition-transform hover:scale-110 text-primary">
                   <div className="relative size-[40px]">
                      <svg className="absolute block inset-0" fill="none" viewBox="0 0 40 40">
                         <path clipRule="evenodd" d={svgPathsYes.p37190900} fill="currentColor" fillRule="evenodd" />
                      </svg>
                   </div>
                </button>

                {/* Thumb Down */}
                <button onClick={() => handleThumbClick('down')} className="transition-transform hover:scale-110 text-primary">
                   <div className="relative size-[40px]">
                      <svg className="absolute block inset-0" fill="none" viewBox="0 0 40 40">
                         <g transform="scale(1, -1) translate(0, -40)"> 
                             <path clipRule="evenodd" d={svgPathsYes.p1dc24500} fill="currentColor" fillRule="evenodd" />
                         </g>
                      </svg>
                   </div>
                </button>
             </div>
          </div>

          <div className="w-full px-[24px]">
             <button 
               onClick={() => {}} 
               className="w-full bg-primary text-primary-foreground font-bold text-[16px] py-[12px] rounded-[4px] tracking-[0.5px]"
             >
               {t('Потврди')}
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-4 z-[70] animate-in slide-in-from-bottom-10 duration-500 w-[332px]">
        {step === 'question' && (
            <div className="bg-background flex flex-col items-start overflow-hidden py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] w-full">
                <div className="flex flex-col items-start relative shrink-0 w-full">
                    <div className="relative shrink-0 w-full px-[24px]">
                        <div className="flex items-start justify-between w-full">
                            <div className="flex flex-col gap-[4px] items-start">
                                <div className="font-normal leading-[40px] text-foreground text-[20px]">
                                    <p className="mb-0">{t('Да ли сте пронашли')}</p>
                                    <p>{t('то што сте желели?')}</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="block cursor-pointer size-[24px]">
                                <X size={24} className="text-primary" />
                            </button>
                        </div>
                    </div>
                    <div className="h-[24px] w-full flex items-center justify-center">
                        <div className="w-full h-[1px] bg-border" />
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mb-6">
                    <div className="flex gap-[80px] items-center">
                        <button onClick={() => handleThumbClick('up')} className="transition-transform hover:scale-110 text-primary">
                             {/* Thumb Up - Using path from Yes file */}
                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path clipRule="evenodd" d={svgPathsYes.p37190900} fill="currentColor" fillRule="evenodd" transform="rotate(180 20 20)" />
                             </svg>
                        </button>
                        <button onClick={() => handleThumbClick('down')} className="transition-transform hover:scale-110 text-primary">
                             {/* Thumb Down - Using path from No file */}
                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path clipRule="evenodd" d={svgPathsNo.p3a819100} fill="currentColor" fillRule="evenodd" />
                             </svg>
                        </button>
                    </div>
                </div>

                <div className="px-[24px] w-full">
                    <button className="w-full bg-primary text-primary-foreground font-bold text-[16px] py-[12px] rounded-[4px] tracking-[0.5px] opacity-50 cursor-not-allowed">
                        {t('Потврди')}
                    </button>
                </div>
            </div>
        )}

        {step === 'details_yes' && (
             <div className="bg-background flex flex-col items-start overflow-hidden py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] w-full">
                <div className="flex flex-col items-start relative shrink-0 w-full mb-4">
                    <div className="relative shrink-0 w-full px-[24px]">
                        <div className="flex items-start justify-between w-full">
                             <p className="font-normal leading-[40px] text-foreground text-[20px]">
                                {t('Шта сте тражили?')}
                             </p>
                             <button onClick={onClose} className="block cursor-pointer size-[24px]">
                                <X size={24} className="text-primary" />
                             </button>
                        </div>
                    </div>
                    <div className="h-[24px] w-full flex items-center justify-center">
                         <div className="w-full h-[1px] bg-border" />
                    </div>
                </div>
                
                <div className="flex flex-col gap-[16px] items-start px-[24px] w-full mb-6">
                    {['Информације о зборовима', 'Проналажење мог збора', 'Учествовање на збору', 'Преглед документације збора', 'Гласање / одговор на анкету', 'Друго'].map((opt) => (
                        <div key={opt} className="flex gap-[8px] items-center cursor-pointer" onClick={() => handleOptionToggle(opt)}>
                            <div className={`size-[24px] rounded-[4px] border-2 border-primary flex items-center justify-center ${selectedOptions.includes(opt) ? 'bg-primary' : 'bg-background'}`}>
                                {selectedOptions.includes(opt) && <X size={16} className="text-primary-foreground" />} 
                            </div>
                            <p className="font-normal text-foreground text-[16px]">{t(opt)}</p>
                        </div>
                    ))}
                </div>

                <div className="px-[24px] w-full">
                    <button onClick={handleSubmitDetails} className="w-full bg-primary text-primary-foreground font-bold text-[16px] py-[12px] rounded-[4px] tracking-[0.5px]">
                        {t('Потврди')}
                    </button>
                </div>
             </div>
        )}

        {step === 'details_no' && (
             <div className="bg-background flex flex-col items-start overflow-hidden py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] w-full">
                <div className="flex flex-col items-start relative shrink-0 w-full mb-4">
                    <div className="relative shrink-0 w-full px-[24px]">
                        <div className="flex items-start justify-between w-full">
                             <div className="font-normal leading-[40px] text-foreground text-[20px]">
                                <p className="mb-0">{t('Зашто нисте успели да')}</p>
                                <p>{t('нађете то што сте желели?')}</p>
                             </div>
                             <button onClick={onClose} className="block cursor-pointer size-[24px]">
                                <X size={24} className="text-primary" />
                             </button>
                        </div>
                    </div>
                    <div className="h-[24px] w-full flex items-center justify-center">
                         <div className="w-full h-[1px] bg-border" />
                    </div>
                </div>
                
                <div className="flex flex-col gap-[16px] items-start px-[24px] w-full mb-6">
                    {['Информација не постоји', 'Навигација је лоша', 'Не разумем информацију', 'Страница није прилагођена', 'Нешто није радило како треба', 'Друго'].map((opt) => (
                        <div key={opt} className="flex gap-[8px] items-center cursor-pointer" onClick={() => handleOptionToggle(opt)}>
                            <div className={`size-[24px] rounded-[4px] border-2 border-primary flex items-center justify-center ${selectedOptions.includes(opt) ? 'bg-primary' : 'bg-background'}`}>
                                {selectedOptions.includes(opt) && <div className="w-3 h-3 bg-primary-foreground rounded-[1px]" />}
                            </div>
                            <p className="font-normal text-foreground text-[16px] leading-tight">{t(opt)}</p>
                        </div>
                    ))}
                </div>

                <div className="px-[24px] w-full">
                    <button onClick={handleSubmitDetails} className="w-full bg-primary text-primary-foreground font-bold text-[16px] py-[12px] rounded-[4px] tracking-[0.5px]">
                        {t('Потврди')}
                    </button>
                </div>
             </div>
        )}

        {(step === 'input_other' || step === 'input_problem') && (
            <div className="bg-background flex flex-col items-start overflow-hidden py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] w-full">
                <div className="flex flex-col items-start relative shrink-0 w-full mb-4">
                    <div className="relative shrink-0 w-full px-[24px]">
                        <div className="flex items-start justify-between w-full">
                             <div className="font-normal leading-[40px] text-foreground text-[20px]">
                                <p className="mb-0">{step === 'input_other' ? t('Опишите шта') : t('Опишите проблем')}</p>
                                {step === 'input_other' && <p>{t('подразумевате под "друго"')}</p>}
                             </div>
                             <button onClick={onClose} className="block cursor-pointer size-[24px]">
                                <X size={24} className="text-primary" />
                             </button>
                        </div>
                    </div>
                    <div className="h-[24px] w-full flex items-center justify-center">
                         <div className="w-full h-[1px] bg-border" />
                    </div>
                </div>

                <div className="px-[24px] w-full mb-6">
                    <p className="font-normal text-foreground text-[16px] mb-2">
                        {t('Додајте кратак опис (без ваших личних података)')}
                    </p>
                    <textarea 
                        value={otherText}
                        onChange={(e) => setOtherText(e.target.value)}
                        className="w-full h-[105px] border border-primary rounded-[4px] p-2 resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                <div className="px-[24px] w-full">
                    <button onClick={finishSubmission} className="w-full bg-primary text-primary-foreground font-bold text-[16px] py-[12px] rounded-[4px] tracking-[0.5px]">
                        {t('Потврди')}
                    </button>
                </div>
            </div>
        )}
    </div>
  );
}