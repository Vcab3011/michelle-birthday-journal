import React from 'react';
import { motion } from 'motion/react';
import { Polaroid, WashiTape } from '../components/ScrapbookUI';

const Home: React.FC = () => {
  return (
    // Thêm overflow-x-hidden để tránh bị cuộn ngang trên mobile
    <div className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-8 md:mt-0 px-4 overflow-x-hidden">
      
      {/* ========================================= */}
      {/* PHẦN TRANG TRÍ BACKGROUND - XUẤT HIỆN TỪ TỪ (3-4 GIÂY) */}
      {/* ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
        
        {/* Art 1 */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.6 }} 
          transition={{ delay: 0.5, duration: 3, ease: "easeInOut" }}
          className="absolute top-[5%] left-[2%] w-40 rotate-[-15deg]"
        >
          <img src="/art1.png" alt="art" className="w-full drop-shadow-sm mix-blend-multiply" />
        </motion.div>

        {/* Art 2 */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.5 }} 
          transition={{ delay: 0.7, duration: 3.5, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-32 rotate-[12deg]"
        >
          <img src="/art2.png" alt="art" className="w-full drop-shadow-sm mix-blend-multiply" />
        </motion.div>

        {/* Hani */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.5 }} 
          transition={{ delay: 1, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[8%] w-36 rotate-[-10deg]"
        >
          <img src="/hani.png" alt="hani background" className="w-full mix-blend-multiply opacity-50" />
        </motion.div>

        {/* Art 4 */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.7 }} 
          transition={{ delay: 1.2, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-[5%] left-[10%] w-48 rotate-[-8deg]"
        >
          <img src="/art4.png" alt="art" className="w-full drop-shadow-sm mix-blend-multiply" />
        </motion.div>

        {/* Kira */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.6 }} 
          transition={{ delay: 1.5, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-40 rotate-[15deg]"
        >
          <img src="/kira.png" alt="kira background" className="w-full mix-blend-multiply opacity-50" />
        </motion.div>

        {/* Hanikira */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.4 }} 
          transition={{ delay: 1.8, duration: 4, ease: "easeInOut" }}
          className="absolute top-[40%] right-[2%] w-48 rotate-[5deg]"
        >
          <img src="/hanikira.png" alt="hanikira background" className="w-full mix-blend-multiply opacity 1" />
        </motion.div>
      </div>
      {/* ========================================= */}


      {/* Hero Image Section (Bông hoa Lily) - Đã chỉnh size responsive */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="relative w-40 h-40 md:w-72 md:h-72 shrink-0 z-10"
      >
        <Polaroid src="/lily.png" rotation={3} className="drop-shadow-2xl" />
      </motion.div>

      {/* Greeting Section (Phần Text và Ghi chú) */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10 max-w-full md:max-w-lg">
        
        {/* Câu chào và Tên - Chỉnh size chữ cho mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-caveat text-ink leading-tight"
        >
          <span className="block text-3xl md:text-6xl text-terracotta/80 rotate-[-2deg]">Happy Birthday</span>
          <span className="block text-5xl md:text-8xl mt-2 rotate-[1deg] font-bold text-terracotta break-words">
            M¡chelle*✩
          </span>
        </motion.h1>
        
        {/* Tờ giấy note - Thêm w-full */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ delay: 1, duration: 2, ease: "easeOut" }}
          className="mt-8 md:mt-12 bg-journal-bg/50 p-6 md:p-8 organic-border paper-shadow rotate-[2deg] w-full max-w-sm border border-journal-dim relative z-10"
        >
          <WashiTape 
            src="/tape1.png" className="-top-3 right-4 w-40 rotate-5" />
          
          <div className="font-serif text-ink-variant flex flex-col gap-4 relative z-30">
            <p className="text-base md:text-xl leading-relaxed">
              ¡Feliz Cumpleaños! Que este nuevo año te traiga endless joy, beautiful moments, y muchísimas aventuras.
            </p>
            <p className="text-lg md:text-2xl italic">
              "Never lose your whimsy & <span className="sparkle-text font-bold">chispa</span>"
            </p>
          </div>
        </motion.div>

        
      </div>

    </div>
  );
};

export default Home;