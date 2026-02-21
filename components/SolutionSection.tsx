
import React from 'react';

const SolutionSection: React.FC = () => {
  const approachItems = [
    {
      title: 'AI Automation',
      icon: (
        <svg className="w-8 h-8 text-[#00C853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5V2M9 2h6" />
          <rect x="6" y="5" width="12" height="10" rx="0" />
          <circle cx="9" cy="9" r="0.5" fill="currentColor" />
          <circle cx="15" cy="9" r="0.5" fill="currentColor" />
          <path d="M9 12h6" />
        </svg>
      )
    },
    {
      title: 'Conversion-Focused Advertising',
      icon: (
        <svg className="w-8 h-8 text-[#00C853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      )
    },
    {
      title: 'Data-Driven Marketing',
      icon: (
        <svg className="w-8 h-8 text-[#00C853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 8l-5 5-3-3-4 4" />
        </svg>
      )
    },
    {
      title: 'High-Engagement TikTok Strategy',
      icon: (
        <svg className="w-8 h-8 text-[#00C853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="2" width="10" height="20" rx="0" />
          <path d="M11 18h2" />
        </svg>
      )
    }
  ];

  return (
    <section 
      className="py-12 md:py-20"
      style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="text-center mb-12">
              <p className="caveat-text text-[#002266] text-xl md:text-2xl mb-2">
                The Solution
              </p>
              <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl mb-6">
                Growth Powered By AI + Strategy
              </h2>
              <p className="body-text text-[#002266] max-w-2xl mx-auto text-sm md:text-base opacity-90">
                We don't just run marketing campaigns. We create intelligent growth engines that attract, convert, and scale — automatically.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-[#002266] font-extrabold text-xl md:text-2xl mb-6 text-center md:text-left">
                Our Approach Combines:
              </h3>
              
              <div className="border border-white/20 p-4 md:p-12 rounded-none bg-white/40 backdrop-blur-md shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                  {approachItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                      <div className="mb-4 w-16 h-16 border border-[#00C853]/30 flex items-center justify-center rounded-none bg-white transition-all duration-300 group-hover:border-[#00C853] group-hover:shadow-md">
                        {item.icon}
                      </div>
                      <h4 className="text-[#002266] font-extrabold text-xs md:text-sm leading-tight max-w-[160px]">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
