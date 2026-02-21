
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Zap, Target, BarChart3, MessageSquare, Smartphone, Cpu, ArrowRight, Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCta = () => {
    window.location.href = '/consultation';
  };

  const pricingPlans = [
    {
      name: "Starter",
      description: "Digital Marketing & TikTok Setup",
      monthlyPrice: 1499,
      annualPrice: 1199,
      features: [
        "Basic Account Management",
        "Weekly TikTok Posting (3x)",
        "Organic Reach Strategy",
        "Brand Authority Setup",
        "Basic Monthly Reporting",
        "Email Support"
      ],
      cta: "Start Basic Growth",
      highlight: false
    },
    {
      name: "Growth",
      description: "Paid Advertising & AI Basics",
      monthlyPrice: 2999,
      annualPrice: 2499,
      features: [
        "Everything in Starter",
        "Full PPC Management",
        "2 Basic AI Automation Workflows",
        "High ROI Ad Strategy",
        "Precision Audience Targeting",
        "Weekly TikTok Posting (5x)",
        "Priority Support"
      ],
      cta: "Scale My Business",
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Full AI Automation & Scale",
      monthlyPrice: 5999,
      annualPrice: 4999,
      features: [
        "Everything in Growth",
        "Custom AI Integrations",
        "Advanced TikTok Growth Strategy",
        "High-Budget Ad Management",
        "24/7 Lead Capture Systems",
        "Workflow Efficiency Audit",
        "Dedicated Account Manager"
      ],
      cta: "Dominate Your Market",
      highlight: false
    }
  ];

  const comparisonFeatures = [
    { name: "AI Workflow Integration", starter: false, growth: "Basic (2)", enterprise: "Custom/Full" },
    { name: "TikTok Content Strategy", starter: "Basic", growth: "Advanced", enterprise: "Viral-Focused" },
    { name: "Ad Campaign Optimization", starter: false, growth: "Standard", enterprise: "High-Budget/Advanced" },
    { name: "Monthly Reporting", starter: "Standard", growth: "Detailed", enterprise: "Real-time Dashboard" },
    { name: "Lead Capture Systems", starter: "Manual", growth: "Semi-Automated", enterprise: "24/7 Fully Automated" },
    { name: "Support", starter: "Email", growth: "Priority", enterprise: "Dedicated Manager" },
  ];

  const services = [
    {
      title: "AI Automation",
      description: "Maximize workflow efficiency and ensure 24/7 lead capture with intelligent systems.",
      icon: <Cpu className="w-6 h-6 text-[#00C853]" />
    },
    {
      title: "Digital Marketing",
      description: "Build undeniable brand authority and expand your organic reach across all platforms.",
      icon: <Target className="w-6 h-6 text-[#00C853]" />
    },
    {
      title: "Paid Advertising",
      description: "Achieve high ROI through precision targeting and data-driven ad campaign optimization.",
      icon: <BarChart3 className="w-6 h-6 text-[#00C853]" />
    },
    {
      title: "TikTok Management",
      description: "Dominate the feed with viral content strategies and deep community engagement.",
      icon: <Smartphone className="w-6 h-6 text-[#00C853]" />
    }
  ];

  const faqs = [
    {
      question: "How does AI automation save time?",
      answer: "AI automation handles repetitive tasks like lead qualification, CRM entry, and follow-up emails instantly. By removing manual data entry and administrative bottlenecks, your team can focus entirely on high-value strategy and closing deals, often saving 20-40 hours per week."
    },
    {
      question: "What is the expected ROI on Paid Ads?",
      answer: "While ROI varies by industry, our precision targeting and AI-optimized bidding strategies typically aim for a 3x to 10x return on ad spend (ROAS). We focus on high-intent audiences to ensure every dollar spent contributes to measurable bottom-line growth."
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately, and your billing will be adjusted pro-rata."
    },
    {
      question: "Is there a setup fee?",
      answer: "We typically waive setup fees for annual commitments. For monthly plans, a one-time onboarding fee may apply depending on the complexity of your AI integrations and ad account history."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onCtaClick={handleCta} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat font-black text-[#002169] mb-6 uppercase tracking-tight"
            >
              Transparent Pricing for<br />Scalable Growth
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[#002169]/70 max-w-2xl mx-auto mb-12"
            >
              Choose the perfect plan to automate your workflow and dominate your market.
            </motion.p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`text-sm font-bold uppercase tracking-widest ${!isAnnual ? 'text-[#002169]' : 'text-[#002169]/40'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-16 h-8 bg-[#002169]/10 rounded-full relative p-1 transition-colors hover:bg-[#002169]/20"
              >
                <motion.div 
                  animate={{ x: isAnnual ? 32 : 0 }}
                  className="w-6 h-6 bg-[#00C853] rounded-full shadow-lg"
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold uppercase tracking-widest ${isAnnual ? 'text-[#002169]' : 'text-[#002169]/40'}`}>Annual</span>
                <span className="bg-[#00C853] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Save 20%</span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {pricingPlans.map((plan, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className={`relative flex flex-col p-8 border ${plan.highlight ? 'border-[#00C853] shadow-2xl scale-105 z-10 bg-white' : 'border-gray-100 shadow-sm bg-white'} transition-transform`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00C853] text-white text-xs font-black px-4 py-1 uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-2xl font-montserrat font-black text-[#002169] uppercase mb-2">{plan.name}</h3>
                    <p className="text-sm text-[#002169]/60 font-semibold mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-1 justify-center">
                      <span className="text-4xl font-montserrat font-black text-[#002169]">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                      <span className="text-[#002169]/40 font-bold">/mo</span>
                    </div>
                    {isAnnual && <p className="text-[10px] text-[#00C853] font-bold mt-2 uppercase tracking-widest">Billed annually</p>}
                  </div>

                  <div className="flex-grow space-y-4 mb-10 text-left">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#00C853] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#002169]/80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={handleCta}
                    className={`w-full py-4 font-montserrat font-black uppercase tracking-widest text-sm transition-all ${plan.highlight ? 'bg-[#00C853] text-white hover:bg-[#00B248] shadow-lg shadow-[#00C853]/30' : 'bg-[#002169] text-white hover:bg-[#001a54]'}`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-gray-50 px-4">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-montserrat font-black text-[#002169] uppercase mb-4">Feature Comparison</h2>
              <div className="w-20 h-1 bg-[#00C853] mx-auto"></div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#002169]/10">
                    <th className="py-6 px-4 text-left font-montserrat font-black text-[#002169] uppercase text-sm">Feature</th>
                    <th className="py-6 px-4 text-center font-montserrat font-black text-[#002169] uppercase text-sm">Starter</th>
                    <th className="py-6 px-4 text-center font-montserrat font-black text-[#00C853] uppercase text-sm">Growth</th>
                    <th className="py-6 px-4 text-center font-montserrat font-black text-[#002169] uppercase text-sm">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-white transition-colors">
                      <td className="py-6 px-4 text-[#002169] font-bold text-sm">{feature.name}</td>
                      <td className="py-6 px-4 text-center text-sm font-medium text-[#002169]/60">
                        {typeof feature.starter === 'boolean' ? (feature.starter ? <Check className="w-5 h-5 text-[#00C853] mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />) : feature.starter}
                      </td>
                      <td className="py-6 px-4 text-center text-sm font-bold text-[#002169]">
                        {typeof feature.growth === 'boolean' ? (feature.growth ? <Check className="w-5 h-5 text-[#00C853] mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />) : feature.growth}
                      </td>
                      <td className="py-6 px-4 text-center text-sm font-medium text-[#002169]/60">
                        {typeof feature.enterprise === 'boolean' ? (feature.enterprise ? <Check className="w-5 h-5 text-[#00C853] mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />) : feature.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service Icon Grid */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {services.map((service, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 bg-[#F0FFF6] rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-montserrat font-black text-[#002169] uppercase mb-3">{service.title}</h4>
                  <p className="text-sm text-[#002169]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-montserrat font-black text-[#002169] uppercase mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-[#00C853] mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span className="font-montserrat font-bold text-[#002169]">{faq.question}</span>
                    {openFaq === idx ? <Minus className="w-5 h-5 text-[#00C853]" /> : <Plus className="w-5 h-5 text-[#00C853]" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-[#002169]/70 leading-relaxed border-t border-gray-50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-[#002169] text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C853]/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black uppercase mb-8 tracking-tight">Ready to Grow?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join elite brands scaling their operations with AI-driven performance marketing.
            </p>
            <button 
              onClick={handleCta}
              className="group bg-[#00C853] text-white px-12 py-6 rounded-none font-montserrat font-black uppercase text-xl flex items-center gap-3 mx-auto hover:bg-[#00B248] transition-all transform hover:scale-105 shadow-2xl shadow-[#00C853]/40"
            >
              Book a Free Consultation
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-8 text-xs text-white/40 font-bold uppercase tracking-[0.3em]">30 Days Money Back Guarantee</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
