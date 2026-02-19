import svgPaths from "./svg-1bj2ff2qvd";
import imgSkjermbilde20251009Kl2022441 from "figma:asset/734ad8e78f1ca9936bb74f48121c48baf4f1b346.png";
import imgUjedinjeni2 from "figma:asset/caab0c42a68c2f9e88bab8a16c5aa620fc15ac2a.png";
import imgViberImage202506241408211552 from "figma:asset/d335c472bb3d4d3818fbe6f4ac4323035313d649.png";
import imgImage131 from "figma:asset/a65ec11c88c339e47927307cbacf47ccbbe48e16.png";
import imgChatGptImage22Juni20251933591 from "figma:asset/eb901e446582514c0806946e6b0a220c3cb776f9.png";
import imgLastNed1 from "figma:asset/834c782c78f86c3ee3e1971c5d5f6f119ed61a7a.png";
import { imgUjedinjeni1, imgUjedinjeni3 } from "./svg-hbasd";

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
        <p className="leading-[20px]">Корисници</p>
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
        <p className="leading-[20px]">Зборови</p>
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

function TabContents2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Догађаји и објаве</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function TabContents3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Одобри зборове</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents3 />
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Tab group">
      <div className="bg-[#edeaf5] content-stretch flex flex-col h-full items-center justify-end overflow-clip relative shrink-0 w-[117px]" data-name="Tab 2">
        <StateLayer />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-col h-full items-center justify-end overflow-clip relative shrink-0 w-[117px]" data-name="Tab 1">
        <StateLayer1 />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-col h-full items-center justify-end overflow-clip relative shrink-0 w-[157px]" data-name="Tab 6">
        <StateLayer2 />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-col h-full items-center justify-end overflow-clip relative shrink-0 w-[179px]" data-name="Tab 7">
        <StateLayer3 />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute bg-[#fffcfd] content-stretch flex flex-col h-[48px] items-start left-[3462px] top-[1826px] w-[570px]" data-name="Tabs">
      <TabGroup />
    </div>
  );
}

function Tabs1() {
  return <div className="absolute h-[48px] left-[3462px] top-[1826px] w-[639px]" data-name="Tabs" />;
}

function Frame471() {
  return (
    <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[32px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 35">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p26afa300} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame471 />
    </div>
  );
}

function Frame473() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#4f378a] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Измени
        </p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame473 />
    </div>
  );
}

function Frame474() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[103px]">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Frame472() {
  return (
    <div className="col-1 h-[33.5px] ml-0 mt-0 relative row-1 w-[32.5px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 33.5">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p167c4000} fill="var(--fill-0, #BD0000)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame472 />
    </div>
  );
}

function Frame475() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#bd0000] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Обриши
        </p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame475 />
    </div>
  );
}

function Frame476() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[107px]">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Frame481() {
  return (
    <div className="content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0">
      <Frame474 />
      <Frame476 />
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[20px] py-[12px] relative shrink-0 w-[254px]" data-name="_Cell">
      <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame481 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1272px]" data-name="_Row">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cell />
    </div>
  );
}

function Frame478() {
  return (
    <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[32px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 35">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p26afa300} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame478 />
    </div>
  );
}

function Frame479() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#4f378a] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Измени
        </p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame479 />
    </div>
  );
}

function Frame477() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[103px]">
      <Group6 />
      <Group7 />
    </div>
  );
}

function Frame483() {
  return (
    <div className="col-1 h-[33.5px] ml-0 mt-0 relative row-1 w-[32.5px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 33.5">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p167c4000} fill="var(--fill-0, #BD0000)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame483 />
    </div>
  );
}

function Frame484() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#bd0000] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Обриши
        </p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame484 />
    </div>
  );
}

function Frame480() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[107px]">
      <Group8 />
      <Group9 />
    </div>
  );
}

function Frame482() {
  return (
    <div className="content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0">
      <Frame477 />
      <Frame480 />
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[20px] py-[12px] relative shrink-0 w-[254px]" data-name="_Cell">
      <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame482 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1272px]" data-name="_Row">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cell1 />
    </div>
  );
}

function Frame487() {
  return (
    <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[32px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 35">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p26afa300} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame487 />
    </div>
  );
}

function Frame488() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#4f378a] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Измени
        </p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame488 />
    </div>
  );
}

function Frame486() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[103px]">
      <Group10 />
      <Group11 />
    </div>
  );
}

function Frame490() {
  return (
    <div className="col-1 h-[33.5px] ml-0 mt-0 relative row-1 w-[32.5px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 33.5">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p167c4000} fill="var(--fill-0, #BD0000)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame490 />
    </div>
  );
}

function Frame491() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#bd0000] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Обриши
        </p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame491 />
    </div>
  );
}

function Frame489() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[107px]">
      <Group12 />
      <Group13 />
    </div>
  );
}

function Frame485() {
  return (
    <div className="content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0">
      <Frame486 />
      <Frame489 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[20px] py-[12px] relative shrink-0 w-[254px]" data-name="_Cell">
      <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame485 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1272px]" data-name="_Row">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cell2 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bg-white left-[3460px] rounded-[4px] top-[2088px]" data-name="Content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="content-stretch flex items-center relative shrink-0 w-[1272px]" data-name="_Row">
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px] w-[68px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Име
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px] w-[68px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Мејл
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-[68px]" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Одобрен
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px] w-[68px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Креиран
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px] w-[68px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Акције
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row />
        <Row1 />
        <Row2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

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

function Frame593() {
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

function Frame529() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame593 />
      <MenuHamburgerIcon />
    </div>
  );
}

function Frame587() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[16px] top-1/2 w-[328px]">
      <ZborAppLogoT />
      <Frame529 />
    </div>
  );
}

function TopoNavBar() {
  return (
    <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="TopoNavBar">
      <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame587 />
    </div>
  );
}

function Frame291() {
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

function Frame501() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[16px] top-[56px]">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white w-[301px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Збор је место где се грађани окупљају да разговарају о важним темама и заједно раде на решавању проблема у својој заједници.
      </p>
      <ToggleGroup />
    </div>
  );
}

function Frame201() {
  return (
    <div className="bg-[#4f378a] h-[194px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[360px]">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-[14px] text-[24px] text-white top-[10px] w-[302px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Пронађи свој збор
      </p>
      <Frame501 />
    </div>
  );
}

function Frame500() {
  return (
    <div className="content-stretch flex flex-col h-[291px] items-start relative shrink-0">
      <Frame291 />
      <Frame201 />
    </div>
  );
}

function Frame509() {
  return (
    <div className="absolute content-stretch flex flex-col h-[291px] items-start left-0 top-0">
      <Frame500 />
    </div>
  );
}

function Frame502() {
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

function Frame505() {
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

function Frame506() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex items-center py-[6px] relative rounded-[4px] shrink-0 w-[284px]">
      <div aria-hidden="true" className="absolute border border-[#e9e3e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame505 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#575168] text-[14px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Pretrazi zbor, dogadjaj, objavu
      </p>
    </div>
  );
}

function Frame507() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0 w-full">
      <Frame502 />
      <Frame506 />
    </div>
  );
}

function Frame508() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[8px] top-[299px] w-[334px]">
      <Frame507 />
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

function Frame456() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Button />
    </div>
  );
}

function Frame457() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] top-[367px] w-[329px]">
      <Frame456 />
    </div>
  );
}

function Frame212() {
  return <div className="-translate-x-1/2 absolute h-[707px] left-1/2 top-[34px] w-[332px]" />;
}

function Frame214() {
  return (
    <div className="h-[699px] relative shrink-0 w-[330px]">
      <Frame212 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="absolute content-stretch flex flex-col h-[600px] items-start left-[15px] pt-[8px] top-[471px]">
      <Frame214 />
    </div>
  );
}

function Frame516() {
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

function Frame517() {
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

function Frame519() {
  return (
    <div className="absolute bg-[#fffcfd] content-stretch flex flex-col gap-[9px] h-[98px] items-start left-[32px] p-[8px] rounded-[8px] top-[230px] w-[135px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[#383838] text-[14px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Легенда
      </p>
      <Frame516 />
      <Frame517 />
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

function Frame607() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <ExpandIcon1 />
      <ExpandIcon2 />
    </div>
  );
}

function Frame608() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[204px] h-[312px] items-end left-[296px] top-[16px] w-[34px]">
      <ExpandIcon />
      <Frame607 />
    </div>
  );
}

function Frame510() {
  return (
    <div className="absolute h-[345px] left-0 top-[431px] w-[362px]">
      <div className="absolute h-[344px] left-[16px] rounded-[8px] top-0 w-[330px]" data-name="Skjermbilde 2025-10-09 kl. 20.22.44 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgSkjermbilde20251009Kl2022441} />
      </div>
      <Frame519 />
      <Frame608 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="absolute h-[1071px] left-0 top-0 w-[360px]">
      <Frame509 />
      <Frame508 />
      <Frame457 />
      <Frame326 />
      <Frame510 />
    </div>
  );
}

function Frame203() {
  return <div className="absolute h-[40px] left-0 top-[1084px] w-[360px]" />;
}

function Frame202() {
  return (
    <div className="absolute h-[783px] left-0 top-[2px] w-[360px]">
      <Frame198 />
      <Frame203 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#fefdff] h-[777px] left-0 overflow-clip top-0 w-[360px]">
      <Frame202 />
    </div>
  );
}

function Frame266() {
  return (
    <div className="absolute h-[453px] left-0 top-0 w-[360px]">
      <Frame11 />
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

function Frame464() {
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

function Frame58() {
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

function Frame57() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame58 />
    </div>
  );
}

function Frame228() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pl-[16px] top-[1499px] w-[360px]">
      <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
        <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container />
          <Divider />
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none rotate-180 w-full">
            <Frame57 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame520() {
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

function Group15() {
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

function Group14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[61.54%] place-items-start relative row-1" data-name="Group">
      <Group15 />
    </div>
  );
}

function Group17() {
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

function Group16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[23.07%] place-items-start relative row-1" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group19() {
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

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group59() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <Group14 />
      <Group16 />
      <Group18 />
    </div>
  );
}

function Frame521() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group59 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        2
      </p>
    </div>
  );
}

function Frame523() {
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

function Frame522() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame520 />
      <Frame521 />
      <Frame523 />
    </div>
  );
}

function Frame526() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-[11px] mt-[133px] p-[8px] relative row-1 w-[177.506px]">
      <Frame522 />
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

function Frame527() {
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

function Frame524() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup />
      <Frame527 />
    </div>
  );
}

function Frame525() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start ml-[16px] mt-[16px] relative row-1 w-[298px]">
      <Frame524 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уједињени сви зборови са општине Савски Венац. Lorem Ipsum, bla bla, bla bla, bla bla...
      </p>
    </div>
  );
}

function Group62() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#fffcfd] border border-[#e9e3e6] border-solid col-1 h-[181px] ml-0 mt-0 rounded-[6px] row-1 w-[330px]" />
      <Frame526 />
      <Frame525 />
      <div className="aspect-[22.213436126708984/23.999893188476562] col-1 ml-[292px] mt-[141px] relative row-1 w-[22px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
          <path d={svgPaths.p187cd00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame531() {
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

function Group21() {
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

function Group20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.35%] mt-[46.16%] place-items-start relative row-1" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
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

function Group22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[61.54%] place-items-start relative row-1" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group25() {
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

function Group24() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[23.07%] place-items-start relative row-1" data-name="Group">
      <Group25 />
    </div>
  );
}

function Group27() {
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

function Group26() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group27 />
    </div>
  );
}

function Group60() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group20 />
      <Group22 />
      <Group24 />
      <Group26 />
    </div>
  );
}

function Frame532() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group60 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        2
      </p>
    </div>
  );
}

function Frame533() {
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

function Frame530() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame531 />
      <Frame532 />
      <Frame533 />
    </div>
  );
}

function Frame528() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-[11px] mt-[133px] p-[8px] relative row-1 w-[177.506px]">
      <Frame530 />
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

function Frame536() {
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

function Frame535() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup1 />
      <Frame536 />
    </div>
  );
}

function Frame534() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start ml-[16px] mt-[16px] relative row-1 w-[285px]">
      <Frame535 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уједињени сви зборови са општине Савски Венац.
      </p>
    </div>
  );
}

function Group63() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#fffcfd] border border-[#e9e3e6] border-solid col-1 h-[181px] ml-0 mt-0 rounded-[6px] row-1 w-[330px]" />
      <Frame528 />
      <Frame534 />
      <div className="aspect-[22.213436126708984/23.999893188476562] col-1 ml-[292px] mt-[141px] relative row-1 w-[22px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
          <path d={svgPaths.p187cd00} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame539() {
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

function Group29() {
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

function Group28() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.35%] mt-[46.16%] place-items-start relative row-1" data-name="Group">
      <Group29 />
    </div>
  );
}

function Group31() {
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

function Group30() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[61.54%] place-items-start relative row-1" data-name="Group">
      <Group31 />
    </div>
  );
}

function Group33() {
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

function Group32() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[82.42%] mt-[23.07%] place-items-start relative row-1" data-name="Group">
      <Group33 />
    </div>
  );
}

function Group35() {
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

function Group34() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group35 />
    </div>
  );
}

function Group61() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group28 />
      <Group30 />
      <Group32 />
      <Group34 />
    </div>
  );
}

function Frame540() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group61 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[17px] leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-[13px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        2
      </p>
    </div>
  );
}

function Frame541() {
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

function Frame538() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame539 />
      <Frame540 />
      <Frame541 />
    </div>
  );
}

function Frame537() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-[11px] mt-[133px] p-[8px] relative row-1 w-[177.506px]">
      <Frame538 />
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

function Frame544() {
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

function Frame543() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup2 />
      <Frame544 />
    </div>
  );
}

function Frame542() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start ml-[16px] mt-[16px] relative row-1 w-[285px]">
      <Frame543 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`Уједињени сви зборови са општине Савски Венац. И још текста, у трећем `}</p>
    </div>
  );
}

function Group64() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#fffcfd] border border-[#e9e3e6] border-solid col-1 h-[181px] ml-0 mt-0 rounded-[6px] row-1 w-[330px]" />
      <Frame537 />
      <Frame542 />
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

function Frame327() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[18px] top-[793px] w-[330px]">
      <Group62 />
      <Group63 />
      <Group64 />
    </div>
  );
}

function Frame267() {
  return (
    <div className="h-[1723px] relative shrink-0 w-full">
      <Frame266 />
      <Frame464 />
      <Frame228 />
      <Frame327 />
    </div>
  );
}

function Frame545() {
  return <div className="-translate-y-1/2 absolute h-[24px] left-[219px] top-[calc(50%-1.5px)] w-[125px]" />;
}

function Home1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Home">
      <div className="absolute inset-[0_0_-4.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
          <g id="Home">
            <path clipRule="evenodd" d={svgPaths.p27f28d40} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame498() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-0 top-0 w-[71px]">
      <Home1 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fffcfd] text-[14px] text-center tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[21px] whitespace-pre-wrap">Zborovi</p>
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
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-[87px] top-0 w-[71px]" data-name="Mapa">
      <X377EssentialIcons />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fffcfd] text-[14px] text-center tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[21px] whitespace-pre-wrap">Mapa</p>
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
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-[174px] top-0 w-[71px]" data-name="Kalendar">
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
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[49px] items-center justify-center left-[261px] top-0 w-[71px]" data-name="Kalendar">
      <Kalendar3 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#fffcfd] text-[14px] text-center tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[21px] whitespace-pre-wrap">Milana</p>
      </div>
    </div>
  );
}

function Frame546() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[49px] left-1/2 top-1/2 w-[332px]">
      <Frame498 />
      <Mapa />
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

function Frame29() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT1 />
    </div>
  );
}

function Frame30() {
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

function Frame31() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame30 />
    </div>
  );
}

function Frame32() {
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

function Frame35() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame32 />
    </div>
  );
}

function Frame334() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame31 />
      <Frame35 />
    </div>
  );
}

function Group65() {
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
      <Group65 />
    </div>
  );
}

function Frame261() {
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

function Frame264() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame261 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame264 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame38 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame29 />
      <Frame334 />
      <Frame37 />
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

function Frame34() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame33 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame34 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame36 />
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex flex-col h-[2171px] items-start relative shrink-0 w-full">
      <Frame267 />
      <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="BottomNavBarTekst">
        <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
        <Frame545 />
        <Frame546 />
      </div>
      <div className="h-[796px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer />
      </div>
    </div>
  );
}

function Frame268() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2171px] items-start left-0 top-0 w-[360px]">
      <Frame227 />
    </div>
  );
}

function Frame229() {
  return (
    <div className="absolute h-[2116px] left-0 top-[-3px] w-[360px]">
      <Frame268 />
    </div>
  );
}

function Gjeld() {
  return (
    <div className="absolute bg-[#fffcfd] h-[2265px] left-0 overflow-clip top-[-3px] w-[360px]" data-name="Gjeld">
      <Frame229 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute bg-[#fefdff] h-[2165px] left-[2250px] overflow-clip top-[3043px] w-[360px]" data-name="Home">
      <Gjeld />
    </div>
  );
}

function Frame588() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex items-center justify-center p-[10px] relative rounded-[54px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li je korisnik kliknuo na meni?</p>
    </div>
  );
}

function Frame589() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center left-[2623px] top-[3059px]">
      <div className="h-0 relative shrink-0 w-[45px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" x2="45" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame588 />
    </div>
  );
}

function Frame590() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2971px] p-[10px] rounded-[200px] top-[3059px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame625() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[3759px] p-[10px] rounded-[200px] top-[3610px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame626() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[3944px] p-[10px] rounded-[200px] top-[3415px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame628() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[4161px] p-[10px] rounded-[200px] top-[3022px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame629() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[4161px] p-[10px] rounded-[200px] top-[2793px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame627() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[3590px] p-[10px] rounded-[200px] top-[3171px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame594() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2887px] p-[10px] rounded-[200px] top-[3258px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame595() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2854px] p-[10px] rounded-[200px] top-[3497px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame597() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2891px] p-[10px] rounded-[200px] top-[3728px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame599() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2891px] p-[10px] rounded-[200px] top-[3956px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame601() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2840px] p-[10px] rounded-[200px] top-[4210px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame603() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2847px] p-[10px] rounded-[200px] top-[4450px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame609() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2866px] p-[10px] rounded-[200px] top-[4943px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame630() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[4058px] p-[10px] rounded-[200px] top-[5609px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame605() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2852px] p-[10px] rounded-[200px] top-[4700px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame610() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2873px] p-[10px] rounded-[200px] top-[5175px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame611() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2873px] p-[10px] rounded-[200px] top-[5411px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame613() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2873px] p-[10px] rounded-[200px] top-[5647px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame615() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2887px] p-[10px] rounded-[200px] top-[5883px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame617() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2750px] p-[10px] rounded-[200px] top-[6126px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame618() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2339px] p-[10px] rounded-[200px] top-[6126px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame619() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2085px] p-[10px] rounded-[200px] top-[6126px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame620() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[1903px] p-[10px] rounded-[200px] top-[5639px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame621() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[1896px] p-[10px] rounded-[200px] top-[5458px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame622() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[1896px] p-[10px] rounded-[200px] top-[5231px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame623() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[1896px] p-[10px] rounded-[200px] top-[5012px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame591() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame596() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex items-center justify-center p-[10px] relative rounded-[54px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li je korisnik kliknuo na pismo?</p>
    </div>
  );
}

function Frame592() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2780px] top-[3108px] w-[37px]">
      <div className="flex h-[19.026px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[19.026px]">
            <div className="absolute inset-[-7.36px_-5.26%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0263 14.7279">
                <path d={svgPaths.p358b5300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame591 />
      <Frame596 />
    </div>
  );
}

function Frame600() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame598() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2704px] top-[3237px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame600 />
    </div>
  );
}

function Frame604() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame602() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2711px] top-[3468px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame604 />
    </div>
  );
}

function Frame612() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame606() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2711px] top-[3696px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame612 />
    </div>
  );
}

function Frame616() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame614() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2711px] top-[3924px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame616 />
    </div>
  );
}

function Frame631() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame624() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2711px] top-[4169px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame631 />
    </div>
  );
}

function Frame633() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame632() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2723px] top-[4421px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame633 />
    </div>
  );
}

function Frame635() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame634() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2729px] top-[4659px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame635 />
    </div>
  );
}

function Frame637() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame636() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2737px] top-[4902px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame637 />
    </div>
  );
}

function Frame639() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame638() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2743px] top-[5137px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame639 />
    </div>
  );
}

function Frame641() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame640() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2748px] top-[5372px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame641 />
    </div>
  );
}

function Frame643() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame642() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2748px] top-[5610px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame643 />
    </div>
  );
}

function Frame645() {
  return (
    <div className="bg-[#bd0000] relative rounded-[200px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
        </div>
      </div>
    </div>
  );
}

function Frame644() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center left-[2748px] top-[5842px] w-[37px]">
      <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.72deg]">
          <div className="h-0 relative w-[103.001px]">
            <div className="absolute inset-[-7.36px_-0.97%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.001 14.7279">
                <path d={svgPaths.p3bb30300} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame645 />
    </div>
  );
}

function Frame646() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[1905px] p-[10px] rounded-[200px] top-[4252px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function MenuHamburgerIcon1() {
  return (
    <div className="absolute left-[323px] size-[24px] top-[16px]" data-name="MenuHamburgerIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MenuHamburgerIcon">
          <path clipRule="evenodd" d={svgPaths.p15740f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ZborAppLogoT2() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[15px] top-1/2 w-[98.333px]" data-name="ZborApp Logo T1">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3325 35">
        <g clipPath="url(#clip0_1_20615)" id="ZborApp Logo T1">
          <path d={svgPaths.p1c474f00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2362900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p8dc8c00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2ff691b0} fill="var(--fill-0, white)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p10d2a700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.p2469b1f2} id="Vector_6" stroke="var(--stroke-0, #EE2D2C)" strokeMiterlimit="10" strokeWidth="5.67" />
        </g>
        <defs>
          <clipPath id="clip0_1_20615">
            <rect fill="white" height="35" width="98.3325" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame292() {
  return (
    <div className="bg-[#4f378a] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0">
      <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="TopoNavBar">
        <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
        <MenuHamburgerIcon1 />
        <ZborAppLogoT2 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0 w-[105px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow">
        <div className="absolute inset-[28.05%_17.71%_28.2%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4993 10.5">
            <path d={svgPaths.p2aa51880} fill="var(--fill-0, #4F378A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.625] relative shrink-0 text-[#4f378a] text-[16px] text-left tracking-[0.1504px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Назад
      </p>
    </button>
  );
}

function Frame333() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="tilbake">
        <Frame />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex h-[62px] items-center relative shrink-0">
      <div className="h-[64px] shrink-0 w-[63px]" data-name="Image (13) 1" />
    </div>
  );
}

function ZborNaslovna() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[50px] items-start py-[16px] relative shrink-0 w-[330px]" data-name="ZborNaslovna">
      <Frame333 />
      <Frame216 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[56px_56px] size-[56px] top-0" data-name="ujedinjeni 1" style={{ maskImage: `url('${imgUjedinjeni3}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUjedinjeni2} />
      </div>
    </div>
  );
}

function Frame550() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-center leading-[20px] left-[60px] text-[#383838] top-[4.5px] w-[256px] whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уједињени Савски Венац
      </p>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Савски венац, Београд, Србија
      </p>
    </div>
  );
}

function CogRotationIcon() {
  return (
    <div className="absolute h-[23.502px] left-[36px] top-[34px] w-[23.5px]" data-name="CogRotationIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5 23.5023">
        <g id="CogRotationIcon">
          <rect fill="var(--fill-0, #EDEAF5)" height="23.5023" rx="11.75" width="23.5" />
          <path clipRule="evenodd" d={svgPaths.p2c109d00} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame549() {
  return (
    <div className="absolute h-[56px] left-[8px] top-[8px] w-[328px]">
      <MaskGroup3 />
      <Frame550 />
      <CogRotationIcon />
    </div>
  );
}

function Frame548() {
  return (
    <div className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[344px]">
      <Frame549 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#30034c] content-stretch flex flex-col items-start left-[-3px] px-[8px] py-[4px] rounded-[2px] top-[-1px]" data-name="text">
      <div aria-hidden="true" className="absolute border border-[#30034c] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="font-['Roboto:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-[14px] text-white tracking-[0.1px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[20px] mb-0">Аутоматcки генерисан профил. Ако желите да</p>
        <p className="leading-[20px] mb-0">преузмете управљање профилом, контактирајте</p>
        <p>
          <span className="leading-[20px]">{`нас на `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Medium',sans-serif] font-medium leading-[20px] tracking-[0.1px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            kontakt@zborapp.com
          </span>
        </p>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="col-1 h-[73px] ml-[10px] mt-[74px] relative row-1 w-[353px]" data-name="Tooltip">
      <div className="absolute flex h-[5px] items-center justify-center left-[40px] top-[-6px] w-[10px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[10px] relative w-[5px]" data-name="Arrow">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
              <path d="M5 10L5 0L0 5L5 10Z" fill="var(--fill-0, #30034C)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Group69() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame548 />
      <Tooltip />
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

function Component021Facebook1() {
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

function Group36() {
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
      <Group36 />
    </div>
  );
}

function Group37() {
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
      <Group37 />
    </div>
  );
}

function Group39() {
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

function Group38() {
  return (
    <div className="absolute contents inset-[6.61%_0]" data-name="Group">
      <Group39 />
    </div>
  );
}

function Telegram() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="telegram 3">
      <Group38 />
    </div>
  );
}

function Frame551() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pb-[16px] pt-[8px] px-[16px] relative shrink-0 w-[330px]">
      <Component025Instagram />
      <Component021Facebook1 />
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

function Frame547() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[8px] relative shrink-0 w-[360px]">
      <Group69 />
      <Frame551 />
    </div>
  );
}

function Frame494() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 px-[16px] top-0 w-[360px]">
      <div className="bg-[#4f378a] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="3">
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[16px] relative w-full">
            <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#fffcfd] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
                Прати
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcfd] min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="405">
        <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[16px] relative w-full">
            <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
              <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4f378a] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
                Подели страницу
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabContent() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="TabContent">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Објаве
        </p>
      </div>
    </div>
  );
}

function TabContent1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="TabContent">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Догађаји
        </p>
      </div>
    </div>
  );
}

function TabGroup1() {
  return (
    <div className="absolute border-[#dadbdd] border-b border-solid h-[48px] left-[23px] top-[136px] w-[188px]" data-name="TabGroup">
      <div className="absolute content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] top-0" data-name="Tab">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
        <TabContent />
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[85px] px-[16px] py-[12px] top-0" data-name="Tab">
        <div aria-hidden="true" className="absolute border-[#410464] border-b-3 border-solid inset-0 pointer-events-none" />
        <TabContent1 />
      </div>
    </div>
  );
}

function KarticaObjavaMobile() {
  return (
    <div className="absolute bg-[#edeaf5] h-[207px] left-0 rounded-[8px] top-0 w-[360px]" data-name="KarticaObjavaMobile">
      <div className="absolute h-[160px] left-[12px] top-[24px] w-[117.717px]" data-name="viber_image_2025-06-24_14-08-21-155 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgViberImage202506241408211552} />
      </div>
      <p className="absolute font-['Noto_Sans:Bold',sans-serif] font-bold h-[23px] leading-[18px] left-[150px] text-[#2a2a2a] text-[18px] top-[24px] w-[198px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Објава о ....
      </p>
    </div>
  );
}

function Pages1() {
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

function LocationPinIcon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="LocationPinIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LocationPinIcon">
          <path clipRule="evenodd" d={svgPaths.pd2c6a00} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame399() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[202px]">
      <LocationPinIcon />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[28px] text-[#2a2a2a] text-[16px] top-[12px] w-[174px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Парк код 6. гимназије</p>
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="ClockIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ClockIcon">
          <path clipRule="evenodd" d={svgPaths.p30a46280} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame400() {
  return (
    <div className="absolute h-[42px] left-0 top-[36px] w-[202px]">
      <ClockIcon />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#2a2a2a] text-[16px] top-[12px] w-[173px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">26. Јун 2025, 18,30ч</p>
      </div>
    </div>
  );
}

function Frame403() {
  return (
    <div className="absolute h-[60px] left-[146px] top-[124px] w-[202px]">
      <Frame399 />
      <Frame400 />
    </div>
  );
}

function KarticaObjavaMobile1() {
  return (
    <div className="absolute bg-[#edeaf5] h-[207px] left-0 rounded-[8px] top-0 w-[360px]" data-name="KarticaObjavaMobile">
      <div className="absolute h-[160px] left-[12px] top-[24px] w-[117.717px]" data-name="viber_image_2025-06-24_14-08-21-155 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgViberImage202506241408211552} />
      </div>
      <ol className="absolute block font-['Noto_Sans:Bold',sans-serif] font-bold h-[23px] leading-[0] left-[150px] text-[#2a2a2a] text-[18px] top-[24px] w-[198px]" start="14" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        <li className="ms-[27px] whitespace-pre-wrap">
          <span className="leading-[18px]">Збор грађана</span>
        </li>
      </ol>
      <Frame403 />
    </div>
  );
}

function Frame277() {
  return (
    <div className="h-[716px] relative shrink-0 w-[360px]">
      <Frame494 />
      <TabGroup1 />
      <div className="absolute h-[207px] left-0 top-[208px] w-[360px]" data-name="KarticaDogadjajMobile">
        <KarticaObjavaMobile />
      </div>
      <div className="absolute content-stretch flex items-start left-0 py-[24px] top-[460px]" data-name="Pagination">
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
          <Pages1 />
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
      <div className="absolute h-[207px] left-0 top-[670px] w-[360px]" data-name="KarticaDogadjajMobile">
        <KarticaObjavaMobile1 />
      </div>
    </div>
  );
}

function Frame310() {
  return (
    <div className="content-stretch flex flex-col h-[880px] items-center relative shrink-0 w-full">
      <ZborNaslovna />
      <Frame547 />
      <Frame277 />
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[985px] items-center relative shrink-0 w-full">
      <Frame292 />
      <Frame310 />
    </div>
  );
}

function Frame204() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-0 w-[360px]">
      <Frame199 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#fefdff] h-[1097px] overflow-clip relative shrink-0 w-full">
      <Frame204 />
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex flex-col h-[985px] items-start relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function HeadingContainer1() {
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

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left1 />
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

function Divider1() {
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

function ThumbUpIcon2() {
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

function ThumbUpIcon3() {
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

function Frame60() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon2 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpIcon3 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame60 />
    </div>
  );
}

function Frame232() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
          <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
            <Container1 />
            <Divider1 />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <Frame59 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame271 />
      <Frame232 />
    </div>
  );
}

function ZborAppLogoT3() {
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

function Frame42() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT3 />
    </div>
  );
}

function Frame44() {
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

function Frame43() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame44 />
    </div>
  );
}

