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
        <div style={styles.desktopMenu} className="desktop-menu">
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/system" style={styles.navLink}>System</Link>
          <Link href="/work" style={styles.navLink}>Work</Link>
          <Link href="/insights" style={styles.navLink}>Insights</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          style={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="mobile-menu-button"
        >
          ☰
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div style={styles.mobileMenu} className="mobile-menu">
            <Link href="/" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/system" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>System</Link>
            <Link href="/work" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Work</Link>
            <Link href="/insights" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Insights</Link>
          </div>
        )}
      </div>

      <style jsx>{`
        nav {
          border-bottom: 1px solid #e5e7eb;
          background-color: #ffffff;
          position: relative;
        }

        .desktop-menu {
          display: flex;
          gap: clamp(1.5rem, 3vw, 2.5rem);
          align-items: center;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          color: #201e1d;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          border-top: 1px solid #e5e7eb;
          padding: 1rem;
          z-index: 50;
          animation: slideDown 0.2s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-menu-button {
            display: block !important;
          }

          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}

const styles = {
  nav: {
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
  } as React.CSSProperties,

  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: 'clamp(0.75rem, 2vw, 1.5rem)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,

  logo: {
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    fontWeight: '600',
    color: '#201e1d',
    textDecoration: 'none',
    transition: 'color 0.2s',
  } as React.CSSProperties,

  desktopMenu: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  } as React.CSSProperties,

  navLink: {
    fontSize: 'clamp(0.875rem, 1.8vw, 0.9375rem)',
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
    padding: '0.5rem',
    color: '#201e1d',
  } as React.CSSProperties,

  mobileMenu: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    padding: 'clamp(0.75rem, 2vw, 1.5rem)',
    zIndex: 50,
  } as React.CSSProperties,

  mobileNavLink: {
    display: 'block',
    padding: 'clamp(0.5rem, 1.5vw, 0.75rem) 0',
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
    transition: 'color 0.2s',
  } as React.CSSProperties,
};
