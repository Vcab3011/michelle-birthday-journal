import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Polaroid, WashiTape } from '../components/ScrapbookUI';

const Home: React.FC = () => {
  const [showCake, setShowCake] = useState(false);
  const [blown, setBlown] = useState(false);

  // Khởi tạo mảng pháo hoa random
  const confetti = useMemo(() => Array.from({ length: 50 }).map(() => ({
    x: (Math.random() - 0.5) * 600,
    y: (Math.random() - 0.5) * 600 - 100,
    rotate: Math.random() * 360,
    scale: Math.random() * 1.5 + 0.5,
    color: ['#fde047', '#f472b6', '#60a5fa', '#34d399', '#a78bfa', '#ffffff'][Math.floor(Math.random() * 6)]
  })), []);

  // Khởi tạo đốm sáng lơ lửng background
  const magicStars = useMemo(() => Array.from({ length: 30 }).map(() => ({
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4,
    size: Math.random() * 1.5 + 0.5
  })), []);

  const handleOpenCake = () => {
    setBlown(false);
    setShowCake(true);
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mt-8 md:mt-0 px-4 overflow-x-hidden">
      
      {/* BACKGROUND SCRAPBOOK */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.5, duration: 3 }} className="absolute top-[5%] left-[2%] w-40 rotate-[-15deg]"><img src="/art1.png" alt="art" className="w-full drop-shadow-sm mix-blend-multiply" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.7, duration: 3.5 }} className="absolute top-[10%] right-[5%] w-32 rotate-[12deg]"><img src="/art2.png" alt="art" className="w-full drop-shadow-sm mix-blend-multiply" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1, duration: 4 }} className="absolute bottom-[20%] left-[8%] w-36 rotate-[-10deg]"><img src="/hani.png" alt="hani background" className="w-full mix-blend-multiply opacity-50" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 1.2, duration: 3 }} className="absolute bottom-[5%] left-[10%] w-48 rotate-[-8deg]"><img src="/art4.png" alt="art" className="w-full drop-shadow-sm mix-blend-multiply" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.5, duration: 4 }} className="absolute bottom-[10%] right-[10%] w-40 rotate-[15deg]"><img src="/kira.png" alt="kira background" className="w-full mix-blend-multiply opacity-50" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.8, duration: 4 }} className="absolute top-[40%] right-[2%] w-48 rotate-[5deg]"><img src="/hanikira.png" alt="hanikira background" className="w-full mix-blend-multiply opacity 1" /></motion.div>
      </div>

      {/* ========================================= */}
      {/* HÌNH ẢNH MEANDHER.PNG ĐÃ ĐƯỢC PHÓNG TO */}
      {/* ========================================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
        animate={{ opacity: 1, scale: 1, rotate: -2 }} 
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }} // Hover vào sẽ phóng to và mất độ nghiêng
        transition={{ delay: 0.3, duration: 2, ease: "easeOut" }} 
        // Tăng size từ w-72 lên w-[450px] cho Desktop
        className="relative w-72 h-72 md:w-[400px] md:h-[400px] shrink-0 z-30 group"
      >
        <Polaroid 
          src="/meandher.png" 
          rotation={0} 
          className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
        />
        
      </motion.div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-20 max-w-full md:max-w-lg">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 2.5 }} className="font-caveat text-ink leading-tight">
          <span className="block text-3xl md:text-6xl text-terracotta/80 rotate-[-2deg]">Happy Birthday</span>
          <span className="block text-5xl md:text-8xl mt-2 rotate-[1deg] font-bold text-terracotta break-words">M¡chelle*✩</span>
        </motion.h1>
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, duration: 2 }} className="mt-8 md:mt-12 bg-journal-bg/60 p-6 md:p-8 organic-border paper-shadow rotate-[1deg] w-full max-w-sm border border-journal-dim relative z-10 backdrop-blur-sm">
          <WashiTape src="/tape1.png" className="-top-3 right-4 w-40 rotate-5" />
          <div className="font-serif text-ink-variant flex flex-col gap-4 relative z-30">
            <p className="text-base md:text-xl leading-relaxed font-medium">¡Feliz Cumpleaños! Que este nuevo año te traiga endless joy, beautiful moments, y muchísimas aventuras.</p>
            <p className="text-lg md:text-2xl italic">"Never lose your whimsy & <span className="sparkle-text font-bold">chispa</span>"</p>
            <button onClick={handleOpenCake} className="mt-4 bg-terracotta/90 hover:bg-terracotta text-white py-3 rounded-md font-mono text-sm tracking-widest shadow-md hover:shadow-lg transition-all hover:-translate-y-1 active:scale-95">
              Click me
            </button>
          </div>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* POPUP BÁNH SINH NHẬT KHỔNG LỒ - ĐÃ FIX MOBILE */}
      {/* ========================================= */}
      <AnimatePresence>
        {showCake && (
          <div 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1e1b2e]/95 backdrop-blur-md overflow-hidden"
            onClick={() => setShowCake(false)}
          >
            {/* NÚT ĐÓNG (X) CHO ĐIỆN THOẠI */}
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl z-[110] p-4"
              onClick={() => setShowCake(false)}
            >
              ✕
            </button>

            {/* ĐỐM SÁNG BAY BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
              {magicStars.map((star, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: '100vh', x: 0 }}
                  animate={{ opacity: [0, 0.8, 0], y: '-20vh', x: Math.random() * 100 - 50 }}
                  transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "linear" }}
                  className="absolute bottom-0 text-yellow-100 blur-[1px]"
                  style={{ left: star.left, transform: `scale(${star.size})` }}
                >
                  ✨
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative flex flex-col items-center z-10"
              onClick={(e) => e.stopPropagation()} // Bấm vào bánh thì không tắt
            >
              
              <AnimatePresence>
                {blown && (
                  <div className="absolute top-1/2 left-1/2 pointer-events-none z-50">
                    {confetti.map((c, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                        animate={{ opacity: 0, x: c.x, y: c.y, scale: c.scale, rotate: c.rotate }}
                        transition={{ duration: 1.5 + Math.random(), ease: "easeOut" }}
                        className="absolute w-4 h-4 md:w-5 md:h-5 rounded-sm shadow-sm"
                        style={{ backgroundColor: c.color }}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>

              <div className="relative flex flex-col items-center justify-center mt-12">
                <img 
                  src="/cake.png" 
                  alt="Birthday Cake" 
                  className="w-72 md:w-[450px] lg:w-[500px] h-auto object-contain drop-shadow-2xl relative z-10" 
                />

                <AnimatePresence>
                  {!blown ? (
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: -10, scale: 0, y: -20 }}
                      className="absolute top-[16%] z-20 flex flex-col items-center justify-end h-12 w-10"
                    >
                      <motion.div 
                        animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.95, 1.05, 0.95] }} 
                        transition={{ repeat: Infinity, duration: 0.5 }} 
                        className="absolute bottom-2 w-20 h-20 bg-yellow-500 rounded-full blur-2xl opacity-50 pointer-events-none" 
                      />
                      <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [-2, 3, -1], skewX: [-2, 2, -1] }}
                        transition={{ repeat: Infinity, duration: 0.15 }}
                        className="relative w-12 h-14 origin-bottom z-10 flex justify-center items-end"
                      >
                        <div className="absolute bottom-0 w-10 h-10 bg-[#e85033] border-[2px] border-[#3d271d] rounded-[50%_0_50%_50%] -rotate-45 shadow-[inset_-2px_2px_4px_rgba(0,0,0,0.2)]" />
                        <div className="absolute bottom-[3px] w-6 h-6 bg-[#fb9b40] border-[1px] border-[#3d271d]/50 rounded-[50%_0_50%_50%] -rotate-45" />
                        <div className="absolute bottom-[6px] w-3 h-3 bg-[#fde047] rounded-[50%_0_50%_50%] -rotate-45" />
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0.8, y: -10, scale: 0.5 }}
                      animate={{ opacity: 0, y: -100, scale: 3, x: [0, -20, 20, -10] }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                      className="absolute top-[16%] w-6 h-6 bg-gray-300 rounded-full blur-md pointer-events-none z-20"
                    />
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 md:mt-12 h-24 flex items-center justify-center z-20">
                {!blown ? (
                  <button 
                    onClick={() => setBlown(true)} 
                    className="bg-white/10 hover:bg-terracotta/80 text-white px-8 py-3 rounded-full backdrop-blur-md font-mono tracking-widest transition-all border border-white/30 hover:scale-105 active:scale-95"
                  >
                    BLOW THE CANDLE 💨
                  </button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.8 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setShowCake(false)} // Bấm vào dòng chữ này cũng tắt luôn
                  >
                    <motion.p 
                      animate={{ textShadow: ["0px 0px 10px rgba(253,224,71,0.5)", "0px 0px 30px rgba(253,224,71,1)", "0px 0px 10px rgba(253,224,71,0.5)"] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="font-caveat text-6xl md:text-7xl text-yellow-100 mb-2 text-center"
                    >
                      Make a wish! ✨
                    </motion.p>
                    <p className="font-mono text-xs text-white/50 uppercase tracking-widest mt-2 animate-bounce">
                      Tap here to close
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;