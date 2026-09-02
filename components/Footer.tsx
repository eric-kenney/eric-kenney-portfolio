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
          <a href="https://github.com/eric-kenney/ai-marketing-lab" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', marginRight: '24px' }}>
  GitHub
</a>
        </div>

        <p style={styles.copyright}>© 2026 Eric Kenney</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '2px solid rgba(32, 30, 29, 0.4)',
    padding: '48px 40px',
    textAlign: 'center' as const,
    backgroundColor: '#f3f2f2',
  } as React.CSSProperties,

  container: {
    maxWidth: '1240px',
    margin: '0 auto',
  } as React.CSSProperties,

  name: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#201e1d',
    margin: '0 0 8px',
  } as React.CSSProperties,

  title: {
    fontSize: '13px',
    color: '#7d7979',
    margin: '0 0 16px',
  } as React.CSSProperties,

  links: {
    fontSize: '13px',
    marginBottom: '24px',
  } as React.CSSProperties,

  link: {
    color: '#2563eb',
    textDecoration: 'none',
    marginRight: '24px',
  } as React.CSSProperties,

  copyright: {
    fontSize: '12px',
    color: '#9b9797',
    margin: '0',
  } as React.CSSProperties,
};