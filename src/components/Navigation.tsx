
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME.SYS' },
    { id: 'data', label: 'DATA.CORE' },
    { id: 'neural', label: 'NEURAL.NET' },
    { id: 'terminal', label: 'TERMINAL' },
    { id: 'access', label: 'ACCESS.LOG' }
  ];

  return (
    <nav className="relative z-50 bg-cyber-dark/90 backdrop-blur-sm border-b border-cyber-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border border-cyber-green cyber-border bg-cyber-green/10 flex items-center justify-center">
              <div className="w-4 h-4 bg-cyber-green animate-glow-pulse" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
            </div>
            <span className="font-cyber text-xl text-cyber-green glitch-text" data-text="CYBERTECH">
              CYBERTECH
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`
                  font-mono text-sm px-4 py-2 transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-cyber-green bg-cyber-green/10 cyber-border' 
                    : 'text-cyber-blue/70 hover:text-cyber-blue hover:bg-cyber-blue/10'
                  }
                `}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
            <span className="text-xs text-cyber-green font-mono">ONLINE</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
