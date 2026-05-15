import React from 'react';
import { motion } from 'motion/react';
import { memories } from '../data';
import { Polaroid, WashiTape, StickyNote } from '../components/ScrapbookUI';

const Scrapbook: React.FC = () => {
  return (
    <div className="py-12 relative min-h-screen overflow-x-hidden">
      
      {/* ========================================= */}
      {/* PHẦN TRANG TRÍ BACKGROUND CHO SCRAPBOOK */}
      {/* ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
        
        {/* Art 1 - Đẩy xuống góc dưới bên trái */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.4 }} 
          transition={{ delay: 0.5, duration: 3 }}
          className="absolute bottom-[10%] left-[2%] w-48 rotate-[15deg]"
        >
          <img src="/art1.png" alt="art" className="w-full mix-blend-multiply" />
        </motion.div>

        {/* Art 2 - Chuyển sang giữa bên trái */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.5 }} 
          transition={{ delay: 0.8, duration: 3 }}
          className="absolute top-[30%] left-[-2%] w-40 rotate-[-10deg]"
        >
          <img src="/art2.png" alt="art" className="w-full mix-blend-multiply" />
        </motion.div>

        {/* Hani - Đưa lên góc trên bên phải */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.3 }} 
          transition={{ delay: 1.2, duration: 4 }}
          className="absolute top-[15%] right-[5%] w-44 rotate-[20deg]"
        >
          <img src="/hani.png" alt="hani" className="w-full mix-blend-multiply opacity-60" />
        </motion.div>

        {/* Art 4 - Nằm ở giữa trang bên phải */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.6 }} 
          transition={{ delay: 1.5, duration: 3.5 }}
          className="absolute top-[50%] right-[2%] w-56 rotate-[5deg]"
        >
          <img src="/art4.png" alt="art" className="w-full mix-blend-multiply" />
        </motion.div>

        {/* Kira - Nằm ở dưới cùng bên phải */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.4 }} 
          transition={{ delay: 2, duration: 4 }}
          className="absolute bottom-[5%] right-[8%] w-40 rotate-[-15deg]"
        >
          <img src="/kira.png" alt="kira" className="w-full mix-blend-multiply opacity-60" />
        </motion.div>

        {/* Hanikira - Bay ở góc trên bên trái gần Header */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.4 }} 
          transition={{ delay: 2.2, duration: 4 }}
          className="absolute top-[5%] left-[5%] w-52 rotate-[-5deg]"
        >
          <img src="/hanikira.png" alt="hanikira" className="w-full mix-blend-multiply" />
        </motion.div>

      </div>
      {/* ========================================= */}


      {/* Header - z-10 để đè lên trang trí */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block relative">
          <WashiTape src="/tape1.png" className="-top-3 -left-8 w-20 -rotate-6" />
          <h2 className="font-caveat text-6xl md:text-7xl text-ink bg-journal-bg/80 px-12 py-6 rounded-sm paper-shadow rotate-[1deg] inline-block border border-journal-dim">
            Memories & Moments
          </h2>
          <WashiTape src="/tape2.png" className="-bottom-3 -right-8 w-24 rotate-6" color="bg-secondary-container/50" />
        </div>
        <p className="font-serif text-lg text-ink-variant mt-8 max-w-2xl mx-auto bg-journal-dim/20 p-6 rounded-2xl rotate-[-1deg] backdrop-blur-sm relative">
          Tú a través de mi lente. A messy, beautiful collection of my favorite views from the past 5 months. Capture your memories along the way. Porque cada momento contigo es arte.
        </p>
      </div>

      {/* Masonry Grid - z-10 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start relative z-10 px-4">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2, 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1] 
            }} 
            className="break-inside-avoid"
          >
            <Polaroid 
              id={memory.id}
              src={memory.images ? memory.images[0] : memory.image} 
              caption={memory.caption}
              rotation={memory.rotation}
              index={index}
            />
          </motion.div>
        ))}

        {/* Decorative Note inside Grid */}
        <div className="break-inside-avoid">
          <StickyNote color="bg-mustard/20" rotate={-3} className="my-8">
            <h3 className="font-mono text-xs uppercase tracking-widest border-b border-ink/10 pb-1 mb-2">NOTA MENTAL</h3>
            <p className="font-caveat text-2xl leading-tight">Note to self: A lens can capture a smile, but only the heart can capture your magic. Admirando cada versión de ti.</p>
          </StickyNote>
        </div>

        {/* Approved Stamp */}
        <div className="break-inside-avoid flex justify-center py-12 opacity-40">
           <div className="border-4 border-terracotta border-dashed p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center rotate-12">
              <span className="font-mono text-xs uppercase text-terracotta text-center font-bold">Approved<br/>Memories</span>
           </div>
        </div>
      </div>
      
    </div>
  );
};

export default Scrapbook;