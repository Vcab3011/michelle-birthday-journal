import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Home, Book, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Watercolor Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-10vw] left-[-10vw] w-[40vw] h-[40vw] rounded-full bg-primary-container opacity-20 blur-[80px]" />
        <div className="absolute bottom-[10vw] right-[-15vw] w-[50vw] h-[50vw] rounded-full bg-secondary-container opacity-15 blur-[80px]" />
        <div className="absolute top-[40%] left-[20vw] w-[30vw] h-[30vw] rounded-full bg-tertiary-container opacity-10 blur-[80px]" />
        
        {/* Floating Doodles */}
        <div className="absolute top-8 left-8 text-mustard/20 text-4xl rotate-12">✿</div>
        <div className="absolute bottom-12 right-12 text-terracotta/20 text-5xl -rotate-12">✦</div>
        <div className="absolute top-1/2 left-4 text-sage/15 text-6xl">🌙</div>
        <div className="absolute top-1/4 right-8 text-mustard/20 text-5xl rotate-45">✨</div>

        {/* 4 Corner Flowers */}
        <div className="absolute top-0 left-0 w-40 h-40 opacity-50 z-[-10] rotate-[15deg]">
          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhdx73EPWKm8JJhD804BWRT_xFbDr8zkRQ1tE0GRqjfez8wbNzIb5CLz0fa80_Wlvd1kgsfnMUBH_zBS7KjDFR_KZAQlHndJO5oyRXLjfj1dpOhzpHWrQTCSJlL05y3hZJEcJXO1DAWLu5n_z-Q_-T-lWvUc2cpCsfV_LcwM1YZu3YnH4J3biQVhc2AwMoGaH3M3fGmX27Jo7ywvlBsxA_DsBfmBMaHYCsDVySeIQGFmioHv6aymECDsaw" alt="Flower" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 opacity-50 z-[-10] rotate-[-15deg]">
          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhdx73EPWKm8JJhD804BWRT_xFbDr8zkRQ1tE0GRqjfez8wbNzIb5CLz0fa80_Wlvd1kgsfnMUBH_zBS7KjDFR_KZAQlHndJO5oyRXLjfj1dpOhzpHWrQTCSJlL05y3hZJEcJXO1DAWLu5n_z-Q_-T-lWvUc2cpCsfV_LcwM1YZu3YnH4J3biQVhc2AwMoGaH3M3fGmX27Jo7ywvlBsxA_DsBfmBMaHYCsDVySeIQGFmioHv6aymECDsaw" alt="Flower" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 opacity-50 z-[-10] rotate-[-165deg]">
          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhdx73EPWKm8JJhD804BWRT_xFbDr8zkRQ1tE0GRqjfez8wbNzIb5CLz0fa80_Wlvd1kgsfnMUBH_zBS7KjDFR_KZAQlHndJO5oyRXLjfj1dpOhzpHWrQTCSJlL05y3hZJEcJXO1DAWLu5n_z-Q_-T-lWvUc2cpCsfV_LcwM1YZu3YnH4J3biQVhc2AwMoGaH3M3fGmX27Jo7ywvlBsxA_DsBfmBMaHYCsDVySeIQGFmioHv6aymECDsaw" alt="Flower" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-50 z-[-10] rotate-[165deg]">
          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhdx73EPWKm8JJhD804BWRT_xFbDr8zkRQ1tE0GRqjfez8wbNzIb5CLz0fa80_Wlvd1kgsfnMUBH_zBS7KjDFR_KZAQlHndJO5oyRXLjfj1dpOhzpHWrQTCSJlL05y3hZJEcJXO1DAWLu5n_z-Q_-T-lWvUc2cpCsfV_LcwM1YZu3YnH4J3biQVhc2AwMoGaH3M3fGmX27Jo7ywvlBsxA_DsBfmBMaHYCsDVySeIQGFmioHv6aymECDsaw" alt="Flower" className="w-full h-full object-contain" />
        </div>

        {/* Watercolor Background Images */}
        <div className="absolute top-[10%] left-[-5%] w-64 md:w-96 h-64 md:h-96 opacity-40 mix-blend-multiply rotate-[-15deg] pointer-events-none">
          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhdx73EPWKm8JJhD804BWRT_xFbDr8zkRQ1tE0GRqjfez8wbNzIb5CLz0fa80_Wlvd1kgsfnMUBH_zBS7KjDFR_KZAQlHndJO5oyRXLjfj1dpOhzpHWrQTCSJlL05y3hZJEcJXO1DAWLu5n_z-Q_-T-lWvUc2cpCsfV_LcwM1YZu3YnH4J3biQVhc2AwMoGaH3M3fGmX27Jo7ywvlBsxA_DsBfmBMaHYCsDVySeIQGFmioHv6aymECDsaw" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-[20%] right-[-10%] w-72 md:w-[500px] h-72 md:h-[500px] opacity-40 mix-blend-multiply rotate-[25deg] pointer-events-none">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuH8wN8RkYvUqG2pZzO0W6H8k0l_z6r_8Q0f1m8x0n4b6v9z8y7x6c5v4b3n2m1l0k9j8h7g6f5d4s3a2q1w0e9r8t7y6u5i4o3p2" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center w-full max-w-7xl mx-auto pt-8 px-6 py-2 relative z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-caveat text-5xl text-terracotta rotate-[-2deg]"
        >
          Michelle's Journal
        </motion.div>
        
        <nav className="flex gap-4">
          {[
            { to: "/", label: "Home", icon: Home },
            { to: "/scrapbook", label: "Scrapbook", icon: Book },
            { to: "/letters", label: "Letters", icon: Mail },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `
                px-6 py-2 rounded-xl text-xl font-caveat transition-all duration-300
                ${isActive 
                  ? "bg-secondary-container/80 text-terracotta rotate-[-1deg] shadow-sm paper-shadow" 
                  : "text-ink-variant hover:text-terracotta hover:rotate-[1deg]"
                }
              `}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-mustard"
        >
          <Sparkles size={32} />
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 bg-journal-bg/80 backdrop-blur-md paper-shadow rounded-t-[40px] pt-4">
        {[
          { to: "/", label: "Home", icon: Home },
          { to: "/scrapbook", label: "Scrapbook", icon: Book },
          { to: "/letters", label: "Letters", icon: Mail },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `
              flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300
              ${isActive 
                ? "bg-tertiary-container text-ink scale-110 -translate-y-2 rotate-[2deg] shadow-md" 
                : "text-ink-variant hover:bg-tertiary-container/10"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <link.icon size={isActive ? 28 : 24} />
                <span className="font-mono text-[10px] mt-1">{link.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
