import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer 
      className="py-16 md:py-24 border-t border-[#00C853]/10"
      style={{ background: 'linear-gradient(180deg, #F0FFF6 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <Logo size={32} />
              <span className="text-2xl font-montserrat font-black text-[#00C853] uppercase tracking-tighter">Growllo</span>
            </div>
            
            <p className="text-[#002266]/70 font-medium leading-relaxed max-w-xs">
              Partnering with elite brands for global impact. Scale your performance marketing with AI-native infrastructure.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#002266]/40 hover:bg-[#00C853] hover:text-white hover:border-[#00C853] transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#002266]/40 hover:bg-[#00C853] hover:text-white hover:border-[#00C853] transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#002266]/40 hover:bg-[#00C853] hover:text-white hover:border-[#00C853] transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#002266]/40 hover:bg-[#00C853] hover:text-white hover:border-[#00C853] transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Agency Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-montserrat font-bold text-[#002266] text-lg">
              Agency
            </h4>
            <ul className="space-y-4">
              <li><Link to="/whats-included" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">What's Included</Link></li>
              <li><Link to="/services" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">Services</Link></li>
              <li><Link to="/blog" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">Blog</Link></li>
              <li><Link to="/pricing" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">Pricing</Link></li>
              <li><Link to="/#faq" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">FAQ</Link></li>
            </ul>
          </div>

          {/* Network Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-montserrat font-bold text-[#002266] text-lg">
              Network
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">Twitter / X</a></li>
              <li><a href="#" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">LinkedIn Professional</a></li>
              <li><a href="#" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">TikTok Portfolio</a></li>
              <li><a href="#" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium">TikTok Feed</a></li>
            </ul>
          </div>

          {/* Inquiries Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-montserrat font-bold text-[#002266] text-lg">
              Inquiries
            </h4>
            <div className="space-y-4">
              <a href="mailto:hello@growllo.com" className="text-[#002266]/60 hover:text-[#00C853] transition-colors font-medium block">
                hello@growllo.com
              </a>
              <p className="text-[#002266]/60 font-medium leading-relaxed max-w-[240px]">
                Partnering with elite brands for global impact.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#002266]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#002266]/40 text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Growllo. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[#002266]/40 hover:text-[#00C853] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#002266]/40 hover:text-[#00C853] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
