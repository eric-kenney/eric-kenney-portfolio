import Link from 'next/link';
import { getBlogPostBySlug, blogPosts } from '@/app/data/blogPosts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  console.log('Available slugs:', blogPosts.map(p => p.slug));
  console.log('Looking for slug:', slug);
  
  const post = getBlogPostBySlug(slug);
  
  console.log('Found post:', post);

  if (!post) {
    return (
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
        <h1>Post not found</h1>
        <Link href="/insights" style={{ color: '#2563eb', fontWeight: '600' }}>
          ← Back to insights
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

      // Handle bullet points with bold text
      if (line.startsWith('- ')) {
        const bulletContent = line.replace('- ', '');
        const parts: (string | React.ReactNode)[] = [];
        let lastIdx = 0;
        
        const boldRegex = /\*\*([^*]+)\*\*/g;
        let match;
        
        while ((match = boldRegex.exec(bulletContent)) !== null) {
          if (match.index > lastIdx) {
            parts.push(bulletContent.substring(lastIdx, match.index));
          }
          parts.push(<strong key={match.index} style={{ fontWeight: '600' }}>{match[1]}</strong>);
          lastIdx = match.index + match[0].length;
        }
        
        if (lastIdx < bulletContent.length) {
          parts.push(bulletContent.substring(lastIdx));
        }
        
        return <li key={idx} style={{ margin: '6px 0 6px 20px', lineHeight: '1.65', color: '#444141' }}>{parts.length > 0 ? parts : bulletContent}</li>;
      }

      // Handle regular paragraphs with bold text
      if (line.trim()) {
        const parts: (string | React.ReactNode)[] = [];
        let lastIdx = 0;
        
        const boldRegex = /\*\*([^*]+)\*\*/g;
        let match;
        
        while ((match = boldRegex.exec(line)) !== null) {
          if (match.index > lastIdx) {
            parts.push(line.substring(lastIdx, match.index));
          }
          parts.push(<strong key={match.index} style={{ fontWeight: '600' }}>{match[1]}</strong>);
          lastIdx = match.index + match[0].length;
        }
        
        if (lastIdx < line.length) {
          parts.push(line.substring(lastIdx));
        }
        
        return <p key={idx} style={{ margin: '8px 0', lineHeight: '1.65', color: '#444141' }}>{parts.length > 0 ? parts : line}</p>;
      }

      return <div key={idx} style={{ height: '12px' }}></div>;
    });
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px' }}>
      <Link href="/insights" style={{ color: '#2563eb', fontSize: '15px', fontWeight: '600', marginBottom: '40px', display: 'inline-block' }}>
        ← Back to insights
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
        <div>
          <div className="label">{post.category}</div>
          <div style={{ fontSize: '12px', color: '#7d7979', marginTop: '12px' }}>
            {post.date} · {post.readTime}
          </div>
        </div>

        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '32px' }}>{post.title}</h1>
          <div style={{ fontSize: '15px', lineHeight: '1.65', color: '#444141' }}>
            {parseMarkdown(post.content)}
          </div>
        </div>
      </div>
    </div>
  );
}