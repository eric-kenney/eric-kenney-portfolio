'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link href="/" style={styles.logo}>
          Eric Kenney
        </Link>

        {/* Desktop menu */}
        <div style={styles.desktopMenu}>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/system" style={styles.navLink}>System</Link>
          <Link href="/work" style={styles.navLink}>Work</Link>
          <Link href="/insights" style={styles.navLink}>Insights</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          style={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div style={styles.mobileMenu}>
            <Link href="/" style={styles.mobileNavLink}>Home</Link>
            <Link href="/system" style={styles.mobileNavLink}>System</Link>
            <Link href="/work" style={styles.mobileNavLink}>Work</Link>
            <Link href="/insights" style={styles.mobileNavLink}>Insights</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
  } as React.CSSProperties,

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,

  logo: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    textDecoration: 'none',
  } as React.CSSProperties,

  desktopMenu: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  } as React.CSSProperties,

  navLink: {
    fontSize: '0.9375rem',
    color: '#6b7280',
    textDecoration: 'none',
    transition: 'color 0.2s',
  } as React.CSSProperties,

  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  } as React.CSSProperties,

  mobileMenu: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    padding: '1rem',
  } as React.CSSProperties,

  mobileNavLink: {
    display: 'block',
    padding: '0.5rem 0',
    color: '#6b7280',
    textDecoration: 'none',
  } as React.CSSProperties,
};

// Add mobile styles
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      nav {
        position: relative;
      }
      [style*="desktopMenu"] {
        display: none !important;
      }
      [style*="mobileMenuButton"] {
        display: block !important;
      }
      [style*="mobileMenu"] {
        display: block !important;
      }
    }
  `;
  if (document.head) {
    document.head.appendChild(style);
  }
}