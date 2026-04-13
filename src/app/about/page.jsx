import Link from 'next/link';
import BeforeAfterGrid from '@/components/BeforeAfterGrid';

export const metadata = {
  title: "About | Crack'd Auto Glass",
  description:
    "Meet Alex Gilliard — owner of Crack'd Auto Glass in Jacksonville, NC. Nearly 10 years of experience, ANSI/AGRSS certified, and ADAS recalibration certified through Autel and Bosch.",
};

const values = [
  {
    title: 'quality over quantity',
    desc: 'every job gets the same lead-tech attention. no rushing, no shortcuts — just work done right the first time.',
    featured: true,
  },
  {
    title: 'real customer service',
    desc: "in an industry where customer service is often an afterthought, alex treats every customer like they matter. you'll always know what's happening with your vehicle.",
    featured: true,
  },
  {
    title: 'certified & compliant',
    desc: 'ANSI/AGRSS standards plus ADAS recalibration certs through Autel and Bosch — the credentials that matter for modern vehicles.',
    featured: false,
  },
  {
    title: 'flexible & mobile',
    desc: 'by appointment, at your location — home, work, wherever. just you and a tech who actually knows what he\'s doing.',
    featured: false,
  },
];

const certs = [
  {
    title: 'ANSI / AGRSS compliant',
    sub: 'auto glass safety standards',
  },
  {
    title: 'ADAS recalibration — Autel',
    sub: 'advanced driver assistance systems',
  },
  {
    title: 'ADAS recalibration — Bosch',
    sub: 'advanced driver assistance systems',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* SILVER BAR */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #222, #999, #ccc, #999, #222)' }} />

      {/* PAGE HERO */}
      <section style={{
        background: '#080808',
        padding: '36px 24px 32px',
        borderBottom: '0.5px solid #1a1a1a',
      }}>
        <div style={{ fontSize: '10px', color: '#555', marginBottom: '12px' }}>
          home / <span style={{ color: '#7c3aed' }}>about</span>
        </div>
        <h1 style={{ fontSize: '26px', fontWeight: 500, color: '#fff', marginBottom: '10px', lineHeight: 1.25 }}>
          nearly a decade of<br />
          <span style={{ color: '#9b59d0' }}>glass done right.</span>
        </h1>
        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, maxWidth: '560px' }}>
          crack&apos;d auto glass is owned and operated by{' '}
          <span style={{ color: '#c4b5fd', fontWeight: 500 }}>alex gilliard</span> — a
          jacksonville-based auto glass technician with close to 10 years of hands-on
          experience, multiple industry certifications, and a reputation as one of the
          best in the area.
        </p>
      </section>

      {/* STAT STRIP */}
      <section className="stat-strip" style={{
        background: '#0d0d0d',
        borderBottom: '0.5px solid #1a1a1a',
        padding: '20px 24px',
      }}>
        {[
          { num: '10yr',  label: 'industry experience' },
          { num: '3',     label: 'industry certifications' },
          { num: 'lead',  label: 'tech at multiple shops' },
          { num: '5★',    label: 'quality over quantity' },
        ].map(({ num, label }) => (
          <div key={label} style={{
            textAlign: 'center',
            padding: '0 12px',
            borderRight: '0.5px solid #1e1e1e',
          }}>
            <div style={{ fontSize: '22px', fontWeight: 500, color: '#a78bfa', marginBottom: '4px' }}>{num}</div>
            <div style={{ fontSize: '10px', color: '#555', lineHeight: 1.4 }}>{label}</div>
          </div>
        ))}
      </section>

      {/* CERT STRIP */}
      <section style={{
        background: '#0c0b14',
        borderBottom: '0.5px solid #241d3a',
        padding: '18px 24px',
      }}>
        <div style={{ fontSize: '9px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
          certifications & credentials
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {certs.map(({ title, sub }) => (
            <div key={title} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(124,58,237,0.1)',
              border: '0.5px solid rgba(124,58,237,0.3)',
              borderRadius: '8px',
              padding: '10px 14px',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9b59d0" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <div>
                <div style={{ fontSize: '12px', color: '#ddd', fontWeight: 500 }}>{title}</div>
                <div style={{ fontSize: '10px', color: '#666' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY + VALUES */}
      <section className="about-hero">
        {/* story */}
        <div>
          <div style={{ fontSize: '9px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
            alex&apos;s story
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 500, color: '#fff', marginBottom: '16px', lineHeight: 1.3 }}>
            trained at the top.<br />
            <span style={{ color: '#9b59d0' }}>built on his own terms.</span>
          </h2>

          <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.8, marginBottom: '14px' }}>
            alex got his start at{' '}
            <span style={{ color: '#c4b5fd', fontWeight: 500 }}>safelite</span> — one of the
            best places in the industry to build a foundation. the experience was real and the
            training was solid, but the corporate structure wasn&apos;t the right long-term fit.
            so he moved on to independent shops across eastern nc, where he quickly became
            the tech other people came to with questions.
          </p>

          <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.8, marginBottom: '14px' }}>
            as a{' '}
            <span style={{ color: '#c4b5fd', fontWeight: 500 }}>lead technician at multiple local shops</span>,
            alex didn&apos;t just do the work — he trained the crews, corrected bad habits, and
            more than once found himself teaching his supervisors techniques they hadn&apos;t seen
            before. after years of being the backbone of other people&apos;s businesses, going
            independent was an easy call.
          </p>

          {/* pull quote */}
          <div style={{
            borderLeft: '2px solid #7c3aed',
            padding: '12px 16px',
            margin: '20px 0',
            background: 'rgba(124,58,237,0.06)',
          }}>
            <p style={{ fontSize: '13px', color: '#bbb', lineHeight: 1.8, fontStyle: 'italic' }}>
              &ldquo;i pride myself on quality, precision, and care — more than quantity and speed.
              i&apos;d rather be known for doing some of the best work in the area than for being
              the fastest.&rdquo;
            </p>
            <p style={{ fontSize: '11px', color: '#555', marginTop: '8px' }}>— alex gilliard, owner</p>
          </div>

          <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.8 }}>
            today, alex runs crack&apos;d auto glass on his own — occasionally bringing in help
            on larger jobs — and brings that same lead-tech standard to every vehicle he
            touches, whether it&apos;s a quick rock chip or a full ADAS-calibrated windshield
            replacement.
          </p>
        </div>

        {/* values */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {values.map(({ title, desc, featured }) => (
            <div key={title} style={{
              background: '#111',
              border: `0.5px solid ${featured ? 'rgba(124,58,237,0.35)' : '#1e1e1e'}`,
              borderRadius: '10px',
              padding: '16px',
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'rgba(124,58,237,0.12)',
                borderRadius: '8px',
                flexShrink: 0,
              }} />
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: 500, color: '#ddd', marginBottom: '5px' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '11px', color: '#666', lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE/AFTER */}
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
          real jobs, real results — see what alex&apos;s work looks like up close
        </p>
        <BeforeAfterGrid />
      </section>

      {/* LOCAL STRIP */}
      <section style={{
        background: '#0c0b14',
        borderTop: '0.5px solid #1e1526',
        borderBottom: '0.5px solid #1e1526',
        padding: '24px',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: 'rgba(124,58,237,0.15)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b59d0" strokeWidth="1.8" strokeLinecap="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#ddd', marginBottom: '5px' }}>
            proudly serving eastern north carolina
          </h3>
          <p style={{ fontSize: '12px', color: '#777', lineHeight: 1.6 }}>
            based in <span style={{ color: '#a78bfa', fontWeight: 500 }}>jacksonville, nc</span> — serving
            onslow county, camp lejeune, richlands, swansboro, sneads ferry, hubert, holly ridge,
            and surrounding communities. not sure if we cover your area? just call or text.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#0d0b18',
        borderTop: '0.5px solid #1e1526',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: 500, color: '#fff', marginBottom: '6px' }}>
          ready to work with <span style={{ color: '#9b59d0' }}>the best?</span>
        </h2>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
          call, text, or fill out the quote form — alex will get back to you fast
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
      </section>
    </>
  );
}