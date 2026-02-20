import svgPaths from "./svg-ji2mao7st4";
import imgImage131 from "figma:asset/a65ec11c88c339e47927307cbacf47ccbbe48e16.png";

function MenuHamburgerIcon() {
  return (
    <div className="absolute left-[323px] size-[24px] top-[16px]" data-name="MenuHamburgerIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MenuHamburgerIcon">
          <path clipRule="evenodd" d={svgPaths.p15740f00} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-center left-[264px] p-[10px] rounded-[8px] top-[14px] w-[43px]">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#4f378a] text-[14px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function ZborAdminLogoCirNeg() {
  return (
    <div className="absolute h-[35px] left-[15px] top-[11px] w-[174px]" data-name="ZborAdmin Logo CirNeg">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 174 35">
        <g clipPath="url(#clip0_1_20409)" id="ZborAdmin Logo CirNeg">
          <path clipRule="evenodd" d={svgPaths.p75e5d80} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p38c3000} fill="var(--fill-0, #4F378A)" id="Vector_2" />
          <path d={svgPaths.p4258380} fill="var(--fill-0, #4F378A)" id="Vector_3" />
          <path d={svgPaths.p39e2b00} fill="var(--fill-0, #4F378A)" id="Vector_4" />
          <path d={svgPaths.p5525500} fill="var(--fill-0, #4F378A)" id="Vector_5" />
          <path d={svgPaths.p199a0d00} fill="var(--fill-0, #4F378A)" id="Vector_6" />
          <path d={svgPaths.p14aa700} fill="var(--fill-0, #4F378A)" id="Vector_7" />
          <path d={svgPaths.p2fea6200} fill="var(--fill-0, #4F378A)" id="Vector_8" />
          <path d={svgPaths.pcfd7a00} fill="var(--fill-0, #4F378A)" id="Vector_9" />
          <path d={svgPaths.pb2e400} fill="var(--fill-0, #4F378A)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_1_20409">
            <rect fill="white" height="35" width="174" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0 w-[368px]">
      <div className="bg-[#edeaf5] h-[57px] relative shrink-0 w-full" data-name="AdminTopoNavBar">
        <MenuHamburgerIcon />
        <Frame44 />
        <ZborAdminLogoCirNeg />
      </div>
    </div>
  );
}

function Frame30() {
  return <div className="h-[733px] shrink-0 w-[360px]" />;
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[368px]">
      <Frame30 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame15 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#fffcfd] h-[1065px] overflow-clip relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col h-[1008px] items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col h-[99px] items-start relative shrink-0 w-full">
      <Frame29 />
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative" data-name="Icon + Text">
      <button className="block cursor-pointer relative shrink-0 size-[20px]" data-name="Interactive/Chevron">
        <div className="absolute inset-[29.17%_16.05%_30.1%_16.67%]" data-name="Chevron">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4577 8.14675">
            <path d={svgPaths.p2774e100} fill="var(--fill-0, #410464)" id="Chevron" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative shrink-0">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#4f378a] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Почетна
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <IconText />
        </div>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Збор звездара
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex h-[62px] items-center pr-[9px] relative shrink-0">
      <div className="h-[64px] mr-[-9px] relative shrink-0 w-[63px]" data-name="Image (13) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage131} />
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] mr-[-9px] relative shrink-0 text-[#322f35] text-[24px] tracking-[-0.25px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[64px]">Збор Звездара</p>
      </div>
    </div>
  );
}

