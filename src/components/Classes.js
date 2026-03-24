import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-scroll';

const CourseCard = ({ card, index }) => {
  const cardRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 12,
        speed: 400,
        glare: true,
        'max-glare': 0.25,
        scale: 1.05,
      });
    }
    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!blobRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    blobRef.current.style.left = `${x}px`;
    blobRef.current.style.top = `${y}px`;
  };

  const handleMouseEnter = () => document.getElementById('custom-cursor')?.classList.add('hover');
  const handleMouseLeave = () => document.getElementById('custom-cursor')?.classList.remove('hover');

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      style={{ display: 'flex' }}
    >
      <div 
        ref={cardRef} 
        className="course-card" 
        style={{ background: card.bg, transformStyle: 'preserve-3d', flex: 1, display: 'flex', flexDirection: 'column' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div ref={blobRef} className="card-cursor-blob" style={{ background: card.accent }} />
        
        <div className="card-bg-number" style={{ transform: 'translateZ(10px)' }}>{card.number}</div>
        
        <div style={{ transform: 'translateZ(40px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className="card-tag" style={{ color: card.tagColor, alignSelf: 'flex-start' }}>{card.tag}</div>
          
          <h3 className="card-name">{card.name}</h3>
          <p className="card-tagline">{card.tagline}</p>
          
          <div className="card-divider" style={{ backgroundColor: card.accent }} />
          
          <div className="card-badges">
            <span className="card-badge">{card.age}</span>
            <span className="card-badge">{card.level}</span>
          </div>
          
          <p className="card-desc" style={{ flex: 1 }}>{card.description}</p>
          

        </div>
      </div>
    </motion.div>
  );
};

const Classes = () => {
  const courses = [
    {
      id: '01',
      name: 'Child Art',
      tagline: 'First strokes of genius',
      age: '3 – 7 yrs',
      level: 'Nursery to 2nd Std',
      description: 'Where imagination runs wild. Kids explore color, shape and joy through creative drawing.',
      bg: 'linear-gradient(145deg, #e8f4fd 0%, #c8e6f8 40%, #ddd0f5 100%)',
      accent: '#4a90d9',
      number: '01',
      tag: 'Beginner',
      tagColor: '#4a90d9',
    },
    {
      id: '02',
      name: 'Young Art',
      tagline: 'Where style is born',
      age: '8 – 10 yrs',
      level: '3rd to 5th Std',
      description: 'Students develop personal style, learn shading, and begin to find their artistic voice.',
      bg: 'linear-gradient(145deg, #fde8f3 0%, #f5c6e0 40%, #ffd4a8 100%)',
      accent: '#e0407b',
      number: '02',
      tag: 'Intermediate',
      tagColor: '#e0407b',
    },
    {
      id: '03',
      name: 'Art Grade',
      tagline: 'Mastery in the making',
      age: '11 – 14 yrs',
      level: '6th Std to Elementary & Intermediate',
      description: 'Advanced techniques and portfolio-ready artwork for serious young artists.',
      bg: 'linear-gradient(145deg, #fff5e0 0%, #fde4b8 40%, #fcd5a0 100%)',
      accent: '#e8621a',
      number: '03',
      tag: 'Advanced',
      tagColor: '#e8621a',
    },
  ];

  return (
    <section id="classes" className="classes-section">
      <div className="classes-blob-center"></div>

      <div className="section-content">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-label">[ COURSES ]</span>
          <h2 className="classes-title" style={{ color: '#1a1208' }}>
            Choose Your <br/>
            <em className="classes-title-accent">Art Journey</em>
          </h2>
          <p className="classes-subtitle">
            Three carefully crafted levels — built for every young artist's age and imagination.
          </p>
        </div>

        <div className="cards-grid">
          {courses.map((card, idx) => (
            <CourseCard key={card.id} card={card} index={idx} />
          ))}
        </div>

        <div className="info-pills-row">
          {['⏱️ 2 Hours · Once a Week', '🌐 Offline & Online Available', '📅 12 or 14 Sessions Per Batch'].map((pill, i) => (
             <div key={i} className="info-pill">
               {pill}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Classes;
