import Link from 'next/link';

const services = [
  {
    title: 'windshield replacement',
    desc: 'full replacement using quality OEM and aftermarket glass, installed correctly and sealed tight. most common insurance claim — we handle the paperwork.',
    details: [
      'OEM & aftermarket options',
      'proper urethane seal',
      'insurance billing handled',
      'all makes & models',
    ],
    note: 'most replacements completed same day',
    badge: 'most requested',
    featured: true,
  },
  {
    title: 'rock chip repair',
    desc: 'a chip today is a crack tomorrow. quick resin injection fills the damage and stops the spread — usually under 30 minutes. often free with insurance.',
    details: [
      'stops cracks from spreading',
      'under 30 min most cases',
      'nearly invisible results',
      'saves your deductible',
    ],
    note: 'act fast — chips spread quickly in heat',
    badge: 'often free w/ insurance',
    featured: true,
  },
  {
    title: 'door glass',
    desc: 'driver side, passenger side, rear doors — any window in the vehicle door frame. smashed, stuck, or shattered, we replace it.',
    details: [
      'all door positions',
      'regulator check included',
      'cars, trucks, SUVs',
      'same-day available',
    ],
    note: 'call ahead for glass availability',
    badge: null,
    featured: false,
  },
  {
    title: 'back glass',
    desc: 'rear windshield replacement including defroster line reconnection and third brake light where applicable. heated rear glass available.',
    details: [
      'defroster reconnected',
      'brake light handled',
      'heated glass available',
      'all vehicle types',
    ],
    note: 'rear glass often in stock locally',
    badge: null,
    featured: false,
  },
  {
    title: 'leak diagnostics',
    desc: "water getting in where it shouldn't? we find the source — failed windshield seal, door seal, or pinch weld — and fix it right.",
    details: [
      'pinpoint leak source',
      'reseal & reglaze',
      'prevents mold & rust',
      'common after body work',
    ],
    note: 'great for vehicles after collision repair',
    badge: null,
    featured: false,
  },
  {
    title: 'glass r&i for body shops',
    desc: 'need glass removed and reinstalled around a body repair? we partner with local shops to handle the glass side efficiently.',
    details: [
      'remove & reinstall',
      'shop scheduling welcome',
      'fast turnaround',
      'professional partnership',
    ],
    note: "body shop owners — let's talk rates",
    badge: 'trade service',
    featured: false,
  },
];

export const metadata = {
  title: "Services | Crack'd Auto Glass",
  description:
    'Auto glass services in Jacksonville NC — windshield replacement, rock chip repair, door glass, back glass, leak diagnostics, and glass R&I for body shops. Mobile service across eastern NC.',
};

