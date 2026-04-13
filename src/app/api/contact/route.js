import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, phone, service, year, make, location, damage, insurance } = await req.json();

    if (!name || !phone || !service || !year || !make || !location) {
      return Response.json({ error: 'missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'quotes@yourdomain.com',   // ← swap to your verified Resend domain
      to: process.env.CONTACT_EMAIL,
      subject: `new quote request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; color: #222;">
          <div style="background: #7c3aed; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px; font-weight: 500;">
              new quote request
            </h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">
              crack'd auto glass
            </p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #888; width: 140px;">name</td>
                <td style="padding: 8px 0; color: #111; font-weight: 500;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #888;">phone</td>
                <td style="padding: 8px 0; color: #111; font-weight: 500;">
                  <a href="tel:${phone.replace(/\D/g, '')}" style="color: #7c3aed;">${phone}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #888;">service</td>
                <td style="padding: 8px 0; color: #111;">${service}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #888;">vehicle</td>
                <td style="padding: 8px 0; color: #111;">${year} ${make}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #888;">location</td>
                <td style="padding: 8px 0; color: #111;">${location}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #888;">damage</td>
                <td style="padding: 8px 0; color: #111;">${damage || '—'}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #888;">insurance</td>
                <td style="padding: 8px 0; color: #111;">${insurance ? '✓ yes' : 'no'}</td>
              </tr>
            </table>
          </div>
          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 16px;">
            sent from crackdautoglass.com
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('resend error:', err);
    return Response.json({ error: 'failed to send' }, { status: 500 });
  }
}