import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Globe from 'react-globe.gl';
import { reviews } from '../data/reviews';

const locationCoordinates: Record<string, { lat: number; lng: number }> = {
  "London, UK 🇬🇧": { lat: 51.5074, lng: -0.1278 },
  "Texas, USA 🇺🇸": { lat: 31.9686, lng: -99.9018 },
  "Sydney, Australia 🇦🇺": { lat: -33.8688, lng: 151.2093 },
  "Dublin, Ireland 🇮🇪": { lat: 53.3498, lng: -6.2603 },
  "Toronto, Canada 🇨🇦": { lat: 43.6510, lng: -79.3470 },
  "Manchester, UK 🇬🇧": { lat: 53.4808, lng: -2.2426 },
  "Vancouver, Canada 🇨🇦": { lat: 49.2827, lng: -123.1207 },
  "New Zealand 🇳🇿": { lat: -40.9006, lng: 174.8860 },
  "Chicago, USA 🇺🇸": { lat: 41.8781, lng: -87.6298 },
  "Birmingham, UK 🇬🇧": { lat: 52.4862, lng: -1.8904 },
  "Cape Town, South Africa 🇿🇦": { lat: -33.9249, lng: 18.4241 },
  "Lisbon, Portugal 🇵🇹": { lat: 38.7223, lng: -9.1393 },
  "Glasgow, Scotland 🇬🇧": { lat: 55.8642, lng: -4.2518 },
  "Los Angeles, USA 🇺🇸": { lat: 34.0522, lng: -118.2437 },
  "Melbourne, Australia 🇦🇺": { lat: -37.8136, lng: 144.9631 },
  "Leeds, UK 🇬🇧": { lat: 53.8008, lng: -1.5491 },
  "Singapore 🇸🇬": { lat: 1.3521, lng: 103.8198 },
  "Boston, USA 🇺🇸": { lat: 42.3601, lng: -71.0589 },
  "Liverpool, UK 🇬🇧": { lat: 53.4084, lng: -2.9916 },
  "Auckland, New Zealand 🇳🇿": { lat: -36.8485, lng: 174.7633 },
  "Bristol, UK 🇬🇧": { lat: 51.4545, lng: -2.5879 },
  "Brisbane, Australia 🇦🇺": { lat: -27.4705, lng: 153.0260 },
  "Atlanta, USA 🇺🇸": { lat: 33.7490, lng: -84.3880 },
  "Cork, Ireland 🇮🇪": { lat: 51.8985, lng: -8.4756 },
  "Montreal, Canada 🇨🇦": { lat: 45.5017, lng: -73.5673 },
  "Wellington, New Zealand 🇳🇿": { lat: -41.2865, lng: 174.7762 },
  "Lagos, Nigeria 🇳🇬": { lat: 6.5244, lng: 3.3792 },
  "Berlin, Germany 🇩🇪": { lat: 52.5200, lng: 13.4050 },
  "New York, USA 🇺🇸": { lat: 40.7128, lng: -74.0060 },
  "Miami, USA 🇺🇸": { lat: 25.7617, lng: -80.1918 },
  "Cardiff, Wales 🇬🇧": { lat: 51.4816, lng: -3.1791 },
  "Edinburgh, Scotland 🇬🇧": { lat: 55.9533, lng: -3.1883 },
  "Denver, USA 🇺🇸": { lat: 39.7392, lng: -104.9903 },
  "Perth, Australia 🇦🇺": { lat: -31.9505, lng: 115.8605 },
  "Seattle, USA 🇺🇸": { lat: 47.6062, lng: -122.3321 },
  "Calgary, Canada 🇨🇦": { lat: 51.0447, lng: -114.0719 },
};

export default function InteractiveGlobe() {
  const globeRef = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPoint, setHoveredPoint] = useState<any>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = hoveredPoint ? 0.05 : 0.5;
      globeRef.current.controls().enableZoom = false;
      globeRef.current.pointOfView({ altitude: 2.5 });
    }
  }, [hoveredPoint]);

  const gData = reviews.map(review => {
    const coords = locationCoordinates[review.location] || { lat: (Math.random() - 0.5) * 180, lng: (Math.random() - 0.5) * 360 };
    return {
      lat: coords.lat,
      lng: coords.lng,
      size: 0.02,
      color: '#C5A059',
      review: review
    };
  });

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-auto z-0">
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={gData}
          pointAltitude="size"
          pointColor={(d: any) => d === hoveredPoint ? '#FFFFFF' : d.color}
          pointRadius={(d: any) => d === hoveredPoint ? 1.5 : 0.8}
          pointsMerge={false}
          onPointHover={(point) => setHoveredPoint(point)}
        />
      </div>
      {hoveredPoint && createPortal(
        <div
          className="fixed z-[9999] pointer-events-none transition-opacity duration-200"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20,
          }}
        >
          <div className="bg-[#0a0a0a]/95 border border-[#C5A059]/50 p-4 rounded-xl shadow-[0_0_30px_rgba(197,160,89,0.3)] backdrop-blur-md max-w-[250px] font-sans">
            <div className="text-[#C5A059] text-sm mb-1">
              {"★".repeat(hoveredPoint.review.rating) + "☆".repeat(5 - hoveredPoint.review.rating)}
            </div>
            <div className="text-white text-xs mb-2 font-bold">
              {hoveredPoint.review.name} - {hoveredPoint.review.location}
            </div>
            <div className="text-white/70 text-[11px] leading-relaxed">
              "{hoveredPoint.review.text}"
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
