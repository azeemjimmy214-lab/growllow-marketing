
import React from 'react';

const AgencyComparison: React.FC = () => {
  const comparisons = [
    {
      feature: "Strategy",
      traditional: "Manual, gut-feeling based",
      growllo: "Data-driven, AI-optimized"
    },
    {
      feature: "Lead Handling",
      traditional: "Manual follow-ups (slow)",
      growllo: "Instant AI qualification (24/7)"
    },
    {
      feature: "Tracking",
      traditional: "Basic browser-based (inaccurate)",
      growllo: "Server-side CAPI (100% accurate)"
    },
    {
      feature: "Creative",
      traditional: "Slow, expensive production",
      growllo: "Rapid AI-assisted iteration"
    },
    {
      feature: "Reporting",
      traditional: "Monthly static PDFs",
      growllo: "Real-time live dashboard"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-h2 text-[#002266] text-4xl md:text-5xl mb-6">Traditional vs. Growllo</h2>
          <p className="body-text text-[#002266]/70">Why settling for a standard agency is costing you money.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#002266]/10">
                <th className="py-6 px-4 text-left font-montserrat font-bold text-[#002266] uppercase tracking-wider">Feature</th>
                <th className="py-6 px-4 text-left font-montserrat font-bold text-[#002266]/40 uppercase tracking-wider">Traditional Agency</th>
                <th className="py-6 px-4 text-left font-montserrat font-bold text-[#00C853] uppercase tracking-wider">Growllo</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="border-b border-[#002266]/5 hover:bg-[#F0FFF6]/20 transition-colors">
                  <td className="py-6 px-4 font-montserrat font-bold text-[#002266]">{item.feature}</td>
                  <td className="py-6 px-4 text-[#002266]/60 font-medium">{item.traditional}</td>
                  <td className="py-6 px-4 text-[#002266] font-bold flex items-center gap-2">
                    <span className="text-[#00C853]">✓</span> {item.growllo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AgencyComparison;
