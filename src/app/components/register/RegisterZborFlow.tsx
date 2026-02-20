import { toast } from 'sonner';
import ModalZaRegistraciju from '../../../imports/ModalZaRegistraciju';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  t: (s: string) => string;
}

export function RegisterZborFlow({ isOpen, onClose, t }: Props) {
  if (!isOpen) return null;

  const handleSubmit = (data: any) => {
    console.log('Registration data:', data);
    toast.success(t('Захтев за регистрацију је послат!'));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[2000] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-[400px] h-full max-h-[90vh]">
         <ModalZaRegistraciju onClose={onClose} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}