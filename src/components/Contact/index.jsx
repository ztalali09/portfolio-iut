import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function index() {
    const container = useRef(null);
    const [currentTime, setCurrentTime] = useState('');
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    // Mise à jour de l'heure en temps réel
    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));
        };
        
        updateTime(); // Mise à jour initiale
        const interval = setInterval(updateTime, 1000); // Mise à jour toutes les secondes
        
        return () => clearInterval(interval); // Nettoyage lors du démontage
    }, []);

    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            src="/images/background11.jpg"
                            fill={true}
                            alt="background"
                            />
                        </div>
                        <h2>Travaillons</h2>
                    </span>
                    <h2>ensemble</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Link href="/contact">
                            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                                <p>Me contacter</p>
                            </Rounded>
                        </Link>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <a href="mailto:talalizakariapro@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Rounded>
                            <p>talalizakariapro@gmail.com</p>
                        </Rounded>
                    </a>
                    <a href="https://wa.me/33635342271" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Rounded>
                            <p>+33 6 35342271</p>
                        </Rounded>
                    </a>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2025 © Édition</p>
                        </span>
                        <span>
                            <h3>Heure</h3>
                            <p>{currentTime} Paris</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>réseaux sociaux</h3>
                            <Magnetic>
                                <a href="https://www.linkedin.com/in/zakaria-talali-030a2334a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <a href="https://github.com/ztalali09" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://fr.fiverr.com/sellers/zakaria_032/" target="_blank" rel="noopener noreferrer">Fiverr</a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.upwork.com/freelancers/~01e9850cef0dcc8023" target="_blank" rel="noopener noreferrer">Upwork</a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