function Frame46() {
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

function Frame45() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame46 />
    </div>
  );
}

function Frame335() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame43 />
      <Frame45 />
    </div>
  );
}

function Group67() {
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

function Component021Facebook2() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group67 />
    </div>
  );
}

function Frame262() {
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

function Frame265() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook2 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame262 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame265 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame48 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame42 />
      <Frame335 />
      <Frame47 />
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

function Frame40() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame41 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame40 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame39 />
    </div>
  );
}

function Frame231() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame270 />
      <div className="h-[741px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer1 />
      </div>
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame231 />
    </div>
  );
}

function Frame230() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-3px] w-[360px]">
      <Frame269 />
    </div>
  );
}

function ProfilZboraA() {
  return (
    <div className="absolute bg-[#fffcfd] h-[2050px] left-[3915px] overflow-clip top-[5662px] w-[360px]" data-name="profilZboraA">
      <Frame230 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents left-[1896px] top-[2631px]">
      <Frame589 />
      <div className="absolute h-0 left-[2919px] top-[3078px] w-[45px]">
        <div className="absolute inset-[-7.36px_-2.22%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 14.7279">
            <path d={svgPaths.p167d3600} fill="var(--stroke-0, white)" id="Arrow 1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[2506px] top-[2631px] w-[45px]">
        <div className="absolute inset-[-7.36px_-2.22%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 14.7279">
            <path d={svgPaths.p167d3600} fill="var(--stroke-0, white)" id="Arrow 1" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2887px] top-[3229px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2850px] top-[3465px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2873px] top-[3703px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2887px] top-[3927px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2826px] top-[4169px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2833px] top-[4409px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2838px] top-[4659px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2852px] top-[4902px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[4035px] top-[5585px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2859px] top-[5134px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2859px] top-[5380px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2859px] top-[5616px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[2873px] top-[5847px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[60.75deg]">
          <div className="h-0 relative w-[28.653px]">
            <div className="absolute inset-[-7.36px_-3.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6531 14.7279">
                <path d={svgPaths.p17b69180} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[28px] items-center justify-center left-[2769px] top-[6084px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[28px] items-center justify-center left-[2351px] top-[6083px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[28px] items-center justify-center left-[2103px] top-[6083px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[1953px] top-[5847px] w-[38px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[38px]">
            <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
                <path d={svgPaths.p26b712c0} fill="var(--stroke-0, white)" id="Arrow 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[1953px] top-[5658px] w-[38px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[38px]">
            <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
                <path d={svgPaths.p26b712c0} fill="var(--stroke-0, white)" id="Arrow 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[1946px] top-[5477px] w-[38px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[38px]">
            <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
                <path d={svgPaths.p26b712c0} fill="var(--stroke-0, white)" id="Arrow 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[1946px] top-[5250px] w-[38px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[38px]">
            <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
                <path d={svgPaths.p26b712c0} fill="var(--stroke-0, white)" id="Arrow 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[1946px] top-[5031px] w-[38px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[38px]">
            <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
                <path d={svgPaths.p26b712c0} fill="var(--stroke-0, white)" id="Arrow 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[1953px] top-[4271px] w-[38px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[38px]">
            <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
                <path d={svgPaths.p26b712c0} fill="var(--stroke-0, white)" id="Arrow 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[2570px] top-[6039px] w-[36px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[36px]">
            <div className="absolute inset-[-7.36px_-2.78%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 14.7279">
                <path d={svgPaths.p39d74700} fill="var(--stroke-0, white)" id="Arrow 15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[2266px] top-[6039px] w-[36px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[36px]">
            <div className="absolute inset-[-7.36px_-2.78%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 14.7279">
                <path d={svgPaths.p39d74700} fill="var(--stroke-0, white)" id="Arrow 15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[45px] items-center justify-center left-[2103px] top-[5957px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[45px]">
            <div className="absolute inset-[-7.36px_-2.22%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 14.7279">
                <path d={svgPaths.p167d3600} fill="var(--stroke-0, white)" id="Arrow 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[45px] items-center justify-center left-[2095px] top-[5756px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[45px]">
            <div className="absolute inset-[-7.36px_-2.22%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 14.7279">
                <path d={svgPaths.p167d3600} fill="var(--stroke-0, white)" id="Arrow 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[45px] items-center justify-center left-[2032px] top-[5566px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[45px]">
            <div className="absolute inset-[-7.36px_-2.22%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 14.7279">
                <path d={svgPaths.p167d3600} fill="var(--stroke-0, white)" id="Arrow 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[45px] items-center justify-center left-[2032px] top-[5362px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[45px]">
            <div className="absolute inset-[-7.36px_-2.22%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 14.7279">
                <path d={svgPaths.p167d3600} fill="var(--stroke-0, white)" id="Arrow 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[45px] items-center justify-center left-[2024px] top-[5142px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[45px]">
            <div className="absolute inset-[-7.36px_-2.22%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 14.7279">
                <path d={svgPaths.p167d3600} fill="var(--stroke-0, white)" id="Arrow 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[604px] items-center justify-center left-[2160px] top-[4385px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[604px]">
            <div className="absolute inset-[-7.36px_-0.17%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 605 14.7279">
                <path d={svgPaths.p303ca80} fill="var(--stroke-0, white)" id="Arrow 29" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1557px] items-center justify-center left-[2179px] top-[2664px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[1557px]">
            <div className="absolute inset-[-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1558 14.7279">
                <path d={svgPaths.pe261f00} fill="var(--stroke-0, white)" id="Arrow 31" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame590 />
      <Frame625 />
      <Frame626 />
      <Frame628 />
      <Frame629 />
      <Frame627 />
      <Frame594 />
      <Frame595 />
      <Frame597 />
      <Frame599 />
      <Frame601 />
      <Frame603 />
      <Frame609 />
      <Frame630 />
      <Frame605 />
      <Frame610 />
      <Frame611 />
      <Frame613 />
      <Frame615 />
      <Frame617 />
      <Frame618 />
      <Frame619 />
      <Frame620 />
      <Frame621 />
      <Frame622 />
      <Frame623 />
      <Frame592 />
      <Frame598 />
      <Frame602 />
      <Frame606 />
      <Frame614 />
      <Frame624 />
      <Frame632 />
      <Frame634 />
      <Frame636 />
      <Frame638 />
      <Frame640 />
      <Frame642 />
      <Frame644 />
      <Frame646 />
      <ProfilZboraA />
    </div>
  );
}

function Frame647() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2566px] p-[10px] rounded-[200px] top-[2612px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame648() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[2340px] p-[10px] rounded-[200px] top-[2282px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame649() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2526px] p-[10px] rounded-[200px] top-[6020px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame650() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2222px] p-[10px] rounded-[200px] top-[6020px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame651() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2085px] p-[10px] rounded-[200px] top-[5911px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame652() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2077px] p-[10px] rounded-[200px] top-[5711px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame653() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2014px] p-[10px] rounded-[200px] top-[5521px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame654() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2014px] p-[10px] rounded-[200px] top-[5317px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame656() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2006px] p-[10px] rounded-[200px] top-[5097px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame657() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2142px] p-[10px] rounded-[200px] top-[4335px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame658() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[2163px] p-[10px] rounded-[200px] top-[2612px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[252px]" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Heading">
        <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#111215] text-[24px]">Навигација</p>
      </div>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[21.88%]" data-name="shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4999 13.4999">
            <path d={svgPaths.p25276700} fill="var(--fill-0, #410464)" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame463() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Content1 />
      <div className="content-stretch flex items-start justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="IconButton">
        <ButtonContent1 />
      </div>
    </div>
  );
}

function Frame462() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame463 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[8px] pl-[16px] pr-[4px] relative shrink-0 w-[317px]" data-name="_Header">
      <Frame462 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Почетна
        </p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          О нама
        </p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Услови коришћења
        </p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Политика приватности
        </p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Heading">
        <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#111215] text-[24px]">Улогујте се</p>
      </div>
    </div>
  );
}

function Frame459() {
  return (
    <div className="content-stretch flex flex-col h-[68px] items-start py-[24px] relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="_Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pb-[8px] pl-[16px] pr-[4px] relative w-full">
            <Content6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[12px] relative" data-name="_Input Value">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#575168] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Унесите имејл
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[12px] relative" data-name="_Input Value">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#575168] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Унесите лозинку
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame460() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[200px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="TextField">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[15px] relative w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="_Label">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#111215] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Имејл
              </p>
            </div>
            <div className="bg-white content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="_InputElement">
              <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              <Content7 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="TextField">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[15px] relative w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="_Label">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#111215] text-[16px] tracking-[0.32px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Лозинка
              </p>
            </div>
            <div className="bg-white content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="_InputElement">
              <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              <Content8 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Пријави се
      </p>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Button content">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Заборављена лозинка
      </p>
    </div>
  );
}

function Frame461() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-px min-w-px relative">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[16px] py-[12px] relative w-full">
            <ButtonContent2 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[16px] py-[12px] relative w-full">
            <ButtonContent3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] relative w-full">
          <Frame461 />
        </div>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="_Footer">
      <Content9 />
    </div>
  );
}

function Dialog() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[3033px] max-w-[600px] min-w-[328px] py-[24px] rounded-[8px] top-[3043px] w-[328px]" data-name="Dialog">
      <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.06),0px_10px_20px_0px_rgba(0,0,0,0.08)]" />
      <Header />
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="_SelectList">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch cursor-pointer flex flex-col items-start px-[16px] relative w-full">
            <div className="bg-white content-stretch flex flex-col items-start pb-[12px] relative rounded-[4px] shrink-0 w-full" data-name="_SelectItem">
              <Content2 />
            </div>
            <div className="bg-white content-stretch flex flex-col items-start py-[12px] relative rounded-[4px] shrink-0 w-full" data-name="_SelectItem">
              <Content3 />
            </div>
            <div className="bg-white content-stretch flex flex-col items-start py-[12px] relative rounded-[4px] shrink-0 w-full" data-name="_SelectItem">
              <Content4 />
            </div>
            <div className="bg-white content-stretch flex flex-col items-start py-[12px] relative rounded-[4px] shrink-0 w-full" data-name="_SelectItem">
              <Content5 />
            </div>
          </div>
        </div>
      </div>
      <Frame459 />
      <Frame460 />
      <Footer2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[252px]" data-name="Heading">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-['Rubik:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px not-italic relative text-[#111215] text-[#383838] text-[0px] whitespace-pre-wrap">
        <span className="leading-[36px] text-[20px]">{`Региструјте нови збор `}</span>
        <span className="leading-[20px] text-[16px]">(користите ћирилицу зар</span>
        <span className="leading-[20px] text-[16px]">ад</span>
        <span className="leading-[20px] text-[16px]">{` бољег корисничког исуств`}</span>
        <span className="leading-[20px] text-[16px]">а</span>
        <span className="leading-[20px] text-[16px]">)</span>
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[252px]" data-name="Content">
      <Heading />
    </div>
  );
}

function ButtonContent4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[21.88%]" data-name="shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4999 13.4999">
            <path d={svgPaths.p25276700} fill="var(--fill-0, #410464)" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame466() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[297px]">
      <Content10 />
      <div className="content-stretch flex items-start justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="IconButton">
        <ButtonContent4 />
      </div>
    </div>
  );
}

function Frame465() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame466 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Header">
      <div aria-hidden="true" className="absolute border-[rgba(87,81,104,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pl-[16px] pr-[4px] relative w-full">
          <Frame465 />
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Нпр. Збор Коњарник
          </p>
        </div>
      </div>
    </div>
  );
}

function SelectField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] relative shrink-0 w-full" data-name="Select Field">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#383838] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Име збора*
      </p>
      <Select />
    </div>
  );
}

function InformationSquareIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="InformationSquareIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="InformationSquareIcon">
          <path clipRule="evenodd" d={svgPaths.p16712600} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame660() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#383838] text-[0px] text-[16px] w-[94px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <span className="leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Локација
        </span>
        <span className="leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          *
        </span>
      </p>
      <InformationSquareIcon />
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Нпр. Врачар, Београд, Србија
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame659() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame660 />
      <Select1 />
    </div>
  );
}

function SelectField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start pt-[16px] relative shrink-0 w-full" data-name="Select Field">
      <Frame659 />
    </div>
  );
}

function Frame663() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[16px] w-[272px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Додајте лого
      </p>
    </div>
  );
}

function CloudUpIcon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="CloudUpIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="CloudUpIcon">
          <path clipRule="evenodd" d={svgPaths.p19d24080} fill="var(--fill-0, #575168)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UploadIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="UploadIcon">
      <CloudUpIcon />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <UploadIcon />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#383838] text-[0px] text-[16px] text-center w-[168px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] mb-0">Изаберите или превуците слику</p>
        <p>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Може
          </span>
          <span className="leading-[20px]">те</span>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` додати `}</span>
          <span className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            PNG
          </span>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`, `}</span>
          <span className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            JPG и WebP
          </span>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`. `}</span>
          <span className="leading-[20px]">Максимално</span>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` `}</span>
          <span className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            3
          </span>
          <span className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` MБ`}</span>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            .
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-between left-0 pb-[24px] pt-[8px] top-0 w-[240px]">
      <Frame10 />
    </div>
  );
}

function Frame552() {
  return (
    <div className="h-[133px] relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function ButtonContent5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Изаберите слику
      </p>
    </div>
  );
}

function Frame664() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-end left-[21px] top-[51px] w-[240px]">
      <Frame552 />
      <div className="bg-white relative rounded-[100px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadField() {
  return (
    <div className="absolute bg-[#edeaf5] border border-[#4f378a] border-dashed h-[285px] left-0 rounded-[8px] top-0 w-[296px]" data-name="UploadField">
      <Frame664 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <UploadField />
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex flex-col h-[285px] items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame662() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame663 />
      <Frame233 />
    </div>
  );
}

function Frame666() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#383838] text-[0px] text-[16px] w-[272px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <span className="leading-[20px]">{`Kратак опис збора (макс `}</span>
        <span className="leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          5000
        </span>
        <span className="leading-[20px]">)*</span>
      </p>
    </div>
  );
}

function InputValue() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Input Value">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#383838] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function InputContentSuffix() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Input content + Suffix">
      <div className="content-stretch flex items-start justify-between p-[4px] relative size-full">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#575168] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`  Унесите опис`}</p>
        <InputValue />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[204px] relative rounded-[4px] shrink-0 w-full" data-name=".input">
      <div className="content-stretch flex items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <InputContentSuffix />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame665() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[240px] items-start py-[8px] relative shrink-0 w-full">
      <Frame666 />
      <Input />
    </div>
  );
}

function Frame668() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[16px] w-[272px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Званична мејл-адреса збора*
      </p>
    </div>
  );
}

function Select2() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            primer@domain.com
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame667() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame668 />
      <Select2 />
    </div>
  );
}

function SelectField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[296px]" data-name="Select Field">
      <Frame667 />
    </div>
  );
}

function Frame670() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[16px] w-[272px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Лозинка *
      </p>
    </div>
  );
}

function Select3() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Унесите лозинку
          </p>
          <div className="h-[11.5px] relative shrink-0 w-[19.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.5">
              <path clipRule="evenodd" d={svgPaths.pb4d0d80} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame669() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame670 />
      <Select3 />
    </div>
  );
}

function SelectField3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[296px]" data-name="Select Field">
      <Frame669 />
    </div>
  );
}

function Frame672() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[16px] w-[272px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Лозинка *
      </p>
    </div>
  );
}

function Select4() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Потврдите лозинку
          </p>
          <div className="h-[11.5px] relative shrink-0 w-[19.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.5">
              <path clipRule="evenodd" d={svgPaths.pb4d0d80} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame671() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame672 />
      <Select4 />
    </div>
  );
}

function SelectField4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[296px]" data-name="Select Field">
      <Frame671 />
    </div>
  );
}

function Frame673() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0">
      <div className="bg-[#fafafa] relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
      <Frame673 />
      <p className="flex-[1_0_0] font-['Noto_Sans:Regular',sans-serif] font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#322f35] text-[0px] text-[14px] tracking-[0.44px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <span className="leading-[24px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>{`Наставком регистрације прихватам `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] text-[#2463eb] underline" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Политику приватности
        </span>
      </p>
    </div>
  );
}

function CheckboxItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Checkbox Item">
      <Checkbox />
    </div>
  );
}

function Frame674() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0">
      <div className="bg-[#fafafa] relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
      <Frame674 />
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#322f35] text-[14px] tracking-[0.44px] w-[267px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>{`Наставком регистрације прихватам  да добијам обавештења о унапређењу апликације`}</p>
    </div>
  );
}

function CheckboxItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Checkbox Item">
      <Checkbox1 />
    </div>
  );
}

function CheckboxList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[299px]" data-name="Checkbox List">
      <CheckboxItem />
      <CheckboxItem1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pt-[4px] relative shrink-0 z-[2]" data-name="Icon">
      <div className="relative shrink-0 size-[24px]" data-name="Variant=Fill">
        <div className="absolute inset-[13.54%]" data-name="shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path d={svgPaths.p13b1ee00} fill="var(--fill-0, #093080)" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CloseButton() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="CloseButton">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="X-mark">
        <div className="absolute inset-[21.88%]" data-name="shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4999 13.4999">
            <path d={svgPaths.p25276700} fill="var(--fill-0, #383838)" id="shape" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function AlertHeader() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="AlertHeader">
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] isolate items-start min-h-px min-w-px relative" data-name="_Header">
        <Icon />
        <div className="flex flex-[1_0_0] flex-col font-['Rubik:Medium',sans-serif] font-medium justify-end leading-[0] min-h-px min-w-px relative text-[#22252b] text-[20px] tracking-[0.15px] z-[1]">
          <p className="leading-[32px] whitespace-pre-wrap">Важна информација</p>
        </div>
      </div>
      <CloseButton />
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#22252b] text-[16px] tracking-[0.44px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            После регистрације добићете мејл за потврду налога. Потврду је потребно обавити у року од 30 дана, иначе се регистрација неће завршити. Ако мејл није стигао, погледајте спам фолдер или нам пишите на: kontakt@zborapp.com
          </p>
        </div>
      </div>
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-[#e3f0ff] relative rounded-[4px] shrink-0 w-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#093080] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <AlertHeader />
        <Content11 />
      </div>
    </div>
  );
}

function CheckboxGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Checkbox Group">
      <CheckboxList />
      <Alert />
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full">
      <CheckboxGroup />
    </div>
  );
}

function Frame661() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-full">
      <Frame662 />
      <Frame665 />
      <SelectField2 />
      <SelectField3 />
      <SelectField4 />
      <Frame272 />
    </div>
  );
}

function ButtonContent6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврдите регистрацију
      </p>
    </div>
  );
}

function SelectList() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="_SelectList">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
          <SelectField />
          <SelectField1 />
          <Frame661 />
          <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
                <ButtonContent6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalZaRegistraciju() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1679px] items-start left-[2947px] max-w-[600px] min-w-[328px] py-[24px] rounded-[8px] top-[3956px] w-[328px]" data-name="Modal za registraciju">
      <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.06),0px_10px_20px_0px_rgba(0,0,0,0.08)]" />
      <Header1 />
      <SelectList />
    </div>
  );
}

function Pitanje() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2695px] p-[10px] rounded-[54px] top-[3415px]" data-name="pitanje">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li korisnik ulogovao?</p>
    </div>
  );
}

function Pitanje1() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[3524px] p-[10px] rounded-[54px] top-[3601px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">Da li korisnik ulogovao</p>
        <p>kao admin Zbora?</p>
      </div>
    </div>
  );
}

function Pitanje2() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[3500px] p-[10px] rounded-[54px] top-[3373px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">Da li korisnik ulogovao</p>
        <p>kao SuperAdmin ZborApp?</p>
      </div>
    </div>
  );
}

function Pitanje3() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[4036px] p-[10px] rounded-[54px] top-[3190px]" data-name="pitanje">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li je korisnik na stranici nekog zbora?</p>
    </div>
  );
}

function Pitanje4() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[4058px] p-[10px] rounded-[54px] top-[2960px]" data-name="pitanje">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li korisnik zeli da zaprati zbor?</p>
    </div>
  );
}

function Pitanje5() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[3820px] p-[10px] rounded-[54px] top-[3610px]" data-name="pitanje">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li je korisnik vec objavio nesto?</p>
    </div>
  );
}

function Pitanje6() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[5018px] p-[10px] rounded-[54px] top-[3629px]" data-name="pitanje">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li je korisnik posetio stranicu drugog zbora?</p>
    </div>
  );
}

function Pitanje7() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[5902px] p-[10px] rounded-[54px] top-[3631px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na “prati”?</p>
      </div>
    </div>
  );
}

function Pitanje8() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[6524px] p-[10px] rounded-[54px] top-[4953px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na “ukloni pridruzivanje zboru”?</p>
      </div>
    </div>
  );
}

function Pitanje9() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[6857px] p-[10px] rounded-[54px] top-[4961px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je neaktivan toliko diugo da `}</p>
        <p>sesija istice za 2 minuta?</p>
      </div>
    </div>
  );
}

function Pitanje10() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[6883px] p-[10px] rounded-[54px] top-[5835px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">Da li je korisnik kliknuo na</p>
        <p>“Prati zbor” а nije ulogovan?</p>
      </div>
    </div>
  );
}

function Pitanje11() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[8273px] p-[10px] rounded-[54px] top-[6845px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je zbor koji je korisnik zapratio `}</p>
        <p>upravo napravio novi dogadjaj ili objavu?`</p>
      </div>
    </div>
  );
}

function Pitanje12() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[5916px] p-[10px] rounded-[54px] top-[3966px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>podeli stranicu?</p>
      </div>
    </div>
  );
}

function Pitanje13() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[5921px] p-[10px] rounded-[54px] top-[4295px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na pridruzi se dogadjaju?</p>
      </div>
    </div>
  );
}

function Pitanje14() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[5902px] p-[10px] rounded-[54px] top-[5183px]" data-name="pitanje">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li je dogadjaj nov?</p>
    </div>
  );
}

function Pitanje15() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[5877px] p-[10px] rounded-[54px] top-[5336px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">Da li jekorisnik kliknuo na</p>
        <p>{` dogadjaj?`}</p>
      </div>
    </div>
  );
}

function Pitanje16() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2696px] p-[10px] rounded-[54px] top-[3634px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li korisnik krenuo da kuca u `}</p>
        <p>search baru?</p>
      </div>
    </div>
  );
}

function Pitanje17() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2701px] p-[10px] rounded-[54px] top-[3859px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">Da li je korisnik kliknuo na “</p>
        <p>registrujte novi zbor”?</p>
      </div>
    </div>
  );
}

function Pitanje18() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2705px] p-[10px] rounded-[54px] top-[4098px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na ikonu “expand”</p>
      </div>
    </div>
  );
}

function Pitanje19() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2716px] p-[10px] rounded-[54px] top-[4345px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na ikonu “minus”</p>
      </div>
    </div>
  );
}

function Pitanje20() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2723px] p-[10px] rounded-[54px] top-[4587px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na ikonu “plus”</p>
      </div>
    </div>
  );
}

function Pitanje21() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2726px] p-[10px] rounded-[54px] top-[4837px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na karticu zbora?</p>
      </div>
    </div>
  );
}

function Pitanje22() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[3915px] p-[10px] rounded-[54px] top-[5523px]" data-name="pitanje">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li je profil scrapovan sa Insta?</p>
    </div>
  );
}

function Pitanje23() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2729px] p-[10px] rounded-[54px] top-[5069px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na pogledaj vise?</p>
      </div>
    </div>
  );
}

function Pitanje24() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2737px] p-[10px] rounded-[54px] top-[5306px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na deli ikonicu?</p>
      </div>
    </div>
  );
}

function Pitanje25() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2730px] p-[10px] rounded-[54px] top-[5542px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na pagionation?</p>
      </div>
    </div>
  );
}

function Pitanje26() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2743px] p-[10px] rounded-[54px] top-[5773px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na thumb up modal o korisnickom iskrustvu?</p>
      </div>
    </div>
  );
}

function Pitanje27() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2615px] p-[10px] rounded-[54px] top-[6002px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p className="mb-0">{`na thumbs down modal o `}</p>
        <p>korisnickom iskrustvu?</p>
      </div>
    </div>
  );
}

function Pitanje28() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2317px] p-[10px] rounded-[54px] top-[6011px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na mapu u bootm nav baru?</p>
      </div>
    </div>
  );
}

function Pitanje29() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2000px] p-[10px] rounded-[54px] top-[6011px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>kalendar u bootm nav baru?</p>
      </div>
    </div>
  );
}

function Pitanje30() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2000px] p-[10px] rounded-[54px] top-[5819px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>profil u bootom nav baru?</p>
      </div>
    </div>
  );
}

function Pitanje31() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2000px] p-[10px] rounded-[54px] top-[5630px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>o nama?</p>
      </div>
    </div>
  );
}

function Pitanje32() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[1990px] p-[10px] rounded-[54px] top-[5440px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>sledeca verzija?</p>
      </div>
    </div>
  );
}

function Pitanje33() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[1991px] p-[10px] rounded-[54px] top-[5225px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>politika privatnostui?</p>
      </div>
    </div>
  );
}

function Pitanje34() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[1990px] p-[10px] rounded-[54px] top-[5005px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na upravljanje kolacicima?</p>
      </div>
    </div>
  );
}

function Pitanje35() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2006px] p-[10px] rounded-[54px] top-[4243px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na uslove koriscenja?</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#2c313a] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="text">
      <div aria-hidden="true" className="absolute border border-[#2c313a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-white w-[295px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Одаберите општину којој ваш збор припада, а у опису збора додајте које месне заједнице обухватате (ако их има више)
      </p>
    </div>
  );
}

function ContainerAndArrows() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="container and arrows">
      <Text1 />
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[3347px] top-[4182px] w-[305px]" data-name="Tooltip">
      <ContainerAndArrows />
      <div className="flex h-[5px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[10px] relative w-[5px]" data-name="Arrow">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 5 10">
              <path d="M5 10L5 0L0 5L5 10Z" fill="var(--fill-0, #2C313A)" id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuHamburgerIcon2() {
  return (
    <div className="absolute left-[323px] size-[24px] top-[16px]" data-name="MenuHamburgerIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MenuHamburgerIcon">
          <path clipRule="evenodd" d={svgPaths.p15740f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ZborAppLogoT4() {
  return (
    <div className="-translate-y-1/2 absolute h-[35px] left-[15px] top-1/2 w-[98.333px]" data-name="ZborApp Logo T1">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3325 35">
        <g clipPath="url(#clip0_1_20615)" id="ZborApp Logo T1">
          <path d={svgPaths.p1c474f00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2362900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p8dc8c00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2ff691b0} fill="var(--fill-0, white)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p10d2a700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.p2469b1f2} id="Vector_6" stroke="var(--stroke-0, #EE2D2C)" strokeMiterlimit="10" strokeWidth="5.67" />
        </g>
        <defs>
          <clipPath id="clip0_1_20615">
            <rect fill="white" height="35" width="98.3325" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame293() {
  return (
    <div className="bg-[#4f378a] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0">
      <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="TopoNavBar">
        <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
        <MenuHamburgerIcon2 />
        <ZborAppLogoT4 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0 w-[105px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow">
        <div className="absolute inset-[28.05%_17.71%_28.2%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4993 10.5">
            <path d={svgPaths.p2aa51880} fill="var(--fill-0, #4F378A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.625] relative shrink-0 text-[#4f378a] text-[16px] text-left tracking-[0.1504px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Назад
      </p>
    </button>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="tilbake">
        <Frame1 />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame217() {
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

function Component025Instagram1() {
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

function Component021Facebook3() {
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

function Group40() {
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

function TikTok1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tik-tok 3">
      <Group40 />
    </div>
  );
}

function Group41() {
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

function Viber1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="viber (1) 2">
      <Group41 />
    </div>
  );
}

function Group43() {
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

function Group42() {
  return (
    <div className="absolute contents inset-[6.61%_0]" data-name="Group">
      <Group43 />
    </div>
  );
}

function Telegram1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="telegram 3">
      <Group42 />
    </div>
  );
}

function Frame553() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Component025Instagram1 />
      <Component021Facebook3 />
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path d={svgPaths.p23287600} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
      <TikTok1 />
      <Viber1 />
      <Telegram1 />
    </div>
  );
}

function Frame675() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Frame553 />
      </div>
    </div>
  );
}

function ZborNaslovna1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[164px] items-start py-[16px] relative shrink-0 w-[330px]" data-name="ZborNaslovna">
      <Frame336 />
      <Frame217 />
      <Frame675 />
    </div>
  );
}

function Frame495() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[21.5px] top-0">
      <div className="bg-[#4f378a] content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[317px]" data-name="3">
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#fffcfd] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            Прати
          </p>
        </div>
      </div>
      <div className="bg-[#fffcfd] content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[317px]" data-name="405">
        <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4f378a] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            Подели страницу
          </p>
        </div>
      </div>
    </div>
  );
}

function TabContent2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="TabContent">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Објаве
        </p>
      </div>
    </div>
  );
}

function TabContent3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="TabContent">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Догађаји
        </p>
      </div>
    </div>
  );
}

function TabGroup2() {
  return (
    <div className="absolute border-[#dadbdd] border-b border-solid h-[48px] left-[23px] top-[136px] w-[188px]" data-name="TabGroup">
      <div className="absolute content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] top-0" data-name="Tab">
        <div aria-hidden="true" className="absolute border-[#410464] border-b-3 border-solid inset-0 pointer-events-none" />
        <TabContent2 />
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[85px] px-[16px] py-[12px] top-0" data-name="Tab">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
        <TabContent3 />
      </div>
    </div>
  );
}

