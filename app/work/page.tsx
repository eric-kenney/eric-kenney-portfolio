'use client';

import Link from 'next/link';

export default function WorkPage() {
  const campaigns = [
    {
      years: '2004–2008',
      phase: 'Early',
      title: 'Built and led a district sales team',
      narrative: 'High performers don\'t automatically scale. I built a 10-person sales team and learned that talent development beats micromanagement. Set clear metrics. Three team members got promoted. Increased district revenue by 28% by building something bigger than myself.',
      metric: '28% revenue growth',
    },
    {
      years: '2019–2021',
      phase: 'Scaling',
      title: 'App Protection at Citrix',
      narrative: 'Data protection was fragmented. Citrix had the technology but no market category for it. The insight: the market didn\'t know they needed this yet. You have to create the need, not just sell into existing demand. Led positioning and go-to-market strategy to launch this as a new product to a net-new buyer persona.',
      metric: '12,000+ enterprise users',
    },
    {
      years: '2025',
      phase: 'Building',
      title: 'Customer Engagement Bundle at RingCentral',
      narrative: 'RingCentral\'s contact center product was built for enterprise. SMBs needed it but weren\'t buying—wrong motion, wrong framing, wrong buyer. The insight: SMBs didn\'t need "contact center." They needed customer engagement. Repositioned the bundle as a customer engagement tool, not a contact center platform. Launched GTM strategy and trained sales/CS teams on the new narrative.',
      metric: '10,000 customers in 8 months',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
        <div className="label">WORK HISTORY</div>
        <div>
          <h1 style={{ marginBottom: '16px' }}>The work</h1>
          <p style={{ fontSize: '17px', lineHeight: '1.65', color: '#444141', maxWidth: '60ch' }}>
            Three campaigns that show how I think about product marketing: strategy first, then translating that strategy into something buyers understand.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: '64px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
          <div></div>
          <div>
            {campaigns.map((campaign, i) => (
              <div key={i} style={{ marginBottom: i < campaigns.length - 1 ? '64px' : '0', paddingBottom: i < campaigns.length - 1 ? '64px' : '0', borderBottom: i < campaigns.length - 1 ? '2px solid rgba(32, 30, 29, 0.4)' : 'none' }}>
                <div style={{ fontSize: '12px', color: '#7d7979', marginBottom: '4px', fontFamily: 'ui-monospace' }}>{campaign.years}</div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#7d7979', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  {campaign.phase}
                </div>
                <h3 style={{ marginBottom: '16px' }}>{campaign.title}</h3>
                <p style={{ margin: '0 0 16px', fontSize: '15px', lineHeight: '1.6', color: '#444141' }}>
                  {campaign.narrative}
                </p>
                <div style={{ fontSize: '14px', color: '#7d7979' }}>
                  <span style={{ fontWeight: '600', color: '#201e1d' }}>Outcome:</span> {campaign.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arc */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', background: '#f8f4f4', maxWidth: '1240px', margin: '0 auto', padding: '64px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
          <div className="label">THE ARC</div>
          <div>
            <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.65', color: '#444141' }}>
              Started as an individual contributor learning the sales motion. Moved into product marketing because I realized the hard part wasn't the pitch—it was deciding what the product actually meant to a buyer. Spent fifteen years at places like Citrix and RingCentral closing that gap between strategy and execution. Now building the production layer: if the positioning is solid, the assets should nearly write themselves. That's what the system on this site is testing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: '64px 40px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '16px' }}>Let's talk</h2>
        <p style={{ color: '#7d7979', marginBottom: '28px', fontSize: '15px' }}>
          Interested in what I've built or how I think about marketing?
        </p>
        <Link href="mailto:eric.kenney77@gmail.com" className="btn btn-primary">
          Get in touch
        </Link>
      </section>
    </div>
  );
}