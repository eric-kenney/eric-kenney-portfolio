'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

export default function WorkPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const narratives = [
    { number: '01', label: 'YAHOO!', text: "I started in sales at Yahoo!, eventually leading inside and outside sales teams managing roughly $10M in annual revenue. Sales taught me how buyers actually make decisions, but I was more interested in shaping the story than chasing the quota. So I went back for my MBA and moved into marketing." },
    { number: '02', label: 'CITRIX', text: "I spent 8.5 years at Citrix learning product marketing across professional services, file sharing, and security. I launched a new security product to 12,000+ enterprise seats in its first year, trained more than 1,000 sellers and partners, and was promoted four times." },
    { number: '03', label: 'RINGCENTRAL · 0-1 LAUNCH', text: "At RingCentral, I led the go-to-market for a new Customer Engagement Bundle from the ground up. We defined the buyer, built the positioning and messaging, shaped the offer, and created the launch motion. Eight months after launch, it had reached 10,000 customers." },
    { number: '04', label: 'RINGCENTRAL · BUSINESS IMPACT', text: "Product marketing isn't just launches. I've worked across Product, Sales, and Finance to change the economics of the business: redesigning pricing and packaging to increase ARPU 6–8%, using win/loss insights to improve win rates 12%, and building lifecycle programs that increased upsell 20%." },
    { number: '05', label: 'THE SCALE · LEADERSHIP', text: "Eventually, the job became less about producing everything myself and more about building the team and systems that produce great work consistently. I've built and led PMM teams, created launch governance, and developed systems that help marketers and sellers move faster without losing the strategy along the way." },
    { number: '06', label: 'NOW · AI-NATIVE PMM', text: "Now I'm focused on what happens when AI takes over more of the production layer. I've built competitive research agents, ROI calculators, and launch systems that turn strategy into execution faster. The goal isn't to automate product marketing. It's to give product marketers more time for the judgment that actually matters." }
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

    </main>
  );

  <Footer />
}