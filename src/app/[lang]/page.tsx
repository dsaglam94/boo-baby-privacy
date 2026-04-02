import Header from "@/components/Header";
import Showcase from "@/components/Showcase";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/get-dictionary";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  const screenshotPaths = {
    en: [
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 13.44.48.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 13.45.32.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 13.45.51.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 13.48.51.png'
    ].map(s => `/english/${s}`),
    fr: [
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 13.54.36.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 13.55.05.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 13.55.15.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 13.56.42.png'
    ].map(s => `/french/${s}`),
    de: [
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 14.02.47.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 14.13.16.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 14.13.28.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-30 at 14.18.49.png'
    ].map(s => `/german/${s}`),
    tr: [
      'Simulator Screenshot - iPhone 17 - 2026-03-28 at 12.27.25.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-28 at 12.28.15.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-28 at 12.28.48.png',
      'Simulator Screenshot - iPhone 17 - 2026-03-28 at 12.29.08.png'
    ].map(s => `/turkish/${s}`),
  };

  const screenshots = screenshotPaths[lang] || screenshotPaths.en;

  return (
    <>
      <Header lang={lang} />
      <main className="mesh-gradient" style={{ minHeight: '100dvh' }}>
      
      {/* Hero & Showcase Section */}
      <section style={{ 
        padding: '6rem 2rem 0 2rem',
        position: 'relative'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 2
        }}>
          <div className="floating-slow" style={{
            padding: '0.6rem 1.2rem',
            borderRadius: '100px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--primary)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            <Sparkles size={16} />
            {lang === 'tr' ? 'Ebeveynlik Artık Daha Kolay' : 'Parenting Made Simple'}
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 10vw, 6rem)', 
            lineHeight: 0.95, 
            letterSpacing: '-0.04em',
            marginBottom: '2rem',
            maxWidth: '1000px',
            fontWeight: 800
          }}>
            {dict.marketing.title.split(',')[0]} <br/> 
            <span className="premium-gradient" style={{ paddingBottom: '0.2em' }}>
              {dict.marketing.title.split(',')[1] || ''}
            </span>
          </h1>
          
          <p style={{ 
            fontSize: '1.35rem', 
            color: 'var(--muted)', 
            maxWidth: '650px',
            marginBottom: '5rem',
            lineHeight: 1.5,
            fontWeight: 400
          }}>
            {dict.marketing.subtitle}
          </p>

          {/* Dynamic Showcase Component */}
          <Showcase screenshots={screenshots} />
        </div>
      </section>

      {/* Trust & Features Section */}
      <section style={{ 
        padding: '8rem 2rem',
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid var(--border)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              {dict.marketing.featuresTitle}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Built by parents, for parents. Everything you need to monitor your baby's progress in real-time.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {dict.marketing.features.map((feature: { title: string; desc: string }, index: number) => (
              <div key={feature.title} className="glass-panel" style={{
                padding: '2.5rem',
                borderRadius: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  {index === 0 ? <Zap size={28} /> : 
                   index === 1 ? <ShieldCheck size={28} /> : 
                   index === 2 ? <Globe size={28} /> : 
                   <CheckCircle2 size={28} />}
                </div>
                <h3 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700, textWrap:'nowrap' }}>{feature.title}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container" style={{ 
        padding: '6rem 2rem',
        borderTop: '1px solid var(--border)',
        textAlign: 'center'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/boo-baby-logo.png" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-outfit)' }}>Boo Baby</span>
          </div>
          
          <div style={{ display: 'flex', gap: '3rem', fontWeight: 600, color: 'var(--muted)' }}>
            <Link href={`/${lang}/legal`} className="hover-primary transition-colors">{dict.nav.legal}</Link>
            <Link href={`/${lang}/support`} className="hover-primary transition-colors">{dict.nav.support}</Link>
          </div>
          
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginTop: '2rem' }}>
            &copy; {new Date().getFullYear()} Boo Baby. {dict.home.footer}
          </p>
        </div>
      </footer>
      </main>
    </>
  );
}
