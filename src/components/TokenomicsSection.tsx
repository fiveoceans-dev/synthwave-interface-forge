import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@blueprintjs/core';

const TokenomicsSection = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'allocation' | 'timeline'>('allocation');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const tokenData = [
    { 
      label: 'LIQUIDITY.POOL', 
      value: '400,000,000', 
      percent: 40, 
      color: '#ffd700',
      icon: 'tank',
      description: 'Primary liquidity reserves for trading pairs'
    },
    { 
      label: 'DEVELOPMENT', 
      value: '200,000,000', 
      percent: 20, 
      color: '#00bfff',
      icon: 'code',
      description: 'Core development and infrastructure'
    },
    { 
      label: 'MARKETING', 
      value: '150,000,000', 
      percent: 15, 
      color: '#ffd700',
      icon: 'megaphone',
      description: 'Community growth and brand awareness'
    },
    { 
      label: 'TEAM.RESERVE', 
      value: '100,000,000', 
      percent: 10, 
      color: '#00bfff',
      icon: 'people',
      description: 'Team allocation with vesting schedule'
    },
    { 
      label: 'PARTNERSHIPS', 
      value: '100,000,000', 
      percent: 10, 
      color: '#ffd700',
      icon: 'link',
      description: 'Strategic partnerships and integrations'
    },
    { 
      label: 'AIRDROPS', 
      value: '50,000,000', 
      percent: 5, 
      color: '#00bfff',
      icon: 'send-message',
      description: 'Community rewards and incentives'
    }
  ];

  const AnimatedPieChart = () => {
    let cumulativePercent = 0;
    
    return (
      <div className="relative w-64 h-64 mx-auto">
        {/* Hologram base */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-8 bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent rounded-full blur-sm" />
        
        <svg className="w-full h-full transform rotate-90" viewBox="0 0 200 200">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background circle */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(0,191,255,0.1)" strokeWidth="4"/>
          
          {tokenData.map((segment, index) => {
            const startAngle = (cumulativePercent / 100) * 360;
            const endAngle = ((cumulativePercent + segment.percent) / 100) * 360;
            const largeArcFlag = segment.percent > 50 ? 1 : 0;
            
            const startX = 100 + 76 * Math.cos((startAngle - 90) * Math.PI / 180);
            const startY = 100 + 76 * Math.sin((startAngle - 90) * Math.PI / 180);
            const endX = 100 + 76 * Math.cos((endAngle - 90) * Math.PI / 180);
            const endY = 100 + 76 * Math.sin((endAngle - 90) * Math.PI / 180);
            
            const pathData = [
              `M 100 100`,
              `L ${startX} ${startY}`,
              `A 76 76 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              'Z'
            ].join(' ');
            
            cumulativePercent += segment.percent;
            
            const isSelected = selectedSegment === index;
            const scale = isSelected ? 1.1 : 1 + 0.05 * Math.sin((animationPhase + index * 60) * Math.PI / 180);
            
            return (
              <g key={index}>
                <path
                  d={pathData}
                  fill={segment.color}
                  fillOpacity={isSelected ? "0.9" : "0.7"}
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="1"
                  filter="url(#glow)"
                  className="hover:fill-opacity-90 transition-all duration-300 cursor-pointer"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: '100px 100px'
                  }}
                  onClick={() => setSelectedSegment(selectedSegment === index ? null : index)}
                />
                
                {/* Segment labels */}
                <text
                  x={100 + 50 * Math.cos(((startAngle + endAngle) / 2 - 90) * Math.PI / 180)}
                  y={100 + 50 * Math.sin(((startAngle + endAngle) / 2 - 90) * Math.PI / 180)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="8"
                  fontFamily="monospace"
                  className="pointer-events-none"
                  transform={`rotate(${(startAngle + endAngle) / 2} ${100 + 50 * Math.cos(((startAngle + endAngle) / 2 - 90) * Math.PI / 180)} ${100 + 50 * Math.sin(((startAngle + endAngle) / 2 - 90) * Math.PI / 180)})`}
                >
                  {segment.percent}%
                </text>
              </g>
            );
          })}
          
          {/* Center circle */}
          <circle cx="100" cy="100" r="25" fill="rgba(10,10,10,0.9)" stroke="#ffd700" strokeWidth="2"/>
          <text x="100" y="95" textAnchor="middle" fill="#ffd700" fontSize="10" fontFamily="monospace">TOTAL</text>
          <text x="100" y="105" textAnchor="middle" fill="#00bfff" fontSize="8" fontFamily="monospace">1B NMTL</text>
        </svg>

        {/* Rotating outer ring */}
        <div className="absolute inset-0 border-2 border-cyber-blue/20 rounded-full animate-spin" style={{animationDuration: '30s'}} />
      </div>
    );
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cyber text-cyber-yellow text-center mb-12 glitch-text tracking-widest" data-text="METAL.TOKENOMICS">
          METAL.TOKENOMICS
        </h2>

        <div className="mb-8 flex justify-center space-x-4">
          <Button
            variant={viewMode === 'allocation' ? 'default' : 'outline'}
            onClick={() => setViewMode('allocation')}
            className="font-mono"
          >
            <Icon icon="pie-chart" className="mr-2" />
            ALLOCATION
          </Button>
          <Button
            variant={viewMode === 'timeline' ? 'default' : 'outline'}
            onClick={() => setViewMode('timeline')}
            className="font-mono"
          >
            <Icon icon="timeline-events" className="mr-2" />
            TIMELINE
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Animated Token Distribution Chart */}
          <div className="relative">
            <Card className="cyber-panel p-8 relative overflow-hidden">
              {/* Corner clips and segments */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyber-yellow" 
                   style={{clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)'}} />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyber-yellow"
                   style={{clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)'}} />
              
              {/* Tab label */}
              <div className="absolute -top-3 left-4 bg-cyber-dark border border-cyber-yellow px-4 py-1"
                   style={{clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'}}>
                <span className="text-xs font-mono text-cyber-yellow">DISTRIBUTION</span>
              </div>

              <h3 className="text-cyber-yellow font-cyber text-lg mb-6 mt-4 tracking-widest">TOKEN.ALLOCATION</h3>
              
              <AnimatedPieChart />

              {selectedSegment !== null && (
                <div className="mt-4 p-4 bg-cyber-black/50 border border-cyber-blue rounded">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon icon={tokenData[selectedSegment].icon as any} className="text-cyber-yellow" />
                    <span className="text-cyber-yellow font-mono text-sm">{tokenData[selectedSegment].label}</span>
                  </div>
                  <p className="text-cyber-blue text-xs font-mono">{tokenData[selectedSegment].description}</p>
                </div>
              )}

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-0 w-2 h-8 bg-cyber-yellow opacity-50" 
                   style={{clipPath: 'polygon(0 0, 100% 25%, 100% 75%, 0 100%)'}} />
              <div className="absolute top-1/2 right-0 w-2 h-8 bg-cyber-blue opacity-50"
                   style={{clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 75%)'}} />
            </Card>
          </div>

          {/* Token Details with enhanced styling */}
          <div className="space-y-4">
            {tokenData.map((item, index) => (
              <Card 
                key={item.label} 
                className={`cyber-panel cyber-border p-4 relative hover:ring ring-cyan-400/20 transition-all duration-300 cursor-pointer ${
                  selectedSegment === index ? 'ring ring-cyan-400/40' : ''
                }`}
                onClick={() => setSelectedSegment(selectedSegment === index ? null : index)}
              >
                {/* Enhanced corner clips */}
                <div className="absolute inset-0 border border-cyber-blue/30 m-1"
                     style={{clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'}} />
                
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full" style={{backgroundColor: item.color}} />
                    <Icon icon={item.icon as any} className="text-cyber-blue" />
                    <span className="text-cyber-blue font-mono text-sm tracking-wider">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-cyber-yellow font-mono text-sm">{item.value}</div>
                    <div className="text-cyber-blue/70 font-mono text-xs">{item.percent}%</div>
                  </div>
                </div>

                {/* Enhanced progress bar */}
                <div className="mt-3 h-2 bg-cyber-dark border border-cyber-blue/30 overflow-hidden relative">
                  <div 
                    className="h-full transition-all duration-1000 relative overflow-hidden"
                    style={{ 
                      width: `${item.percent * 10}%`,
                      backgroundColor: item.color,
                      boxShadow: `0 0 10px ${item.color}40`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </div>
                </div>

                {/* Accent overlay */}
                <div className="absolute top-0 right-4 w-8 h-1 opacity-70" style={{backgroundColor: item.color}} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
