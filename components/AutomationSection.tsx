
import React from 'react';

interface AutomationSectionProps {
  onCtaClick: () => void;
}

const AutomationSection: React.FC<AutomationSectionProps> = ({ onCtaClick }) => {
  const workflowItems = [
    'Capture and nurture leads 24/7',
    'Send follow-ups automatically',
    'Qualify prospects instantly',
    'Sync with your CRM',
    'Reduce operational workload',
  ];

  return (
    <section id="automation-section" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            {/* Header Section - Standardized to match ProblemSection */}
            <div className="text-center mb-16">
              <p className="caveat-text text-[#002266] text-xl md:text-2xl mb-2">
                More sales, less manual effort.
              </p>
              <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl mb-6">
                AI Automation
              </h2>
              <p className="body-text text-[#002266]/80 max-w-3xl mx-auto">
                Growllo transforms your manual work into intelligent, streamlined systems — giving your team the power to focus on what really matters.
              </p>
            </div>

            {/* Content Section: 2 Columns */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Workflows */}
          <div className="order-2 md:order-1">
            <h3 className="section-h2 text-[#002266] text-2xl md:text-3xl mb-8">
              We Build Automated<br />Workflows That:
            </h3>
            
            <div className="space-y-3 mb-10">
              {workflowItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-[#F0FFF6]/30 border border-[#002266]/10 px-6 py-4 rounded-none transition-all hover:border-[#00C853]/40 hover:bg-white hover:shadow-sm"
                >
                  <p className="text-[#002266] font-semibold text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button 
              onClick={onCtaClick}
              className="group bg-[#00C853] text-white px-8 py-4 rounded-none btn-text text-lg flex items-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/20"
            >
              Automate My Business
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

          {/* Right Column: Illustration */}
          <div className="order-1 md:order-2 relative flex justify-center">
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-[#00C853]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative w-full max-w-lg animate-float">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Complex AI and Data Automation Visualization" 
                className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
              />
              
              {/* Abstract floating nodes to simulate the 'ecosystem' look of the inspiration image */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-100 -mr-4 -mt-4">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="absolute bottom-10 left-0 w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-100 -ml-4">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default AutomationSection;
