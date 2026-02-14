
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, Eye, CheckCircle2, Smile } from 'lucide-react';
import StatusBar from '../components/StatusBar';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');

  return (
    <div className="flex flex-col h-full bg-[#fdfdfd] relative">
      <StatusBar />
      
      <div className="flex flex-col items-center px-8 mt-12">
        <div className="w-20 h-20 bg-[#f59e0b] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
          <svg viewBox="0 0 24 24" fill="white" className="w-12 h-12">
            <path d="M12 2L2 7v2h20V7L12 2zm0 18H2v2h20v-2H12zm-8-9v7h3v-7H4zm6 0v7h3v-7h-3zm6 0v7h3v-7h-3z" />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold flex gap-2">
          <span className="text-[#1a2b4b]">Banco</span>
          <span className="text-[#f59e0b]">Raiz</span>
        </h1>
        <p className="mt-2 text-gray-500 font-medium">Tu banca móvil segura</p>
      </div>

      <div className="flex flex-col gap-6 px-8 mt-12">
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-400 tracking-wider">NÚMERO DE TARJETA</label>
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-[11px] font-bold text-gray-400 tracking-wider">CLAVE DE INTERNET</label>
            <button className="text-[11px] font-bold text-[#f59e0b]">¿La olvidaste?</button>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 gap-8">
        <button className="flex flex-col items-center gap-2 group">
          <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:bg-gray-50">
            <Smile size={32} />
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ingresar con FaceID</span>
        </button>

        <button 
          onClick={() => navigate('/home')}
          className="w-5/6 bg-[#f59e0b] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-100 hover:bg-orange-500 transition-colors"
        >
          Ingresar
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </button>

        <p className="text-sm font-medium">
          <span className="text-gray-500">¿No tienes una cuenta? </span>
          <button className="text-[#f59e0b] font-bold">Regístrate ahora</button>
        </p>
      </div>

      <div className="mt-auto pb-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold">
          <CheckCircle2 size={14} className="text-gray-400" />
          CONEXIÓN SEGURA SSL 256-BIT
        </div>
        <div className="flex gap-8 text-[11px] font-bold text-gray-400">
          <button>Ayuda</button>
          <button>Puntos de atención</button>
          <button>Legal</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
