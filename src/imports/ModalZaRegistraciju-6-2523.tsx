import svgPaths from "./svg-rk9pzkgpka";

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

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[252px]" data-name="Content">
      <Heading />
    </div>
  );
}

function ButtonContent() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0 w-[297px]">
      <Content />
      <div className="content-stretch flex items-start justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="IconButton">
        <ButtonContent />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame6 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Header">
      <div aria-hidden="true" className="absolute border-[rgba(87,81,104,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[8px] pl-[16px] pr-[4px] relative w-full">
          <Frame5 />
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

function Frame8() {
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Select1 />
    </div>
  );
}

function SelectField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start pt-[16px] relative shrink-0 w-full" data-name="Select Field">
      <Frame9 />
    </div>
  );
}

function Frame12() {
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

function Frame2() {
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

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-between left-0 pb-[24px] pt-[8px] top-0 w-[240px]">
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[133px] relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button content">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#4f378a] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100" }}>
        Изаберите слику
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-end left-[21px] top-[51px] w-[240px]">
      <Frame7 />
      <div className="bg-white relative rounded-[100px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
            <ButtonContent1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadField() {
  return (
    <div className="absolute bg-[#edeaf5] border border-[#4f378a] border-dashed h-[285px] left-0 rounded-[8px] top-0 w-[296px]" data-name="UploadField">
      <Frame13 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <UploadField />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[285px] items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame3 />
    </div>
  );
}

function Frame15() {
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

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[240px] items-start py-[8px] relative shrink-0 w-full">
      <Frame15 />
      <Input />
    </div>
  );
}

function Frame17() {
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

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Select2 />
    </div>
  );
}

function SelectField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[296px]" data-name="Select Field">
      <Frame16 />
    </div>
  );
}

function Frame19() {
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Select3 />
    </div>
  );
}

function SelectField3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[296px]" data-name="Select Field">
      <Frame18 />
    </div>
  );
}

function Frame21() {
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

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Select4 />
    </div>
  );
}

function SelectField4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-[296px]" data-name="Select Field">
      <Frame20 />
    </div>
  );
}

function Frame22() {
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
      <Frame22 />
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

function Frame23() {
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
      <Frame23 />
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

function Content1() {
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
        <Content1 />
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full">
      <CheckboxGroup />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-full">
      <Frame11 />
      <Frame14 />
      <SelectField2 />
      <SelectField3 />
      <SelectField4 />
      <Frame4 />
    </div>
  );
}

function ButtonContent2() {
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
          <Frame10 />
          <div className="bg-[#4f378a] relative rounded-[4px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex items-start justify-center px-[24px] py-[12px] relative w-full">
                <ButtonContent2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ModalZaRegistraciju() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[24px] relative rounded-[8px] size-full" data-name="Modal za registraciju">
      <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.06),0px_10px_20px_0px_rgba(0,0,0,0.08)]" />
      <Header />
      <SelectList />
    </div>
  );
}