'use client';

import Link from 'next/link';
import { useState } from 'react';
import { blogPosts } from '@/app/data/blogPosts';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'AI', 'Positioning', 'GTM', 'Messaging'];
  const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(p => p.category === selectedCategory);
  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== '1');

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
            <span className="badge">{featuredPost.category}</span>
            <span>{featuredPost.date} · {featuredPost.readTime}</span>
          </div>
          <Link href={`/insights/${featuredPost.slug}`} style={{ textDecoration: 'none' }}>
            <h2 style={{ marginBottom: '16px', color: '#201e1d' }}>{featuredPost.title}</h2>
          </Link>
          <p style={{ margin: '0 0 20px', fontSize: '15px', lineHeight: '1.65', color: '#444141' }}>
            {featuredPost.excerpt}
          </p>
          <Link href={`/insights/${featuredPost.slug}`} style={{ fontSize: '15px', fontWeight: '600', color: '#2563eb' }}>
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