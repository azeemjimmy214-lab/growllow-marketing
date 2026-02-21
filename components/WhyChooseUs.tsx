
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const coreBenefits = [
    {
      title: 'AI-Powered Systems',
      description: 'Intelligent automation that works 24/7'
    },
    {
      title: 'Performance-Driven Campaigns',
      description: 'Data-backed strategies focused on measurable growth'
    },
    {
      title: 'Clear Reporting & Analytics',
      description: 'Transparent insights with real-time performance tracking'
    },
    {
      title: 'Continuous Testing & Scaling',
      description: 'Ongoing optimization to maximize conversions'
    }
  ];

  const imagineOutcomes = [
    '30–60% lower ad costs',
    'Faster lead response time',
    'Higher conversion rates',
    'Automated follow-ups',
    'A marketing system that works 24/7'
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            {/* Top Section Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-24">
          
          {/* Left: Branding & Intro */}
          <div className="space-y-8">
            <div>
              <p className="caveat-text text-[#002266] text-3xl md:text-4xl mb-3">
                We Don't Guess. We Optimize.
              </p>
              <h2 className="section-h2 text-[#002266] text-4xl md:text-6xl leading-[1.1] mb-6">
                Why Clients<br />Choose Growllo?
              </h2>
              <p className="body-text text-[#002266]/70 max-w-md leading-relaxed">
                Success isn't measured by how many people saw your brand — it's measured by how many became your customers.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 border border-[#00C853] px-6 py-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00C853]"></span>
              </span>
              <span className="text-[#00C853] font-bold tracking-widest text-sm uppercase font-inter">
                Available for new Q4 Project
              </span>
            </div>
          </div>

          {/* Right: Core Benefits List */}
          <div className="space-y-10 py-4">
            {coreBenefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 group">
                <span className="text-[#002266] text-2xl font-bold mt-[-2px]">•</span>
                <div>
                  <h4 className="font-montserrat font-bold text-[#002266] text-xl md:text-2xl mb-1 group-hover:text-[#00C853] transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-[#002266]/60 font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Imagine Box (Styled to match Problem Section) */}
          <div 
            className="rounded-none p-8 md:p-12 shadow-sm border border-[#00C853]/10"
            style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
          >
            <h3 className="font-montserrat font-extrabold text-[#002266] text-3xl mb-10">
              Imagine:
            </h3>
            
            <ul className="space-y-6">
              {imagineOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#002266] group-hover:bg-[#00C853] transition-all duration-300"></div>
                  <p className="text-[#002266] font-semibold text-lg md:text-xl opacity-90">
                    {outcome}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Impact Statement */}
          <div className="md:pl-8">
            <p className="caveat-text text-[#002266] text-3xl md:text-4xl italic mb-4">
              That's the Growllo difference.
            </p>
            <h2 className="section-h2 text-[#002266] text-5xl md:text-7xl leading-none tracking-tighter">
              Results<br />That Matter
            </h2>
          </div>

        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
