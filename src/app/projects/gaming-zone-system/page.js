'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '../../../components/Header';
import styles from '../page.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    { title: 'Accueil sur mobile', img: '/images/blank.png' },
    { title: 'Accueil sur desktop', img: '/images/blank.png' },
    { title: 'Formulaire de réservation sur smartphone', img: '/images/blank.png' },
    { title: 'Interface admin sur tablette', img: '/images/blank.png' },
    { title: 'Email de confirmation sur mobile', img: '/images/blank.png' },
  ];
  const [uxIndex, setUxIndex] = useState(0);
  const handlePrevUx = () => setUxIndex((prev) => (prev === 0 ? uxScreens.length - 1 : prev - 1));
  const handleNextUx = () => setUxIndex((prev) => (prev === uxScreens.length - 1 ? 0 : prev + 1));

  return (
    <div className={styles.projectsPage}>
      <Header />
      <canvas ref={canvasRef} className={styles.backgroundCanvas} />
      {/* Slideshow */}
      <div style={{ width: '100vw', position: 'relative', height: 340, borderRadius: 0, overflow: 'hidden', boxShadow: '0 8px 32px rgba(69,92,233,0.10)', margin: '0 calc(50% - 50vw)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={slide}
            src={slideshowImages[slide]}
            alt="Gaming Zone System Slideshow"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7 }}
            style={{ width: '100vw', height: 340, objectFit: 'cover', borderRadius: 0 }}
          />
        </AnimatePresence>
      </div>
      <section className={styles.hero + ' ' + styles.gamingZoneHero} style={{ minHeight: 0, padding: '60px 0 0 0' }}>
        <div className={styles.heroContent}>
          <h3>Gaming Zone System — Plateforme de réservation modulaire & premium</h3>
          <p>Solution clé en main pour la gestion de réservations, adaptable à tous les secteurs (gaming, hôtels, clubs, stades…)</p>
          <div className={styles.badges + ' badges'} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
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
            <img src="/images/blank.png" alt="Résumé premium illustration" style={{ width: '100%', height: 'auto', borderRadius: 18, background: '#fff', boxShadow: '0 4px 24px rgba(69,92,233,0.08)' }} />
          </div>
          <div className={styles.premiumSummaryText}>
            <h2>Résumé premium</h2>
            <div className={styles.premiumPitch}>
              <p>
                Plateforme de réservation et de gestion tout-en-un, pensée pour la performance, la sécurité et l’expérience utilisateur.<br/>
                Adaptable à tout type d’activité nécessitant des réservations (gaming, sport, hôtellerie, coworking…).
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Expérience utilisateur sur tous les supports */}
      <section className={styles.responsiveSection}>
        <div className={styles.responsiveContent}>
          <div className={styles.responsiveText}>
            <h2>Expérience utilisateur sur tous les supports</h2>
            <p>
              L’interface est 100% responsive, optimisée pour mobile, tablette et desktop.<br/>
              Les utilisateurs et admins bénéficient d’une expérience fluide sur tous les appareils.
            </p>
          </div>
          <div className={styles.uxCarousel}>
            <button className={styles.carouselArrow} onClick={handlePrevUx} aria-label="Précédent">
              <FaChevronLeft />
            </button>
            <div className={styles.mockup}>
              <img src={uxScreens[uxIndex].img} alt={uxScreens[uxIndex].title} />
              <span>{uxScreens[uxIndex].title}</span>
            </div>
            <button className={styles.carouselArrow} onClick={handleNextUx} aria-label="Suivant">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
      {/* Fonctionnalités clés */}
      <section className={styles.featuresSection}>
        <h2>Fonctionnalités clés</h2>
        <div className={styles.featuresGrid}>
          {/* Carte 1 : Inscription */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Inscription" /></div>
            <h3>Inscription</h3>
            <p>Créez un compte en quelques secondes pour accéder à toutes les fonctionnalités.</p>
          </div>
          {/* Carte 2 : Connexion */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Connexion" /></div>
            <h3>Connexion</h3>
            <p>Connectez-vous de façon sécurisée pour gérer vos réservations et votre profil.</p>
          </div>
          {/* Carte 3 : Réservation en temps réel */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Réservation en temps réel" /></div>
            <h3>Réservation en temps réel</h3>
            <p>Réservez instantanément selon les disponibilités à jour.</p>
          </div>
          {/* Carte 4 : Confirmation */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Confirmation" /></div>
            <h3>Confirmation</h3>
            <p>Recevez une confirmation claire à l’écran et par email après chaque réservation.</p>
          </div>
          {/* Carte 5 : Upsell */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Upsell" /></div>
            <h3>Upsell & options complémentaires</h3>
            <p>Proposez des services additionnels ou des options lors de la réservation.</p>
          </div>
          {/* Carte 6 : Historique */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Historique" /></div>
            <h3>Historique des réservations</h3>
            <p>Consultez l’historique complet de vos réservations passées et à venir.</p>
          </div>
          {/* Carte 7 : Gestion de comptes */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Gestion de comptes" /></div>
            <h3>Gestion de compte</h3>
            <p>Modifiez vos informations personnelles et vos préférences facilement.</p>
          </div>
          {/* Carte 8 : Statistiques du compte */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Statistiques du compte" /></div>
            <h3>Statistiques du compte</h3>
            <p>Visualisez vos statistiques d’utilisation et vos habitudes de réservation.</p>
          </div>
          {/* Carte 9 : Mot de passe oublié */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Mot de passe oublié" /></div>
            <h3>Mot de passe oublié</h3>
            <p>Réinitialisez facilement votre mot de passe en cas d’oubli grâce à un email sécurisé.</p>
          </div>
          {/* Carte 10 : Gestion des créneaux */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Gestion des créneaux" /></div>
            <h3>Gestion des créneaux et disponibilités</h3>
            <p>Gérez les créneaux horaires, disponibilités et ressources en temps réel.</p>
          </div>
          {/* Carte 11 : Notifications */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Notifications" /></div>
            <h3>Notifications et rappels</h3>
            <p>Recevez des rappels automatiques et des notifications importantes.</p>
          </div>
          {/* Carte 12 : Emails de notifications */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><img src="/images/blank.png" alt="Emails de notifications" /></div>
            <h3>Emails de notifications</h3>
            <p>Recevez des notifications importantes et des rappels directement par email.</p>
          </div>
        </div>
      </section>
      {/* Expérience utilisateur sur tous les supports (duplicata) */}
      <section className={styles.responsiveSection}>
        <div className={styles.responsiveContent}>
          <div className={styles.responsiveText}>
            <h2>Expérience utilisateur sur tous les supports</h2>
            <p>
              L’interface est 100% responsive, optimisée pour mobile, tablette et desktop.<br/>
              Les utilisateurs et admins bénéficient d’une expérience fluide sur tous les appareils.
            </p>
          </div>
          <div className={styles.uxCarousel}>
            <button className={styles.carouselArrow} onClick={handlePrevUx} aria-label="Précédent">
              <FaChevronLeft />
            </button>
            <div className={styles.mockup}>
              <img src={uxScreens[uxIndex].img} alt={uxScreens[uxIndex].title} />
              <span>{uxScreens[uxIndex].title}</span>
            </div>
            <button className={styles.carouselArrow} onClick={handleNextUx} aria-label="Suivant">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
      {/* CTA Section */}
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