
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    website: '',
    spend: '',
    challenge: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1); // 1: Calendar, 2: Form
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCta = () => {
    // Already on consultation page
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const dates = [23, 24, 25, 26, 27];
  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const benefits = [
    {
      title: "Audit Your Current Systems",
      description: "We'll dive deep into your current marketing and operations to find hidden bottlenecks.",
      icon: <Zap className="w-6 h-6 text-[#00C853]" />
    },
    {
      title: "Identify AI Opportunities",
      description: "Discover where AI can automate 20+ hours of manual work per week for your team.",
      icon: <CheckCircle2 className="w-6 h-6 text-[#00C853]" />
    },
    {
      title: "Custom Growth Roadmap",
      description: "Get a step-by-step plan to scale your ad spend while maintaining high ROI.",
      icon: <ArrowRight className="w-6 h-6 text-[#00C853]" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onCtaClick={handleCta} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-[#F0FFF6]/30">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#00C853]/10 mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#00C853] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#002169]">Limited Slots Available This Week</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-montserrat font-black text-[#002169] mb-6 uppercase tracking-tight leading-tight"
            >
              Book Your Free<br />
              <span className="text-[#00C853]">Growth Strategy</span> Call
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-[#002169]/70 max-w-2xl mx-auto mb-12"
            >
              Spend 30 minutes with our experts to uncover how AI and performance marketing can double your efficiency.
            </motion.p>
          </div>
        </section>

        {/* Form & Info Section */}
        <section className="py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-montserrat font-black text-[#002169] uppercase mb-8">What to expect</h2>
                  <div className="space-y-8">
                    {benefits.map((benefit, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-6"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-[#F0FFF6] rounded-xl flex items-center justify-center">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-montserrat font-bold text-[#002169] mb-2">{benefit.title}</h3>
                          <p className="text-[#002169]/60 leading-relaxed">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#002169] p-8 text-white rounded-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C853]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00C853]">
                        <img src="https://picsum.photos/seed/expert/100/100" alt="Expert" />
                      </div>
                      <div>
                        <p className="font-bold">Marcus Chen</p>
                        <p className="text-xs text-white/60 uppercase tracking-widest">Head of Strategy</p>
                      </div>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-[#00C853]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="italic text-white/80 leading-relaxed">
                      "We don't do generic sales pitches. This call is about providing immediate value and showing you exactly where your growth is leaking."
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 pt-4">
                  <div className="flex items-center gap-2 text-[#002169]/60">
                    <Video className="w-5 h-5 text-[#00C853]" />
                    <span className="text-sm font-bold uppercase tracking-widest">Video Call</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#002169]/60">
                    <Clock className="w-5 h-5 text-[#00C853]" />
                    <span className="text-sm font-bold uppercase tracking-widest">30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#002169]/60">
                    <ShieldCheck className="w-5 h-5 text-[#00C853]" />
                    <span className="text-sm font-bold uppercase tracking-widest">No Obligation</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Booking Interface */}
              <div className="bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 px-8"
                  >
                    <div className="w-20 h-20 bg-[#F0FFF6] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#00C853]" />
                    </div>
                    <h3 className="text-2xl font-montserrat font-black text-[#002169] uppercase mb-4">Call Scheduled!</h3>
                    <p className="text-[#002169]/70 mb-8">
                      Your strategy session is confirmed for <span className="font-bold text-[#002169]">Feb {selectedDate}, 2026 at {selectedTime}</span>. 
                      A calendar invitation has been sent to your email.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                        setSelectedDate(null);
                        setSelectedTime(null);
                      }}
                      className="text-[#00C853] font-bold hover:underline"
                    >
                      Need to book another session?
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Stepper Header */}
                    <div className="flex border-b border-gray-100">
                      <div className={`flex-1 py-4 text-center text-[10px] font-black uppercase tracking-widest ${step === 1 ? 'text-[#00C853] border-b-2 border-[#00C853]' : 'text-[#002169]/30'}`}>
                        1. Select Time
                      </div>
                      <div className={`flex-1 py-4 text-center text-[10px] font-black uppercase tracking-widest ${step === 2 ? 'text-[#00C853] border-b-2 border-[#00C853]' : 'text-[#002169]/30'}`}>
                        2. Your Details
                      </div>
                    </div>

                    <div className="p-8 md:p-10">
                      {step === 1 ? (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-8"
                        >
                          <div>
                            <h3 className="text-xl font-montserrat font-black text-[#002169] uppercase mb-6">Select a Date</h3>
                            <div className="grid grid-cols-5 gap-2">
                              {dates.map((date, idx) => (
                                <button
                                  key={date}
                                  onClick={() => setSelectedDate(date)}
                                  className={`flex flex-col items-center p-3 border transition-all ${selectedDate === date ? 'bg-[#002169] border-[#002169] text-white' : 'border-gray-100 hover:border-[#00C853] text-[#002169]'}`}
                                >
                                  <span className="text-[10px] uppercase font-bold opacity-60 mb-1">{days[idx]}</span>
                                  <span className="text-lg font-black">{date}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {selectedDate && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              <h3 className="text-xl font-montserrat font-black text-[#002169] uppercase mb-6">Select a Time</h3>
                              <div className="grid grid-cols-1 gap-2">
                                {times.map((time) => (
                                  <button
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    className={`w-full py-4 border text-sm font-bold transition-all ${selectedTime === time ? 'bg-[#00C853] border-[#00C853] text-white' : 'border-gray-100 hover:border-[#00C853] text-[#002169]'}`}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          <button 
                            disabled={!selectedDate || !selectedTime}
                            onClick={() => setStep(2)}
                            className={`w-full py-5 font-montserrat font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 ${(!selectedDate || !selectedTime) ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#002169] text-white hover:bg-[#001a54]'}`}
                          >
                            Next Step
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center gap-4 p-4 bg-[#F0FFF6] border border-[#00C853]/10 mb-6">
                            <Calendar className="w-5 h-5 text-[#00C853]" />
                            <div className="text-xs font-bold text-[#002169]">
                              <span className="opacity-60 uppercase tracking-widest mr-2">Selected:</span>
                              Feb {selectedDate}, 2026 at {selectedTime}
                            </div>
                            <button onClick={() => setStep(1)} className="ml-auto text-[10px] font-black uppercase text-[#00C853] hover:underline">Change</button>
                          </div>

                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#002169]/40">Full Name</label>
                                <input 
                                  required
                                  type="text" 
                                  className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-[#00C853] transition-colors bg-transparent"
                                  placeholder="John Doe"
                                  value={formState.name}
                                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#002169]/40">Work Email</label>
                                <input 
                                  required
                                  type="email" 
                                  className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-[#00C853] transition-colors bg-transparent"
                                  placeholder="john@company.com"
                                  value={formState.email}
                                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#002169]/40">Company Website</label>
                              <input 
                                required
                                type="url" 
                                className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-[#00C853] transition-colors bg-transparent"
                                placeholder="https://company.com"
                                value={formState.website}
                                onChange={(e) => setFormState({...formState, website: e.target.value})}
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#002169]/40">Monthly Ad Spend</label>
                              <select 
                                required
                                className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-[#00C853] transition-colors bg-transparent"
                                value={formState.spend}
                                onChange={(e) => setFormState({...formState, spend: e.target.value})}
                              >
                                <option value="">Select Range</option>
                                <option value="0-5k">$0 - $5,000</option>
                                <option value="5k-20k">$5,000 - $20,000</option>
                                <option value="20k-100k">$20,000 - $100,000</option>
                                <option value="100k+">$100,000+</option>
                              </select>
                            </div>

                            <button 
                              type="submit"
                              className="w-full bg-[#00C853] text-white py-5 font-montserrat font-black uppercase tracking-widest text-sm hover:bg-[#00B248] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#00C853]/20 flex items-center justify-center gap-3"
                            >
                              Confirm Booking
                              <CheckCircle2 className="w-5 h-5" />
                            </button>
                          </form>
                        </motion.div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002169]/40 mb-12">Trusted by scaling brands worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
              <div className="text-2xl font-black font-montserrat">TECHFLOW</div>
              <div className="text-2xl font-black font-montserrat">NEXUS</div>
              <div className="text-2xl font-black font-montserrat">VANTAGE</div>
              <div className="text-2xl font-black font-montserrat">ORBIT</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
