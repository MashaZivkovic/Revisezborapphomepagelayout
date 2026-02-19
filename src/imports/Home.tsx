import svgPaths from "./svg-yfge3l7q7j";
import imgSkjermbilde20251009Kl2022441 from "figma:asset/734ad8e78f1ca9936bb74f48121c48baf4f1b346.png";
import imgUjedinjeni2 from "figma:asset/caab0c42a68c2f9e88bab8a16c5aa620fc15ac2a.png";
import { imgUjedinjeni1 } from "./svg-numd1";

function ZborAppLogoT() {
  return (
    <div className="h-[35px] relative shrink-0 w-[98.333px]" data-name="ZborApp Logo T1">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3325 35">
        <g clipPath="url(#clip0_1_20625)" id="ZborApp Logo T1">
          <path d={svgPaths.p1c474f00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2362900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p8dc8c00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2ff691b0} fill="var(--fill-0, white)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p10d2a700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.p2469b1f2} id="Vector_6" stroke="var(--stroke-0, #EE2D2C)" strokeMiterlimit="10" strokeWidth="5.67" />
        </g>
        <defs>
          <clipPath id="clip0_1_20625">
            <rect fill="white" height="35" width="98.3325" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[43px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function MenuHamburgerIcon() {
  return (
    <div className="h-[28px] relative shrink-0 w-[29px]" data-name="MenuHamburgerIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 29 28">
        <g id="MenuHamburgerIcon">
          <path clipRule="evenodd" d={svgPaths.p259ef220} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame75 />
      <MenuHamburgerIcon />
    </div>
  );
}

function Frame74() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[16px] top-1/2 w-[328px]">
      <ZborAppLogoT />
      <Frame56 />
    </div>
  );
}

function TopoNavBar() {
  return (
    <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="TopoNavBar">
      <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame74 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#4f378a] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0">
      <TopoNavBar />
    </div>
  );
}

function ToggleGroup() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex gap-[4px] items-start p-[4px] relative rounded-[8px] shrink-0 w-[330px]" data-name="Toggle Group">
      <div aria-hidden="true" className="absolute border border-[#d4d3cd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-[#4f378a] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[8px] relative rounded-[4px]" data-name="Toggle">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Сви зборови (20)
        </p>
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[8px] relative rounded-[4px]" data-name="Toggle">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4f378a] text-[14px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Пратим (0)
        </p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[16px] top-[56px]">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white w-[301px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Збор је место где се грађани окупљају да разговарају о важним темама и заједно раде на решавању проблема у својој заједници.
      </p>
      <ToggleGroup />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#4f378a] h-[194px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[360px]">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-[14px] text-[24px] text-white top-[10px] w-[302px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Пронађи свој збор
      </p>
      <Frame36 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col h-[291px] items-start relative shrink-0">
      <Frame27 />
      <Frame14 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col h-[291px] items-start left-0 top-0">
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex gap-[4px] items-center px-[4px] py-[12px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e9e3e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <span className="leading-[20px] text-[#4f378a]">10</span>
        <span className="leading-[20px]">{` `}</span>
      </p>
      <div className="h-[7.018px] relative shrink-0 w-[12.518px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.518 7.01805">
          <path clipRule="evenodd" d={svgPaths.p2d8f5a00} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0004 32.0004">
        <g id="Frame 15468">
          <path d={svgPaths.p22219780} fill="var(--fill-0, #303030)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex items-center py-[6px] relative rounded-[4px] shrink-0 w-[284px]">
      <div aria-hidden="true" className="absolute border border-[#e9e3e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame38 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#575168] text-[14px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Pretrazi zbor, dogadjaj, objavu
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-full">
      <Frame37 />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[8px] top-[299px] w-[334px]">
      <Frame40 />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <div className="relative shrink-0 size-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
          <path clipRule="evenodd" d={svgPaths.p5ea9c80} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#fafafa] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Региструјте нови збор
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
          <ButtonContent />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Button />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] top-[367px] w-[329px]">
      <Frame31 />
    </div>
  );
}

