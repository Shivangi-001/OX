import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BinaryMarkProps {
  mouseX: number;
  mouseY: number;
}

export const BinaryMark: React.FC<BinaryMarkProps> = ({ mouseX, mouseY }) => {
  const [hoverO, setHoverO] = useState(false);
  const [hoverX, setHoverX] = useState(false);

  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  
  // Calculate relative position (-1 to 1)
  const xPct = (mouseX / windowWidth - 0.5) * 2;
  const yPct = (mouseY / windowHeight - 0.5) * 2;
  
  // Reduced parallax effects for better control
  const moveX_O = xPct * -15; 
  const moveY_O = yPct * -15;

  const moveX_X = xPct * 20;
  const moveY_X = yPct * 20;

  return (
    <div className="relative w-full max-w-7xl aspect-video flex items-center justify-center gap-24 md:gap-96 pointer-events-none select-none">
      
      {/* Left Wrapper: THE VOID [O] -> OFFLINE */}
      <motion.div 
        className="relative group pointer-events-auto"
        style={{ x: moveX_O, y: moveY_O }}
        onHoverStart={() => setHoverO(true)}
        onHoverEnd={() => setHoverO(false)}
        data-hover="true"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative">
            {/* The O Shape */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center mix-blend-difference pointer-events-none"
                animate={{ 
                    opacity: hoverO ? 0 : 1,
                    scale: hoverO ? 0.8 : 1,
                    filter: hoverO ? "blur(10px)" : "blur(0px)"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
               <div className="w-full h-full rounded-full border-[30px] md:border-[50px] border-white bg-black transition-transform duration-500 ease-out group-hover:scale-105" />
            </motion.div>

            {/* The Text: OFFLINE */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ 
                    opacity: hoverO ? 1 : 0, 
                    scale: hoverO ? 1 : 1.2,
                    filter: hoverO ? "blur(0px)" : "blur(10px)"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <span className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase whitespace-nowrap">Offline</span>
            </motion.div>
        </div>
        
        {/* Label for O */}
        <motion.div 
            animate={{ opacity: hoverO ? 0 : 1 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center mix-blend-difference pointer-events-none"
        >
             <span className="block font-mono text-xs tracking-[0.3em] text-white uppercase opacity-80">The Void</span>
             <span className="block font-mono text-[10px] text-ox-red mt-1 opacity-60">[ NULL ]</span>
        </motion.div>
      </motion.div>

      {/* Right Wrapper: THE SYSTEM [X] -> XPERIENCE */}
      <motion.div 
        className="relative group pointer-events-auto"
        style={{ x: moveX_X, y: moveY_X }}
        onHoverStart={() => setHoverX(true)}
        onHoverEnd={() => setHoverX(false)}
        data-hover="true"
      >
         <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative">
            {/* The X Shape */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ 
                    opacity: hoverX ? 0 : 1,
                    scale: hoverX ? 0.8 : 1,
                    rotate: hoverX ? 90 : 0,
                    filter: hoverX ? "blur(10px)" : "blur(0px)"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="relative w-full h-full transition-transform duration-300 ease-out">
                    <div className="absolute top-1/2 left-1/2 w-[120%] h-[30px] md:h-[50px] bg-ox-black -translate-x-1/2 -translate-y-1/2 rotate-45" />
                    <div className="absolute top-1/2 left-1/2 w-[120%] h-[30px] md:h-[50px] bg-ox-black -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                </div>
            </motion.div>

            {/* The Text: XPERIENCE */}
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ 
                    opacity: hoverX ? 1 : 0, 
                    scale: hoverX ? 1 : 1.2,
                    filter: hoverX ? "blur(0px)" : "blur(10px)"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                 <span className="text-5xl md:text-8xl font-black text-ox-black tracking-tighter uppercase whitespace-nowrap">Xperience</span>
            </motion.div>
         </div>

        {/* Label for X */}
        <motion.div 
            animate={{ opacity: hoverX ? 0 : 1 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center pointer-events-none"
        >
             <span className="block font-mono text-xs tracking-[0.3em] text-ox-black uppercase opacity-80">The System</span>
             <span className="block font-mono text-[10px] text-ox-red mt-1 opacity-60">[ EXE ]</span>
        </motion.div>
      </motion.div>
      
    </div>
  );
};