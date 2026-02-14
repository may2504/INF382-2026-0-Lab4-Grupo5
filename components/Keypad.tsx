
import React from 'react';
import { Delete } from 'lucide-react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
  onDelete: () => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress, onDelete }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];

  return (
    <div className="grid grid-cols-3 gap-y-1 bg-gray-50/50 p-2 border-t border-gray-100">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onKeyPress(key)}
          className="h-16 flex items-center justify-center text-2xl font-medium text-gray-800 active:bg-gray-200 transition-colors rounded-lg"
        >
          {key}
        </button>
      ))}
      <button
        onClick={onDelete}
        className="h-16 flex items-center justify-center text-gray-800 active:bg-gray-200 transition-colors rounded-lg"
      >
        <div className="bg-gray-700 p-1.5 rounded-md text-white">
          <Delete size={20} />
        </div>
      </button>
    </div>
  );
};

export default Keypad;
