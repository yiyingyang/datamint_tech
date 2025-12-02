
import React, { useEffect, useRef, useState } from 'react';

const Team: React.FC = () => {
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
      id="team" 
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className={`max-w-7xl mx-auto fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-offwhite mb-6 text-glow">The Co-Chairs</h2>
          <p className="text-metallic max-w-2xl mx-auto font-light">
            Decades of combined experience in capital formation, product strategy, and global market expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Harry */}
          <div className="flex flex-col md:flex-row gap-8 items-start group">
            {/* Tech Avatar Container */}
            <div className="w-full md:w-1/3 aspect-[3/4] bg-black border border-white/20 relative overflow-hidden ring-1 ring-white/5 group-hover:ring-gold/30 transition-all">
              {/* Scanline Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[2] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
              
              {/* Scanning Bar Animation */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/50 shadow-[0_0_10px_rgba(243,229,171,0.8)] z-30 animate-[scan_3s_linear_infinite]"></div>
              
              {/* Tech Filtered Image */}
              <img 
                src="media/harry_profile.jpeg" 
                alt="Harry Chu" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-all duration-700"
              />
              
              {/* HUD Elements */}
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-gold/80 z-30">ID: H.CHU_882</div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full z-30 animate-pulse"></div>
            </div>

            <div className="w-full md:w-2/3 pt-4">
              <h3 className="text-2xl font-bold text-offwhite mb-1 group-hover:text-gold transition-colors">Harry Chu</h3>
              <div className="font-mono text-xs text-metallic/70 uppercase tracking-widest mb-6">Strategic Capital & Technology</div>
              <p className="text-metallic leading-relaxed text-sm md:text-base border-l border-white/10 pl-6 group-hover:border-gold/50 transition-colors duration-500">
                Expert in CIO-level strategic roadmaps and structuring complex capital stacks. Harry leads the "Moneyball" approach to ecosystem building, identifying high-leverage opportunities in overlooked technical verticals.
              </p>
            </div>
          </div>

          {/* Sherry */}
          <div className="flex flex-col md:flex-row gap-8 items-start group">
            {/* Tech Avatar Container */}
            <div className="w-full md:w-1/3 aspect-[3/4] bg-black border border-white/20 relative overflow-hidden ring-1 ring-white/5 group-hover:ring-gold/30 transition-all">
               {/* Scanline Effect */}
               <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[2] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
              
              {/* Scanning Bar Animation */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/50 shadow-[0_0_10px_rgba(243,229,171,0.8)] z-30 animate-[scan_4s_linear_infinite]"></div>

              {/* Tech Filtered Image */}
              <img 
                src="media/sherry_profile.jpeg" 
                alt="Sherry Yang" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-all duration-700"
              />
               {/* HUD Elements */}
               <div className="absolute bottom-2 left-2 text-[10px] font-mono text-gold/80 z-30">ID: S.YANG_104</div>
               <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full z-30 animate-pulse"></div>
            </div>

            <div className="w-full md:w-2/3 pt-4">
              <h3 className="text-2xl font-bold text-offwhite mb-1 group-hover:text-gold transition-colors">Sherry Yang</h3>
              <div className="font-mono text-xs text-metallic/70 uppercase tracking-widest mb-6">Product & Global Expansion</div>
              <p className="text-metallic leading-relaxed text-sm md:text-base border-l border-white/10 pl-6 group-hover:border-gold/50 transition-colors duration-500">
                Specialist in narrative engineering and global market penetration. Sherry manages the 30M+ ecosystem reach and bridges Asian/US markets, ensuring portfolio companies achieve global escape velocity.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inline styles for the scan animation */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Team;
