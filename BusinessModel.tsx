
import React, { useEffect, useRef, useState } from 'react';

const BusinessModel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="model" 
      ref={sectionRef}
      className={`py-24 md:py-32 px-6 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-offwhite mb-8">
          Not Consultants. <span className="text-gold">Co-Builders.</span>
        </h2>
        
        <p className="text-lg text-metallic mb-16 leading-relaxed max-w-2xl mx-auto">
          We don't charge hourly fees. We inject capital, narrative, and distribution resources directly into your operations. We align our incentives completely with your exit.
        </p>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-white/20 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative p-8 md:p-12 bg-[#0A0A0A] border border-gold/30 backdrop-blur-xl">
            <div className="grid md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">Variable</div>
                <div className="text-sm text-metallic uppercase tracking-wider">Equity Stake</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-offwhite mb-2">Zero</div>
                <div className="text-sm text-metallic uppercase tracking-wider">Cash Retainer</div>
              </div>
              <div className="p-4">
                <div className="text-xl md:text-2xl font-bold text-gold mb-2">Performance</div>
                <div className="text-sm text-metallic uppercase tracking-wider">Based Vesting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
