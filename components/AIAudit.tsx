
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface AIAuditProps {
  onClose: () => void;
}

const AIAudit: React.FC<AIAuditProps> = ({ onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<any>(null);
  const [error, setError] = useState('');

  const generateStrategy = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error('API key is missing. Please configure GEMINI_API_KEY.');
      }
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this business and provide a 3-step growth strategy for paid social (TikTok/FB): Business Name: ${businessName}, Website: ${website}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              targetAudience: { type: Type.STRING },
              creativeHook: { type: Type.STRING },
              predictedCPA: { type: Type.STRING },
              actionSteps: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["targetAudience", "creativeHook", "predictedCPA", "actionSteps"]
          },
        },
      });

      const data = JSON.parse(response.text);
      setStrategy(data);
    } catch (err) {
      console.error(err);
      setError('Failed to generate strategy. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-2 border-[#00C853] rounded-none p-8 md:p-12 shadow-2xl relative">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-[#002266]/40 hover:text-[#002266] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {!strategy ? (
        <>
          <h2 className="section-h2 text-3xl mb-4 text-[#002266]">Get Your Free AI Audit</h2>
          <p className="body-text mb-8 text-[#002266]/70">
            Tell us about your business and our Gemini-powered engine will build you a custom TikTok-first growth plan.
          </p>
          
          <form onSubmit={generateStrategy} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002266]">Business Name</label>
              <input 
                required
                type="text" 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Acme Supplements"
                className="w-full px-4 py-3 rounded-none border border-gray-200 focus:ring-2 focus:ring-[#00C853] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002266]">Website URL</label>
              <input 
                required
                type="url" 
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://yourwebsite.com"
                className="w-full px-4 py-3 rounded-none border border-gray-200 focus:ring-2 focus:ring-[#00C853] focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#002266] text-white py-4 rounded-none font-bold text-lg hover:bg-[#001a4d] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Strategy...
                </>
              ) : 'Generate My Strategy'}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="section-h2 text-3xl mb-6 text-[#002266]">Your Growth Roadmap</h2>
          
          <div className="grid gap-6">
            <div className="bg-[#F0FFF4] p-6 rounded-none border border-[#00C853]/20">
              <h4 className="font-bold text-[#00C853] mb-1 uppercase tracking-wider text-xs">Primary Target</h4>
              <p className="text-lg font-semibold text-[#002266]">{strategy.targetAudience}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#F0FFF4] p-6 rounded-none border border-[#00C853]/20">
                <h4 className="font-bold text-[#00C853] mb-1 uppercase tracking-wider text-xs">Winning Creative Hook</h4>
                <p className="font-medium text-[#002266]">{strategy.creativeHook}</p>
              </div>
              <div className="bg-[#F0FFF4] p-6 rounded-none border border-[#00C853]/20">
                <h4 className="font-bold text-[#00C853] mb-1 uppercase tracking-wider text-xs">Predicted CPA Range</h4>
                <p className="font-medium text-[#002266]">{strategy.predictedCPA}</p>
              </div>
            </div>

            <div className="bg-[#F0FFF4] p-6 rounded-none border border-[#00C853]/20">
              <h4 className="font-bold text-[#00C853] mb-4 uppercase tracking-wider text-xs">Action Steps</h4>
              <ul className="space-y-3">
                {strategy.actionSteps.map((step: string, i: number) => (
                  <li key={i} className="flex gap-3 text-[#002266]/80">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#00C853] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => setStrategy(null)}
              className="flex-1 py-4 border-2 border-[#002266] rounded-none font-bold text-[#002266] hover:bg-[#002266]/5 transition-colors"
            >
              Recalculate
            </button>
            <button 
              onClick={() => window.location.href = '/consultation'}
              className="flex-1 py-4 bg-[#00C853] rounded-none font-bold text-white hover:bg-[#00B248] transition-colors shadow-lg shadow-[#00C853]/20"
            >
              Claim Full Audit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAudit;
