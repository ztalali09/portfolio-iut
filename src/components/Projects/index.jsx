'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';

const projects = [
  {
    title: "Techmobile",
    src: "telephones.jpg",
    color: "#000000",
    description: "Application web complète de gestion et de vente de téléphones, offrant une expérience utilisateur fluide et intuitive pour les clients et les administrateurs.",
    context: "Projet académique (SAE-345) réalisé dans le cadre de mon parcours de formation en développement web.",
    technologies: ["Flask (Python)", "Jinja", "SQL", "HTML/CSS"],
    features: [
      "Catalogue de téléphones",
      "Gestion du panier et liste d'envies",
      "Système de commandes",
      "Commentaires produits",
      "Interface d'administration complète",
      "Visualisation de données"
    ],
    github: "https://github.com/maevatomvil/SAE-345",
    mainImage: "/images/C1-tel.png"
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
    description: "Plateforme de gestion d'espaces de coworking permettant aux utilisateurs de réserver des espaces de travail, gérer leurs abonnements et interagir avec la communauté.",
    context: "Projet personnel développé pour répondre aux besoins croissants des espaces de coworking et des travailleurs indépendants.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe"],
    features: [
      "Système de réservation en temps réel",
      "Paiements sécurisés avec Stripe",
      "Chat en direct entre membres",
      "Gestion des abonnements",
      "Interface admin complète",
      "Notifications en temps réel"
    ],
    mainImage: "/images/officestudio.png"
  },
  {
    title: "Avatar Gaming",
    src: "avatar_games.png",
    color: "#EFE8D3",
    description: "Agrégateur de Mini-Jeux HTML5 Optimisé SEO avec Intégration AdSense.",
    context: "Plateforme web personnelle offrant une collection de jeux HTML5 avec une expérience utilisateur optimisée.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO"],
    features: [
      "Interface responsive",
      "Optimisation SEO",
      "Intégration AdSense",
      "Performance Web"
    ],
    mainImage: "/images/avatar_games.png"
  },
  {
    title: "PuissanceX",
    src: "connect4.png",
    color: "#706D63",
    description: "Version moderne du jeu Connect 4 avec IA intégrée.",
    context: "Projet développé en Java avec une architecture MVC et une intelligence artificielle.",
    technologies: ["Java 17", "Maven", "Boardifier", "JUnit 5"],
    features: [
      "Modes de jeu variés",
      "IA avec Minimax",
      "Interface console",
      "Tests unitaires"
    ],
    mainImage: "/images/connect4.png"
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {
  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

    // Nettoyage lors du démontage
    return () => {
      if (cursor.current) {
        cursor.current.style.display = 'none';
      }
      if (cursorLabel.current) {
        cursorLabel.current.style.display = 'none';
      }
    };
  }, []);

  const moveItems = (x, y) => {
    if (!active) return;
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }

  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

  return (
    <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
      <div className={styles.body}>
        {
          projects.map((project, index) => {
            return <Project index={index} title={project.title} manageModal={manageModal} key={index}>
              <div className={styles.projectImage}>
                <img src={`/images/${project.src}`} alt={project.title} />
              </div>
            </Project>
          })
        }
      </div>
      <Rounded>
        <a href="/projects" style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Voir les projets</p>
        </a>
      </Rounded>
      <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
          <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
              projects.map((project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                  <Image 
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              })
            }
          </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>Voir</motion.div>
      </>
    </main>
  )
}
