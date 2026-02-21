
import React from 'react';

const FEATURES = [
  {
    title: 'AI Media Buying',
    description: 'Our bots handle bid adjustments 24/7, ensuring you never overpay for a click.',
    icon: '🤖'
  },
  {
    title: 'TikTok Viral Forge',
    description: 'Data-driven creative testing that finds winners in 48 hours instead of 2 weeks.',
    icon: '📈'
  },
  {
    title: 'Precision Retargeting',
    description: 'Identify high-intent users and serve dynamic ads that actually convert.',
    icon: '🎯'
  }
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-h2 text-4xl md:text-5xl text-[#002266] mb-4">
            Why Growllo Scale?
          </h2>
          <p className="body-text text-lg text-[#002266]/70 max-w-2xl mx-auto">
            Traditional agencies are slow. We use artificial intelligence to move at the speed of the internet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-none bg-[#F0FFF4] border border-[#00C853]/10 hover:border-[#00C853]/40 transition-colors group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {feature.icon}
              </div>
              <h3 className="sub-h3 text-xl mb-4 text-[#002266]">{feature.title}</h3>
              <p className="body-text text-[#002266]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
