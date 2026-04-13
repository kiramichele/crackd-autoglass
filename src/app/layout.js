import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Crack'd Auto Glass | Jacksonville, NC",
  description:
    "Mobile auto glass repair and replacement serving Jacksonville and Eastern NC. Windshield repair, rock chip repair, back glass, door glass, leak diagnostics, and ADAS recalibration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        background: '#0a0a0a',
        color: '#e8e8e8',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}