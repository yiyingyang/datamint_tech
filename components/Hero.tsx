
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-deep">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key="hero-video"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-95"
        >
          <source src="media/video.mp4" type="video/mp4" />
        </video>

        {/* Heavy Black Overlay for Text Readability - Adjusted to 80% */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]"></div>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep opacity-90"></div>
      </div>

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-offwhite mb-8 leading-[1.1] text-glow">
          Capital is Commodity. <br />
          <span className="text-gold">
            Execution is the Asset.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-metallic max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          We bridge the gap between engineering excellence and market dominance. <br className="hidden md:block" />
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:harry@datamint.tech"
            className="group relative px-10 py-4 bg-gold text-deep font-bold text-lg overflow-hidden transition-all hover:scale-105 duration-300 box-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Submit Pitch Deck <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <div className="flex items-center gap-2 text-sm text-metallic tracking-widest uppercase font-mono">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Accepting Batch 2025
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 cursor-pointer" onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
