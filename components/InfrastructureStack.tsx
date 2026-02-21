
import React from 'react';

const InfrastructureStack: React.FC = () => {
  const stack = [
    {
      title: "AI Sales Agents",
      description: "Custom-trained LLMs that handle lead qualification and appointment setting 24/7.",
      icon: "🤖"
    },
    {
      title: "Omnichannel Tracking",
      description: "Server-side tracking (GTM/CAPI) to bypass iOS 14+ limitations and attribute every dollar.",
      icon: "📊"
    },
    {
      title: "Unified CRM",
      description: "A single source of truth for all your leads, conversations, and revenue data.",
      icon: "🏢"
    },
    {
      title: "Automated Workflows",
      description: "Zapier/Make integrations that sync your entire tech stack seamlessly.",
      icon: "⚡"
    },
    {
      title: "Content Engine",
      description: "AI-assisted creative production for TikTok, Facebook, and Google ads.",
      icon: "🎬"
    },
    {
      title: "Predictive Analytics",
      description: "Data models that forecast your growth and optimize spend before you waste it.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F0FFF6]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="caveat-text text-[#002266] text-xl md:text-2xl mb-2">The Tech Behind The Growth</p>
          <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl mb-6">Your New Infrastructure</h2>
          <p className="body-text text-[#002266]/70 max-w-3xl mx-auto">
            We don't just give you a dashboard. We build a custom growth engine tailored to your specific business model.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/60 backdrop-blur-md p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group rounded-none"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-montserrat font-bold text-[#002266] text-xl mb-4">{item.title}</h3>
              <p className="text-[#002266]/70 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureStack;
