import React from 'react';
import { motion } from 'motion/react';
import { memories } from '../data';
import { Polaroid, WashiTape, StickyNote } from '../components/ScrapbookUI';

const Scrapbook: React.FC = () => {
  return (
    <div className="py-12 relative">
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block relative">
          <WashiTape className="-top-3 -left-8 w-20 -rotate-6" color="bg-sage/50" />
          <h2 className="font-caveat text-6xl md:text-7xl text-ink bg-journal-bg/80 px-12 py-6 rounded-sm paper-shadow rotate-[1deg] inline-block border border-journal-dim">
            Memories & Moments
          </h2>
          <WashiTape className="-bottom-3 -right-8 w-24 rotate-6" color="bg-secondary-container/50" />
        </div>
        <p className="font-serif text-lg text-ink-variant mt-8 max-w-2xl mx-auto bg-journal-dim/20 p-6 rounded-2xl rotate-[-1deg] backdrop-blur-sm">
          A messy, beautiful collection of our favorite times together. Flipping through these pages brings back all the smiles.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid"
          >
            <Polaroid 
              id={memory.id}
              src={memory.image}
              caption={memory.caption}
              rotation={memory.rotation}
            />
          </motion.div>
        ))}

        {/* Decorative Scraps interleaved */}
        <div className="break-inside-avoid">
          <StickyNote color="bg-mustard/20" rotate={-3} className="my-8">
            <h3 className="font-mono text-xs uppercase tracking-widest border-b border-ink/10 pb-1 mb-2">Note to self</h3>
            <p className="font-caveat text-2xl leading-tight">Always remember to bring the good camera on these trips!</p>
          </StickyNote>
        </div>

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
