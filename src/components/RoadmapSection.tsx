
import { Card } from '@/components/ui/card';

const RoadmapSection = () => {
  const roadmapData = [
    {
      phase: 'PHASE.01',
      title: 'FOUNDATION',
      status: 'COMPLETE',
      items: [
        'Smart Contract Development',
        'Security Audit & Testing',
        'Website & Branding Launch',
        'Community Building'
      ]
    },
    {
      phase: 'PHASE.02',
      title: 'EXPANSION',
      status: 'ACTIVE',
      items: [
        'DEX Listing & Liquidity',
        'Marketing Campaign',
        'Partnership Network',
        'Staking Platform'
      ]
    },
    {
      phase: 'PHASE.03',
      title: 'INTEGRATION',
      status: 'PENDING',
      items: [
        'CEX Listings',
        'Mobile App Development',
        'Cross-chain Bridge',
        'NFT Marketplace'
      ]
    },
    {
      phase: 'PHASE.04',
      title: 'ECOSYSTEM',
      status: 'FUTURE',
      items: [
        'DAO Governance',
        'Metal Processing DeFi',
        'Industrial Partnerships',
        'Global Expansion'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETE': return 'text-cyber-yellow';
      case 'ACTIVE': return 'text-cyber-blue';
      case 'PENDING': return 'text-cyber-blue/70';
      default: return 'text-cyber-blue/50';
    }
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cyber text-cyber-yellow text-center mb-12 glitch-text" data-text="METAL.ROADMAP">
          METAL.ROADMAP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapData.map((phase, index) => (
            <Card key={phase.phase} className="cyber-panel p-6 relative overflow-hidden">
              {/* Clipped corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyber-yellow"
                   style={{clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)'}} />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyber-blue"
                   style={{clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%, 0 30%)'}} />
              
              {/* Tab with phase */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyber-dark border border-cyber-yellow px-3 py-1"
                   style={{clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'}}>
                <span className="text-xs font-mono text-cyber-yellow">{phase.phase}</span>
              </div>

              <div className="mt-4">
                <h3 className="text-cyber-yellow font-cyber text-lg mb-2">{phase.title}</h3>
                <div className={`text-sm font-mono mb-4 ${getStatusColor(phase.status)}`}>
                  STATUS: {phase.status}
                </div>

                <div className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 mt-2 bg-cyber-blue"
                           style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
                      <span className="text-cyber-blue/80 text-sm font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segmented border */}
              <div className="absolute bottom-0 left-4 right-4 h-px">
                <div className="flex space-x-2">
                  <div className="flex-1 h-px bg-cyber-yellow" />
                  <div className="w-2 h-px bg-transparent" />
                  <div className="flex-1 h-px bg-cyber-blue" />
                  <div className="w-2 h-px bg-transparent" />
                  <div className="flex-1 h-px bg-cyber-yellow" />
                </div>
              </div>

              {/* Accent overlays */}
              <div className="absolute top-6 right-2 w-1 h-8 bg-cyber-yellow opacity-60"
                   style={{clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)'}} />
              
              {/* Connection line to next phase */}
              {index < roadmapData.length - 1 && (
                <div className="absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-cyber-blue to-transparent hidden lg:block" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
