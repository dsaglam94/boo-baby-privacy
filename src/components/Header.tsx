"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, FileText, HelpCircle, Menu, X } from "lucide-react";
import type { Locale } from "@/lib/get-dictionary";
import { getDictionary } from "@/lib/get-dictionary";
import LanguageSelector from "./LanguageSelector";

export default function Header({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen]);

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '0.75rem 0',
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
      transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)'
    }}>
      <div className="container header-container">
        <Link href={`/${lang}`} style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700,
          fontFamily: 'var(--font-outfit)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 1001
        }}>
          <Image 
            src="/boo-baby-logo.png" 
            alt="Boo Baby Logo" 
            width={36} 
            height={36} 
            style={{ borderRadius: '10px' }}
          />
          <span className="premium-gradient">Boo Baby</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link href={`/${lang}/privacy`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: 'var(--foreground)' }}>
            <Shield size={18} />
            {dict.nav.privacy}
          </Link>
          <Link href={`/${lang}/terms`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: 'var(--foreground)' }}>
            <FileText size={18} />
            {dict.nav.terms}
          </Link>
          <Link href={`/${lang}/support`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: 'var(--foreground)' }}>
            <HelpCircle size={18} />
            {dict.nav.support}
          </Link>
          <Link href={`/${lang}/legal`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: 'var(--foreground)' }}>
            <Shield size={18} />
            {dict.nav.legal}
          </Link>
          <LanguageSelector lang={lang} />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <Image 
              src="/boo-baby-logo.png" 
              alt="Boo Baby Logo" 
              width={32} 
              height={32} 
              style={{ borderRadius: '8px' }}
            />
            <span className="premium-gradient" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Boo Baby</span>
          </div>

          <button 
            type="button"
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '2rem',
              background: 'none',
              border: 'none',
              color: 'var(--foreground)',
              cursor: 'pointer'
            }}
          >
            <X size={32} />
          </button>

          <div style={{ 
            marginBottom: '1rem', 
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%'
          }}>
            <LanguageSelector lang={lang} upward={false} />
          </div>

          <Link href={`/${lang}/privacy`} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
            <Shield size={24} />
            {dict.nav.privacy}
          </Link>
          <Link href={`/${lang}/terms`} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
            <FileText size={24} />
            {dict.nav.terms}
          </Link>
          <Link href={`/${lang}/support`} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
            <HelpCircle size={24} />
            {dict.nav.support}
          </Link>
          <Link href={`/${lang}/legal`} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
            <Shield size={24} />
            {dict.nav.legal}
          </Link>

        </div>
      </div>
    </header>
  );
}
