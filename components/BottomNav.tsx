
import React from 'react';
import { Home, Repeat, CreditCard, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Inicio', icon: Home, path: '/home' },
    { label: 'Movimientos', icon: Repeat, path: '/home' },
    { label: 'Tarjetas', icon: CreditCard, path: '/home' },
    { label: 'Ajustes', icon: User, path: '/home' },
  ];

  const opsItems = [
    { label: 'Inicio', icon: Home, path: '/home' },
    { label: 'Operaciones', icon: Repeat, path: '/operaciones' },
    { label: 'Tarjetas', icon: CreditCard, path: '/home' },
    { label: 'Perfil', icon: User, path: '/home' },
  ];

  const items = location.pathname === '/operaciones' ? opsItems : navItems;

  return (
    <div className="flex justify-around items-center py-2 px-4 bg-white border-t border-gray-100 mt-auto">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            location.pathname === item.path ? 'text-[#f59e0b]' : 'text-gray-400'
          }`}
        >
          <item.icon size={22} strokeWidth={location.pathname === item.path ? 2.5 : 2} />
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
