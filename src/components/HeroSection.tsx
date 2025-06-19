
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'NEURAL.INTERFACE.INITIALIZED';

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
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Wireframe sphere */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 rounded-full border border-cyber-blue/20 animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute inset-8 rounded-full border border-cyber-purple/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
          <div className="absolute inset-16 rounded-full border border-cyber-green/20 animate-spin" style={{animationDuration: '10s'}} />
        </div>
        
        {/* Matrix rain effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-cyber-green text-xs font-mono animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} className="mb-2">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-cyber text-cyber-green mb-6 glitch-text" data-text="CYBERPUNK">
          CYBERPUNK
        </h1>
        
        {/* Subtitle with typing effect */}
        <div className="text-xl md:text-2xl text-cyber-blue mb-8 font-mono h-8">
          <span>{text}</span>
          <span className="animate-pulse">|</span>
        </div>

        {/* Description */}
        <p className="text-cyber-blue/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Access the neural network. Navigate through digital landscapes. 
          Experience the future of human-computer interface design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            className="cyber-border bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 px-8 py-3 font-mono text-lg"
          >
            &gt; INITIALIZE.SYSTEM
          </Button>
          <Button 
            variant="outline" 
            className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 px-8 py-3 font-mono text-lg"
          >
            &gt; ACCESS.TERMINAL
          </Button>
        </div>

        {/* Status Display */}
        <div className="cyber-panel p-4 max-w-md mx-auto">
          <div className="flex justify-between items-center text-sm font-mono">
            <span className="text-cyber-green">STATUS:</span>
            <span className="text-cyber-blue">READY</span>
          </div>
          <div className="flex justify-between items-center text-sm font-mono mt-2">
            <span className="text-cyber-green">NEURAL.LINK:</span>
            <span className="text-cyber-blue">ACTIVE</span>
          </div>
          <div className="flex justify-between items-center text-sm font-mono mt-2">
            <span className="text-cyber-green">SECURITY:</span>
            <span className="text-cyber-blue">ENCRYPTED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
