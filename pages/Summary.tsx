
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Wallet, CreditCard, Landmark } from 'lucide-react';
import StatusBar from '../components/StatusBar';

const Summary: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#fdfdfd]">
      <StatusBar />
      <div className="px-4 py-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2">
          <ChevronLeft size={24} className="text-[#f59e0b]" />
        </button>
        <h2 className="flex-1 text-center font-bold text-lg mr-8">Resumen</h2>
      </div>

      <div className="px-8 mt-12 flex flex-col items-center">
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center">
          <div className="w-14 h-14 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center">
             <Wallet size={32} className="text-[#f59e0b]" />
          </div>
        </div>
        <h3 className="mt-8 text-2xl font-bold text-[#1a2b4b]">Verifica los datos</h3>
        <p className="mt-3 text-center text-gray-500 font-medium">
          Revisa que la información sea correcta antes de confirmar.
        </p>

        <div className="mt-12 w-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-6">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CUENTA DE ORIGEN</label>
            <div className="mt-3 flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#f59e0b]">
                <CreditCard size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#1a2b4b]">Ahorros - **** 4820</h4>
                <p className="text-sm text-gray-400 font-medium">Saldo: $4,250.00</p>
              </div>
            </div>
          </div>
          
          <div className="h-[1px] bg-gray-100 mx-6"></div>

          <div className="p-6">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">DESTINATARIO</label>
            <div className="mt-3">
              <h4 className="font-bold text-[#1a2b4b] text-lg">Mariana Elizabeth Rodriguez</h4>
              <p className="text-sm text-gray-400 font-medium mt-1">CUIL/CUIT: 27-35984120-4</p>
            </div>
          </div>

          <div className="h-[1px] bg-gray-100 mx-6"></div>

          <div className="p-6">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">BANCO DESTINO</label>
            <div className="mt-3 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#2d6a4f] rounded-full flex items-center justify-center text-white">
                <Landmark size={18} />
              </div>
              <h4 className="font-bold text-[#1a2b4b]">Banco Nación Argentina</h4>
            </div>
          </div>

          <div className="bg-orange-50/30 p-8 flex flex-col items-center border-t border-orange-50">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">MONTO A TRANSFERIR</label>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[#f59e0b] text-2xl font-bold">$</span>
              <span className="text-4xl font-bold text-[#f59e0b]">12.500,00</span>
            </div>
            <p className="mt-2 text-xs text-gray-400 font-medium">Sin comisión de transferencia</p>
          </div>
        </div>
      </div>

      <div className="mt-auto px-8 pb-10 space-y-4">
        <button
          onClick={() => navigate('/transfer/validating')}
          className="w-full bg-[#f59e0b] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-100 hover:bg-orange-500 transition-colors"
        >
          Confirmar Transferencia
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </button>
        <button 
          onClick={() => navigate(-1)}
          className="w-full text-[#1a2b4b] py-2 font-bold text-lg hover:text-gray-600 transition-colors"
        >
          Modificar Datos
        </button>
      </div>
    </div>
  );
};

export default Summary;
