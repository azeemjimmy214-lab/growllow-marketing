
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import Testimonials from '../components/Testimonials';
import AutomationSection from '../components/AutomationSection';
import DigitalMarketing from '../components/DigitalMarketing';
import PaidAdvertising from '../components/PaidAdvertising';
import TikTokManagement from '../components/TikTokManagement';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import ReadyToScale from '../components/ReadyToScale';
import FAQ from '../components/FAQ';
import AIAudit from '../components/AIAudit';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const [showAudit, setShowAudit] = useState(false);

  const handleCall = () => {
    window.location.href = '/consultation';
  };

  const handleAudit = () => {
    setShowAudit(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCtaClick={handleCall} />
      <main className="flex-grow">
        <Hero onStartClick={handleAudit} />
        <ProblemSection />
        <SolutionSection />
        <Testimonials onCtaClick={handleCall} />
        <div className="relative">
          <AutomationSection onCtaClick={handleCall} />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
            <Link to="/services/ai-automation" className="text-[#00C853] font-bold hover:underline flex items-center gap-2">
              Learn more about AI Automation Solutions →
            </Link>
          </div>
        </div>

        <div className="relative">
          <DigitalMarketing onCtaClick={handleCall} />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
            <Link to="/services/digital-marketing" className="text-[#00C853] font-bold hover:underline flex items-center gap-2">
              Learn more about Digital Marketing Excellence →
            </Link>
          </div>
        </div>

        <div className="relative">
          <PaidAdvertising onCtaClick={handleCall} />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
            <Link to="/services/paid-advertising" className="text-[#00C853] font-bold hover:underline flex items-center gap-2">
              Learn more about Paid Advertising (PPC) →
            </Link>
          </div>
        </div>

        <div className="relative">
          <TikTokManagement onCtaClick={handleCall} />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
            <Link to="/services/tiktok-management" className="text-[#00C853] font-bold hover:underline flex items-center gap-2">
              Learn more about TikTok Account Management →
            </Link>
          </div>
        </div>
        <HowItWorks onCtaClick={handleCall} />
        <WhyChooseUs />
        <ReadyToScale onCallClick={handleCall} onAuditClick={handleAudit} />
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

export default LandingPage;