function Frame17() {
  return <div className="-translate-x-1/2 absolute h-[707px] left-1/2 top-[34px] w-[332px]" />;
}

function Frame18() {
  return (
    <div className="h-[699px] relative shrink-0 w-[330px]">
      <Frame17 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[600px] items-start left-[15px] pt-[8px] top-[471px]">
      <Frame18 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #FFB803)" id="Ellipse 3" r="6" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[10px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Зборови
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #73D1CD)" id="Ellipse 3" r="6" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[10px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Данашњи догађаји
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-[#fffcfd] content-stretch flex flex-col gap-[9px] h-[98px] items-start left-[32px] p-[8px] rounded-[8px] top-[230px] w-[135px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[#383838] text-[14px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Легенда
      </p>
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function ExpandIcon() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 w-full" data-name="ExpandIcon">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <div className="h-[17px] relative shrink-0 w-[16px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
              <path clipRule="evenodd" d={svgPaths.pd7fdef0} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpandIcon1() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 w-full" data-name="ExpandIcon">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 w-[14.072px]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0717 17">
                <path d={svgPaths.p11fdd00} fill="var(--fill-0, #4F378A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpandIcon2() {
  return (
    <div className="bg-white h-[34px] relative rounded-[100px] shrink-0 w-full" data-name="ExpandIcon">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <div className="h-[1.5px] relative shrink-0 w-[14.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 1.5">
              <path clipRule="evenodd" d={svgPaths.p179a7f70} fill="var(--fill-0, #002952)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <ExpandIcon1 />
      <ExpandIcon2 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[204px] h-[312px] items-end left-[296px] top-[16px] w-[34px]">
      <ExpandIcon />
      <Frame76 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute h-[345px] left-0 top-[431px] w-[362px]">
      <div className="absolute h-[344px] left-[16px] rounded-[8px] top-0 w-[330px]" data-name="Skjermbilde 2025-10-09 kl. 20.22.44 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgSkjermbilde20251009Kl2022441} />
      </div>
      <Frame46 />
      <Frame77 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[1071px] left-0 top-0 w-[360px]">
      <Frame42 />
      <Frame41 />
      <Frame32 />
      <Frame28 />
      <Frame43 />
    </div>
  );
}

function Frame16() {
  return <div className="absolute h-[40px] left-0 top-[1084px] w-[360px]" />;
}

function Frame15() {
  return (
    <div className="absolute h-[783px] left-0 top-[2px] w-[360px]">
      <Frame13 />
      <Frame16 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#fefdff] h-[777px] left-0 overflow-clip top-0 w-[360px]">
      <Frame15 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute h-[453px] left-0 top-0 w-[360px]">
      <Frame />
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
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-white tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
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

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[1414px]">
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

function HeadingContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          <p className="mb-0">{`Да ли сте пронашли `}</p>
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
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left />
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="XMarkIcon">
          <div className="absolute inset-[21.95%_21.8%_21.8%_21.8%]" data-name="Vector" role="button" tabIndex="0">
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

function ThumbUpIcon() {
  return (
    <button className="block cursor-pointer relative size-[40px]" data-name="ThumbUpIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="ThumbUpIcon">
          <path clipRule="evenodd" d={svgPaths.p37190900} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function ThumbUpIcon1() {
  return (
    <button className="block cursor-pointer relative size-[40px]" data-name="ThumbUpIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="ThumbUpIcon">
          <path clipRule="evenodd" d={svgPaths.p37190900} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpIcon1 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame12 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pl-[16px] top-[1499px] w-[360px]">
      <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
        <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container />
          <Divider />
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none rotate-180 w-full">
            <Frame11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path clipRule="evenodd" d={svgPaths.p4758700} fill="var(--fill-0, #383838)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        0
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-[1.846px] ml-0 mt-0 relative row-1 w-[4.615px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 4.61539 1.84617">
        <g id="Group">
          <path d={svgPaths.p3eaefe80} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.35%] mt-[46.16%] place-items-start relative row-1" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[3.692px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3.69235 3.69226">
        <g id="Group">
          <path d={svgPaths.p2e21600} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[61.54%] place-items-start relative row-1" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[3.692px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3.69231 3.69225">
        <g id="Group">
          <path d={svgPaths.p1af4db00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[23.07%] place-items-start relative row-1" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-[24.123px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1231 24">
        <g id="Group">
          <path d={svgPaths.p40a9130} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <Group2 />
      <Group4 />
      <Group6 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group24 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        2
      </p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p1cf79180} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        3
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame47 />
      <Frame48 />
      <Frame50 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-[11px] mt-[133px] p-[8px] relative row-1 w-[177.506px]">
      <Frame49 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[45px_45px] ml-0 mt-0 relative row-1 size-[45px]" data-name="ujedinjeni 1" style={{ maskImage: `url('${imgUjedinjeni1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUjedinjeni2} />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[20px] relative shrink-0 text-[#383838] w-[226px] whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уједињени Савски Венац
      </p>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Савски венац, Београд, Србија
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup />
      <Frame54 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start ml-[16px] mt-[16px] relative row-1 w-[298px]">
      <Frame51 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уједињени сви зборови са општине Савски Венац. Lorem Ipsum, bla bla, bla bla, bla bla...
      </p>
    </div>
  );
}

function Group27() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#fffcfd] border border-[#e9e3e6] border-solid col-1 h-[181px] ml-0 mt-0 rounded-[6px] row-1 w-[330px]" />
      <Frame53 />
      <Frame52 />
      <div className="aspect-[22.213436126708984/23.999893188476562] col-1 ml-[292px] mt-[141px] relative row-1 w-[22px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
          <path d={svgPaths.p187cd00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path clipRule="evenodd" d={svgPaths.p4758700} fill="var(--fill-0, #383838)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        0
      </p>
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 h-[1.846px] ml-0 mt-0 relative row-1 w-[4.615px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 4.61539 1.84617">
        <g id="Group">
          <path d={svgPaths.p3eaefe80} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.35%] mt-[46.16%] place-items-start relative row-1" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[3.692px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3.69235 3.69232">
        <g id="Group">
          <path d={svgPaths.p31318500} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[61.54%] place-items-start relative row-1" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[3.692px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3.69231 3.69225">
        <g id="Group">
          <path d={svgPaths.p1af4db00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[23.07%] place-items-start relative row-1" data-name="Group">
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-[24.123px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1231 24">
        <g id="Group">
          <path d={svgPaths.p40a9130} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group15 />
    </div>
  );
}

function Group25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group8 />
      <Group10 />
      <Group12 />
      <Group14 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group25 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        2
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p1cf79180} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        3
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame58 />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-[11px] mt-[133px] p-[8px] relative row-1 w-[177.506px]">
      <Frame57 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[45px_45px] ml-0 mt-0 relative row-1 size-[45px]" data-name="ujedinjeni 1" style={{ maskImage: `url('${imgUjedinjeni1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUjedinjeni2} />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[20px] relative shrink-0 text-[#383838] w-[226px] whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уједињени Савски Венац
      </p>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Савски венац, Београд, Србија
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup1 />
      <Frame63 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start ml-[16px] mt-[16px] relative row-1 w-[285px]">
      <Frame62 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уједињени сви зборови са општине Савски Венац.
      </p>
    </div>
  );
}

function Group28() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#fffcfd] border border-[#e9e3e6] border-solid col-1 h-[181px] ml-0 mt-0 rounded-[6px] row-1 w-[330px]" />
      <Frame55 />
      <Frame61 />
      <div className="aspect-[22.213436126708984/23.999893188476562] col-1 ml-[292px] mt-[141px] relative row-1 w-[22px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
          <path d={svgPaths.p187cd00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path clipRule="evenodd" d={svgPaths.p4758700} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        0
      </p>
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 h-[1.846px] ml-0 mt-0 relative row-1 w-[4.615px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 4.61539 1.84617">
        <g id="Group">
          <path d={svgPaths.p3eaefe80} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.35%] mt-[46.16%] place-items-start relative row-1" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[3.692px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3.69235 3.69232">
        <g id="Group">
          <path d={svgPaths.p31318500} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[61.54%] place-items-start relative row-1" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[3.692px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3.69231 3.69225">
        <g id="Group">
          <path d={svgPaths.p1af4db00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[23.07%] place-items-start relative row-1" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-[24.123px]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1231 24">
        <g id="Group">
          <path d={svgPaths.p40a9130} fill="var(--fill-0, #4F378A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group26() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group16 />
      <Group18 />
      <Group20 />
      <Group22 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group26 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        2
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p1cf79180} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        3
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame66 />
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-[11px] mt-[133px] p-[8px] relative row-1 w-[177.506px]">
      <Frame65 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[45px_45px] ml-0 mt-0 relative row-1 size-[45px]" data-name="ujedinjeni 1" style={{ maskImage: `url('${imgUjedinjeni1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUjedinjeni2} />
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[20px] relative shrink-0 text-[#383838] w-[226px] whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уједињени Савски Венац
      </p>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Савски венац, Београд, Србија
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup2 />
      <Frame71 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start ml-[16px] mt-[16px] relative row-1 w-[285px]">
      <Frame70 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`Уједињени сви зборови са општине Савски Венац. И још текста, у трећем `}</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#fffcfd] border border-[#e9e3e6] border-solid col-1 h-[181px] ml-0 mt-0 rounded-[6px] row-1 w-[330px]" />
      <Frame64 />
      <Frame69 />
      <p className="col-1 font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[20px] ml-[36px] mt-[96px] relative row-1 text-[#4f378a] text-[14px] text-right tracking-[0.1px] w-[278px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Види више...
      </p>
      <div className="aspect-[22.213436126708984/23.999893188476562] col-1 ml-[292px] mt-[141px] relative row-1 w-[22px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
          <path d={svgPaths.p187cd00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[18px] top-[793px] w-[330px]">
      <Group27 />
      <Group28 />
      <Group29 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[1723px] relative shrink-0 w-full">
      <Frame24 />
      <Frame33 />
      <Frame20 />
      <Frame29 />
    </div>
  );
}

function Frame72() {
  return <div className="-translate-y-1/2 absolute h-[24px] left-[219px] top-[calc(50%-1.5px)] w-[125px]" />;
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-0 top-0 w-[71px]">
      <div className="h-[18.528px] relative shrink-0 w-[18.529px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5287 18.5276">
          <path clipRule="evenodd" d={svgPaths.pf52db00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fffcfd] text-[14px] text-center tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[21px] whitespace-pre-wrap">Преглед</p>
      </div>
    </div>
  );
}

function X377EssentialIcons() {
  return (
    <div className="h-[18.33px] relative shrink-0 w-[24px]" data-name="_x37_7_Essential_Icons">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18.3303">
        <g id="_x37_7_Essential_Icons">
          <path d={svgPaths.p2015c780} fill="var(--fill-0, #FFFCFD)" id="Map" />
        </g>
      </svg>
    </div>
  );
}

function Mapa() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-[136px] top-px w-[71px]" data-name="Mapa">
      <X377EssentialIcons />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fffcfd] text-[14px] text-center tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[21px] whitespace-pre-wrap">Mapa</p>
      </div>
    </div>
  );
}

function HouseHeartIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="HouseHeartIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="HouseHeartIcon">
          <path clipRule="evenodd" d={svgPaths.p3cd67b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Mapa1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-[71px] top-0 w-[71px]" data-name="Mapa">
      <HouseHeartIcon />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fffcfd] text-[14px] text-center tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[21px] whitespace-pre-wrap">Профили</p>
      </div>
    </div>
  );
}

