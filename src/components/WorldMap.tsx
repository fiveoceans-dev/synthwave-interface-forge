
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WorldMap = () => {
  const [nodes, setNodes] = useState([
    { id: 1, lat: 40.7128, lng: -74.0060, city: 'New York', activity: 94, status: 'ACTIVE' },
    { id: 2, lat: 51.5074, lng: -0.1278, city: 'London', activity: 87, status: 'ACTIVE' },
    { id: 3, lat: 35.6762, lng: 139.6503, city: 'Tokyo', activity: 91, status: 'ACTIVE' },
    { id: 4, lat: -33.8688, lng: 151.2093, city: 'Sydney', activity: 78, status: 'EXPANDING' },
    { id: 5, lat: 55.7558, lng: 37.6176, city: 'Moscow', activity: 82, status: 'ACTIVE' },
    { id: 6, lat: -23.5505, lng: -46.6333, city: 'São Paulo', activity: 65, status: 'PENDING' },
  ]);

  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 360);
      
      // Simulate activity changes
      setNodes(prev => prev.map(node => ({
        ...node,
        activity: Math.max(50, Math.min(100, node.activity + (Math.random() - 0.5) * 10))
      })));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (status: string, activity: number) => {
    const baseColor = status === 'ACTIVE' ? '#ffd700' : status === 'EXPANDING' ? '#00bfff' : '#888';
    const opacity = activity / 100;
    return { color: baseColor, opacity };
  };

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%', backgroundColor: '#0a0a0a' }}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {nodes.map((node) => {
          const { color, opacity } = getNodeColor(node.status, node.activity);
          const pulseScale = 1 + 0.3 * Math.sin((animationPhase + node.id * 60) * Math.PI / 180);
          
          return (
            <CircleMarker
              key={node.id}
              center={[node.lat, node.lng]}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: opacity * 0.6,
                weight: 2,
                radius: 8 * pulseScale,
              }}
            >
              <Popup>
                <div className="bg-cyber-dark p-2 border border-cyber-blue rounded">
                  <div className="text-cyber-yellow font-mono text-sm">{node.city}</div>
                  <div className="text-cyber-blue font-mono text-xs">Activity: {node.activity.toFixed(0)}%</div>
                  <div className="text-cyber-blue font-mono text-xs">Status: {node.status}</div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
      
      {/* Overlay grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 cyber-grid" />
    </div>
  );
};

export default WorldMap;
