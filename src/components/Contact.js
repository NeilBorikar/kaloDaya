import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showToast, setShowToast] = useState(false);

  const handleMouseEnter = () => document.getElementById('custom-cursor')?.classList.add('hover');
  const handleMouseLeave = () => document.getElementById('custom-cursor')?.classList.remove('hover');

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#4a90d9', '#e0407b', '#8b3fa8', '#e8621a', '#f0c020'] });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
    e.target.reset();
  };

  return (
    <section id="enroll" ref={ref} style={{ backgroundColor: 'transparent' }}>
      <div className="paint-blob blob-multiply" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(224,64,123,0.3) 0%, rgba(74,144,217,0.3) 50%, transparent 100%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 1, filter: 'blur(100px)' }}></div>

      <div className="section-content">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">[ ENROLL TODAY ]</span>
          <h2>Start Their Journey</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>
          
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            
            <form 
              onSubmit={handleSubmit}
              style={{ 
                backgroundColor: '#faf8f5', 
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #d5e0ee 31px, #d5e0ee 32px)',
                padding: '40px 40px 40px 60px', 
                borderRadius: '8px', 
                boxShadow: '4px 8px 30px rgba(0,0,0,0.06), 0px 0px 5px rgba(0,0,0,0.02)', 
                position: 'relative', 
                zIndex: 10,
                borderRight: '1px solid #f0eee9',
                marginTop: '10px'
              }} 
            >
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '40px', width: '2px', backgroundColor: '#e8a0a0', opacity: 0.7 }}></div>

              <h3 style={{ fontSize: '2.5rem', marginBottom: '25px', fontFamily: '"Caveat", cursive', color: 'var(--accent-blue)', transform: 'rotate(-2deg)' }}>Enrollment Form</h3>
              
              <div style={{ position: 'relative', marginBottom: '16px' }}>
                <input type="text" placeholder="Child's Name *" required className="notebook-hand-input" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '16px' }}>
                <div style={{ flex: '1 1 100px' }}>
                  <input type="number" placeholder="Child's Age *" required className="notebook-hand-input" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                </div>
                <div style={{ flex: '2 1 150px' }}>
                  <select className="notebook-hand-select" required onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} defaultValue="">
                    <option value="" disabled>Select Course *</option>
                    <option value="child">Child Art (3-7 yrs)</option>
                    <option value="young">Young Art (8-10 yrs)</option>
                    <option value="grade">Art Grade (11-14 yrs)</option>
                  </select>
                </div>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <input type="tel" placeholder="Your Phone Number *" required className="notebook-hand-input" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
              </div>
              
              <div style={{ marginBottom: '24px', marginTop: '10px' }}>
                <p style={{ marginBottom: '4px', color: '#6d655b', fontFamily: '"Caveat", cursive', fontSize: '1.4rem' }}>Preferred Mode:</p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'none', fontFamily: '"Caveat", cursive', fontSize: '1.3rem', color: '#1a1208' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><input type="radio" name="mode" value="Offline" required /> Offline</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'none', fontFamily: '"Caveat", cursive', fontSize: '1.3rem', color: '#1a1208' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><input type="radio" name="mode" value="Online" required /> Online</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'none', fontFamily: '"Caveat", cursive', fontSize: '1.3rem', color: '#1a1208' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><input type="radio" name="mode" value="Both" required /> Both</label>
                </div>
              </div>

              <textarea placeholder="Message (Optional)" rows="2" className="notebook-hand-input" style={{ resize: 'none', marginBottom: '30px' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></textarea>

              <button type="submit" style={{ width: '100%', padding: '12px', background: 'transparent', border: '2px solid var(--accent-pink)', color: 'var(--accent-pink)', borderRadius: '4px', fontSize: '1.8rem', fontWeight: 'bold', fontFamily: '"Caveat", cursive', letterSpacing: '2px', cursor: 'none', transition: '0.3s', boxShadow: '4px 4px 0px rgba(224,64,123,0.2)' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseOver={e=>{e.currentTarget.style.backgroundColor='var(--accent-pink)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(-2px)'}} onMouseOut={e=>{e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='var(--accent-pink)'; e.currentTarget.style.transform='translateY(0)'}}>
                Send Enquiry ✓
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', padding: '50px 40px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div className="paint-blob blob-screen" style={{ width: '250px', height: '250px', backgroundColor: 'var(--accent-yellow)', bottom: '-50px', right: '-50px', opacity: 0.2 }}></div>
            
            <h3 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--accent-gold)' }}>Get in Touch</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', marginBottom: '50px', zIndex: 1, position: 'relative' }}>
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
                  <a href="mailto:gangadharsawant1986@gmail.com" style={{ fontSize: '1.2rem', textDecoration: 'none', color: 'white' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>gangadharsawant1986@gmail.com</a>
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

      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} style={{ position: 'fixed', bottom: '40px', right: '40px', backgroundColor: 'var(--bg-dark)', color: 'white', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', zIndex: 9999, display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--accent-gold)' }}>
            <span style={{ fontSize: '1.5rem' }}>🎨</span> Thank you! Mr. Sawant will reach out to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Contact;
