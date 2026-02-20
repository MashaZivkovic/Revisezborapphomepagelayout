import { useState } from 'react';
import ModalOkOrisnickomIskustvuDa from '../../imports/ModalOkOrisnickomIskustvuДа';
import ModalOkOrisnickomIskustvuNe from '../../imports/ModalOkOrisnickomIskustvuНе';
import ModalOkOrisnickomIskustvuSta from '../../imports/ModalOkOrisnickomIskustvuШтаСтеТражили';
import ModalOkOrisnickomIskustvuZasto from '../../imports/ModalOkOrisnickomIskustvuЗаштоНистеУспелиДаПронађетеТоШтоСтеЖелели';
import ModalOkOrisnickomIskustvuDrugo from '../../imports/ModalOkOrisnickomIskustvuОпишитеШтаПодразумеватеПодДруго';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  t: (s: string) => string;
}

type Step = 'initial' | 'yes' | 'no' | 'what_looking_for' | 'why_not_found' | 'other_reason';

export function UserFeedbackModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<Step>('initial');

  if (!isOpen) return null;

  const reset = () => {
    setStep('initial');
    onClose();
  };

  // Initial step is implicit - usually we ask "Did you find what you wanted?" (Da/Ne)
  // But wait, the imported files are specific screens.
  // 'ModalOkOrisnickomIskustvuДа' seems to be the "Yes" confirmation screen? No, the title says "Da li ste pronasli...".
  // Let's check the content of 'ModalOkOrisnickomIskustvuДа' again.
  // It has a "ThumbUpIcon". It seems to be the "Yes" state or the question itself?
  // Actually, typically "Da" file means "Scenario: Yes".
  
  // Let's assume the flow starts with a question.
  // Based on file names:
  // 1. User sees "Did you find what you wanted?"
  // If YES -> Show "Thank you" (maybe 'ModalOkOrisnickomIskustvuДа' is the success state?)
  // If NO -> Show "Why not?" ('ModalOkOrisnickomIskustvuЗаштоНистеУспели...')
  
  // Wait, let's look at the UI of `ModalOkOrisnickomIskustvuДа`.
  // It has "Da li ste pronasli to sto ste zeleli?" heading. And a big Thumbs Up. And a "Potvrdi" button.
  // This looks like the "Yes, I found it" selection screen.
  
  // `ModalOkOrisnickomIskustvuНе` has "Ne" scenario.
  
  // Flow:
  // 1. Main Modal? No, it seems we might just show one of these based on context, OR we need a parent modal that asks the question.
  // BUT, the file `ModalOkOrisnickomIskustvuДа.tsx` HAS the question "Da li ste pronasli...".
  // So maybe it IS the question screen where Yes/No are buttons?
  // No, the code I read for `ModalOkOrisnickomIskustvuДа` has only ONE button "Potvrdi".
  // And it has a big Thumbs Up icon.
  // So it seems it's a "I am voting YES" screen.
  
  // So the user must have clicked "Yes" or "No" somewhere else?
  // Or maybe this modal handles both?
  // Actually, looking at the file list again, I don't see a "Question" modal.
  
  // Let's implement a simple flow:
  // Step 1: Ask "Da li ste pronasli...?" with Yes/No buttons. (I'll create this simple wrapper).
  // Step 2 (Yes): Show `ModalOkOrisnickomIskustvuДа`.
  // Step 2 (No): Show `ModalOkOrisnickomIskustvuНе`? Or `ModalOkOrisnickomIskustvuЗашто...`?
  
  // Let's try to map:
  // - `ModalOkOrisnickomIskustvuДа` -> Success / Yes feedback.
  // - `ModalOkOrisnickomIskustvuНе` -> Failure / No feedback start.
  
  // I will create a simple initial view that asks Yes/No, then routes to these components.
  
  const renderStep = () => {
    switch (step) {
      case 'initial':
        return (
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#333]">Да ли сте пронашли оно што сте тражили?</h3>
                <button onClick={reset} className="text-[#4f378a]">✕</button>
             </div>
             <div className="flex gap-4">
                <button onClick={() => setStep('yes')} className="flex-1 bg-[#4f378a] text-white py-3 rounded-lg font-bold">Да</button>
                <button onClick={() => setStep('no')} className="flex-1 bg-gray-100 text-[#333] py-3 rounded-lg font-bold">Не</button>
             </div>
          </div>
        );
      case 'yes':
        return <ModalOkOrisnickomIskustvuDa onClose={reset} onConfirm={() => { alert('Hvala!'); reset(); }} />;
      case 'no':
        return <ModalOkOrisnickomIskustvuNe onClose={reset} onConfirm={() => setStep('why_not_found')} />;
      case 'why_not_found':
        return <ModalOkOrisnickomIskustvuZasto onClose={reset} onConfirm={(reasons) => { 
            console.log(reasons);
            if (reasons.includes('Друго')) setStep('other_reason');
            else { alert('Hvala na povratnoj informaciji!'); reset(); }
        }} />;
      case 'other_reason':
        return <ModalOkOrisnickomIskustvuDrugo onClose={reset} onConfirm={(text) => {
            console.log(text);
            alert('Hvala na povratnoj informaciji!'); 
            reset();
        }} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[3000] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
       {renderStep()}
    </div>
  );
}