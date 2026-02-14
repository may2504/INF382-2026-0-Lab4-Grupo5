
import React from 'react';

const StatusBar: React.FC<{ light?: boolean }> = ({ light }) => {
  return (
    <div className={`flex justify-between items-center px-8 py-3 w-full text-xs font-semibold ${light ? 'text-white' : 'text-gray-900'}`}>
      <span>9:41</span>
      <div className="flex gap-1.5 items-center">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 9H15.5V10H1.5V9ZM1.5 6.5H15.5V7.5H1.5V6.5ZM1.5 4H15.5V5H1.5V4ZM1.5 1.5H15.5V2.5H1.5V1.5Z" fill="currentColor"/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0C3.35 0 0 3.35 0 7.5V10.5H15V7.5C15 3.35 11.65 0 7.5 0Z" fill="currentColor"/>
        </svg>
        <div className="w-6 h-3 rounded-sm border border-current flex items-center px-0.5">
          <div className="bg-current w-full h-1.5 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
