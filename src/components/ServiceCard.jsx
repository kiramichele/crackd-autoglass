export default function ServiceCard({ title, desc, featured }) {
  return (
    <div style={{
      background: '#111',
      border: `0.5px solid ${featured ? 'rgba(124,58,237,0.45)' : '#222'}`,
      borderRadius: '10px',
      padding: '16px',
    }}>
      <div style={{
        width: '28px',
        height: '28px',
        background: 'rgba(124,58,237,0.12)',
        borderRadius: '6px',
        marginBottom: '10px',
      }} />
      <h3 style={{ fontSize: '13px', fontWeight: 500, color: '#ddd', marginBottom: '4px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '11px', color: '#666', lineHeight: 1.5 }}>
        {desc}
      </p>
    </div>
  );
}