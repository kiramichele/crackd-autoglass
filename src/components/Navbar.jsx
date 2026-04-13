'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/',         label: 'home' },
  { href: '/services', label: 'services' },
  { href: '/about',    label: 'about' },
  { href: '/contact',  label: 'contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav style={{
        background: '#050505',
        borderBottom: '0.5px solid #1e1e1e',
        padding: '0 24px',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        {/* LOGO */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#fff' }}>
            Crack<span style={{ color: '#7c3aed' }}>'d</span> Auto Glass
          </div>
          <div style={{ fontSize: '9px', color: '#555', letterSpacing: '0.05em' }}>
            jacksonville, nc · eastern nc
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '20px' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: '11px',
                color: pathname === href ? '#a78bfa' : '#888',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* DESKTOP PHONE */}
        <a
          href="tel:9103888658"
          className="nav-desktop-phone"
          style={{
            fontSize: '12px',
            color: '#a78bfa',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          910-388-8658
        </a>

        {/* MOBILE RIGHT — phone + hamburger */}
        <div className="nav-mobile-right" style={{ display: 'none', alignItems: 'center', gap: '16px' }}>
          <a
            href="tel:9103888658"
            style={{ fontSize: '12px', color: '#a78bfa', fontWeight: 500, textDecoration: 'none' }}
          >
            910-388-8658
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              background: open ? '#7c3aed' : '#aaa',
              transition: 'transform 0.25s, opacity 0.25s',
              transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              background: open ? '#7c3aed' : '#aaa',
              transition: 'opacity 0.25s',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              background: open ? '#7c3aed' : '#aaa',
              transition: 'transform 0.25s, opacity 0.25s',
              transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 98,
          background: 'rgba(0,0,0,0.6)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* DRAWER */}
      <div style={{
        position: 'fixed',
        top: '54px',
        right: 0,
        bottom: 0,
        width: '260px',
        zIndex: 99,
        background: '#080808',
        borderLeft: '0.5px solid #1e1e1e',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 20px',
        gap: '4px',
      }}>
        {/* NAV LINKS */}
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: pathname === href ? '#a78bfa' : '#888',
              textDecoration: 'none',
              padding: '12px 0',
              borderBottom: '0.5px solid #1a1a1a',
              display: 'block',
              transition: 'color 0.15s',
            }}
          >
            {pathname === href && (
              <span style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#7c3aed',
                marginRight: '10px',
                verticalAlign: 'middle',
                marginBottom: '2px',
              }} />
            )}
            {label}
          </Link>
        ))}

        {/* CALL / TEXT BUTTONS */}
        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href="tel:9103888658"
            style={{
              display: 'block',
              textAlign: 'center',
              background: '#7c3aed',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 500,
              padding: '12px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            call 910-388-8658
          </a>
          <a
            href="sms:9103888658"
            style={{
              display: 'block',
              textAlign: 'center',
              background: '#1e1e1e',
              color: '#e0e0e0',
              fontSize: '14px',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #444',
              textDecoration: 'none',
            }}
          >
            send a text
          </a>
        </div>

        {/* BOTTOM TAGLINE */}
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '0.5px solid #1a1a1a' }}>
          <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.6 }}>
            don&apos;t drive{' '}
            <span style={{ color: '#7c3aed' }}>crack&apos;d.</span>
          </div>
          <div style={{ fontSize: '11px', color: '#444', marginTop: '2px' }}>
            jacksonville, nc · eastern nc
          </div>
        </div>
      </div>
    </>
  );
}