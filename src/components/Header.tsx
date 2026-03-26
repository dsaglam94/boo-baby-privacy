import Link from "next/link";
import { Shield, FileText, HelpCircle } from "lucide-react";
import type { Locale } from "@/lib/get-dictionary";
import { getDictionary } from "@/lib/get-dictionary";
import LanguageSelector from "./LanguageSelector";

export default function Header({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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
            <Link href={`/${lang}/support`} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontWeight: 500
            }}>
              <HelpCircle size={18} />
              {dict.nav.support}
            </Link>
          </nav>
        </div>

        <LanguageSelector lang={lang} />
      </div>
    </header>
  );
}
