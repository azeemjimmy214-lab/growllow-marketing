
import React from 'react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

const steps = [
  {
    title: 'Attract',
    description: 'We bring the right audience using ads, content, and targeting.',
    position: 'top'
  },
  {
    title: 'Capture',
    description: 'AI systems collect leads and engage them instantly.',
    position: 'bottom'
  },
  {
    title: 'Convert',
    description: 'Optimized campaigns turn prospects into paying customers.',
    position: 'top'
  },
  {
    title: 'Scale',
    description: 'We analyze performance and scale what works.',
    position: 'bottom'
  }
];

const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  return (
    <section 
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0FFF6 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <p className="caveat-text text-[#002266] text-2xl md:text-3xl mb-2">
            Growth becomes predictable.
          </p>
          <h2 className="section-h2 text-[#002266] text-4xl md:text-6xl mb-6">
            How Growllo Works
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-20 md:mb-24">
          {/* Connecting Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[6px] bg-[#E8F5EE] -translate-y-1/2 z-0 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Mobile Line Piece */}
                <div className="md:hidden w-1 h-12 bg-[#E8F5EE] mb-2"></div>

                {/* Top Content with smaller gap below */}
                <div className={`md:h-28 mb-2 md:mb-4 flex flex-col justify-end transition-all duration-500 hover:-translate-y-1 ${step.position === 'bottom' ? 'md:invisible order-2 md:order-none' : 'order-1 md:order-none'}`}>
                  {step.position === 'top' && (
                    <div className="max-w-[220px]">
                      <h3 className="font-montserrat font-bold text-2xl text-[#002266] mb-1">{step.title}</h3>
                      <p className="text-[#002266]/70 text-sm md:text-base leading-relaxed">{step.description}</p>
                    </div>
                  )}
                </div>

                {/* Step Marker Dot with Blinking Animation and tighter vertical gap */}
                <div className="relative flex items-center justify-center my-2 md:my-4 order-3 md:order-none">
                  <div className="w-10 h-10 rounded-full bg-[#00C853]/20 flex items-center justify-center animate-pulse-slow">
                    <div className="w-5 h-5 rounded-full bg-[#00C853] shadow-[0_0_15px_rgba(0,200,83,0.8)] animate-blink"></div>
                  </div>
                </div>

                {/* Bottom Content with smaller gap above */}
                <div className={`md:h-28 mt-2 md:mt-4 flex flex-col justify-start transition-all duration-500 hover:translate-y-1 ${step.position === 'top' ? 'md:invisible order-4 md:order-none' : 'order-4 md:order-none'}`}>
                  {step.position === 'bottom' && (
                    <div className="max-w-[220px]">
                      <h3 className="font-montserrat font-bold text-2xl text-[#002266] mb-1">{step.title}</h3>
                      <p className="text-[#002266]/70 text-sm md:text-base leading-relaxed">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button 
            onClick={onCtaClick}
            className="group bg-[#00C853] text-white px-10 py-5 rounded-none btn-text text-xl flex items-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30"
          >
            Automate My Business
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
        </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        .animate-blink {
          animation: blink 1.5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default HowItWorks;
