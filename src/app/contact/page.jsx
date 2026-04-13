import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Contact & Quote | Crack'd Auto Glass",
  description:
    "Get a free auto glass quote from Crack'd Auto Glass in Jacksonville, NC. Call, text, or fill out the form — we serve Jacksonville and all of eastern NC.",
};

const counties = [
  { name: 'jacksonville', home: true },
  { name: 'onslow co.', home: false },
  { name: 'camp lejeune', home: false },
  { name: 'richlands', home: false },
  { name: 'swansboro', home: false },
  { name: 'sneads ferry', home: false },
  { name: 'hubert', home: false },
  { name: 'holly ridge', home: false },
  { name: '+ more', home: false },
];

export default function ContactPage() {
  return (
    <>
      {/* SILVER BAR */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #222, #999, #ccc, #999, #222)' }} />

      {/* PAGE HERO */}
      <section style={{
        background: '#080808',
        padding: '36px 24px 28px',
        borderBottom: '0.5px solid #1a1a1a',
      }}>
        <div style={{ fontSize: '10px', color: '#555', marginBottom: '12px' }}>
          home / <span style={{ color: '#7c3aed' }}>contact & quote</span>
        </div>
        <h1 style={{ fontSize: '26px', fontWeight: 500, color: '#fff', marginBottom: '8px', lineHeight: 1.25 }}>
          get a free <span style={{ color: '#9b59d0' }}>quote.</span>
        </h1>
        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, maxWidth: '480px' }}>
          fill out the form, call, or text — we&apos;ll get back to you fast.
          most jobs scheduled same day across jacksonville and eastern nc.
        </p>
      </section>

      {/* BODY */}
      <section className="contact-body">

        {/* LEFT — contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontSize: '9px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            reach us directly
          </div>

          {/* phone */}
          <div style={{
            background: '#111',
            border: '0.5px solid rgba(124,58,237,0.45)',
            borderRadius: '10px',
            padding: '18px',
          }}>
            <div style={{ fontSize: '10px', color: '#555', marginBottom: '4px' }}>call or text anytime</div>
            <a href="tel:9103888658" style={{
              fontSize: '22px',
              fontWeight: 500,
              color: '#a78bfa',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '6px',
            }}>
              910-388-8658
            </a>
            <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6, marginBottom: '14px' }}>
              fastest way to get scheduled — call or text with your vehicle info and location
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="tel:9103888658" style={{
                fontSize: '12px',
                color: '#fff',
                background: '#7c3aed',
                padding: '8px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
              }}>
                call now
              </a>
              <a href="sms:9103888658" style={{
                fontSize: '12px',
                color: '#e0e0e0',
                background: '#1e1e1e',
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #444',
                textDecoration: 'none',
              }}>
                send a text
              </a>
            </div>
          </div>

          {/* facebook */}
          <div style={{
            background: '#111',
            border: '0.5px solid #222',
            borderRadius: '10px',
            padding: '18px',
          }}>
            <div style={{ fontSize: '10px', color: '#555', marginBottom: '4px' }}>facebook</div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#e8e8e8', marginBottom: '5px' }}>
              Crack&apos;d Auto Glass
            </div>
            <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6, marginBottom: '12px' }}>
              message us on facebook for a quote — we respond quickly
            </p>
            <a
              href="https://facebook.com/crackdautoglass"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12px',
                color: '#e0e0e0',
                background: '#1e1e1e',
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #444',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              message on facebook
            </a>
          </div>

          {/* availability */}
          <div style={{
            background: '#0c0b14',
            border: '0.5px solid #241d3a',
            borderRadius: '10px',
            padding: '18px',
          }}>
            <h3 style={{ fontSize: '13px', fontWeight: 500, color: '#ddd', marginBottom: '6px' }}>
              availability
            </h3>
            <p style={{ fontSize: '12px', color: '#777', lineHeight: 1.7 }}>
              we operate{' '}
              <span style={{ color: '#a78bfa', fontWeight: 500 }}>by appointment</span> — call
              or text and we&apos;ll find a time that works for you. most requests handled
              same day or next day across eastern nc.
            </p>
          </div>

          {/* service area */}
          <div style={{
            background: '#111',
            border: '0.5px solid #222',
            borderRadius: '10px',
            padding: '18px',
          }}>
            <h3 style={{ fontSize: '13px', fontWeight: 500, color: '#ddd', marginBottom: '12px' }}>
              service area
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '5px',
            }}>
              {counties.map(({ name, home }) => (
                <div key={name} style={{
                  background: home ? 'rgba(124,58,237,0.25)' : 'rgba(124,58,237,0.08)',
                  border: `0.5px solid ${home ? 'rgba(124,58,237,0.5)' : 'rgba(124,58,237,0.2)'}`,
                  borderRadius: '20px',
                  fontSize: '10px',
                  color: home ? '#ddd5ff' : '#c4b5fd',
                  padding: '5px 8px',
                  textAlign: 'center',
                }}>
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* map placeholder */}
          <div style={{
            background: '#0d0d0d',
            border: '0.5px solid #1e1e1e',
            borderRadius: '10px',
            height: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{ fontSize: '11px', color: '#333' }}>google map embed goes here</span>
          </div>
        </div>

        {/* RIGHT — quote form */}
        <QuoteForm />
      </section>

    </>
  );
}