function KarticaObjavaMobile2() {
  return (
    <div className="absolute bg-[#edeaf5] h-[207px] left-0 rounded-[8px] top-0 w-[360px]" data-name="KarticaObjavaMobile">
      <div className="absolute h-[160px] left-[12px] top-[24px] w-[117.717px]" data-name="viber_image_2025-06-24_14-08-21-155 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgViberImage202506241408211552} />
      </div>
      <p className="absolute font-['Noto_Sans:Bold',sans-serif] font-bold h-[23px] leading-[18px] left-[150px] text-[#2a2a2a] text-[18px] top-[24px] w-[198px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Објава о ....
      </p>
    </div>
  );
}

function Frame278() {
  return (
    <div className="h-[415px] relative shrink-0 w-[360px]">
      <Frame495 />
      <TabGroup2 />
      <div className="absolute h-[207px] left-0 top-[208px] w-[360px]" data-name="KarticaDogadjajMobile">
        <KarticaObjavaMobile2 />
      </div>
    </div>
  );
}

function Frame311() {
  return (
    <div className="content-stretch flex flex-col h-[579px] items-center relative shrink-0 w-[368px]">
      <ZborNaslovna1 />
      <Frame278 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[684px] items-center relative shrink-0 w-full">
      <Frame293 />
      <Frame311 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-0 w-[360px]">
      <Frame200 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#fefdff] h-[1097px] overflow-clip relative shrink-0 w-full">
      <Frame205 />
    </div>
  );
}

function Frame275() {
  return (
    <div className="content-stretch flex flex-col h-[704px] items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Pages2() {
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

function HeadingContainer2() {
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

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left2 />
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

function Divider2() {
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

function ThumbUpIcon4() {
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

function ThumbUpIcon5() {
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

function Frame62() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon4 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpIcon5 />
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame62 />
    </div>
  );
}

function Frame236() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
          <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
            <Container2 />
            <Divider2 />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <Frame61 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame275 />
      <div className="content-stretch flex items-start py-[24px] relative shrink-0" data-name="Pagination">
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
          <Pages2 />
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
      <Frame236 />
    </div>
  );
}

function ZborAppLogoT5() {
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

function Frame52() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT5 />
    </div>
  );
}

function Frame54() {
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

function Frame53() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame54 />
    </div>
  );
}

function Frame56() {
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

function Frame55() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame56 />
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame53 />
      <Frame55 />
    </div>
  );
}

function Group68() {
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

function Component021Facebook4() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group68 />
    </div>
  );
}

function Frame263() {
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

function Frame276() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook4 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame263 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame276 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame64 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame52 />
      <Frame337 />
      <Frame63 />
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

function Frame50() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame51 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame50 />
    </div>
  );
}

function Footer3() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame49 />
    </div>
  );
}

function Frame235() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame274 />
      <div className="h-[741px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer3 />
      </div>
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame235 />
    </div>
  );
}

function Frame234() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-3px] w-[360px]">
      <Frame273 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#fffcfd] h-[2050px] left-[3443px] overflow-clip top-[4893px] w-[360px]" data-name="Објава">
      <Frame234 />
    </div>
  );
}

function HeadingContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Шта сте тражили?
        </p>
      </div>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left3 />
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

function Divider3() {
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

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">Проналажење информација</p>
        <p>{` о зборовима`}</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Checkbox Item">
        <Checkbox2 />
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Проналажење мог збора
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox3 />
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Учествовање на збору
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox4 />
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Преглед документације збора
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox5 />
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Гласање / одговор на анкету
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox6 />
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Регистровање збора
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox7 />
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Друго
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox8 />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame67 />
      <Frame68 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <Frame73 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[4px] relative shrink-0">
      <Frame66 />
    </div>
  );
}

function Divider4() {
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

function ButtonContent7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent7 />
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
        <Left4 />
      </div>
    </div>
  );
}

function Footer4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider4 />
      <Section />
    </div>
  );
}

function HeadingContainer4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          <p className="mb-0">{`Опишите шта `}</p>
          <p>{`подразумевате под ”друго” `}</p>
        </div>
      </div>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between px-[24px] relative w-full">
        <Left5 />
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

function Divider5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 332 24">
        <g id="Divider">
          <rect fill="#FFFCFD" height="24" width="332" />
          <line id="divider line" stroke="var(--stroke-0, #B3ACC5)" x2="332" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function InputValue1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Input Value">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        |
      </p>
    </div>
  );
}

function InputContentSuffix1() {
  return (
    <div className="flex-[1_0_0] h-[105px] min-h-px min-w-px relative" data-name="Input content + Suffix">
      <div className="content-stretch flex items-start justify-between p-[4px] relative size-full">
        <InputValue1 />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[105px] relative rounded-[4px] shrink-0 w-full" data-name=".input">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <InputContentSuffix1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col h-[159px] items-start px-[24px] relative shrink-0 w-[308px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[284px]" data-name="TextArea">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name=".input/.Label">
          <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#333] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Додајте кратак опис (без ваших личних података)
          </p>
        </div>
        <Input1 />
      </div>
    </div>
  );
}

function Divider6() {
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

function ButtonContent8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
        <Left6 />
      </div>
    </div>
  );
}

function Footer5() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider6 />
      <Section1 />
    </div>
  );
}

function HeadingContainer5() {
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

function Left7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between px-[24px] relative w-full">
        <Left7 />
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

function Divider7() {
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

function ThumbUpIcon6() {
  return (
    <div className="relative size-[40px]" data-name="ThumbUpIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="ThumbUpIcon">
          <path clipRule="evenodd" d={svgPaths.p37190900} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ThumbUpFillIcon() {
  return (
    <div className="relative size-[40px]" data-name="ThumbUpFillIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="ThumbUpFillIcon">
          <path clipRule="evenodd" d={svgPaths.p1dc24500} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon6 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpFillIcon />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame76 />
    </div>
  );
}

function ButtonContent9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
        <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
              <ButtonContent9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadingContainer6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Шта сте тражили?
        </p>
      </div>
    </div>
  );
}

function Left8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative w-full">
          <Left8 />
          <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="XMarkIcon">
            <div className="absolute inset-[21.95%_21.8%_21.8%_21.8%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5374 13.5">
                <path clipRule="evenodd" d={svgPaths.p339b6700} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Divider8() {
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

function Checkbox9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Информације о зборовима
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox9 />
      </div>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Проналажење мог збора
      </p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox10 />
      </div>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Учествовање на збору
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox11 />
      </div>
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Преглед документације збора
      </p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox12 />
      </div>
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Гласање / одговор на анкету
      </p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox13 />
      </div>
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Друго
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox14 />
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[4px] relative shrink-0">
      <Frame78 />
    </div>
  );
}

function Divider9() {
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

function ButtonContent10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
        <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
              <ButtonContent10 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider9 />
      <Section3 />
    </div>
  );
}

function HeadingContainer7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          <p className="mb-0">{`Опишите шта `}</p>
          <p>{`подразумевате под ”друго” `}</p>
        </div>
      </div>
    </div>
  );
}

function Left9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer7 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between px-[24px] relative w-full">
        <Left9 />
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

function Divider10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 332 24">
        <g id="Divider">
          <rect fill="#FFFCFD" height="24" width="332" />
          <line id="divider line" stroke="var(--stroke-0, #B3ACC5)" x2="332" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function InputValue2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Input Value">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        |
      </p>
    </div>
  );
}

function InputContentSuffix2() {
  return (
    <div className="flex-[1_0_0] h-[105px] min-h-px min-w-px relative" data-name="Input content + Suffix">
      <div className="content-stretch flex items-start justify-between p-[4px] relative size-full">
        <InputValue2 />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[105px] relative rounded-[4px] shrink-0 w-full" data-name=".input">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <InputContentSuffix2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col h-[159px] items-start pl-[24px] relative shrink-0 w-[308px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="TextArea">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name=".input/.Label">
          <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#333] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Додајте кратак опис (без ваших личних података)
          </p>
        </div>
        <Input2 />
      </div>
    </div>
  );
}

function Divider11() {
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

function ButtonContent11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
        <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
              <ButtonContent11 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer7() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider11 />
      <Section4 />
    </div>
  );
}

function HeadingContainer8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Опишите проблем
        </p>
      </div>
    </div>
  );
}

function Left10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer8 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between px-[24px] relative w-full">
        <Left10 />
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

function Divider12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 332 24">
        <g id="Divider">
          <rect fill="#FFFCFD" height="24" width="332" />
          <line id="divider line" stroke="var(--stroke-0, #B3ACC5)" x2="332" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function InputValue3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".Input Value">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        |
      </p>
    </div>
  );
}

function InputContentSuffix3() {
  return (
    <div className="flex-[1_0_0] h-[105px] min-h-px min-w-px relative" data-name="Input content + Suffix">
      <div className="content-stretch flex items-start justify-between p-[4px] relative size-full">
        <InputValue3 />
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[105px] relative rounded-[4px] shrink-0 w-full" data-name=".input">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <InputContentSuffix3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col h-[159px] items-start px-[24px] relative shrink-0 w-[314px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[290px]" data-name="TextArea">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name=".input/.Label">
          <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#333] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            <p className="mb-0">{`Додајте кратак опис (без ваших `}</p>
            <p>личних података)</p>
          </div>
        </div>
        <Input3 />
      </div>
    </div>
  );
}

function Divider13() {
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

function ButtonContent12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Left11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
        <Left11 />
      </div>
    </div>
  );
}

function Footer8() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider13 />
      <Section5 />
    </div>
  );
}

function HeadingContainer9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#333] text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Зашто нисте успели да
          <br aria-hidden="true" />
          нађете то што сте желели?
        </p>
      </div>
    </div>
  );
}

function Left12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer9 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between px-[24px] relative w-full">
        <Left12 />
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

function Divider14() {
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

function Checkbox15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Информација не постоји
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox15 />
      </div>
    </div>
  );
}

function Checkbox16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Навигација је лоша
      </p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox16 />
      </div>
    </div>
  );
}

function Checkbox17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Не разумем информацију
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox17 />
      </div>
    </div>
  );
}

function Checkbox18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">{`Страница није прилоагођена `}</p>
        <p>{`мојим посебним потребама `}</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="h-[40px] relative shrink-0 w-[302px]">
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[24px] top-[calc(50%+4px)]" data-name="Checkbox Item">
        <Checkbox18 />
      </div>
    </div>
  );
}

function Checkbox19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Нешто није радило како треба
      </p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox19 />
      </div>
    </div>
  );
}

function Checkbox20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Друго
      </p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Checkbox Item">
        <Checkbox20 />
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame89 />
      <Frame90 />
      <Frame91 />
      <Frame92 />
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[4px] relative shrink-0">
      <Frame88 />
    </div>
  );
}

function Divider15() {
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

function ButtonContent13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Section6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
        <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
              <ButtonContent13 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider15 />
      <Section6 />
    </div>
  );
}

function HeadingContainer10() {
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

function Left13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer10 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between px-[24px] relative w-full">
        <Left13 />
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

function Divider16() {
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

function Frame97() {
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

function Frame96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative">
      <Frame97 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame96 />
    </div>
  );
}

function ButtonContent14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврди
      </p>
    </div>
  );
}

function Left14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[24px] relative w-full">
        <Left14 />
      </div>
    </div>
  );
}

function CheckmarkCircleFillIcon() {
  return (
    <div className="h-[24.25px] relative shrink-0 w-[20.25px]" data-name="CheckmarkCircleFillIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.25 24.25">
        <g id="CheckmarkCircleFillIcon">
          <path clipRule="evenodd" d={svgPaths.p3a1c3e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function XMarkIcon() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="XMarkIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="XMarkIcon">
          <path clipRule="evenodd" d={svgPaths.p7ec6300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Alert1() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex gap-[8px] items-start left-[2676px] pl-[24px] pr-[16px] py-[16px] rounded-[4px] top-[8529px] w-[363px]" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#246b2c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <CheckmarkCircleFillIcon />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fffcfd] text-[16px] w-[258px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`Хвала вам на повратној информацији! `}</p>
      <XMarkIcon />
    </div>
  );
}

function ZborAppLogoT6() {
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

function Frame677() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[43px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function MenuHamburgerIcon3() {
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

function Frame554() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame677 />
      <MenuHamburgerIcon3 />
    </div>
  );
}

function Frame676() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[16px] top-1/2 w-[328px]">
      <ZborAppLogoT6 />
      <Frame554 />
    </div>
  );
}

function TopoNavBar1() {
  return (
    <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="TopoNavBar">
      <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame676 />
    </div>
  );
}

function Frame294() {
  return (
    <div className="absolute bg-[#4f378a] content-stretch flex flex-col items-start left-0 pb-[16px] pt-[24px] top-0">
      <TopoNavBar1 />
    </div>
  );
}

function Frame511() {
  return <div className="absolute h-[60px] left-[15px] top-[307px] w-[334px]" />;
}

function Frame458() {
  return <div className="absolute h-[48px] left-[15px] top-[367px] w-[329px]" />;
}

function Frame213() {
  return <div className="-translate-x-1/2 absolute h-[707px] left-1/2 top-[34px] w-[332px]" />;
}

function Frame215() {
  return (
    <div className="h-[699px] relative shrink-0 w-[330px]">
      <Frame213 />
    </div>
  );
}

function Frame328() {
  return (
    <div className="absolute content-stretch flex flex-col h-[600px] items-start left-[15px] pt-[8px] top-[471px]">
      <Frame215 />
    </div>
  );
}

function Group70() {
  return (
    <div className="relative shrink-0 size-[76px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <g id="Group 70">
          <path clipRule="evenodd" d={svgPaths.p25ffb400} fill="var(--fill-0, #69607E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame584() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-[#383838] w-[240px] whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[20px] w-[155px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`<Tip korisnika>`}</p>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[19px] leading-[20px] relative shrink-0 text-[16px] w-[200px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        kontak@gmail.com
      </p>
    </div>
  );
}

function Frame555() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Group70 />
      <Frame584 />
    </div>
  );
}

function ButtonContent15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#383838] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Мој збор
      </p>
    </div>
  );
}

function Frame558() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[312px]">
      <ButtonContent15 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Zbor X
        </p>
      </div>
    </div>
  );
}

function Frame557() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame558 />
      <div className="bg-[#fffcfd] content-stretch cursor-pointer flex flex-col items-start pb-[12px] pt-[20px] relative rounded-[4px] shrink-0 w-[308px]" data-name="_SelectItem">
        <Content12 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex h-[102px] items-start justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0 w-[328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e9e3e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame557 />
    </div>
  );
}

function ButtonContent16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#383838] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Зборови које пратим
      </p>
    </div>
  );
}

function Frame559() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[297px]">
      <ButtonContent16 />
      <div className="flex h-[8.167px] items-center justify-center relative shrink-0 w-[14.584px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[14.584px] relative w-[8.167px]" data-name="shape">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 14.5835">
              <path d={svgPaths.p124c6780} fill="var(--fill-0, #4F378A)" id="shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e9e3e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame559 />
    </div>
  );
}

function Frame556() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame585() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[15px] top-[121px] w-[330px]">
      <Frame555 />
      <Frame556 />
    </div>
  );
}

function ZborAppLogoT7() {
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

function Frame101() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT7 />
    </div>
  );
}

function Frame103() {
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

function Frame102() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame103 />
    </div>
  );
}

function Frame105() {
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

function Frame104() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame105 />
    </div>
  );
}

function Frame338() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame102 />
      <Frame104 />
    </div>
  );
}

function Group71() {
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

function Component021Facebook5() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group71 />
    </div>
  );
}

function Frame283() {
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

function Frame282() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook5 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame283 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame282 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame107 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame101 />
      <Frame338 />
      <Frame106 />
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

function Frame99() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame100 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame99 />
    </div>
  );
}

function Footer10() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame98 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="absolute h-[1071px] left-0 top-0 w-[360px]">
      <Frame294 />
      <Frame511 />
      <Frame458 />
      <Frame328 />
      <Frame585 />
      <div className="absolute h-[796px] left-0 top-[513px] w-[360px]" data-name="Footer">
        <Footer10 />
      </div>
    </div>
  );
}

function Frame208() {
  return <div className="absolute h-[40px] left-0 top-[1084px] w-[360px]" />;
}

function Frame206() {
  return (
    <div className="absolute h-[783px] left-0 top-[2px] w-[360px]">
      <Frame207 />
      <Frame208 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#fefdff] h-[993px] left-0 overflow-clip top-0 w-[360px]">
      <Frame206 />
    </div>
  );
}

function Frame281() {
  return (
    <div className="absolute h-[369px] left-0 top-0 w-[360px]">
      <Frame14 />
    </div>
  );
}

function Frame280() {
  return (
    <div className="h-[1723px] relative shrink-0 w-full">
      <Frame281 />
    </div>
  );
}

function Frame238() {
  return (
    <div className="content-stretch flex flex-col h-[2171px] items-start relative shrink-0 w-full">
      <Frame280 />
    </div>
  );
}

function Frame279() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2171px] items-start left-0 top-0 w-[360px]">
      <Frame238 />
    </div>
  );
}

function Frame237() {
  return (
    <div className="absolute h-[2116px] left-0 top-[-3px] w-[360px]">
      <Frame279 />
    </div>
  );
}

function Gjeld1() {
  return (
    <div className="absolute bg-[#fffcfd] h-[2265px] left-0 overflow-clip top-[-3px] w-[360px]" data-name="Gjeld">
      <Frame237 />
    </div>
  );
}

function Profil() {
  return (
    <div className="absolute bg-[#fefdff] h-[987px] left-[1561px] overflow-clip top-[5801px] w-[360px]" data-name="Profil">
      <Gjeld1 />
    </div>
  );
}

function ZborAppLogoT8() {
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

function Frame679() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[43px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function MenuHamburgerIcon4() {
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

function Frame560() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame679 />
      <MenuHamburgerIcon4 />
    </div>
  );
}

function Frame678() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[16px] top-1/2 w-[328px]">
      <ZborAppLogoT8 />
      <Frame560 />
    </div>
  );
}

function TopoNavBar2() {
  return (
    <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="TopoNavBar">
      <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame678 />
    </div>
  );
}

function Frame329() {
  return (
    <div className="bg-[#4f378a] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0">
      <TopoNavBar2 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame329 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame210 />
    </div>
  );
}

function Frame683() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans:Display_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[36px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[36px] whitespace-pre-wrap">О нама</p>
      </div>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[162px] leading-[20px] relative shrink-0 text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">ЗборАпп је настао након 15. марта 2025. године, када је постало јасно да људима недостаје једно место на коме могу да пронађу све информације о зборовима ‒ шта су, где се одржавају и како им се придружује. Платформа је званично решење ИТ Србије, направљено од стране људи који су и сами део покрета</p>
        <p>
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function Frame684() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[300px] whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold h-[29px] leading-[36px] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Идеја
      </p>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] w-[247px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Желели смо да омогућимо свима да лако пронађу свој локални збор и да му се придруже уживо. Да информације буду јасне, доступне и на једном месту, да се нови и постојећи чланови повежу преко канала које већ користе (Вибер, Телеграм и други) и да покрет буде видљивији и снажнији.
      </p>
    </div>
  );
}

function Frame682() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[10px] relative text-[#2a2a2a] w-full">
        <Frame683 />
        <Frame684 />
      </div>
    </div>
  );
}

