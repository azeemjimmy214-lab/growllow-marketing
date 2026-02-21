
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AutomationSection from '../components/AutomationSection';
import DigitalMarketing from '../components/DigitalMarketing';
import PaidAdvertising from '../components/PaidAdvertising';
import TikTokManagement from '../components/TikTokManagement';
import ReadyToScale from '../components/ReadyToScale';
import AIAudit from '../components/AIAudit';

const ServicesPage: React.FC = () => {
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
        {/* Redesigned Hero Section */}
        <section 
          className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32"
          style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-4 w-full flex justify-center">
                <p className="caveat-text text-[#002266] text-xl md:text-2xl italic">
                  Our Full Suite
                </p>
              </div>
              
              <h1 className="hero-h1 text-[#002266] mb-8 uppercase leading-[0.9]">
                Performance<br />
                Marketing<br />
                <span className="text-[#00C853]">Redefined.</span>
              </h1>

              <p className="body-text text-[#002266]/80 max-w-2xl mx-auto mb-12 text-lg">
                Explore our specialized services designed to automate your growth, optimize your spend, and dominate your niche using cutting-edge AI technology.
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
                  <button 
                    onClick={() => {
                      const el = document.getElementById('automation-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#002266] border-2 border-[#002266]/10 px-10 py-5 rounded-none btn-text text-xl hover:bg-gray-50 transition-all w-full sm:w-auto shadow-sm"
                  >
                    Explore Services
                  </button>
                </div>
                <p className="text-[10px] md:text-xs text-[#002266]/50 font-bold uppercase tracking-[0.2em]">
                  • 30 Days Money Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Sections with integrated Learn More links */}
        <div className="bg-white">
          <AutomationSection onCtaClick={handleCta} />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-12">
            <Link to="/services/ai-automation" className="text-[#002266]/40 hover:text-[#00C853] text-sm font-bold transition-colors flex items-center gap-2">
              Learn more about AI Automation Solutions ›
            </Link>
          </div>
        </div>

        <div className="bg-[#F0FFF6]/20">
          <DigitalMarketing onCtaClick={handleCta} />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-12">
            <Link to="/services/digital-marketing" className="text-[#002266]/40 hover:text-[#00C853] text-sm font-bold transition-colors flex items-center gap-2">
              Learn more about Digital Marketing Excellence ›
            </Link>
          </div>
        </div>

        <div className="bg-white">
          <PaidAdvertising onCtaClick={handleCta} />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-12">
            <Link to="/services/paid-advertising" className="text-[#002266]/40 hover:text-[#00C853] text-sm font-bold transition-colors flex items-center gap-2">
              Learn more about Paid Advertising (PPC) ›
            </Link>
          </div>
        </div>

        <div className="bg-[#F0FFF6]/20">
          <TikTokManagement onCtaClick={handleCta} />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-12">
            <Link to="/services/tiktok-management" className="text-[#002266]/40 hover:text-[#00C853] text-sm font-bold transition-colors flex items-center gap-2">
              Learn more about TikTok Account Management ›
            </Link>
          </div>
        </div>
        
        <ReadyToScale onCallClick={handleCta} onAuditClick={handleAudit} />
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

export default ServicesPage;
