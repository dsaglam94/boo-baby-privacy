import Link from "next/link";
import { Shield, FileText, Globe } from "lucide-react";
import type { Locale } from "@/lib/get-dictionary";
import { getDictionary } from "@/lib/get-dictionary";

export default function Header({ lang, currentPath = "" }: { lang: Locale, currentPath?: string }) {
  const dict = getDictionary(lang);
  const otherLang = lang === "en" ? "tr" : "en";

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '1rem 0',
      marginBottom: '2rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <Link href={`/${lang}`} style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700,
          fontFamily: 'var(--font-outfit)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span className="premium-gradient">Boo Baby</span>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <Link href={`/${lang}/privacy`} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontWeight: 500
            }}>
              <Shield size={18} />
              {dict.nav.privacy}
            </Link>
            <Link href={`/${lang}/terms`} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontWeight: 500
            }}>
              <FileText size={18} />
              {dict.nav.terms}
            </Link>
          </nav>

          <Link 
            href={`/${otherLang}${currentPath ? `/${currentPath}` : ''}`}
            className="glass-panel"
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '0.75rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)'
            }}
          >
            <Globe size={14} />
            {otherLang.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}
