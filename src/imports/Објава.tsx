import { useState } from 'react';
import svgPaths from "./svg-0j2z6ut5yi";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";

// Interfaces
interface ZborData {
  id: string;
  name: string;
  location: string;
  avatar: string;
  description?: string;
  distance?: number;
}

interface PostData {
  id: string;
  type: 'objava' | 'dogadjaj' | 'protestna_setnja';
  title: string;
  body?: string;
  image?: string;
  timestamp: string;
  zbor: { name: string; avatar: string; location: string };
  eventInfo?: {
    location: string;
    startTime: string;
    endTime?: string;
  };
}

interface Props {
  zbor: ZborData;
  posts: PostData[];
  onBack: () => void;
  isFollowed: boolean;
  onToggleFollow: (id: string) => void;
}

function MenuHamburgerIcon() {
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

function ZborAppLogoT() {
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

function Frame26() {
  return (
    <div className="bg-[#4f378a] content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0 w-full">
      <div className="bg-[#4f378a] h-[57px] relative shrink-0 w-full" data-name="TopoNavBar">
        <div aria-hidden="true" className="absolute border border-[rgba(74,68,88,0.2)] border-solid inset-0 pointer-events-none" />
        <MenuHamburgerIcon />
        <ZborAppLogoT />
      </div>
    </div>
  );
}

function Frame({ onBack }: { onBack: () => void }) {
  return (
    <button onClick={onBack} className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0 w-[105px]">
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

function Frame28({ onBack }: { onBack: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="tilbake">
        <Frame onBack={onBack} />
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

function Frame16({ zbor }: { zbor: ZborData }) {
  return (
    <div className="content-stretch flex h-[62px] items-center pr-[9px] relative shrink-0">
      <div className="h-[64px] mr-[16px] relative shrink-0 w-[64px] rounded-full overflow-hidden" data-name="Image (13) 1">
        <ImageWithFallback src={zbor.avatar} alt={zbor.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" />
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="font-['Roboto:Regular',sans-serif] text-[#322f35] text-[24px] tracking-[-0.25px] whitespace-nowrap">{zbor.name}</p>
        <p className="text-sm text-[#322f35]/70">{zbor.location}</p>
      </div>
    </div>
  );
}

function Frame30({ isFollowed, onToggle }: { isFollowed: boolean, onToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-row gap-[16px] items-center w-full px-4 mb-4">
      <button 
        onClick={onToggle}
        className={`${isFollowed ? 'bg-white border border-[#4f378a] text-[#4f378a]' : 'bg-[#4f378a] text-[#fffcfd]'} flex-1 content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px] transition-colors`}
      >
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] tracking-[0.09px]">
          {isFollowed ? 'Пратим' : 'Прати'}
        </p>
      </button>
      <button className="bg-[#fffcfd] border border-[#4f378a] flex-1 content-stretch flex items-center justify-center min-h-[48px] px-[16px] relative rounded-[4px]">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4f378a] text-[18px] tracking-[0.09px]">
          Подели страницу
        </p>
      </button>
    </div>
  );
}

function TabGroup({ activeTab, onTabChange }: { activeTab: string, onTabChange: (t: string) => void }) {
  return (
    <div className="border-[#dadbdd] border-b border-solid h-[48px] w-full flex mb-4" data-name="TabGroup">
      <button onClick={() => onTabChange('objave')} className="flex-1 content-stretch flex items-center justify-center px-[16px] py-[12px] relative" data-name="Tab">
        {activeTab === 'objave' && <div aria-hidden="true" className="absolute border-[#410464] border-b-3 border-solid inset-0 pointer-events-none" />}
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]">
          Објаве
        </p>
      </button>
      <button onClick={() => onTabChange('dogadjaji')} className="flex-1 content-stretch flex items-center justify-center px-[16px] py-[12px] relative" data-name="Tab">
        {activeTab === 'dogadjaji' && <div aria-hidden="true" className="absolute border-[#410464] border-b-3 border-solid inset-0 pointer-events-none" />}
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#410464] text-[16px] tracking-[0.44px]">
          Догађаји
        </p>
      </button>
    </div>
  );
}

function PostCard({ post }: { post: PostData }) {
  return (
    <div className="bg-[#edeaf5] rounded-[8px] p-4 mb-4 flex flex-col gap-3 shadow-sm mx-4">
      {post.image && (
        <div className="h-[160px] w-full rounded-[4px] overflow-hidden">
          <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <p className="font-['Noto_Sans:Bold',sans-serif] font-bold text-[#2a2a2a] text-[18px]">
          {post.title}
        </p>
        <p className="text-sm text-[#2a2a2a]/70 line-clamp-3">
          {post.body || post.eventInfo?.location}
        </p>
        <span className="text-xs text-[#2a2a2a]/50 mt-1">{post.timestamp}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#4f378a] w-full p-8 text-white mt-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
           <h3 className="font-bold text-lg">О апликацији</h3>
           <p className="text-sm opacity-80">О нама</p>
           <p className="text-sm opacity-80">Следећа верзија (Бета)</p>
        </div>
        <div className="flex flex-col gap-2">
           <h3 className="font-bold text-lg">Правила и заштита података</h3>
           <p className="text-sm opacity-80">Политика приватности</p>
           <p className="text-sm opacity-80">Услови коришћења</p>
        </div>
        <p className="text-xs text-center opacity-60 mt-4">© 2025 ЗборАпп</p>
      </div>
    </div>
  );
}

export default function ZborDetailPage({ zbor, posts, onBack, isFollowed, onToggleFollow }: Props) {
  const [activeTab, setActiveTab] = useState('objave');

  const filteredPosts = posts.filter(p => {
    if (activeTab === 'objave') return p.type === 'objava';
    return p.type === 'dogadjaj' || p.type === 'protestna_setnja';
  });

  return (
    <div className="bg-[#fffcfd] relative w-full h-full min-h-screen flex flex-col">
      <Frame26 />
      <div className="flex flex-col w-full max-w-md mx-auto">
         <div className="p-4">
            <Frame28 onBack={onBack} />
            <div className="my-4">
               <Frame16 zbor={zbor} />
            </div>
         </div>
         
         <Frame30 isFollowed={isFollowed} onToggle={() => onToggleFollow(zbor.id)} />
         <TabGroup activeTab={activeTab} onTabChange={setActiveTab} />
         
         <div className="flex-1 pb-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => <PostCard key={post.id} post={post} />)
            ) : (
              <div className="p-8 text-center text-gray-500">Нема садржаја за приказ.</div>
            )}
         </div>
      </div>
      <Footer />
    </div>
  );
}