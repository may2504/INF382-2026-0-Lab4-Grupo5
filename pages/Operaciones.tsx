
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, ChevronRight, Repeat, Landmark, UserPlus, FileText, CreditCard, Smartphone, QrCode, SmartphoneNfc, Calendar } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BottomNav from '../components/BottomNav';

const Operaciones: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa]">
      <StatusBar />
      
      <div className="px-6 pt-4 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#1a2b4b]">Operaciones</h2>
        <div className="relative">
          <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#f59e0b]">
            <Bell size={22} />
          </div>
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      <div className="px-6 mt-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="¿Qué operación deseas realizar?"
            className="w-full bg-white border border-gray-100 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>
      </div>

      <div className="px-6 mt-8 overflow-y-auto flex-1 pb-4">
        <section>
          <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">TRANSFERENCIAS</h4>
          <div className="space-y-3">
            <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm text-left">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-[#1a2b4b]">
                <Repeat size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-[#1a2b4b]">Entre mis cuentas</h4>
                <p className="text-xs text-gray-400 font-medium">Traspasos inmediatos</p>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>

            <button 
              onClick={() => navigate('/transfer/cci')}
              className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm text-left relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f59e0b]"></div>
              <div className="w-10 h-10 bg-[#fff8ef] rounded-lg flex items-center justify-center text-[#f59e0b]">
                <Landmark size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-[#1a2b4b]">A otros bancos (Interbancaria)</h4>
                <p className="text-xs text-[#f59e0b] font-medium">Nacional e internacional</p>
              </div>
              <ChevronRight size={18} className="text-[#f59e0b]" />
            </button>

            <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm text-left">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-[#1a2b4b]">
                <UserPlus size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-[#1a2b4b]">A terceros Banco Raiz</h4>
                <p className="text-xs text-gray-400 font-medium">Sin costo adicional</p>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
          </div>
        </section>

        <section className="mt-10">
          <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">PAGOS Y RECARGAS</h4>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white rounded-2xl p-5 flex flex-col items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <FileText size={20} />
              </div>
              <span className="text-[13px] font-bold text-[#1a2b4b]">Pago de Servicios</span>
            </button>
            <button className="bg-white rounded-2xl p-5 flex flex-col items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                <CreditCard size={20} />
              </div>
              <span className="text-[13px] font-bold text-[#1a2b4b]">Pago de Tarjetas</span>
            </button>
            <button className="bg-white rounded-2xl p-5 flex flex-col items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                <Smartphone size={20} />
              </div>
              <span className="text-[13px] font-bold text-[#1a2b4b]">Recargas</span>
            </button>
            <button className="bg-white rounded-2xl p-5 flex flex-col items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                <QrCode size={20} />
              </div>
              <span className="text-[13px] font-bold text-[#1a2b4b]">Cobro QR</span>
            </button>
          </div>
        </section>

        <section className="mt-10">
          <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">OTROS</h4>
          <div className="space-y-3">
             <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm text-left">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
                <SmartphoneNfc size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-[#1a2b4b]">Retiro sin tarjeta</h4>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
            <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm text-left">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
                <Calendar size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-[#1a2b4b]">Operaciones programadas</h4>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
};

export default Operaciones;
