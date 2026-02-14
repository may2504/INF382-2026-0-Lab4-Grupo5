
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Landmark } from 'lucide-react';
import StatusBar from '../components/StatusBar';

const ValidatingToken: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/transfer/success');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col h-full bg-white relative">
      <StatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-10">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Animated Spinner Ring */}
          <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#f59e0b] rounded-full border-t-transparent animate-spin"></div>
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center">
            <ShieldCheck size={40} className="text-[#f59e0b]" />
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#1a2b4b] text-center">Validando Token Digital...</h2>
        <p className="mt-4 text-center text-gray-400 font-medium leading-relaxed">
          Estamos verificando tus credenciales de seguridad para completar la transferencia.
        </p>

        <div className="mt-10 bg-[#fff8ef] border border-[#ffe9cc] rounded-full px-6 py-2 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full animate-pulse"></div>
          <span className="text-[11px] font-bold text-[#f59e0b] tracking-widest uppercase">SEGURIDAD RAIZ</span>
        </div>
      </div>

      <div className="mt-auto pb-10 flex flex-col items-center gap-10">
        <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-xl border border-gray-100 text-gray-400">
          <Landmark size={20} />
          <span className="text-sm font-bold tracking-widest uppercase">BANCO RAIZ</span>
        </div>
        
        <p className="px-12 text-center text-[11px] font-medium text-gray-400 leading-relaxed">
          Por favor, no cierres ni cambies de aplicación mientras se procesa la validación.
        </p>

        <div className="flex gap-2">
            <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="w-16 h-1 bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ValidatingToken;
