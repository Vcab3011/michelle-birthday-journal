import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Home, Book, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
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
          <img src="/lily.png" alt="Flower" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 opacity-50 z-[-10] rotate-[-15deg]">
          <img src="/lily.png" alt="Flower" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 opacity-50 z-[-10] rotate-[-165deg]">
          <img src="/lily.png" alt="Flower" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-50 z-[-10] rotate-[165deg]">
          <img src="/lily.png" alt="Flower" className="w-full h-full object-contain" />
        </div>

        {/* Watercolor Background Images */}
        <div className="absolute top-[10%] left-[-1%] w-64 md:w-96 h-64 md:h-96 opacity-40 mix-blend-multiply rotate-[-15deg] pointer-events-none">
          <img src="/lily.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-[20%] right-[2%] w-72 md:w-[300px] h-72 md:h-[300px] opacity-40 mix-blend-multiply rotate-[15deg] pointer-events-none">
          <img src="/peony1.png" alt="" className="w-full h-full object-contain" />
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
      {/* SỬA 1: Thêm pb-24 md:pb-8 để nội dung không bị che lấp khi lướt xuống đáy */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-24 md:pb-8">
        {children}
      </main>

      {/* Mobile Navigation */}
      {/* SỬA 2: Thu nhỏ padding (px-4 pb-4 pt-3) và bo góc (rounded-t-3xl) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-3 bg-journal-bg/90 backdrop-blur-md paper-shadow rounded-t-3xl">
        {[
          { to: "/", label: "Home", icon: Home },
          { to: "/scrapbook", label: "Scrapbook", icon: Book },
          { to: "/letters", label: "Letters", icon: Mail },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `
              flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300
              ${isActive 
                /* SỬA 3: Giảm độ nảy (scale-105 -translate-y-1) cho đỡ chiếm chỗ */
                ? "bg-tertiary-container text-ink scale-105 -translate-y-1 rotate-[2deg] shadow-md" 
                : "text-ink-variant hover:bg-tertiary-container/10"
              }
            `}
          >
            {({ isActive }) => (
              <>
                {/* SỬA 4: Thu nhỏ icon từ 28/24 xuống 24/20 */}
                <link.icon size={isActive ? 24 : 20} />
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