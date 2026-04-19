import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const handleMouseEnter = () => document.getElementById('custom-cursor')?.classList.add('hover');
  const handleMouseLeave = () => document.getElementById('custom-cursor')?.classList.remove('hover');

  return (
    <section id="contact" ref={ref} style={{ backgroundColor: 'transparent' }}>
      <div className="paint-blob blob-multiply" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(224,64,123,0.3) 0%, rgba(74,144,217,0.3) 50%, transparent 100%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 1, filter: 'blur(100px)' }}></div>

      <div className="section-content">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">[ CONTACT ]</span>
          <h2>Get in Touch</h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', padding: '50px 40px', borderRadius: '24px', position: 'relative', overflow: 'hidden', width: '100%', maxWidth: '500px' }}>
            <div className="paint-blob blob-screen" style={{ width: '250px', height: '250px', backgroundColor: 'var(--accent-yellow)', bottom: '-50px', right: '-50px', opacity: 0.2 }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', zIndex: 1, position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FiPhone size={26} color="var(--accent-blue)" /></div>
                <div>
                  <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>Call / WhatsApp</p>
                  <a href="tel:9819182593" style={{ fontSize: '1.4rem', textDecoration: 'none', color: 'white' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>9819182593</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FiMail size={26} color="var(--accent-pink)" /></div>
                <div>
                  <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>Email</p>
                  <a href="mailto:hello@vividh-art.com" style={{ fontSize: '1.2rem', textDecoration: 'none', color: 'white' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>hello@vividh-art.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FiMapPin size={26} color="var(--accent-orange)" /></div>
                <div>
                  <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontSize: '1.4rem' }}>Mumbai</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>


    </section>
  );
};
export default Contact;
