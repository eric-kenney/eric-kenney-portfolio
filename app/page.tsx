'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '96px 40px 80px' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '.16em', color: '#2563eb', marginBottom: '28px' }}>
          PRODUCT MARKETING &nbsp;/&nbsp; AI SYSTEMS
        </div>
        <h1 style={{ maxWidth: '19ch', textWrap: 'balance' }}>
          I build the systems that market the product.
        </h1>
        <p style={{ fontSize: '21px', lineHeight: '1.5', color: '#605d5d', maxWidth: '60ch', margin: '36px 0 0', textWrap: 'pretty' }}>
          Fifteen years building and leading product marketing for B2B technology. I've launched products used by thousands of customers, repositioned products to unlock growth, and built teams and GTM systems that make sellers more effective. Now I'm exploring what product marketing looks like when AI handles the production work and marketers spend more time on judgment.
        </p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '44px', flexWrap: 'wrap' }}>
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
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '64px 40px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
          <div className="label">MY WORK BY THE NUMBERS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#201e1d', marginBottom: '8px' }}>10,000+</div>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#444141' }}>
                Customers acquired after repositioning a new product launch
              </p>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#201e1d', marginBottom: '8px' }}>28%</div>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#444141' }}>
                Revenue growth from a redesigned sales strategy
              </p>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#201e1d', marginBottom: '8px' }}>12,000+</div>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#444141' }}>
                Enterprise seats sold in a new product's first year
              </p>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#201e1d', marginBottom: '8px' }}>1</div>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#444141' }}>
                AI-native product marketing system built
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it makes */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '64px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <h2>What it makes</h2>
            <Link href="/system" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: '15px', color: '#2563eb' }}>
              Run it yourself →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }}>
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
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '64px 40px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
          <div className="label">FEATURED INSIGHT</div>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', fontSize: '12px', fontWeight: '600', letterSpacing: '.1em', color: '#7d7979', marginBottom: '18px' }}>
              <span className="badge">AI</span>
              <span>AUG 19, 2026 · 8 MIN</span>
            </div>
            <h3 style={{ marginBottom: '18px' }}>AI Won't Replace Product Marketers. But It Will Replace a Lot of Product Marketing Work.</h3>
            <p style={{ margin: '0 0 22px', fontSize: '17px', lineHeight: '1.65', color: '#444141', textWrap: 'pretty' }}>
              The job was never the deck. It was deciding what the product means to a buyer, and holding that line across every surface. What's changing is how much of the week goes into turning that decision into artifacts — and the honest answer is: most of it, and it's going away.
            </p>
            <Link href="/insights" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: '15px', color: '#2563eb' }}>
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '64px 40px', display: 'grid', gridTemplateColumns: '320px 1fr', gap: '56px', alignItems: 'start' }}>
          <div style={{ aspectRatio: '4/5', background: 'repeating-linear-gradient(45deg,#e2dfdf 0 8px,#eae9e9 8px 16px)', display: 'flex', alignItems: 'flex-end', padding: '14px', filter: 'grayscale(1)' }}>
            <Image
              src="/headshot.jpg"
              alt="Eric Kenney"
              width={300}
              height={375}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <p style={{ fontSize: '17px', lineHeight: '1.65', color: '#444141', marginBottom: '24px', textWrap: 'pretty' }}>
              Started in sales. Realized strategy only works if someone translates it for buyers—so I moved to product marketing. Spent fifteen years at places like Citrix and RingCentral closing that gap. Now building systems to automate the production layer: if the positioning is solid, the assets should nearly write themselves. This site is that system.
            </p>
            <Link href="/work" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: '15px', color: '#2563eb' }}>
              See my work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}