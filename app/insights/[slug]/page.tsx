import Link from 'next/link';
import { getBlogPostBySlug, blogPosts } from '@/app/data/blogPosts';
import Footer from '@/components/Footer';

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
            <Link key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</Link> :
            <a key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</a>;
        } else if (seg.type === 'bold') {
          return <strong key={i} style={{ fontWeight: '600' }}>{seg.content}</strong>;
        } else {
          return seg.content;
        }
      });
      
      return <li key={idx} style={{ margin: '6px 0 6px 20px', lineHeight: '1.65', color: '#444141' }}>{parts}</li>;
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
            <Link key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</Link> :
            <a key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</a>;
        } else if (seg.type === 'bold') {
          return <strong key={i} style={{ fontWeight: '600' }}>{seg.content}</strong>;
        } else {
          return seg.content;
        }
      });
      
      return <p key={idx} style={{ margin: '8px 0', lineHeight: '1.65', color: '#444141' }}>{parts}</p>;
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
  <Footer />
}