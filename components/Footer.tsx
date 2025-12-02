
import React, { useEffect, useRef, useState } from 'react';

const Footer: React.FC = () => {
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
    <footer 
      id="apply"
      ref={sectionRef}
      className={`py-24 px-6 border-t border-white/10 bg-deep relative overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <h3 className="text-2xl md:text-3xl font-light text-offwhite mb-8">
          Ready to scale?
        </h3>
        
        <a 
          href="mailto:harry@datamint.tech" 
          className="text-gold text-lg border-b border-gold/30 hover:border-gold pb-1 transition-all mb-20"
        >
          harry@datamint.tech
        </a>

        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest border-t border-white/5 pt-8">
          <div className="mb-4 md:mb-0">
            © 2025 Datamint Advisory Inc.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
