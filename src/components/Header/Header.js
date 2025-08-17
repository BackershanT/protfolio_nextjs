import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on window resize if >768px
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on link click (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className={styles.logo}>Backershan T</h1>

      {/* Desktop Nav */}
      <nav className={styles.navDesktop} aria-label="Primary navigation">
        <Link href="#home" onClick={handleLinkClick}>Home</Link>
        <Link href="#about" onClick={handleLinkClick}>About</Link>
        <Link href="#projects" onClick={handleLinkClick}>Projects</Link>
        <Link href="#contact" onClick={handleLinkClick}>Contact</Link>
      </nav>

      {/* Hamburger button */}
      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.bar1Active : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar2Active : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar3Active : ''}`}></span>
      </button>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className={styles.navMobile}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Mobile navigation"
          >
            <Link href="#home" onClick={handleLinkClick}>Home</Link>
            <Link href="#about" onClick={handleLinkClick}>About</Link>
            <Link href="#experience" onClick={handleLinkClick}>Experience</Link>
            <Link href="#projects" onClick={handleLinkClick}>Projects</Link>
            <Link href="#contact" onClick={handleLinkClick}>Contact</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
