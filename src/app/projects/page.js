'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import * as THREE from 'three';
import ProjectModal from '../../components/ProjectModal';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Three.js background setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
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

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
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

  // Gestion de l'heure
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleProjectClick = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const nextIndex = (selectedProject.id) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const prevIndex = (selectedProject.id - 2 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <div className={styles.projectsPage} ref={containerRef}>
      <canvas ref={canvasRef} className={styles.backgroundCanvas} />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1>My Projects</h1>
          <p>Explore a selection of my work in web development and digital solutions.</p>
          <div className={styles.heroButtons}>
            <a href="/images/Talali_zakaria_traces.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              <FaDownload /> Download All Project Docs
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects List */}
      <section className={styles.projects}>
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectItem} ${index % 2 === 0 ? styles.imageRight : styles.imageLeft}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.projectContent}>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.context && <p className={styles.context}>{project.context}</p>}
                  {project.role && <p className={styles.role}>{project.role}</p>}
                  <div className={styles.projectTech}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <FaGithub /> Source Code
                    </a>
                    )}
                    {project.title.startsWith('Gaming Zone System') ? (
                      <a
                        href="/projects/gaming-zone-system"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <FaExternalLinkAlt /> Learn More
                      </a>
                    ) : (
                      <button 
                        onClick={() => handleProjectClick(project.id)} 
                        className={styles.projectLink}
                      >
                        <FaExternalLinkAlt /> Learn More
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.projectImage}>
                  <img src={project.thumbnailImage || project.mainImage} alt={project.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
        currentIndex={selectedProject ? selectedProject.id - 1 : 0}
        totalProjects={projects.length}
      />

      {/* CTA Section */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>Let’s Collaborate</h2>
          <p>Interested in working together or have a project in mind? Let’s connect and create something impactful.</p>
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