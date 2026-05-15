import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { letters } from '../data';
import { WashiTape, StickyNote } from '../components/ScrapbookUI';

const Letters: React.FC = () => {
  const [openScan, setOpenScan] = useState<string | null>(null);
  
  // STATE ĐỂ QUẢN LÝ BỨC THƯ BÍ MẬT
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      
      {/* ========================================= */}
      {/* PHẦN TRANG TRÍ BACKGROUND FULL TRANG */}
      {/* ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 0.5, duration: 4 }} className="absolute top-[5%] left-[2%] w-72 rotate-[10deg]"><img src="/hanikira.png" alt="hanikira" className="w-full mix-blend-multiply" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.8, duration: 3 }} className="absolute top-[8%] right-[2%] w-64 rotate-[-90deg]"><img src="/art1.png" alt="lily" className="w-full mix-blend-multiply" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.2, duration: 4 }} className="absolute top-[35%] left-[3%] w-56 rotate-[-10deg]"><img src="/art5.png" alt="art" className="w-full mix-blend-multiply" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.5, duration: 3.5 }} className="absolute top-[50%] right-[4%] w-52 rotate-[15deg]"><img src="/art2.png" alt="hani" className="w-full mix-blend-multiply opacity-60" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.8, duration: 4 }} className="absolute bottom-[10%] left-[5%] w-60 rotate-[12deg]"><img src="/art7.png" alt="art" className="w-full mix-blend-multiply" /></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2.2, duration: 3 }} className="absolute bottom-[5%] right-[5%] w-48 rotate-[-10deg]"><img src="/art3.png" alt="kira" className="w-full mix-blend-multiply opacity-60" /></motion.div>
      </div>

      <div className="py-12 max-w-4xl mx-auto flex flex-col gap-24 relative z-10 px-4">
        
        {/* Page Header */}
        <section className="relative flex flex-col items-center text-center">
          <div className="absolute -top-12 -left-8 w-24 h-6 bg-sage/30 rotate-[-5deg] z-10 washi-tape-mask" />
          <h1 className="font-caveat text-7xl text-terracotta mb-6 z-20">Letters to You</h1>
          <div className="bg-journal-bg p-10 rounded-xl paper-shadow border border-journal-dim rotate-[1deg] max-w-2xl relative">
            <p className="font-serif text-xl md:text-2xl text-ink-variant italic">
              A collection of words unsaid, whispered across time. These pages hold the ink of shared memories and quiet hopes.
            </p>
          </div>
        </section>

        {/* Letters List */}
        <div className="flex flex-col gap-32">
          {letters.map((letter, index) => (
            <motion.article 
              key={letter.id}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-journal-bg p-2 rounded-sm shadow-2xl hover:scale-[1.01] transition-transform duration-500 max-w-3xl mx-auto w-full"
            >
              <WashiTape src={index % 2 === 0 ? "/tape1.png" : "/tape2.png"} className="-top-5 left-1/2 -translate-x-1/2 w-40 -rotate-2 z-30 opacity-90" />
              
              <div className="bg-white p-6 md:p-12 relative overflow-hidden flex flex-col items-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 98%, 98% 100%, 95% 98%, 92% 100%, 89% 98%, 86% 100%, 83% 98%, 80% 100%, 77% 98%, 74% 100%, 71% 98%, 68% 100%, 65% 98%, 62% 100%, 59% 98%, 56% 100%, 53% 98%, 50% 100%, 47% 98%, 44% 100%, 41% 98%, 38% 100%, 35% 98%, 32% 100%, 29% 98%, 26% 100%, 23% 98%, 20% 100%, 17% 98%, 14% 100%, 11% 98%, 8% 100%, 5% 98%, 2% 100%, 0 98%)' }}>
                
                {/* Header ngày tháng */}
                <div className="w-full flex justify-start mb-8 border-b border-journal-dim pb-4 relative z-10">
                   <span className="bg-sage/10 text-ink-variant/80 px-4 py-1 rounded font-mono text-xs rotate-[-1deg]">{letter.date}</span>
                </div>

                {/* 1. HIỂN THỊ ẢNH ĐÍNH KÈM (NẾU CÓ) */}
                {letter.image && (
                  <div 
                    className="group relative w-full flex justify-center pb-8 mb-8 border-b border-journal-dim/30 cursor-pointer" 
                    onClick={() => setOpenScan(letter.image!)}
                  >
                    <img 
                      src={letter.image} 
                      alt={`Illustration or scan for ${letter.date}`} 
                      className="max-w-full h-auto max-h-[400px] object-contain mix-blend-multiply drop-shadow-sm group-hover:opacity-70 transition-opacity duration-300" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="bg-black/70 text-white px-6 py-3 rounded-full font-mono text-sm tracking-widest shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Click to Enlarge 🔍
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. HIỂN THỊ CHỮ GÕ (NẾU CÓ) */}
                {letter.content && (
                  <div className="font-serif text-xl md:text-2xl leading-relaxed text-ink/80 italic w-full text-left relative z-10">
                    {letter.content}
                  </div>
                )}

                {/* Chữ ký */}
                <div className="w-full text-right mt-12 border-t border-journal-dim pt-6 relative z-10">
                  <span className="font-caveat text-5xl text-sage">- Always, Khanh</span>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Quote Card */}
        <motion.section 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="relative ml-auto w-[90%] md:w-[70%] bg-white border-l-8 border-terracotta p-10 paper-shadow rotate-[2deg] mb-24"
        >
          {/* NÚT BÍ MẬT ẨN DƯỚI HÌNH TRÁI TIM */}
          <div 
            className="absolute -top-4 -right-4 w-10 h-10 bg-mustard/40 hover:bg-terracotta/20 rounded-full flex items-center justify-center text-ink/50 hover:text-terracotta shadow-sm rotate-12 cursor-pointer transition-all duration-500 hover:scale-125 z-20"
            onClick={() => setShowSecret(true)}
          >
              ❤️ 
          </div>
          <p className="font-caveat text-3xl md:text-4xl text-ink leading-tight mb-4">
            "I hope you know how much you mean to me ;-;"
          </p>
          <p className="font-mono text-xs text-ink-variant/60 text-right uppercase tracking-[0.2em]">— A thought for midnight</p>
        </motion.section>

      </div>

      {/* POPUP PHÓNG TO BẢN SCAN/ẢNH */}
      <AnimatePresence>
        {openScan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12" onClick={() => setOpenScan(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative max-w-5xl w-full h-full flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-0 right-0 md:-top-6 md:-right-6 text-white hover:text-terracotta bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center transition-colors text-2xl z-50" onClick={() => setOpenScan(null)}>✕</button>
              <img src={openScan} alt="Full Scan" className="max-h-full max-w-full object-contain rounded-sm shadow-2xl bg-[#fdfbf7]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* POPUP BỨC THƯ BÍ MẬT (EASTER EGG) */}
      {/* ========================================= */}
      <AnimatePresence>
        {showSecret && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 md:p-12"
            onClick={() => setShowSecret(false)}
          >
            {/* Đốm sáng ma thuật nền thư bí mật */}
            <div className="absolute inset-0 pointer-events-none opacity-50 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-terracotta/20 blur-[100px] rounded-full"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar rounded-sm" // Thêm overflow-y-auto để có thể scroll nếu nội dung dài
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lời nhắn nhỏ bên ngoài giấy Note */}
              <div className="absolute -top-6 -left-6 z-20"> {/* Điều chỉnh lại vị trí xíu cho đỡ bị che */}
                <StickyNote color="bg-mustard/40" rotate={-10} className="px-4 py-2 text-sm drop-shadow-xl">
                  <span className="font-caveat text-xl text-ink">You found it! 🤫</span>
                </StickyNote>
              </div>

              {/* Bức thư thật sự bên trong */}
              <div className="bg-[#fdfbf7] p-10 md:p-16 rounded-sm shadow-[0_0_50px_rgba(255,255,255,0.1)] relative overflow-hidden mt-6">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/paper-texture.png")' }}></div>
                
                <WashiTape src="/tape1.png" className="-top-3 right-10 w-24 rotate-3 opacity-80" />
                
                <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-terracotta/80 mb-8 text-center border-b border-terracotta/20 pb-4">
                  For Your Eyes Only
                </h2>

                {/* ========================================= */}
                {/* ẢNH THƯ SCAN BÍ MẬT Ở ĐÂY */}
                {/* ========================================= */}
                <div className="w-full flex justify-center mb-10 pb-8 border-b border-journal-dim/20">
                  <img 
                    src="/secret.png" // <--- ẢNH SECRET CỦA ÔNG
                    alt="Secret Handwritten Letter" 
                    className="max-w-full h-auto max-h-[400px] object-contain mix-blend-multiply drop-shadow-md" 
                  />
                </div>

                {/* Nội dung text backup bên dưới */}
                <div className="font-serif text-xl md:text-2xl leading-relaxed text-ink/80 italic space-y-6">
                  <p>
                    Hey... if you're reading this, it means you clicked that little heart. You've always paid attention to the little details, haven't you?
                  </p>
                  <p>
                    I didn't put this in the main letters because some things are just meant to be a quiet whisper between you and me. Thank you for making these past months so incredibly special. 
                  </p>
                  <p>
                    Keep exploring, keep smiling, and never lose that spark of yours.
                  </p>
                </div>

                <div className="mt-16 text-right">
                  <p className="font-caveat text-4xl text-ink">Truly yours,</p>
                  <p className="font-caveat text-5xl text-terracotta mt-2">Khanh ❤️</p>
                </div>
              </div>
              
              <p className="text-center text-white/30 font-mono text-xs mt-8 tracking-widest cursor-pointer hover:text-white transition-colors" onClick={() => setShowSecret(false)}>
                [ click anywhere to close ]
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Letters;