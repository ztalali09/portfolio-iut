'use client';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaBrain, FaCode, FaLightbulb, FaDownload } from 'react-icons/fa';
import { useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, project, onNext, onPrev, currentIndex, totalProjects }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    handleScroll();

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose();
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.modalContent}>
            {/* Header */}
            <div className={styles.header}>
              <h1>{project.title}</h1>
              <button className={styles.closeButton} onClick={handleClose}>
                <FaTimes />
              </button>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
              {/* Image Section */}
              <div className={styles.imageSection}>
                <div className={styles.mainImage}>
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    width={1200}
                    height={675}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {project.title === "Avatar Gaming" && (
                  <p className={styles.figureCaption}>Figure 1 : Page d&apos;accueil présentant la collection de jeux disponibles</p>
                )}
              </div>

              {/* Project Info */}
              <div className={styles.projectInfo}>
                {/* Description */}
                <section className={styles.description}>
                  <h2>À propos du projet</h2>
                  <p>{project.description}</p>
                  {project.context && (
                    <div className={styles.context}>
                      <h3>Contexte</h3>
                      <p>{project.context}</p>
                    </div>
                  )}
                  {project.target && (
                    <div className={styles.target}>
                      <h3>Public cible</h3>
                      <p>{project.target}</p>
                    </div>
                  )}
                </section>

                {/* Technologies */}
                <section className={styles.technologies}>
                  <h2>Technologies utilisées</h2>
                  <div className={styles.techList}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Features */}
                <section className={styles.features}>
                  <h2>Fonctionnalités principales</h2>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>

                {/* Second Image if available */}
                {project.secondImage && (
                  <div className={styles.imageSection}>
                    <div className={styles.mainImage}>
                      <Image
                        src={project.secondImage}
                        alt={`${project.title} - Détails`}
                        width={1200}
                        height={675}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    {project.title === "Avatar Gaming" && (
                      <p className={styles.figureCaption}>Figure 2 : Interface de jeu Slope en action</p>
                    )}
                  </div>
                )}

                {/* Code Image for Role Section */}
                {project.title === "Avatar Gaming" && (
                  <div className={styles.imageSection}>
                    <div className={styles.mainImage}>
                      <Image
                        src="/images/avatar-game-tr.png"
                        alt="Code du projet Avatar Gaming"
                        width={1200}
                        height={675}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <p className={styles.figureCaption}>Figure 3 : Extrait du code responsable du canvas de jeu</p>
                  </div>
                )}

                {/* Role & Learnings */}
                <section className={styles.role}>
                  <h2>
                    <FaBrain /> Mon rôle & ce que j'ai appris
                  </h2>
                  <div className={styles.roleContent}>
                    <div className={styles.roleDescription}>
                      {project.title === "PuissanceX" ? (
                        <>
                          {/* Section 1: Menu Principal */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.textContent}>
                              <h3>Menu Principal et Paramètres</h3>
                              <p>L'interface de lancement du jeu PuissanceX affiche les paramètres courants avant le démarrage d'une partie. Le menu principal permet de configurer le mode de jeu, la taille du plateau, et la condition de victoire. Cette interface démontre une maîtrise de la gestion d'état et de la navigation utilisateur en environnement console.</p>
                            </div>
                            <div className={styles.imageContent}>
                              <Image
                                src="/images/menu1.png"
                                alt="Menu Principal PuissanceX"
                                width={400}
                                height={300}
                                style={{ objectFit: 'contain' }}
                              />
                              <p className={styles.figureCaption}>Figure 1 : Interface du menu principal</p>
                            </div>
                          </div>

                          {/* Section 2: Sélection du Mode */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.imageContent}>
                              <Image
                                src="/images/choisisser-mode-jeu.png"
                                alt="Sélection du Mode de Jeu"
                                width={400}
                                height={300}
                                style={{ objectFit: 'contain' }}
                              />
                              <p className={styles.figureCaption}>Figure 2 : Menu de sélection du mode de jeu</p>
                            </div>
                            <div className={styles.textContent}>
                              <h3>Sélection du Mode de Jeu</h3>
                              <p>L&apos;interface de sélection du mode de jeu permet de choisir entre différents modes : Humain vs Humain, Humain vs IA, ou IA vs IA. Cette modularité illustre l&apos;implémentation réussie de l&apos;architecture MVC et la gestion des choix utilisateurs.</p>
                            </div>
                          </div>

                          {/* Section 3: Déroulement de la Partie */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.textContent}>
                              <h3>Déroulement de la Partie</h3>
                              <p>Le cœur du gameplay montre l&apos;affichage dynamique du plateau pendant une partie. Les pions sont représentés en ASCII, permettant de suivre l&apos;évolution du jeu en temps réel. Cette partie démontre la maîtrise de la boucle de jeu et de l&apos;affichage console.</p>
                            </div>
                            <div className={styles.imageContent}>
                              <Image
                                src="/images/lapartie.png"
                                alt="Plateau de Jeu"
                                width={400}
                                height={300}
                                style={{ objectFit: 'contain' }}
                              />
                              <p className={styles.figureCaption}>Figure 3 : Plateau de jeu en action</p>
                            </div>
                          </div>

                          {/* Section 4: Fin de Partie */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.imageContent}>
                              <Image
                                src="/images/jeu-termine.png"
                                alt="Fin de Partie"
                                width={400}
                                height={300}
                                style={{ objectFit: 'contain' }}
                              />
                              <p className={styles.figureCaption}>Figure 4 : Interface de fin de partie</p>
                            </div>
                            <div className={styles.textContent}>
                              <h3>Fin de Partie et Choix Post-Jeu</h3>
                              <p>L&apos;interface de fin de partie propose trois options : rejouer, retourner au menu principal, ou quitter. Cette étape finale illustre la gestion complète du cycle de vie d&apos;une partie et l&apos;expérience utilisateur soignée.</p>
                              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>Veuillez télécharger les traces pour voir le commentaire en entier.</p>
                            </div>
                          </div>
                        </>
                      ) : project.title === "Techmobile" ? (
                        <>
                          {/* Section 1: Database Connection */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.textContent}>
                              <h3>Gestion de la Connexion MySQL</h3>
                              <p>Dans ce fichier qu&apos;on voit dans la figure 2, j&apos;ai mis en œuvre le module pymysql pour établir la connexion à MySQL. J&apos;ai utilisé l&apos;objet g fourni par Flask pour gérer une connexion persistante au sein d&apos;une requête HTTP, évitant ainsi d&apos;ouvrir plusieurs connexions simultanées. Cette approche repose sur le principe de singleton, une bonne pratique dans le développement web.</p>
                              <p>La fonction get_db() initialise la connexion si elle n&apos;existe pas encore. Les paramètres de connexion (nom d&apos;hôte, identifiants, nom de la base, encodage) sont définis en dur pour l&apos;instant, mais cette structure est facilement extensible vers des variables d&apos;environnement.</p>
                              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>Veuillez télécharger les traces pour voir le commentaire en entier.</p>
                            </div>
                            <div className={styles.imageContent}>
                              <Image
                                src="/images/Figure_2.png"
                                alt="Connexion Database"
                                width={400}
                                height={300}
                                style={{ objectFit: 'contain' }}
                              />
                              <p className={styles.figureCaption}>Figure 2 : Fichier connexion_db.py - Gestion de la connexion MySQL</p>
                            </div>
                          </div>

                          {/* Section 2: Admin Route */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.textContent}>
                              <h3>Route d'Administration</h3>
                              <p>La route GET @admin_telephone.route(&apos;/admin/telephone/add&apos;, methods=[&apos;GET&apos;]) est utilisée pour préparer et afficher la page d&apos;ajout d&apos;un nouveau téléphone depuis l&apos;interface d&apos;administration. Cette route joue un rôle clé dans la séparation logique entre la récupération des données et l&apos;affichage du formulaire.</p>
                              <p>Lorsqu&apos;un administrateur accède à cette URL, la fonction add_telephone() est exécutée. Elle commence par établir une connexion à la base de données via get_db().cursor(). Ensuite, une requête SQL est définie pour sélectionner l&apos;identifiant et le libellé de tous les types de téléphones présents dans la table type_telephone, triés par ordre alphabétique de libellé.</p>
                              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>Veuillez télécharger les traces pour voir le commentaire en entier.</p>
                            </div>
                            <div className={styles.imageContent}>
                              <Image
                                src="/images/Figure_3.png"
                                alt="Admin Route"
                                width={400}
                                height={300}
                                style={{ objectFit: 'contain' }}
                              />
                              <p className={styles.figureCaption}>Figure 3 : Route GET /admin/telephone/add</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {project.role && (
                            <div className={styles.roleSection}>
                              <h3>Mes tâches</h3>
                              <ul>
                                {project.tasks.map((task, index) => (
                                  <li key={index}>{task}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {project.learnings && (
                            <div className={styles.roleSection}>
                              <h3>Exemples d'apprentissages</h3>
                              <p className={styles.learningNote}>Voici quelques exemples des nombreuses compétences acquises dans ce projet :</p>
                              <ul>
                                {project.learnings.map((learning, index) => (
                                  <li key={index}>{learning}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {project.challenges && (
                            <div className={styles.roleSection}>
                              <h3>Défis & Solutions</h3>
                              <ul>
                                {project.challenges.map((challenge, index) => (
                                  <li key={index}>{challenge}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </section>

                {/* External Links */}
                <div className={styles.links}>
                  {project.github ? (
                    <button onClick={handleGithubClick} className={styles.link}>
                      <FaGithub /> Code Source
                    </button>
                  ) : (
                    <span className={styles.privateProject}>
                      <FaGithub /> Projet privé
                    </span>
                  )}
                  {(project.title === "Techmobile" || project.title === "PuissanceX") && (
                    <a 
                      href="/images/Talali_zakaria_traces.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.link}
                    >
                      <FaDownload /> Télécharger les traces
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={styles.navigation}>
              <button 
                className={styles.navButton} 
                onClick={onPrev}
                disabled={currentIndex === 0}
              >
                <FaChevronLeft /> Projet précédent
              </button>
              <span className={styles.projectCounter}>
                {currentIndex + 1} / {totalProjects}
              </span>
              <button 
                className={styles.navButton} 
                onClick={onNext}
                disabled={currentIndex === totalProjects - 1}
              >
                Projet suivant <FaChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;