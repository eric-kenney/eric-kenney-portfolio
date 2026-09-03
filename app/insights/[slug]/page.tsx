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
    const lines = text.split('\n');
    const result: (React.ReactNode)[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Detect table start
      if (line.includes('|') && i + 1 < lines.length && lines[i + 1].includes('|') && lines[i + 1].includes('-')) {
        const headerLine = line.split('|').map(cell => cell.trim()).filter(cell => cell);
        i += 2; // Skip header and separator
        
        const rows: string[][] = [];
        while (i < lines.length && lines[i].includes('|') && !lines[i].includes('-')) {
          const cells = lines[i].split('|').map(cell => cell.trim()).filter(cell => cell);
          if (cells.length > 0) {
            rows.push(cells);
          }
          i++;
        }

        result.push(
          <table key={`table-${i}`} style={{ width: '100%', borderCollapse: 'collapse', margin: '24px 0', border: '1px solid #201e1d' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #201e1d', backgroundColor: '#f8f4f4' }}>
                {headerLine.map((header, idx) => (
                  <th key={idx} style={{ padding: '12px', textAlign: 'left', fontWeight: '800' }}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} style={{ padding: '12px' }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
        continue;
      }

      if (line.startsWith('# ')) {
        result.push(<h1 key={i} style={{ fontSize: '28px', fontWeight: '800', margin: '24px 0 16px', letterSpacing: '-0.015em' }}>{line.replace('# ', '')}</h1>);
      } else if (line.startsWith('## ')) {
        result.push(<h2 key={i} style={{ fontSize: '22px', fontWeight: '800', margin: '20px 0 12px', letterSpacing: '-0.015em' }}>{line.replace('## ', '')}</h2>);
      } else if (line.startsWith('### ')) {
        result.push(<h3 key={i} style={{ fontSize: '18px', fontWeight: '800', margin: '16px 0 10px', letterSpacing: '-0.015em' }}>{line.replace('### ', '')}</h3>);
      } else if (line.startsWith('- ')) {
        const bulletContent = line.replace('- ', '');
        let parts: (string | React.ReactNode)[] = [];
        
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const boldRegex = /\*\*([^*]+)\*\*/g;
        
        const segments: Array<{type: 'text' | 'link' | 'bold', content: string, url?: string}> = [];
        let tempIdx = 0;
        
        while (tempIdx < bulletContent.length) {
          linkRegex.lastIndex = tempIdx;
          boldRegex.lastIndex = tempIdx;
          
          const linkMatch = linkRegex.exec(bulletContent);
          const boldMatch = boldRegex.exec(bulletContent);
          
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
        
        parts = segments.map((seg, j) => {
          if (seg.type === 'link') {
            return seg.url?.startsWith('/') ? 
              <Link key={j} href={seg.url} style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</Link> :
              <a key={j} href={seg.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</a>;
          } else if (seg.type === 'bold') {
            return <strong key={j} style={{ fontWeight: '600' }}>{seg.content}</strong>;
          } else {
            return seg.content;
          }
        });
        
        result.push(<li key={i} style={{ margin: '6px 0 6px 20px', lineHeight: '1.65', color: '#444141' }}>{parts}</li>);
      } else if (line.trim()) {
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
        
        const parts = segments.map((seg, j) => {
          if (seg.type === 'link') {
            return seg.url?.startsWith('/') ? 
              <Link key={j} href={seg.url} style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</Link> :
              <a key={j} href={seg.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</a>;
          } else if (seg.type === 'bold') {
            return <strong key={j} style={{ fontWeight: '600' }}>{seg.content}</strong>;
          } else {
            return seg.content;
          }
        });
        
        result.push(<p key={i} style={{ margin: '8px 0', lineHeight: '1.65', color: '#444141' }}>{parts}</p>);
      } else {
        result.push(<div key={i} style={{ height: '12px' }}></div>);
      }
      
      i++;
    }

    return result;
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