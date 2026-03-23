import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const handleMouseEnter = () => document.getElementById('custom-cursor')?.classList.add('hover');
  const handleMouseLeave = () => document.getElementById('custom-cursor')?.classList.remove('hover');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const blobs = document.querySelectorAll('.hero-blob');
      blobs.forEach((blob, index) => {
        blob.style.transform = `translateY(${scrolled * 0.3 * (index%2 === 0 ? 1 : -1)}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="paint-blob blob-multiply hero-blob" style={{ width: '400px', height: '400px', backgroundColor: 'var(--accent-blue)', top: '5%', left: '5%', opacity: 0.5, animationDelay: '0s' }}></div>
      <div className="paint-blob blob-multiply hero-blob" style={{ width: '500px', height: '500px', backgroundColor: 'var(--accent-pink)', top: '20%', right: '-5%', opacity: 0.4, animationDelay: '2s' }}></div>
      <div className="paint-blob blob-multiply hero-blob" style={{ width: '350px', height: '350px', backgroundColor: 'var(--accent-purple)', bottom: '5%', left: '15%', opacity: 0.45, animationDelay: '1s' }}></div>
      <div className="paint-blob blob-multiply hero-blob" style={{ width: '450px', height: '450px', backgroundColor: 'var(--accent-orange)', bottom: '10%', right: '10%', opacity: 0.35, animationDelay: '3s' }}></div>
      <div className="paint-blob blob-multiply hero-blob" style={{ width: '300px', height: '300px', backgroundColor: 'var(--accent-yellow)', top: '40%', left: '40%', opacity: 0.4, animationDelay: '1.5s' }}></div>

      <div className="section-content" style={{ textAlign: 'center', maxWidth: '1000px', zIndex: 1, paddingTop: '80px' }}>
        
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} style={{ marginBottom: '24px', color: 'var(--text-dark)' }}>
          Where Color Finds <br/>
          <span style={{ fontSize: 'clamp(72px, 9vw, 110px)', fontWeight: 'bold', color: 'var(--accent-pink)' }}>Its Voice</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ fontSize: '1.25rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto 40px', color: '#4a433b' }}>
          18 years of nurturing young artists through creativity, confidence & guided practice.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="classes" smooth={true} duration={800} offset={-80} 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{ display: 'inline-block', backgroundColor: 'var(--text-dark)', color: 'var(--bg-primary)', padding: '16px 36px', borderRadius: '40px', fontSize: '1.1rem', cursor: 'none', transition: 'all 0.3s' }} 
            onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} 
            onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}
          >
            Explore Classes →
          </Link>
          <Link 
            to="enroll" smooth={true} duration={800} offset={-80} 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'var(--text-dark)', border: '1px solid var(--accent-gold)', padding: '16px 36px', borderRadius: '40px', fontSize: '1.1rem', cursor: 'none', transition: 'all 0.3s' }} 
            onMouseOver={e=>{e.currentTarget.style.backgroundColor='var(--accent-gold)'; e.currentTarget.style.color='white'}} 
            onMouseOut={e=>{e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='var(--text-dark)'}}
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', marginBottom: '8px' }}></div>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-gold), transparent)' }}></div>
      </motion.div>
    </section>
  );
};
export default Hero;
