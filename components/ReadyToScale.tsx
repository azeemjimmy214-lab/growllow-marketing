
import React from 'react';

interface ReadyToScaleProps {
  onCallClick: () => void;
  onAuditClick: () => void;
}

const ReadyToScale: React.FC<ReadyToScaleProps> = ({ onCallClick, onAuditClick }) => {
  return (
    <section className="bg-[#002266] py-24 md:py-32 relative overflow-hidden">
      {/* Background subtle texture/glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            {/* Main Heading */}
        <h2 className="font-montserrat font-extrabold text-white text-4xl md:text-6xl mb-6 tracking-tight">
          Ready To Scale Smarter?
        </h2>
        
        {/* Sub-text */}
        <p className="body-text text-white/90 max-w-3xl mx-auto mb-12 font-medium">
          Stop wasting money on random marketing tactics — focus on data-driven strategies that deliver measurable growth
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onCallClick}
            className="group w-full sm:w-auto bg-[#00C853] text-white px-8 py-5 rounded-none btn-text text-lg flex items-center justify-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-black/20"
          >
            Book Your Free Strategy Call
            <span className="text-2xl leading-none group-hover:translate-x-1 transition-transform">»</span>
          </button>
          
          <button 
            onClick={onAuditClick}
            className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-5 rounded-none btn-text text-lg hover:bg-white/10 transition-all transform hover:scale-105"
          >
            Get a Free Growth Audit
          </button>
        </div>

        {/* Guarantee subtext */}
        <div className="mt-8 flex items-center justify-center gap-2 opacity-50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]"></span>
          <p className="text-white text-xs font-bold uppercase tracking-widest">
            Limited Q4 Openings Remaining
          </p>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScale;
