import svgPaths from "./svg-74lek1mbp9";

function HeadingContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          <p className="mb-0">Да ли сте пронашли</p>
          <p>то што сте желели?</p>
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between px-[24px] relative w-full">
        <Left />
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="XMarkIcon">
          <div className="absolute inset-[21.95%_21.8%_21.8%_21.8%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5374 13.5">
              <path clipRule="evenodd" d={svgPaths.p339b6700} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 332 24">
        <g id="Divider">
          <rect fill="white" height="24" width="332" />
          <line id="divider line" stroke="var(--stroke-0, #B3ACC5)" x2="332" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[179.3px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 179.3 40">
        <g id="Frame 14780">
          <path clipRule="evenodd" d={svgPaths.p3a819100} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
          <g id="ThumbUpIcon">
            <path clipRule="evenodd" d={svgPaths.p328aa200} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame1 />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
        <Left1 />
      </div>
    </div>
  );
}

export default function ModalOkOrisnickomIskustvu() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] size-full" data-name="ModalOKOrisnickomIskustvu/Не">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
        <Container />
        <Divider />
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Frame />
        </div>
      </div>
      <Section />
    </div>
  );
}