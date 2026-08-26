'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WorkPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const narratives = [
    { number: '01', label: 'THE WORK · YAHOO!', text: "I started my career in sales at Yahoo!, working my way from account manager to leading a team of inside and outside sales reps managing roughly $10M in annual revenue." },
    { number: '02', label: 'THE TURN', text: "Sales taught me a lot, but I knew I didn't want to spend my career chasing quotas." },
    { number: '03', label: 'SCHOOL', text: "So I went back to school. I earned my MBA from the University of Florida with a concentration in marketing." },
    { number: '04', label: 'CITRIX', text: "After brief stints at Radancy and Burger King, I landed at Citrix. I stayed for 8.5 years and discovered my true calling: product marketing. It blends storytelling and strategy in ways that clicked for me immediately. Citrix's massive product portfolio meant I worked across professional services, file sharing, and security. I was promoted four times." },
    { number: '05', label: 'RINGCENTRAL', text: "From there, I moved to RingCentral, where I've launched some of our most impactful products. I relaunched our Microsoft Teams integration, which is now one of the top reasons customers buy. I also launched our Customer Engagement Bundle, which reached 10,000 customers in just eight months." },
    { number: '06', label: 'NOW', text: "But here's what I'm most excited about now: using AI to do product marketing better. I've built competitive research agents, ROI calculators, and launch systems. I'm putting some of that work here, and I'd love for you to try it." }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);

      // Determine which card is active
      const cardElements = document.querySelectorAll('[data-card]');
      let activeIdx = 0;
      cardElements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          activeIdx = idx;
        }
      });
      setVisibleIndex(activeIdx);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ backgroundColor: '#f3f2f2' }}>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .bounce-arrow {
          animation: bounce 2s infinite;
        }
      `}</style>

      {/* Progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, height: '2px', backgroundColor: '#2563eb', width: `${scrollProgress}%`, zIndex: 1000 }} />

      {/* Narrative cards */}
      <div style={{ padding: '40px' }}>
        {narratives.map((item, idx) => (
          <div key={idx} data-card={idx} style={{ marginBottom: '30vh' }}>
            <div style={{
              border: '2px solid #201e1d',
              padding: '60px 40px',
              backgroundColor: '#fff',
              marginTop: idx === 0 ? '20vh' : '0',
              opacity: Math.abs(visibleIndex - idx) === 0 ? 1 : 0.3,
              transform: Math.abs(visibleIndex - idx) === 0 ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#2563eb', letterSpacing: '0.15em', marginBottom: '16px' }}>
                {item.number} {item.label}
              </div>
              <p style={{ fontSize: '24px', fontWeight: '800', lineHeight: '1.3', color: '#201e1d', margin: '0 0 24px' }}>
                {item.text}
              </p>
              <div style={{ textAlign: 'center', fontSize: '20px', color: '#2563eb' }} className={idx !== narratives.length - 1 && visibleIndex === idx ? 'bounce-arrow' : ''}>
                ↓
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section style={{ padding: '60px 40px', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px', margin: '0 0 24px' }}>Some of that work is on this site.</h2>
        <Link href="/system" className="btn btn-primary">
          Try the system →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2563eb', color: '#fff', padding: '64px 40px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '12px', color: '#fff', margin: '0 0 12px' }}>Let's talk</h2>
        <p style={{ marginBottom: '28px', fontSize: '15px', margin: '0 0 28px' }}>
          Interested in what I've built or how I think about marketing?
        </p>
        <Link href="mailto:eric.kenney77@gmail.com" style={{ color: '#fff', fontWeight: '600' }}>
          Get in touch
        </Link>
      </footer>
    </main>
  );
}