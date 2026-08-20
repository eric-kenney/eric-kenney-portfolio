'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      title: "AI Won't Replace Product Marketers. But It Will Replace a Lot of Product Marketing Work.",
      excerpt: 'The job was never the deck. It was deciding what the product means to a buyer, and holding that line across every surface. What\'s changing is how much of the week goes into turning that decision into artifacts — and the honest answer is: most of it, and it\'s going away.',
      category: 'AI',
      date: 'AUG 19, 2026',
      readTime: '8 MIN',
      featured: true,
    },
    {
      id: 2,
      title: 'How to Position a Product in a Crowded Market',
      excerpt: 'When every competitor claims the same benefits, positioning becomes your only leverage. Here\'s how to find what actually matters to your buyer.',
      category: 'Positioning',
      date: 'JUL 2026',
      readTime: '6 MIN',
    },
    {
      id: 3,
      title: 'The Battle Card Nobody Reads (And How to Fix It)',
      excerpt: 'Most battlecards are beautiful PDFs that never leave the inbox. The problem isn\'t the format—it\'s that they\'re built for you, not for your sales team.',
      category: 'GTM',
      date: 'JUN 2026',
      readTime: '7 MIN',
    },
    {
      id: 4,
      title: 'Why Your Launch Messaging Keeps Shifting',
      excerpt: 'It\'s not because your team lacks discipline. It\'s because you started without a source of truth. Here\'s how to fix that.',
      category: 'Messaging',
      date: 'MAY 2026',
      readTime: '5 MIN',
    },
  ];

  const categories = ['all', 'AI', 'Positioning', 'GTM', 'Messaging'];
  const filteredPosts = selectedCategory === 'all' ? posts : posts.filter(p => p.category === selectedCategory);
  const featuredPost = posts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== 1);

  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
        <div className="label">INSIGHTS</div>
        <div>
          <h1 style={{ marginBottom: '16px' }}>Insights</h1>
          <p style={{ fontSize: '17px', lineHeight: '1.65', color: '#444141', maxWidth: '60ch' }}>
            Thoughts on product marketing, AI, and building systems that turn strategy into action.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: '64px 40px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
        <div className="label">FEATURED</div>
        <div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px', fontSize: '12px', fontWeight: '600', color: '#7d7979' }}>
            <span className="badge">AI</span>
            <span>{featuredPost.date} · {featuredPost.readTime}</span>
          </div>
          <h2 style={{ marginBottom: '16px' }}>{featuredPost.title}</h2>
          <p style={{ margin: '0 0 20px', fontSize: '15px', lineHeight: '1.65', color: '#444141' }}>
            {featuredPost.excerpt}
          </p>
          <Link href="#" style={{ fontSize: '15px', fontWeight: '600', color: '#2563eb' }}>
            Read more →
          </Link>
        </div>
      </section>

      {/* Filter */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: '32px 40px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
        <div></div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? '#2563eb' : '#eae9e9',
                color: selectedCategory === cat ? '#fff' : '#201e1d',
                border: selectedCategory === cat ? '2px solid #2563eb' : '2px solid #201e1d',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: '64px 40px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
        <div></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
          {regularPosts.map(post => (
            <div key={post.id} style={{ border: '2px solid #201e1d', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#7d7979', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                {post.category}
              </div>
              <h3 style={{ marginBottom: '12px', lineHeight: '1.2' }}>{post.title}</h3>
              <p style={{ margin: '0 0 16px', fontSize: '14px', lineHeight: '1.55', color: '#605d5d' }}>
                {post.excerpt}
              </p>
              <div style={{ fontSize: '12px', color: '#9b9797' }}>
                {post.date} · {post.readTime}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', background: '#f8f4f4', maxWidth: '1240px', margin: '0 auto', padding: '64px 40px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '12px' }}>Get updates</h2>
        <p style={{ color: '#7d7979', marginBottom: '28px', fontSize: '15px' }}>
          New insights on product marketing and AI systems.
        </p>
        <Link href="mailto:eric.kenney77@gmail.com" className="btn btn-primary">
          Subscribe
        </Link>
      </section>
    </div>
  );
}