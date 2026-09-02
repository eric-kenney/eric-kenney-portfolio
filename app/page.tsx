'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 40px) clamp(40px, 6vw, 80px)' }}>
        <div style={{ fontSize: 'clamp(10px, 1.5vw, 12px)', fontWeight: '600', letterSpacing: '.16em', color: '#2563eb', marginBottom: 'clamp(20px, 2.5vw, 28px)', textTransform: 'uppercase' }}>
          PRODUCT MARKETING &nbsp;/&nbsp; AI SYSTEMS
        </div>
        <h1 style={{ maxWidth: '19ch', textWrap: 'balance', marginBottom: 'clamp(16px, 2vw, 24px)' }}>
          I build the systems that market the product.
        </h1>
        <p style={{ fontSize: 'clamp(15px, 2.2vw, 21px)', lineHeight: '1.5', color: '#605d5d', maxWidth: '60ch', margin: 'clamp(24px, 3vw, 36px) 0 0', textWrap: 'pretty' }}>
          Fifteen years building and leading product marketing for B2B technology. I've launched products used by thousands of customers, repositioned products to unlock growth, and built teams and GTM systems that make sellers more effective. Now I'm exploring what product marketing looks like when AI handles more of the production work and marketers spend more time on judgment.
        </p>
        <div style={{ display: 'flex', gap: 'clamp(12px, 2vw, 16px)', marginTop: 'clamp(32px, 4vw, 44px)', flexWrap: 'wrap' }}>
          <Link href="/work" className="btn btn-primary">
            See my work→
          </Link>
          <Link href="/system" className="btn btn-secondary">
            Try the AI launch system
          </Link>
        </div>
      </section>

      {/* My work by the numbers */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)' }}>
        <div style={{ 
          maxWidth: '1240px', 
          margin: '0 auto', 
          padding: 'clamp(40px, 5vw, 64px) clamp(16px, 4vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(180px, 200px) 1fr',
          gap: 'clamp(24px, 4vw, 48px)'
        }}>
          <div className="label">MY WORK BY THE NUMBERS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(24px, 3vw, 40px)' }}>
            <div>
              <div style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '800', color: '#201e1d', marginBottom: '8px' }}>10,000+</div>
              <p style={{ margin: '0', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.6', color: '#444141' }}>
                Customers acquired after repositioning a new product launch
              </p>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '800', color: '#201e1d', marginBottom: '8px' }}>28%</div>
              <p style={{ margin: '0', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.6', color: '#444141' }}>
                Revenue growth from a redesigned sales strategy
              </p>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '800', color: '#201e1d', marginBottom: '8px' }}>12,000+</div>
              <p style={{ margin: '0', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.6', color: '#444141' }}>
                Enterprise seats sold in a new product's first year
              </p>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '800', color: '#201e1d', marginBottom: '8px' }}>1</div>
              <p style={{ margin: '0', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: '1.6', color: '#444141' }}>
                AI-native product marketing system built
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What my launch system makes */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) clamp(16px, 4vw, 40px)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'clamp(16px, 3vw, 24px)', marginBottom: 'clamp(28px, 3vw, 40px)', flexWrap: 'wrap' }}>
            <h2>One strategy. Every asset.</h2>
            <Link href="/system" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'clamp(13px, 1.8vw, 15px)', color: '#2563eb', whiteSpace: 'nowrap' }}>
              Run it yourself →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(16px, 2.5vw, 28px)' }}>
            {[
              { num: '01', kicker: 'Messaging Framework', desc: 'Positioning, messaging pillars, audience-specific messaging, competitive differentiation.' },
              { num: '02', kicker: 'Sales Battlecard', desc: 'Discovery questions, talk tracks, objection handling, competitive positioning, proof points.' },
              { num: '03', kicker: 'Product Webpage', desc: 'Hero, problem narrative, value proposition, benefits, differentiation, CTAs.' }
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="card-label">{item.num}</div>
                <div className="card-title">{item.kicker}</div>
                <p className="card-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured insight */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)' }}>
        <div style={{ 
          maxWidth: '1240px', 
          margin: '0 auto', 
          padding: 'clamp(40px, 5vw, 64px) clamp(16px, 4vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(180px, 200px) 1fr',
          gap: 'clamp(24px, 4vw, 48px)'
        }}>
          <div className="label">FEATURED INSIGHT</div>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', fontSize: 'clamp(10px, 1.5vw, 12px)', fontWeight: '600', letterSpacing: '.1em', color: '#7d7979', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span className="badge">AI</span>
              <span>AUG 19, 2026</span>
            </div>
            <h3 style={{ marginBottom: '16px', fontSize: 'clamp(18px, 2.5vw, 25px)' }}>AI Won't Replace Product Marketers. But It Will Replace a Lot of Product Marketing Work.</h3>
            <p style={{ margin: '0 0 22px', fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: '1.65', color: '#444141', textWrap: 'pretty' }}>
              The job was never the deck. It was deciding what the product means to a buyer and holding that line across every surface. What's changing is how much of the week goes into turning that decision into artifacts. The honest answer is: most of it, and it's going away.
            </p>
            <Link href="/insights" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'clamp(13px, 1.8vw, 15px)', color: '#2563eb' }}>
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) clamp(16px, 4vw, 40px)' }}>
        <div className="label" style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}>ABOUT ERIC</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 220px) 1fr', gap: 'clamp(24px, 4vw, 48px)' }}>
          <img src="/headshot.jpg" alt="Eric Kenney" style={{ width: '100%', maxWidth: '280px' }} />
          <p style={{ fontSize: 'clamp(14px, 1.9vw, 15px)', lineHeight: '1.65', color: '#444141', margin: '0' }}>
            Started in sales. Realized strategy only works if someone translates it for buyers, so I moved to product marketing. I've spent nearly fifteen years at Citrix and RingCentral launching products, shaping positioning, building teams, enabling sales, and figuring out why good products sometimes don't sell. The thread through all of it is simple: understand what matters to the buyer, make the hard strategic choices, and build a go-to-market motion that carries those choices all the way to the field.
          </p>
        </div>
      </section>
    </div>
  );
}
