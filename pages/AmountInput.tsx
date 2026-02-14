
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Landmark, AlertCircle, Info } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import Keypad from '../components/Keypad';

const AmountInput: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('1250.00');
  const [error, setError] = useState(false);

  const handleKeyPress = (key: string) => {
    setError(false);
    if (key === '.' && amount.includes('.')) return;
    if (amount === '0') setAmount(key);
    else setAmount(prev => prev + key);
  };

  const handleDelete = () => {
    setError(false);
    setAmount(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  const handleContinue = () => {
    const val = parseFloat(amount);
    if (val < 1.00) {
      setError(true);
    } else {
      navigate('/transfer/summary');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <StatusBar />
      
      <div className="px-4 py-2 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold text-[#1a2b4b]">Ingreso de Monto</h2>
      </div>

      <div className="px-6 mt-6">
        <div className="bg-white border border-gray-100 rounded-3xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#f59e0b]">
            <Landmark size={24} />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">DESTINO</p>
            <h4 className="font-bold text-[#1a2b4b]">Interbank • Cuenta Simple</h4>
            <p className="text-xs text-gray-400 font-medium">Juan Pérez - *4582</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center">
          <p className="text-gray-400 font-semibold mb-4">¿Cuánto deseas transferir?</p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#1a2b4b] mr-2">S/</span>
            <div className="relative">
              <span className={`text-6xl font-bold tracking-tight ${error ? 'text-red-500' : 'text-[#1a2b4b]'}`}>
                {parseFloat(amount).toLocaleString('es-PE', { minimumFractionDigits: 2 })}
              </span>
              <div className="absolute top-0 right-[-10px] w-1 h-full bg-[#f59e0b] opacity-50 animate-pulse"></div>
            </div>
          </div>
          
          <div className="mt-8 bg-orange-50/50 rounded-full px-6 py-2.5 flex items-center gap-2 border border-orange-100">
            <div className="w-5 h-5 bg-[#f59e0b] rounded-full flex items-center justify-center text-white">
              <Info size={12} fill="white" />
            </div>
            <span className="text-xs text-[#f59e0b] font-bold">Saldo disponible: S/ 4,500.20</span>
          </div>
        </div>

        {error && (
          <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-3 flex items-center gap-3 text-red-500">
            <AlertCircle size={20} />
            <span className="text-sm font-bold">El monto debe ser mayor a S/ 1.00</span>
          </div>
        )}
      </div>

      <div className="mt-auto">
        <div className="px-6 pb-4">
          <button
            onClick={handleContinue}
            className="w-full bg-[#f59e0b] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-100 active:bg-orange-600 transition-colors"
          >
            Continuar
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} />
        <div className="h-6 flex items-center justify-center pb-2 bg-gray-50/50">
          <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Transferencia interbancaria inmediata</p>
        </div>
      </div>
    </div>
  );
};

export default AmountInput;
