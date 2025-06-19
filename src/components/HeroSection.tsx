
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'NEXTMETAL.INTERFACE.INITIALIZED';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Enhanced Background with atmospheric effects */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-cyber-blue/10 via-transparent to-cyber-yellow/5" />
        
        {/* Animated scanlines */}
        <div className="absolute inset-0">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-scan-line opacity-30" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-yellow to-transparent animate-scan-line opacity-20" 
               style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        
        {/* Left Content (40%) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Main Title with cyber panel */}
          <div className="cyber-panel p-6 relative">
            <div className="absolute -top-3 left-6 bg-cyber-dark border border-cyber-yellow px-4 py-1"
                 style={{clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'}}>
              <span className="text-xs font-mono text-cyber-yellow">SYSTEM.ID</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-cyber text-cyber-yellow mb-4 glitch-text tracking-widest" data-text="NEXTMETAL">
              NEXTMETAL
            </h1>
            
            {/* Subtitle with typing effect */}
            <div className="text-lg md:text-xl text-cyber-blue mb-6 font-mono h-8">
              <span>{text}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-cyber-blue/80 mb-8 leading-relaxed">
            Next-generation metal processing interface. Advanced neural networks controlling 
            industrial automation and precision manufacturing systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="cyber-border bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 px-8 py-3 font-mono text-lg hover:ring ring-cyber-blue/20"
            >
              &gt; INITIALIZE.SYSTEM
            </Button>
            <Button 
              variant="outline" 
              className="border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-black transition-all duration-300 px-8 py-3 font-mono text-lg hover:ring ring-cyber-yellow/20"
            >
              &gt; ACCESS.TERMINAL
            </Button>
          </div>

          {/* Status Display */}
          <div className="cyber-panel p-4">
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between items-center">
                <span className="text-cyber-yellow">STATUS:</span>
                <span className="text-cyber-blue">READY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyber-yellow">METAL.LINK:</span>
                <span className="text-cyber-blue">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyber-yellow">SECURITY:</span>
                <span className="text-cyber-blue">ENCRYPTED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Animated SVG (60%) */}
        <div className="lg:col-span-3 flex justify-center items-center">
          <div className="relative w-96 h-96">
            {/* Main rotating node graph */}
            <svg className="w-full h-full" viewBox="0 0 400 400">
              {/* Center hexagon */}
              <polygon
                points="200,160 240,180 240,220 200,240 160,220 160,180"
                fill="none"
                stroke="#ffd700"
                strokeWidth="2"
                className="animate-pulse"
              />
              
              {/* Inner glow */}
              <polygon
                points="200,170 230,185 230,215 200,230 170,215 170,185"
                fill="rgba(255, 215, 0, 0.1)"
                className="animate-pulse"
              />

              {/* Orbiting dots */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const radius = 120;
                const x = 200 + radius * Math.cos(angle);
                const y = 200 + radius * Math.sin(angle);
                
                return (
                  <g key={i}>
                    <circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill={i % 2 === 0 ? "#00bfff" : "#ffd700"}
                      className="animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        filter: 'drop-shadow(0 0 8px currentColor)'
                      }}
                    />
                    {/* Connection lines to center */}
                    <line
                      x1={x}
                      y1={y}
                      x2="200"
                      y2="200"
                      stroke={i % 2 === 0 ? "#00bfff" : "#ffd700"}
                      strokeWidth="1"
                      opacity="0.3"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  </g>
                );
              })}

              {/* Outer ring animation */}
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="#00bfff"
                strokeWidth="1"
                opacity="0.5"
                strokeDasharray="10,5"
                className="animate-spin"
                style={{ animationDuration: '20s' }}
              />

              {/* Inner ring animation */}
              <circle
                cx="200"
                cy="200"
                r="100"
                fill="none"
                stroke="#ffd700"
                strokeWidth="1"
                opacity="0.3"
                strokeDasharray="5,10"
                className="animate-spin"
                style={{ animationDuration: '15s', animationDirection: 'reverse' }}
              />

              {/* Pulsing outer glow */}
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="url(#glowGradient)"
                strokeWidth="2"
                opacity="0.6"
                className="animate-ping"
                style={{ animationDuration: '3s' }}
              />

              <defs>
                <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00bfff" stopOpacity="0" />
                  <stop offset="70%" stopColor="#00bfff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ffd700" stopOpacity="0.6" />
                </radialGradient>
              </defs>
            </svg>

            {/* Floating particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyber-blue rounded-full animate-ping"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