export default function ServicesPage() {
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
          home / <span style={{ color: '#7c3aed' }}>services</span>
        </div>
        <h1 style={{ fontSize: '26px', fontWeight: 500, color: '#fff', marginBottom: '8px', lineHeight: 1.25 }}>
          auto glass services<br />
          done <span style={{ color: '#9b59d0' }}>right.</span>
        </h1>
        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, maxWidth: '500px', marginBottom: '16px' }}>
          windshield cracked? rock chip spreading? back glass shattered?
          we&apos;ve got you covered — and we come to you.
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['windshield cracked?', 'rock chip spreading?', 'back glass shattered?'].map(q => (
            <div key={q} style={{
              background: '#111',
              border: '0.5px solid #2a2a2a',
              borderRadius: '20px',
              fontSize: '11px',
              color: '#888',
              padding: '5px 14px',
              fontStyle: 'italic',
            }}>
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES LIST */}
      <section style={{ padding: '28px 24px', background: '#0a0a0a' }}>
        <div style={{ fontSize: '9px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
          our services
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {services.map((svc, i) => (
            <div key={svc.title}>

              {/* divider labels */}
              {i === 2 && <Divider label="glass replacement" />}
              {i === 4 && <Divider label="specialty services" />}

              <ServiceBlock svc={svc} />
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE CALLOUT */}
      <section style={{ padding: '0 24px 24px', background: '#0a0a0a' }}>
        <div style={{
          background: '#0c0b14',
          border: '0.5px solid #241d3a',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'rgba(124,58,237,0.15)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9b59d0" strokeWidth="1.8" strokeLinecap="round">
              <path d="M12 2 C8 2 4 6 4 11 C4 16 12 22 12 22 C12 22 20 16 20 11 C20 6 16 2 12 2 Z"/>
              <circle cx="12" cy="11" r="3"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#ddd', marginBottom: '5px' }}>
              we come to you — mobile service
            </h3>
            <p style={{ fontSize: '12px', color: '#777', lineHeight: 1.6, marginBottom: '6px' }}>
              no need to drive on a cracked windshield. we bring the tools and glass
              to your home, workplace, or wherever your vehicle is parked.
            </p>
            <div style={{ fontSize: '11px', color: '#a78bfa' }}>
              serving jacksonville and surrounding eastern nc counties
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE BLOCK */}
      <section style={{ padding: '0 24px 28px', background: '#0a0a0a' }}>
        <div style={{
          background: '#0a0a0a',
          border: '0.5px solid #222',
          borderLeft: '3px solid #7c3aed',
          borderRadius: '0 8px 8px 0',
          padding: '16px 18px',
        }}>
          <h3 style={{ fontSize: '13px', fontWeight: 500, color: '#ddd', marginBottom: '5px' }}>
            insurance billing — we handle it
          </h3>
          <p style={{ fontSize: '12px', color: '#777', lineHeight: 1.6 }}>
            most windshield repairs and replacements are covered under comprehensive
            auto insurance with zero out-of-pocket cost. we bill your insurance directly.
          </p>
          <p style={{ fontSize: '11px', color: '#a78bfa', marginTop: '6px' }}>
            insurance network affiliation coming soon — ask us about your coverage when you call
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{
        background: '#0d0b18',
        borderTop: '0.5px solid #1e1526',
        borderBottom: '0.5px solid #1e1526',
        padding: '28px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: 500, color: '#fff', marginBottom: '6px' }}>
          don&apos;t drive <span style={{ color: '#9b59d0' }}>crack&apos;d.</span>
        </h2>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '18px' }}>
          call or text us — most jobs scheduled same day
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
          <a
            href="https://www.facebook.com/profile.php?id=61568818768496"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#1e1e1e',
              color: '#e0e0e0',
              fontSize: '13px',
              padding: '11px 22px',
              borderRadius: '8px',
              border: '1px solid #444',
              textDecoration: 'none',
            }}
          >
            message us on facebook
          </a>
        </div>
        <a
          href="tel:9103888658"
          style={{ display: 'block', fontSize: '14px', color: '#a78bfa', marginTop: '14px', fontWeight: 500, textDecoration: 'none' }}
        >
          910-388-8658
        </a>
      </section>
    </>
  );
}

function Divider({ label }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '6px 0',
      fontSize: '9px',
      color: '#444',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }}>
      <div style={{ flex: 1, height: '0.5px', background: '#1e1e1e' }} />
      {label}
      <div style={{ flex: 1, height: '0.5px', background: '#1e1e1e' }} />
    </div>
  );
}

function ServiceBlock({ svc }) {
  return (
    <div style={{
      background: '#111',
      border: `0.5px solid ${svc.featured ? 'rgba(124,58,237,0.45)' : '#222'}`,
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          background: 'rgba(124,58,237,0.12)',
          border: '0.5px solid rgba(124,58,237,0.25)',
          borderRadius: '8px',
          flexShrink: 0,
        }} />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '15px', fontWeight: 500, color: '#e8e8e8', marginBottom: '5px' }}>
            {svc.title}
          </h2>
          <p style={{ fontSize: '12px', color: '#777', lineHeight: 1.6 }}>
            {svc.desc}
          </p>
        </div>
        {svc.badge && (
          <div style={{
            fontSize: '9px',
            background: 'rgba(124,58,237,0.2)',
            color: '#c4b5fd',
            padding: '3px 9px',
            borderRadius: '10px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            {svc.badge}
          </div>
        )}
      </div>

      {/* detail bullets */}
      <div style={{
        borderTop: '0.5px solid #1e1e1e',
        padding: '12px 16px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6px',
      }}>
        {svc.details.map(d => (
          <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
            <span style={{ color: '#7c3aed', fontSize: '12px', flexShrink: 0, marginTop: '1px' }}>✓</span>
            <span style={{ fontSize: '11px', color: '#888', lineHeight: 1.4 }}>{d}</span>
          </div>
        ))}
      </div>

      {/* footer */}
      <div style={{
        borderTop: '0.5px solid #1e1e1e',
        padding: '10px 16px',
        background: '#0d0d0d',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '10px', color: '#555', fontStyle: 'italic' }}>{svc.note}</span>
        <Link href="/contact" style={{ fontSize: '11px', color: '#7c3aed', textDecoration: 'none' }}>
          get a quote →
        </Link>
      </div>
    </div>
  );
}