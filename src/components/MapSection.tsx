
import { Card } from '@/components/ui/card';

const MapSection = () => {
  const regions = [
    { name: 'NORTH.AMERICA', nodes: 12, status: 'ACTIVE', x: '25%', y: '30%' },
    { name: 'EUROPE', nodes: 18, status: 'ACTIVE', x: '50%', y: '25%' },
    { name: 'ASIA.PACIFIC', nodes: 24, status: 'ACTIVE', x: '75%', y: '35%' },
    { name: 'SOUTH.AMERICA', nodes: 8, status: 'EXPANDING', x: '30%', y: '65%' },
    { name: 'AFRICA', nodes: 6, status: 'DEVELOPING', x: '55%', y: '55%' },
    { name: 'OCEANIA', nodes: 4, status: 'PLANNED', x: '80%', y: '70%' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-cyber-yellow';
      case 'EXPANDING': return 'bg-cyber-blue';
      case 'DEVELOPING': return 'bg-cyber-blue/70';
      default: return 'bg-cyber-blue/40';
    }
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cyber text-cyber-yellow text-center mb-12 glitch-text" data-text="METAL.NETWORK">
          METAL.NETWORK
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* World Map Visualization */}
          <Card className="cyber-panel p-6 col-span-2 relative overflow-hidden">
            {/* Corner clips */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-cyber-yellow"
                 style={{clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)'}} />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-cyber-blue"
                 style={{clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)'}} />
            
            {/* Tab label */}
            <div className="absolute -top-3 left-6 bg-cyber-dark border border-cyber-yellow px-4 py-1"
                 style={{clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)'}}>
              <span className="text-xs font-mono text-cyber-yellow">GLOBAL.NETWORK</span>
            </div>

            <h3 className="text-cyber-yellow font-mono text-lg mb-6 mt-4">PROCESSING.NODES</h3>
            
            {/* Map container */}
            <div className="relative h-64 bg-cyber-black border border-cyber-blue/30 overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20"
                   style={{
                     backgroundImage: `
                       linear-gradient(rgba(0, 191, 255, 0.3) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(0, 191, 255, 0.3) 1px, transparent 1px)
                     `,
                     backgroundSize: '20px 20px'
                   }} />
              
              {/* Scanning lines */}
              <div className="absolute inset-0">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-scan-line opacity-60" />
                <div className="w-px h-full bg-gradient-to-b from-transparent via-cyber-yellow to-transparent animate-pulse absolute left-1/3" />
                <div className="w-px h-full bg-gradient-to-b from-transparent via-cyber-blue to-transparent animate-pulse absolute right-1/3" />
              </div>

              {/* Region nodes */}
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: region.x, top: region.y }}
                >
                  {/* Node pulse */}
                  <div className={`w-4 h-4 ${getStatusColor(region.status)} rounded-full animate-pulse`} />
                  <div className={`absolute inset-0 w-4 h-4 ${getStatusColor(region.status)} rounded-full animate-ping opacity-30`} />
                  
                  {/* Connection lines */}
                  {index < regions.length - 1 && (
                    <svg className="absolute top-2 left-2 w-32 h-16 pointer-events-none">
                      <path
                        d="M0,0 Q16,8 32,0"
                        stroke="rgba(0, 191, 255, 0.4)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="2,2"
                      />
                    </svg>
                  )}
                </div>
              ))}

              {/* Data streams */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs font-mono">
                <span className="text-cyber-yellow">ACTIVE.NODES: 72</span>
                <span className="text-cyber-blue">NETWORK.STATUS: OPTIMAL</span>
              </div>
            </div>

            {/* Segmented borders */}
            <div className="absolute left-0 top-1/3 w-1 h-12 bg-cyber-yellow opacity-60"
                 style={{clipPath: 'polygon(0 0, 100% 25%, 100% 75%, 0 100%)'}} />
            <div className="absolute right-0 bottom-1/3 w-1 h-12 bg-cyber-blue opacity-60"
                 style={{clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 75%)'}} />
          </Card>

          {/* Network Status */}
          <div className="space-y-4">
            <Card className="cyber-panel p-4 relative">
              {/* Tab */}
              <div className="absolute -top-3 left-4 bg-cyber-dark border border-cyber-blue px-3 py-1"
                   style={{clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'}}>
                <span className="text-xs font-mono text-cyber-blue">STATUS</span>
              </div>

              <h4 className="text-cyber-yellow font-mono text-sm mb-3 mt-2">NETWORK.METRICS</h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-cyber-blue">UPTIME:</span>
                  <span className="text-cyber-yellow">99.97%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyber-blue">LATENCY:</span>
                  <span className="text-cyber-yellow">12ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyber-blue">THROUGHPUT:</span>
                  <span className="text-cyber-yellow">2.4K TPS</span>
                </div>
              </div>
            </Card>

            {regions.map((region, index) => (
              <Card key={region.name} className="cyber-panel p-4 relative">
                {/* Asymmetric border */}
                <div className="absolute inset-0 border border-cyber-blue/20 m-0.5"
                     style={{clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)'}} />
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 ${getStatusColor(region.status)} rounded-full`} />
                    <span className="text-cyber-blue font-mono text-xs">{region.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-cyber-yellow font-mono text-xs">{region.nodes} NODES</div>
                    <div className="text-cyber-blue/70 font-mono text-xs">{region.status}</div>
                  </div>
                </div>

                {/* Accent overlay */}
                <div className="absolute top-1 right-2 w-6 h-0.5 bg-cyber-yellow opacity-50" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
