import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import BeforeAfterGrid from '@/components/BeforeAfterGrid';

const services = [
  {
    title: 'windshield replacement',
    desc: 'oem & aftermarket glass, installed and sealed right',
    featured: true,
  },
  {
    title: 'rock chip repair',
    desc: 'stop chips from spreading — often free with insurance',
    featured: true,
  },
  {
    title: 'door glass',
    desc: 'driver, passenger, and rear doors — all makes',
    featured: false,
  },
  {
    title: 'back glass',
    desc: 'rear windshield with defroster reconnection',
    featured: false,
  },
  {
    title: 'leak diagnostics',
    desc: 'find and fix water intrusion at the source',
    featured: false,
  },
  {
    title: 'r&i for body shops',
    desc: 'professional glass remove & install for trade partners',
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      {/* SILVER BAR */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, #222, #999, #ccc, #999, #222)',
      }} />

      {/* HERO */}
      <section style={{
        background: '#080808',
        padding: '52px 24px 44px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '0.5px solid #1a1a1a',
      }}>
        {/* purple glow */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* crack SVG accent */}
        <svg
          style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.05 }}
          viewBox="0 0 400 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="200,0 180,80 220,100 160,160 200,180 130,280" stroke="white" strokeWidth="1.5" fill="none" />
          <polyline points="200,0 230,60 210,90 260,140 230,170 280,260" stroke="white" strokeWidth="0.8" fill="none" />
          <polyline points="180,80 140,110 160,130" stroke="white" strokeWidth="0.5" fill="none" />
          <polyline points="220,100 260,115 250,140" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>

        {/* badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(124,58,237,0.15)',
          border: '0.5px solid rgba(124,58,237,0.4)',
          color: '#c4b5fd',
          fontSize: '10px',
          padding: '4px 12px',
          borderRadius: '20px',
          marginBottom: '16px',
        }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7c3aed' }} />
          serving jacksonville & eastern nc
        </div>

        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 500,
          lineHeight: 1.2,
          color: '#fff',
          marginBottom: '12px',
        }}>
          Don&apos;t Drive<br />
          <span style={{ color: '#9b59d0' }}>Crack&apos;d.</span>
        </h1>

        <p style={{
          fontSize: '14px',
          color: '#777',
          lineHeight: 1.7,
          maxWidth: '440px',
          marginBottom: '28px',
        }}>
          windshield repair & replacement, door glass, back glass, rock chip repair,
          and leak diagnostics — we come to you across jacksonville and eastern nc.
        </p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Link href="/contact" style={{
            background: '#7c3aed',
            color: '#fff',
            fontSize: '13px',
            padding: '11px 22px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 500,
          }}>
            get a free quote
          </Link>
          <a href="tel:9103888658" style={{
            background: '#1e1e1e',
            color: '#e0e0e0',
            fontSize: '13px',
            padding: '11px 22px',
            borderRadius: '8px',
            border: '1px solid #444',
            textDecoration: 'none',
          }}>
            call 910-388-8658
          </a>
        </div>

        {/* trust row */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {['mobile service', 'same-day available', 'insurance accepted', 'eastern nc coverage'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#666' }}>
              <span style={{ color: '#7c3aed' }}>✓</span> {t}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{
        background: '#0a0a0a',
        padding: '36px 24px',
        borderBottom: '0.5px solid #1a1a1a',
      }}>
        <div style={{ fontSize: '9px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
          what we fix
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 500, color: '#fff', marginBottom: '4px' }}>
          full-service auto <span style={{ color: '#9b59d0' }}>glass</span>
        </h2>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
          every window, every vehicle — repairs and full replacements
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '10px',
        }}>
          {services.map(s => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} featured={s.featured} />
          ))}
        </div>
      </section>

      {/* MOBILE BAND */}
      <section style={{
        background: '#0f0b1a',
        borderTop: '0.5px solid #1e1526',
        borderBottom: '0.5px solid #1e1526',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#fff', marginBottom: '4px' }}>
            we come to you
          </h3>
          <p style={{ fontSize: '12px', color: '#888' }}>
            mobile service across jacksonville & eastern nc — home, work, wherever your vehicle is
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <a href="tel:9103888658" style={{
            fontSize: '18px',
            fontWeight: 500,
            color: '#a78bfa',
            textDecoration: 'none',
            display: 'block',
          }}>
            910-388-8658
          </a>
          <div style={{ fontSize: '10px', color: '#555', marginTop: '2px' }}>call or text to schedule</div>
        </div>
      </section>

      {/* INSURANCE NOTICE */}
      <section style={{ padding: '24px', background: '#0a0a0a' }}>
        <div style={{
          background: '#0f0f0f',
          border: '0.5px solid #2a2a2a',
          borderLeft: '3px solid #7c3aed',
          borderRadius: '0 8px 8px 0',
          padding: '16px 18px',
          display: 'flex',
          gap: '14px',
          alignItems: 'flex-start',
        }}>
          <div style={{ fontSize: '20px', marginTop: '1px' }}>🛡</div>
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 500, color: '#ddd', marginBottom: '4px' }}>
              insurance billing — we handle it
            </h4>
            <p style={{ fontSize: '12px', color: '#777', lineHeight: 1.6 }}>
              most windshield repairs and replacements are covered under comprehensive auto insurance
              with zero out-of-pocket cost. we bill your insurance directly so you don&apos;t have to navigate it alone.
            </p>
            <p style={{ fontSize: '11px', color: '#a78bfa', marginTop: '6px' }}>
              insurance network affiliation coming soon — ask us about your coverage when you call
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER TEASER */}
      <section style={{
        background: '#080808',
        borderTop: '0.5px solid #1a1a1a',
        padding: '36px 24px',
      }}>
        <div style={{ fontSize: '9px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
          our work
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 500, color: '#fff', marginBottom: '4px' }}>
          before & <span style={{ color: '#9b59d0' }}>after</span>
        </h2>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
          real jobs, real results — see the difference quality glass work makes
        </p>

        <div style={{ marginBottom: '16px' }}>
          <BeforeAfterGrid limit={3} />
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/about" style={{
            fontSize: '12px',
            color: '#a78bfa',
            textDecoration: 'none',
          }}>
            see more work on the about page →
          </Link>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{
        background: '#0d0b18',
        borderTop: '0.5px solid #1e1526',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '22px', fontWeight: 500, color: '#fff', marginBottom: '6px' }}>
          don&apos;t drive <span style={{ color: '#9b59d0' }}>crack&apos;d.</span>
        </h2>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
          call or text — most jobs scheduled same day across eastern nc
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            background: '#7c3aed',
            color: '#fff',
            fontSize: '13px',
            padding: '11px 22px',
            borderRadius: '8px',
            textDecoration: 'none',
          }}>
            get a free quote
          </Link>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
            background: '#1e1e1e',
            color: '#e0e0e0',
            fontSize: '13px',
            padding: '11px 22px',
            borderRadius: '8px',
            border: '1px solid #444',
            textDecoration: 'none',
          }}>
            message us on facebook
          </a>
        </div>
        <div style={{ fontSize: '14px', color: '#a78bfa', marginTop: '16px', fontWeight: 500 }}>
          <a href="tel:9103888658" style={{ color: '#a78bfa', textDecoration: 'none' }}>910-388-8658</a>
        </div>
      </section>
    </>
  );
}