function Grafika() {
  return (
    <div className="h-[162px] relative shrink-0 w-[330px]" data-name="Grafika 01 3">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 330 162">
        <g id="Grafika 01 3">
          <path d={svgPaths.p14eed600} fill="var(--fill-0, #333333)" id="Vector" />
          <path d={svgPaths.pef56000} fill="var(--fill-0, #333333)" id="Vector_2" />
          <path d={svgPaths.p215b0300} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p3bfd6600} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p27421100} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p19fb5e40} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p5543a00} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.pd6cc400} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.pff825c0} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p11257700} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p103e6e80} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p28dc4080} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p3099e300} fill="var(--fill-0, black)" id="Vector_13" />
          <path d={svgPaths.p345dce80} fill="var(--fill-0, black)" id="Vector_14" />
          <path d={svgPaths.p2d705800} fill="var(--fill-0, #191919)" id="Vector_15" />
          <path d={svgPaths.p1285df80} fill="var(--fill-0, #191919)" id="Vector_16" />
          <path d={svgPaths.p15cdf3c0} fill="var(--fill-0, #191919)" id="Vector_17" />
          <path d={svgPaths.p3ff96500} fill="var(--fill-0, #191919)" id="Vector_18" />
          <path d={svgPaths.p2b4ad580} fill="var(--fill-0, #191919)" id="Vector_19" />
          <path d={svgPaths.pf262d80} fill="var(--fill-0, #191919)" id="Vector_20" />
          <path d={svgPaths.p39a22980} fill="var(--fill-0, #191919)" id="Vector_21" />
          <path d={svgPaths.p1c6d2800} fill="var(--fill-0, black)" id="Vector_22" />
          <path d={svgPaths.p39cbfc00} fill="var(--fill-0, black)" id="Vector_23" />
          <path d={svgPaths.p107c3b00} fill="var(--fill-0, black)" id="Vector_24" />
          <path d={svgPaths.p38386940} fill="var(--fill-0, black)" id="Vector_25" />
          <path d={svgPaths.p38394b80} fill="var(--fill-0, black)" id="Vector_26" />
          <path d={svgPaths.p14f8f480} fill="var(--fill-0, black)" id="Vector_27" />
          <path d={svgPaths.p965ed00} fill="var(--fill-0, black)" id="Vector_28" />
          <path d={svgPaths.p26c4cd00} fill="var(--fill-0, #4D3985)" id="Vector_29" />
          <path d={svgPaths.p350e9700} fill="var(--fill-0, #4D3985)" id="Vector_30" />
          <path d={svgPaths.p1cea8000} fill="var(--fill-0, #4D3985)" id="Vector_31" />
          <path d={svgPaths.p2742a00} fill="var(--fill-0, #FFFCFD)" id="Vector_32" />
          <path d={svgPaths.p161df840} fill="var(--fill-0, #4D3985)" id="Vector_33" />
          <path d={svgPaths.p3926f800} fill="var(--fill-0, #7093AC)" id="Vector_34" />
          <path d={svgPaths.p790da80} fill="var(--fill-0, #7093AC)" id="Vector_35" />
          <path d={svgPaths.p23bf7600} fill="var(--fill-0, #7093AC)" id="Vector_36" />
          <path d={svgPaths.p225fa000} fill="var(--fill-0, #FFFCFD)" id="Vector_37" />
          <path d={svgPaths.p12f4d100} fill="var(--fill-0, #7093AC)" id="Vector_38" />
          <path d={svgPaths.p1559b300} fill="var(--fill-0, #B1D794)" id="Vector_39" />
          <path d={svgPaths.p6c3d200} fill="var(--fill-0, #B1D794)" id="Vector_40" />
          <path d={svgPaths.p35930680} fill="var(--fill-0, #B1D794)" id="Vector_41" />
          <path d={svgPaths.p11da8300} fill="var(--fill-0, #FFFCFD)" id="Vector_42" />
          <path d={svgPaths.p1bc4d880} fill="var(--fill-0, #B1D794)" id="Vector_43" />
          <path d={svgPaths.pae1f780} fill="var(--fill-0, #E3BA85)" id="Vector_44" />
          <path d={svgPaths.p3df91280} fill="var(--fill-0, #E3BA85)" id="Vector_45" />
          <path d={svgPaths.p22571f00} fill="var(--fill-0, #E3BA85)" id="Vector_46" />
          <path d={svgPaths.pbbd0a00} fill="var(--fill-0, #FFFCFD)" id="Vector_47" />
          <path d={svgPaths.p3ff2ba00} fill="var(--fill-0, #E3BA85)" id="Vector_48" />
          <path d={svgPaths.p34c6e300} fill="var(--fill-0, #DE7772)" id="Vector_49" />
          <path d={svgPaths.p2fc9a00} fill="var(--fill-0, #DE7772)" id="Vector_50" />
          <path d={svgPaths.p15a29700} fill="var(--fill-0, #DE7772)" id="Vector_51" />
          <path d={svgPaths.p26066d00} fill="var(--fill-0, #FFFCFD)" id="Vector_52" />
          <path d={svgPaths.p22581a80} fill="var(--fill-0, #DE7772)" id="Vector_53" />
          <path d={svgPaths.p11180640} fill="var(--fill-0, #0066E4)" id="Vector_54" />
          <path d={svgPaths.p2190fe40} fill="var(--fill-0, #0066E4)" id="Vector_55" />
          <path d={svgPaths.p3bc9e200} fill="var(--fill-0, #0066E4)" id="Vector_56" />
          <path d={svgPaths.p5daa680} fill="var(--fill-0, #FFFCFD)" id="Vector_57" />
          <path d={svgPaths.p35610e70} fill="var(--fill-0, #0066E4)" id="Vector_58" />
          <path d={svgPaths.p3ab55580} fill="var(--fill-0, #383838)" id="Vector_59" />
          <path d={svgPaths.p72ab480} fill="var(--fill-0, #383838)" id="Vector_60" />
          <path d={svgPaths.p170ed800} fill="var(--fill-0, #383838)" id="Vector_61" />
          <path d={svgPaths.p25ce6700} fill="var(--fill-0, #383838)" id="Vector_62" />
          <path d={svgPaths.p3d587900} fill="var(--fill-0, #383838)" id="Vector_63" />
          <path d={svgPaths.p18564600} fill="var(--fill-0, #383838)" id="Vector_64" />
          <path d={svgPaths.p1c22b240} fill="var(--fill-0, #383838)" id="Vector_65" />
          <path d={svgPaths.pdf8bc00} fill="var(--fill-0, #383838)" id="Vector_66" />
          <path d={svgPaths.p1114200} fill="var(--fill-0, #383838)" id="Vector_67" />
          <path d={svgPaths.p335ded00} fill="var(--fill-0, #383838)" id="Vector_68" />
          <path d={svgPaths.p259ded80} fill="var(--fill-0, #383838)" id="Vector_69" />
          <path d={svgPaths.p36bb9c00} fill="var(--fill-0, #383838)" id="Vector_70" />
          <path d={svgPaths.p14130800} fill="var(--fill-0, #383838)" id="Vector_71" />
          <path d={svgPaths.p3a698d00} fill="var(--fill-0, #383838)" id="Vector_72" />
          <path d={svgPaths.p3f4f3700} fill="var(--fill-0, #383838)" id="Vector_73" />
          <path d={svgPaths.p97ce700} fill="var(--fill-0, #383838)" id="Vector_74" />
          <path d={svgPaths.p292fcc80} fill="var(--fill-0, #383838)" id="Vector_75" />
          <path d={svgPaths.p1ce4a900} fill="var(--fill-0, #383838)" id="Vector_76" />
          <path d={svgPaths.pdb67100} fill="var(--fill-0, #383838)" id="Vector_77" />
          <path d={svgPaths.p317e1b00} fill="var(--fill-0, #383838)" id="Vector_78" />
          <path d={svgPaths.p9d3a800} fill="var(--fill-0, #383838)" id="Vector_79" />
          <path d={svgPaths.p1b118a80} fill="var(--fill-0, #383838)" id="Vector_80" />
          <path d={svgPaths.p1f0f7300} fill="var(--fill-0, #383838)" id="Vector_81" />
          <path d={svgPaths.p3e273ef0} fill="var(--fill-0, #383838)" id="Vector_82" />
          <path d={svgPaths.p5c19e00} fill="var(--fill-0, #383838)" id="Vector_83" />
          <path d={svgPaths.p9ad7d00} fill="var(--fill-0, #383838)" id="Vector_84" />
          <path d={svgPaths.p18f26f00} fill="var(--fill-0, #383838)" id="Vector_85" />
          <path d={svgPaths.p2790e400} fill="var(--fill-0, #383838)" id="Vector_86" />
          <path d={svgPaths.p1e9d7d80} fill="var(--fill-0, #383838)" id="Vector_87" />
          <path d={svgPaths.p34882100} fill="var(--fill-0, #383838)" id="Vector_88" />
          <path d={svgPaths.pd890500} fill="var(--fill-0, #383838)" id="Vector_89" />
          <path d={svgPaths.p10ce9580} fill="var(--fill-0, #383838)" id="Vector_90" />
          <path d={svgPaths.p1bf82880} fill="var(--fill-0, #383838)" id="Vector_91" />
          <path d={svgPaths.p3e4fc380} fill="var(--fill-0, #383838)" id="Vector_92" />
          <path d={svgPaths.p2431ea00} fill="var(--fill-0, #383838)" id="Vector_93" />
          <path d={svgPaths.p379d7420} fill="var(--fill-0, #383838)" id="Vector_94" />
          <path d={svgPaths.p3087b700} fill="var(--fill-0, #383838)" id="Vector_95" />
          <path d={svgPaths.p10e7a300} fill="var(--fill-0, #383838)" id="Vector_96" />
          <path d={svgPaths.p27f1bb00} fill="var(--fill-0, #383838)" id="Vector_97" />
          <path d={svgPaths.p9534e00} fill="var(--fill-0, #383838)" id="Vector_98" />
          <path d={svgPaths.p11f16ff0} fill="var(--fill-0, #383838)" id="Vector_99" />
          <path d={svgPaths.p1a1d5780} fill="var(--fill-0, #383838)" id="Vector_100" />
          <path d={svgPaths.p20f21800} fill="var(--fill-0, #383838)" id="Vector_101" />
          <path d={svgPaths.p395cf700} fill="var(--fill-0, #383838)" id="Vector_102" />
          <path d={svgPaths.p15da0700} fill="var(--fill-0, #383838)" id="Vector_103" />
          <path d={svgPaths.p37df2b00} fill="var(--fill-0, #383838)" id="Vector_104" />
          <path d={svgPaths.p232f9800} fill="var(--fill-0, #383838)" id="Vector_105" />
          <path d={svgPaths.p17baa400} fill="var(--fill-0, #383838)" id="Vector_106" />
          <path d={svgPaths.p89e9080} fill="var(--fill-0, #383838)" id="Vector_107" />
          <path d={svgPaths.p1e5c1200} fill="var(--fill-0, #383838)" id="Vector_108" />
          <path d={svgPaths.p17ba1c00} fill="var(--fill-0, #383838)" id="Vector_109" />
          <path d={svgPaths.p33ead300} fill="var(--fill-0, #383838)" id="Vector_110" />
          <path d={svgPaths.p22041d00} fill="var(--fill-0, #383838)" id="Vector_111" />
          <path d={svgPaths.p22924700} fill="var(--fill-0, #383838)" id="Vector_112" />
          <path d={svgPaths.pc997c80} fill="var(--fill-0, #383838)" id="Vector_113" />
          <path d={svgPaths.pd115300} fill="var(--fill-0, #383838)" id="Vector_114" />
          <path d={svgPaths.p11f96600} fill="var(--fill-0, #383838)" id="Vector_115" />
          <path d={svgPaths.p4623700} fill="var(--fill-0, #383838)" id="Vector_116" />
          <path d={svgPaths.p38360d00} fill="var(--fill-0, #383838)" id="Vector_117" />
          <path d={svgPaths.p130f5300} fill="var(--fill-0, #383838)" id="Vector_118" />
          <path d={svgPaths.p216de470} fill="var(--fill-0, #383838)" id="Vector_119" />
          <path d={svgPaths.p3a84300} fill="var(--fill-0, #383838)" id="Vector_120" />
          <path d={svgPaths.p2e108a00} fill="var(--fill-0, #383838)" id="Vector_121" />
          <path d={svgPaths.p37570880} fill="var(--fill-0, #383838)" id="Vector_122" />
          <path d={svgPaths.p3f845100} fill="var(--fill-0, #383838)" id="Vector_123" />
          <path d={svgPaths.p3bebea80} fill="var(--fill-0, #383838)" id="Vector_124" />
          <path d={svgPaths.p739b180} fill="var(--fill-0, #383838)" id="Vector_125" />
          <path d={svgPaths.p58aa800} fill="var(--fill-0, #383838)" id="Vector_126" />
          <path d={svgPaths.p1c269370} fill="var(--fill-0, #383838)" id="Vector_127" />
          <path d={svgPaths.p32279000} fill="var(--fill-0, #383838)" id="Vector_128" />
          <path d={svgPaths.p143b3080} fill="var(--fill-0, #383838)" id="Vector_129" />
          <path d={svgPaths.pa20ac00} fill="var(--fill-0, #383838)" id="Vector_130" />
          <path d={svgPaths.p1a6a44f0} fill="var(--fill-0, #383838)" id="Vector_131" />
          <path d={svgPaths.p1b733900} fill="var(--fill-0, #383838)" id="Vector_132" />
          <path d={svgPaths.p855c00} fill="var(--fill-0, #383838)" id="Vector_133" />
          <path d={svgPaths.p9857f80} fill="var(--fill-0, #383838)" id="Vector_134" />
          <path d={svgPaths.p33f91480} fill="var(--fill-0, #383838)" id="Vector_135" />
          <path d={svgPaths.p2767ca00} fill="var(--fill-0, #383838)" id="Vector_136" />
          <path d={svgPaths.p1f4a9280} fill="var(--fill-0, #383838)" id="Vector_137" />
          <path d={svgPaths.p7e30400} fill="var(--fill-0, #383838)" id="Vector_138" />
          <path d={svgPaths.p12251700} fill="var(--fill-0, #383838)" id="Vector_139" />
          <path d={svgPaths.p1e10d800} fill="var(--fill-0, #383838)" id="Vector_140" />
          <path d={svgPaths.p29793600} fill="var(--fill-0, #383838)" id="Vector_141" />
          <path d={svgPaths.p245fc980} fill="var(--fill-0, #383838)" id="Vector_142" />
          <path d={svgPaths.p3f6e6870} fill="var(--fill-0, #383838)" id="Vector_143" />
          <path d={svgPaths.p2043fb00} fill="var(--fill-0, #383838)" id="Vector_144" />
          <path d={svgPaths.p28b84000} fill="var(--fill-0, #383838)" id="Vector_145" />
          <path d={svgPaths.p2a89fa00} fill="var(--fill-0, #383838)" id="Vector_146" />
          <path d={svgPaths.p2f13bd00} fill="var(--fill-0, #383838)" id="Vector_147" />
          <path d={svgPaths.p29195400} fill="var(--fill-0, #383838)" id="Vector_148" />
          <path d={svgPaths.p31cf7280} fill="var(--fill-0, #383838)" id="Vector_149" />
          <path d={svgPaths.pe1bdd80} fill="var(--fill-0, #383838)" id="Vector_150" />
          <path d={svgPaths.pf068280} fill="var(--fill-0, #383838)" id="Vector_151" />
          <path d={svgPaths.p2d572f00} fill="var(--fill-0, #383838)" id="Vector_152" />
          <path d={svgPaths.p1f269f80} fill="var(--fill-0, #383838)" id="Vector_153" />
          <path d={svgPaths.p28e7cd80} fill="var(--fill-0, #383838)" id="Vector_154" />
          <path d={svgPaths.p31e30180} fill="var(--fill-0, #383838)" id="Vector_155" />
          <path d={svgPaths.p12cc8500} fill="var(--fill-0, #383838)" id="Vector_156" />
          <path d={svgPaths.p325de900} fill="var(--fill-0, #383838)" id="Vector_157" />
          <path d={svgPaths.pc95e400} fill="var(--fill-0, #383838)" id="Vector_158" />
          <path d={svgPaths.pe868600} fill="var(--fill-0, #383838)" id="Vector_159" />
          <path d={svgPaths.p2baa6200} fill="var(--fill-0, #383838)" id="Vector_160" />
          <path d={svgPaths.p622de00} fill="var(--fill-0, #383838)" id="Vector_161" />
          <path d={svgPaths.p20b1d780} fill="var(--fill-0, #383838)" id="Vector_162" />
          <path d={svgPaths.p311d7980} fill="var(--fill-0, #383838)" id="Vector_163" />
          <path d={svgPaths.p157ca100} fill="var(--fill-0, #383838)" id="Vector_164" />
          <path d={svgPaths.p3ba61f60} fill="var(--fill-0, #383838)" id="Vector_165" />
          <path d={svgPaths.p22598000} fill="var(--fill-0, #383838)" id="Vector_166" />
          <path d={svgPaths.p240f3100} fill="var(--fill-0, #383838)" id="Vector_167" />
          <path d={svgPaths.p8b63f00} fill="var(--fill-0, #383838)" id="Vector_168" />
          <path d={svgPaths.p2f8b3700} fill="var(--fill-0, #383838)" id="Vector_169" />
          <path d={svgPaths.p7f69c00} fill="var(--fill-0, #383838)" id="Vector_170" />
          <path d={svgPaths.p20e70780} fill="var(--fill-0, #383838)" id="Vector_171" />
          <path d={svgPaths.pe912d00} fill="var(--fill-0, #383838)" id="Vector_172" />
          <path d={svgPaths.p192c3e00} fill="var(--fill-0, #383838)" id="Vector_173" />
          <path d={svgPaths.p280795c0} fill="var(--fill-0, #383838)" id="Vector_174" />
          <path d={svgPaths.pcdfff00} fill="var(--fill-0, #383838)" id="Vector_175" />
          <path d={svgPaths.p2e489200} fill="var(--fill-0, #383838)" id="Vector_176" />
          <path d={svgPaths.p3f3ce680} fill="var(--fill-0, #383838)" id="Vector_177" />
          <path d={svgPaths.p30fef300} fill="var(--fill-0, #383838)" id="Vector_178" />
          <path d={svgPaths.p3b88b600} fill="var(--fill-0, #383838)" id="Vector_179" />
          <path d={svgPaths.p24e11140} fill="var(--fill-0, #383838)" id="Vector_180" />
          <path d={svgPaths.p205b43c0} fill="var(--fill-0, #383838)" id="Vector_181" />
          <path d={svgPaths.p1bde6d80} fill="var(--fill-0, #383838)" id="Vector_182" />
          <path d={svgPaths.p35b7f80} fill="var(--fill-0, #383838)" id="Vector_183" />
          <path d={svgPaths.p3073800} fill="var(--fill-0, #383838)" id="Vector_184" />
          <path d={svgPaths.p2b8b1400} fill="var(--fill-0, #383838)" id="Vector_185" />
          <path d={svgPaths.p21efddf0} fill="var(--fill-0, #383838)" id="Vector_186" />
          <path d={svgPaths.p14916e00} fill="var(--fill-0, #383838)" id="Vector_187" />
          <path d={svgPaths.p1a14e080} fill="var(--fill-0, #383838)" id="Vector_188" />
          <path d={svgPaths.p1affc680} fill="var(--fill-0, #383838)" id="Vector_189" />
          <path d={svgPaths.p40997f0} fill="var(--fill-0, #383838)" id="Vector_190" />
          <path d={svgPaths.p38554500} fill="var(--fill-0, #383838)" id="Vector_191" />
          <path d={svgPaths.p37a8e4b2} fill="var(--fill-0, #383838)" id="Vector_192" />
          <path d={svgPaths.p34045400} fill="var(--fill-0, #383838)" id="Vector_193" />
          <path d={svgPaths.p2b67e500} fill="var(--fill-0, #383838)" id="Vector_194" />
          <path d={svgPaths.pd91df00} fill="var(--fill-0, #383838)" id="Vector_195" />
          <path d={svgPaths.p17412500} fill="var(--fill-0, #383838)" id="Vector_196" />
          <path d={svgPaths.p27f9b00} fill="var(--fill-0, #383838)" id="Vector_197" />
          <path d={svgPaths.p25895a00} fill="var(--fill-0, #383838)" id="Vector_198" />
          <path d={svgPaths.p31206140} fill="var(--fill-0, #383838)" id="Vector_199" />
          <path d={svgPaths.p1f2a670} fill="var(--fill-0, #383838)" id="Vector_200" />
          <path d={svgPaths.p1740aac0} fill="var(--fill-0, #383838)" id="Vector_201" />
          <path d={svgPaths.p94e0000} fill="var(--fill-0, #383838)" id="Vector_202" />
          <path d={svgPaths.p29d46100} fill="var(--fill-0, #383838)" id="Vector_203" />
          <path d={svgPaths.p176ed20} fill="var(--fill-0, #383838)" id="Vector_204" />
          <path d={svgPaths.p24202c80} fill="var(--fill-0, #383838)" id="Vector_205" />
          <path d={svgPaths.p3a7d8600} fill="var(--fill-0, #383838)" id="Vector_206" />
          <path d={svgPaths.p1d2e72b0} fill="var(--fill-0, #383838)" id="Vector_207" />
          <path d={svgPaths.p26dc4e00} fill="var(--fill-0, #383838)" id="Vector_208" />
          <path d={svgPaths.p1c7af040} fill="var(--fill-0, #383838)" id="Vector_209" />
          <path d={svgPaths.pb68af00} fill="var(--fill-0, #383838)" id="Vector_210" />
          <path d={svgPaths.p2f3bad80} fill="var(--fill-0, #383838)" id="Vector_211" />
          <path d={svgPaths.p2bb6c700} fill="var(--fill-0, #383838)" id="Vector_212" />
          <path d={svgPaths.p28561280} fill="var(--fill-0, #383838)" id="Vector_213" />
          <path d={svgPaths.p21591480} fill="var(--fill-0, #383838)" id="Vector_214" />
          <path d={svgPaths.p215a85c0} fill="var(--fill-0, #383838)" id="Vector_215" />
          <path d={svgPaths.p3b110fc0} fill="var(--fill-0, #383838)" id="Vector_216" />
          <path d={svgPaths.p3d30dcf0} fill="var(--fill-0, #383838)" id="Vector_217" />
          <path d={svgPaths.p3fbeb680} fill="var(--fill-0, #383838)" id="Vector_218" />
          <path d={svgPaths.p6e17ff0} fill="var(--fill-0, #383838)" id="Vector_219" />
          <path d={svgPaths.p8d5e480} fill="var(--fill-0, #383838)" id="Vector_220" />
          <path d={svgPaths.p20242d80} fill="var(--fill-0, #383838)" id="Vector_221" />
          <path d={svgPaths.p33803800} fill="var(--fill-0, #383838)" id="Vector_222" />
          <path d={svgPaths.p21d20a00} fill="var(--fill-0, #383838)" id="Vector_223" />
          <path d={svgPaths.p2a980b00} fill="var(--fill-0, #383838)" id="Vector_224" />
          <path d={svgPaths.p10ae4c70} fill="var(--fill-0, #383838)" id="Vector_225" />
          <path d={svgPaths.p6c8c200} fill="var(--fill-0, #383838)" id="Vector_226" />
          <path d={svgPaths.p399d9900} fill="var(--fill-0, #383838)" id="Vector_227" />
          <path d={svgPaths.p3f7d4700} fill="var(--fill-0, #383838)" id="Vector_228" />
          <path d={svgPaths.p57406f0} fill="var(--fill-0, #383838)" id="Vector_229" />
          <path d={svgPaths.p16a20600} fill="var(--fill-0, #383838)" id="Vector_230" />
          <path d={svgPaths.p24c3f8f0} fill="var(--fill-0, #383838)" id="Vector_231" />
          <path d={svgPaths.p2220a900} fill="var(--fill-0, #383838)" id="Vector_232" />
          <path d={svgPaths.p7de5700} fill="var(--fill-0, #383838)" id="Vector_233" />
          <path d={svgPaths.p23798900} fill="var(--fill-0, #383838)" id="Vector_234" />
          <path d={svgPaths.p337d6480} fill="var(--fill-0, #383838)" id="Vector_235" />
          <path d={svgPaths.p242dac00} fill="var(--fill-0, #383838)" id="Vector_236" />
          <path d={svgPaths.p3cef9200} fill="var(--fill-0, #383838)" id="Vector_237" />
          <path d={svgPaths.p136cf400} fill="var(--fill-0, #383838)" id="Vector_238" />
          <path d={svgPaths.p54a2900} fill="var(--fill-0, #383838)" id="Vector_239" />
          <path d={svgPaths.p2fae2e70} fill="var(--fill-0, #383838)" id="Vector_240" />
          <path d={svgPaths.p1028c180} fill="var(--fill-0, #383838)" id="Vector_241" />
          <path d={svgPaths.p7e4fd00} fill="var(--fill-0, #383838)" id="Vector_242" />
          <path d={svgPaths.p278a3c80} fill="var(--fill-0, #383838)" id="Vector_243" />
          <path d={svgPaths.p53a8100} fill="var(--fill-0, #383838)" id="Vector_244" />
          <path d={svgPaths.p4c6b000} fill="var(--fill-0, #383838)" id="Vector_245" />
          <path d={svgPaths.pb718200} fill="var(--fill-0, #383838)" id="Vector_246" />
          <path d={svgPaths.p8f2bb00} fill="var(--fill-0, #383838)" id="Vector_247" />
          <path d={svgPaths.pd052d80} fill="var(--fill-0, #383838)" id="Vector_248" />
          <path d={svgPaths.p154bec80} fill="var(--fill-0, #383838)" id="Vector_249" />
          <path d={svgPaths.p3f15a700} fill="var(--fill-0, #383838)" id="Vector_250" />
          <path d={svgPaths.p23fa6b80} fill="var(--fill-0, #383838)" id="Vector_251" />
          <path d={svgPaths.p19faea00} fill="var(--fill-0, #383838)" id="Vector_252" />
          <path d={svgPaths.p2d9e9d00} fill="var(--fill-0, #383838)" id="Vector_253" />
          <path d={svgPaths.p33dbe040} fill="var(--fill-0, #383838)" id="Vector_254" />
          <path d={svgPaths.p59cc500} fill="var(--fill-0, #383838)" id="Vector_255" />
          <path d={svgPaths.p3a07a9f2} fill="var(--fill-0, #383838)" id="Vector_256" />
          <path d={svgPaths.p25b59200} fill="var(--fill-0, #383838)" id="Vector_257" />
          <path d={svgPaths.p2f5cb5f0} fill="var(--fill-0, #383838)" id="Vector_258" />
          <path d={svgPaths.p3ce37200} fill="var(--fill-0, #383838)" id="Vector_259" />
          <path d={svgPaths.p3c98b580} fill="var(--fill-0, #383838)" id="Vector_260" />
          <path d={svgPaths.p326d5300} fill="var(--fill-0, #383838)" id="Vector_261" />
          <path d={svgPaths.paf62cc0} fill="var(--fill-0, #383838)" id="Vector_262" />
          <path d={svgPaths.p8a4b000} fill="var(--fill-0, #383838)" id="Vector_263" />
          <path d={svgPaths.p2e489c00} fill="var(--fill-0, #383838)" id="Vector_264" />
          <path d={svgPaths.p2a4f9c00} fill="var(--fill-0, #383838)" id="Vector_265" />
          <path d={svgPaths.p27a7b780} fill="var(--fill-0, #383838)" id="Vector_266" />
          <path d={svgPaths.p3252c00} fill="var(--fill-0, #383838)" id="Vector_267" />
          <path d={svgPaths.p1615d400} fill="var(--fill-0, #383838)" id="Vector_268" />
          <path d={svgPaths.p197ff000} fill="var(--fill-0, #383838)" id="Vector_269" />
          <path d={svgPaths.pf661200} fill="var(--fill-0, #383838)" id="Vector_270" />
          <path d={svgPaths.pfd8e500} fill="var(--fill-0, #383838)" id="Vector_271" />
          <path d={svgPaths.p3a0a7a00} fill="var(--fill-0, #383838)" id="Vector_272" />
          <path d={svgPaths.p2e1ad700} fill="var(--fill-0, #383838)" id="Vector_273" />
          <path d={svgPaths.p1ff58480} fill="var(--fill-0, #383838)" id="Vector_274" />
          <path d={svgPaths.p197b7500} fill="var(--fill-0, #383838)" id="Vector_275" />
          <path d={svgPaths.p18192b80} fill="var(--fill-0, #383838)" id="Vector_276" />
          <path d={svgPaths.p33877680} fill="var(--fill-0, #383838)" id="Vector_277" />
          <path d={svgPaths.p3144f680} fill="var(--fill-0, #383838)" id="Vector_278" />
          <path d={svgPaths.p3df687b2} fill="var(--fill-0, #383838)" id="Vector_279" />
          <path d={svgPaths.p1586b740} fill="var(--fill-0, #383838)" id="Vector_280" />
          <path d={svgPaths.pada1d80} fill="var(--fill-0, #383838)" id="Vector_281" />
          <path d={svgPaths.p3eecbe00} fill="var(--fill-0, #383838)" id="Vector_282" />
          <path d={svgPaths.p1e97ea80} fill="var(--fill-0, #383838)" id="Vector_283" />
          <path d={svgPaths.p345ee000} fill="var(--fill-0, #383838)" id="Vector_284" />
          <path d={svgPaths.p35ecc480} fill="var(--fill-0, #383838)" id="Vector_285" />
          <path d={svgPaths.p3f35b500} fill="var(--fill-0, #383838)" id="Vector_286" />
          <path d={svgPaths.p2bcae880} fill="var(--fill-0, #383838)" id="Vector_287" />
          <path d={svgPaths.p116acf80} fill="var(--fill-0, #383838)" id="Vector_288" />
          <path d={svgPaths.p20021900} fill="var(--fill-0, #383838)" id="Vector_289" />
          <path d={svgPaths.p6e1a440} fill="var(--fill-0, #383838)" id="Vector_290" />
          <path d={svgPaths.p216f8700} fill="var(--fill-0, #383838)" id="Vector_291" />
          <path d={svgPaths.p1bbfb140} fill="var(--fill-0, #383838)" id="Vector_292" />
          <path d={svgPaths.p33bd1280} fill="var(--fill-0, #383838)" id="Vector_293" />
          <path d={svgPaths.p6b69100} fill="var(--fill-0, #383838)" id="Vector_294" />
          <path d={svgPaths.p39762580} fill="var(--fill-0, #383838)" id="Vector_295" />
          <path d={svgPaths.p1a9b000} fill="var(--fill-0, #383838)" id="Vector_296" />
          <path d={svgPaths.p2d680400} fill="var(--fill-0, #383838)" id="Vector_297" />
          <path d={svgPaths.p3e0e2900} fill="var(--fill-0, #383838)" id="Vector_298" />
          <path d={svgPaths.p12b3800} fill="var(--fill-0, #383838)" id="Vector_299" />
          <path d={svgPaths.p3251bf80} fill="var(--fill-0, #383838)" id="Vector_300" />
          <path d={svgPaths.p122c38f0} fill="var(--fill-0, #383838)" id="Vector_301" />
          <path d={svgPaths.p274a9070} fill="var(--fill-0, #383838)" id="Vector_302" />
          <path d={svgPaths.p261ebd80} fill="var(--fill-0, #383838)" id="Vector_303" />
          <path d={svgPaths.p3c1bc500} fill="var(--fill-0, #383838)" id="Vector_304" />
          <path d={svgPaths.p3d735100} fill="var(--fill-0, #383838)" id="Vector_305" />
          <path d={svgPaths.p16ab9980} fill="var(--fill-0, #383838)" id="Vector_306" />
          <path d={svgPaths.p1a465300} fill="var(--fill-0, #383838)" id="Vector_307" />
          <path d={svgPaths.p1e691fa0} fill="var(--fill-0, #383838)" id="Vector_308" />
          <path d={svgPaths.p242ee000} fill="var(--fill-0, #383838)" id="Vector_309" />
          <path d={svgPaths.p375ff2f0} fill="var(--fill-0, #383838)" id="Vector_310" />
          <path d={svgPaths.p1b367a00} fill="var(--fill-0, #383838)" id="Vector_311" />
          <path d={svgPaths.p16801580} fill="var(--fill-0, #383838)" id="Vector_312" />
          <path d={svgPaths.p29b5b980} fill="var(--fill-0, #383838)" id="Vector_313" />
          <path d={svgPaths.p3c0dba80} fill="var(--fill-0, #383838)" id="Vector_314" />
          <path d={svgPaths.p18946820} fill="var(--fill-0, #383838)" id="Vector_315" />
          <path d={svgPaths.p994d930} fill="var(--fill-0, #383838)" id="Vector_316" />
          <path d={svgPaths.p2bf04d80} fill="var(--fill-0, #383838)" id="Vector_317" />
          <path d={svgPaths.p1fa02800} fill="var(--fill-0, #383838)" id="Vector_318" />
          <path d={svgPaths.p294181c0} fill="var(--fill-0, #383838)" id="Vector_319" />
          <path d={svgPaths.p3e3a2400} fill="var(--fill-0, #383838)" id="Vector_320" />
          <path d={svgPaths.p36b8b8c0} fill="var(--fill-0, #383838)" id="Vector_321" />
          <path d={svgPaths.p2acfe080} fill="var(--fill-0, #383838)" id="Vector_322" />
          <path d={svgPaths.p2c6d1e00} fill="var(--fill-0, #383838)" id="Vector_323" />
          <path d={svgPaths.p277ae980} fill="var(--fill-0, #383838)" id="Vector_324" />
          <path d={svgPaths.p84bd700} fill="var(--fill-0, #383838)" id="Vector_325" />
          <path d={svgPaths.p3072130} fill="var(--fill-0, #383838)" id="Vector_326" />
          <path d={svgPaths.p35c87700} fill="var(--fill-0, #383838)" id="Vector_327" />
          <path d={svgPaths.p2690af00} fill="var(--fill-0, #383838)" id="Vector_328" />
          <path d={svgPaths.p97acb00} fill="var(--fill-0, #383838)" id="Vector_329" />
          <path d={svgPaths.p384f3780} fill="var(--fill-0, #383838)" id="Vector_330" />
          <path d={svgPaths.p25eceb00} fill="var(--fill-0, #383838)" id="Vector_331" />
          <path d={svgPaths.p30bcdb00} fill="var(--fill-0, #383838)" id="Vector_332" />
          <path d={svgPaths.p22bbae80} fill="var(--fill-0, #383838)" id="Vector_333" />
          <path d={svgPaths.pbed9570} fill="var(--fill-0, #383838)" id="Vector_334" />
          <path d={svgPaths.p27036230} fill="var(--fill-0, #383838)" id="Vector_335" />
          <path d={svgPaths.pc947d00} fill="var(--fill-0, #383838)" id="Vector_336" />
          <path d={svgPaths.p3d594200} fill="var(--fill-0, #383838)" id="Vector_337" />
          <path d={svgPaths.pac459f2} fill="var(--fill-0, #383838)" id="Vector_338" />
          <path d={svgPaths.p25793400} fill="var(--fill-0, #383838)" id="Vector_339" />
          <path d={svgPaths.p167d31c0} fill="var(--fill-0, #383838)" id="Vector_340" />
          <path d={svgPaths.p62bd190} fill="var(--fill-0, #383838)" id="Vector_341" />
          <path d={svgPaths.p3570bf80} fill="var(--fill-0, #383838)" id="Vector_342" />
          <path d={svgPaths.p241bf140} fill="var(--fill-0, #383838)" id="Vector_343" />
          <path d={svgPaths.p36667e00} fill="var(--fill-0, #383838)" id="Vector_344" />
          <path d={svgPaths.p30ca2140} fill="var(--fill-0, #383838)" id="Vector_345" />
          <path d={svgPaths.p25968400} fill="var(--fill-0, #383838)" id="Vector_346" />
          <path d={svgPaths.p1295d800} fill="var(--fill-0, #383838)" id="Vector_347" />
          <path d={svgPaths.p2182be00} fill="var(--fill-0, #383838)" id="Vector_348" />
          <path d={svgPaths.p14d9f280} fill="var(--fill-0, #383838)" id="Vector_349" />
          <path d={svgPaths.p3333180} fill="var(--fill-0, #383838)" id="Vector_350" />
          <path d={svgPaths.p31648b70} fill="var(--fill-0, #383838)" id="Vector_351" />
          <path d={svgPaths.p323bde00} fill="var(--fill-0, #383838)" id="Vector_352" />
          <path d={svgPaths.p299a1c00} fill="var(--fill-0, #383838)" id="Vector_353" />
          <path d={svgPaths.p20666d00} fill="var(--fill-0, #383838)" id="Vector_354" />
          <path d={svgPaths.p3c17ea00} fill="var(--fill-0, #383838)" id="Vector_355" />
          <path d={svgPaths.p300e4000} fill="var(--fill-0, #383838)" id="Vector_356" />
          <path d={svgPaths.pfbffd80} fill="var(--fill-0, #383838)" id="Vector_357" />
          <path d={svgPaths.p3f28b00} fill="var(--fill-0, #383838)" id="Vector_358" />
          <path d={svgPaths.p3171a0c0} fill="var(--fill-0, #383838)" id="Vector_359" />
          <path d={svgPaths.p3a21af80} fill="var(--fill-0, #383838)" id="Vector_360" />
          <path d={svgPaths.p1365bf00} fill="var(--fill-0, #383838)" id="Vector_361" />
          <path d={svgPaths.p2052c400} fill="var(--fill-0, #383838)" id="Vector_362" />
          <path d={svgPaths.p206a6a00} fill="var(--fill-0, #383838)" id="Vector_363" />
          <path d={svgPaths.pcc0d0c0} fill="var(--fill-0, #383838)" id="Vector_364" />
          <path d={svgPaths.p2e4bb580} fill="var(--fill-0, #383838)" id="Vector_365" />
          <path d={svgPaths.p357a3a00} fill="var(--fill-0, #383838)" id="Vector_366" />
          <path d={svgPaths.p33935bf0} fill="var(--fill-0, #383838)" id="Vector_367" />
          <path d={svgPaths.p285d4980} fill="var(--fill-0, #383838)" id="Vector_368" />
          <path d={svgPaths.p220e7400} fill="var(--fill-0, #383838)" id="Vector_369" />
          <path d={svgPaths.p337f4400} fill="var(--fill-0, #383838)" id="Vector_370" />
          <path d={svgPaths.p9f0d900} fill="var(--fill-0, #383838)" id="Vector_371" />
          <path d={svgPaths.p165e4800} fill="var(--fill-0, #383838)" id="Vector_372" />
          <path d={svgPaths.p34e4c780} fill="var(--fill-0, #383838)" id="Vector_373" />
          <path d={svgPaths.p29902900} fill="var(--fill-0, #383838)" id="Vector_374" />
          <path d={svgPaths.p14ba28c0} fill="var(--fill-0, #383838)" id="Vector_375" />
          <path d={svgPaths.p3f639500} fill="var(--fill-0, #383838)" id="Vector_376" />
          <path d={svgPaths.p3a373dc0} fill="var(--fill-0, #383838)" id="Vector_377" />
          <path d={svgPaths.p3b7d0400} fill="var(--fill-0, #383838)" id="Vector_378" />
          <path d={svgPaths.p38e63800} fill="var(--fill-0, #383838)" id="Vector_379" />
          <path d={svgPaths.p25d0ba80} fill="var(--fill-0, #383838)" id="Vector_380" />
          <path d={svgPaths.p3ac6bd00} fill="var(--fill-0, #383838)" id="Vector_381" />
          <path d={svgPaths.p1b35ed00} fill="var(--fill-0, #383838)" id="Vector_382" />
          <path d={svgPaths.pf2f9440} fill="var(--fill-0, #383838)" id="Vector_383" />
          <path d={svgPaths.p33d3f200} fill="var(--fill-0, #383838)" id="Vector_384" />
          <path d={svgPaths.p311bc700} fill="var(--fill-0, #383838)" id="Vector_385" />
          <path d={svgPaths.pe364400} fill="var(--fill-0, #383838)" id="Vector_386" />
          <path d={svgPaths.p1ed9e20} fill="var(--fill-0, #383838)" id="Vector_387" />
          <path d={svgPaths.p226b9a00} fill="var(--fill-0, #383838)" id="Vector_388" />
          <path d={svgPaths.p1a3c5500} fill="var(--fill-0, #383838)" id="Vector_389" />
          <path d={svgPaths.pe3d2700} fill="var(--fill-0, #383838)" id="Vector_390" />
          <path d={svgPaths.p31365480} fill="var(--fill-0, #383838)" id="Vector_391" />
        </g>
      </svg>
    </div>
  );
}

function Frame681() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame682 />
      <Grafika />
    </div>
  );
}

function Frame685() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#2a2a2a] w-full whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold h-[29px] leading-[36px] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Визија
      </p>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] w-[247px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Заједништво. Демократија. Моћ народа.
      </p>
    </div>
  );
}

function Frame686() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#2a2a2a] w-full whitespace-pre-wrap">
      <div className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold h-[29px] leading-[36px] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-[10px]">Стратегија</p>
        <p>&nbsp;</p>
      </div>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">Платформу развијамо у корак са потребама самих зборова. Све што радимо настаје у сарадњи са њима — кроз анкете, разговоре, прототипове и тестирање. Нема спонзора, нема профита. Радимо добровољно, уз жељу да покрет буде јачи, организованији и транспарентнији.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Тим тренутно броји 20 чланова.</p>
      </div>
    </div>
  );
}

