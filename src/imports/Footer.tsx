import React from 'react';
import ZborAppLogoT from "./ZborAppLogoT1";
import { Facebook, Twitter, Instagram, Send, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'about' | 'privacy' | 'terms' | 'home') => void;
  onRegister: () => void;
}

export default function Footer({ onNavigate, onRegister }: FooterProps) {
  return (
    <div className="relative w-full bg-primary text-primary-foreground overflow-hidden" data-name="Footer">
      <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col gap-10">
        
        {/* Logo and Links Section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer w-[180px]" onClick={() => onNavigate('home')}>
             <ZborAppLogoT />
          </div>

          {/* About App Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">О апликацији</h3>
            <div className="flex flex-col gap-3 text-sm underline">
              <button onClick={() => onNavigate('about')} className="text-left hover:text-primary-foreground/80">О нама</button>
              <span className="text-primary-foreground/80 no-underline">Следећа верзија (Бета)</span>
              <button onClick={onRegister} className="text-left hover:text-primary-foreground/80 font-bold">Региструј збор</button>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeGmJe4HKBhpqihb9FB8y9F_gLN_cLsRJCUpVa9I1AkH2dxiQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left hover:text-primary-foreground/80 text-yellow-300"
              >
                Попуни анкету
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Правила и заштита података</h3>
            <div className="flex flex-col gap-3 text-sm underline">
              <button onClick={() => onNavigate('privacy')} className="text-left hover:text-primary-foreground/80">Политика приватности</button>
              <span className="text-primary-foreground/80 no-underline">Управљање колачићима</span>
              <button onClick={() => onNavigate('terms')} className="text-left hover:text-primary-foreground/80">Услови коришћења</button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Останимо у контакту</h3>
            <div className="flex gap-4 items-center">
               <a href="#" className="hover:opacity-80 transition-opacity"><Facebook size={24} /></a>
               <a href="#" className="hover:opacity-80 transition-opacity"><Twitter size={24} /></a>
               <a href="#" className="hover:opacity-80 transition-opacity"><Instagram size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm space-y-2">
          <p>© 2025 ЗборАпп - за доступније зборове</p>
          <p className="text-primary-foreground/60">ЗборАпп поштује GDPR. Прикупљамо само податке неопходне за функционисање апликације. Аналитички колачићи се користе искључиво уз сагласност.</p>
        </div>
      </div>
    </div>
  );
}