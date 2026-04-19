import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleMouseEnter = () => document.getElementById('custom-cursor')?.classList.add('hover');
  const handleMouseLeave = () => document.getElementById('custom-cursor')?.classList.remove('hover');

  return (
    <footer style={{ backgroundColor: '#0f0e0c', position: 'relative', overflow: 'hidden', padding: '80px 20px 40px' }}>
      <div className="paint-blob blob-screen" style={{ width: '250px', height: '250px', backgroundColor: 'var(--accent-blue)', top: '10%', left: '20%', opacity: 0.15 }}></div>
      <div className="paint-blob blob-screen" style={{ width: '250px', height: '250px', backgroundColor: 'var(--accent-pink)', bottom: '20%', right: '10%', opacity: 0.15 }}></div>
      
      <div className="section-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '16px', fontFamily: '"Cormorant Garamond", serif' }}>✦ Vividh Art Studio</h2>
        <p className="font-caveat" style={{ fontSize: '1.8rem', color: '#c0b8ad', marginBottom: '50px' }}>"Every child is an artist. Let's nurture that."</p>
        
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '60px' }}>
          {['Home', 'About', 'Classes', 'Why Us'].map((item) => (
             <Link key={item} to={item === 'Why Us' ? 'why-us' : item === 'Home' ? 'hero' : item.toLowerCase()} smooth={true} duration={800} offset={-80} style={{ color: '#fff', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', cursor: 'none', transition: '0.3s' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseOver={e=>e.currentTarget.style.opacity=1} onMouseOut={e=>e.currentTarget.style.opacity=0.7}>
               {item}
             </Link>
          ))}
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '40px' }}></div>
        
        <p style={{ color: '#666', fontSize: '1rem' }}>© 2026 Vividh Art Studio · Made with <span role="img" aria-label="art">🎨</span></p>

        <Link to="hero" smooth={true} duration={1000} style={{ marginTop: '30px' }}>
          <motion.div whileHover={{ scale: 1.1 }} style={{ width: '56px', height: '56px', border: '1px solid var(--accent-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', cursor: 'none', zIndex: 100 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FiArrowUp size={24} />
          </motion.div>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