function Component025Instagram() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="025-instagram">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 60">
          <path d={svgPaths.pa98d600} fill="var(--fill-0, #4F378A)" id="Vector" />
          <path d={svgPaths.p12f492b0} fill="var(--fill-0, #4F378A)" id="Vector_2" />
          <path d={svgPaths.p312cf600} fill="var(--fill-0, #4F378A)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Component021Facebook() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="021-facebook">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 61">
          <path d={svgPaths.p586e00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_4.88%_0_5.72%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4568 24">
        <g id="Group">
          <path d={svgPaths.p3e9def80} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TikTok() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tik-tok 3">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.06%_2.58%_-0.03%_5.75%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9999 24.0212">
        <g id="Group">
          <path d={svgPaths.p1601ee80} fill="var(--fill-0, #4F378A)" id="Vector" />
          <path d={svgPaths.p3d875400} fill="var(--fill-0, #4F378A)" id="Vector_2" />
          <path d={svgPaths.p131da900} fill="var(--fill-0, #4F378A)" id="Vector_3" />
          <path d={svgPaths.p336c3200} fill="var(--fill-0, #4F378A)" id="Vector_4" />
          <path d={svgPaths.p1fe31780} fill="var(--fill-0, #4F378A)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Viber() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="viber (1) 2">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[6.61%_0]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20.828">
        <g id="Group">
          <path d={svgPaths.pda4ed80} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[6.61%_0]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Telegram() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="telegram 3">
      <Group2 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Component025Instagram />
      <Component021Facebook />
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path d={svgPaths.p23287600} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
      <TikTok />
      <Viber />
      <Telegram />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Frame43 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[148px] items-start pb-[8px] relative shrink-0 w-full">
      <Frame35 />
      <Frame19 />
      <Frame45 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-[164px] items-start py-[16px] relative shrink-0 w-[330px]">
      <Frame39 />
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#575168] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#575168] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Oбјаве</p>
      </div>
      <Indicator />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function TabContents1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Догађаји</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Tab group">
      <div className="bg-[#edeaf5] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Tab 1">
        <StateLayer />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Tab 2">
        <StateLayer1 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tabs">
        <div className="bg-[#fffcfd] content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-[329px]" data-name="Tabs">
          <TabGroup />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame16 />
      <Frame23 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col h-[778px] items-center relative shrink-0 w-[360px]">
      <Frame40 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[368px]">
      <Frame31 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame28 />
      <Frame34 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame14 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#fefdff] h-[1062px] overflow-clip relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col h-[337px] items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px] w-[201px] whitespace-pre-wrap">{`Направите нову  објаву`}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#4f378a] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative size-full">
          <ButtonContent />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Button />
      </div>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.5px] w-[201px] whitespace-pre-wrap">Подесите страницу</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative size-full">
          <ButtonContent1 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Button1 />
      </div>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <div className="relative shrink-0 size-[24px]" data-name="XMarkIcon">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p377f500} fill="var(--fill-0, #4F378A)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.5px]">Измени</p>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <div className="h-[17.5px] relative shrink-0 w-[16.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 17.5">
          <path clipRule="evenodd" d={svgPaths.p3e52a000} fill="var(--fill-0, #A43030)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#b3261e] text-[16px] tracking-[0.5px]">Обриши</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0 w-[147px]" data-name="Button">
      <ButtonContent3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[40px] py-[24px] top-[524px] w-[296px]">
      <div className="bg-white content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0 w-[133px]" data-name="Button">
        <ButtonContent2 />
      </div>
      <Button2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#292434] h-[620px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:SemiBold',sans-serif] font-semibold h-[129px] leading-[52px] left-[40px] text-[35px] text-white top-[24px] w-[280px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Сви заједно до победе
      </p>
      <div className="absolute font-['Noto_Sans:Regular',sans-serif] font-normal h-[380px] leading-[normal] left-[40px] text-[16px] text-white top-[144px] w-[280px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        <p className="mb-0">Збор Грађана Звездаре почиње са обукама грађана за контролу и праћење избора.</p>
        <p className="mb-0">Обука ће се обављати у два блока.</p>
        <p className="mb-0">
          <br aria-hidden="true" />
          Први блок ће обухватати правила која налаже законска регулатива, а други блок искуства и симулације са претходних избора.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Позивамо вас да се пријавите и благовремено припремите за изборе који ће неминовно доћи у скорије време.</p>
        <p className="mb-0">&nbsp;</p>
        <p>
          ДЕЛИТЕ!!
          <br aria-hidden="true" />
          {` БУДИМО СПРЕМНИ!!!`}
        </p>
      </div>
      <Frame1 />
    </div>
  );
}

