"use client";

import type { Locale } from "@/lib/get-dictionary";

interface GooglePlayButtonProps {
  lang: Locale;
  variant?: "hero" | "header";
}

export default function GooglePlayButton({ lang, variant = "hero" }: GooglePlayButtonProps) {
  const isHero = variant === "hero";
  
  // Localization for the labels
  const getLabels = () => {
    switch (lang) {
      case 'tr': return { top: "Google Play'den", bottom: "İndirin", badge: "YAKINDA" };
      case 'fr': return { top: "DISPONIBLE SUR", bottom: "Google Play", badge: "BIENTÔT" };
      case 'de': return { top: "JETZT BEI", bottom: "Google Play", badge: "BALD" };
      default: return { top: "GET IT ON", bottom: "Google Play", badge: "SOON" };
    }
  };

  const labels = getLabels();

  return (
    <div
      className={`google-play-button ${variant}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: isHero ? '0.75rem' : '0.45rem',
        background: '#000',
        color: '#fff',
        padding: isHero ? '0.5rem 1.4rem' : '0.35rem 0.9rem',
        borderRadius: isHero ? '14px' : '10px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: isHero ? '0 10px 30px -10px rgba(0, 0, 0, 0.2)' : 'none',
        width: 'fit-content',
        opacity: 0.6,
        cursor: 'default',
        position: 'relative',
        filter: 'grayscale(0.5)'
      }}
    >

      {/* Google Play Logo Image */}
      <img 
        src="/playstore.png" 
        alt="Google Play"
        style={{ 
          width: isHero ? '28px' : '18px', 
          height: isHero ? '28px' : '18px', 
          objectFit: 'contain',
          flexShrink: 0 
        }}
      />
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        lineHeight: 1.1,
        pointerEvents: 'none'
      }}>
        <span style={{ 
          fontSize: isHero ? '0.7rem' : '0.55rem', 
          fontWeight: 500, 
          opacity: 0.8,
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          marginBottom: '1px'
        }}>
          {labels.top}
        </span>
        <span style={{ 
          fontSize: isHero ? '1.35rem' : '0.95rem', 
          fontWeight: 600,
          fontFamily: 'var(--font-outfit)',
          letterSpacing: '-0.01em'
        }}>
          {labels.bottom}
        </span>
      </div>
    </div>
  );
}
