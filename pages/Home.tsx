
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Send, FileText, Smartphone, LayoutGrid, ChevronRight, ShoppingBag, ArrowUpRight, Lightbulb } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BottomNav from '../components/BottomNav';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa]">
      <StatusBar />
      
      <div className="px-6 pt-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm font-medium">¡Buen día!</span>
          <h2 className="text-2xl font-bold text-[#1a2b4b]">Hola, Juan</h2>
        </div>
        <div className="w-12 h-12 bg-[#1a2b4b] rounded-full flex items-center justify-center text-white">
          <User size={24} />
        </div>
      </div>

      <div className="px-6 mt-6">
        <div className="bg-[#121c2c] rounded-3xl p-6 text-white shadow-xl shadow-blue-900/10 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-gray-400 text-sm font-medium">Saldo disponible</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-[#f59e0b] text-2xl font-bold">S/</span>
              <span className="text-4xl font-bold">4,250.80</span>
            </div>
            
            <div className="mt-8 flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Cuenta de ahorros</span>
                <span className="font-mono mt-0.5 text-sm tracking-widest text-gray-300">**** 4829</span>
              </div>
              <div className="bg-gray-800/80 p-2 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>

      <div className="px-6 mt-8">
        <h3 className="text-lg font-bold text-[#1a2b4b]">Acciones rápidas</h3>
        <div className="flex justify-between mt-4">
          <button onClick={() => navigate('/transfer/cci')} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-[#f59e0b] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-100">
              <Send size={24} className="rotate-[-20deg]" />
            </div>
            <span className="text-xs font-bold text-[#1a2b4b]">Transferir</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-[#eff3f8] rounded-2xl flex items-center justify-center text-[#1a2b4b]">
              <FileText size={24} />
            </div>
            <span className="text-xs font-bold text-[#1a2b4b]">Servicios</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-[#eff3f8] rounded-2xl flex items-center justify-center text-[#1a2b4b]">
              <Smartphone size={24} />
            </div>
            <span className="text-xs font-bold text-[#1a2b4b]">Recarga</span>
          </button>
          <button onClick={() => navigate('/operaciones')} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-[#eff3f8] rounded-2xl flex items-center justify-center text-[#1a2b4b]">
              <LayoutGrid size={24} />
            </div>
            <span className="text-xs font-bold text-[#1a2b4b]">Más</span>
          </button>
        </div>
      </div>

      <div className="px-6 mt-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-[#1a2b4b]">Movimientos recientes</h3>
          <button className="text-[#f59e0b] text-sm font-bold">Ver todo</button>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#f59e0b]">
              <ShoppingBag size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm text-[#1a2b4b]">Starbucks Coffee</h4>
              <span className="text-xs text-gray-400 font-medium">Hoy, 8:45 AM</span>
            </div>
            <span className="font-bold text-[#1a2b4b]">- S/ 18.50</span>
          </div>

          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-500">
              <ArrowUpRight size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm text-[#1a2b4b]">Transferencia Recibida</h4>
              <span className="text-xs text-gray-400 font-medium">Ayer, 4:20 PM</span>
            </div>
            <span className="font-bold text-green-600">+ S/ 1,200.00</span>
          </div>

          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
              <Lightbulb size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm text-[#1a2b4b]">Enel - Recibo Luz</h4>
              <span className="text-xs text-gray-400 font-medium">12 May, 2024</span>
            </div>
            <span className="font-bold text-[#1a2b4b]">- S/ 145.20</span>
          </div>
        </div>

        <div className="mt-6 bg-[#fff8ef] border border-[#ffe9cc] rounded-2xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white">
            <ShoppingBag size={20} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm text-[#1a2b4b]">Tienes un préstamo aprobado</h4>
            <span className="text-xs text-gray-500 font-medium">Obtén hasta S/ 10,000 al instante.</span>
          </div>
          <ChevronRight size={20} className="text-[#f59e0b]" />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
