
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import DataPanels from '@/components/DataPanels';
import TerminalSection from '@/components/TerminalSection';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cyber-black text-cyber-blue overflow-hidden relative">
      {/* Animated background grid */}
      <div className="cyber-grid fixed inset-0 opacity-20" />
      
      {/* Scanning line effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-scan-line opacity-50" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Data Visualization Panels */}
      <DataPanels />

      {/* Terminal Section */}
      <TerminalSection />

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyber-blue/20 bg-cyber-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-cyber-green font-cyber text-lg mb-4">SYSTEM.STATUS</h3>
              <p className="text-sm text-cyber-blue/70">
                All systems operational. Neural network active.
                Data streams synchronized.
              </p>
            </div>
            <div>
              <h3 className="text-cyber-green font-cyber text-lg mb-4">CONNECT.LINKS</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-cyber-blue/70 hover:text-cyber-blue transition-colors">
                  &gt; Neural Interface
                </a>
                <a href="#" className="block text-sm text-cyber-blue/70 hover:text-cyber-blue transition-colors">
                  &gt; Data Archive
                </a>
                <a href="#" className="block text-sm text-cyber-blue/70 hover:text-cyber-blue transition-colors">
                  &gt; System Logs
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-cyber-green font-cyber text-lg mb-4">ACCESS.CODE</h3>
              <p className="text-xs text-cyber-blue/50 font-mono">
                0xFF00A1B2C3D4E5F6
              </p>
              <p className="text-xs text-cyber-blue/50 font-mono mt-2">
                ENCRYPTED.SECURE.VERIFIED
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cyber-blue/20 text-center">
            <p className="text-xs text-cyber-blue/50">
              © 2087 CYBER.SYSTEMS &gt; ALL.RIGHTS.RESERVED &gt; NEURAL.LINK.ACTIVE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
