
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReadyToScale from '../components/ReadyToScale';
import FAQ from '../components/FAQ';
import AIAudit from '../components/AIAudit';

const PaidAdvertisingPage: React.FC = () => {
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

  const benefits = [
    {
      title: "Precision Targeting For High-Intent Leads",
      description: "We don't just cast a wide net. Our systems identify and target users who are actively searching for your solutions, ensuring your ad spend is focused on the highest-probability conversions.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
      imageFirst: false
    },
    {
      title: "Data-Driven Optimization & Scaling",
      description: "Our AI-powered bidding engines adjust your campaigns in real-time. We analyze thousands of data points to scale winning ads and cut underperformers before they waste your budget.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      imageFirst: true
    },
    {
      title: "Multi-Channel Ad Strategy (Facebook, Google, TikTok)",
      description: "We build cohesive ecosystems across all major platforms. By synchronizing your message across Facebook, Google, and TikTok, we create a surround-sound effect that drives brand authority and conversions.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      imageFirst: false
    },
    {
      title: "Advanced Conversion Tracking & Attribution",
      description: "Stop guessing which ads are working. We implement server-side tracking (CAPI) to bypass cookie restrictions and provide 100% accurate data on your customer journey.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      imageFirst: true
    }
  ];

  const coreServices = [
    {
      title: "AI Automation Solutions",
      icon: "🤖",
      points: [
        "Eliminate manual tasks and accelerate your workflow 10x with custom AI integrations.",
        "Deploy smart chatbots and automated lead nurturing systems to capture every opportunity."
      ]
    },
    {
      title: "Digital Marketing Excellence",
      icon: "📈",
      points: [
        "Strengthen your online presence and deliver the right message to your target audience.",
        "Execute end-to-end strategies that guarantee measurable brand growth."
      ]
    },
    {
      title: "Paid Advertising (PPC)",
      icon: "💰",
      points: [
        "Generate high-quality leads and sales through precision-targeted Google and Social Media ads.",
        "Optimize your ad spend to achieve the highest possible Return on Investment (ROI)."
      ]
    },
    {
      title: "TikTok Account Management",
      icon: "📱",
      points: [
        "Master viral content strategies and full-scale account management for the TikTok ecosystem.",
        "Boost engagement and build a loyal community for creators and brands alike."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCtaClick={handleCta} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-white text-center">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#002266]/60 font-bold uppercase tracking-widest text-sm mb-4">Our Paid Advertising Service</p>
            <p className="caveat-text text-[#002266] text-2xl md:text-3xl mb-4 italic">
              Stop Burning Cash On Ads That Don't Convert Into Customers.
            </p>
            <h1 className="hero-h1 text-[#002266] mb-6 uppercase">
              Precision-Targeted<br />Paid Ads That<br />Scale Your Revenue
            </h1>
            <p className="body-text text-[#002266]/80 max-w-2xl mx-auto mb-10 text-lg">
              We optimize every cent of your ad spend for maximum ROI.
            </p>
            <button 
              onClick={handleCta}
              className="bg-[#00C853] text-white px-10 py-5 rounded-none btn-text text-xl hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30 mb-16"
            >
              Start Your Free Strategy Call »
            </button>
            <div className="relative max-w-4xl mx-auto">
               <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
                alt="Paid Advertising Dashboard" 
                className="w-full h-auto rounded-none shadow-2xl border border-gray-100"
              />
            </div>
          </div>
        </section>

        {/* Why Do I Need Section */}
        <section className="py-24 bg-[#F0FFF6]/30">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl text-center mb-20">
              Why Do I Need Performance-Driven<br />Paid Advertising Services?
            </h2>
            
            <div className="space-y-24">
              {benefits.map((benefit, idx) => (
                <div key={idx} className={`flex flex-col ${benefit.imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
                  <div className="flex-1 space-y-6">
                    <h3 className="section-h2 text-[#002266] text-3xl md:text-4xl leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="body-text text-[#002266]/70 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title} 
                      className="w-full h-auto rounded-none shadow-xl border border-gray-100"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <button 
                onClick={handleCta}
                className="bg-[#00C853] text-white px-10 py-5 rounded-none btn-text text-xl hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30"
              >
                Scale My Ads »
              </button>
            </div>
          </div>
        </section>

        {/* Grow Your Business Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl mb-4">
              Grow Your Business With Smart<br />Automation & Ads
            </h2>
            <p className="body-text text-[#002266]/70 text-xl mb-16">
              Transform Your Brand with AI-Powered Marketing Solutions
            </p>

            <p className="font-montserrat font-black text-[#002266] uppercase tracking-[0.2em] mb-12">Our Core Services</p>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {coreServices.map((service, idx) => (
                <div key={idx} className="border border-[#002266]/10 p-8 text-left hover:border-[#00C853]/40 transition-all group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                  <h4 className="font-montserrat font-bold text-[#002266] text-lg mb-6 h-12 flex items-center">{service.title}</h4>
                  <ul className="space-y-4">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2 text-sm text-[#002266]/70">
                        <span className="text-[#00C853] font-bold">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button 
              onClick={handleCta}
              className="bg-[#00C853] text-white px-10 py-5 rounded-none btn-text text-xl hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-xl shadow-[#00C853]/30"
            >
              Start Your Growth Journey Today »
            </button>
          </div>
        </section>

        <ReadyToScale onCallClick={handleCta} onAuditClick={handleAudit} />
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

export default PaidAdvertisingPage;