function Pages() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Pages">
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex h-full items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[48px]" data-name="1">
          <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
            <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4f378a] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
              1
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[48px]" data-name="START ...">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#333] text-[18px] tracking-[0.09px]">...</p>
        </div>
      </div>
      <div className="bg-[#575168] content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[48px]" data-name="3">
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#fffcfd] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            3
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[48px]" data-name="END ...">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#333] text-[18px] tracking-[0.09px]">...</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[48px]" data-name="8">
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4f378a] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            8
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <Frame />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Pagination">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[360px]" data-name="Pagination">
          <div className="content-stretch flex items-center justify-center min-h-[48px] min-w-[48px] relative rounded-[4px] shrink-0" data-name="Previous">
            <div className="relative shrink-0 size-[28px]" data-name="icon-left">
              <div className="absolute inset-[23.96%_38.54%_23.96%_32.29%]" data-name="shape">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16644 14.5835">
                  <path d={svgPaths.p2b0b4540} fill="var(--fill-0, #4F378A)" id="shape" />
                </svg>
              </div>
            </div>
          </div>
          <Pages />
          <div className="content-stretch flex items-center justify-center min-h-[48px] min-w-[48px] relative rounded-[4px] shrink-0" data-name="Next">
            <div className="relative shrink-0 size-[28px]" data-name="icon-left">
              <div className="absolute inset-[23.96%_32.29%_23.96%_38.54%]" data-name="shape">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16588 14.5828">
                  <path d={svgPaths.p4b45180} fill="var(--fill-0, #4F378A)" id="shape" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[1231px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame41 />
      <Frame42 />
      <Frame38 />
    </div>
  );
}

function ZborAppLogoT() {
  return (
    <div className="absolute h-[27px] left-0 top-[6.5px] w-[75.857px]" data-name="ZborApp Logo T1">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 75.8565 27">
        <g clipPath="url(#clip0_1_20368)" id="ZborApp Logo T1">
          <path d={svgPaths.p3836d180} fill="var(--fill-0, #FFFCFD)" id="Vector" />
          <path d={svgPaths.p11499b80} fill="var(--fill-0, #FFFCFD)" id="Vector_2" />
          <path d={svgPaths.pf80f580} fill="var(--fill-0, #FFFCFD)" id="Vector_3" />
          <path d={svgPaths.p44a100} fill="var(--fill-0, #FFFCFD)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p1ee88d80} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_20368">
            <rect fill="white" height="27" width="75.8565" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal gap-[12px] items-start leading-[20px] left-[5px] text-[14px] top-[48px] underline w-[176px]">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О нама
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Следећа верзија (Бета)
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal gap-[12px] h-[116px] items-start leading-[20px] left-[5px] text-[14px] top-[48px] underline w-[176px]">
      <p className="[text-decoration-skip-ink:none] decoration-solid min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Политика приватности
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 w-[319px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Управљање колачићима
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Услови коришћења
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame7 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame6 />
      <Frame10 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_20%_20%_0]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 61">
          <path d={svgPaths.p7c10f00} fill="var(--fill-0, #FFFCFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component021Facebook1() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute left-[2px] size-[16px] top-[-3px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 15164">
          <path d={svgPaths.p1cefb400} fill="var(--fill-0, #FFFCFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook1 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame13 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame4 />
      <Frame36 />
      <Frame12 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[245px] leading-[20px] relative shrink-0 text-[#fffcfd] text-[0px] text-[14px] text-center w-[328px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          © 2025 ЗборАпп - за доступније зборове
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` ЗборАпп поштује GDPR. Прикупљамо само податке неопходне за функционисање апликације. Аналитички колачићи се користе искључиво уз сагласност.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame9 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame11 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame26 />
      <div className="h-[741px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-3px] w-[360px]">
      <Frame27 />
    </div>
  );
}

export default function AdminObjave() {
  return (
    <div className="bg-[#fffcfd] relative size-full" data-name="AdminObjave">
      <Frame21 />
    </div>
  );
}