'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '../../../components/Header';
import styles from '../page.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdSportsEsports, MdHotel, MdSportsSoccer, MdStadium, MdMeetingRoom, MdAdminPanelSettings, MdHistory, MdCategory, MdWeb, MdCode, MdStorage, MdBuild, MdBugReport, MdStar, MdPerson, MdSchool, MdLock, MdEventAvailable, MdDashboard, MdNotificationsActive, MdDevices, MdSecurity, MdTrendingUp, MdDescription, MdUpdate, MdSupportAgent, MdCheckCircle, MdCreditCard, MdAttachMoney } from 'react-icons/md';

const slideshowImages = [
  '/images/blank.png',
  '/images/blank.png',
  '/images/blank.png'
];

export default function GamingZoneSystem() {
  const [currentTime, setCurrentTime] = useState('');
  const canvasRef = useRef(null);
  const [slide, setSlide] = useState(0);

  // Slideshow auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Particles background (Three.js)
  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#455CE9',
      transparent: true,
      opacity: 0.8
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 2;
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Carousel admin
  const adminScreens = [
    { title: 'Tableau de bord admin', img: '/images/blank.png' },
    { title: 'Gestion des utilisateurs', img: '/images/blank.png' },
    { title: 'Gestion des réservations', img: '/images/blank.png' },
    { title: 'Statistiques / analytics', img: '/images/blank.png' },
    { title: 'Gestion des ressources', img: '/images/blank.png' },
  ];
  const [adminIndex, setAdminIndex] = useState(0);
  const handlePrevAdmin = () => setAdminIndex((prev) => (prev === 0 ? adminScreens.length - 1 : prev - 1));
  const handleNextAdmin = () => setAdminIndex((prev) => (prev === adminScreens.length - 1 ? 0 : prev + 1));

  // Carousel expérience utilisateur
  const uxScreens = [
    { title: 'Navigation sur mobile', img: '/images/images section/1.png' },
    { title: 'Réservation sur tablette', img: '/images/images section/2.png' },
    { title: 'Gestion admin sur desktop', img: '/images/images section/3.png' },
    { title: 'Confirmation utilisateur', img: '/images/images section/4.png' },
  ];
  const [uxIndex, setUxIndex] = useState(0);
  const handlePrevUx = () => setUxIndex((prev) => (prev === 0 ? uxScreens.length - 1 : prev - 1));
  const handleNextUx = () => setUxIndex((prev) => (prev === uxScreens.length - 1 ? 0 : prev + 1));
  // Défilement automatique du carousel UX
  useEffect(() => {
    const interval = setInterval(() => {
      setUxIndex((prev) => (prev + 1) % uxScreens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [uxScreens.length]);

  return (
    <div className={styles.projectsPage}>
      <Header />
      <canvas ref={canvasRef} className={styles.backgroundCanvas} />
      <section className={styles.hero + ' ' + styles.gamingZoneHero}>
        <div className={styles.heroContent}>
          <h3>Gaming Zone System — Modular & Premium Booking Platform</h3>
          <p>Turnkey solution for booking management, adaptable to all sectors (gaming, hotels, clubs, stadiums…)</p>
          <div className={styles.badges + ' badges'}>
            <span style={{ background: 'rgba(69,92,233,0.1)', color: '#455CE9', padding: '10px 22px', borderRadius: 20, fontWeight: 600, fontSize: '1.05rem' }}>Fullstack</span>
            <span style={{ background: 'rgba(69,92,233,0.1)', color: '#455CE9', padding: '10px 22px', borderRadius: 20, fontWeight: 600, fontSize: '1.05rem' }}>Developed solo in 2 months</span>
            <span style={{ background: 'rgba(69,92,233,0.1)', color: '#455CE9', padding: '10px 22px', borderRadius: 20, fontWeight: 600, fontSize: '1.05rem' }}>Advanced security</span>
            <span style={{ background: 'rgba(69,92,233,0.1)', color: '#455CE9', padding: '10px 22px', borderRadius: 20, fontWeight: 600, fontSize: '1.05rem' }}>Adaptable to any sector</span>
          </div>
        </div>
      </section>
      {/* Premium Experience */}
      <section className={styles.premiumSummary}>
        <div className={styles.premiumSummaryContent}>
          <div className={styles.premiumSummaryImage}>
            <img src="/images/pc-tele.png" alt="Premium summary illustration" style={{ width: '130%', maxWidth: '800px', height: 'auto', borderRadius: 0, background: 'none', boxShadow: 'none' }} />
          </div>
          <div className={styles.premiumSummaryText}>
            <h2>The Gaming Zone Experience</h2>
            <div className={styles.premiumPitch}>
              <p>
                Discover a next-generation booking and management platform, designed to deliver a smooth, fast, and ultra-secure experience.<br/>
                Gaming Zone System adapts to every universe: gaming, sports, hospitality, coworking, and more. Offer your clients an elegant interface, tailor-made features, and uncompromising performance.<br/>
                Turn your booking management into a true business asset, and stand out through innovation and simplicity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Overview */}
      <section className={styles.featuresSection}>
        <h2>Features Overview</h2>
        <div className={styles.featuresGrid}>
          {/* 1. Sign Up */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdPerson size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Quick Sign Up</h3>
              <p>Create an account in seconds to access the Gaming Zone platform.</p>
            </div>
          </div>
          {/* 2. Login */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdLock size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Secure Login</h3>
              <p>Modern authentication with reCAPTCHA and secure access management.</p>
            </div>
          </div>
          {/* 3. Dashboard */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdDashboard size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Personalized Dashboard</h3>
              <p>Find all your main actions as soon as you arrive on the platform.</p>
            </div>
          </div>
          {/* 4. Equipment Selection */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdDevices size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Equipment Selection</h3>
              <p>Choose your console or gaming PC based on real-time availability.</p>
            </div>
          </div>
          {/* 5. Time Slot Booking */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdEventAvailable size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Time Slot Booking</h3>
              <p>Book a specific time slot and see available stations in real time.</p>
            </div>
          </div>
          {/* 6. Payment Options */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdCreditCard size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Payment Options</h3>
              <p>Pay online or on-site, according to your preference and comfort.</p>
            </div>
          </div>
          {/* 7. Order Summary */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdDescription size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Order Summary</h3>
              <p>Check all your booking details before final validation.</p>
            </div>
          </div>
          {/* 8. Instant Confirmation */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdCheckCircle size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Instant Confirmation</h3>
              <p>Receive clear confirmation on screen and by email after each booking.</p>
            </div>
          </div>
          {/* 9. Booking History */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdHistory size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Booking History</h3>
              <p>View your complete history of past and upcoming bookings.</p>
            </div>
          </div>
          {/* 10. Account Management */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdPerson size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Account Management</h3>
              <p>Edit your personal information, preferences, and track your achievements.</p>
            </div>
          </div>
          {/* 11. Detailed Statistics */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdTrendingUp size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Detailed Statistics</h3>
              <p>View your usage statistics and booking habits.</p>
            </div>
          </div>
          {/* 12. Player Points & Levels */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdStar size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Player Points & Levels</h3>
              <p>Level up as a player: earn points with each booking, unlock new levels, and enjoy exclusive benefits for the most loyal members.</p>
            </div>
          </div>
        </div>
      </section>
      {/* User Experience on All Devices */}
      <section className={styles.responsiveSection}>
        <div className={styles.responsiveContent}>
          <div className={styles.responsiveText}>
            <h2>User Experience on All Devices</h2>
            <p>
              A mobile-first experience: every page and feature adapts perfectly to your smartphone.<br/>
              Enjoy a modern, intuitive, and responsive interface, whether on phone, tablet, or computer.<br/>
              Both players and admins benefit from optimal comfort, anywhere, anytime.
            </p>
          </div>
          <div className={styles.uxCarousel}>
            <button className={styles.carouselArrow} onClick={handlePrevUx} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <div className={styles.mockup}>
              <img src={uxScreens[uxIndex].img} alt="User experience preview" />
            </div>
            <button className={styles.carouselArrow} onClick={handleNextUx} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
      {/* Robust & Secure Backend */}
      <section className={styles.backendSection}>
        <div className={styles.backendContent}>
          <div className={styles.backendText}>
            <h2>Robust & Secure Backend</h2>
            <p>
              Modular, secure, and documented Python/Flask backend.<br/>
              Session management, security, notifications, emails, complex business logic.
            </p>
            <ul className={styles.backendPoints}>
              <li>Secure authentication</li>
              <li>reCAPTCHA</li>
              <li>Admin separation</li>
              <li>Automated tests</li>
              <li>Logs</li>
            </ul>
          </div>
          <div className={styles.backendSchema}>
            <div className={styles.schemaBlocks}>
              <div className={styles.schemaBlock}>Frontend<br/>(Next.js)</div>
              <span className={styles.schemaArrow}>↔</span>
              <div className={styles.schemaBlock}>API<br/>Flask</div>
              <span className={styles.schemaArrow}>↔</span>
              <div className={styles.schemaBlock}>MySQL</div>
            </div>
          </div>
        </div>
      </section>
      {/* Sector Adaptability */}
      <section className={styles.sectorSection}>
        <div className={styles.sectorContent}>
          <h2>Sector Adaptability</h2>
          <p>
            Adaptable to: gaming centers, hotels, sports clubs, stadiums, coworking, etc.<br/>
            Every resource (room, field, hall, equipment) can be managed by the same system.
          </p>
          <div className={styles.sectorGrid}>
            <div className={styles.sectorItem}>
              <MdSportsEsports size={48} color="#455CE9" />
              <span>Gaming center</span>
            </div>
            <div className={styles.sectorItem}>
              <MdHotel size={48} color="#455CE9" />
              <span>Hotel</span>
            </div>
            <div className={styles.sectorItem}>
              <MdSportsSoccer size={48} color="#455CE9" />
              <span>Sports club</span>
            </div>
            <div className={styles.sectorItem}>
              <MdStadium size={48} color="#455CE9" />
              <span>Stadium</span>
            </div>
            <div className={styles.sectorItem}>
              <MdMeetingRoom size={48} color="#455CE9" />
              <span>Coworking</span>
            </div>
          </div>
        </div>
      </section>
      {/* Scalability & Advanced Management */}
      <section className={styles.scalabilitySection}>
        <div className={styles.scalabilityContent}>
          <h2>Scalability & Advanced Management</h2>
          <p>
            Multi-user, multi-resource, multi-role management.<br/>
            A system ready to scale for more clients, resources, or features.
          </p>
          <div className={styles.scalabilityCarousel}>
            <button className={styles.carouselArrow} aria-label="Previous" style={{visibility: 'hidden'}}>&lt;</button>
            <div className={styles.scalabilityMockup}>
              <MdAdminPanelSettings size={48} color="#455CE9" />
              <span>Role management in admin</span>
            </div>
            <div className={styles.scalabilityMockup}>
              <MdHistory size={48} color="#455CE9" />
              <span>Multi-user history</span>
            </div>
            <div className={styles.scalabilityMockup}>
              <MdCategory size={48} color="#455CE9" />
              <span>Selection of different resource types</span>
            </div>
            <button className={styles.carouselArrow} aria-label="Next" style={{visibility: 'hidden'}}>&gt;</button>
          </div>
        </div>
      </section>
      {/* Technologies Used */}
      <section className={styles.techSummarySection}>
        <div className={styles.techSummaryContent}>
          <h2>Technologies Used</h2>
          <div className={styles.techGrid}>
            <div>
              <div className={styles.techIcon}><MdWeb size={36} color="#455CE9" /></div>
              <h3>Frontend</h3>
              <ul>
                <li>Next.js 15 (React 19)</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Radix UI</li>
                <li>Lucide React (icons)</li>
                <li>React Google reCAPTCHA</li>
              </ul>
            </div>
            <div>
              <div className={styles.techIcon}><MdCode size={36} color="#455CE9" /></div>
              <h3>Backend</h3>
              <ul>
                <li>Python 3</li>
                <li>Flask 2.3</li>
                <li>Flask-Mail</li>
                <li>Flask-CORS</li>
                <li>PyMySQL</li>
                <li>bcrypt</li>
                <li>PyJWT</li>
              </ul>
            </div>
            <div>
              <div className={styles.techIcon}><MdStorage size={36} color="#455CE9" /></div>
              <h3>Database</h3>
              <ul>
                <li>MySQL (advanced relational schema)</li>
              </ul>
            </div>
            <div>
              <div className={styles.techIcon}><MdBuild size={36} color="#455CE9" /></div>
              <h3>DevOps & Tools</h3>
              <ul>
                <li>Shell scripts</li>
                <li>pnpm / npm</li>
                <li>Git & GitHub</li>
                <li>Markdown</li>
                <li>Docker (optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Key Features */}
      <section className={styles.keyFeaturesSection}>
        <div className={styles.keyFeaturesContent}>
          <h2>Key Features</h2>
          <ul className={styles.keyFeaturesList}>
            <li><MdLock size={24} color="#455CE9" /> Secure Authentication</li>
            <li><MdEventAvailable size={24} color="#455CE9" /> Real-Time Booking System</li>
            <li><MdDashboard size={24} color="#455CE9" /> Admin Dashboard</li>
            <li><MdPerson size={24} color="#455CE9" /> User Profile & History</li>
            <li><MdNotificationsActive size={24} color="#455CE9" /> Notifications & Reminders</li>
            <li><MdDevices size={24} color="#455CE9" /> Responsive Design</li>
            <li><MdBuild size={24} color="#455CE9" /> Customizable Resources</li>
            <li><MdSecurity size={24} color="#455CE9" /> Advanced Security</li>
            <li><MdTrendingUp size={24} color="#455CE9" /> Scalability</li>
            <li><MdDescription size={24} color="#455CE9" /> Comprehensive Documentation</li>
            <li><MdUpdate size={24} color="#455CE9" /> Continuous Updates</li>
            <li><MdSupportAgent size={24} color="#455CE9" /> Support & Assistance</li>
          </ul>
        </div>
      </section>
      {/* Contact Section moved to bottom */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>Let’s Get in Touch</h2>
          <p>Interested in collaborating or want to know more about Gaming Zone System? Let’s connect and build something great together.</p>
          <div className={styles.ctaButtons}>
            <a 
              href="/images/CV_Talali_Zakaria.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.primaryButton}
            >
              <FaDownload /> Download My Resume
            </a>
            <a href="/contact" className={styles.secondaryButton}>
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <p>Version 2025 © Edition</p>
            <p>{currentTime} Paris</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="https://www.linkedin.com/in/zakaria-talali-030a2334a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ztalali09" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://fr.fiverr.com/sellers/zakaria_032/" target="_blank" rel="noopener noreferrer">Fiverr</a>
            <a href="https://www.upwork.com/freelancers/~01e9850cef0dcc8023" target="_blank" rel="noopener noreferrer">Upwork</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 