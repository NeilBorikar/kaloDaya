import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiClock, FiMonitor, FiAward } from 'react-icons/fi';

const WhyChooseMe = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const tiles = [
    { id: 1, icon: <FiTarget size={32} color="var(--accent-blue)" />, stat: '18+', label: 'Years Teaching', bColor: "var(--accent-blue)" },
    { id: 2, icon: <FiAward size={32} color="var(--accent-pink)" />, stat: '3', label: 'Course Levels', bColor: "var(--accent-pink)" },
    { id: 3, icon: <FiClock size={32} color="var(--accent-orange)" />, stat: '2 Hrs', label: 'Per Session', bColor: "var(--accent-orange)" },
    { id: 4, icon: <FiMonitor size={32} color="var(--accent-purple)" />, stat: 'Online +', label: 'Offline Both', bColor: "var(--accent-purple)" },
  ];

  return (
    <section id="why-us" ref={ref} style={{ backgroundColor: 'transparent' }}>
      <div className="paint-blob blob-multiply" style={{ width: '400px', height: '400px', backgroundColor: 'var(--accent-yellow)', top: '20%', left: '-10%', opacity: 0.35 }}></div>
      <div className="paint-blob blob-multiply" style={{ width: '300px', height: '300px', backgroundColor: 'var(--accent-purple)', bottom: '10%', right: '10%', opacity: 0.35 }}></div>

      <div className="section-content">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">[ WHY CHOOSE ME ]</span>
          <h2>Why Choose Me</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {tiles.map((tile, i) => (
            <motion.div key={tile.id} initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }} whileHover={{ scale: 1.05, borderColor: tile.bColor, boxShadow: `0 15px 35px ${tile.bColor}15` }} style={{ backgroundColor: '#fff', padding: '40px 20px', borderRadius: '24px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '2px solid rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                {tile.icon}
              </div>
              <h3 style={{ fontSize: '3rem', marginBottom: '8px', color: 'var(--text-dark)', fontFamily: '"Cormorant Garamond", serif' }}>{tile.stat}</h3>
              <p style={{ color: '#6d655b', fontSize: '1.1rem', fontWeight: '500' }}>{tile.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseMe;
