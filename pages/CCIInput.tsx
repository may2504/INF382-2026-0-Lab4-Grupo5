
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, HelpCircle, Landmark, AlertCircle } from 'lucide-react';
import StatusBar from '../components/StatusBar';

const CCIInput: React.FC = () => {
  const navigate = useNavigate();
  const [cci, setCci] = useState('003-010-0012345678');
  const [hasError, setHasError] = useState(true);

  const handleValidate = () => {
    if (cci.length === 20 || cci === '003-010-0012345678') {
      navigate('/transfer/amount');
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#fdfdfd]">
      <div className="bg-[#121c2c] text-white pt-2">
        <StatusBar light />
        <div className="flex items-center px-4 py-4">
          <button onClick={() => navigate(-1)} className="p-2">
            <ChevronLeft size={24} />
          </button>
          <h2 className="flex-1 text-center font-bold text-lg mr-8">Transferencia Interbancaria</h2>
        </div>
      </div>

      <div className="px-8 mt-10">
        <div className="flex gap-2 mb-10">
          <div className="h-1 flex-1 bg-[#f59e0b] rounded-full"></div>
          <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
          <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
        </div>

        <h3 className="text-2xl font-bold text-[#1a2b4b]">Ingreso de Datos</h3>
        <p className="mt-3 text-gray-500 text-[15px] leading-relaxed">
          Ingresa los 20 dígitos del Código de Cuenta Interbancario (CCI) del destinatario para continuar.
        </p>

        <div className="mt-10 space-y-2">
          <label className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">NÚMERO DE CCI</label>
          <div className={`relative ${hasError ? 'border-red-500' : 'border-gray-200'} border rounded-xl bg-white transition-colors`}>
            <input
              type="text"
              value={cci}
              onChange={(e) => setCci(e.target.value)}
              placeholder="002-XXX-XXXXXXXXXXX-XX"
              className="w-full py-5 px-5 pr-14 text-lg font-mono text-gray-700 bg-transparent focus:outline-none"
            />
            {hasError ? (
              <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500" size={24} />
            ) : (
              <Landmark className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={24} />
            )}
          </div>
          {hasError && (
            <p className="text-red-500 text-sm font-medium mt-1">El número ingresado es incorrecto</p>
          )}
          <p className="text-[11px] text-gray-400 mt-2">
            Recuerda que el CCI permite transferir dinero entre diferentes bancos de forma segura.
          </p>
        </div>

        <button className="mt-6 flex items-center gap-2 text-[#f59e0b] font-bold">
          <HelpCircle size={20} />
          <span>¿Dónde encuentro mi CCI?</span>
        </button>

        {hasError && (
          <div className="mt-8 bg-[#fff8ef] border border-[#ffe9cc] rounded-2xl p-5 flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center text-white shrink-0">
              <Info size={16} fill="white" strokeWidth={3} />
            </div>
            <p className="text-sm text-[#1a2b4b] font-medium leading-relaxed">
              Asegúrate de que la cuenta no tenga restricciones para recibir depósitos interbancarios.
            </p>
          </div>
        )}
      </div>

      <div className="mt-auto px-8 pb-10">
        <button
          onClick={handleValidate}
          className="w-full bg-[#f59e0b] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-100 hover:bg-orange-500 transition-all transform active:scale-[0.98]"
        >
          Validar
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CCIInput;
