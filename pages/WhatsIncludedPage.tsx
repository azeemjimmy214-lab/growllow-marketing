
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import SolutionSection from '../components/SolutionSection';
import ReadyToScale from '../components/ReadyToScale';
import InfrastructureStack from '../components/InfrastructureStack';
import AgencyComparison from '../components/AgencyComparison';
import DeliverablesTimeline from '../components/DeliverablesTimeline';
import FAQ from '../components/FAQ';
import AIAudit from '../components/AIAudit';

const WhatsIncludedPage: React.FC = () => {
  const [showAudit, setShowAudit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCta = () => {
    window.location.href = '/consultation';
  };

  const handleAudit = () => {
    setShowAudit(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCtaClick={handleCta} />
      <main className="flex-grow">
        {/* Hero Section - Identical to Landing/Services for consistency */}
        <section 
          className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36"
          style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 text-center">
                <div className="mb-3 w-full flex justify-center">
                  <p className="caveat-text text-[#002266] text-[min(3vw,26px)] sm:text-[min(3.2vw,30px)] whitespace-nowrap bg-gradient-to-r from-transparent via-[#e8fff0] to-transparent px-2 md:px-12 py-1">
                    The Growllo Ecosystem
                  </p>
                </div>
                
                <h1 className="hero-h1 text-[#002266] mb-8 uppercase">
                  Everything You Need<br />
                  To Scale To<br />
                  <span className="text-[#00C853]">The Moon.</span>
                </h1>

                <p className="body-text text-[#002266]/80 max-w-4xl mx-auto mb-12">
                  We don't just run ads. We build the entire infrastructure required to turn traffic into profit, 
                  automating your sales cycle from the first click to the final conversion.
                </p>

                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <button 
                      onClick={handleAudit}
                      className="group bg-[#00C853] text-white px-10 py-5 rounded-none btn-text text-xl flex items-center gap-3 hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30 w-full sm:w-auto justify-center"
                    >
                      Get Your AI Audit
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#00C853] animate-pulse"></span>
                    <p className="text-sm text-[#002266]/70 font-semibold uppercase tracking-widest">
                      Full Infrastructure Setup Included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown Section */}
        <SolutionSection />

        {/* New: Infrastructure Stack */}
        <InfrastructureStack />
        
        {/* Process Section */}
        <HowItWorks onCtaClick={handleCta} />

        {/* New: Deliverables Timeline */}
        <DeliverablesTimeline />

        {/* New: Agency Comparison */}
        <AgencyComparison />
        
        {/* Why Us Section */}
        <WhyChooseUs />
        
        {/* Final CTA */}
        <ReadyToScale onCallClick={handleCta} onAuditClick={handleAudit} />

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />

      {/* AI Audit Modal */}
      {showAudit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#002266]/80 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-4xl bg-white my-auto">
            <AIAudit onClose={() => setShowAudit(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsIncludedPage;
