'use client';

import { useState } from 'react';

const services = [
  'windshield replacement',
  'rock chip repair',
  'door glass',
  'back glass',
  'leak diagnostics',
  'glass r&i (body shop)',
  'not sure — need advice',
];

const inputStyle = {
  width: '100%',
  background: '#0d0d0d',
  border: '0.5px solid #2e2e2e',
  borderRadius: '6px',
  padding: '10px 12px',
  fontSize: '13px',
  color: '#e8e8e8',
  outline: 'none',
  fontFamily: 'inherit',
};

const labelStyle = {
  display: 'block',
  fontSize: '10px',
  color: '#666',
  marginBottom: '5px',
  letterSpacing: '0.03em',
};

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    year: '',
    make: '',
    location: '',
    damage: '',
    insurance: false,
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setForm({
        name: '', phone: '', service: '', year: '',
        make: '', location: '', damage: '', insurance: false,
      });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        background: '#111',
        border: '0.5px solid rgba(124,58,237,0.45)',
        borderRadius: '10px',
        padding: '48px 24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>✓</div>
        <h2 style={{ fontSize: '18px', fontWeight: 500, color: '#fff', marginBottom: '8px' }}>
          quote request sent!
        </h2>
        <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, marginBottom: '20px' }}>
          alex will reach out by call or text shortly.
          in the meantime, feel free to call or text directly at{' '}
          <a href="tel:9103888658" style={{ color: '#a78bfa', textDecoration: 'none' }}>
            910-388-8658
          </a>.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            fontSize: '12px',
            color: '#888',
            background: 'transparent',
            border: '0.5px solid #333',
            borderRadius: '6px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          submit another request
        </button>
      </div>
    );
  }

  return (
    <div style={{
      background: '#111',
      border: '0.5px solid #2a2a2a',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      {/* form header */}
      <div style={{
        background: '#0d0b18',
        borderBottom: '0.5px solid #1e1526',
        padding: '16px 20px',
      }}>
        <h2 style={{ fontSize: '15px', fontWeight: 500, color: '#fff', marginBottom: '3px' }}>
          request a free quote
        </h2>
        <p style={{ fontSize: '11px', color: '#777' }}>
          we&apos;ll follow up by call or text — usually within the hour
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* name + phone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={labelStyle} htmlFor="name">your name</label>
            <input
              style={inputStyle}
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="phone">phone number</label>
            <input
              style={inputStyle}
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="(910) 555-0100"
              required
            />
          </div>
        </div>

        {/* service */}
        <div>
          <label style={labelStyle} htmlFor="service">service needed</label>
          <select
            style={{ ...inputStyle, color: form.service ? '#e8e8e8' : '#555' }}
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>— select a service —</option>
            {services.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* year + make */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
          <div>
            <label style={labelStyle} htmlFor="year">vehicle year</label>
            <input
              style={inputStyle}
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="2021"
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="make">make & model</label>
            <input
              style={inputStyle}
              id="make"
              name="make"
              value={form.make}
              onChange={handleChange}
              placeholder="Ford F-150"
              required
            />
          </div>
        </div>

        {/* location */}
        <div>
          <label style={labelStyle} htmlFor="location">your location / city</label>
          <input
            style={inputStyle}
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Jacksonville, NC"
            required
          />
        </div>

        {/* damage description */}
        <div>
          <label style={labelStyle} htmlFor="damage">
            describe the damage{' '}
            <span style={{ color: '#444' }}>(optional)</span>
          </label>
          <textarea
            style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
            id="damage"
            name="damage"
            value={form.damage}
            onChange={handleChange}
            placeholder="small chip on driver side, about the size of a quarter..."
          />
        </div>

        {/* insurance checkbox */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            name="insurance"
            checked={form.insurance}
            onChange={handleChange}
            style={{ accentColor: '#7c3aed', width: '14px', height: '14px' }}
          />
          <span style={{ fontSize: '12px', color: '#888' }}>
            i&apos;d like to use my auto insurance for this repair
          </span>
        </label>

        {/* error message */}
        {status === 'error' && (
          <div style={{
            fontSize: '12px',
            color: '#e24b4a',
            background: 'rgba(226,75,74,0.08)',
            border: '0.5px solid rgba(226,75,74,0.3)',
            borderRadius: '6px',
            padding: '10px 12px',
          }}>
            something went wrong — please try again or call us directly at 910-388-8658
          </div>
        )}

        {/* submit */}
        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            width: '100%',
            background: status === 'sending' ? '#4a2a8a' : '#7c3aed',
            color: '#fff',
            border: 'none',
            borderRadius: '7px',
            padding: '12px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {status === 'sending' ? 'sending...' : 'send my quote request →'}
        </button>

        <div style={{ fontSize: '11px', color: '#555', textAlign: 'center' }}>
          no spam, no pressure — just a quick callback to get you scheduled
        </div>
      </form>
    </div>
  );
}