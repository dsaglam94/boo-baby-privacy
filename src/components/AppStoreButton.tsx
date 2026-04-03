"use client";

import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/get-dictionary";

interface AppStoreButtonProps {
  lang: Locale;
  variant?: "hero" | "header";
}

export default function AppStoreButton({ lang, variant = "hero" }: AppStoreButtonProps) {
  const dict = getDictionary(lang);
  const isHero = variant === "hero";
  
  const appStoreUrl = "https://apps.apple.com/app/6759525878";

  // Localization for the labels
  const getLabels = () => {
    switch (lang) {
      case 'tr': return { top: "App Store'dan", bottom: "İndirin" };
      case 'fr': return { top: "Télécharger dans", bottom: "App Store" };
      case 'de': return { top: "Laden im", bottom: "App Store" };
      default: return { top: "Download on the", bottom: "App Store" };
    }
  };

  const labels = getLabels();

  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`app-store-button ${variant}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: isHero ? '0.75rem' : '0.45rem',
        background: '#000',
        color: '#fff',
        padding: isHero ? '0.5rem 1.4rem' : '0.35rem 0.9rem',
        borderRadius: isHero ? '14px' : '10px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: isHero ? '0 20px 40px -10px rgba(0, 0, 0, 0.3)' : 'none',
        width: 'fit-content'
      }}
    >
      {/* Official-looking Apple Logo SVG */}
      <svg 
        viewBox="0 0 24 24" 
        width={isHero ? 28 : 18} 
        height={isHero ? 28 : 18} 
        fill="currentColor"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <title>Apple Logo</title>
        <path d="M17.05 13.9c-.23-2.9 2.15-4.43 2.27-4.51-1.24-1.8-3.15-2.05-3.83-2.08-1.63-.16-3.18.97-4.01.97-.81 0-2.07-.95-3.4-.92-1.75.03-3.37 1.01-4.26 2.57-1.82 3.15-.47 7.74 1.28 10.28.85 1.25 1.87 2.65 3.2 2.6c1.28-.06 1.77-.83 3.32-.83 1.54 0 1.99.83 3.33.8 1.37-.03 2.23-1.27 3.07-2.52.97-1.42 1.37-2.8 1.39-2.88-.03-.01-2.62-1-2.65-4.01zM14.6 5.5c.72-.87 1.2-2.07 1.07-3.27-1.03.04-2.28.69-3.02 1.57-.66.78-1.21 2.01-1.05 3.19 1.15.09 2.27-.62 3-1.49z" />
      </svg>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        lineHeight: 1.1,
        pointerEvents: 'none' /* Prevent sub-pixel shifts on text hover */
      }}>
        <span style={{ 
          fontSize: isHero ? '0.7rem' : '0.55rem', 
          fontWeight: 500, 
          opacity: 0.8,
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          marginBottom: '1px'
        }}>
          {isHero ? labels.top : ''}
        </span>
        <span style={{ 
          fontSize: isHero ? '1.35rem' : '0.95rem', 
          fontWeight: 600,
          fontFamily: 'var(--font-outfit)',
          letterSpacing: '-0.01em'
        }}>
          {isHero ? labels.bottom : dict.marketing.appStore}
        </span>
      </div>

      <style jsx>{`
        .app-store-button:hover {
          transform: translateY(-2px) scale(1.02);
          background: #111;
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .app-store-button:active {
          transform: translateY(0) scale(0.98);
        }
      `}</style>
    </a>
  );
}
