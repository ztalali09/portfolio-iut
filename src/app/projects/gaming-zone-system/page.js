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
          <h3>Gaming Zone System — Plateforme de réservation modulaire & premium</h3>
          <p>Solution clé en main pour la gestion de réservations, adaptable à tous les secteurs (gaming, hôtels, clubs, stades…)</p>
          <div className={styles.badges + ' badges'}>
            <span style={{ background: 'rgba(69,92,233,0.1)', color: '#455CE9', padding: '10px 22px', borderRadius: 20, fontWeight: 600, fontSize: '1.05rem' }}>Fullstack</span>
            <span style={{ background: 'rgba(69,92,233,0.1)', color: '#455CE9', padding: '10px 22px', borderRadius: 20, fontWeight: 600, fontSize: '1.05rem' }}>Développé seul en 2 mois</span>
            <span style={{ background: 'rgba(69,92,233,0.1)', color: '#455CE9', padding: '10px 22px', borderRadius: 20, fontWeight: 600, fontSize: '1.05rem' }}>Sécurité avancée</span>
            <span style={{ background: 'rgba(69,92,233,0.1)', color: '#455CE9', padding: '10px 22px', borderRadius: 20, fontWeight: 600, fontSize: '1.05rem' }}>Adaptable à tout secteur</span>
          </div>
        </div>
      </section>
      {/* Résumé premium */}
      <section className={styles.premiumSummary}>
        <div className={styles.premiumSummaryContent}>
          <div className={styles.premiumSummaryImage}>
            <img src="/images/pc-tele.png" alt="Résumé premium illustration" style={{ width: '130%', maxWidth: '800px', height: 'auto', borderRadius: 0, background: 'none', boxShadow: 'none' }} />
          </div>
          <div className={styles.premiumSummaryText}>
            <h2>L’Expérience Gaming Zone</h2>
            <div className={styles.premiumPitch}>
              <p>
                Découvrez une plateforme de réservation et de gestion nouvelle génération, conçue pour offrir une expérience fluide, rapide et ultra-sécurisée.<br/>
                Gaming Zone System s’adapte à tous les univers : gaming, sport, hôtellerie, coworking et bien plus. Offrez à vos clients une interface élégante, des fonctionnalités sur-mesure et une performance sans compromis.<br/>
                Transformez la gestion de vos réservations en un véritable atout business, et démarquez-vous par l’innovation et la simplicité.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Fonctionnalités clés */}
      <section className={styles.featuresSection}>
        <h2>Aperçu des fonctionnalités</h2>
        <div className={styles.featuresGrid}>
          {/* 1. Inscription */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdPerson size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Inscription rapide</h3>
              <p>Créez un compte en quelques secondes pour accéder à la plateforme Gaming Zone.</p>
            </div>
          </div>
          {/* 2. Connexion */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdLock size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Connexion sécurisée</h3>
              <p>Authentification moderne avec reCAPTCHA et gestion des accès sécurisés.</p>
            </div>
          </div>
          {/* 3. Accueil */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdDashboard size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Accueil personnalisé</h3>
              <p>Retrouvez toutes vos actions principales dès l’arrivée sur la plateforme.</p>
            </div>
          </div>
          {/* 4. Choix équipement */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdDevices size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Choix de l’équipement</h3>
              <p>Sélectionnez la console ou le PC gaming de votre choix selon les disponibilités.</p>
            </div>
          </div>
          {/* 5. Sélection créneau */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdEventAvailable size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Réservation de créneau</h3>
              <p>Réservez un créneau horaire précis et visualisez les postes disponibles en temps réel.</p>
            </div>
          </div>
          {/* 6. Mode de paiement */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdCreditCard size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Choix du paiement</h3>
              <p>Paiement en ligne ou sur place, selon votre préférence et votre confort.</p>
            </div>
          </div>
          {/* 7. Résumé de commande */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdDescription size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Résumé de la commande</h3>
              <p>Vérifiez tous les détails de votre réservation avant validation finale.</p>
            </div>
          </div>
          {/* 8. Confirmation finale */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdCheckCircle size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Confirmation instantanée</h3>
              <p>Recevez une confirmation claire à l’écran et par email après chaque réservation.</p>
            </div>
          </div>
          {/* 9. Historique */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdHistory size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Historique des réservations</h3>
              <p>Consultez l’historique complet de vos réservations passées et à venir.</p>
            </div>
          </div>
          {/* 10. Mon compte */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdPerson size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Gestion du compte</h3>
              <p>Modifiez vos informations personnelles, préférences et suivez vos succès.</p>
            </div>
          </div>
          {/* 11. Statistiques */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdTrendingUp size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Statistiques détaillées</h3>
              <p>Visualisez vos statistiques d’utilisation et vos habitudes de réservation.</p>
            </div>
          </div>
          {/* 12. Points & Fidélisation */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><MdStar size={48} color="#455CE9" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Points & Niveaux Joueur</h3>
              <p>Progressez en tant que joueur : gagnez des points à chaque réservation, débloquez des niveaux et profitez d’avantages exclusifs pour les membres les plus fidèles de la plateforme.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Expérience utilisateur sur tous les supports (duplicata) */}
      <section className={styles.responsiveSection}>
        <div className={styles.responsiveContent}>
          <div className={styles.responsiveText}>
            <h2>Expérience utilisateur sur tous les supports</h2>
            <p>
              Une expérience pensée d’abord pour le mobile : chaque page, chaque fonctionnalité s’adapte parfaitement à votre smartphone.<br/>
              Profitez d’une interface moderne, intuitive et réactive, que vous soyez sur téléphone, tablette ou ordinateur.<br/>
              Joueurs comme administrateurs bénéficient d’un confort d’utilisation optimal, partout et à tout moment.
            </p>
          </div>
          <div className={styles.uxCarousel}>
            <button className={styles.carouselArrow} onClick={handlePrevUx} aria-label="Précédent">
              <FaChevronLeft />
            </button>
            <div className={styles.mockup}>
              <img src={uxScreens[uxIndex].img} alt="Aperçu expérience utilisateur" />
            </div>
            <button className={styles.carouselArrow} onClick={handleNextUx} aria-label="Suivant">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
      {/* Backend robuste et sécurisé */}
      <section className={styles.backendSection}>
        <div className={styles.backendContent}>
          <div className={styles.backendText}>
            <h2>Backend robuste et sécurisé</h2>
            <p>
              Backend Python/Flask modulaire, sécurisé, documenté.<br/>
              Gestion des sessions, sécurité, notifications, emails, logique métier complexe.
            </p>
            <ul className={styles.backendPoints}>
              <li>Authentification sécurisée</li>
              <li>reCAPTCHA</li>
              <li>Séparation admin</li>
              <li>Tests automatisés</li>
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
      {/* Adaptabilité sectorielle */}
      <section className={styles.sectorSection}>
        <div className={styles.sectorContent}>
          <h2>Adaptabilité sectorielle</h2>
          <p>
            Adaptable à : gaming centers, hôtels, clubs de sport, stades, coworking, etc.<br/>
            Chaque ressource (chambre, terrain, salle, équipement) peut être gérée par le même système.
          </p>
          <div className={styles.sectorGrid}>
            <div className={styles.sectorItem}>
              <MdSportsEsports size={48} color="#455CE9" />
              <span>Gaming center</span>
            </div>
            <div className={styles.sectorItem}>
              <MdHotel size={48} color="#455CE9" />
              <span>Hôtel</span>
            </div>
            <div className={styles.sectorItem}>
              <MdSportsSoccer size={48} color="#455CE9" />
              <span>Club de sport</span>
            </div>
            <div className={styles.sectorItem}>
              <MdStadium size={48} color="#455CE9" />
              <span>Stade</span>
            </div>
            <div className={styles.sectorItem}>
              <MdMeetingRoom size={48} color="#455CE9" />
              <span>Coworking</span>
            </div>
          </div>
        </div>
      </section>
      {/* Scalabilité et gestion avancée */}
      <section className={styles.scalabilitySection}>
        <div className={styles.scalabilityContent}>
          <h2>Scalabilité et gestion avancée</h2>
          <p>
            Gestion multi-utilisateurs, multi-ressources, multi-roles.<br/>
            Système prêt à évoluer pour gérer plus de clients, de ressources, ou de fonctionnalités.
          </p>
          <div className={styles.scalabilityCarousel}>
            <button className={styles.carouselArrow} aria-label="Précédent" style={{visibility: 'hidden'}}>&lt;</button>
            <div className={styles.scalabilityMockup}>
              <MdAdminPanelSettings size={48} color="#455CE9" />
              <span>Gestion des rôles dans l’admin</span>
            </div>
            <div className={styles.scalabilityMockup}>
              <MdHistory size={48} color="#455CE9" />
              <span>Historique multi-utilisateurs</span>
            </div>
            <div className={styles.scalabilityMockup}>
              <MdCategory size={48} color="#455CE9" />
              <span>Sélection de différents types de ressources</span>
            </div>
            <button className={styles.carouselArrow} aria-label="Suivant" style={{visibility: 'hidden'}}>&gt;</button>
          </div>
        </div>
      </section>
      {/* Technologies utilisées */}
      <section className={styles.techSummarySection}>
        <div className={styles.techSummaryContent}>
          <h2>Technologies utilisées</h2>
          <div className={styles.techGrid}>
            <div>
              <div className={styles.techIcon}><MdWeb size={36} color="#455CE9" /></div>
              <h3>Frontend</h3>
              <ul>
                <li>Next.js 15 (React 19)</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Radix UI</li>
                <li>Lucide React (icônes)</li>
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
                <li>MySQL (schéma relationnel avancé)</li>
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
                <li>Docker (optionnel)</li>
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
      {/* Section Contact déplacée en bas */}
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