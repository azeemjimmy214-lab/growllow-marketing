
import React from 'react';

interface TikTokManagementProps {
  onCtaClick: () => void;
}

const TikTokManagement: React.FC<TikTokManagementProps> = ({ onCtaClick }) => {
  const tiktokStrategies = [
    'Creating viral-ready content strategies',
    'Optimizing profiles for conversion',
    'Running TikTok ads effectively',
    'Tracking performance metrics',
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
                Rapid audience growth + real business impact.
              </p>
              <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl mb-6">
                TikTok Account Management
              </h2>
              <p className="body-text text-[#002266]/80 max-w-3xl mx-auto">
                We help you capture audience interest and convert it into paying customers, boosting your revenue through smart, data-driven strategies.
              </p>
            </div>

            {/* Content Section: 2 Columns */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Illustration */}
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-[#00C853]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative w-full max-w-lg">
              {/* Image representing TikTok/Content Strategy */}
              <img 
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop" 
                alt="TikTok logo and content management visualization" 
                className="w-full h-auto object-contain rounded-none drop-shadow-2xl grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Decorative floating elements inspired by the graphic in the user image */}
              <div className="absolute -top-10 -right-6 w-24 h-24 bg-white/80 backdrop-blur-sm shadow-xl rounded-none p-4 border border-white flex flex-col items-center justify-center animate-float">
                <span className="text-3xl mb-1">📅</span>
                <span className="text-[10px] font-bold text-[#002266]/40 uppercase">Planner</span>
              </div>
              
              <div className="absolute bottom-10 -left-10 w-20 h-20 bg-white shadow-2xl rounded-full flex items-center justify-center border border-gray-100 animate-bounce-slow">
                <span className="text-3xl">🔥</span>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-12 h-12 bg-[#00C853] shadow-lg rounded-full flex items-center justify-center border-4 border-white animate-pulse">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.26-.18-.38-.28.01 1.43.01 2.86.01 4.29 0 3.24-1.18 6.51-3.6 8.7-2.73 2.54-7.06 3.16-10.43 1.55-3.32-1.54-5.39-5.37-4.83-9 .49-3.23 3.12-6.07 6.35-6.66 1.1-.2 2.21-.13 3.3.1V11.2c-.65-.18-1.34-.23-2.02-.12-1.63.26-3.04 1.54-3.4 3.14-.38 1.65.34 3.51 1.76 4.47 1.48 1.01 3.63.85 4.96-.34 1.11-1.01 1.65-2.58 1.6-4.06.01-4.78.01-9.56.01-14.34z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Strategies & CTA */}
          <div className="order-1 md:order-2">
            <h3 className="section-h2 text-[#002266] text-2xl md:text-3xl mb-8">
              We Help Brands Dominate<br />TikTok By:
            </h3>
            
            <div className="space-y-3 mb-10">
              {tiktokStrategies.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-[#002266]/10 px-6 py-4 rounded-none transition-all hover:border-[#002266]/30 hover:shadow-md group"
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default TikTokManagement;
