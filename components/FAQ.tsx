import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "How quickly can I see results?",
    answer: "Most clients see improvements within 30–60 days, depending on budget and industry. Our AI systems begin optimizing data immediately, but the learning phase typically yields significant scaling opportunities after the first month."
  },
  {
    question: "Which platforms do you manage?",
    answer: "We specialize in TikTok, Facebook, and Google Ads. We focus on TikTok-first growth while managing cross-channel ecosystems for maximum ROI."
  },
  {
    question: "Do you guarantee ROI?",
    answer: "We guarantee a data-backed approach and offer a 30-day satisfaction period. Our tech is designed to stop wasted spend faster than any human team."
  },
  {
    question: "Is this suitable for small businesses?",
    answer: "Yes. We work with high-growth startups and 7-figure brands. Our AI infrastructure manages smaller budgets efficiently while allowing for massive scale."
  },
  {
    question: "What makes Growllo different?",
    answer: "We are AI-native. While traditional agencies make manual adjustments, our systems optimize bids and creatives 24/7 for maximum efficiency."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section 
      className="py-24 border-t border-[#00C853]/5"
      style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Title */}
          <div className="lg:col-span-4">
            <p className="caveat-text text-[#002266] text-xl md:text-2xl mb-2">
              FAQ
            </p>
            <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl leading-tight">
              Frequently<br />
              Asked<br />
              Questions
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`w-full bg-white border border-gray-100 transition-all duration-300 ${isActive ? 'shadow-xl shadow-[#00C853]/5' : ''}`}
                >
                  <button 
                    onClick={() => setActiveIndex(isActive ? null : idx)}
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left group"
                  >
                    <span className={`text-lg md:text-xl font-montserrat font-bold transition-colors duration-300 ${isActive ? 'text-[#00C853]' : 'text-[#002266]'}`}>
                      {item.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                      <ChevronDown className={`w-5 h-5 ${isActive ? 'text-[#00C853]' : 'text-[#002266]'}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 md:px-6 md:pb-8">
                          <p className="text-[#002266]/60 text-base md:text-lg leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
