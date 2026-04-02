import Header from "@/components/Header";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText, Headset } from "lucide-react";
import type { Locale } from "@/lib/get-dictionary";
import { getDictionary } from "@/lib/get-dictionary";

export default async function LegalPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <main>
      <div className="container" style={{
        marginTop: '4rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {dict.marketing.legalTitle}
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--muted)', 
          maxWidth: '600px',
          margin: '0 auto 4rem auto'
        }}>
          {dict.marketing.legalSubtitle}
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <Link href={`/${lang}/privacy`} className="glass-panel" style={{
            padding: '2rem',
            borderRadius: '1.5rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
              <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>{dict.home.privacyTitle}</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.5' }}>
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
              {dict.home.readMore} <ArrowRight size={18} />
            </div>
          </Link>

          <Link href={`/${lang}/terms`} className="glass-panel" style={{
            padding: '2rem',
            borderRadius: '1.5rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FileText size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
              <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>{dict.home.termsTitle}</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.5' }}>
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
              {dict.home.readMore} <ArrowRight size={18} />
            </div>
          </Link>

          <Link href={`/${lang}/support`} className="glass-panel" style={{
            padding: '2rem',
            borderRadius: '1.5rem',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Headset size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
              <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>{dict.home.supportTitle}</h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.5' }}>
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
              {dict.home.readMore} <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>

      <footer className="container" style={{ 
        marginTop: '8rem', 
        padding: '2rem 0',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        color: 'var(--muted)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Boo Baby. {dict.home.footer}</p>
      </footer>
      </main>
    </>
  );
}
