
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Operaciones from './pages/Operaciones';
import CCIInput from './pages/CCIInput';
import AmountInput from './pages/AmountInput';
import Summary from './pages/Summary';
import ValidatingToken from './pages/ValidatingToken';
import Success from './pages/Success';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col h-full overflow-hidden bg-white text-[#1a2b4b]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/operaciones" element={<Operaciones />} />
          <Route path="/transfer/cci" element={<CCIInput />} />
          <Route path="/transfer/amount" element={<AmountInput />} />
          <Route path="/transfer/summary" element={<Summary />} />
          <Route path="/transfer/validating" element={<ValidatingToken />} />
          <Route path="/transfer/success" element={<Success />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
