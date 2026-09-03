import { blogPosts } from '@/app/data/blogPosts';
import Link from 'next/link';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Post not found</h1>
        <Link href="/insights" style={{ color: '#2563eb' }}>
          Back to insights
        </Link>
      </div>
    );
  }

  const parseMarkdown = (text: string) => {
    return text.split('\n').map((line, idx) => {
      if (line.startsWith('# ')) {
        return <h1 key={idx} style={{ fontSize: '28px', fontWeight: '800', margin: '24px 0 16px', letterSpacing: '-0.015em' }}>{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={idx} style={{ fontSize: '22px', fontWeight: '800', margin: '20px 0 12px', letterSpacing: '-0.015em' }}>{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={idx} style={{ fontSize: '18px', fontWeight: '800', margin: '16px 0 10px', letterSpacing: '-0.015em' }}>{line.replace('### ', '')}</h3>;
      }

      if (line.startsWith('- ')) {
        return <li key={idx} style={{ margin: '6px 0 6px 20px', lineHeight: '1.65', color: '#444141' }}>{line.replace('- ', '')}</li>;
      }

      if (line.includes('|')) {
        return null;
      }

      if (line.trim()) {
        return <p key={idx} style={{ margin: '8px 0', lineHeight: '1.65', color: '#444141' }}>{line}</p>;
      }

      return <div key={idx} style={{ height: '12px' }}></div>;
    }).filter(Boolean);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <Link href="/insights" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to insights
      </Link>

      <div style={{ marginTop: '30px' }}>
        <div style={{ display: 'inline-block', padding: '4px 8px', backgroundColor: '#f3f2f2', borderRadius: '4px', marginBottom: '12px' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#2563eb' }}>{post.category}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px', color: '#201e1d' }}>
          {post.title}
        </h1>

        <div style={{ fontSize: '15px', lineHeight: '1.65', color: '#444141', marginBottom: '40px' }}>
          {parseMarkdown(post.content)}
        </div>
      </div>
    </div>
  );
}