function Frame687() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#2a2a2a] w-full whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold h-[29px] leading-[36px] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Тренутни фокус
      </p>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">У овој фази нам је најважније да сви зборови буду видљиви на једном месту и да људи лако могу да им се придруже.</p>
        <p className="mb-0">
          <br aria-hidden="true" />
          Дигитална окупљања, чет и гласање су већ на листи идеја — али ћемо их уводити тек ако се зборови за то јасно изјасне.
        </p>
        <p>
          <br aria-hidden="true" />
          Желимо да платформа расте онако како покрет расте.
        </p>
      </div>
    </div>
  );
}

function Frame688() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#2a2a2a] w-full whitespace-pre-wrap">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold h-[29px] leading-[36px] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Зашто верујемо у све ово?
      </p>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] mb-0">Питање које делује толико једноставно, а заправо у себи носи огромну тежину. У ову причу смо се укључили првенствено јер смо желели да допринесемо. Некима од нас је ово био и једини начин да се укључимо и будемо ту уз наше људе и нашу земљу.</p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="leading-[20px]">{`Онда смо наставили да у њу верујемо када смо видели одговоре истраживања, затим и реакције људи који су тестирали прототип, а радујемо се и ако нам нађете и по коју ману. Желимо да нам јавите све ваше утиске, јер само на тај начин можемо да стварамо решење које ће заиста бити корисно. Можете нас контактирати путем `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline" href="mailto:kontakt@zborapp.com">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px]" href="mailto:kontakt@zborapp.com">
              мејла
            </span>
          </a>
          <span className="leading-[20px]">{` или друштвених мрежа.`}</span>
        </p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p className="leading-[20px]">Хвала вам што и ви сада доприносите овој идеји и што сте и ви део нашег тима.</p>
      </div>
    </div>
  );
}

function Frame680() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[123px] w-[330px]">
      <Frame681 />
      <Frame685 />
      <Frame686 />
      <Frame687 />
      <Frame688 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#fefdff] h-[2178px] overflow-clip relative shrink-0 w-full">
      <Frame209 />
      <Frame680 />
    </div>
  );
}

function Frame286() {
  return (
    <div className="content-stretch flex flex-col h-[1917px] items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function HeadingContainer11() {
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

function Left15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer11 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left15 />
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

function Divider17() {
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

function ThumbUpIcon7() {
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

function ThumbUpIcon8() {
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

function Frame109() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon7 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpIcon8 />
        </div>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame109 />
    </div>
  );
}

function Frame241() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
          <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
            <Container11 />
            <Divider17 />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <Frame108 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame285() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[2178px] items-start relative shrink-0 w-full">
      <Frame286 />
      <Frame241 />
    </div>
  );
}

function ZborAppLogoT9() {
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

function Frame113() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT9 />
    </div>
  );
}

function Frame115() {
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

function Frame114() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame115 />
    </div>
  );
}

function Frame117() {
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

function Frame116() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame117 />
    </div>
  );
}

function Frame339() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame114 />
      <Frame116 />
    </div>
  );
}

function Group72() {
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

function Component021Facebook6() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group72 />
    </div>
  );
}

function Frame288() {
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

function Frame287() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook6 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame288 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame287 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame119 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame113 />
      <Frame339 />
      <Frame118 />
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

function Frame111() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame112 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame111 />
    </div>
  );
}

function Footer11() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame110 />
    </div>
  );
}

function Frame240() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[4392px] items-start relative shrink-0">
      <Frame285 />
      <div className="h-[753px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer11 />
      </div>
    </div>
  );
}

function Frame284() {
  return (
    <div className="content-stretch flex flex-col h-[4392px] items-start relative shrink-0 w-full">
      <Frame240 />
    </div>
  );
}

function Frame239() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5089px] items-start left-0 top-[-3px] w-[360px]">
      <Frame284 />
    </div>
  );
}

function Gjeld2() {
  return (
    <div className="absolute bg-[#fffcfd] h-[4389px] left-0 overflow-clip top-[-3px] w-[360px]" data-name="Gjeld">
      <Frame239 />
    </div>
  );
}

function Onama() {
  return (
    <div className="absolute bg-[#fefdff] h-[2950px] left-[929px] overflow-clip top-[5271px] w-[360px]" data-name="Onama">
      <Gjeld2 />
    </div>
  );
}

function ZborAppLogoT10() {
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

function Frame690() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[43px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function MenuHamburgerIcon5() {
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

function Frame561() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame690 />
      <MenuHamburgerIcon5 />
    </div>
  );
}

function Frame689() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[16px] top-1/2 w-[328px]">
      <ZborAppLogoT10 />
      <Frame561 />
    </div>
  );
}

function TopoNavBar3() {
  return (
    <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="TopoNavBar">
      <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame689 />
    </div>
  );
}

function Frame330() {
  return (
    <div className="bg-[#4f378a] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0">
      <TopoNavBar3 />
    </div>
  );
}

function Frame332() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[1639px] items-center left-1/2 top-0 w-[330px]">
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[0px] w-[300px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] mb-0 text-[16px]">Ова политика приватности објашњава које податке прикупљамо, како их користимо и како се бринемо о њиховој безбедности када користите ЗборАпп.</p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          1. Ко стоји иза апликације
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">ЗборАпп развија тим посвећен подршци локалним зборовима. За сва питања у вези са приватношћу, можете нам се обратити преко саме апликације.</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          2. Које податке прикупљамо
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Када користите апликацију, прикупљамо минималну количину података:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">Мејл-адреса: само приликом регистрације збора. Чува се у енкриптованом облику.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">IP адреса: приликом регистрације, искључиво у сврху безбедности.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
            <span className="leading-[20px]">Подаци о коришћењу апликације: прикупљамо преко</span>
            <span className="leading-[20px] text-[#2463eb]">{` `}</span>
            <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] text-[#2463eb] underline" href="https://developers.google.com/analytics" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
              <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px]" href="https://developers.google.com/analytics" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
                Google Analytics 4
              </span>
            </a>
            <span className="leading-[20px] text-[#2463eb]">,</span>
            <span className="leading-[20px]">{` анонимно и искључиво ради унапређења искуства корисника.`}</span>
          </li>
        </ul>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          3. Како користимо податке
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Ваши подаци служе искључиво у следеће сврхе:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">да бисмо вам омогућили регистрацију и управљање збором,</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">да бисмо разумели како се апликација користи и унапредили је на основу тих података,</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">
              да бисмо обезбедили сигурност корисника.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          4. Са ким делимо податке
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Не делимо податке са трећим странама осим:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">са Google-ом преко GA4 за анонимну анализу употребе апликације,</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">
              уколико то буде захтевано законом.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="leading-[20px] mb-0 text-[16px]">Никада не продајемо податке.</p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          5. Колико дуго чувамо податке
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Мејл-адресе и IP адресе се чувају док год постоји регистрован збор. Податке можете обрисати у сваком тренутку путем захтева.</p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          6. Ваша права
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Можете у сваком тренутку:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">затражити увид у податке,</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">затражити исправку или брисање података,</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[20px] text-[16px]">
              Поднесете притужбу Поверенику.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          7. Колачићи
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Апликација може користити техничке колачиће за основно функционисање. Google Analytics користи своје колачиће у складу са својом политиком.</p>
        <p className="leading-[20px] mb-0 text-[20px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          8. Промене политике
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Ако буде измена у начину обраде података, обавестићемо вас преко апликације.</p>
        <p className="leading-[20px] text-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame220() {
  return (
    <div className="-translate-x-1/2 absolute h-[707px] left-1/2 top-[34px] w-[332px]">
      <Frame332 />
    </div>
  );
}

function Frame219() {
  return (
    <div className="absolute h-[665px] left-0 top-[96px] w-[330px]">
      <Frame220 />
    </div>
  );
}

function Frame331() {
  return (
    <div className="h-[2020px] relative shrink-0 w-[330px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Bold',sans-serif] font-bold h-[92px] justify-center leading-[0] left-[15px] text-[#2a2a2a] text-[36px] top-[71px] w-[269px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[36px] whitespace-pre-wrap">Политика приватности</p>
      </div>
      <Frame219 />
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame330 />
      <Frame331 />
    </div>
  );
}

function Frame221() {
  return (
    <div className="h-[40px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame211() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame218 />
      <Frame221 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fefdff] h-[3993px] overflow-clip relative shrink-0 w-full">
      <Frame211 />
    </div>
  );
}

function Frame295() {
  return (
    <div className="content-stretch flex flex-col h-[2180px] items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function HeadingContainer12() {
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

function Left16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer12 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left16 />
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

function Divider18() {
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

function ThumbUpIcon9() {
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

function ThumbUpIcon10() {
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

function Frame121() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon9 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpIcon10 />
        </div>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame121 />
    </div>
  );
}

function Frame244() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
          <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
            <Container12 />
            <Divider18 />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <Frame120 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame290() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[2409px] items-start relative shrink-0 w-full">
      <Frame295 />
      <Frame244 />
    </div>
  );
}

function ZborAppLogoT11() {
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

function Frame125() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT11 />
    </div>
  );
}

function Frame127() {
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

function Frame126() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame127 />
    </div>
  );
}

function Frame129() {
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

function Frame128() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame129 />
    </div>
  );
}

function Frame340() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame126 />
      <Frame128 />
    </div>
  );
}

function Group73() {
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

function Component021Facebook7() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group73 />
    </div>
  );
}

function Frame297() {
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

function Frame296() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook7 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame297 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame296 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame131 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame125 />
      <Frame340 />
      <Frame130 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[245px] leading-[20px] relative shrink-0 text-[#fffcfd] text-[0px] text-[14px] text-center w-[328px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          © 2025 ЗборАпп - за доступније зборове
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` ЗборАпп поштује GDPR. Прикупљамо само податке неопходне за функционисање апликације. Аналитички колачићи се користе искључиво уз сагласност.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame124 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame123 />
    </div>
  );
}

function Footer12() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame122 />
    </div>
  );
}

function Frame243() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[3203px] items-start relative shrink-0">
      <Frame290 />
      <div className="h-[1521px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer12 />
      </div>
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex flex-col h-[3203px] items-start relative shrink-0 w-full">
      <Frame243 />
    </div>
  );
}

function Frame242() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5089px] items-start left-0 top-[-3px] w-[360px]">
      <Frame289 />
    </div>
  );
}

function Gjeld3() {
  return (
    <div className="absolute bg-[#fffcfd] h-[3200px] left-0 overflow-clip top-[-3px] w-[360px]" data-name="Gjeld">
      <Frame242 />
    </div>
  );
}

function PolitikaPrivatnosti() {
  return (
    <div className="absolute bg-[#fefdff] h-[3197px] left-[1345px] overflow-clip top-[2208px] w-[360px]" data-name="PolitikaPrivatnosti">
      <Gjeld3 />
    </div>
  );
}

function HeadingContainer13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Heading container">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="flex-[1_0_0] font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px relative text-[#322f35] text-[24px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Колачићи које користимо
        </p>
      </div>
    </div>
  );
}

function Left17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Paragraph">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#322f35] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Образац за сагласност
        </p>
      </div>
      <HeadingContainer13 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[16px] relative w-full">
        <Left17 />
        <button className="block cursor-pointer relative shrink-0 size-[20px]" data-name="Interactive/Chevron">
          <div className="absolute inset-[29.17%_16.05%_30.1%_16.67%]" data-name="Chevron">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4577 8.14675">
              <path d={svgPaths.p2774e100} fill="var(--fill-0, #410464)" id="Chevron" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
      <Container13 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[16px] px-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#322f35] text-[16px] tracking-[0.44px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            ЗборАпп користи неопходне и, уз вашу сагласност, аналитичке колачиће ради побољшања корисничког искуства. Аналитички колачићи се чувају до 6 месеци. Свој избор можете у сваком тренутку променити преко подешавања на дну странице.
          </p>
        </div>
      </div>
    </div>
  );
}

function Checkbox21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-[#f4f4f4] relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="h-[8px] relative shrink-0 w-[11px]" data-name="Check">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
              <path d={svgPaths.p2d02f480} fill="var(--fill-0, #D8BCE6)" id="Vector 1" />
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#e5d3ee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#383838] text-[16px] tracking-[0.1504px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Обавезни колачићи
      </p>
    </div>
  );
}

function Checkbox22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="bg-[#fafafa] relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#410464] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#383838] text-[16px] tracking-[0.1504px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Cтатистичке и аналитичке сврхе
      </p>
    </div>
  );
}

function CheckboxList1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Checkbox List">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Checkbox Item">
        <Checkbox21 />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Checkbox Item">
        <Checkbox22 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[16px] pl-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name=".Card Body Slot">
          <div className="relative shrink-0 w-full" data-name="Checkbox Group">
            <div className="content-stretch flex flex-col gap-[16px] items-start pr-[16px] relative w-full">
              <CheckboxList1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
        <g id="Divider">
          <rect fill="white" height="24" width="360" />
          <line id="divider line" stroke="var(--stroke-0, #C9C4CC)" x2="360" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]">Прихватите све</p>
    </div>
  );
}

function ButtonContent18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]">{`Одбијте необавезне `}</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start justify-center min-h-px min-w-px relative">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent17 />
          </div>
        </div>
      </div>
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#410464] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent18 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[12px] px-[24px] relative w-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Footer13() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider19 />
      <Section8 />
    </div>
  );
}

function Kolacici() {
  return (
    <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[1743px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[4373px] w-[360px]" data-name="Kolacici">
      <Header2 />
      <Frame27 />
      <Frame28 />
      <Footer13 />
    </div>
  );
}

function ZborAppLogoT12() {
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

function Frame692() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[43px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function MenuHamburgerIcon6() {
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

function Frame562() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame692 />
      <MenuHamburgerIcon6 />
    </div>
  );
}

function Frame691() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[16px] top-1/2 w-[328px]">
      <ZborAppLogoT12 />
      <Frame562 />
    </div>
  );
}

function TopoNavBar4() {
  return (
    <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-[360px]" data-name="TopoNavBar">
      <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
      <Frame691 />
    </div>
  );
}

function Frame341() {
  return (
    <div className="bg-[#4f378a] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0">
      <TopoNavBar4 />
    </div>
  );
}

function Frame343() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[1639px] items-center left-1/2 top-0 w-[330px]">
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[0px] w-[300px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] mb-0 text-[16px]">Добро дошли на Збор апликацију, намењену подршци и бољој организацији локалних зборова.</p>
        <p className="leading-[20px] mb-0 text-[16px]">Коришћењем ове апликације, сагласни сте са следећим условима:</p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          1. Сврха апликације
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Збор је развијен као простор за повезивање, размену информација и учешће у процесима доношења одлука у оквиру локалних зборова. Апликација омогућава регистрацију, праћење, објаве, комуникацију и гласање, у складу са функционалностима које се постепено уводе.</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          2. Кориснички налози
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Приступ појединим функцијама може захтевати креирање налога. Корисник је одговоран за тачност података и чување поверљивости својих приступних података.</p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          3. Понашање корисника
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">
          Очекује се да сви корисници поштују друге учеснике, поступају у духу сарадње и не користе апликацију у сврхе које би могле нарушити безбедност, приватност или функционисање платформе.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          4. Приватност
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="mb-0 text-[16px]">
          <span className="leading-[20px]">{`Апликација прикупља само податке неопходне за рад и комуникацију унутар платформе. Детаљније информације о обради података доступне су у `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] text-[#2463eb] underline" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Политици приватности
          </span>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] text-[#383838]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            .
          </span>
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          5. Промене и ажурирања
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">Развој апликације је у току. Функционалности ће се уводити постепено, а услови коришћења могу бити ажурирани у складу са тим. О свакој значајној измени корисници ће бити обавештени путем апликације.</p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          6. Одговорност
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">
          Тим који развија ЗборАпп не сноси одговорност за одлуке донете путем апликације нити за садржај који постављају корисници. Апликација је подршка процесима, али не преузима улогу одлучивања у име било ког збора.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] mb-0 text-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          7. Контакт
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[16px]">За све сугестије, пријаве проблема или додатна питања, можете нас контактирати путем контакт секције у апликацији.</p>
        <p className="leading-[20px] text-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="-translate-x-1/2 absolute h-[707px] left-1/2 top-[34px] w-[332px]">
      <Frame343 />
    </div>
  );
}

function Frame224() {
  return (
    <div className="absolute h-[665px] left-0 top-[140px] w-[330px]">
      <Frame225 />
    </div>
  );
}

function Frame342() {
  return (
    <div className="h-[1696px] relative shrink-0 w-[330px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Bold',sans-serif] font-bold h-[92px] justify-center leading-[0] left-[15px] text-[#2a2a2a] text-[36px] top-[70px] w-[269px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[36px] whitespace-pre-wrap">Услови коришћења</p>
      </div>
      <Frame224 />
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame341 />
      <Frame342 />
    </div>
  );
}

function Frame226() {
  return (
    <div className="h-[40px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame222() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame223 />
      <Frame226 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#fefdff] h-[3993px] overflow-clip relative shrink-0 w-full">
      <Frame222 />
    </div>
  );
}

function Frame300() {
  return (
    <div className="content-stretch flex flex-col h-[1803px] items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function HeadingContainer14() {
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

function Left18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer14 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left18 />
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

function Divider20() {
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

function ThumbUpIcon11() {
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

function ThumbUpIcon12() {
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

function Frame133() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon11 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpIcon12 />
        </div>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame133 />
    </div>
  );
}

function Frame247() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
          <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
            <Container14 />
            <Divider20 />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <Frame132 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame299() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[2032px] items-start relative shrink-0 w-full">
      <Frame300 />
      <Frame247 />
    </div>
  );
}

function ZborAppLogoT13() {
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

function Frame137() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT13 />
    </div>
  );
}

function Frame139() {
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

function Frame138() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame139 />
    </div>
  );
}

function Frame141() {
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

function Frame140() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame141 />
    </div>
  );
}

function Frame344() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame138 />
      <Frame140 />
    </div>
  );
}

function Group74() {
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

function Component021Facebook8() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group74 />
    </div>
  );
}

function Frame302() {
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

function Frame301() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook8 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame302 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame301 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame143 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame137 />
      <Frame344 />
      <Frame142 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[245px] leading-[20px] relative shrink-0 text-[#fffcfd] text-[0px] text-[14px] text-center w-[328px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          © 2025 ЗборАпп - за доступније зборове
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` ЗборАпп поштује GDPR. Прикупљамо само податке неопходне за функционисање апликације. Аналитички колачићи се користе искључиво уз сагласност.`}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame136 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame135 />
    </div>
  );
}

function Footer14() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame134 />
    </div>
  );
}

function Frame246() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[3203px] items-start relative shrink-0">
      <Frame299 />
      <div className="h-[1521px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer14 />
      </div>
    </div>
  );
}

function Frame298() {
  return (
    <div className="content-stretch flex flex-col h-[3203px] items-start relative shrink-0 w-full">
      <Frame246 />
    </div>
  );
}

function Frame245() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5089px] items-start left-0 top-[-3px] w-[360px]">
      <Frame298 />
    </div>
  );
}

function Gjeld4() {
  return (
    <div className="absolute bg-[#fffcfd] h-[3200px] left-0 overflow-clip top-[-3px] w-[360px]" data-name="Gjeld">
      <Frame245 />
    </div>
  );
}

function UsloviKoriscenja() {
  return (
    <div className="absolute bg-[#fefdff] h-[2812px] left-[1782px] overflow-clip top-[1244px] w-[360px]" data-name="UsloviKoriscenja">
      <Gjeld4 />
    </div>
  );
}

function Pitanje36() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2221px] p-[10px] rounded-[54px] top-[2603px]" data-name="pitanje">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`Da li je korisnik kliknuo `}</p>
        <p>na link ka socijalnim mrezama ili imejl?</p>
      </div>
    </div>
  );
}

function Pitanje37() {
  return (
    <div className="absolute bg-[#edeaf5] content-stretch flex items-center justify-center left-[2221px] p-[10px] rounded-[54px] top-[2439px]" data-name="pitanje">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px]">Da li dev tim planira upgrade?</p>
    </div>
  );
}

function MenuHamburgerIcon7() {
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

function Frame693() {
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

function Frame306() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0 w-[368px]">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#edeaf5] h-[57px] relative shrink-0 w-full" data-name="AdminTopoNavBar">
        <MenuHamburgerIcon7 />
        <Frame693 />
        <ZborAdminLogoCirNeg />
      </div>
    </div>
  );
}

function Frame307() {
  return <div className="h-[733px] shrink-0 w-[360px]" />;
}

function Frame312() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[368px]">
      <Frame307 />
    </div>
  );
}

function Frame251() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame306 />
      <Frame312 />
    </div>
  );
}

function Frame250() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame251 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#fffcfd] h-[1065px] overflow-clip relative shrink-0 w-full">
      <Frame250 />
    </div>
  );
}

function Frame305() {
  return (
    <div className="content-stretch flex flex-col h-[1008px] items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame304() {
  return (
    <div className="content-stretch flex flex-col h-[99px] items-start relative shrink-0 w-full">
      <Frame305 />
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

function Frame367() {
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

function Frame345() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame367 />
    </div>
  );
}

function Frame252() {
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

function Component025Instagram2() {
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

function Component021Facebook9() {
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

function Group44() {
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

function TikTok2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tik-tok 3">
      <Group44 />
    </div>
  );
}

function Group45() {
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

function Viber2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="viber (1) 2">
      <Group45 />
    </div>
  );
}

function Group47() {
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

function Group46() {
  return (
    <div className="absolute contents inset-[6.61%_0]" data-name="Group">
      <Group47 />
    </div>
  );
}

function Telegram2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="telegram 3">
      <Group46 />
    </div>
  );
}

function Frame563() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Component025Instagram2 />
      <Component021Facebook9 />
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path d={svgPaths.p23287600} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
      <TikTok2 />
      <Viber2 />
      <Telegram2 />
    </div>
  );
}

function Frame694() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Frame563 />
      </div>
    </div>
  );
}

function Frame388() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[164px] items-start py-[16px] relative shrink-0 w-[330px]">
      <Frame345 />
      <Frame252 />
      <Frame694 />
    </div>
  );
}

function Indicator1() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#575168] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#575168] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Oбјаве</p>
      </div>
      <Indicator1 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents4 />
        </div>
      </div>
    </div>
  );
}

function TabContents5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Догађаји</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents5 />
        </div>
      </div>
    </div>
  );
}

function TabGroup3() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Tab group">
      <div className="bg-[#edeaf5] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Tab 1">
        <StateLayer4 />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Tab 2">
        <StateLayer5 />
      </div>
    </div>
  );
}

function Frame309() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tabs">
        <div className="bg-[#fffcfd] content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-[329px]" data-name="Tabs">
          <TabGroup3 />
        </div>
      </div>
    </div>
  );
}

function Frame308() {
  return (
    <div className="content-stretch flex flex-col h-[45px] items-start pb-[4px] relative shrink-0 w-[328px]">
      <Frame309 />
    </div>
  );
}

function Frame346() {
  return (
    <div className="bg-[#edeaf5] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[40px] relative w-full">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#2a2a2a] text-[20px] text-center w-[246px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            Наш први догађај је у изради! Како бисте међу првима били обавештени о томе што спремамо - запратите нас!
          </p>
          <div className="aspect-[1024/1024] relative shrink-0 w-full" data-name="ChatGPT Image 22. juni 2025, 19_33_59 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage22Juni20251933591} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ZborAppLogoT14() {
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

function Frame147() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT14 />
    </div>
  );
}

function Frame149() {
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

function Frame148() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame149 />
    </div>
  );
}

function Frame151() {
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

function Frame150() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame151 />
    </div>
  );
}

function Frame347() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame148 />
      <Frame150 />
    </div>
  );
}

function Group75() {
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

function Component021Facebook10() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group75 />
    </div>
  );
}

function Frame314() {
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

function Frame313() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook10 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame314 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame313 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame153 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame147 />
      <Frame347 />
      <Frame152 />
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

function Frame145() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame146 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame145 />
    </div>
  );
}

function Footer15() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame144 />
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-center relative shrink-0 w-full">
      <Frame388 />
      <Frame308 />
      <Frame346 />
      <div className="h-[741px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer15 />
      </div>
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame304 />
      <Frame315 />
    </div>
  );
}

function Frame303() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame249 />
    </div>
  );
}

function Frame248() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-3px] w-[360px]">
      <Frame303 />
    </div>
  );
}

function AdminKreirajDogadjaj() {
  return (
    <div className="absolute bg-[#fffcfd] h-[1695px] left-[4170px] overflow-clip top-[3503px] w-[360px]" data-name="AdminKreirajDogadjaj">
      <Frame248 />
    </div>
  );
}

function MenuHamburgerIcon8() {
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

function Frame695() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-center left-[264px] p-[10px] rounded-[8px] top-[14px] w-[43px]">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#4f378a] text-[14px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function Frame469() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <div className="h-[34.99px] relative shrink-0 w-[39.775px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7745 34.9897">
          <path clipRule="evenodd" d={svgPaths.p259c6380} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#4f378a] text-[24px] w-[204px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        СуперАдмин
      </p>
    </div>
  );
}

function Frame467() {
  return (
    <div className="absolute content-stretch flex items-center left-[15px] top-[11px] w-[207px]">
      <Frame469 />
    </div>
  );
}

function AdminTopoNavBar() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="AdminTopoNavBar">
      <MenuHamburgerIcon8 />
      <Frame695 />
      <Frame467 />
    </div>
  );
}

function Frame319() {
  return (
    <div className="bg-[#c6daf8] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0 w-[368px]">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none" />
      <AdminTopoNavBar />
    </div>
  );
}

function Frame321() {
  return <div className="h-[733px] shrink-0 w-[360px]" />;
}

function Frame320() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[368px]">
      <Frame321 />
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame319 />
      <Frame320 />
    </div>
  );
}

function Frame255() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame256 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#fffcfd] h-[1065px] overflow-clip relative shrink-0 w-full">
      <Frame255 />
    </div>
  );
}

function Frame318() {
  return (
    <div className="content-stretch flex flex-col h-[1008px] items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex flex-col h-[99px] items-start relative shrink-0 w-full">
      <Frame318 />
    </div>
  );
}

function IconText1() {
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

function IconText2() {
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

function Frame368() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative shrink-0">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#4f378a] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Почетна
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <IconText1 />
        </div>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Админ
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <IconText2 />
        </div>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Корисници
      </p>
    </div>
  );
}

function Indicator2() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#575168] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#575168] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Корисници</p>
      </div>
      <Indicator2 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents6 />
        </div>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="shrink-0 size-[2px]" data-name="Spacer" />;
}

function TabContents7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Зборови</p>
      </div>
      <div className="bg-[#b90c0c] content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
        <Spacer />
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents7 />
        </div>
      </div>
    </div>
  );
}

function TabContents8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Догађаји и објаве</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents8 />
        </div>
      </div>
    </div>
  );
}

function TabContents9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Одобри зборове</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents9 />
        </div>
      </div>
    </div>
  );
}

function TabGroup4() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Tab group">
      <div className="bg-[#edeaf5] content-stretch flex flex-col h-full items-center justify-end overflow-clip relative shrink-0 w-[117px]" data-name="Tab 2">
        <StateLayer6 />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-col h-full items-center justify-end overflow-clip relative shrink-0 w-[117px]" data-name="Tab 1">
        <StateLayer7 />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-col h-full items-center justify-end overflow-clip relative shrink-0 w-[157px]" data-name="Tab 6">
        <StateLayer8 />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-col h-full items-center justify-end overflow-clip relative shrink-0 w-[179px]" data-name="Tab 7">
        <StateLayer9 />
      </div>
    </div>
  );
}

function Tabs2() {
  return (
    <div className="bg-[#fffcfd] content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-[570px]" data-name="Tabs">
      <TabGroup4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.44px] w-[24px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          10
        </p>
        <div className="relative shrink-0 size-[24px]" data-name="ChevronDown">
          <div className="absolute flex inset-[29.17%_16.05%_30.1%_16.67%] items-center justify-center">
            <div className="flex-none h-[9.776px] rotate-180 w-[16.149px]">
              <div className="relative size-full" data-name="Chevron">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1492 9.7761">
                  <path d={svgPaths.p2b06da90} fill="var(--fill-0, #4F378A)" id="Chevron" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function IconAndText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon and text">
      <div className="relative shrink-0 size-[28px]" data-name="Magnifying glass">
        <div className="absolute inset-[13.54%_9.33%_9.33%_13.54%]" data-name="shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5951 21.5951">
            <path d={svgPaths.p32eb2f70} fill="var(--fill-0, #4F378A)" id="shape" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Paragraph">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#575168] text-[14px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Пронађите корисника
        </p>
      </div>
    </div>
  );
}

function FieldAndButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="field and button">
      <div className="bg-[#fefefe] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[4px]" data-name=".base-searchcontainter">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between pl-[16px] py-[10px] relative size-full">
            <IconAndText />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e9e3e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame697() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[330px]">
      <Frame2 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[253px]" data-name="Search">
        <FieldAndButton />
      </div>
    </div>
  );
}

function Frame470() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[303px]">
      <Frame697 />
    </div>
  );
}

function Frame696() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[322px]">
      <Tabs2 />
      <Frame470 />
    </div>
  );
}

function Frame389() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[164px] items-start py-[16px] relative shrink-0 w-[330px]">
      <Frame368 />
      <Frame696 />
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PlusIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="PlusIcon">
          <path d={svgPaths.p150a80} fill="var(--fill-0, #FFFCFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#fffcfd] text-[16px] tracking-[0.5px]">Додајте корисника</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#4f378a] content-stretch flex gap-[4px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0 w-[328px]" data-name="button">
      <PlusIcon />
      <ButtonContent19 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[48px] relative shrink-0 text-[#333740] text-[32px] tracking-[-0.256px]">Корисници</p>
    </div>
  );
}

function Frame496() {
  return (
    <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[32px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 35">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p26afa300} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame496 />
    </div>
  );
}

function Frame497() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#4f378a] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Измени
        </p>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame497 />
    </div>
  );
}

function Frame493() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[103px]">
      <Group48 />
      <Group49 />
    </div>
  );
}

function Frame503() {
  return (
    <div className="col-1 h-[33.5px] ml-0 mt-0 relative row-1 w-[32.5px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 33.5">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p167c4000} fill="var(--fill-0, #BD0000)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame503 />
    </div>
  );
}

function Frame504() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#bd0000] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Обриши
        </p>
      </div>
    </div>
  );
}

function Group51() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame504 />
    </div>
  );
}

function Frame499() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[107px]">
      <Group50 />
      <Group51 />
    </div>
  );
}

function Frame492() {
  return (
    <div className="content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0">
      <Frame493 />
      <Frame499 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[20px] py-[12px] relative shrink-0 w-[254px]" data-name="_Cell">
      <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame492 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1272px]" data-name="_Row">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cell3 />
    </div>
  );
}

function Frame514() {
  return (
    <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[32px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 35">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p26afa300} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame514 />
    </div>
  );
}

function Frame515() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#4f378a] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Измени
        </p>
      </div>
    </div>
  );
}

function Group53() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame515 />
    </div>
  );
}

function Frame513() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[103px]">
      <Group52 />
      <Group53 />
    </div>
  );
}

function Frame564() {
  return (
    <div className="col-1 h-[33.5px] ml-0 mt-0 relative row-1 w-[32.5px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 33.5">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p167c4000} fill="var(--fill-0, #BD0000)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame564 />
    </div>
  );
}

function Frame565() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#bd0000] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Обриши
        </p>
      </div>
    </div>
  );
}

function Group55() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame565 />
    </div>
  );
}

function Frame518() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[107px]">
      <Group54 />
      <Group55 />
    </div>
  );
}

function Frame512() {
  return (
    <div className="content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0">
      <Frame513 />
      <Frame518 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[20px] py-[12px] relative shrink-0 w-[254px]" data-name="_Cell">
      <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame512 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1272px]" data-name="_Row">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cell4 />
    </div>
  );
}

function Frame568() {
  return (
    <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[32px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 35">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p26afa300} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame568 />
    </div>
  );
}

function Frame569() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#4f378a] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Измени
        </p>
      </div>
    </div>
  );
}

function Group57() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame569 />
    </div>
  );
}

function Frame567() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[103px]">
      <Group56 />
      <Group57 />
    </div>
  );
}

function Frame571() {
  return (
    <div className="col-1 h-[33.5px] ml-0 mt-0 relative row-1 w-[32.5px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 33.5">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p167c4000} fill="var(--fill-0, #BD0000)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame571 />
    </div>
  );
}

function Frame572() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#bd0000] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Обриши
        </p>
      </div>
    </div>
  );
}

function Group76() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame572 />
    </div>
  );
}

function Frame570() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[107px]">
      <Group58 />
      <Group76 />
    </div>
  );
}

function Frame566() {
  return (
    <div className="content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0">
      <Frame567 />
      <Frame570 />
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[20px] py-[12px] relative shrink-0 w-[254px]" data-name="_Cell">
      <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame566 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1272px]" data-name="_Row">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#333740] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                Cell data
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cell5 />
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="content-stretch flex items-center relative shrink-0 w-[1272px]" data-name="_Row">
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px] w-[68px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Име
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px] w-[68px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Мејл
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-[68px]" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Одобрен
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px] w-[68px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Креиран
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4f378a] flex-[1_0_0] min-h-px min-w-px relative" data-name="_Cell">
            <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0" data-name="_Item">
                  <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.56px] w-[68px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    Акције
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row3 />
        <Row4 />
        <Row5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Tables() {
  return (
    <div className="h-[297px] relative shrink-0 w-full" data-name="Tables">
      <div className="content-stretch flex flex-col gap-[20px] items-start pl-[16px] relative size-full">
        <Heading1 />
        <Content13 />
      </div>
    </div>
  );
}

function Pages3() {
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

function Frame468() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
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
          <Pages3 />
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

function ZborAppLogoT15() {
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

function Frame157() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT15 />
    </div>
  );
}

function Frame159() {
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

function Frame158() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame159 />
    </div>
  );
}

function Frame161() {
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

function Frame160() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame161 />
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame158 />
      <Frame160 />
    </div>
  );
}

function Group77() {
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

function Component021Facebook11() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group77 />
    </div>
  );
}

function Frame324() {
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

function Frame323() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook11 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame324 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame323 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame163 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame157 />
      <Frame348 />
      <Frame162 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[245px] leading-[20px] relative shrink-0 text-[#fffcfd] text-[0px] text-[14px] text-center w-[328px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          © 2025 ЗборАпп - за доступније зборове
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` ЗборАпп поштује GDPR. Прикупљамо само податке неопходне за функционисање апликације. Аналитички колачићи се користе искључиво уз сагласност.`}</p>
        <p className="font-['Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame156 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame155 />
    </div>
  );
}

function Footer16() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame154 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[1352px] items-center relative shrink-0 w-[360px]">
      <Frame389 />
      <Button3 />
      <Tables />
      <Frame468 />
      <div className="h-[741px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer16 />
      </div>
    </div>
  );
}

function Frame254() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame317 />
      <Frame322 />
    </div>
  );
}

function Frame316() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]">
      <Frame254 />
    </div>
  );
}

function Frame253() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-3px]">
      <Frame316 />
    </div>
  );
}

function SuperAdmin() {
  return (
    <div className="absolute bg-[#fffcfd] h-[1502px] left-[3447px] overflow-clip top-[1645px] w-[360px]" data-name="SuperAdmin">
      <Frame253 />
    </div>
  );
}

function MenuHamburgerIcon9() {
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

function Frame698() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-center left-[264px] p-[10px] rounded-[8px] top-[14px] w-[43px]">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#4f378a] text-[14px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function ZborAdminLogoCirNeg1() {
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

function Frame355() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0 w-[368px]">
      <div className="bg-[#edeaf5] h-[57px] relative shrink-0 w-full" data-name="AdminTopoNavBar">
        <MenuHamburgerIcon9 />
        <Frame698 />
        <ZborAdminLogoCirNeg1 />
      </div>
    </div>
  );
}

function Frame357() {
  return <div className="h-[733px] shrink-0 w-[360px]" />;
}

function Frame356() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[368px]">
      <Frame357 />
    </div>
  );
}

function Frame354() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame355 />
      <Frame356 />
    </div>
  );
}

function Frame353() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame354 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#fffcfd] h-[1065px] overflow-clip relative shrink-0 w-full">
      <Frame353 />
    </div>
  );
}

function Frame352() {
  return (
    <div className="content-stretch flex flex-col h-[1008px] items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame351() {
  return (
    <div className="content-stretch flex flex-col h-[99px] items-start relative shrink-0 w-full">
      <Frame352 />
    </div>
  );
}

function IconText3() {
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

function Frame369() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative shrink-0">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#4f378a] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Почетна
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <IconText3 />
        </div>
      </div>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#383838] text-[16px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Збор звездара
      </p>
    </div>
  );
}

function Frame361() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame369 />
    </div>
  );
}

function Frame362() {
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

function Component025Instagram3() {
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

function Component021Facebook12() {
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

function Group78() {
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

function TikTok3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tik-tok 3">
      <Group78 />
    </div>
  );
}

function Group79() {
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

function Viber3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="viber (1) 2">
      <Group79 />
    </div>
  );
}

function Group81() {
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

function Group80() {
  return (
    <div className="absolute contents inset-[6.61%_0]" data-name="Group">
      <Group81 />
    </div>
  );
}

function Telegram3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="telegram 3">
      <Group80 />
    </div>
  );
}

function Frame573() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Component025Instagram3 />
      <Component021Facebook12 />
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path d={svgPaths.p23287600} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
      <TikTok3 />
      <Viber3 />
      <Telegram3 />
    </div>
  );
}

function Frame699() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Frame573 />
      </div>
    </div>
  );
}

function Frame428() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[148px] items-start pb-[8px] relative shrink-0 w-full">
      <Frame361 />
      <Frame362 />
      <Frame699 />
    </div>
  );
}

function Frame360() {
  return (
    <div className="content-stretch flex flex-col h-[164px] items-start py-[16px] relative shrink-0 w-[330px]">
      <Frame428 />
    </div>
  );
}

function Indicator3() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#575168] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#575168] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Oбјаве</p>
      </div>
      <Indicator3 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents10 />
        </div>
      </div>
    </div>
  );
}

function TabContents11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px overflow-clip py-[14px] relative" data-name="Tab Contents">
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px]">Догађаји</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents11 />
        </div>
      </div>
    </div>
  );
}

function TabGroup5() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Tab group">
      <div className="bg-[#edeaf5] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Tab 1">
        <StateLayer10 />
      </div>
      <div className="bg-[#edeaf5] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Tab 2">
        <StateLayer11 />
      </div>
    </div>
  );
}

function Frame363() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tabs">
        <div className="bg-[#fffcfd] content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-[329px]" data-name="Tabs">
          <TabGroup5 />
        </div>
      </div>
    </div>
  );
}

function Frame429() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame360 />
      <Frame363 />
    </div>
  );
}

function Frame359() {
  return (
    <div className="content-stretch flex flex-col h-[778px] items-center relative shrink-0 w-[360px]">
      <Frame429 />
    </div>
  );
}

function Frame358() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[368px]">
      <Frame359 />
    </div>
  );
}

function Frame260() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame351 />
      <Frame358 />
    </div>
  );
}

function Frame259() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame260 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#fefdff] h-[1062px] overflow-clip relative shrink-0 w-full">
      <Frame259 />
    </div>
  );
}

function Frame350() {
  return (
    <div className="content-stretch flex flex-col h-[337px] items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function ButtonContent20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px] w-[201px] whitespace-pre-wrap">{`Направите нову  објаву`}</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#4f378a] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative size-full">
          <ButtonContent20 />
        </div>
      </div>
    </div>
  );
}

function Frame451() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Button4 />
      </div>
    </div>
  );
}

function ButtonContent21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.5px] w-[201px] whitespace-pre-wrap">Подесите страницу</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative size-full">
          <ButtonContent21 />
        </div>
      </div>
    </div>
  );
}

function Frame452() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Button5 />
      </div>
    </div>
  );
}

function ButtonContent22() {
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

function ButtonContent23() {
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

function Button6() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0 w-[147px]" data-name="Button">
      <ButtonContent23 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[40px] py-[24px] top-[524px] w-[296px]">
      <div className="bg-white content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0 w-[133px]" data-name="Button">
        <ButtonContent22 />
      </div>
      <Button6 />
    </div>
  );
}

function Frame5() {
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
      <Frame6 />
    </div>
  );
}

function Pages4() {
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

function Frame424() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <Frame5 />
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
          <Pages4 />
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

function Frame349() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[1231px] items-start relative shrink-0 w-full">
      <Frame350 />
      <Frame451 />
      <Frame452 />
      <Frame424 />
    </div>
  );
}

function ZborAppLogoT16() {
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

function Frame167() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT16 />
    </div>
  );
}

function Frame169() {
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

function Frame168() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame169 />
    </div>
  );
}

function Frame171() {
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

function Frame170() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame171 />
    </div>
  );
}

function Frame364() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame168 />
      <Frame170 />
    </div>
  );
}

function Group82() {
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

function Component021Facebook13() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group82 />
    </div>
  );
}

function Frame366() {
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

function Frame365() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook13 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame366 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame365 />
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame173 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame167 />
      <Frame364 />
      <Frame172 />
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

function Frame165() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame166 />
    </div>
  );
}

function Frame164() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame165 />
    </div>
  );
}

function Footer17() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame164 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame349 />
      <div className="h-[741px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer17 />
      </div>
    </div>
  );
}

function Frame325() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame258 />
    </div>
  );
}

function Frame257() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-3px] w-[360px]">
      <Frame325 />
    </div>
  );
}

function AdminObjave() {
  return (
    <div className="absolute bg-[#fffcfd] h-[1994px] left-[4602px] overflow-clip top-[3503px] w-[360px]" data-name="AdminObjave">
      <Frame257 />
    </div>
  );
}

function Frame700() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[4123px] p-[10px] rounded-[200px] top-[3610px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame701() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[3590px] p-[10px] rounded-[200px] top-[3458px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame702() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[3981px] p-[10px] rounded-[200px] top-[3190px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function MenuHamburgerIcon10() {
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

function Frame703() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-center left-[264px] p-[10px] rounded-[8px] top-[14px] w-[43px]">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#4f378a] text-[14px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function ZborAdminLogoCirNeg2() {
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

function Frame381() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0 w-[368px]">
      <div className="bg-[#edeaf5] h-[57px] relative shrink-0 w-full" data-name="AdminTopoNavBar">
        <MenuHamburgerIcon10 />
        <Frame703 />
        <ZborAdminLogoCirNeg2 />
      </div>
    </div>
  );
}

function Frame383() {
  return <div className="h-[733px] shrink-0 w-[360px]" />;
}

function Frame382() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[368px]">
      <Frame383 />
    </div>
  );
}

function Frame380() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame381 />
      <Frame382 />
    </div>
  );
}

function Frame379() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame380 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#fffcfd] h-[1065px] overflow-clip relative shrink-0 w-full">
      <Frame379 />
    </div>
  );
}

function Frame378() {
  return (
    <div className="content-stretch flex flex-col h-[1008px] items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame377() {
  return (
    <div className="content-stretch flex flex-col h-[99px] items-start relative shrink-0 w-full">
      <Frame378 />
    </div>
  );
}

function Frame3() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0 w-[105px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow">
        <div className="absolute inset-[28.05%_17.71%_28.2%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4993 10.5">
            <path d={svgPaths.p2aa51880} fill="var(--fill-0, #4F378A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.625] relative shrink-0 text-[#4f378a] text-[16px] text-left tracking-[0.1504px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Назад
      </p>
    </button>
  );
}

function Frame385() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="tilbake">
        <Frame3 />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame705() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex flex-col h-[42px] items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[45px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[47px] justify-center leading-[0] relative shrink-0 text-[#575168] text-[24px] text-center tracking-[-0.25px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[64px] whitespace-pre-wrap">Б</p>
      </div>
    </div>
  );
}

function Frame386() {
  return (
    <div className="content-stretch flex gap-[3px] h-[62px] items-center relative shrink-0 w-[250px]">
      <Frame705 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#322f35] text-[24px] tracking-[-0.25px] w-[172px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[64px] whitespace-pre-wrap">Збор Беле воде</p>
      </div>
    </div>
  );
}

function Component025Instagram4() {
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

function Component021Facebook14() {
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

function Group83() {
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

function TikTok4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tik-tok 3">
      <Group83 />
    </div>
  );
}

function Group84() {
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

function Viber4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="viber (1) 2">
      <Group84 />
    </div>
  );
}

function Group86() {
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

function Group85() {
  return (
    <div className="absolute contents inset-[6.61%_0]" data-name="Group">
      <Group86 />
    </div>
  );
}

function Telegram4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="telegram 3">
      <Group85 />
    </div>
  );
}

function Frame574() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Component025Instagram4 />
      <Component021Facebook14 />
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path d={svgPaths.p23287600} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
      <TikTok4 />
      <Viber4 />
      <Telegram4 />
    </div>
  );
}

function ZborNaslovna2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[164px] items-start py-[16px] relative shrink-0 w-[330px]" data-name="ZborNaslovna">
      <Frame385 />
      <Frame386 />
      <Frame574 />
    </div>
  );
}

function Frame575() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[21.5px] top-0">
      <div className="bg-[#4f378a] content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[317px]" data-name="3">
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#fffcfd] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            Прати
          </p>
        </div>
      </div>
      <div className="bg-[#fffcfd] content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[317px]" data-name="405">
        <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4f378a] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            Подели страницу
          </p>
        </div>
      </div>
    </div>
  );
}

function TabContent4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="TabContent">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Објаве
        </p>
      </div>
    </div>
  );
}

function TabContent5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="TabContent">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Догађаји
        </p>
      </div>
    </div>
  );
}

function TabGroup6() {
  return (
    <div className="absolute border-[#dadbdd] border-b border-solid h-[48px] left-[23px] top-[136px] w-[188px]" data-name="TabGroup">
      <div className="absolute content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] top-0" data-name="Tab">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
        <TabContent4 />
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[85px] px-[16px] py-[12px] top-0" data-name="Tab">
        <div aria-hidden="true" className="absolute border-[#410464] border-b-3 border-solid inset-0 pointer-events-none" />
        <TabContent5 />
      </div>
    </div>
  );
}

function LocationPinIcon1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="LocationPinIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LocationPinIcon">
          <path clipRule="evenodd" d={svgPaths.pd2c6a00} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame401() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[202px]">
      <LocationPinIcon1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[28px] text-[#2a2a2a] text-[16px] top-[12px] w-[174px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Парк код 6. гимназије</p>
      </div>
    </div>
  );
}

function ClockIcon1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="ClockIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ClockIcon">
          <path clipRule="evenodd" d={svgPaths.p30a46280} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame402() {
  return (
    <div className="absolute h-[42px] left-0 top-[36px] w-[202px]">
      <ClockIcon1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#2a2a2a] text-[16px] top-[12px] w-[173px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">26. Јун 2025, 18,30ч</p>
      </div>
    </div>
  );
}

function Frame404() {
  return (
    <div className="absolute h-[60px] left-[146px] top-[124px] w-[202px]">
      <Frame401 />
      <Frame402 />
    </div>
  );
}

function KarticaObjavaMobile3() {
  return (
    <div className="absolute bg-[#edeaf5] h-[207px] left-0 rounded-[8px] top-0 w-[360px]" data-name="KarticaObjavaMobile">
      <div className="absolute h-[160px] left-[12px] top-[24px] w-[117.717px]" data-name="viber_image_2025-06-24_14-08-21-155 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgViberImage202506241408211552} />
      </div>
      <ol className="absolute block font-['Noto_Sans:Bold',sans-serif] font-bold h-[23px] leading-[0] left-[150px] text-[#2a2a2a] text-[18px] top-[24px] w-[198px]" start="14" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        <li className="ms-[27px] whitespace-pre-wrap">
          <span className="leading-[18px]">Збор грађана</span>
        </li>
      </ol>
      <Frame404 />
    </div>
  );
}

function Frame387() {
  return (
    <div className="h-[473px] relative shrink-0 w-[360px]">
      <Frame575 />
      <TabGroup6 />
      <div className="absolute h-[265px] left-0 top-[208px] w-[360px]" data-name="KarticaDogadjajMobile">
        <KarticaObjavaMobile3 />
      </div>
      <div className="absolute h-[207px] left-0 top-[670px] w-[360px]" data-name="KarticaDogadjajMobile" />
    </div>
  );
}

function Frame384() {
  return (
    <div className="content-stretch flex flex-col h-[563px] items-center relative shrink-0 w-[368px]">
      <ZborNaslovna2 />
      <Frame387 />
    </div>
  );
}

function Component3() {
  return (
    <div className="min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="405">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[12px] relative w-full">
          <div className="relative shrink-0 size-[19.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
              <path clipRule="evenodd" d={svgPaths.p5ea9c80} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
          <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.04px]">Придружи се догађају као збор</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame706() {
  return (
    <div className="bg-[#edeaf5] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[16px] relative w-full">
        <Component3 />
      </div>
    </div>
  );
}

function Frame704() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame384 />
      <Frame706 />
    </div>
  );
}

function Pages5() {
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

function Frame376() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[985px] items-center relative shrink-0 w-full">
      <Frame377 />
      <Frame704 />
      <div className="content-stretch flex items-start py-[24px] relative shrink-0" data-name="Pagination">
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
          <Pages5 />
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

function Frame375() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-0 w-[360px]">
      <Frame376 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#fefdff] h-[1097px] overflow-clip relative shrink-0 w-full">
      <Frame375 />
    </div>
  );
}

function Frame374() {
  return (
    <div className="content-stretch flex flex-col h-[788px] items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function HeadingContainer15() {
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

function Left19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer15 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left19 />
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

function Divider21() {
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

function ThumbUpIcon13() {
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

function ThumbUpIcon14() {
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

function Frame175() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon13 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpIcon14 />
        </div>
      </div>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame175 />
    </div>
  );
}

function Frame390() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
          <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
            <Container15 />
            <Divider21 />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <Frame174 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame373() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame374 />
      <Frame390 />
    </div>
  );
}

function ZborAppLogoT17() {
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

function Frame179() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT17 />
    </div>
  );
}

function Frame181() {
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

function Frame180() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame181 />
    </div>
  );
}

function Frame183() {
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

function Frame182() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame183 />
    </div>
  );
}

function Frame391() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame180 />
      <Frame182 />
    </div>
  );
}

function Group87() {
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

function Component021Facebook15() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group87 />
    </div>
  );
}

function Frame393() {
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

function Frame392() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook15 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame393 />
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame392 />
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame185 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame179 />
      <Frame391 />
      <Frame184 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[245px] leading-[20px] relative shrink-0 text-[#fffcfd] text-[0px] text-[14px] text-center w-[328px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          © 2025 ЗборАпп - за доступније зборове
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` ЗборАпп поштује GDPR. Прикупљамо само податке неопходне за функционисање апликације. Аналитички колачићи се користе искључиво уз сагласност.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame178 />
    </div>
  );
}

