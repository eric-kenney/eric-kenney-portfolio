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
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(40px, 5vw, 80px) clamp(16px, 4vw, 40px)', textAlign: 'center' }}>
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
      return <h1 key={idx} style={{ fontSize: 'clamp(24px, 5vw, 28px)', fontWeight: '800', margin: 'clamp(16px, 2vw, 24px) 0 clamp(12px, 1.5vw, 16px)', letterSpacing: '-0.015em', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{line.replace('# ', '')}</h1>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={idx} style={{ fontSize: 'clamp(20px, 3.5vw, 22px)', fontWeight: '800', margin: 'clamp(16px, 2vw, 20px) 0 clamp(10px, 1.5vw, 12px)', letterSpacing: '-0.015em', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{line.replace('## ', '')}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={idx} style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: '800', margin: 'clamp(12px, 1.5vw, 16px) 0 clamp(8px, 1vw, 10px)', letterSpacing: '-0.015em', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{line.replace('### ', '')}</h3>;
    }

    // Handle bullet points with bold text and links
    if (line.startsWith('- ')) {
      const bulletContent = line.replace('- ', '');
      let parts: (string | React.ReactNode)[] = [];
      let lastIdx = 0;
      
      // Handle links first
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const boldRegex = /\*\*([^*]+)\*\*/g;
      
      // Create segments by finding all links and bold text
      const segments: Array<{type: 'text' | 'link' | 'bold', content: string, url?: string}> = [];
      let tempIdx = 0;
      
      let linkMatch;
      let boldMatch;
      
      while (tempIdx < bulletContent.length) {
        linkRegex.lastIndex = tempIdx;
        boldRegex.lastIndex = tempIdx;
        
        linkMatch = linkRegex.exec(bulletContent);
        boldMatch = boldRegex.exec(bulletContent);
        
        let nextMatch = null;
        let nextType: 'link' | 'bold' | null = null;
        
        if (linkMatch && (!boldMatch || linkMatch.index < boldMatch.index)) {
          nextMatch = linkMatch;
          nextType = 'link';
        } else if (boldMatch) {
          nextMatch = boldMatch;
          nextType = 'bold';
        }
        
        if (nextMatch && nextMatch.index >= tempIdx) {
          if (nextMatch.index > tempIdx) {
            segments.push({type: 'text', content: bulletContent.substring(tempIdx, nextMatch.index)});
          }
          if (nextType === 'link') {
            segments.push({type: 'link', content: nextMatch[1], url: nextMatch[2]});
            tempIdx = nextMatch.index + nextMatch[0].length;
          } else if (nextType === 'bold') {
            segments.push({type: 'bold', content: nextMatch[1]});
            tempIdx = nextMatch.index + nextMatch[0].length;
          }
        } else {
          segments.push({type: 'text', content: bulletContent.substring(tempIdx)});
          break;
        }
      }
      
      parts = segments.map((seg, i) => {
        if (seg.type === 'link') {
          return seg.url?.startsWith('/') ? 
            <Link key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{seg.content}</Link> :
            <a key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{seg.content}</a>;
        } else if (seg.type === 'bold') {
          return <strong key={i} style={{ fontWeight: '600' }}>{seg.content}</strong>;
        } else {
          return seg.content;
        }
      });
      
      return <li key={idx} style={{ margin: '6px 0 6px 20px', lineHeight: '1.65', color: '#444141', fontSize: 'clamp(14px, 1.8vw, 15px)', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{parts}</li>;
    }

    // Handle regular paragraphs with bold text and links
    if (line.trim()) {
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const boldRegex = /\*\*([^*]+)\*\*/g;
      
      const segments: Array<{type: 'text' | 'link' | 'bold', content: string, url?: string}> = [];
      let tempIdx = 0;
      
      while (tempIdx < line.length) {
        linkRegex.lastIndex = tempIdx;
        boldRegex.lastIndex = tempIdx;
        
        const linkMatch = linkRegex.exec(line);
        const boldMatch = boldRegex.exec(line);
        
        let nextMatch = null;
        let nextType: 'link' | 'bold' | null = null;
        
        if (linkMatch && (!boldMatch || linkMatch.index < boldMatch.index)) {
          nextMatch = linkMatch;
          nextType = 'link';
        } else if (boldMatch) {
          nextMatch = boldMatch;
          nextType = 'bold';
        }
        
        if (nextMatch && nextMatch.index >= tempIdx) {
          if (nextMatch.index > tempIdx) {
            segments.push({type: 'text', content: line.substring(tempIdx, nextMatch.index)});
          }
          if (nextType === 'link') {
            segments.push({type: 'link', content: nextMatch[1], url: nextMatch[2]});
            tempIdx = nextMatch.index + nextMatch[0].length;
          } else if (nextType === 'bold') {
            segments.push({type: 'bold', content: nextMatch[1]});
            tempIdx = nextMatch.index + nextMatch[0].length;
          }
        } else {
          segments.push({type: 'text', content: line.substring(tempIdx)});
          break;
        }
      }
      
      const parts = segments.map((seg, i) => {
        if (seg.type === 'link') {
          return seg.url?.startsWith('/') ? 
            <Link key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{seg.content}</Link> :
            <a key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{seg.content}</a>;
        } else if (seg.type === 'bold') {
          return <strong key={i} style={{ fontWeight: '600' }}>{seg.content}</strong>;
        } else {
          return seg.content;
        }
      });
      
      return <p key={idx} style={{ margin: 'clamp(8px, 1vw, 12px) 0', lineHeight: '1.65', color: '#444141', fontSize: 'clamp(14px, 1.8vw, 15px)', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{parts}</p>;
    }

    return <div key={idx} style={{ height: '12px' }}></div>;
  });
};

  return (
    <>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(40px, 5vw, 80px) clamp(16px, 4vw, 40px)', minHeight: '100vh' }}>
        <Link href="/insights" style={{ color: '#2563eb', fontSize: 'clamp(13px, 1.8vw, 15px)', fontWeight: '600', marginBottom: 'clamp(24px, 3vw, 40px)', display: 'inline-block', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
          ← Back to insights
        </Link>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'clamp(20px, 2vw, 32px)' }}>
            <div className="label" style={{ marginBottom: 'clamp(12px, 1.5vw, 16px)' }}>{post.category}</div>
            <div style={{ fontSize: 'clamp(11px, 1.5vw, 12px)', color: '#7d7979', marginTop: '12px' }}>
            </div>
          </div>

          <div style={{ fontSize: 'clamp(14px, 1.8vw, 15px)', lineHeight: '1.65', color: '#444141' }}>
            <h1 style={{ marginBottom: 'clamp(20px, 3vw, 32px)', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: '800', lineHeight: '1.15', letterSpacing: '-0.025em', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{post.title}</h1>
            {parseMarkdown(post.content)}
          </div>
        </div>
      </div>
    </>
  );
}