'use client';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.text}>
            Questions about the system? Curious how I built it?
          </p>
          <div style={styles.links}>
            <a href="mailto:eric.kenney77@gmail.com" style={styles.link}>
              Get in touch
            </a>
            <a href="https://linkedin.com/in/erickenney" target="_blank" rel="noopener noreferrer" style={styles.link}>
              LinkedIn
            </a>
          </div>
        </div>

        <div style={styles.divider} />

        <div style={styles.copyright}>
          <p style={styles.copyrightText}>ERIC KENNEY · PRODUCT MARKETING</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    marginTop: '4rem',
  } as React.CSSProperties,

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
  } as React.CSSProperties,

  content: {
    textAlign: 'center' as const,
    marginBottom: '2rem',
  } as React.CSSProperties,

  text: {
    color: '#ffffff',
    marginBottom: '1.5rem',
    fontSize: '0.9375rem',
  } as React.CSSProperties,

  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.9375rem',
    transition: 'opacity 0.2s',
  } as React.CSSProperties,

  divider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: '2rem 0',
  } as React.CSSProperties,

  copyright: {
    textAlign: 'center' as const,
  } as React.CSSProperties,

  copyrightText: {
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.7)',
    margin: 0,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  } as React.CSSProperties,
};