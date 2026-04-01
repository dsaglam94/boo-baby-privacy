"use client";

import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

interface ShowcaseProps {
  screenshots: string[];
}

export default function Showcase({ screenshots }: ShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '1000px',
      height: 'auto',
      minHeight: '700px',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem'
    }}>
      {/* Desktop Composition */}
      <div className="desktop-only" style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {/* Background elements for depth */}
        <div className="floating-delayed" style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 1
        }} />
        <div className="floating" style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 1
        }} />

        {/* Side Screenshot - Left (Mockup) */}
        <div className="floating-slow" style={{
          position: 'absolute',
          left: '0%',
          top: '10%',
          transform: 'scale(0.85) rotate(-10deg)',
          zIndex: 5,
          opacity: 0.9
        }}>
          <div className="phone-mockup">
            <div className="dynamic-island" />
            <div className="phone-screen">
              <img src={screenshots[1]} alt="App Feature" />
            </div>
          </div>
        </div>

        {/* Side Screenshot - Right (Mockup) */}
        <div className="floating" style={{
          position: 'absolute',
          right: '0%',
          top: '15%',
          transform: 'scale(0.85) rotate(8deg)',
          zIndex: 5,
          opacity: 0.9
        }}>
          <div className="phone-mockup">
            <div className="dynamic-island" />
            <div className="phone-screen">
              <img src={screenshots[2]} alt="App Feature" />
            </div>
          </div>
        </div>

        {/* Main Phone Mockup */}
        <div className="phone-mockup floating">
          <div className="dynamic-island" />
          <div className="phone-screen">
            <img src={screenshots[0]} alt="Boo Baby Main" />
          </div>
        </div>
      </div>

      {/* Mobile Component: Time Loop Shuffle */}
      <div className="mobile-only" style={{
        display: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}>
        <div className="phone-mockup floating">
          <div className="dynamic-island" />
          <div className="phone-screen" style={{ position: 'relative' }}>
            {screenshots.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`App Screenshot ${index + 1}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: index === currentIndex ? 1 : 0,
                  transition: 'opacity 1.5s ease-in-out',
                  zIndex: index === currentIndex ? 1 : 0
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Shuffle indicators */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          marginTop: '2rem' 
        }}>
          {screenshots.map((_, i) => (
            <div 
              key={i}
              style={{
                width: i === currentIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === currentIndex ? 'var(--primary)' : 'var(--border)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