function Frame176() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame177 />
    </div>
  );
}

function Footer18() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame176 />
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame373 />
      <div className="h-[741px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer18 />
      </div>
    </div>
  );
}

function Frame371() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame372 />
    </div>
  );
}

function Frame370() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-3px] w-[360px]">
      <Frame371 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-[#fffcfd] h-[1780px] left-[5453px] overflow-clip top-[3612px] w-[360px]" data-name="Придружи се догађају као збор">
      <Frame370 />
    </div>
  );
}

function Frame707() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[5362px] p-[10px] rounded-[200px] top-[3629px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame708() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[6024px] p-[10px] rounded-[200px] top-[3753px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame709() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[6039px] p-[10px] rounded-[200px] top-[4088px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame710() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[6064px] p-[10px] rounded-[200px] top-[4412px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame711() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[6671px] p-[10px] rounded-[200px] top-[5066px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame712() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[6974px] p-[10px] rounded-[200px] top-[5950px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame713() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[7077px] p-[10px] rounded-[200px] top-[5082px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame714() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[5916px] p-[10px] rounded-[200px] top-[3904px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame715() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[5918px] p-[10px] rounded-[200px] top-[4233px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame716() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[5935px] p-[10px] rounded-[200px] top-[4436px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame717() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[6804px] p-[10px] rounded-[200px] top-[4970px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame718() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[5963px] p-[10px] rounded-[200px] top-[5112px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame719() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[6911px] p-[10px] rounded-[200px] top-[5756px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function Frame720() {
  return (
    <div className="absolute bg-[#bd0000] content-stretch flex flex-col items-center justify-center left-[5098px] p-[10px] rounded-[200px] top-[3736px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">ne</p>
    </div>
  );
}

function MenuHamburgerIcon11() {
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

function Frame721() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-center left-[264px] p-[10px] rounded-[8px] top-[14px] w-[43px]">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#4f378a] text-[14px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        ЋИР
      </p>
    </div>
  );
}

function ZborAdminLogoCirNeg3() {
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

function Frame411() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0 w-[368px]">
      <div className="bg-[#edeaf5] h-[57px] relative shrink-0 w-full" data-name="AdminTopoNavBar">
        <MenuHamburgerIcon11 />
        <Frame721 />
        <ZborAdminLogoCirNeg3 />
      </div>
    </div>
  );
}

function Frame413() {
  return <div className="h-[733px] shrink-0 w-[360px]" />;
}

function Frame412() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[368px]">
      <Frame413 />
    </div>
  );
}

function Frame410() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame411 />
      <Frame412 />
    </div>
  );
}

function Frame409() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[2px] w-[360px]">
      <Frame410 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#fffcfd] h-[1065px] overflow-clip relative shrink-0 w-full">
      <Frame409 />
    </div>
  );
}

function Frame408() {
  return (
    <div className="content-stretch flex flex-col h-[1008px] items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame407() {
  return (
    <div className="content-stretch flex flex-col h-[99px] items-start relative shrink-0 w-full">
      <Frame408 />
    </div>
  );
}

function Frame4() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0 w-[105px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow">
        <div className="absolute inset-[28.05%_17.71%_28.2%_17.71%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4993 10.5">
            <path d={svgPaths.p2aa51880} fill="var(--fill-0, #4F378A)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.625] relative shrink-0 text-[#4f378a] text-[16px] text-left tracking-[0.1504px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Назад
      </p>
    </button>
  );
}

function Frame415() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="tilbake">
        <Frame4 />
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame416() {
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

function Component025Instagram5() {
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

function Component021Facebook16() {
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

function Group88() {
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

function TikTok5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tik-tok 3">
      <Group88 />
    </div>
  );
}

function Group89() {
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

function Viber5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="viber (1) 2">
      <Group89 />
    </div>
  );
}

function Group91() {
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

function Group90() {
  return (
    <div className="absolute contents inset-[6.61%_0]" data-name="Group">
      <Group91 />
    </div>
  );
}

function Telegram5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="telegram 3">
      <Group90 />
    </div>
  );
}

function Frame576() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Component025Instagram5 />
      <Component021Facebook16 />
      <div className="h-[24px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path d={svgPaths.p23287600} fill="var(--fill-0, #4F378A)" id="Vector" />
        </svg>
      </div>
      <TikTok5 />
      <Viber5 />
      <Telegram5 />
    </div>
  );
}

function ZborNaslovna3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[164px] items-start py-[16px] relative shrink-0 w-[330px]" data-name="ZborNaslovna">
      <Frame415 />
      <Frame416 />
      <Frame576 />
    </div>
  );
}

function Frame577() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-0 w-[332px]">
      <div className="bg-[#4f378a] content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[317px]" data-name="3">
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#fffcfd] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            Прати
          </p>
        </div>
      </div>
      <div className="bg-[#fffcfd] content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] shrink-0 w-[317px]" data-name="405">
        <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
          <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4f378a] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
            Подели страницу
          </p>
        </div>
      </div>
    </div>
  );
}

function TabContent6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="TabContent">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Објаве
        </p>
      </div>
    </div>
  );
}

function TabContent7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="TabContent">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Body">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          Догађаји
        </p>
      </div>
    </div>
  );
}

function TabGroup7() {
  return (
    <div className="absolute border-[#dadbdd] border-b border-solid h-[48px] left-[23px] top-[136px] w-[188px]" data-name="TabGroup">
      <div className="absolute content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] top-0" data-name="Tab">
        <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
        <TabContent6 />
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[85px] px-[16px] py-[12px] top-0" data-name="Tab">
        <div aria-hidden="true" className="absolute border-[#410464] border-b-3 border-solid inset-0 pointer-events-none" />
        <TabContent7 />
      </div>
    </div>
  );
}

function LocationPinIcon2() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="LocationPinIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LocationPinIcon">
          <path clipRule="evenodd" d={svgPaths.pd2c6a00} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame419() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[202px]">
      <LocationPinIcon2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[28px] text-[#2a2a2a] text-[16px] top-[12px] w-[174px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Парк код 6. гимназије</p>
      </div>
    </div>
  );
}

function ClockIcon2() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="ClockIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ClockIcon">
          <path clipRule="evenodd" d={svgPaths.p30a46280} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame420() {
  return (
    <div className="absolute h-[42px] left-0 top-[36px] w-[202px]">
      <ClockIcon2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#2a2a2a] text-[16px] top-[12px] w-[173px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">26. Јун 2025, 18,30ч</p>
      </div>
    </div>
  );
}

function Frame418() {
  return (
    <div className="absolute h-[60px] left-[146px] top-[124px] w-[202px]">
      <Frame419 />
      <Frame420 />
    </div>
  );
}

function KarticaObjavaMobile4() {
  return (
    <div className="absolute bg-[#edeaf5] h-[207px] left-0 rounded-[8px] top-0 w-[360px]" data-name="KarticaObjavaMobile">
      <div className="absolute h-[160px] left-[12px] top-[24px] w-[117.717px]" data-name="viber_image_2025-06-24_14-08-21-155 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgViberImage202506241408211552} />
      </div>
      <ol className="absolute block font-['Noto_Sans:Bold',sans-serif] font-bold h-[23px] leading-[0] left-[150px] text-[#2a2a2a] text-[18px] top-[24px] w-[198px]" start="14" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        <li className="ms-[27px] whitespace-pre-wrap">
          <span className="leading-[18px]">Збор грађана</span>
        </li>
      </ol>
      <Frame418 />
    </div>
  );
}

function Frame724() {
  return (
    <div className="bg-[#2463eb] content-stretch flex h-[22px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        🖇 Zajedno sa
      </p>
    </div>
  );
}

function Frame725() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative rounded-[58px] shrink-0 size-[24px]" data-name="last ned 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[58px] size-full" src={imgLastNed1} />
      </div>
    </div>
  );
}

function Frame723() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[143px] top-[290px]">
      <Frame724 />
      <Frame725 />
    </div>
  );
}

function Frame726() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex h-[22px] items-center justify-center left-[143px] p-[10px] rounded-[8px] top-[260px]">
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        🖐️ Inicijator
      </p>
    </div>
  );
}

function Frame417() {
  return (
    <div className="h-[473px] relative shrink-0 w-[360px]">
      <Frame577 />
      <TabGroup7 />
      <div className="absolute h-[265px] left-0 top-[208px] w-[360px]" data-name="KarticaDogadjajMobile">
        <KarticaObjavaMobile4 />
      </div>
      <div className="absolute h-[207px] left-0 top-[670px] w-[360px]" data-name="KarticaDogadjajMobile" />
      <Frame723 />
      <Frame726 />
    </div>
  );
}

function Frame414() {
  return (
    <div className="content-stretch flex flex-col h-[563px] items-center relative shrink-0 w-[368px]">
      <ZborNaslovna3 />
      <Frame417 />
    </div>
  );
}

function Component4() {
  return (
    <div className="min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="405">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[12px] relative w-full">
          <div className="relative shrink-0 size-[19.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
              <path clipRule="evenodd" d={svgPaths.p20006180} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
          <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="Paragraph">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#7c5294] text-[16px] tracking-[0.04px]">Уклони придруживање догађају</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame727() {
  return (
    <div className="bg-[#edeaf5] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[16px] relative w-full">
        <Component4 />
      </div>
    </div>
  );
}

function Frame722() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame414 />
      <Frame727 />
    </div>
  );
}

function Pages6() {
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

function Frame406() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[985px] items-center relative shrink-0 w-full">
      <Frame407 />
      <Frame722 />
      <div className="content-stretch flex items-start py-[24px] relative shrink-0" data-name="Pagination">
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
          <Pages6 />
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

function Frame405() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-0 w-[360px]">
      <Frame406 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#fefdff] h-[1097px] overflow-clip relative shrink-0 w-full">
      <Frame405 />
    </div>
  );
}

