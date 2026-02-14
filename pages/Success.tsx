
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Share2 } from 'lucide-react';
import StatusBar from '../components/StatusBar';

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#fdfdfd]">
      <StatusBar />
      
      <div className="flex-1 flex flex-col items-center px-8 pt-10">
        <div className="w-24 h-24 bg-[#10b981] rounded-full flex items-center justify-center shadow-xl shadow-green-100">
          <Check size={50} strokeWidth={3} className="text-white" />
        </div>

        <h2 className="mt-10 text-3xl font-bold text-[#1a2b4b]">¡Transferencia Exitosa!</h2>
        <p className="mt-2 text-gray-500 font-medium">El dinero ya ha sido enviado a su destino.</p>

        <div className="mt-12 w-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">MONTO ENVIADO</span>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-4xl font-extrabold text-[#1a2b4b]">$1,250.00</span>
              <span className="text-xl font-bold text-gray-400">MXN</span>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400 font-medium">Destinatario</span>
              <div className="text-right">
                <p className="font-bold text-[#1a2b4b]">Mariana Rodríguez L.</p>
                <p className="text-xs text-gray-400 font-medium">Santander •••• 8291</p>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-400 font-medium">Referencia</span>
              <span className="font-bold text-[#1a2b4b]">Pago de Alquiler</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-400 font-medium">Folio</span>
              <span className="font-mono text-sm text-[#1a2b4b] font-bold">002938475510</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-400 font-medium">Fecha y Hora</span>
              <span className="font-bold text-[#1a2b4b]">12 Oct 2023, 14:32</span>
            </div>
          </div>
        </div>

        <button className="mt-10 flex items-center gap-3 text-[#f59e0b] font-bold text-lg group">
          <Share2 size={24} className="group-active:scale-90 transition-transform" />
          <span>Compartir comprobante</span>
        </button>
      </div>

      <div className="mt-auto px-8 pb-10 space-y-4">
        <button
          onClick={() => navigate('/transfer/cci')}
          className="w-full bg-[#f59e0b] text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-orange-100 hover:bg-orange-500 transition-colors"
        >
          ¿Realizar otra transferencia?
        </button>
        <button
          onClick={() => navigate('/home')}
          className="w-full bg-[#1a2b4b] text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-900 transition-colors"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default Success;
