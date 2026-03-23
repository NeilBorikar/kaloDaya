import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <>{count}</>;
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="paint-blob blob-multiply" style={{ width: '300px', height: '300px', backgroundColor: 'var(--accent-pink)', top: '0', left: '0', opacity: 0.2 }}></div>
      <div className="paint-blob blob-multiply" style={{ width: '400px', height: '400px', backgroundColor: 'var(--accent-blue)', bottom: '0', right: '0', opacity: 0.15 }}></div>

      <div className="section-content" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        
        <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div className="photo-frame">
            <div className="photo-placeholder" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '80px' }}>🎨</span>
              <p style={{ fontFamily: 'Caveat', fontSize: '24px', color: 'var(--text-dark)', marginTop: '8px' }}>
                Mr. Sawant G.B.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="stat-pill" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontWeight: '600' }}>{inView ? <Counter end={18} /> : "0"}+ Years Experience</span>
            </div>
            <div className="stat-pill" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontWeight: '600' }}>B.Com, ATD, AM</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
          <span className="section-label">[ ABOUT ME ]</span>
          <h2 style={{ marginBottom: '24px' }}>
            A Passion for Art, <br />
            <span style={{ color: 'var(--accent-blue)' }}>A Gift for Teaching</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#5a5246', lineHeight: '1.8', marginBottom: '30px', fontWeight: '300' }}>
            I am a passionate drawing teacher who helps students develop artistic skills, creativity and confidence through guided practice and encouragement. Every child holds a universe of color inside them, and my goal is to give them the tools to express it beautifully.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
export default About;
