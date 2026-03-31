import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, FileText, HelpCircle } from "lucide-react";
import type { Locale } from "@/lib/get-dictionary";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <main>
      <Header lang={lang} />
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center'
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          marginBottom: '2rem',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          background: 'white'
        }}>
          <img 
            src="/boo-baby-logo.png" 
            alt="Boo Baby Logo" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </div>
        
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
          {dict.home.welcome} <span className="premium-gradient">Boo Baby</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--muted)', 
          maxWidth: '600px',
          marginBottom: '3rem'
        }}>
          {dict.home.subtitle}
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '1.5rem',
          width: '100%',
          maxWidth: '1100px'
        }}>
          <Link href={`/${lang}/privacy`} className="glass-panel" style={{
            padding: '1.5rem',
            borderRadius: '1.5rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={28} color="var(--primary)" style={{ flexShrink: 0 }} />
              <h2 style={{ 
                margin: 0, 
                fontSize: '1rem', 
                lineHeight: '1.2', 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                letterSpacing: '-0.01em'
              }}>{dict.home.privacyTitle}</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              {dict.home.privacyDesc}
            </p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontWeight: 600,
              marginTop: 'auto',
              color: 'var(--secondary)'
            }}>
              {dict.home.readMore} <ArrowRight size={16} />
            </div>
          </Link>

          <Link href={`/${lang}/terms`} className="glass-panel" style={{
            padding: '1.5rem',
            borderRadius: '1.5rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={28} color="var(--primary)" style={{ flexShrink: 0 }} />
              <h2 style={{ 
                margin: 0, 
                fontSize: '1rem', 
                lineHeight: '1.2', 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                letterSpacing: '-0.01em'
              }}>{dict.home.termsTitle}</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              {dict.home.termsDesc}
            </p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontWeight: 600,
              marginTop: 'auto',
              color: 'var(--secondary)'
            }}>
              {dict.home.readMore} <ArrowRight size={16} />
            </div>
          </Link>

          <Link href={`/${lang}/support`} className="glass-panel" style={{
            padding: '1.5rem',
            borderRadius: '1.5rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HelpCircle size={28} color="var(--primary)" style={{ flexShrink: 0 }} />
              <h2 style={{ 
                margin: 0, 
                fontSize: '1rem', 
                lineHeight: '1.2', 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                letterSpacing: '-0.01em'
              }}>{dict.home.supportTitle}</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              {dict.home.supportDesc}
            </p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontWeight: 600,
              marginTop: 'auto',
              color: 'var(--secondary)'
            }}>
              {dict.home.readMore} <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </div>

      <footer className="container" style={{ 
        marginTop: '6rem', 
        padding: '2rem 0',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        color: 'var(--muted)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Boo Baby. {dict.home.footer}</p>
      </footer>
    </main>
  );
}
