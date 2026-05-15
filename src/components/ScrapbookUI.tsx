import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface WashiTapeProps {
  className?: string;
  src?: string; 
  color?: string; 
}

export const WashiTape: React.FC<WashiTapeProps> = ({ className = "", src, color = "bg-secondary-container/40" }) => {
  if (src) return <img src={src} alt="Tape" className={`absolute pointer-events-none z-20 ${className}`} />;
  return <div className={`washi-tape-mask absolute h-6 pointer-events-none z-20 mix-blend-multiply ${color} ${className}`} />;
};

interface PolaroidProps {
  id?: string;
  src: string;
  caption?: string;
  rotation?: number;
  className?: string;
  small?: boolean;
  index?: number; // Dùng để tính toán tape chẵn lẻ
}

export const Polaroid: React.FC<PolaroidProps> = ({ id, src, caption, rotation = 0, className = "", small = false, index = 0 }) => {
  const isVideo = src?.toLowerCase().endsWith('.mp4') || src?.toLowerCase().endsWith('.webm');
  // Tự động đổi tape: chẵn tape1, lẻ tape2
  const tape = index % 2 === 0 ? "/tape1.png" : "/tape2.png";

  const content = (
    <div className={`bg-white paper-shadow border border-journal-dim/50 transition-all duration-500 ease-out ${small ? 'p-3 pb-8' : 'p-4 pb-12'} ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
      <WashiTape src={tape} className="-top-3 left-1/2 -translate-x-1/2 w-24 -rotate-2 z-30" />
      <div className="overflow-hidden bg-white">
        {isVideo ? (
          <video src={src} autoPlay loop muted playsInline className="w-full h-auto object-contain grayscale-[0.1] hover:grayscale-0 transition-all duration-700 pointer-events-none" />
        ) : (
          <img src={src} alt={caption || "Memory"} className="w-full h-auto object-contain grayscale-[0.1] hover:grayscale-0 transition-all duration-700" />
        )}
      </div>
      {caption && <div className={`mt-4 font-caveat text-center text-ink ${small ? 'text-lg' : 'text-2xl'}`}>{caption}</div>}
    </div>
  );

  if (id) {
    return (
      <Link to={`/memory/${id}`} className="block transform hover:-translate-y-2 transition-all duration-300 relative">
        {content}
      </Link>
    );
  }
  return <div className="relative">{content}</div>;
};

// ... Giữ nguyên StickyNote của ông ở dưới
export const StickyNote: React.FC<{children: React.ReactNode, color?: string, rotate?: number, className?: string}> = ({ children, color = "bg-primary-container/40", rotate = -2, className = "" }) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`p-6 rounded-lg paper-shadow border border-ink/5 backdrop-blur-sm relative ${color} ${className}`} style={{ rotate: `${rotate}deg` }}>
    <div className="absolute -top-2 left-4 w-4 h-4 bg-terracotta rounded-full shadow-inner z-20 opacity-80" />
    {children}
  </motion.div>
);