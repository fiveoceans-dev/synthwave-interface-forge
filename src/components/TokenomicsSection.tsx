
import { Card } from '@/components/ui/card';

const TokenomicsSection = () => {
  const tokenData = [
    { label: 'TOTAL.SUPPLY', value: '1,000,000,000', percent: '100%' },
    { label: 'LIQUIDITY.POOL', value: '400,000,000', percent: '40%' },
    { label: 'DEVELOPMENT', value: '200,000,000', percent: '20%' },
    { label: 'MARKETING', value: '150,000,000', percent: '15%' },
    { label: 'TEAM.RESERVE', value: '100,000,000', percent: '10%' },
    { label: 'PARTNERSHIPS', value: '100,000,000', percent: '10%' },
    { label: 'AIRDROPS', value: '50,000,000', percent: '5%' }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cyber text-cyber-yellow text-center mb-12 glitch-text" data-text="METAL.TOKENOMICS">
          METAL.TOKENOMICS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Token Distribution Chart */}
          <div className="relative">
            <Card className="cyber-panel p-6 relative overflow-hidden">
              {/* Corner clips and segments */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyber-yellow" 
                   style={{clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)'}} />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyber-yellow"
                   style={{clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)'}} />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyber-blue"
                   style={{clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0 100%)'}} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyber-blue"
                   style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%)'}} />
              
              {/* Tab label */}
              <div className="absolute -top-3 left-4 bg-cyber-dark border border-cyber-yellow px-4 py-1"
                   style={{clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'}}>
                <span className="text-xs font-mono text-cyber-yellow">DISTRIBUTION</span>
              </div>

              <h3 className="text-cyber-yellow font-mono text-lg mb-6 mt-4">TOKEN.ALLOCATION</h3>
              
              {/* Circular progress visualization */}
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,191,255,0.1)" strokeWidth="8"/>
                    {tokenData.map((item, index) => {
                      const offset = tokenData.slice(0, index).reduce((sum, prev) => sum + parseInt(prev.percent), 0);
                      const circumference = 2 * Math.PI * 40;
                      const strokeLength = (parseInt(item.percent) / 100) * circumference;
                      const strokeOffset = (offset / 100) * circumference;
                      
                      return (
                        <circle
                          key={item.label}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={index % 2 === 0 ? '#ffd700' : '#00bfff'}
                          strokeWidth="8"
                          strokeDasharray={`${strokeLength} ${circumference}`}
                          strokeDashoffset={-strokeOffset}
                          className="transition-all duration-1000"
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-cyber-yellow font-mono text-sm">TOTAL</div>
                      <div className="text-cyber-blue font-mono text-xs">1B NMTL</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Segmented border decoration */}
              <div className="absolute top-1/2 left-0 w-2 h-8 bg-cyber-yellow opacity-50" 
                   style={{clipPath: 'polygon(0 0, 100% 25%, 100% 75%, 0 100%)'}} />
              <div className="absolute top-1/2 right-0 w-2 h-8 bg-cyber-blue opacity-50"
                   style={{clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 75%)'}} />
            </Card>
          </div>

          {/* Token Details */}
          <div className="space-y-4">
            {tokenData.map((item, index) => (
              <Card key={item.label} className="cyber-panel p-4 relative">
                {/* Asymmetric layers */}
                <div className="absolute inset-0 border border-cyber-blue/30 m-1"
                     style={{clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'}} />
                
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 ${index % 2 === 0 ? 'bg-cyber-yellow' : 'bg-cyber-blue'}`}
                         style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'}} />
                    <span className="text-cyber-blue font-mono text-sm">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-cyber-yellow font-mono text-sm">{item.value}</div>
                    <div className="text-cyber-blue/70 font-mono text-xs">{item.percent}</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-3 h-1 bg-cyber-dark border border-cyber-blue/30 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${index % 2 === 0 ? 'bg-cyber-yellow' : 'bg-cyber-blue'}`}
                    style={{ width: item.percent }}
                  />
                </div>

                {/* Accent overlay */}
                <div className="absolute top-0 right-4 w-8 h-1 bg-cyber-yellow opacity-70" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
