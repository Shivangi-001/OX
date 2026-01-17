import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-start z-40 mix-blend-difference text-white pointer-events-none">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl tracking-tighter uppercase">Offline Xperience</h1>
        <span className="font-mono text-xs opacity-70 mt-1">EST. 2025 // SYS.V.1.0</span>
      </div>
      
      <div className="flex flex-col items-end text-right font-mono text-xs opacity-70">
        <span>STATE: ACTIVE</span>
        <span>LAT: 52.5200° N</span>
        <span>LON: 13.4050° E</span>
      </div>
    </header>
  );
};