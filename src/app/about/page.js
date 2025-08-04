'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.scss';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaHeart, FaCode, FaGraduationCap, FaLaptopCode, FaBrain, FaRocket, FaTools, FaLightbulb, FaBook, FaLanguage, FaGamepad, FaMusic, FaPalette, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCalendarAlt, FaPlane, FaSmile, FaUsers, FaUserCheck, FaUser } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';

export default function AboutPage() {
  const [currentTime, setCurrentTime] = useState('');
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Animation de la barre de progression
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Gestion de l'heure
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation de la visibilité
  useEffect(() => {
    setIsVisible(true);
    // Réinitialiser le scroll au chargement
    window.scrollTo(0, 0);
  }, []);

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Ajout des données personnelles
  const personalInfo = {
    location: "Belfort, France",
    email: "talalizakariapro@gmail.com",
    phone: "+33 6 35342271",
    birthDate: " ",
    formation: "BUT Informatique - 1ʳᵉ année",
    institution: "IUT Marie et Louis Pasteur de Belfort",
    languages: [
      { name: "Arabe", level: "Natif" },
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "B2/C1" },
      { name: "Espagnol", level: "A1" },
      { name: "Chinois", level: "A1" }
    ]
  };

  // Ajout des compétences techniques
  const technicalSkills = {
    languages: [
      "Python",
      "Java",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SQL",
      "PL/SQL",
      "TypeScript"
    ],
    frameworks: [
      "Flask",
      "JavaFX",
      "Bootstrap",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "Boardifier (MVC)"
    ],
    tools: [
      "Linux",
      "Terminal",
      "VS Code",
      "JetBrains (IntelliJ, PyCharm, WebStorm)",
      "Git",
      "GitLab",
      "Maven",
      "JUnit",
      "Postman"
    ],
    databases: [
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "Oracle SQL",
      "MongoDB"
    ],
    other: [
      "Architecture MVC",
      "Développement Full-Stack",
      "SEO & Performance Web",
      "Tests unitaires",
      "Intelligence Artificielle (Minimax)",
      "Gestion de projet Agile",
      "Utilisation intelligente de l'IA pour le développement"
    ]
  };

  // Ajout des cours suivis
  const courses = [
    "Programmation orientée objet (Java)",
    "Développement Web (HTML, CSS, JS, Flask, Python)",
    "Développement d'IHM (JavaFX)",
    "Modélisation et gestion de bases de données",
    "Installation de services réseau",
    "Systèmes d'exploitation (Linux)",
    "Mathématiques discrètes (logique, graphes, ensembles)",
    "Gestion de projet, communication professionnelle",
    "Droit numérique, environnement économique et écologique"
  ];

  // Ajout des centres d'intérêt
  const interests = [
    { icon: <FaPlane />, title: "Voyage", description: "Découverte de nouvelles cultures" },
    { icon: <FaMusic />, title: "Musique", description: "Passion pour la musique" },
    { icon: <FaSmile />, title: "Humour", description: "Partage de bonnes vibes" },
    { icon: <FaUsers />, title: "Partage", description: "Esprit d'équipe et collaboration" }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={styles.aboutPage}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Barre de progression */}
          <motion.div 
            className={styles.progressBar}
            style={{ width: progressBarWidth }}
          />

          {/* Hero Section */}
          <section className={styles.hero}>
            <ParticleBackground />
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className={styles.avatarContainer}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
          >
            <div className={styles.avatar}>
                  <motion.div 
                    className={styles.avatarPlaceholder}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                <FaCode />
                  </motion.div>
            </div>
          </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hi, I’m <motion.span 
                  className={styles.highlight}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >Zakaria Talali</motion.span>
              </motion.h1>

              <motion.p 
                className={styles.tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Web Developer & Digital Experience Creator — passionate about building seamless, impactful solutions at the intersection of technology and creativity.
              </motion.p>

              <motion.div 
                className={styles.quickLinks}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a 
                  href="https://github.com/ztalali09" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/zakaria-talali-030a2334a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
                <motion.a 
                  href="/images/CV_Talali_Zakaria.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cvLink}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
              <FaDownload /> CV
                </motion.a>
              </motion.div>
        </motion.div>
      </section>

          {/* Section Qui Suis-Je */}
          <motion.section 
            className={styles.personalSection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.container}>
              <motion.h2 
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                My Profile
              </motion.h2>

              <motion.div 
                className={styles.personalContent}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Informations Personnelles */}
                <motion.div 
                  className={styles.infoGrid}
                  variants={containerVariants}
                >
                  <motion.div className={styles.infoCard} variants={cardVariants} whileHover="hover">
                    <h3><FaUser /> Personal Information</h3>
                    <ul>
                      <li><FaMapMarkerAlt /> Belfort, France</li>
                      <li><FaEnvelope /> talalizakariapro@gmail.com</li>
                      <li><FaPhone /> +33 6 35 34 22 71</li>
                    </ul>
                  </motion.div>

                  <motion.div className={styles.infoCard} variants={cardVariants} whileHover="hover">
                    <h3><FaGraduationCap /> Education</h3>
                    <ul>
                      <li><strong>Pursuing a Bachelor's degree in Computer Science – Currently in 3rd year</strong></li>
                      <li>IUT Marie and Louis Pasteur, Belfort</li>
                    </ul>
                  </motion.div>

                  <motion.div className={styles.infoCard} variants={cardVariants} whileHover="hover">
                    <h3><FaCode /> Technical Skills</h3>
                    <div className={styles.skillsList}>
                      <div>
                        <h4>Languages</h4>
                        <ul>
                          {technicalSkills.languages.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Frameworks & Tools</h4>
                        <ul>
                          {technicalSkills.frameworks.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                          {technicalSkills.tools.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Databases</h4>
                        <ul>
                          {technicalSkills.databases.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Other</h4>
                        <ul>
                          {technicalSkills.other.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div className={styles.infoCard} variants={cardVariants} whileHover="hover">
                    <h3><FaBook /> Courses</h3>
                    <ul className={styles.coursesList}>
                      <li>Object-Oriented Programming (Java)</li>
                      <li>Web Development (HTML, CSS, JS, Flask, Python)</li>
                      <li>UI Development (JavaFX)</li>
                      <li>Database Modeling & Management</li>
                      <li>Network Services Installation</li>
                      <li>Operating Systems (Linux)</li>
                      <li>Discrete Mathematics (Logic, Graphs, Sets)</li>
                      <li>Project Management, Professional Communication</li>
                      <li>Digital Law, Economic & Ecological Environment</li>
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Langues */}
                <motion.div 
                  className={styles.languages}
                  variants={containerVariants}
                >
                  <h3><FaLanguage /> Languages</h3>
                  <motion.div 
                    className={styles.languageGrid}
                    variants={containerVariants}
                  >
                    <motion.div className={styles.languageItem} variants={cardVariants} whileHover="hover">
                      <h4>Arabic</h4>
                      <span>Native</span>
                    </motion.div>
                    <motion.div className={styles.languageItem} variants={cardVariants} whileHover="hover">
                      <h4>French</h4>
                      <span>Native</span>
                    </motion.div>
                    <motion.div className={styles.languageItem} variants={cardVariants} whileHover="hover">
                      <h4>English</h4>
                      <span>Upper-Intermediate (B2/C1)</span>
                    </motion.div>
                    <motion.div className={styles.languageItem} variants={cardVariants} whileHover="hover">
                      <h4>Spanish</h4>
                      <span>Beginner (A1)</span>
                    </motion.div>
                    <motion.div className={styles.languageItem} variants={cardVariants} whileHover="hover">
                      <h4>Chinese</h4>
                      <span>Beginner (A1)</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Section Mon Histoire */}
          <motion.section 
            className={styles.storySection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>My Journey</h2>
              <div className={styles.storyContent}>
                <div className={styles.storyCard}>
                  <p>
                    As a Computer Science student at IUT Belfort, I blend a strong academic foundation with a passion for development. My international background and fluency in multiple languages enrich my perspective on software creation. I strive to deliver innovative solutions with a rigorous and methodical approach.
                  </p>
                  <div className={styles.storyStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>5+</span>
                      <span className={styles.statLabel}>Languages</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>3+</span>
                      <span className={styles.statLabel}>Academic Projects</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>100%</span>
                      <span className={styles.statLabel}>Motivation</span>
                    </div>
                  </div>
                </div>
                <div className={styles.personalityCard}>
                  <h3>Soft Skills</h3>
                  <ul>
                    <li><FaUserCheck /> Autonomy & Precision</li>
                    <li><FaBrain /> Curiosity & Eagerness to Learn</li>
                    <li><FaUsers /> Team Spirit</li>
                    <li><FaSmile /> Positive Energy</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section Mes Objectifs */}
          <motion.section 
            className={styles.goalsSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>My Ambitions</h2>
              <div className={styles.goalsContent}>
                <div className={styles.goalCard}>
                  <h3>Short Term</h3>
                  <ul>
                    <li>Master Next.js 14</li>
                    <li>Contribute to open source projects</li>
                    <li>Sharpen my UI/UX skills</li>
                  </ul>
                </div>
                <div className={styles.goalCard}>
                  <h3>Mid Term</h3>
                  <ul>
                    <li>Earn an AWS certification</li>
                    <li>Build a full-featured web application</li>
                    <li>Participate in hackathons</li>
                  </ul>
                </div>
                <div className={styles.goalCard}>
                  <h3>Long Term</h3>
                  <ul>
                    <li>Become a senior full-stack developer</li>
                    <li>Mentor other developers</li>
                    <li>Launch my own project</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.ctaContent}
        >
          <h2>Let’s Work Together</h2>
          <p>Interested in collaborating, discussing an opportunity, or just connecting? Feel free to reach out!</p>
          <a href="/contact" className={styles.ctaButton}>Contact</a>
        </motion.div>
      </section>

          {/* Footer */}
          <footer className={styles.footer}>
        <div className={styles.footerContent}>
              <div className={styles.footerInfo}>
                <p>Version 2025 © Édition</p>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
} 