function Kalendar1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Kalendar">
      <div className="absolute inset-[0_0_-4.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
          <g id="Kalendar">
            <g id="Vector">
              <mask fill="white" id="path-1-inside-1_1_20604">
                <path clipRule="evenodd" d={svgPaths.pda1e780} fillRule="evenodd" />
              </mask>
              <path clipRule="evenodd" d={svgPaths.pda1e780} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" mask="url(#path-1-inside-1_1_20604)" stroke="var(--stroke-0, #4F378A)" strokeWidth="0.6" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Kalendar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-[202px] top-0 w-[71px]" data-name="Kalendar">
      <Kalendar1 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fffcfd] text-[14px] text-center tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[21px] whitespace-pre-wrap">Kalendar</p>
      </div>
    </div>
  );
}

function Kalendar3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Kalendar">
      <div className="absolute inset-[0_0_-4.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
          <g id="Kalendar">
            <path d={svgPaths.p11c1d470} fill="var(--fill-0, #FFFCFD)" id="Vector" stroke="var(--stroke-0, #4F378A)" strokeWidth="0.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Kalendar2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-[270px] top-0 w-[71px]" data-name="Kalendar">
      <Kalendar3 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fffcfd] text-[14px] text-center tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[21px] whitespace-pre-wrap">Milana</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[49px] left-1/2 top-1/2 w-[332px]">
      <Frame34 />
      <Mapa />
      <Mapa1 />
      <Kalendar />
      <Kalendar2 />
    </div>
  );
}

