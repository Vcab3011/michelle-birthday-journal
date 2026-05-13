import React from 'react';
import { motion } from 'motion/react';
import { Polaroid, WashiTape } from '../components/ScrapbookUI';

const Home: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 mt-8 md:mt-0">
      {/* Hero Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative w-64 h-64 md:w-96 md:h-96"
      >
        <Polaroid 
          src="https://lh3.googleusercontent.com/aida/ADBb0uhdx73EPWKm8JJhD804BWRT_xFbDr8zkRQ1tE0GRqjfez8wbNzIb5CLz0fa80_Wlvd1kgsfnMUBH_zBS7KjDFR_KZAQlHndJO5oyRXLjfj1dpOhzpHWrQTCSJlL05y3hZJEcJXO1DAWLu5n_z-Q_-T-lWvUc2cpCsfV_LcwM1YZu3YnH4J3biQVhc2AwMoGaH3M3fGmX27Jo7ywvlBsxA_DsBfmBMaHYCsDVySeIQGFmioHv6aymECDsaw"
          rotation={3}
          className="drop-shadow-2xl z-10"
        />
      </motion.div>

      {/* Greeting Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-caveat text-ink leading-tight"
        >
          <span className="block text-4xl md:text-6xl text-terracotta/80 rotate-[-2deg]">Happy Birthday</span>
          <span className="block text-7xl md:text-9xl mt-2 rotate-[1deg] font-bold text-terracotta">Michelle</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-journal-bg/50 p-8 organic-border paper-shadow rotate-[2deg] max-w-sm border border-journal-dim relative z-10"
        >
          <WashiTape className="-top-3 right-4 w-20 rotate-12" color="bg-mustard/40" />
          <p className="font-serif text-xl md:text-2xl text-ink-variant italic">
            "Never lose your whimsy & <span className="sparkle-text font-bold">sparkle</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
