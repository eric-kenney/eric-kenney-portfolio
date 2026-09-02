'use client';

import Link from 'next/link';
import { useState } from 'react';
import { blogPosts } from '@/app/data/blogPosts';
import Footer from '@/components/Footer';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'AI', 'Positioning', 'GTM', 'Messaging'];
  const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(p => p.category === selectedCategory);
  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== '1');

  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(40px, 5vw, 80px) clamp(16px, 4vw, 40px)' }}>
        <div className="label" style={{ marginBottom: 'clamp(20px, 3vw, 28px)' }}>INSIGHTS</div>
        <div>
          <h1 style={{ marginBottom: 'clamp(12px, 2vw, 16px)', fontSize: 'clamp(24px, 5vw, 56px)' }}>Insights</h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: '1.65', color: '#444141', maxWidth: '60ch' }}>
            Thoughts on product marketing, AI, and building systems that turn strategy into action.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) clamp(16px, 4vw, 40px)' }}>
        <div className="label" style={{ marginBottom: 'clamp(20px, 3vw, 28px)' }}>FEATURED</div>
        <div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px', fontSize: 'clamp(11px, 1.5vw, 12px)', fontWeight: '600', color: '#7d7979' }}>
            <span className="badge">{featuredPost.category}</span>
          </div>
          <Link href={`/insights/${featuredPost.slug}`} style={{ textDecoration: 'none' }}>
            <h2 style={{ marginBottom: 'clamp(12px, 2vw, 16px)', color: '#201e1d', fontSize: 'clamp(20px, 4vw, 44px)' }}>{featuredPost.title}</h2>
          </Link>
          <p style={{ margin: '0 0 20px', fontSize: 'clamp(14px, 1.8vw, 15px)', lineHeight: '1.65', color: '#444141' }}>
            {featuredPost.excerpt}
          </p>
          <Link href={`/insights/${featuredPost.slug}`} style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', fontWeight: '600', color: '#2563eb' }}>
            Read more →
          </Link>
        </div>
      </section>

      {/* Filter */}
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: 'clamp(24px, 3vw, 32px) clamp(16px, 4vw, 40px)' }}>
        <div style={{ display: 'flex', gap: 'clamp(6px, 1vw, 8px)', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? '#2563eb' : '#eae9e9',
                color: selectedCategory === cat ? '#fff' : '#201e1d',
                border: selectedCategory === cat ? '2px solid #2563eb' : '2px solid #201e1d',
                padding: 'clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px)',
                fontSize: 'clamp(12px, 1.5vw, 14px)',
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
      <section style={{ borderTop: '2px solid rgba(32, 30, 29, 0.4)', maxWidth: '1240px', margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) clamp(16px, 4vw, 40px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(16px, 2.5vw, 28px)' }}>
          {regularPosts.map(post => (
            <Link key={post.id} href={`/insights/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ border: '2px solid #201e1d', padding: 'clamp(16px, 2vw, 24px)', cursor: 'pointer', transition: 'all 0.2s', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 'clamp(10px, 1.4vw, 12px)', fontWeight: '600', color: '#7d7979', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  {post.category}
                </div>
                <h3 style={{ marginBottom: '12px', lineHeight: '1.2', color: '#201e1d', fontSize: 'clamp(16px, 2.2vw, 22px)' }}>{post.title}</h3>
                <p style={{ margin: '0 0 16px', fontSize: 'clamp(13px, 1.6vw, 14px)', lineHeight: '1.55', color: '#605d5d', flex: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ fontSize: 'clamp(11px, 1.5vw, 12px)', color: '#9b9797' }}>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
