
import React from 'react';

interface HeroProps {
  onStartClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section 
      className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36"
      style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 text-center">
            {/* Caveat text: Small enough to avoid clipping, tight gap to H1 */}
          <div className="mb-3 w-full flex justify-center">
            <p className="caveat-text text-[#002266] text-[min(3vw,26px)] sm:text-[min(3.2vw,30px)] whitespace-nowrap bg-gradient-to-r from-transparent via-[#e8fff0] to-transparent px-2 md:px-12 py-1">
              Losing Sales Because Your Business Isn't Leveraging AI, Paid Traffic & TikTok Properly?
            </p>
          </div>
          
          <h1 className="hero-h1 text-[#002266] mb-8">
            Automate Smarter<br />
            Advertise Better<br />
            Grow Faster
          </h1>

          {/* Body text: Replaced and extended to match previous length, forced to 2 lines on desktop */}
          <p className="body-text text-[#002266]/80 max-w-4xl mx-auto mb-12">
            AI + performance marketing to scale faster and waste less. Our proprietary automation<br className="hidden md:block" /> 
            tech optimizes every advertising dollar in real-time to drive maximum growth.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={onStartClick}
              className="group bg-[#00C853] text-white px-10 py-5 rounded-none btn-text text-xl flex items-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30"
            >
              Start Your Free Strategy Call
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#00C853] animate-pulse"></span>
              <p className="text-sm text-[#002266]/70 font-semibold uppercase tracking-widest">
                30 Days Money Back Guarantee
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
