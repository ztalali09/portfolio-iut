'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.scss';
import { FaLinkedin, FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';
import Image from 'next/image';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import ContactMenuBurger from './ContactMenuBurger';

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const canvasRef = useRef(null);
    const email = 'talalizakariapro@gmail.com';

    // Variables pour l'animation Three.js - using useRef to preserve values
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const particlesRef = useRef(null);
    const targetXRef = useRef(0);
    const targetYRef = useRef(0);
    const windowHalfXRef = useRef(0);
    const windowHalfYRef = useRef(0);

    // Gestion du mouvement de la souris
    const handleMouseMove = (event) => {
        windowHalfXRef.current = window.innerWidth / 2;
        windowHalfYRef.current = window.innerHeight / 2;
        
        targetXRef.current = (event.clientX - windowHalfXRef.current) * 0.001;
        targetYRef.current = (event.clientY - windowHalfYRef.current) * 0.001;
    };

    useEffect(() => {
        if (!canvasRef.current) return;

        // Initialisation de la scène
        sceneRef.current = new THREE.Scene();
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        rendererRef.current = new THREE.WebGLRenderer({ 
            canvas: canvasRef.current,
            alpha: true,
            antialias: true 
        });

        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Création des particules
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.015, // Particules plus grandes
            color: '#455CE9',
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending // Ajout d'un effet de lueur
        });

        particlesRef.current = new THREE.Points(particlesGeometry, particlesMaterial);
        sceneRef.current.add(particlesRef.current);

        cameraRef.current.position.z = 2;

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            
            if (particlesRef.current) {
                // Rotation de base
                particlesRef.current.rotation.x += 0.002;
                particlesRef.current.rotation.y += 0.002;
                
                // Rotation basée sur la position de la souris
                particlesRef.current.rotation.x += 0.08 * (targetYRef.current - particlesRef.current.rotation.x);
                particlesRef.current.rotation.y += 0.08 * (targetXRef.current - particlesRef.current.rotation.y);

                // Animation de flottement
                const time = Date.now() * 0.0002;
                particlesRef.current.position.y = Math.sin(time) * 0.1;
            }
            
            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
        };

        animate();

        // Gestion du redimensionnement
        const handleResize = () => {
            if (cameraRef.current && rendererRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        // Nettoyage
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            if (particlesRef.current) {
                particlesRef.current.geometry.dispose();
                particlesRef.current.material.dispose();
            }
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

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.contactPage}>
            <ContactMenuBurger />
            <canvas ref={canvasRef} className={styles.backgroundCanvas} />
            
            <div className={styles.container}>
                <div className={styles.heroSection}>
                    <h1>Créons Ensemble Quelque Chose d&apos;Extraordinaire</h1>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.socialLinks}>
                        <h3>Connectez-vous avec Moi</h3>
                        <div className={styles.linksGrid}>
                            <a href="https://www.linkedin.com/in/zakaria-talali-030a2334a/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <div className={styles.iconContainer}>
                                    <FaLinkedin />
                                </div>
                                <div className={styles.linkContent}>
                                    <span>LinkedIn</span>
                                    <p>Connectez-vous professionnellement</p>
                                </div>
                                <div className={styles.arrow}>→</div>
                            </a>

                            <a href="https://github.com/ztalali09" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <div className={styles.iconContainer}>
                                    <FaGithub />
                                </div>
                                <div className={styles.linkContent}>
                                    <span>GitHub</span>
                                    <p>Découvrez mes projets</p>
                                </div>
                                <div className={styles.arrow}>→</div>
                            </a>

                            <a href="https://fr.fiverr.com/sellers/zakaria_032/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <div className={styles.iconContainer}>
                                    <Image 
                                        src="/images/fiverr.png"
                                        alt="Fiverr"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div className={styles.linkContent}>
                                    <span>Fiverr</span>
                                    <p>Découvrez mes services</p>
                                </div>
                                <div className={styles.arrow}>→</div>
                            </a>

                            <a href="https://www.upwork.com/freelancers/~01e9850cef0dcc8023" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <div className={styles.iconContainer}>
                                    <Image 
                                        src="/images/upwor.png"
                                        alt="Upwork"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div className={styles.linkContent}>
                                    <span>Upwork</span>
                                    <p>Collaborez avec moi</p>
                                </div>
                                <div className={styles.arrow}>→</div>
                            </a>
                        </div>
                    </div>

                    <div className={styles.emailSection}>
                        <h3>Contactez-moi</h3>
                        <div className={styles.emailContent}>
                            <div className={styles.emailDisplay}>
                                <p className={styles.email}>{email}</p>
                                <p className={styles.emailDescription}>
                                    N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
                                </p>
                            </div>
                            <div className={styles.emailButtons}>
                                <a href={`mailto:${email}`} className={styles.emailButton}>
                                    Envoyer un email
                                </a>
                                <button onClick={handleCopy} className={styles.copyButton}>
                                    {copied ? 'Copié !' : 'Copier l&apos;adresse'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerInfo}>
                        <p>Version 2025 © Édition</p>
                        <p>{new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' })} Paris</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <a href="https://www.linkedin.com/in/zakaria-talali-030a2334a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/ztalali09" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://fr.fiverr.com/sellers/zakaria_032/" target="_blank" rel="noopener noreferrer">Fiverr</a>
                        <a href="https://www.upwork.com/freelancers/~01e9850cef0dcc8023" target="_blank" rel="noopener noreferrer">Upwork</a>
                    </div>
                </div>
            </div>
        </div>
    );
}