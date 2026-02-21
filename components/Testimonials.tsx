
import React from 'react';

const TESTIMONIALS = [
  {
    name: 'David Steel',
    role: 'Partner, Financial Services Company',
    content: 'Growllo helped us scale faster and stay ahead of competitors with smart automation and data-driven strategies. It\'s like having a growth engine running 24/7.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Brian Leonard',
    role: 'Physician, Aesthetic Surgery Clinic',
    content: 'Growllo streamlined our automation, optimized our ads, and scaled our digital presence effortlessly. We just see the results — a true growth partner.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Rachel Gresswell',
    role: 'Personal Brand',
    content: 'Our visibility and ads weren\'t generating the right leads. Growllo restructured our automation and ad strategy — resulting in stronger rankings, consistent leads, and a 74% increase in sales.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  }
];

interface TestimonialsProps {
  onCtaClick: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onCtaClick }) => {
  return (
    <section 
      className="py-20 md:py-32"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0FFF6 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl max-w-4xl mx-auto mb-4 leading-tight">
                Top E-Commerce Brands Rely On Growllo For Smarter Growth & Automation
              </h2>
              <p className="caveat-text text-[#002266] text-xl md:text-2xl">
                See For Yourself...
              </p>
            </div>

            {/* Staggered Grid Layout */}
            <div className="grid md:grid-cols-3 gap-12 mb-28 items-start">
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white px-8 pt-16 pb-10 relative shadow-xl border-t-4 border-[#00C853] rounded-none transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col min-h-[340px] md:min-h-[380px]
                    ${idx === 1 ? 'md:translate-y-16' : 'md:-translate-y-8'}
                  `}
                >
                  {/* Profile Image Box */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-none border-4 border-white overflow-hidden shadow-lg bg-gray-100">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="text-center flex flex-col h-full">
                    <h4 className="font-extrabold text-[#002266] text-xl mb-1">{t.name}</h4>
                    <p className="text-[#002266]/60 text-sm font-semibold mb-3 uppercase tracking-wider">{t.role}</p>
                    
                    {/* Star Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#00C853]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="flex-grow flex items-center justify-center">
                      <p className="body-text text-[#002266]/80 text-base leading-relaxed italic">
                        "{t.content}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <button 
                onClick={onCtaClick}
                className="group bg-[#00C853] text-white px-12 py-5 rounded-none btn-text text-xl flex items-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30"
              >
                Book a Free Consultation
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
              <p className="mt-4 text-xs text-[#002266]/50 font-bold uppercase tracking-widest border-t border-[#002266]/10 pt-4 w-full max-w-xs text-center">
                30 Days Money Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
