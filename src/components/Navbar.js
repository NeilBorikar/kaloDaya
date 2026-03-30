import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Classes', to: 'classes' },
    { name: 'Why Us', to: 'why-us' },
  ];

  const handleMouseEnter = () => document.getElementById('custom-cursor')?.classList.add('hover');
  const handleMouseLeave = () => document.getElementById('custom-cursor')?.classList.remove('hover');

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300" style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none', background: '#0a0a0a', borderBottom: '2px solid #c9a84c' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="hero" smooth={true} duration={800} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: 'none', zIndex: 50, position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '-24px' }}>
          <img src={logo} alt="Logo" style={{ height: '120px', width: 'auto', objectFit: 'contain', border: '3px solid #c9a84c', boxShadow: '0 0 15px rgba(201, 168, 76, 0.5)' }} />
          <h1 style={{ fontSize: '1.8rem', color: '#c9a84c' }}>
            ✦ Sawant Art Studio
            <div style={{ height: '2px', width: '100%', backgroundColor: '#c9a84c', marginTop: '4px' }} />
          </h1>
        </Link>
        
        {/* Desktop Menu */}
        <nav style={{ display: 'none' }} className="md-flex-nav">
          {links.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} duration={800} offset={-80} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '500', marginLeft: '32px', color: '#c9a84c', transition: 'color 0.3s', cursor: 'none' }} className="nav-link">
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Mobile Toggle */}
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: 'block', background: 'none', border: 'none', zIndex: 50, position: 'relative' }} className="md-hidden-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#c9a84c', margin: '6px 0', transition: '0.4s', transform: menuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' }}></div>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#c9a84c', margin: '6px 0', transition: '0.4s', opacity: menuOpen ? 0 : 1 }}></div>
          <div style={{ width: '24px', height: '2px', backgroundColor: '#c9a84c', margin: '6px 0', transition: '0.4s', transform: menuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none' }}></div>
        </button>
      </div>

      <style>{`
        @media(min-width: 768px) {
          .md-flex-nav { display: flex !important; align-items: center; }
          .md-hidden-nav { display: none !important; }
        }
        .nav-link:hover { color: var(--accent-pink) !important; }
      `}</style>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, backgroundColor: 'var(--bg-dark)', zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'center' }}>
              {links.map((link, i) => (
                <motion.div key={link.name} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                  <Link to={link.to} smooth={true} duration={800} offset={-80} onClick={() => setMenuOpen(false)} style={{ fontSize: '2.5rem', color: 'var(--text-light)', fontFamily: '"Cormorant Garamond", serif', cursor: 'none' }}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;