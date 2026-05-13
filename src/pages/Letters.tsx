import React from 'react';
import { motion } from 'motion/react';
import { letters } from '../data';
import { WashiTape } from '../components/ScrapbookUI';

const Letters: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto flex flex-col gap-24">
      {/* Page Header */}
      <section className="relative flex flex-col items-center text-center">
        <div className="absolute -top-12 -left-8 w-24 h-6 bg-sage/30 rotate-[-5deg] z-10 washi-tape-mask" />
        <h1 className="font-caveat text-7xl text-terracotta mb-6 z-20">Letters to You</h1>
        <div className="bg-journal-bg p-10 rounded-xl paper-shadow border border-journal-dim rotate-[1deg] max-w-2xl relative">
          <p className="font-serif text-xl md:text-2xl text-ink-variant italic">
            A collection of words unsaid, whispered across time. These pages hold the ink of shared memories and quiet hopes.
          </p>
          <div className="absolute bottom-[-20px] right-8 w-16 h-16 opacity-30 select-none pointer-events-none">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx7h4b3uq4FraOqPCEGPByrYYSGaIbKmQT4ACqVBek58Dx2M0wUIYtn-4aJQkSSgJ360Bboh5002g9Ptm49Kdl8wjbNs9T6U5REQIQtkwhWiw24vkTHLq6BRbefQJI3seOIQI4GQTpSg4-LQvZy5m5JU1z4sRoKE5WvOjbQlmDTDdAlZ93JdIAt0jUXrGD6kguXHed9n2zeYVpmx2QoTWScPkXyDi-179L_gLuninf8VzfastT4sDewWVnAZs8r8P1rb1TXzMK6tw" alt="" className="w-full h-full object-contain hue-rotate-[60deg]" />
          </div>
        </div>
      </section>

      {/* Letters List */}
      {letters.map((letter, index) => (
        <motion.article 
          key={letter.id}
          initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -1 : 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-journal-bg p-1 rounded-sm shadow-xl hover:scale-[1.01] transition-transform duration-500"
        >
          <WashiTape className="-top-3 left-1/2 -translate-x-1/2 w-16" color="bg-secondary-container/40" />
          
          <div className="bg-white p-8 md:p-16 relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 98% 100%, 95% 96%, 92% 100%, 89% 95%, 86% 100%, 83% 96%, 80% 100%, 77% 95%, 74% 100%, 71% 96%, 68% 100%, 65% 95%, 62% 100%, 59% 96%, 56% 100%, 53% 95%, 50% 100%, 47% 96%, 44% 100%, 41% 95%, 38% 100%, 35% 96%, 32% 100%, 29% 95%, 26% 100%, 23% 96%, 20% 100%, 17% 95%, 14% 100%, 11% 96%, 8% 100%, 5% 95%, 2% 100%, 0 96%)' }}>
            
            {letter.image && (
              <div className="w-full h-64 md:h-[400px] mb-12 opacity-90 mix-blend-multiply overflow-hidden scale-110 -rotate-1 grayscale-[0.2]">
                <img src={letter.image} alt="Handwritten texture" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="flex flex-col gap-8">
              <div className="inline-flex">
                 <span className="bg-sage/20 text-ink-variant px-4 py-1 rounded font-mono text-xs rotate-[2deg]">{letter.date}</span>
              </div>
              
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink/80 italic">
                {letter.content}
              </p>

              <div className="text-right mt-12">
                <span className="font-caveat text-5xl text-sage">- Always</span>
              </div>
            </div>
          </div>

          {/* Floating flower detail */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 opacity-20 pointer-events-none animate-float select-none">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx7h4b3uq4FraOqPCEGPByrYYSGaIbKmQT4ACqVBek58Dx2M0wUIYtn-4aJQkSSgJ360Bboh5002g9Ptm49Kdl8wjbNs9T6U5REQIQtkwhWiw24vkTHLq6BRbefQJI3seOIQI4GQTpSg4-LQvZy5m5JU1z4sRoKE5WvOjbQlmDTDdAlZ93JdIAt0jUXrGD6kguXHed9n2zeYVpmx2QoTWScPkXyDi-179L_gLuninf8VzfastT4sDewWVnAZs8r8P1rb1TXzMK6tw" alt="" className="w-full h-full object-contain hue-rotate-[280deg]" />
          </div>
        </motion.article>
      ))}

      {/* Quote Card */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative ml-auto w-[90%] md:w-[70%] bg-white border-l-8 border-terracotta p-10 paper-shadow rotate-[2deg] mb-24"
      >
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-mustard/40 rounded-full flex items-center justify-center text-ink/50 shadow-sm rotate-12">
           ❤️
        </div>
        <p className="font-caveat text-3xl md:text-4xl text-ink leading-tight mb-4">
          "We are roughly the same age as the universe, if you count the dust."
        </p>
        <p className="font-mono text-xs text-ink-variant/60 text-right uppercase tracking-[0.2em]">— A thought for midnight</p>
      </motion.section>
    </div>
  );
};

export default Letters;