function Frame398() {
  return (
    <div className="content-stretch flex flex-col h-[788px] items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function HeadingContainer16() {
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

function Left20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer16 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left20 />
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

function Divider22() {
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

function ThumbUpIcon15() {
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

function ThumbUpIcon16() {
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

function Frame187() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ThumbUpIcon15 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ThumbUpIcon16 />
        </div>
      </div>
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-start justify-center relative w-full">
      <Frame187 />
    </div>
  );
}

function Frame421() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="bg-[#fffcfd] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] shrink-0 w-[332px]" data-name="ModalOKOrisnickomIskustvu">
          <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
            <Container16 />
            <Divider22 />
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <Frame186 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame397() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame398 />
      <Frame421 />
    </div>
  );
}

function ZborAppLogoT18() {
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

function Frame191() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241px]">
      <ZborAppLogoT18 />
    </div>
  );
}

function Frame193() {
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

function Frame192() {
  return (
    <div className="h-[100px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[196px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        О апликацији
      </p>
      <Frame193 />
    </div>
  );
}

function Frame195() {
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

function Frame194() {
  return (
    <div className="h-[132px] relative shrink-0 w-full">
      <p className="absolute font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] left-0 text-[16px] top-0 w-[328px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Правила и заштита података
      </p>
      <Frame195 />
    </div>
  );
}

function Frame422() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[283px] items-start relative shrink-0 text-[#fffcfd] w-full whitespace-pre-wrap">
      <Frame192 />
      <Frame194 />
    </div>
  );
}

function Group92() {
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

function Component021Facebook17() {
  return (
    <div className="absolute inset-[-18.75%_41.94%_-6.25%_36.56%] overflow-clip" data-name="021-facebook">
      <Group92 />
    </div>
  );
}

function Frame425() {
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

function Frame423() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93px]">
      <Component021Facebook17 />
      <div className="absolute h-[14.5px] left-[65px] top-[-2px] w-[19.5px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 14.5">
          <path clipRule="evenodd" d={svgPaths.p23e17440} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Frame425 />
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame423 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[40px] relative shrink-0 w-[328px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#fffcfd] text-[16px] w-[226px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Останимо у контакту
      </p>
      <Frame197 />
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[660px] items-start relative shrink-0">
      <Frame191 />
      <Frame422 />
      <Frame196 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[245px] leading-[20px] relative shrink-0 text-[#fffcfd] text-[0px] text-[14px] text-center w-[328px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          © 2025 ЗборАпп - за доступније зборове
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` ЗборАпп поштује GDPR. Прикупљамо само податке неопходне за функционисање апликације. Аналитички колачићи се користе искључиво уз сагласност.`}</p>
        <p className="font-['Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex flex-col h-[660px] items-start relative shrink-0 w-[329px]">
      <Frame190 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="absolute content-stretch flex flex-col h-[740px] items-start left-0 pl-[16px] pr-[97px] py-[40px] top-0 w-[360px]">
      <Frame189 />
    </div>
  );
}

function Footer19() {
  return (
    <div className="absolute bg-[#4f378a] inset-0" data-name="Footer">
      <Frame188 />
    </div>
  );
}

function Frame396() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame397 />
      <div className="h-[741px] relative shrink-0 w-[360px]" data-name="Footer">
        <Footer19 />
      </div>
    </div>
  );
}

function Frame395() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame396 />
    </div>
  );
}

function Frame394() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-3px] w-[360px]">
      <Frame395 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-[#fffcfd] h-[1780px] left-[6101px] overflow-clip top-[4547px] w-[360px]" data-name="Уклони придруживање догађају">
      <Frame394 />
    </div>
  );
}

function CheckmarkCircleFillIcon1() {
  return (
    <div className="h-[24.25px] relative shrink-0 w-[20.25px]" data-name="CheckmarkCircleFillIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.25 24.25">
        <g id="CheckmarkCircleFillIcon">
          <path clipRule="evenodd" d={svgPaths.p3a1c3e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function XMarkIcon1() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="XMarkIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="XMarkIcon">
          <path clipRule="evenodd" d={svgPaths.p7ec6300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Alert2() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex gap-[8px] items-start left-[6128px] pl-[24px] pr-[16px] py-[16px] rounded-[4px] top-[4412px] w-[350px]" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#246b2c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <CheckmarkCircleFillIcon1 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fffcfd] text-[16px] w-[249px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Придружујете се догађају
      </p>
      <XMarkIcon1 />
    </div>
  );
}

function CheckmarkCircleFillIcon2() {
  return (
    <div className="h-[24.25px] relative shrink-0 w-[20.25px]" data-name="CheckmarkCircleFillIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.25 24.25">
        <g id="CheckmarkCircleFillIcon">
          <path clipRule="evenodd" d={svgPaths.p3a1c3e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function XMarkIcon2() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="XMarkIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="XMarkIcon">
          <path clipRule="evenodd" d={svgPaths.p7ec6300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Alert3() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex gap-[8px] items-start left-[6004px] pl-[24px] pr-[16px] py-[16px] rounded-[4px] top-[3846px] w-[350px]" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#246b2c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <CheckmarkCircleFillIcon2 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fffcfd] text-[16px] w-[249px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Регистровано праћење
      </p>
      <XMarkIcon2 />
    </div>
  );
}

function CheckmarkCircleFillIcon3() {
  return (
    <div className="h-[24.25px] relative shrink-0 w-[20.25px]" data-name="CheckmarkCircleFillIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.25 24.25">
        <g id="CheckmarkCircleFillIcon">
          <path clipRule="evenodd" d={svgPaths.p3a1c3e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function XMarkIcon3() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="XMarkIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="XMarkIcon">
          <path clipRule="evenodd" d={svgPaths.p7ec6300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Alert4() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex gap-[8px] items-start left-[6533px] pl-[24px] pr-[16px] py-[16px] rounded-[4px] top-[5120px] w-[350px]" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#246b2c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <CheckmarkCircleFillIcon3 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fffcfd] text-[16px] w-[249px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`Уклонили сте придруживање  догађају`}</p>
      <XMarkIcon3 />
    </div>
  );
}

function HeadingContainer17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#383838] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          <p className="mb-0">Да ли сте сигурни</p>
          <p className="mb-0">{`да желите да обришете `}</p>
          <p>догађај?</p>
        </div>
      </div>
    </div>
  );
}

function Left21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer17 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left21 />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="XMarkIcon">
          <div className="absolute inset-[21.95%_21.8%_21.8%_21.8%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5374 13.5">
              <path clipRule="evenodd" d={svgPaths.p339b6700} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
        <g id="Divider">
          <rect fill="#FEFEFE" height="24" width="360" />
          <line id="divider line" stroke="var(--stroke-0, #C9C4CC)" x2="360" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]">Да, обриши догађај</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#4f378a] content-stretch flex h-[48px] items-start justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[311px]" data-name="Button">
      <ButtonContent24 />
    </div>
  );
}

function Frame432() {
  return (
    <div className="content-stretch flex flex-col items-start px-[25px] relative shrink-0">
      <Button7 />
    </div>
  );
}

function ButtonContent25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.5px]">Не, сачувај догађај</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#edeaf5] content-stretch flex h-[48px] items-start justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[311px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ButtonContent25 />
    </div>
  );
}

function Frame433() {
  return (
    <div className="content-stretch flex flex-col items-start px-[25px] relative shrink-0">
      <Button8 />
    </div>
  );
}

function Frame434() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame432 />
      <Frame433 />
    </div>
  );
}

function Registracija() {
  return (
    <div className="absolute bg-[#fefefe] content-stretch flex flex-col items-start left-[5021px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[4508px] w-[360px]" data-name="Registracija">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
        <Container17 />
        <Divider23 />
      </div>
      <Frame434 />
    </div>
  );
}

function Frame578() {
  return <div className="absolute bg-white h-[284px] left-[4788px] top-[1995px] w-[205px]" />;
}

function Frame581() {
  return (
    <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[32px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 35">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p26afa300} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group93() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame581 />
    </div>
  );
}

function Frame582() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#4f378a] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Измени
        </p>
      </div>
    </div>
  );
}

function Group94() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame582 />
    </div>
  );
}

function Frame580() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Group93 />
      <Group94 />
    </div>
  );
}

function Frame586() {
  return (
    <div className="col-1 h-[33.5px] ml-0 mt-0 relative row-1 w-[32.5px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 33.5">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p167c4000} fill="var(--fill-0, #BD0000)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group95() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame586 />
    </div>
  );
}

function Frame728() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#bd0000] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Обриши
        </p>
      </div>
    </div>
  );
}

function Group96() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame728 />
    </div>
  );
}

function Frame583() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Group95 />
      <Group96 />
    </div>
  );
}

function Frame730() {
  return (
    <div className="col-1 h-[35.643px] ml-0 mt-0 relative row-1 w-[35.642px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6422 35.6433">
        <g id="Frame 15434">
          <path clipRule="evenodd" d={svgPaths.p36ed5700} fill="var(--fill-0, #166244)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group97() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame730 />
    </div>
  );
}

function Frame731() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1 w-[66px]">
      <div className="content-stretch flex items-center justify-center py-[2px] relative shrink-0 w-full" data-name="_Item">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#166244] text-[16px] text-ellipsis tracking-[0.44px] w-[66px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Одобри
        </p>
      </div>
    </div>
  );
}

function Group98() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame731 />
    </div>
  );
}

function Frame729() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Group97 />
      <Group98 />
    </div>
  );
}

function Frame579() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start leading-[0] left-[4803px] top-[2066px] w-[235px]">
      <Frame580 />
      <Frame583 />
      <Frame729 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="HeadingMobile">
        <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#333740] text-[20px] tracking-[-0.02px]">Сесија ускоро истиче</p>
      </div>
    </div>
  );
}

function ButtonContent26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="X-mark">
        <div className="absolute inset-[21.88%]" data-name="shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4999 13.4999">
            <path d={svgPaths.p25276700} fill="var(--fill-0, #4F378A)" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Остани пријављен/а
      </p>
    </div>
  );
}

function ButtonContent28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Button content">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] text-center tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Одјави се сада
      </p>
    </div>
  );
}

function Content15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pt-[8px] px-[16px] relative w-full">
          <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex items-start justify-center px-[16px] py-[12px] relative w-full">
                <ButtonContent27 />
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex items-start justify-center px-[16px] py-[12px] relative w-full">
                <ButtonContent28 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pt-[4px] relative shrink-0 z-[2]" data-name="Icon">
      <div className="relative shrink-0 size-[24px]" data-name="Variant=Fill">
        <div className="absolute inset-[13.54%]" data-name="shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path d={svgPaths.p13b1ee00} fill="var(--fill-0, #093080)" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CloseButton1() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="CloseButton">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="X-mark">
        <div className="absolute inset-[21.88%]" data-name="shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4999 13.4999">
            <path d={svgPaths.p25276700} fill="var(--fill-0, #383838)" id="shape" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function AlertHeader1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="AlertHeader">
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] isolate items-start min-h-px min-w-px relative" data-name="_Header">
        <Icon1 />
        <div className="flex flex-[1_0_0] flex-col font-['Rubik:Medium',sans-serif] font-medium justify-end leading-[0] min-h-px min-w-px relative text-[#22252b] text-[20px] tracking-[0.15px] z-[1]">
          <p className="leading-[32px] whitespace-pre-wrap">ZboraApp privremeno nece raditi</p>
        </div>
      </div>
      <CloseButton1 />
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#22252b] text-[16px] tracking-[0.44px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            12.12.2025. između 14:00 i 22:00 obavićemo tehnička unapređenja platforme. Za to vreme aplikacija neće biti dostupna.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame732() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2198px] py-[16px] top-[2023px]">
      <div className="bg-[#e3f0ff] content-stretch flex flex-col gap-[8px] items-start min-w-[311px] p-[16px] relative rounded-[4px] shrink-0 w-[322px]" data-name="Alert">
        <div aria-hidden="true" className="absolute border border-[#093080] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <AlertHeader1 />
        <Content16 />
      </div>
    </div>
  );
}

function HeadingContainer18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#383838] text-[24px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Подешавање праћења
        </p>
      </div>
    </div>
  );
}

function Left22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer18 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left22 />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="XMarkIcon">
          <div className="absolute inset-[21.95%_21.8%_21.8%_21.8%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5374 13.5">
              <path clipRule="evenodd" d={svgPaths.p339b6700} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
        <g id="Divider">
          <rect fill="#FEFEFE" height="24" width="360" />
          <line id="divider line" stroke="var(--stroke-0, #C9C4CC)" x2="360" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame733() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[348px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#322f35] text-[16px] tracking-[0.15px] w-[332px] whitespace-pre-wrap">Да би сте запратили збор, потребно је да се прво региструјете улогујете или ако имате налог.</p>
    </div>
  );
}

function Select5() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            primer@domain.com
          </p>
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Select Field">
            <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
              Унесите мејл-адресу*
            </p>
            <Select5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Select6() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Унесите лозинку
          </p>
          <div className="h-[11.5px] relative shrink-0 w-[19.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.5">
              <path clipRule="evenodd" d={svgPaths.pb4d0d80} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectField5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Select Field">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Унесите лозинку*
      </p>
      <Select6 />
    </div>
  );
}

function Content18() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <SelectField5 />
        </div>
      </div>
    </div>
  );
}

function Select7() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#79747e] text-[16px] tracking-[0.5px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Потврдите лозинку
          </p>
          <div className="h-[11.5px] relative shrink-0 w-[19.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.5">
              <path clipRule="evenodd" d={svgPaths.pb4d0d80} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectField6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Select Field">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Поновите лозинку*
      </p>
      <Select7 />
    </div>
  );
}

function Content19() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <SelectField6 />
        </div>
      </div>
    </div>
  );
}

function Checkbox23() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
      <div className="bg-[#fafafa] relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div aria-hidden="true" className="absolute border-2 border-[#410464] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#322f35] text-[0px] text-[16px] tracking-[0.44px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">
          <span className="leading-[24px]">Слажем се са</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[24px] tracking-[0.44px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` условима `}</span>
        </p>
        <p className="mb-0">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[24px] tracking-[0.44px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            коришћења
          </span>
          <span className="leading-[24px]">{` и `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[24px] tracking-[0.44px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`политиком `}</span>
        </p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          приватности
        </p>
      </div>
    </div>
  );
}

function CheckboxList2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Checkbox List">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Checkbox Item">
        <Checkbox23 />
      </div>
    </div>
  );
}

function Frame734() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0">
      <div className="bg-[#fffef0] content-stretch flex flex-col gap-[8px] items-start min-w-[296px] px-[24px] py-[16px] relative rounded-[4px] shrink-0 w-[323px]" data-name="Confimation Panel">
        <div aria-hidden="true" className="absolute border border-[#c77300] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Checkbox Group">
          <CheckboxList2 />
        </div>
      </div>
    </div>
  );
}

function Divider25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
        <g id="Divider">
          <rect fill="white" height="24" width="360" />
          <line id="divider line" stroke="var(--stroke-0, #C9C4CC)" x2="360" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]">Потврди регистрацију</p>
    </div>
  );
}

function Left23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent29 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonContent30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.5px]">Улогуј се</p>
    </div>
  );
}

function Left24() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent30 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[19px] items-start pt-[12px] px-[24px] relative w-full">
        <Left23 />
        <Left24 />
      </div>
    </div>
  );
}

function Footer20() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col h-[159px] items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider25 />
      <Section9 />
    </div>
  );
}

function Frame426() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#2463eb] text-[16px] tracking-[0.5px]">Заборавили сте лозинку?</p>
        </div>
      </div>
    </div>
  );
}

function Registracija1() {
  return (
    <div className="absolute bg-[#fefefe] content-stretch flex flex-col items-start left-[6867px] overflow-clip py-[24px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[6009px] w-[360px]" data-name="Registracija">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
        <Container18 />
        <Divider24 />
      </div>
      <Frame733 />
      <Content17 />
      <Content18 />
      <Content19 />
      <Frame734 />
      <Footer20 />
      <Frame426 />
    </div>
  );
}

function HeadingContainer19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Heading container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#383838] text-[24px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
          Подешавање праћења
        </p>
      </div>
    </div>
  );
}

function Left25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Left">
      <HeadingContainer19 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pb-[8px] px-[24px] relative w-full">
        <Left25 />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="XMarkIcon">
          <div className="absolute inset-[21.95%_21.8%_21.8%_21.8%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5374 13.5">
              <path clipRule="evenodd" d={svgPaths.p339b6700} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
        <g id="Divider">
          <rect fill="#FEFEFE" height="24" width="360" />
          <line id="divider line" stroke="var(--stroke-0, #C9C4CC)" x2="360" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame735() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[348px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#322f35] text-[16px] tracking-[0.15px] w-[332px] whitespace-pre-wrap">Да би сте запратили збор, потребно је да се прво региструјете улогујете или ако имате налог.</p>
    </div>
  );
}

function Select8() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            primer@domain.com
          </p>
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Select Field">
            <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
              Унесите мејл-адресу*
            </p>
            <Select8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Select9() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Унесите лозинку
          </p>
          <div className="h-[11.5px] relative shrink-0 w-[19.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.5">
              <path clipRule="evenodd" d={svgPaths.pb4d0d80} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectField7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Select Field">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Унесите лозинку*
      </p>
      <Select9 />
    </div>
  );
}

function Content21() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <SelectField7 />
        </div>
      </div>
    </div>
  );
}

function Select10() {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] pl-[16px] pr-[12px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#79747e] text-[16px] tracking-[0.5px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Потврдите лозинку
          </p>
          <div className="h-[11.5px] relative shrink-0 w-[19.5px]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 11.5">
              <path clipRule="evenodd" d={svgPaths.pb4d0d80} fill="var(--fill-0, #4F378A)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectField8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Select Field">
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Поновите лозинку*
      </p>
      <Select10 />
    </div>
  );
}

function Content22() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <SelectField8 />
        </div>
      </div>
    </div>
  );
}

function Checkbox24() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
      <button className="bg-[#410464] cursor-pointer relative rounded-[4px] shrink-0 size-[24px]" data-name=".Checkbox Icon">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="h-[8px] relative shrink-0 w-[11px]" data-name="Check">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
              <path d={svgPaths.p2d02f480} fill="var(--fill-0, #FAFAFA)" id="Vector 1" />
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#410464] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </button>
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#322f35] text-[0px] text-[16px] tracking-[0.44px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">
          <span className="leading-[24px]">Слажем се са</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[24px] tracking-[0.44px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` условима `}</span>
        </p>
        <p className="mb-0">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[24px] tracking-[0.44px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            коришћења
          </span>
          <span className="leading-[24px]">{` и `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Roboto:Regular',sans-serif] font-normal leading-[24px] tracking-[0.44px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`политиком `}</span>
        </p>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          приватности
        </p>
      </div>
    </div>
  );
}

function CheckboxList3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Checkbox List">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Checkbox Item">
        <Checkbox24 />
      </div>
    </div>
  );
}

function Frame736() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0">
      <div className="bg-[#e5f5ef] content-stretch flex flex-col gap-[8px] items-start min-w-[296px] px-[24px] py-[16px] relative rounded-[4px] shrink-0 w-[323px]" data-name="Confimation Panel">
        <div aria-hidden="true" className="absolute border border-[#2e7a5b] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Checkbox Group">
          <CheckboxList3 />
        </div>
      </div>
    </div>
  );
}

function Divider27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Divider">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
        <g id="Divider">
          <rect fill="white" height="24" width="360" />
          <line id="divider line" stroke="var(--stroke-0, #C9C4CC)" x2="360" y1="11.5" y2="11.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.5px]">Потврди регистрацију</p>
    </div>
  );
}

function Left26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent31 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonContent32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.5px]">Улогуј се</p>
    </div>
  );
}

function Left27() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Left">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent32 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[19px] items-start pt-[12px] px-[24px] relative w-full">
        <Left26 />
        <Left27 />
      </div>
    </div>
  );
}

function Footer21() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col h-[159px] items-start overflow-clip relative shrink-0 w-full" data-name="_Footer">
      <Divider27 />
      <Section10 />
    </div>
  );
}

function Frame427() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#2463eb] text-[16px] tracking-[0.5px]">Заборавили сте лозинку?</p>
        </div>
      </div>
    </div>
  );
}

function Registracija2() {
  return (
    <div className="absolute bg-[#fefefe] content-stretch flex flex-col items-start left-[7309px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[6009px] w-[360px]" data-name="Registracija">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
        <Container19 />
        <Divider26 />
      </div>
      <Frame735 />
      <Content20 />
      <Content21 />
      <Content22 />
      <Frame736 />
      <Footer21 />
      <Frame427 />
    </div>
  );
}

function ButtonContent33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#fafafa] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Потврђујем праћење
      </p>
    </div>
  );
}

function RegisterZborButton() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="RegisterZborButton">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent33 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame435() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[424px] relative w-full">
          <RegisterZborButton />
        </div>
      </div>
    </div>
  );
}

function Frame436() {
  return (
    <div className="h-[48px] relative shrink-0 w-[982px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 982 48">
        <g id="Frame 15269">
          <line id="Line 1" stroke="var(--stroke-0, #575168)" x2="982" y1="23.5" y2="23.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame431() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[300px] items-start left-[40px] top-[40px] w-[948px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] min-w-full relative shrink-0 text-[#2a2a2a] text-[24px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`Праћење ”X” `}</p>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">
          <span className="leading-[20px]">{`Регистровали смо ваш захтев за праћење објава и догађаја за `}</span>
          <span className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{`”X” .  `}</span>
          <span className="leading-[20px]">{`Сходно са тим, слаћемо вам обавештења у ваше сандуче. Уколико желите да подесите или измените праћење, можете то урадити на страници збора или вашем профилу. `}</span>
        </p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p className="leading-[20px] mb-0">Уколико сте Ви затражили праћење, молимо Вас да то потврдите. У супортном, игноришите ову поруку.</p>
        <p className="leading-[20px]">&nbsp;</p>
      </div>
      <Frame435 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">Поздрав,</p>
        <p>Тим ЗборАпп</p>
      </div>
      <Frame436 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Уколико имате потешкоћа да кликнете на “Листа зборова“ дугме, можете да копирате и налепите у прегледач линк из наставка: /па овде линк/.
      </p>
    </div>
  );
}

function Frame430() {
  return (
    <div className="absolute bg-[#edeaf5] h-[409px] left-0 top-[57px] w-[1028px]">
      <Frame431 />
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute inset-[0_0_0.03%_0]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3327 34.9897">
        <g id="Group 16">
          <path d={svgPaths.p30472900} fill="var(--fill-0, #FFFCFD)" id="Vector" />
          <path d={svgPaths.p2eca6c00} fill="var(--fill-0, #FFFCFD)" id="Vector_2" />
          <path d={svgPaths.p1687eb00} fill="var(--fill-0, #FFFCFD)" id="Vector_3" />
          <path d={svgPaths.p20ee7600} fill="var(--fill-0, #FFFCFD)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3c9597c0} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ZborAppLogoT19() {
  return (
    <div className="h-[35px] overflow-clip relative shrink-0 w-[98.333px]" data-name="ZborApp Logo T1">
      <Group99 />
    </div>
  );
}

function Frame437() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[15px] top-[11px] w-[1408px]">
      <ZborAppLogoT19 />
    </div>
  );
}

function Frame737() {
  return (
    <div className="absolute h-[466px] left-[7894px] top-[5988px] w-[1028px]">
      <Frame430 />
      <div className="absolute bg-[#4f378a] h-[57px] left-0 top-0 w-[1028px]" data-name="Header za mejl">
        <Frame437 />
      </div>
    </div>
  );
}

function ButtonContent34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#fafafa] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Погледајте објаву
      </p>
    </div>
  );
}

function RegisterZborButton1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="RegisterZborButton">
      <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent34 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame440() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[424px] relative w-full">
          <RegisterZborButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame441() {
  return (
    <div className="h-[48px] relative shrink-0 w-[982px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 982 48">
        <g id="Frame 15269">
          <line id="Line 1" stroke="var(--stroke-0, #575168)" x2="982" y1="23.5" y2="23.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame439() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[40px] top-[40px] w-[948px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] min-w-full relative shrink-0 text-[#2a2a2a] text-[24px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Збор ”Име збора” је управо направио нову објаву
      </p>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">{`”Име објаве” `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`<Slika objave>`}</p>
        <p>&nbsp;</p>
      </div>
      <Frame440 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">Поздрав,</p>
        <p>Тим ЗборАпп</p>
      </div>
      <Frame441 />
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#2a2a2a] text-[0px] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">
          <span className="leading-[20px]">Уколико имате потешкоћа да кликнете на “</span>
          <span className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            Погледајте објаву
          </span>
          <span className="leading-[20px]">“ дугме, можете да копирате и налепите у прегледач линк из наставка: /па овде линк/.</span>
        </p>
        <p className="leading-[20px] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[20px]">Ако желите да престанете да пратите догађаје овог збора, кликните</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">{` `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[20px] text-[#4f378a] tracking-[0.1px] underline" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
            овде
          </span>
          <span className="leading-[20px]">{` да се одјавите.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame438() {
  return (
    <div className="absolute bg-[#edeaf5] h-[455px] left-0 top-[57px] w-[1028px]">
      <Frame439 />
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute inset-[0_0_0.03%_0]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3327 34.9897">
        <g id="Group 16">
          <path d={svgPaths.p30472900} fill="var(--fill-0, #FFFCFD)" id="Vector" />
          <path d={svgPaths.p2eca6c00} fill="var(--fill-0, #FFFCFD)" id="Vector_2" />
          <path d={svgPaths.p1687eb00} fill="var(--fill-0, #FFFCFD)" id="Vector_3" />
          <path d={svgPaths.p20ee7600} fill="var(--fill-0, #FFFCFD)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3c9597c0} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ZborAppLogoT20() {
  return (
    <div className="h-[35px] overflow-clip relative shrink-0 w-[98.333px]" data-name="ZborApp Logo T1">
      <Group100 />
    </div>
  );
}

function Frame442() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[15px] top-[11px] w-[1408px]">
      <ZborAppLogoT20 />
    </div>
  );
}

function Frame738() {
  return (
    <div className="absolute h-[512px] left-[8097px] top-[6990px] w-[1028px]">
      <Frame438 />
      <div className="absolute bg-[#4f378a] h-[57px] left-0 top-0 w-[1028px]" data-name="Header za mejl">
        <Frame442 />
      </div>
    </div>
  );
}

function Frame739() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[8431px] p-[10px] rounded-[200px] top-[6952px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame445() {
  return (
    <div className="h-[48px] relative shrink-0 w-[982px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 982 48">
        <g id="Frame 15269">
          <line id="Line 1" stroke="var(--stroke-0, #575168)" x2="982" y1="23.5" y2="23.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame444() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[300px] items-start left-[40px] top-[40px] w-[948px]">
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[36px] min-w-full relative shrink-0 text-[#2a2a2a] text-[24px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        Нови пратиоц
      </p>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">{`Брабо, управо вас је неко запратио. Објављујте догађаје и објаве како би корисник био обавештен о дешавањима вашег збора. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Тренутно имате ”X” пратилаца</p>
        <p>&nbsp;</p>
      </div>
      <div className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="mb-0">Поздрав,</p>
        <p>Тим ЗборАпп</p>
      </div>
      <Frame445 />
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#2a2a2a] text-[0px] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <span className="leading-[20px]">Уколико не желите да добијате овакве нотификације,</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] text-[#4f378a] underline" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>{` кликните овде.`}</span>
      </p>
    </div>
  );
}

function Frame443() {
  return (
    <div className="absolute bg-[#edeaf5] h-[355px] left-0 top-[57px] w-[1028px]">
      <Frame444 />
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute inset-[0_0_0.03%_0]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 98.3327 34.9897">
        <g id="Group 16">
          <path d={svgPaths.p30472900} fill="var(--fill-0, #FFFCFD)" id="Vector" />
          <path d={svgPaths.p2eca6c00} fill="var(--fill-0, #FFFCFD)" id="Vector_2" />
          <path d={svgPaths.p1687eb00} fill="var(--fill-0, #FFFCFD)" id="Vector_3" />
          <path d={svgPaths.p20ee7600} fill="var(--fill-0, #FFFCFD)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3c9597c0} fill="var(--fill-0, #FFFCFD)" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ZborAppLogoT21() {
  return (
    <div className="h-[35px] overflow-clip relative shrink-0 w-[98.333px]" data-name="ZborApp Logo T1">
      <Group101 />
    </div>
  );
}

function Frame446() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[15px] top-[11px] w-[1408px]">
      <ZborAppLogoT21 />
    </div>
  );
}

function Frame740() {
  return (
    <div className="absolute h-[466px] left-[6493px] top-[3681px] w-[1028px]">
      <Frame443 />
      <div className="absolute bg-[#4f378a] h-[57px] left-0 top-0 w-[1028px]" data-name="Header za mejl">
        <Frame446 />
      </div>
    </div>
  );
}

function SealCheckmarkIcon() {
  return <div className="absolute left-[2250px] size-[24px] top-[3043px]" data-name="SealCheckmarkIcon" />;
}

function Frame454() {
  return <div className="absolute h-[41px] left-0 top-0 w-[281px]" />;
}

function Frame453() {
  return (
    <div className="absolute h-[44px] left-[16px] top-[24px] w-[280px]">
      <Frame454 />
    </div>
  );
}

function Share() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Share">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Share">
          <path d={svgPaths.p150ee00} fill="var(--fill-0, #FFFCFD)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContent35() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[28px] top-0" data-name="Button content">
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#fffcfd] text-[16px] tracking-[0.5px]">Поделите</p>
    </div>
  );
}

function Frame447() {
  return (
    <div className="h-[24px] relative shrink-0 w-[110px]">
      <Share />
      <ButtonContent35 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#4f378a] content-stretch flex items-start justify-center left-0 px-[24px] py-[12px] rounded-[16px] top-[24px] w-[133px]" data-name="Button">
      <Frame447 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[96px] right-0 top-[347px] w-[133px]">
      <Button9 />
    </div>
  );
}

function Frame455() {
  return (
    <div className="absolute h-[436px] left-[18px] top-[724px] w-[326px]">
      <Frame7 />
      <div className="absolute font-['Noto_Sans:Regular',sans-serif] font-normal h-[380px] leading-[normal] left-[-2px] text-[#2a2a2a] text-[16px] top-0 w-[328px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
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
    </div>
  );
}

function Frame745() {
  return (
    <div className="bg-[#bd0000] content-stretch flex h-[22px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[103px]">
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        🎉Nov dogadjaj
      </p>
    </div>
  );
}

function Frame744() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame745 />
    </div>
  );
}

