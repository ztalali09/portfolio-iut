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
                  <h2>About This Project</h2>
                  <p>{project.description}</p>
                  {project.context && (
                    <div className={styles.context}>
                      <h3>Context</h3>
                      <p>{project.context}</p>
                    </div>
                  )}
                  {project.target && (
                    <div className={styles.target}>
                      <h3>Target Audience</h3>
                      <p>{project.target}</p>
                    </div>
                  )}
                </section>

                {/* Technologies */}
                <section className={styles.technologies}>
                  <h2>Technologies Used</h2>
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
                  <h2>Key Features</h2>
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
                    <FaBrain /> My Role & What I Learned
                  </h2>
                  <div className={styles.roleContent}>
                    <div className={styles.roleDescription}>
                      {project.title === "PuissanceX" ? (
                        <>
                          {/* Section 1: Menu Principal */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.textContent}>
                              <h3>Main Menu & Settings</h3>
                              <p>The PuissanceX launch interface displays current settings before starting a game. The main menu lets you configure game mode, board size, and win conditions. This interface demonstrates mastery of state management and user navigation in a console environment.</p>
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
                              <h3>Game Mode Selection</h3>
                              <p>The game mode selection interface lets you choose between Human vs Human, Human vs AI, or AI vs AI. This modularity illustrates successful MVC architecture implementation and user choice management.</p>
                            </div>
                          </div>

                          {/* Section 3: Déroulement de la Partie */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.textContent}>
                              <h3>Gameplay Flow</h3>
                              <p>The core gameplay shows the dynamic board display during a match. Pieces are represented in ASCII, allowing real-time tracking of the game’s progress. This demonstrates mastery of the game loop and console rendering.</p>
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
                              <h3>End of Game & Post-Game Options</h3>
                              <p>The end-of-game interface offers three options: replay, return to main menu, or quit. This final step illustrates complete lifecycle management and a polished user experience.</p>
                              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>Download the project docs to see the full commentary.</p>
                            </div>
                          </div>
                        </>
                      ) : project.title === "Techmobile" ? (
                        <>
                          {/* Section 1: Database Connection */}
                          <div className={styles.alternatingSection}>
                            <div className={styles.textContent}>
                              <h3>MySQL Connection Management</h3>
                              <p>In this file (see Figure 2), I implemented the pymysql module to establish a MySQL connection. I used Flask’s g object to manage a persistent connection within an HTTP request, avoiding multiple simultaneous connections. This approach is based on the singleton principle—a best practice in web development.</p>
                              <p>The get_db() function initializes the connection if it doesn’t exist yet. Connection parameters (host, credentials, database name, encoding) are currently hardcoded, but this structure is easily extendable to environment variables.</p>
                              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>Download the project docs to see the full commentary.</p>
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
                              <h3>Admin Route</h3>
                              <p>The GET route <code>@admin_telephone.route('/admin/telephone/add', methods=['GET'])</code> is used to prepare and display the page for adding a new phone from the admin interface. This route plays a key role in logically separating data retrieval from form rendering.</p>
                              <p>When an administrator accesses this URL, the <code>add_telephone()</code> function is executed. It starts by establishing a database connection via <code>get_db().cursor()</code>. Then, an SQL query is defined to select the ID and label of all phone types in the <code>type_telephone</code> table, sorted alphabetically by label.</p>
                              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>Download the project docs to see the full commentary.</p>
                            </div>
                            <div className={styles.imageContent}>
                              <Image
                                src="/images/Figure_3.png"
                                alt="Admin Route"
                                width={400}
                                height={300}
                                style={{ objectFit: 'contain' }}
                              />
                              <p className={styles.figureCaption}>Figure 3: GET /admin/telephone/add route</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {project.role && (
                            <div className={styles.roleSection}>
                              <h3>My Tasks</h3>
                              <ul>
                                {project.tasks.map((task, index) => (
                                  <li key={index}>{task}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {project.learnings && (
                            <div className={styles.roleSection}>
                              <h3>Key Learnings</h3>
                              <p className={styles.learningNote}>Here are some of the many skills gained from this project:</p>
                              <ul>
                                {project.learnings.map((learning, index) => (
                                  <li key={index}>{learning}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {project.challenges && (
                            <div className={styles.roleSection}>
                              <h3>Challenges & Solutions</h3>
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
                      <FaGithub /> Source Code
                    </button>
                  ) : (
                    <span className={styles.privateProject}>
                      <FaGithub /> Private Project
                    </span>
                  )}
                  {(project.title === "Techmobile" || project.title === "PuissanceX") && (
                    <a 
                      href="/images/Talali_zakaria_traces.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.link}
                    >
                      <FaDownload /> Download Project Docs
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
                <FaChevronLeft /> Previous Project
              </button>
              <span className={styles.projectCounter}>
                {currentIndex + 1} / {totalProjects}
              </span>
              <button 
                className={styles.navButton} 
                onClick={onNext}
                disabled={currentIndex === totalProjects - 1}
              >
                Next Project <FaChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;