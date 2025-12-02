import React, { useEffect, useRef, useState } from 'react';

// Hook for counting up animation
const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth deceleration
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

      setCount(Math.floor(easeOutQuart(progress) * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, startCounting]);

  return count;
};

interface StatItemProps {
  value: string;
  label: string;
  isVisible: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, isVisible }) => {
  // Extract number and non-numeric suffix
  const numValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const count = useCountUp(numValue, 2500, isVisible);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 md:p-10 border-r border-white/5 last:border-r-0 relative group">
      <div className="font-mono text-5xl md:text-7xl font-bold text-gold mb-4 transition-transform group-hover:scale-105 duration-500">
        <span className="text-white/20 mr-2 text-3xl md:text-5xl align-top opacity-50 font-light">[</span>
        {count}{suffix}
        <span className="text-white/20 ml-2 text-3xl md:text-5xl align-top opacity-50 font-light">]</span>
      </div>
      <div className="text-sm md:text-base text-metallic font-mono uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: "90M+", label: "Ecosystem Reach" },
    { value: "16+", label: "FO Partners" },
    { value: "42", label: "AI Partners" },
    { value: "500+", label: "Global Campuses" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className={`relative py-20 -mt-16 z-20 px-4`}
    >
      <div
        className={`max-w-7xl mx-auto backdrop-blur-xl bg-[#030303]/90 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] fade-up ${isVisible ? 'visible' : ''}`}
      >
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;