import React, { useState } from 'react';
import svgPaths from "./svg-d5yeplk2p4";

// Interactive Input Component replacing static Select
function InteractiveInput({ value, onChange, placeholder, type = "text", icon }: { value: string, onChange: (v: string) => void, placeholder: string, type?: string, icon?: React.ReactNode }) {
  return (
    <div className="bg-white h-[40px] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#4f378a] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[16px] relative size-full">
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#575168] text-[16px] bg-transparent outline-none border-none p-0 m-0"
            style={{ fontVariationSettings: "\'CTGR\' 100, \'wdth\' 100" }}
          />
          {icon && (
             <div className="h-[11.5px] relative shrink-0 w-[19.5px]">
               {icon}
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: React.ReactNode, checked: boolean, onChange: (c: boolean) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full cursor-pointer" onClick={() => onChange(!checked)}>
      <div className="content-stretch flex items-center pt-[4px] relative shrink-0">
        <div className={`bg-[#fafafa] relative rounded-[4px] shrink-0 size-[24px] flex items-center justify-center ${checked ? 'bg-[#4f378a]' : ''}`} data-name=".Checkbox Icon">
          <div aria-hidden="true" className="absolute border-2 border-[#4f378a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          {checked && (
             <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
             </svg>
          )}
        </div>
      </div>
      <div className="flex-[1_0_0] font-['Noto_Sans:Regular',sans-serif] font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#322f35] text-[0px] text-[14px] tracking-[0.44px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        {label}
      </div>
    </div>
  );
}

function UploadField() {
  return (
    <div className="absolute bg-[#edeaf5] border border-[#4f378a] border-dashed h-[285px] left-0 rounded-[8px] top-0 w-[296px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#e6e1f0] transition-colors" data-name="UploadField">
       <div className="flex flex-col items-center gap-4 p-4">
          <div className="size-[40px] text-[#575168]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <path clipRule="evenodd" d={svgPaths.p19d24080} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div className="text-center text-[#383838] text-[16px]">
             <p className="mb-2">Изаберите или превуците слику</p>
             <p className="text-[12px] opacity-70">PNG, JPG и WebP. Максимално 3 МБ.</p>
          </div>
          <div className="bg-white rounded-[100px] border-2 border-[#4f378a] px-6 py-2">
             <span className="text-[#4f378a] font-bold text-[16px]">Изаберите слику</span>
          </div>
       </div>
    </div>
  );
}

export default function ModalZaRegistraciju({ onClose, onSubmit }: { onClose?: () => void, onSubmit?: (data: any) => void }) {
  const [formData, setFormData] = useState({
    zborName: '',
    location: '',
    description: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    updatesAccepted: false
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[24px] relative rounded-[8px] size-full overflow-y-auto max-h-[90vh]" data-name="Modal za registraciju">
      <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_4px_8px_0px_rgba(0,0,0,0.06),0px_10px_20px_0px_rgba(0,0,0,0.08)]" />
      
      {/* Header */}
      <div className="relative shrink-0 w-full mb-4" data-name="_Header">
        <div className="flex flex-row items-center justify-between px-6 pb-4 border-b border-[rgba(87,81,104,0.2)]">
            <div className="text-[20px] font-medium text-[#383838]">
                Региструјте нови збор <span className="text-[16px] text-[#383838]/70">(користите ћирилицу)</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
               <svg className="w-6 h-6 text-[#410464]" fill="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p25276700} fill="currentColor" />
               </svg>
            </button>
        </div>
      </div>

      <div className="w-full px-6 pb-6 space-y-4">
         {/* Name */}
         <div className="flex flex-col gap-2">
            <label className="text-[16px] text-[#383838]">Име збора*</label>
            <InteractiveInput 
                value={formData.zborName} 
                onChange={v => handleChange('zborName', v)} 
                placeholder="Нпр. Збор Коњарник" 
            />
         </div>

         {/* Location */}
         <div className="flex flex-col gap-2">
            <label className="text-[16px] text-[#383838]">Локација*</label>
            <InteractiveInput 
                value={formData.location} 
                onChange={v => handleChange('location', v)} 
                placeholder="Нпр. Врачар, Београд" 
            />
         </div>

         {/* Image Upload and Description */}
         <div className="flex flex-col gap-4">
             <label className="text-[16px] text-[#383838]">Додајте лого</label>
             <div className="relative h-[285px] w-full">
                <UploadField />
             </div>
             
             <div className="flex flex-col gap-2 mt-2">
                <label className="text-[16px] text-[#383838]">Кратак опис збора (макс 5000)*</label>
                <div className="bg-white h-[120px] relative rounded-[4px] shrink-0 w-full border border-[#4f378a]">
                    <textarea 
                        className="w-full h-full p-3 resize-none outline-none text-[16px] text-[#575168]"
                        placeholder="Унесите опис"
                        value={formData.description}
                        onChange={e => handleChange('description', e.target.value)}
                    />
                </div>
             </div>
         </div>

         {/* Email */}
         <div className="flex flex-col gap-2">
            <label className="text-[16px] text-[#383838]">Званична мејл-адреса збора*</label>
            <InteractiveInput 
                value={formData.email} 
                onChange={v => handleChange('email', v)} 
                placeholder="primer@domain.com" 
            />
         </div>

         {/* Password */}
         <div className="flex flex-col gap-2">
            <label className="text-[16px] text-[#383838]">Лозинка *</label>
            <InteractiveInput 
                value={formData.password} 
                onChange={v => handleChange('password', v)} 
                placeholder="Унесите лозинку" 
                type="password"
            />
         </div>

         {/* Confirm Password */}
         <div className="flex flex-col gap-2">
            <label className="text-[16px] text-[#383838]">Потврдите лозинку *</label>
            <InteractiveInput 
                value={formData.confirmPassword} 
                onChange={v => handleChange('confirmPassword', v)} 
                placeholder="Потврдите лозинку" 
                type="password"
            />
         </div>

         {/* Terms */}
         <div className="space-y-4 pt-4">
             <Checkbox 
                checked={formData.termsAccepted} 
                onChange={c => handleChange('termsAccepted', c)}
                label={<span className="leading-[24px]">Наставком регистрације прихватам <span className="text-[#2463eb] underline">Политику приватности</span></span>}
             />
             <Checkbox 
                checked={formData.updatesAccepted} 
                onChange={c => handleChange('updatesAccepted', c)}
                label={<span className="leading-[24px]">Нас��авком регистрације прихватам да добијам обавештења о унапређењу апликације</span>}
             />
             
             <div className="bg-[#e3f0ff] border border-[#093080] rounded-[4px] p-4 flex gap-4">
                 <div className="shrink-0 pt-1">
                     <svg className="size-6 text-[#093080]" fill="none" viewBox="0 0 17.5 17.5">
                         <path d={svgPaths.p13b1ee00} fill="currentColor" />
                     </svg>
                 </div>
                 <div className="flex-1">
                     <p className="font-medium text-[#22252b] text-[20px] mb-2">Важна информација</p>
                     <p className="text-[#22252b] text-[16px] leading-[24px]">
                        После регистрације добићете мејл за потврду налога. Потврду је потребно обавити у року од 30 дана, иначе се регистрација неће завршити.
                     </p>
                 </div>
             </div>
         </div>

         <div className="pt-4">
             <button onClick={handleSubmit} className="w-full bg-[#4f378a] text-white font-bold text-[16px] py-3 rounded-[4px] shadow-lg hover:opacity-90 transition-opacity">
                Потврдите регистрацију
             </button>
         </div>
      </div>
    </div>
  );
}