function ZborAppLogoT1() {
  return (
    <div className="absolute h-[27px] left-0 top-[6.5px] w-[75.857px]" data-name="ZborApp Logo T1">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 75.8565 27">
        <g clipPath="url(#clip0_1_19803)" id="ZborApp Logo T1">
          <path d={svgPaths.p3836d180} fill="var(--fill-0, #FFFCFD)" id="Vector" />
          <path d={svgPaths.p11499b80} fill="var(--fill-0, #FFFCFD)" id="Vector_2" />
          <path d={svgPaths.pf80f580} fill="var(--fill-0, #FFFCFD)" id="Vector_3" />
          <path d={svgPaths.p44a100} fill="var(--fill-0, #FFFCFD)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p1ee88d80} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_19803">
            <rect fill="white" height="27" width="75.8565" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT1 />
    </div>
  );
}

function Frame2() {
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

function Frame3() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame2 />
    </div>
  );
}

function Frame4() {
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

function Frame7() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame4 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame3 />
      <Frame7 />
    </div>
  );
}

function Group30() {
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

function Component021Facebook() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group30 />
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

function Frame23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame1 />
      <Frame30 />
      <Frame9 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[245px] leading-[0] relative shrink-0 text-[#fffcfd] text-[0px] text-[14px] text-center w-[328px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          © 2025 ЗборАпп - за доступније зборове
        </p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p className="leading-[20px] mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` ЗборАпп поштује GDPR. Прикупљамо само податке неопходне за функционисање апликације. Аналитички колачићи се користе искључиво уз сагласност.`}</p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            ЗборАпп - Алфа верзија 0.1
          </span>
          <span className="font-['Noto_Sans:Regular',sans-serif] leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame6 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame8 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col h-[2171px] items-start relative shrink-0 w-full">
      <Frame25 />
      <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="BottomNavBarTekst">
        <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
        <Frame72 />
        <Frame73 />
      </div>
      <div className="h-[796px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2171px] items-start left-0 top-0 w-[360px]">
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute h-[2116px] left-0 top-[-3px] w-[360px]">
      <Frame26 />
    </div>
  );
}

function Gjeld() {
  return (
    <div className="absolute bg-[#fffcfd] h-[2265px] left-0 overflow-clip top-[-3px] w-[360px]" data-name="Gjeld">
      <Frame21 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fefdff] relative size-full" data-name="Home">
      <Gjeld />
    </div>
  );
}