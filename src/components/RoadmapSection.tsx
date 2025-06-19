
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const RoadmapSection = () => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const roadmapData = [
    {
      phase: 'PHASE.01',
      title: 'FOUNDATION',
      status: 'COMPLETE',
      icon: '🚀',
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
      icon: '⚡',
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
      icon: '🛠',
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
      icon: '🌐',
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

  const TimelineSVG = () => (
    <div className="relative w-full h-24 mb-12">
      <svg className="w-full h-full" viewBox="0 0 800 100">
        <defs>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="50%" stopColor="#00bfff" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
          <filter id="timelineGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main timeline */}
        <line 
          x1="50" 
          y1="50" 
          x2="750" 
          y2="50" 
          stroke="url(#timelineGradient)"
          strokeWidth="3"
          filter="url(#timelineGlow)"
        />
        
        {/* Segmented progress line */}
        <line 
          x1="50" 
          y1="50" 
          x2={50 + (700 * (animationProgress / 100))} 
          y2="50" 
          stroke="#ffd700"
          strokeWidth="5"
          strokeDasharray="10,5"
          className="animate-pulse"
        />

        {/* Milestone nodes */}
        {roadmapData.map((milestone, index) => {
          const x = 50 + (index * 175);
          const isActive = index <= 1; // First two phases are active/complete
          
          return (
            <g key={index}>
              {/* Node circle */}
              <circle
                cx={x}
                cy="50"
                r="12"
                fill={isActive ? "#ffd700" : "rgba(0,191,255,0.3)"}
                stroke={isActive ? "#00bfff" : "#ffd700"}
                strokeWidth="2"
                filter="url(#timelineGlow)"
                className={isActive ? "animate-pulse" : ""}
              />
              
              {/* Inner node */}
              <circle
                cx={x}
                cy="50"
                r="6"
                fill={isActive ? "#00bfff" : "transparent"}
                className={isActive ? "animate-ping" : ""}
                style={{ animationDelay: `${index * 0.5}s` }}
              />
              
              {/* Icon */}
              <text
                x={x}
                y="35"
                textAnchor="middle"
                fontSize="16"
                className="pointer-events-none"
              >
                {milestone.icon}
              </text>
              
              {/* Phase label */}
              <text
                x={x}
                y="75"
                textAnchor="middle"
                fill="#00bfff"
                fontSize="10"
                fontFamily="monospace"
                className="pointer-events-none"
              >
                {milestone.phase}
              </text>
            </g>
          );
        })}
        
        {/* Floating particles along timeline */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx={100 + (i * 80) + (animationProgress * 2) % 600}
            cy={45 + 10 * Math.sin((animationProgress + i * 20) * Math.PI / 180)}
            r="1"
            fill="#ffd700"
            opacity="0.6"
            className="animate-pulse"
          />
        ))}
      </svg>
    </div>
  );

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cyber text-cyber-yellow text-center mb-12 glitch-text tracking-widest" data-text="METAL.ROADMAP">
          METAL.ROADMAP
        </h2>

        {/* Animated Timeline */}
        <TimelineSVG />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapData.map((phase, index) => (
            <Card key={phase.phase} className="cyber-panel cyber-border p-6 relative overflow-hidden hover:ring ring-cyan-400/20 transition-all duration-300">
              {/* Enhanced corner clips */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyber-yellow"
                   style={{clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)'}} />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyber-blue"
                   style={{clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%, 0 30%)'}} />
              
              {/* Enhanced tab with phase */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyber-dark border border-cyber-yellow px-3 py-1"
                   style={{clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'}}>
                <span className="text-xs font-mono text-cyber-yellow">{phase.phase}</span>
              </div>

              <div className="mt-4">
                {/* Icon and title */}
                <div className="flex items-center justify-center mb-3">
                  <span className="text-2xl mr-2">{phase.icon}</span>
                  <h3 className="text-cyber-yellow font-cyber text-lg tracking-widest">{phase.title}</h3>
                </div>
                
                <div className={`text-sm font-mono mb-4 text-center ${getStatusColor(phase.status)}`}>
                  STATUS: {phase.status}
                </div>

                <div className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 mt-2 bg-cyber-blue"
                           style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}} />
                      <span className="text-cyber-blue/80 text-sm font-mono leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced segmented border */}
              <div className="absolute bottom-0 left-4 right-4 h-px">
                <div className="flex space-x-2">
                  <div className="flex-1 h-px bg-cyber-yellow" />
                  <div className="w-2 h-px bg-transparent" />
                  <div className="flex-1 h-px bg-cyber-blue" />
                  <div className="w-2 h-px bg-transparent" />
                  <div className="flex-1 h-px bg-cyber-yellow" />
                </div>
              </div>

              {/* Enhanced accent overlays */}
              <div className="absolute top-6 right-2 w-1 h-8 bg-cyber-yellow opacity-60"
                   style={{clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)'}} />
              
              {/* Progress indicator */}
              <div className={`absolute top-2 left-2 w-2 h-2 rounded-full ${
                phase.status === 'COMPLETE' ? 'bg-cyber-yellow animate-pulse' :
                phase.status === 'ACTIVE' ? 'bg-cyber-blue animate-ping' :
                'bg-cyber-blue/30'
              }`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
