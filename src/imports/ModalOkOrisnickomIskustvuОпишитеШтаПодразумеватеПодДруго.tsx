import { useState } from 'react';
import svgPaths from "./svg-nj6uyhg4qc";

export default function ModalOkOrisnickomIskustvu({ onClose, onConfirm }: { onClose?: () => void, onConfirm?: (text: string) => void }) {
  const [text, setText] = useState('');

  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] size-full" data-name="ModalOKOrisnickomIskustvu/Опишите шта подразумевате под ”друго”">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex items-start justify-between px-[24px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Left">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
                <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
                  <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
                    <p className="mb-0">{`Опишите шта `}</p>
                    <p>{`подразумевате под ”друго” `}</p>
                  </div>
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
        <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 332 24">
            <g id="Divider">
              <rect fill="#FFFCFD" height="24" width="332" />
              <line id="divider line" stroke="var(--stroke-0, #B3ACC5)" x2="332" y1="11.5" y2="11.5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[159px] items-start pl-[24px] relative shrink-0 w-[308px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="TextArea">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name=".input/.Label">
            <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#333] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
              Додајте кратак опис (без ваших личних података)
            </p>
          </div>
          <div className="bg-white h-[105px] relative rounded-[4px] shrink-0 w-full overflow-hidden border border-[#4f378a]" data-name=".input">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-full p-2 resize-none outline-none text-[#333] text-[16px] font-['Roboto:Regular',sans-serif]"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
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
            <button onClick={() => onConfirm?.(text)} className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
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