'use client';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.name}>Eric Kenney</p>
        <p style={styles.title}>Product Marketing Leader · AI Systems</p>
        
        <div style={styles.links}>
          <a href="https://linkedin.com/in/erickenney" target="_blank" rel="noopener noreferrer" style={styles.link}>
            LinkedIn
          </a>
          <a href="mailto:eric.kenney77@gmail.com" style={styles.link}>
            Get in touch
          </a>
          <a href="https://github.com/eric-kenney/ai-marketing-lab" target="_blank" rel="noopener noreferrer" style={styles.link}>
            GitHub
          </a>
        </div>

        <p style={styles.copyright}>© 2026 Eric Kenney</p>
      </div>

      <style jsx>{`
        footer {
          border-top: 2px solid rgba(32, 30, 29, 0.4);
          padding: clamp(2rem, 4vw, 3rem) clamp(1rem, 4vw, 2.5rem);
          text-align: center;
          background-color: #f3f2f2;
        }

        @media (max-width: 480px) {
          footer {
            padding: clamp(1.5rem, 3vw, 2rem) clamp(1rem, 3vw, 1.5rem);
          }
        }
      `}</style>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '2px solid rgba(32, 30, 29, 0.4)',
    padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 4vw, 2.5rem)',
    textAlign: 'center' as const,
    backgroundColor: '#f3f2f2',
  } as React.CSSProperties,

  container: {
    maxWidth: '1240px',
    margin: '0 auto',
  } as React.CSSProperties,

  name: {
    fontSize: 'clamp(12px, 1.8vw, 14px)',
    fontWeight: '600',
    color: '#201e1d',
    margin: '0 0 clamp(4px, 0.5vw, 8px)',
  } as React.CSSProperties,

  title: {
    fontSize: 'clamp(11px, 1.6vw, 13px)',
    color: '#7d7979',
    margin: '0 0 clamp(12px, 1.5vw, 16px)',
  } as React.CSSProperties,

  links: {
    fontSize: 'clamp(11px, 1.6vw, 13px)',
    marginBottom: 'clamp(16px, 2vw, 24px)',
    display: 'flex',
    gap: 'clamp(12px, 2vw, 24px)',
    justifyContent: 'center',
    flexWrap: 'wrap',
  } as React.CSSProperties,

  link: {
    color: '#2563eb',
    textDecoration: 'none',
    transition: 'color 0.2s',
  } as React.CSSProperties,

  copyright: {
    fontSize: 'clamp(10px, 1.4vw, 12px)',
    color: '#9b9797',
    margin: '0',
  } as React.CSSProperties,
};
