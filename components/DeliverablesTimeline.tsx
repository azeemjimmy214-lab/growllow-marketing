
import React from 'react';

const DeliverablesTimeline: React.FC = () => {
  const steps = [
    {
      phase: "Phase 1: Foundation",
      days: "Days 1-7",
      items: ["Infrastructure Audit", "Tracking Setup (CAPI)", "AI Agent Training", "Creative Strategy"]
    },
    {
      phase: "Phase 2: Launch",
      days: "Days 8-14",
      items: ["Campaign Deployment", "Automation Live", "First Creative Batch", "Initial Data Collection"]
    },
    {
      phase: "Phase 3: Optimization",
      days: "Days 15-30",
      items: ["Scaling Winners", "AI Refinement", "Weekly Performance Call", "Revenue Attribution"]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#002266] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="caveat-text text-[#00C853] text-xl md:text-2xl mb-2">The Roadmap To Success</p>
          <h2 className="section-h2 text-white text-4xl md:text-5xl mb-6">Your First 30 Days</h2>
          <p className="body-text text-white/70 max-w-3xl mx-auto">
            We move fast. Here is what you can expect when you join the Growllo ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#00C853]/20 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-white/5 backdrop-blur-xl p-8 border border-white/10 hover:border-[#00C853]/50 transition-all hover:-translate-y-1 shadow-2xl rounded-none">
              <div className="inline-block bg-[#00C853] text-[#002266] font-montserrat font-black px-4 py-1 mb-6 shadow-lg shadow-[#00C853]/20 rounded-none">
                {step.days}
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-6">{step.phase}</h3>
              <ul className="space-y-4">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 font-medium">
                    <span className="text-[#00C853] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesTimeline;
