import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Edit3, Share2, Heart } from 'lucide-react';
import { memories } from '../data';
import { Polaroid, WashiTape } from '../components/ScrapbookUI';

const MemoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const memory = memories.find(m => m.id === id);

  if (!memory) return <div>Memory not found</div>;

  // Lấy danh sách ảnh từ mảng `images` trong data.ts. 
  // Nếu bài viết cũ chỉ có `image`, nó sẽ fallback về mảng 1 phần tử để không bị lỗi.
  const displayImages = memory.images && memory.images.length > 0 
    ? memory.images 
    : [memory.image];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12"
    >
      {/* Top Controls */}
      <nav className="flex justify-between items-center mb-12">
        <Link 
          to="/scrapbook"
          className="group flex items-center gap-2 px-6 py-3 bg-journal-bg/80 backdrop-blur-sm -rotate-2 hover:rotate-0 transition-all rounded-sm paper-shadow border border-journal-dim relative"
        >
          <WashiTape className="-top-3 left-1/2 -translate-x-1/2 w-16" src="/tape1.png" />
          <ArrowLeft size={18} className="text-terracotta" />
          <span className="font-mono text-xs uppercase tracking-wider text-terracotta">Back to Scrapbook</span>
        </Link>

        <div className="flex gap-4">
          <button className="p-4 bg-journal-dim/30 hover:bg-journal-dim/50 rounded-full transition-colors">
            <Edit3 size={20} className="text-ink-variant" />
          </button>
          <button className="p-4 bg-journal-dim/30 hover:bg-journal-dim/50 rounded-full transition-colors">
            <Share2 size={20} className="text-ink-variant" />
          </button>
        </div>
      </nav>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Left: Cột chứa nhiều Polaroid (Sửa ở đây) */}
        <div className="lg:col-span-5 w-full flex flex-col gap-12 sticky top-24">
          {displayImages.map((imgSrc, index) => (
            <motion.div 
              key={index}
              // Thay đổi góc xoay luân phiên để nhìn giống ảnh dán lộn xộn tự nhiên
              initial={{ rotate: index % 2 === 0 ? -5 : 5, scale: 0.9 }}
              animate={{ rotate: index % 2 === 0 ? 2 : -2, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="relative flex justify-center w-full"
            >
              {/* Thay đổi tape luân phiên */}
              <WashiTape 
                className="-top-3 left-1/2 -translate-x-1/2 w-32 -rotate-1" 
                src={index % 2 === 0 ? "/tape1.png" : "/tape2.png"} 
              />
              
              <Polaroid src={imgSrc} rotation={0} className="max-w-md w-full" />
              
              {/* Chỉ hiện sparkles ở tấm ảnh cuối cùng cho đỡ rối */}
              {index === displayImages.length - 1 && (
                <div className="absolute -bottom-10 -left-8 text-tertiary-container/30 rotate-12">
                  <Sparkles size={64} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right: Journal Entry (Giữ nguyên) */}
        <article className="lg:col-span-7 w-full relative">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-journal-bg p-8 md:p-16 paper-shadow border-l-8 border-sage/20 -rotate-1 relative overflow-hidden"
          >
            {/* Page Hole Punches Metaphor */}
            <div className="absolute left-[-2px] top-0 bottom-0 flex flex-col justify-around py-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-journal-dim shadow-inner -translate-x-full border border-ink/5" />
              ))}
            </div>

            <time className="font-mono text-xs text-ink-variant/60 block mb-4 tracking-widest">{memory.date}</time>
            <h1 className="font-caveat text-5xl md:text-6xl text-sage font-bold leading-tight mb-12">
              {memory.caption.replace(/☕️|🌿|✨🎂|🐾/, '')}
            </h1>

            <div className="font-serif text-xl md:text-2xl leading-relaxed text-ink space-y-8">
              {memory.content.split('\n\n').map((para, i) => (
                <p key={i} className={para.startsWith('"') ? "italic border-l-4 border-mustard/20 pl-8 py-2" : ""}>
                   {i === 0 && !para.startsWith('"') ? (
                     <>
                       <span className="text-6xl font-caveat font-bold text-terracotta float-left mr-4 mt-2 leading-[0.8]">
                         {para.charAt(0)}
                       </span>
                       {para.slice(1)}
                     </>
                   ) : para}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-6 py-12 opacity-30">
              <div className="h-[1px] flex-grow bg-ink/20" />
              <Heart size={24} className="text-terracotta" />
              <div className="h-[1px] flex-grow bg-ink/20" />
            </div>

            <footer className="flex flex-wrap gap-3">
              {memory.tags.map(tag => (
                <span key={tag} className="px-5 py-2 bg-secondary-container/20 text-terracotta font-mono text-xs rounded-sm rotate-1 border border-terracotta/5">
                  #{tag}
                </span>
              ))}
            </footer>

            {/* Handwritten Note Accent */}
            <div className="absolute -bottom-4 -right-2 md:right-8 w-48 p-6 bg-mustard/10 backdrop-blur-sm border border-mustard/10 rotate-6 paper-shadow">
               <p className="font-caveat text-xl text-terracotta leading-tight">
                 Must remember how the light felt right then...
               </p>
            </div>
          </motion.div>
        </article>
      </div>
    </motion.div>
  );
};

const Sparkles = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707.707" />
  </svg>
);

export default MemoryDetail;