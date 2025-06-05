import { CheckCircle } from 'lucide-react';

const SuccessMessage = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-green-100 text-green-800 p-4 rounded-xl shadow-lg flex items-center space-x-2 animate-bounce-in">
      <CheckCircle className="w-6 h-6 text-green-600" />
      <span className="font-semibold">Məlumatlar uğurla göndərildi!</span>
    </div>
  );
};

export default SuccessMessage;
