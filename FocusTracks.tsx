
import React, { useEffect, useRef, useState } from 'react';
import { Server, Users } from 'lucide-react';

const FocusTracks: React.FC = () => {
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
      id="tracks" 
      ref={sectionRef}
      className="py-24 px-6 relative"
    >
      {/* Background Tech Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className={`max-w-7xl mx-auto fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="mb-16 md:mb-24 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-offwhite mb-4 text-glow">Focus Tracks</h2>
            <div className="h-[1px] w-24 bg-gold box-glow"></div>
          </div>
          <div className="hidden md:block font-mono text-xs text-metallic/50 uppercase">
             // Target Sectors
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card A */}
          <div className="group relative p-8 md:p-12 bg-white/[0.03] border border-white/10 hover:border-gold/30 transition-all duration-500 hover:bg-white/[0.05]">
            <div className="absolute top-8 right-8 text-white/20 group-hover:text-gold transition-colors duration-500">
              <Server size={40} strokeWidth={1} />
            </div>
            
            <div className="font-mono text-xs text-gold mb-6 uppercase tracking-widest opacity-70">Track_01</div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-offwhite mb-4">B2B Enterprise & Infra</h3>
            <p className="text-metallic text-lg mb-8 leading-relaxed font-light">
              We specialize in DePIN, Sovereign AI Infrastructure, and High-Performance Compute layers. We bridge the gap between Web3 innovation and legacy institutional rails.
            </p>

            <div className="border-t border-white/5 pt-8">
              <div className="text-xs font-mono text-white/40 uppercase mb-4">Core Thesis</div>
              <ul className="space-y-4">
                {[
                  'Strategic Pilot Acquisition with F500', 
                  'Data Center & Compute Financing', 
                  'Zero-Knowledge Privacy Layers',
                  'RWA Tokenization Architecture'
                ].map((item) => (
                  <li key={item} className="flex items-start text-offwhite/80 font-mono text-sm">
                    <span className="text-gold mr-3 mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card B */}
          <div className="group relative p-8 md:p-12 bg-white/[0.03] border border-white/10 hover:border-gold/30 transition-all duration-500 hover:bg-white/[0.05]">
            <div className="absolute top-8 right-8 text-white/20 group-hover:text-gold transition-colors duration-500">
              <Users size={40} strokeWidth={1} />
            </div>

            <div className="font-mono text-xs text-gold mb-6 uppercase tracking-widest opacity-70">Track_02</div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-offwhite mb-4">Consumer & Web3</h3>
            <p className="text-metallic text-lg mb-8 leading-relaxed font-light">
              Targeting the next generation of consumer super-apps. We engineer viral loops through gamified tokenomics and aggressive on-chain social graph expansion.
            </p>

            <div className="border-t border-white/5 pt-8">
               <div className="text-xs font-mono text-white/40 uppercase mb-4">Core Thesis</div>
              <ul className="space-y-4">
                {[
                  'Viral Loop Architecture & Engineering', 
                  'High-Velocity Community Growth (0-100k)', 
                  'Memetic Distribution Strategies',
                  'Sustainable Token Economies'
                ].map((item) => (
                  <li key={item} className="flex items-start text-offwhite/80 font-mono text-sm">
                    <span className="text-gold mr-3 mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusTracks;
