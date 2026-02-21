
import React from 'react';

interface DigitalMarketingProps {
  onCtaClick: () => void;
}

const DigitalMarketing: React.FC<DigitalMarketingProps> = ({ onCtaClick }) => {
  const marketingPlans = [
    'Strengthen your brand positioning',
    'Increase online visibility',
    'Drive high-intent traffic',
    'Improve engagement across platforms',
  ];

  return (
    <section 
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            {/* Header Section */}
            <div className="text-center mb-16 md:mb-20">
              <p className="caveat-text text-[#002266] text-xl md:text-2xl mb-2">
                A predictable flow of qualified leads.
              </p>
              <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl mb-6">
                Digital Marketing
              </h2>
              <p className="body-text text-[#002266]/80 max-w-3xl mx-auto">
                We help you establish credibility, showcase your expertise, and draw in the audience that truly matters for your business.
              </p>
            </div>

            {/* Content Section: 2 Columns */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Illustration (Matching User Image Layout) */}
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-[#00C853]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative w-full max-w-lg">
              {/* Professional image representing marketing growth */}
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" 
                alt="Marketing Strategist analyzing data" 
                className="w-full h-auto object-contain rounded-none drop-shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating marketing elements simulation */}
              <div className="absolute -top-6 -right-4 w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-100 animate-bounce-slow">
                <span className="text-2xl">📊</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 animate-float delay-700">
                <span className="text-xl">📱</span>
              </div>
              <div className="absolute bottom-4 -left-6 w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100 animate-float">
                <span className="text-xl">🚀</span>
              </div>
              <div className="absolute top-1/4 -left-8 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center border border-gray-100 animate-pulse">
                <span className="text-lg">🎯</span>
              </div>
            </div>
          </div>

          {/* Right Column: Plans & CTA */}
          <div className="order-1 md:order-2">
            <h3 className="section-h2 text-[#002266] text-2xl md:text-3xl mb-8">
              We Create Strategic Marketing<br />Plans That:
            </h3>
            
            <div className="space-y-3 mb-10">
              {marketingPlans.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-[#002266]/10 px-6 py-4 rounded-none transition-all hover:border-[#00C853]/40 hover:shadow-md group"
                >
                  <p className="text-[#002266] font-semibold text-lg flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] group-hover:scale-150 transition-transform"></span>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button 
              onClick={onCtaClick}
              className="group bg-[#00C853] text-white px-8 py-4 rounded-none btn-text text-lg flex items-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/20"
            >
              Grow My Brand
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
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
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5px, -10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default DigitalMarketing;
