
import React from 'react';

const ProblemSection: React.FC = () => {
  const struggles = [
    'Inconsistent leads?',
    'High ad costs with low ROI?',
    'Manual follow-ups losing potential customers?',
    'TikTok content that doesn’t convert?',
    'No clear data on what’s actually working?',
  ];

  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="text-center md:text-left mb-12">
              <p className="caveat-text text-[#002266] text-xl md:text-2xl mb-2">
                Most businesses waste time and money because they lack a system.
              </p>
              <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl">
                Is Your Business Struggling With...
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Struggles List Box with requested Gradient and zero border radius */}
          <div 
            className="rounded-none p-8 md:p-12 shadow-sm border border-[#00C853]/10"
            style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
          >
            <ul className="space-y-6">
              {struggles.map((struggle, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#002266] group-hover:bg-[#00C853] transition-colors"></div>
                  <p className="text-[#002266] font-semibold text-lg md:text-xl opacity-90">
                    {struggle}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Illustration Area */}
          <div className="relative flex justify-center items-center p-4">
            <div className="relative w-full max-w-lg">
              {/* Background decorative glow matching the brand colors */}
              <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-[#00C853]/10 to-transparent rounded-full blur-[80px] transform scale-125"></div>
              
              {/* Using a high-quality vector-style image that matches the "worried man at laptop" prompt */}
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern 2D illustration of a man looking worried and stressed, sitting with a laptop" 
                className="w-full h-auto rounded-none shadow-2xl border-4 border-white object-cover aspect-square md:aspect-[4/3]"
              />

              {/* Interactive Floating Badge */}
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white p-5 rounded-none shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Inefficiency Detected</p>
                  <p className="text-[#002266] font-bold">Wasted Ad Spend</p>
                </div>
              </div>
              
              {/* Floating Element: AI Optimization Icon */}
              <div className="absolute -top-6 -right-6 bg-[#00C853] p-4 rounded-full shadow-lg border-4 border-white hidden sm:block">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
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
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default ProblemSection;
