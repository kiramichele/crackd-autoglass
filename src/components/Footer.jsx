export default function Footer() {
  return (
    <footer>
      <div style={{
        background: '#0d0b18',
        borderTop: '0.5px solid #1e1526',
        padding: '20px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '16px', fontWeight: 500, color: '#fff', marginBottom: '4px' }}>
          don't drive <span style={{ color: '#9b59d0' }}>crack'd.</span>
        </div>
        <div style={{ fontSize: '12px', color: '#666' }}>
          910-388-8658 · jacksonville, nc · eastern nc
        </div>
      </div>

      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)',
      }} />

      <div style={{
        background: '#050505',
        borderTop: '0.5px solid #1a1a1a',
        padding: '14px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ fontSize: '11px', color: '#555', lineHeight: 1.6 }}>
          <span style={{ color: '#888', fontWeight: 500 }}>Crack'd Auto Glass</span>
          {' '}· jacksonville, nc · eastern nc
        </div>
        <a
          href="tel:9103888658"
          style={{ fontSize: '13px', color: '#9b59d0', fontWeight: 500, textDecoration: 'none' }}
        >
          910-388-8658
        </a>
      </div>

      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, #222, #999, #ccc, #999, #222)',
      }} />
    </footer>
  );
}