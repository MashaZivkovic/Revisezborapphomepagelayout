import React, { useState } from 'react';
import { 
  PersonIcon, PlusIcon, 
  CheckmarkCircleIcon
} from '@navikt/aksel-icons';
import { BarChart3, Lightbulb } from 'lucide-react';

// Mock Data
const STATS = {
  visits: 1240,
  joins: 85,
  events_reach: 12
};

const SUGGESTIONS = [
  "Организујте физичко окупљање у парку.",
  "Поделите позивницу на друштвеним мрежама.",
  "Ажурирајте опис збора."
];

interface Member {
    id: number;
    name: string;
    email: string;
    isVerified: boolean;
}

export function AdminDashboard({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [newMember, setNewMember] = useState({ name: '', email: '', isVerified: false });
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: 'Марко Марковић', email: 'marko@example.com', isVerified: true },
    { id: 2, name: 'Јелена Јовић', email: 'jelena@example.com', isVerified: false },
  ]);

  const handleAddMember = () => {
    if (newMember.name && newMember.email) {
      setMembers([...members, { ...newMember, id: Date.now() }]);
      setNewMember({ name: '', email: '', isVerified: false });
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-background pb-10">
      <div className="bg-primary text-primary-foreground px-6 py-8 rounded-b-3xl shadow-lg mb-8">
         <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-primary-foreground/60 font-medium uppercase tracking-wide">
               <span>Почетна</span>
               <span className="opacity-50">/</span>
               <span>Збор Звездара</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="size-12 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20">
                  <PersonIcon className="text-[24px]" />
               </div>
               <div>
                  <h1 className="text-3xl font-bold leading-tight">Збор Звездара</h1>
                  <p className="text-primary-foreground/80 text-sm font-medium">Админ Панел</p>
               </div>
            </div>
         </div>
      </div>

      <div className="px-6 space-y-8 max-w-4xl mx-auto w-full">
         
         {/* Stats */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
               <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                  <PersonIcon className="text-[24px]" />
               </div>
               <span className="text-3xl font-bold text-foreground">{STATS.visits}</span>
               <span className="text-sm text-foreground/70">Посета страници</span>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
               <div className="size-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3">
                  <PlusIcon className="text-[24px]" />
               </div>
               <span className="text-3xl font-bold text-foreground">{STATS.joins}</span>
               <span className="text-sm text-foreground/70">Нових чланова (линк)</span>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
               <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                  <BarChart3 className="text-[24px]" />
               </div>
               <span className="text-3xl font-bold text-foreground">{STATS.events_reach}</span>
               <span className="text-sm text-foreground/70">Зборова на догађају</span>
            </div>
         </div>

         {/* Add Member */}
         <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Додај новог члана</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
               <input 
                 value={newMember.name}
                 onChange={e => setNewMember({...newMember, name: e.target.value})}
                 placeholder="Име и презиме"
                 className="w-full bg-accent/50 border border-transparent focus:border-primary rounded-xl px-4 py-3 outline-none"
               />
               <input 
                 value={newMember.email}
                 onChange={e => setNewMember({...newMember, email: e.target.value})}
                 placeholder="Имејл адреса"
                 className="w-full bg-accent/50 border border-transparent focus:border-primary rounded-xl px-4 py-3 outline-none"
               />
            </div>
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => setNewMember({...newMember, isVerified: !newMember.isVerified})}>
               <div className={`size-6 rounded-md border-2 flex items-center justify-center transition-colors ${newMember.isVerified ? 'bg-primary border-primary' : 'border-muted-foreground'}`}>
                  {newMember.isVerified && <CheckmarkCircleIcon className="text-white text-[16px]" />}
               </div>
               <span className="text-sm text-foreground/80">Верификован члан (приступ документима)</span>
            </div>
            <button 
              onClick={handleAddMember}
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors w-full md:w-auto"
            >
               Додај члана
            </button>

            <div className="mt-8">
               <h4 className="font-bold text-foreground mb-4">Листа чланова</h4>
               <div className="space-y-2">
                  {members.map(m => (
                    <div key={m.id} className="flex items-center justify-between p-3 hover:bg-accent/50 rounded-lg transition-colors">
                       <div>
                          <p className="font-bold text-foreground">{m.name}</p>
                          <p className="text-xs text-foreground/70">{m.email}</p>
                       </div>
                       {m.isVerified && <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">ВЕРИФИКОВАН</span>}
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Suggestions */}
         <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
               <Lightbulb className="text-yellow-600 text-[24px]" />
               Предлози за већи одзив
            </h3>
            <ul className="space-y-3">
               {SUGGESTIONS.map((s, i) => (
                 <li key={i} className="flex items-start gap-3">
                    <span className="size-6 bg-white rounded-full flex items-center justify-center shrink-0 text-primary font-bold text-xs shadow-sm">{i+1}</span>
                    <p className="text-foreground/80 leading-snug">{s}</p>
                 </li>
               ))}
            </ul>
         </div>

      </div>
    </div>
  );
}