function Frame747() {
  return (
    <div className="bg-[#166244] content-stretch flex h-[22px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        🖐️ Inicijator
      </p>
    </div>
  );
}

function Frame749() {
  return (
    <div className="bg-[#2463eb] content-stretch flex h-[22px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        🖇 Zajedno sa
      </p>
    </div>
  );
}

function Group103() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48px]">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 24">
        <g id="Group 72">
          <circle cx="12" cy="12" fill="var(--fill-0, #383838)" id="Ellipse 6" r="12" />
          <circle cx="24" cy="12" fill="var(--fill-0, #4F378A)" id="Ellipse 7" r="12" />
          <circle cx="36" cy="12" fill="var(--fill-0, #2463EB)" id="Ellipse 8" r="12" />
        </g>
      </svg>
    </div>
  );
}

function Frame750() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group103 />
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#383838] text-[12px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        +12
      </p>
    </div>
  );
}

function Frame748() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame749 />
      <Frame750 />
    </div>
  );
}

function Frame746() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame747 />
      <Frame748 />
    </div>
  );
}

function Frame743() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[267px]">
      <Frame744 />
      <Frame746 />
    </div>
  );
}

function Frame742() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[280px]">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold h-[37px] leading-[52px] relative shrink-0 text-[#2a2a2a] text-[30px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Totalna blokada
      </p>
      <Frame743 />
    </div>
  );
}

function LocationPinIcon3() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="LocationPinIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LocationPinIcon">
          <path clipRule="evenodd" d={svgPaths.pd2c6a00} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame449() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[301px]">
      <LocationPinIcon3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[28px] text-[#2a2a2a] text-[16px] top-[12px] w-[275px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Парк код 6. гимназије</p>
      </div>
    </div>
  );
}

function ClockIcon3() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="ClockIcon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ClockIcon">
          <path clipRule="evenodd" d={svgPaths.p30a46280} fill="var(--fill-0, #2A2A2A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame450() {
  return (
    <div className="absolute h-[24px] left-0 top-[36px] w-[301px]">
      <ClockIcon3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[28px] text-[#2a2a2a] text-[16px] top-[12px] w-[278px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">од Четвртак, 26. Јун 2025, 18,30ч</p>
      </div>
    </div>
  );
}

function Frame448() {
  return (
    <div className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[281px]">
      <Frame449 />
      <Frame450 />
    </div>
  );
}

function Group104() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame448 />
      <div className="col-1 flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center ml-[28px] mt-[65px] relative row-1 text-[#2a2a2a] text-[16px] w-[278px]" style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">до Четвртак, 26. Јун 2025, 21,00ч</p>
      </div>
    </div>
  );
}

function Frame741() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[16px] top-[24px] w-[306px]">
      <Frame742 />
      <Group104 />
    </div>
  );
}

function CelaObjavaMobile() {
  return (
    <div className="absolute bg-[#edeaf5] h-[1184px] left-0 top-0 w-[360px]" data-name="CelaObjavaMobile">
      <Frame453 />
      <Frame455 />
      <div className="absolute h-[446px] left-[16px] top-[254px] w-[328px]" data-name="viber_image_2025-06-24_14-08-21-155 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgViberImage202506241408211552} />
      </div>
      <Frame741 />
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute contents left-0 top-0">
      <CelaObjavaMobile />
    </div>
  );
}

function CeoDogadjajMobile() {
  return (
    <div className="absolute h-[1509px] left-[5256px] top-[6296px] w-[360px]" data-name="CeoDogadjajMobile">
      <Group102 />
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute contents left-[5256px] top-[6296px]">
      <div className="absolute flex h-[42px] items-center justify-center left-[5281px] top-[6296px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[42px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 1">
                <line id="Line 2" stroke="var(--stroke-0, #BD0000)" x2="42" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[16px] left-[5288px] text-[#bd0000] text-[14px] top-[6309px]">24px</p>
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[16px] left-[5284px] text-[#bd0000] text-[10px] top-[6357px]">16px</p>
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[16px] left-[5260px] text-[#bd0000] text-[4px] top-[6369px]">16px</p>
      <div className="absolute flex h-[8px] items-center justify-center left-[5281px] top-[6361px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[8px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
                <line id="Line 3" stroke="var(--stroke-0, #BD0000)" x2="8" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[5256px] top-[6385px] w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 4" stroke="var(--stroke-0, #BD0000)" x2="14" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#bd0000] h-[8px] left-[5281px] top-[6395px] w-px" />
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[16px] left-[5288px] text-[#bd0000] text-[4px] top-[6390px]">8px</p>
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[16px] left-[5358px] text-[#bd0000] text-[4px] top-[6406px]">8px</p>
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[16px] left-[5462px] text-[#bd0000] text-[4px] top-[6406px]">4 px</p>
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[16px] left-[5283px] text-[#bd0000] text-[10px] top-[6427px]">16px</p>
      <div className="absolute flex h-[12px] items-center justify-center left-[5281px] top-[6428px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[12px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 1">
                <line id="Line 5" stroke="var(--stroke-0, #BD0000)" x2="12" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame751() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[5963px] p-[10px] rounded-[200px] top-[5283px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

function Frame752() {
  return (
    <div className="absolute bg-[#166244] content-stretch flex flex-col items-center justify-center left-[5902px] p-[10px] rounded-[200px] top-[5456px] w-[37px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">da</p>
    </div>
  );
}

export default function Frame655() {
  return (
    <div className="bg-white relative size-full">
      <Tabs />
      <Tabs1 />
      <Content />
      <div className="absolute h-0 left-[2912px] top-[4962px] w-[496px]">
        <div className="absolute inset-[-7.36px_-0.2%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 497 14.7279">
            <path d={svgPaths.p38d4d380} fill="var(--stroke-0, white)" id="Arrow 14" />
          </svg>
        </div>
      </div>
      <Home />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2250px] not-italic text-[96px] text-white top-[2886px]">Start</p>
      <Group66 />
      <Frame647 />
      <Frame648 />
      <Frame649 />
      <Frame650 />
      <Frame651 />
      <Frame652 />
      <Frame653 />
      <Frame654 />
      <Frame656 />
      <Frame657 />
      <Frame658 />
      <Dialog />
      <ModalZaRegistraciju />
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2905.5px] not-italic text-[14px] text-center text-white top-[3303px] whitespace-nowrap">
        <p className="mb-0">Promeni pismo on press</p>
        <p className="mb-0">Rotiraj opciju na long press (mobi)</p>
        <p>ili hover na desktopu</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2584.5px] not-italic text-[14px] text-center text-white top-[2659px]">Otvori izabranu opciju</p>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2878.5px] not-italic text-[14px] text-center text-white top-[3544px] whitespace-nowrap">
        <p className="mb-0">{`Prikazi tabove `}</p>
        <p>(svi zborovi i pratim)</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2927.5px] not-italic text-[14px] text-center text-white top-[3772px] whitespace-nowrap">
        <p className="mb-0">{`Prikazi autosuggect u `}</p>
        <p>select komponenti</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2861.5px] not-italic text-[14px] text-center text-white top-[4257px] whitespace-nowrap">
        <p className="mb-0">{`Prikazi mapu na modalu `}</p>
        <p>preko celog ekrana</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2861px] not-italic text-[14px] text-center text-white top-[4497px] whitespace-nowrap">
        <p className="mb-0">{`Zoom ut, ali ne dalje `}</p>
        <p>od Srbiije</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2868px] not-italic text-[14px] text-center text-white top-[4742px]">Zoom in</p>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2882.5px] not-italic text-[14px] text-center text-white top-[4985px] whitespace-nowrap">
        <p className="mb-0">{`Otvori stranicu `}</p>
        <p>zbora</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2889px] not-italic text-[14px] text-center text-white top-[5217px] whitespace-nowrap">
        <p className="mb-0">{`Prikazi ostatak `}</p>
        <p className="mb-0">teksta, ali dodaj</p>
        <p>“prikazi manje”</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2885px] not-italic text-[14px] text-center text-white top-[5457px] whitespace-nowrap">
        <p className="mb-0">{`Omoguci deljenje `}</p>
        <p>linka</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2885.5px] not-italic text-[14px] text-center text-white top-[5693px] whitespace-nowrap">
        <p className="mb-0">{`Prikaze izabranu `}</p>
        <p>stranicu</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2909px] not-italic text-[14px] text-center text-white top-[5930px]">Pokreni pozitivan flow</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2711.5px] not-italic text-[14px] text-center text-white top-[6164px]">Pokreni negativan flow</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2351px] not-italic text-[14px] text-center text-white top-[6173px]">Prikazi mapu na zasebnoj stranici</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[2095px] not-italic text-[14px] text-center text-white top-[6173px]">Prikazi kalendar u modalu</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[1803px] not-italic text-[14px] text-center text-white top-[5652px]">Prikazi stranicu o nama</p>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[1803.5px] not-italic text-[14px] text-center text-white top-[5241px] whitespace-nowrap">
        <p className="mb-0">Prikazi stranicu o politici</p>
        <p>privatnosti</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[1806.5px] not-italic text-[14px] text-center text-white top-[5019px] whitespace-nowrap">
        <p className="mb-0">{`Otvori modal i dozvoli `}</p>
        <p>podesavnja</p>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[1803.5px] not-italic text-[14px] text-center text-white top-[5468px] whitespace-nowrap">
        <p className="mb-0">Prikazi stranicu o sledecoj</p>
        <p>verziji / newsletter (u izradi)</p>
      </div>
      <Pitanje />
      <Pitanje1 />
      <Pitanje2 />
      <Pitanje3 />
      <Pitanje4 />
      <Pitanje5 />
      <Pitanje6 />
      <Pitanje7 />
      <Pitanje8 />
      <Pitanje9 />
      <Pitanje10 />
      <Pitanje11 />
      <Pitanje12 />
      <Pitanje13 />
      <Pitanje14 />
      <Pitanje15 />
      <Pitanje16 />
      <Pitanje17 />
      <Pitanje18 />
      <Pitanje19 />
      <Pitanje20 />
      <Pitanje21 />
      <Pitanje22 />
      <Pitanje23 />
      <Pitanje24 />
      <Pitanje25 />
      <Pitanje26 />
      <Pitanje27 />
      <Pitanje28 />
      <Pitanje29 />
      <Pitanje30 />
      <Pitanje31 />
      <Pitanje32 />
      <Pitanje33 />
      <Pitanje34 />
      <Pitanje35 />
      <div className="absolute flex h-0 items-center justify-center left-[2887px] top-[3434px] w-[121px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[121px]">
            <div className="absolute inset-[-7.36px_-0.83%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 14.7279">
                <path d={svgPaths.p198f3100} fill="var(--stroke-0, white)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Tooltip1 />
      <div className="absolute h-0 left-[3296px] top-[4197px] w-[30px]">
        <div className="absolute inset-[-7.36px_-3.33%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 14.7279">
            <path d={svgPaths.p1d38e000} fill="var(--stroke-0, white)" id="Arrow 6" />
          </svg>
        </div>
      </div>
      <Component />
      <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[2836px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[6269px] w-[332px]" data-name="ModalOKOrisnickomIskustvu/Шта сте тражили?">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container3 />
          <Divider3 />
        </div>
        <Frame65 />
        <Footer4 />
      </div>
      <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[2828px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[6832px] w-[332px]" data-name="ModalOKOrisnickomIskustvu/Опишите шта подразумевате под ”друго”">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container4 />
          <Divider5 />
        </div>
        <Frame74 />
        <Footer5 />
      </div>
      <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[2836px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[5957px] w-[332px]" data-name="ModalOKOrisnickomIskustvu/Да">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container5 />
          <Divider7 />
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none rotate-180 w-full">
            <Frame75 />
          </div>
        </div>
        <Section2 />
      </div>
      <div className="absolute flex h-[46px] items-center justify-center left-[2994px] top-[6209px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[46px]">
            <div className="absolute inset-[-7.36px_-2.17%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 14.7279">
                <path d={svgPaths.p34e27e00} fill="var(--stroke-0, white)" id="Arrow 15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[46px] items-center justify-center left-[2615px] top-[6509px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[46px]">
            <div className="absolute inset-[-7.36px_-2.17%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 14.7279">
                <path d={svgPaths.p34e27e00} fill="var(--stroke-0, white)" id="Arrow 15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[46px] items-center justify-center left-[3002px] top-[6773px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[46px]">
            <div className="absolute inset-[-7.36px_-2.17%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 14.7279">
                <path d={svgPaths.p34e27e00} fill="var(--stroke-0, white)" id="Arrow 15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[2447px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[6558px] w-[332px]" data-name="ModalOKOrisnickomIskustvu/Шта сте тражили?">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container6 />
          <Divider8 />
        </div>
        <Frame77 />
        <Footer6 />
      </div>
      <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[2447px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[7596px] w-[332px]" data-name="ModalOKOrisnickomIskustvu/Опишите шта подразумевате под ”друго”">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container7 />
          <Divider10 />
        </div>
        <Frame85 />
        <Footer7 />
      </div>
      <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[2447px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[8042px] w-[332px]" data-name="ModalOKOrisnickomIskustvu/Опишите шта подразумевате под ”друго”">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container8 />
          <Divider12 />
        </div>
        <Frame86 />
        <Footer8 />
      </div>
      <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[2447px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[7049px] w-[332px]" data-name="ModalOKOrisnickomIskustvu/Зашто нисте успели да  пронађете то што сте желели">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container9 />
          <Divider14 />
        </div>
        <Frame87 />
        <Footer9 />
      </div>
      <div className="absolute bg-[#fffcfd] content-stretch flex flex-col items-start left-[2447px] overflow-clip py-[24px] rounded-[8px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.12),0px_4px_8px_0px_rgba(0,0,0,0.16),0px_12px_24px_0px_rgba(0,0,0,0.16)] top-[6255px] w-[332px]" data-name="ModalOKOrisnickomIskustvu/Не">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="_Header">
          <Container10 />
          <Divider16 />
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="-scale-y-100 flex-none rotate-180 w-full">
            <Frame95 />
          </div>
        </div>
        <Section7 />
      </div>
      <div className="absolute flex h-[46px] items-center justify-center left-[2625px] top-[7001px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[46px]">
            <div className="absolute inset-[-7.36px_-2.17%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 14.7279">
                <path d={svgPaths.p34e27e00} fill="var(--stroke-0, white)" id="Arrow 15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[46px] items-center justify-center left-[2607px] top-[7547px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[46px]">
            <div className="absolute inset-[-7.36px_-2.17%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 14.7279">
                <path d={svgPaths.p34e27e00} fill="var(--stroke-0, white)" id="Arrow 15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[46px] items-center justify-center left-[2617px] top-[7994px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[46px]">
            <div className="absolute inset-[-7.36px_-2.17%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 14.7279">
                <path d={svgPaths.p34e27e00} fill="var(--stroke-0, white)" id="Arrow 15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[107px] items-center justify-center left-[2607px] top-[8411px] w-[188px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[29.65deg]">
          <div className="h-0 relative w-[216.317px]">
            <div className="absolute inset-[-7.36px_-0.46%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217.317 14.7279">
                <path d={svgPaths.p370d9380} fill="var(--stroke-0, white)" id="Arrow 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Alert1 />
      <div className="absolute flex h-[1263px] items-center justify-center left-[2979px] top-[7255px] w-[4px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.82deg]">
          <div className="h-0 relative w-[1263.006px]">
            <div className="absolute inset-[-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1264.01 14.7279">
                <path d={svgPaths.p2b6b8600} fill="var(--stroke-0, white)" id="Arrow 22" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Profil />
      <Onama />
      <div className="absolute flex h-0 items-center justify-center left-[1312px] top-[5667px] w-[393px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[393px]">
            <div className="absolute inset-[-7.36px_-0.25%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 14.7279">
                <path d={svgPaths.p18d63c00} fill="var(--stroke-0, white)" id="Arrow 23" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[1803px] not-italic text-[48px] text-center text-white top-[5398px]">🚧</p>
      <PolitikaPrivatnosti />
      <Kolacici />
      <UsloviKoriscenja />
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[1917px] not-italic text-[14px] text-center text-white top-[4207px] whitespace-nowrap">
        <p className="mb-0">{`Otvori stranicu o uslovima `}</p>
        <p>koriscenja</p>
      </div>
      <div className="absolute flex h-[126px] items-center justify-center left-[1917px] top-[4071px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[126px]">
            <div className="absolute inset-[-7.36px_-0.79%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 14.7279">
                <path d={svgPaths.p394c5400} fill="var(--stroke-0, white)" id="Arrow 31" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Pitanje36 />
      <Pitanje37 />
      <div className="absolute h-0 left-[2947px] top-[3620px] w-[553px]">
        <div className="absolute inset-[-7.36px_-0.18%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 554 14.7279">
            <path d={svgPaths.p19b3800} fill="var(--stroke-0, white)" id="Arrow 33" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[3707px] top-[3629px] w-[41px]">
        <div className="absolute inset-[-7.36px_-2.44%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 14.7279">
            <path d={svgPaths.p899ff80} fill="var(--stroke-0, white)" id="Arrow 34" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[4073px] top-[3629px] w-[41px]">
        <div className="absolute inset-[-7.36px_-2.44%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 14.7279">
            <path d={svgPaths.p899ff80} fill="var(--stroke-0, white)" id="Arrow 34" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[67px] items-center justify-center left-[3609px] top-[3503px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[67px]">
            <div className="absolute inset-[-7.36px_-1.49%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 14.7279">
                <path d={svgPaths.pce2dc00} fill="var(--stroke-0, white)" id="Arrow 47" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[181px] items-center justify-center left-[3728px] top-[3209px] w-[235px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-37.6deg]">
          <div className="h-0 relative w-[296.624px]">
            <div className="absolute inset-[-7.36px_-0.34%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 297.624 14.7279">
                <path d={svgPaths.p1658570} fill="var(--stroke-0, white)" id="Arrow 49" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <AdminKreirajDogadjaj />
      <SuperAdmin />
      <AdminObjave />
      <Frame700 />
      <Frame701 />
      <Frame702 />
      <div className="absolute flex h-[133px] items-center justify-center left-[3963px] top-[3468px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[133px]">
            <div className="absolute inset-[-7.36px_-0.75%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 14.7279">
                <path d={svgPaths.p1a0b200} fill="var(--stroke-0, white)" id="Arrow 36" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[133px] items-center justify-center left-[3609px] top-[3221px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[133px]">
            <div className="absolute inset-[-7.36px_-0.75%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 14.7279">
                <path d={svgPaths.p1a0b200} fill="var(--stroke-0, white)" id="Arrow 48" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[4001px] not-italic text-[14px] text-white top-[3415px]">Prikazi stranicu zbora sa funckijama za uredjivanje</p>
      <div className="absolute h-[52.5px] left-[4379px] top-[3424px] w-[388px]">
        <div className="absolute inset-[-1.9%_-1.9%_-1.9%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395.364 54.5">
            <path d={svgPaths.p1bce1c00} fill="var(--stroke-0, white)" id="Arrow 37" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[4962px] top-[3648px] w-[56px]">
        <div className="absolute inset-[-7.36px_-1.79%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 14.7279">
            <path d={svgPaths.pc048660} fill="var(--stroke-0, white)" id="Arrow 38" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[2px] items-center justify-center left-[5840px] top-[3648px] w-[46px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[2.49deg]">
          <div className="h-0 relative w-[46.043px]">
            <div className="absolute inset-[-7.36px_-2.17%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.0435 14.7279">
                <path d={svgPaths.p39b86800} fill="var(--stroke-0, white)" id="Arrow 40" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Component1 />
      <Frame707 />
      <Frame708 />
      <Frame709 />
      <Frame710 />
      <Frame711 />
      <Frame712 />
      <Frame713 />
      <div className="absolute h-0 left-[5415px] top-[3648px] w-[28px]">
        <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
            <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 39" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[25.214px] items-center justify-center left-[6024px] top-[3712px] w-[12.176px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[64.22deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 41" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25.214px] items-center justify-center left-[6039px] top-[4047px] w-[12.176px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[64.22deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 41" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25.214px] items-center justify-center left-[6064px] top-[4369px] w-[12.176px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[64.22deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 41" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25.214px] items-center justify-center left-[5955px] top-[5240px] w-[12.176px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[64.22deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 41" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[26px] items-center justify-center left-[5929px] top-[5411px] w-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[118.3deg]">
          <div className="h-0 relative w-[29.53px]">
            <div className="absolute inset-[-7.36px_-3.39%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5296 14.7279">
                <path d={svgPaths.p16375000} fill="var(--stroke-0, white)" id="Arrow 93" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[5957px] top-[5150px] w-[7px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-73.74deg]">
          <div className="h-0 relative w-[25px]">
            <div className="absolute inset-[-7.36px_-4%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 14.7279">
                <path d={svgPaths.p1ad98100} fill="var(--stroke-0, white)" id="Arrow 89" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25.214px] items-center justify-center left-[6671px] top-[5025px] w-[12.176px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[64.22deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 41" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25.214px] items-center justify-center left-[6965px] top-[5908px] w-[12.176px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[64.22deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 41" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25.214px] items-center justify-center left-[7059px] top-[5041px] w-[12.176px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[64.22deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 41" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[175px] items-center justify-center left-[5933px] top-[3705px] w-[2px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.35deg]">
          <div className="h-0 relative w-[175.011px]">
            <div className="absolute inset-[-7.36px_-0.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176.011 14.7279">
                <path d={svgPaths.p54f91f0} fill="var(--stroke-0, white)" id="Arrow 42" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[175px] items-center justify-center left-[5935px] top-[4022px] w-[2px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.35deg]">
          <div className="h-0 relative w-[175.011px]">
            <div className="absolute inset-[-7.36px_-0.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176.011 14.7279">
                <path d={svgPaths.p54f91f0} fill="var(--stroke-0, white)" id="Arrow 42" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80.277px] items-center justify-center left-[4959.62px] top-[3675px] w-[157.274px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.35deg]">
          <div className="h-[156.387px] relative w-[78.495px]">
            <div className="absolute inset-[-0.64%_-7.21%_-0.64%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.1656 158.387">
                <path d={svgPaths.p3f08500} fill="var(--stroke-0, white)" id="Arrow 43" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[6009px] not-italic text-[14px] text-white top-[3794px] whitespace-nowrap">
        <p className="mb-0">{`Potvrdi registrovano pracenje `}</p>
        <p>bez vlidacije mejl adrese</p>
      </div>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[6254px] not-italic text-[14px] text-white top-[3705px] w-[210px] whitespace-pre-wrap">
        <p className="mb-0">Posallji mejl zboru da ima novog pratioca</p>
        <p>sa mogucnosti da se ne dobijaju takve notifikacije vise</p>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[6024px] not-italic text-[14px] text-white top-[4129px]">Omoguci deljenje stranice</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.25] left-[6064px] not-italic text-[14px] text-white top-[4490px]">Prikazi toast za potvrdu i obogati stranicu sa tagom “1 zbor se pridruzuje”</p>
      <Frame714 />
      <Frame715 />
      <Frame716 />
      <Frame717 />
      <Frame718 />
      <Frame719 />
      <Frame720 />
      <Component2 />
      <Alert2 />
      <Alert3 />
      <Alert4 />
      <div className="absolute flex h-[97px] items-center justify-center left-[4180px] top-[3074px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[97px]">
            <div className="absolute inset-[-7.36px_-1.03%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 14.7279">
                <path d={svgPaths.p1db74880} fill="var(--stroke-0, white)" id="Arrow 50" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[97px] items-center justify-center left-[4180px] top-[2852px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[97px]">
            <div className="absolute inset-[-7.36px_-1.03%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 14.7279">
                <path d={svgPaths.p1db74880} fill="var(--stroke-0, white)" id="Arrow 50" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Registracija />
      <div className="absolute h-0 left-[4976px] top-[4583px] w-[36px]">
        <div className="absolute inset-[-7.36px_-2.78%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 14.7279">
            <path d={svgPaths.p39d74700} fill="var(--stroke-0, white)" id="Arrow 52" />
          </svg>
        </div>
      </div>
      <Frame578 />
      <Frame579 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[4882px] text-[16px] text-white top-[1932px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Moze ovako, pa da nemamo zaseban tab za odobri zborove?
      </p>
      <div className="absolute flex h-[83px] items-center justify-center left-[5012px] top-[1971px] w-[97px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[139.45deg]">
          <div className="h-0 relative w-[127.664px]">
            <div className="absolute inset-[-7.36px_-0.78%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.664 14.7279">
                <path d={svgPaths.p29b01200} fill="var(--stroke-0, white)" id="Arrow 70" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[7011px] min-w-[328px] py-[24px] rounded-[8px] top-[5144px]" data-name="Dialog">
        <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.06),0px_10px_20px_0px_rgba(0,0,0,0.08)]" />
        <div className="relative shrink-0 w-full" data-name="_Header">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center pb-[8px] pl-[16px] pr-[4px] relative w-full">
              <Content14 />
              <div className="absolute content-stretch flex items-start justify-center p-[12px] right-[7px] rounded-[4px] top-[-16px]" data-name="IconButton">
                <ButtonContent26 />
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="_Content">
          <div className="content-stretch flex flex-col items-start pb-[16px] pt-[8px] px-[16px] relative w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
              <div className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#333740] text-[0px] text-[16px] tracking-[0.44px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                <p className="mb-0">
                  <span className="leading-[24px]">{`Из безбедносних разлога бићеш аутоматски одјављен/а за `}</span>
                  <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] tracking-[0.44px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                    02:00
                  </span>
                  <span className="leading-[24px]">
                    {` минута.`}
                    <br aria-hidden="true" />
                    <br aria-hidden="true" />
                  </span>
                </p>
                <p className="leading-[24px]">Желиш ли да останеш пријављен/а?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="_Footer">
          <Content15 />
        </div>
      </div>
      <div className="absolute h-0 left-[3836px] top-[5542px] w-[61px]">
        <div className="absolute inset-[-7.36px_-1.64%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 14.7279">
            <path d={svgPaths.p23d9e300} fill="var(--stroke-0, white)" id="Arrow 74" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[76px] items-center justify-center left-[2359px] top-[2511px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[76px]">
            <div className="absolute inset-[-7.36px_-1.32%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 14.7279">
                <path d={svgPaths.p2f04f00} fill="var(--stroke-0, white)" id="Arrow 75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[76px] items-center justify-center left-[2359px] top-[2336px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[76px]">
            <div className="absolute inset-[-7.36px_-1.32%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 14.7279">
                <path d={svgPaths.p2f04f00} fill="var(--stroke-0, white)" id="Arrow 75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame732 />
      <Registracija1 />
      <Registracija2 />
      <div className="absolute h-0 left-[6756px] top-[4989px] w-[48px]">
        <div className="absolute inset-[-7.36px_-2.08%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 14.7279">
            <path d={svgPaths.p1d331200} fill="var(--stroke-0, white)" id="Arrow 77" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[697.001px] items-center justify-center left-[6930px] top-[5038px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[697.001px]">
            <div className="absolute inset-[-7.36px_-0.14%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 698.001 14.7279">
                <path d={svgPaths.pba4180} fill="var(--stroke-0, white)" id="Arrow 78" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[7249px] top-[6278px] w-[38px]">
        <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
            <path d={svgPaths.p26b712c0} fill="var(--stroke-0, white)" id="Arrow 80" />
          </svg>
        </div>
      </div>
      <Frame737 />
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[24px] left-[7678px] text-[16px] text-white top-[6025px] tracking-[0.44px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="mb-0">Први пут и никад више</p>
        <p>долази мејл кориснику</p>
      </div>
      <div className="absolute flex h-[98.273px] items-center justify-center left-[7753px] top-[6078.39px] w-[103.499px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[40.24deg]">
          <div className="h-[49.336px] relative w-[93.833px]">
            <div className="absolute inset-[-3.54%_-1.07%_-2.86%_-0.81%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.5964 52.4931">
                <path d={svgPaths.p13acc870} fill="var(--stroke-0, white)" id="Arrow 82" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[350px] items-center justify-center left-[8408px] top-[6481px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[350px]">
            <div className="absolute inset-[-7.36px_-0.29%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 14.7279">
                <path d={svgPaths.p1ad49c80} fill="var(--stroke-0, white)" id="Arrow 83" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame738 />
      <Frame739 />
      <div className="absolute flex h-[25.214px] items-center justify-center left-[8422px] top-[6910px] w-[12.176px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[64.22deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute inset-[-7.36px_-3.57%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.7279">
                <path d={svgPaths.p2619fc00} fill="var(--stroke-0, white)" id="Arrow 41" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[130.5px] left-[6233px] top-[3681.5px] w-[219px]">
        <div className="absolute inset-[-5.64%_-0.46%_0_-0.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 137.864">
            <path d={svgPaths.p59e40} fill="var(--stroke-0, white)" id="Arrow 85" />
          </svg>
        </div>
      </div>
      <Frame740 />
      <SealCheckmarkIcon />
      <CeoDogadjajMobile />
      <Group105 />
      <div className="absolute flex h-[766px] items-center justify-center left-[5554px] top-[5512px] w-[348px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[114.43deg]">
          <div className="h-0 relative w-[841.344px]">
            <div className="absolute inset-[-7.36px_-0.12%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 842.344 14.7279">
                <path d={svgPaths.pa36bb00} fill="var(--stroke-0, white)" id="Arrow 86" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame751 />
      <Frame752 />
      <div className="absolute h-0 left-[6015px] top-[5120px] w-[68px]">
        <div className="absolute inset-[-7.36px_-1.47%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 14.7279">
            <path d={svgPaths.p332ef4c0} fill="var(--stroke-0, white)" id="Arrow 90" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[43px] items-center justify-center left-[5955px] top-[4369px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[43px]">
            <div className="absolute inset-[-7.36px_-2.33%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 14.7279">
                <path d={svgPaths.p349b9b00} fill="var(--stroke-0, white)" id="Arrow 91" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[5842px] top-[4455px] w-[79px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[79px]">
            <div className="absolute inset-[-7.36px_-1.27%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 14.7279">
                <path d={svgPaths.pf3ba800} fill="var(--stroke-0, white)" id="Arrow 92" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[6841px] top-[4989px] w-[16px]">
        <div className="absolute inset-[-7.36px_-6.25%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.7279">
            <path d={svgPaths.p1e490ac0} fill="var(--stroke-0, white)" id="Arrow 94" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[6461px] top-[4981px] w-[66px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 1">
            <line id="Line 6" stroke="var(--stroke-0, white)" x2="66" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[6063px] top-[5202px] w-[38px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[38px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 1">
                <line id="Line 7" stroke="var(--stroke-0, white)" x2="38" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}