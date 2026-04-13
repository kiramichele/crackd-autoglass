'use client';

import Image from 'next/image';
import { useState } from 'react';

const pairs = [
  { id: 'red_car',    label: 'windshield replacement — red sedan' },
  { id: 'van',        label: 'back glass — van' },
  { id: 'white_truck', label: 'windshield — white truck' },
  { id: 'white_van',  label: 'back glass — white van' },
];

export default function BeforeAfterGrid({ limit }) {
  const [hovered, setHovered] = useState(null);
  const displayed = limit ? pairs.slice(0, limit) : pairs;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '10px',
    }}>
      {displayed.map(({ id, label }) => (
        <div
          key={id}
          style={{
            background: '#111',
            border: '0.5px solid #1e1e1e',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          {/* image container with before/after toggle on hover */}
          <div
            style={{ position: 'relative', height: '180px', cursor: 'pointer' }}
            onMouseEnter={() => setHovered(`${id}-after`)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* BEFORE */}
            <Image
              src={`/images/before-after/${id}_before.jpg`}
              alt={`${label} — before`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
                opacity: hovered === `${id}-after` ? 0 : 1,
                transition: 'opacity 0.35s ease',
              }}
            />
            {/* AFTER */}
            <Image
              src={`/images/before-after/${id}_after.jpg`}
              alt={`${label} — after`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
                opacity: hovered === `${id}-after` ? 1 : 0,
                transition: 'opacity 0.35s ease',
              }}
            />

            {/* hover hint — fades out when hovering */}
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              background: 'rgba(0,0,0,0.6)',
              color: '#aaa',
              fontSize: '10px',
              padding: '3px 8px',
              borderRadius: '20px',
              opacity: hovered === `${id}-after` ? 0 : 1,
              transition: 'opacity 0.2s ease',
              pointerEvents: 'none',
            }}>
              hover to see after
            </div>

            {/* AFTER badge — shows on hover */}
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              background: 'rgba(124,58,237,0.85)',
              color: '#fff',
              fontSize: '10px',
              padding: '3px 8px',
              borderRadius: '20px',
              opacity: hovered === `${id}-after` ? 1 : 0,
              transition: 'opacity 0.2s ease',
              pointerEvents: 'none',
            }}>
              after
            </div>
          </div>

          {/* label row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '9px 12px',
            borderTop: '0.5px solid #1e1e1e',
          }}>
            <span style={{ fontSize: '11px', color: '#777' }}>{label}</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{
                fontSize: '9px',
                background: 'rgba(226,75,74,0.12)',
                color: '#e24b4a',
                padding: '2px 7px',
                borderRadius: '10px',
              }}>before</span>
              <span style={{
                fontSize: '9px',
                background: 'rgba(124,58,237,0.12)',
                color: '#a78bfa',
                padding: '2px 7px',
                borderRadius: '10px',
              }}>after</span>
            </div>
          </div>
        </div>
      ))}

      {/* "more on facebook" tile — only show in full grid (no limit) */}
      {!limit && (
        <div style={{
          background: '#0d0d0d',
          border: '0.5px dashed #222',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '220px',
          gap: '10px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>
            more photos on our facebook page
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
            }}
          >
            view facebook gallery →
          </a>
        </div>
      )}
    </div>
  );
}