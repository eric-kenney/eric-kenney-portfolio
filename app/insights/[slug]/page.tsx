'use client';

import { blogPosts } from '@/app/data/blogPosts';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    // First, convert markdown tables to HTML
    let processedText = text;
    const tableRegex = /\|(.+)\n\|[-\s|:]+\n((?:\|.+\n?)*)/g;
    
    processedText = processedText.replace(tableRegex, (match) => {
      const lines = match.trim().split('\n');
      if (lines.length < 2) return match;
      
      const headerCells = lines[0].split('|').filter(cell => cell.trim());
      const bodyLines = lines.slice(2);
      
      let html = '<table style="width: 100%; border-collapse: collapse; margin: 24px 0; border: 1px solid #201e1d;">';
      
      html += '<thead><tr style="border-bottom: 2px solid #201e1d; background-color: #f8f4f4;">';
      headerCells.forEach(cell => {
        html += `<th style="padding: 12px; text-align: left; font-weight: 800;">${cell.trim()}</th>`;
      });
      html += '</tr></thead>';
      
      html += '<tbody>';
      bodyLines.forEach(line => {
        const cells = line.split('|').filter(cell => cell.trim());
        if (cells.length > 0) {
          html += '<tr style="border-bottom: 1px solid #e0e0e0;">';
          cells.forEach(cell => {
            html += `<td style="padding: 12px;">${cell.trim()}</td>`;
          });
          html += '</tr>';
        }
      });
      html += '</tbody></table>';
      
      return html;
    });

    return processedText.split('\n').map((line, idx) => {
      // Skip table lines
      if (line.includes('|')) {
        return null;
      }

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
        
        parts = segments.map((seg, i) => {
          if (seg.type === 'link') {
            return seg.url?.startsWith('/') ? 
              <Link key={i} href={seg.url} style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</Link> :
              <a key={i} href={seg.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</a>;
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
              <a key={i} href={seg.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: '600' }}>{seg.content}</a>;
          } else if (seg.type === 'bold') {
            return <strong key={i} style={{ fontWeight: '600' }}>{seg.content}</strong>;
          } else {
            return seg.content;
          }
        });
        
        return <p key={idx} style={{ margin: '8px 0', lineHeight: '1.65', color: '#444141' }}>{parts}</p>;
      }

      return <div key={idx} style={{ height: '12px' }}></div>;
    }).filter(Boolean);
  };

  const ClientWrapper = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

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
            {parseMarkdown(post.content).map((element, index) => (
              <div key={index} dangerouslySetInnerHTML={element && typeof element === 'string' ? { __html: element } : undefined}>
                {typeof element !== 'string' && element}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ClientWrapper />;
}