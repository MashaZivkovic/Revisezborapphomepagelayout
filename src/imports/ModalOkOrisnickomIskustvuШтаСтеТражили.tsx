import svgPaths from "./svg-ve42e540w1";

import { useState } from 'react';
import svgPaths from "./svg-ve42e540w1";

const OPTIONS = [
  "Информације о зборовима",
  "Проналажење мог збора",
  "Учествовање на збору",
  "Преглед документације збора",
  "Гласање / одговор на анкету",
  "Друго"
];

function CheckboxItem({ label, isSelected, onToggle }: { label: string, isSelected: boolean, onToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 cursor-pointer" onClick={onToggle}>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
          <div className={`bg-white relative rounded-[4px] shrink-0 size-[24px] flex items-center justify-center transition-colors ${isSelected ? 'bg-[#4f378a]' : ''}`} data-name=".Checkbox Icon">
            <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
            {isSelected && (
               <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
               </svg>
            )}
          </div>
          <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ModalOkOrisnickomIskustvu({ onClose, onConfirm }: { onClose?: () => void, onConfirm?: (selected: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (option: string) => {
    setSelected(prev => prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]);
  };

  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] size-full" data-name="ModalOKOrisnickomIskustvu/Шта сте тражили?">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
                    <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
                      Шта сте тражили?
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="XMarkIcon">
                <div className="absolute inset-[21.95%_21.8%_21.8%_21.8%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5374 13.5">
                    <path clipRule="evenodd" d={svgPaths.p339b6700} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 332 24">
            <g id="Divider">
              <rect fill="white" height="24" width="332" />
              <line id="divider line" stroke="var(--stroke-0, #B3ACC5)" x2="332" y1="11.5" y2="11.5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[4px] relative shrink-0">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
          {OPTIONS.map(opt => (
            <CheckboxItem key={opt} label={opt} isSelected={selected.includes(opt)} onToggle={() => toggle(opt)} />
          ))}
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
        <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 332 24">
            <g id="Divider">
              <rect fill="white" height="24" width="332" />
              <line id="divider line" stroke="var(--stroke-0, #B3ACC5)" x2="332" y1="11.5" y2="11.5" />
            </g>
          </svg>
        </div>
        <div className="relative shrink-0 w-full" data-name="Section">
          <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
            <button onClick={() => onConfirm?.(selected)} className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
              <div className="flex flex-row justify-center size-full">
                <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
                    <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
                      Потврди
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}