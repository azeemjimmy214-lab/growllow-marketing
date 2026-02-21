
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F0FFF6]/60 backdrop-blur-md border-b border-[#00C853]/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <Logo size={32} />
            <span className="font-montserrat font-extrabold text-2xl text-[#00C853] tracking-tighter uppercase">
              GROWLLO
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/whats-included" className="font-semibold text-[#002266] hover:text-[#00C853] transition-colors">What's Included</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services" className="font-semibold text-[#002266] hover:text-[#00C853] transition-colors flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/services/digital-marketing" className="block px-6 py-2 text-[#002266] hover:bg-[#F0FFF6] hover:text-[#00C853] font-medium transition-colors">Digital Marketing</Link>
                  <Link to="/services/paid-advertising" className="block px-6 py-2 text-[#002266] hover:bg-[#F0FFF6] hover:text-[#00C853] font-medium transition-colors">Paid Advertising</Link>
                  <Link to="/services/tiktok-management" className="block px-6 py-2 text-[#002266] hover:bg-[#F0FFF6] hover:text-[#00C853] font-medium transition-colors">TikTok Management</Link>
                  <Link to="/services/ai-automation" className="block px-6 py-2 text-[#002266] hover:bg-[#F0FFF6] hover:text-[#00C853] font-medium transition-colors">AI Automation</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="font-semibold text-[#002266] hover:text-[#00C853] transition-colors">Blog</Link>
            <Link to="/pricing" className="font-semibold text-[#002266] hover:text-[#00C853] transition-colors">Pricing</Link>
          </div>

          <div className="flex items-center">
            <button 
              onClick={onCtaClick}
              className="bg-[#00C853] text-white px-6 py-3 rounded-none btn-text hover:bg-[#00B248] transition-all transform hover:scale-105"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
