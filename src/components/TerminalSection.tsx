
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TerminalSection = () => {
  const [terminalLines, setTerminalLines] = useState([
    '> INITIALIZING NEURAL INTERFACE...',
    '> LOADING CYBERPUNK PROTOCOLS...',
    '> ESTABLISHING SECURE CONNECTION...',
    '> SYSTEM READY FOR INPUT'
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const commands = {
    help: [
      'AVAILABLE COMMANDS:',
      '  help     - Show this help message',
      '  status   - Display system status',
      '  neural   - Access neural network',
      '  hack     - Initialize hacking protocols',
      '  matrix   - Enter the matrix',
      '  clear    - Clear terminal'
    ],
    status: [
      'SYSTEM STATUS: OPERATIONAL',
      'CPU LOAD: 78%',
      'MEMORY USAGE: 45%',
      'NETWORK STATUS: CONNECTED',
      'SECURITY LEVEL: MAXIMUM'
    ],
    neural: [
      'ACCESSING NEURAL NETWORK...',
      'SYNAPTIC CONNECTIONS: STABLE',
      'CONSCIOUSNESS UPLOAD: 100%',
      'NEURAL LINK ESTABLISHED'
    ],
    hack: [
      'INITIALIZING HACKING PROTOCOLS...',
      'SCANNING TARGET SYSTEMS...',
      'VULNERABILITIES DETECTED: 3',
      'BREACH SUCCESSFUL',
      'ACCESS GRANTED'
    ],
    matrix: [
      'ENTERING THE MATRIX...',
      'REALITY.EXE HAS STOPPED WORKING',
      'LOADING SIMULATION...',
      'WELCOME TO THE MATRIX'
    ]
  };

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    setTerminalLines(prev => [...prev, `> ${command}`]);

    if (cmd === 'clear') {
      setTerminalLines(['> TERMINAL CLEARED', '> SYSTEM READY FOR INPUT']);
    } else if (commands[cmd as keyof typeof commands]) {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, ...commands[cmd as keyof typeof commands]]);
      }, 500);
    } else if (cmd) {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, `COMMAND NOT FOUND: ${command}`]);
      }, 500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(!isTyping);
    }, 500);
    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-cyber text-cyber-green text-center mb-12 glitch-text" data-text="NEURAL.TERMINAL">
          NEURAL.TERMINAL
        </h2>

        <Card className="cyber-panel p-6">
          <div className="bg-cyber-black border border-cyber-blue/50 rounded p-4 h-96 overflow-y-auto font-mono text-sm">
            {terminalLines.map((line, index) => (
              <div key={index} className="text-cyber-green mb-1">
                {line}
              </div>
            ))}
            <div className="flex items-center text-cyber-blue mt-2">
              <span className="text-cyber-green">root@cybertech:~$</span>
              <form onSubmit={handleSubmit} className="flex-1 ml-2">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  className="bg-transparent border-none outline-none text-cyber-blue w-full"
                  autoFocus
                />
              </form>
              <span className={`w-2 h-4 bg-cyber-blue ml-1 ${isTyping ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.keys(commands).map((cmd) => (
              <Button
                key={cmd}
                variant="outline"
                size="sm"
                className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 font-mono text-xs"
                onClick={() => handleCommand(cmd)}
              >
                {cmd}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TerminalSection;
