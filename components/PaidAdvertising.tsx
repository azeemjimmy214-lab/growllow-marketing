
import React from 'react';

interface PaidAdvertisingProps {
  onCtaClick: () => void;
}

const PaidAdvertising: React.FC<PaidAdvertisingProps> = ({ onCtaClick }) => {
  const adFeatures = [
    'Target the right audience',
    'Reduce cost per acquisition',
    'Improve conversion rates',
    'Scale profitably',
  ];

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            {/* Centered Header Section */}
            <div className="text-center mb-16 md:mb-20">
              <p className="caveat-text text-[#002266] text-xl md:text-2xl mb-2">
                Higher ROI and controlled growth.
              </p>
              <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl mb-6">
                Paid Advertising
              </h2>
              <p className="body-text text-[#002266]/80 max-w-3xl mx-auto">
                We design advertising campaigns that not only reach the right audience but also drive measurable conversions, helping your business grow efficiently.
              </p>
            </div>

            {/* Content Section: 2 Columns */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Campaigns & CTA */}
          <div className="order-2 md:order-1">
            <h3 className="section-h2 text-[#002266] text-2xl md:text-3xl mb-4">
              We Manage And Optimize Paid<br />Campaigns That:
            </h3>
            <p className="text-[#002266]/60 font-semibold mb-8">
              Platforms include Google, Facebook & more.
            </p>
            
            <div className="space-y-3 mb-10">
              {adFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-[#F0FFF6]/10 border border-[#002266]/10 px-6 py-4 rounded-none transition-all hover:border-[#002266]/30 hover:shadow-sm"
                >
                  <p className="text-[#002266] font-semibold text-lg">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <button 
              onClick={onCtaClick}
              className="group bg-[#00C853] text-white px-8 py-4 rounded-none btn-text text-lg flex items-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/20"
            >
              Scale My Ads
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

          {/* Right Column: Professional Illustration */}
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-lg">
              {/* High-quality representative image */}
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
                alt="Business professional with tablet optimizing ads" 
                className="w-full h-auto object-contain rounded-none drop-shadow-2xl grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating Ad symbols simulation (Magnet, Target, Growth) */}
              <div className="absolute -top-10 right-10 w-20 h-20 bg-white shadow-2xl rounded-full flex items-center justify-center border border-gray-100 animate-float">
                <span className="text-3xl">🧲</span>
              </div>
              <div className="absolute top-1/2 -right-6 w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-100 animate-float delay-1000">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="absolute -bottom-6 left-1/4 w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-100 animate-bounce-slow">
                <span className="text-2xl">💰</span>
              </div>
            </div>
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

export default PaidAdvertising;
