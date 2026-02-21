
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import WhatsIncludedPage from './pages/WhatsIncludedPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import PaidAdvertisingPage from './pages/PaidAdvertisingPage';
import TikTokManagementPage from './pages/TikTokManagementPage';
import AIAutomationPage from './pages/AIAutomationPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PricingPage from './pages/PricingPage';
import ConsultationPage from './pages/ConsultationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/paid-advertising" element={<PaidAdvertisingPage />} />
        <Route path="/services/tiktok-management" element={<TikTokManagementPage />} />
        <Route path="/services/ai-automation" element={<AIAutomationPage />} />
        <Route path="/whats-included" element={<WhatsIncludedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
