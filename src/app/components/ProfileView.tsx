import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, PersonIcon, ExternalLinkIcon } from '@navikt/aksel-icons';
import { ZborData } from './Cards';

interface ProfileViewProps {
  user: any;
  followedZborovi: ZborData[];
  onZborClick: (zbor: ZborData) => void;
  t: (s: string) => string;
}

export function ProfileView({ user, followedZborovi, onZborClick, t }: ProfileViewProps) {
  const [isFollowedOpen, setIsFollowedOpen] = useState(false);

  // Mock data if user is null (for demo purposes)
  const userData = user ? {
    name: user.user_metadata?.name || 'Korisnik',
    email: user.email,
    type: '<Tip korisnika>'
  } : {
    name: 'Petar Petrović',
    email: 'petar.p@example.com',
    type: 'Građanin'
  };

  // Mock "My Zbor" (assuming user is a member of one primary zbor)
  const myZbor = followedZborovi.length > 0 ? followedZborovi[0] : null;

  return (
    <div className="flex flex-col w-full h-full bg-[#fefdff]">
      {/* Header Profile Section */}
      <div className="px-6 py-8 flex items-center gap-4 border-b border-[#f4f1f5]">
        <div className="size-20 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#69607E]">
          <PersonIcon className="text-[48px]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#383838] leading-tight mb-1">
            {userData.name}
            <span className="block text-sm font-normal text-[#69607E] mt-0.5">{userData.type}</span>
          </h1>
          <p className="text-sm text-[#383838]">{userData.email}</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Moj Zbor Section */}
        <div className="border border-[#e9e3e6] rounded-lg p-4 bg-[#fffcfd] shadow-sm">
          <h2 className="text-base font-bold text-[#383838] mb-3">{t('Мој збор')}</h2>
          {myZbor ? (
            <div 
              onClick={() => onZborClick(myZbor)}
              className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200"
            >
              <span className="text-[#4f378a] font-medium tracking-wide">{t(myZbor.name)}</span>
              <ExternalLinkIcon className="text-[#4f378a] w-5 h-5" />
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">{t('Нисте члан ниједног збора')}</p>
          )}
        </div>

        {/* Zborovi koje pratim Section */}
        <div className="border border-[#e9e3e6] rounded-lg bg-[#fffcfd] shadow-sm overflow-hidden">
          <button 
            onClick={() => setIsFollowedOpen(!isFollowedOpen)}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <h2 className="text-base font-bold text-[#383838]">{t('Зборови које пратим')}</h2>
            {isFollowedOpen ? (
              <ChevronUpIcon className="text-[#4f378a] w-6 h-6" />
            ) : (
              <ChevronDownIcon className="text-[#4f378a] w-6 h-6" />
            )}
          </button>
          
          {isFollowedOpen && (
            <div className="border-t border-[#e9e3e6]">
              {followedZborovi.length > 0 ? (
                <div className="divide-y divide-[#f4f1f5]">
                  {followedZborovi.map(zbor => (
                    <div 
                      key={zbor.id}
                      onClick={() => onZborClick(zbor)}
                      className="p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group"
                    >
                      <span className="text-[#383838] font-medium group-hover:text-[#4f378a] transition-colors">{t(zbor.name)}</span>
                      <ExternalLinkIcon className="text-gray-400 group-hover:text-[#4f378a] w-4 h-4 transition-colors" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-sm text-gray-500 italic">
                  {t('Не пратите ниједан збор')}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
