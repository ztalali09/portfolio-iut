export const projects = [
  {
    id: 1,
    title: "Techmobile",
    thumbnailImage: "/images/telephones.jpg",
    mainImage: "/images/C1-tel.png",
    color: "#000000",
    description: "Application web de gestion et de vente de téléphones offrant une expérience utilisateur fluide et intuitive. Le projet permet aux clients de consulter le catalogue, gérer leur panier, passer des commandes et laisser des commentaires, tandis que les administrateurs peuvent gérer les produits, les commandes et visualiser les données de vente.",
    context: "Projet réalisé dans le cadre de mon parcours académique (SAE-345), visant à mettre en pratique mes compétences en développement web et en gestion de bases de données.",
    target: "Clients souhaitant acheter des téléphones et administrateurs gérant le catalogue et les commandes.",
    technologies: [
      "Flask (Python)",
      "Jinja2",
      "PostgreSQL",
      "SQL",
      "HTML/CSS",
      "JavaScript",
      "Shell Script"
    ],
    features: [
      "Catalogue de téléphones interactif",
      "Gestion du panier et liste d'envies",
      "Système de commandes et suivi",
      "Système de commentaires",
      "Interface d'administration complète",
      "Visualisation des données de vente",
      "Gestion des stocks",
      "Modération des commentaires"
    ],
    tasks: [
      "Conception et implémentation de la base de données",
      "Développement des contrôleurs Flask",
      "Création des templates Jinja2",
      "Mise en place du système d'authentification",
      "Développement des fonctionnalités admin",
      "Intégration des visualisations de données"
    ],
    learnings: [
      "Architecture MVC avec Flask",
      "Gestion de bases de données relationnelles",
      "Développement d'interfaces utilisateur",
      "Sécurité des applications web",
      "Visualisation de données"
    ],
    challenges: [
      "Optimisation des performances de la base de données",
      "Gestion des sessions utilisateurs",
      "Sécurisation des transactions",
      "Mise en place d'une interface admin intuitive"
    ],
    github: "https://github.com/maevatomvil/SAE-345",
    demo: "https://gestion-telephones-demo.com"
  },
  {
    id: 2,
    title: "Office Studio",
    mainImage: "/images/officestudio.png",
    color: "#8C8C8C",
    description: "Plateforme de gestion d'espaces de coworking permettant aux utilisateurs de réserver des espaces de travail, gérer leurs abonnements et interagir avec la communauté.",
    context: "Projet personnel développé pour répondre aux besoins croissants des espaces de coworking et des travailleurs indépendants.",
    target: "Propriétaires d'espaces de coworking, travailleurs indépendants, startups et petites entreprises.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Stripe",
      "Redux",
      "AWS"
    ],
    features: [
      "Système de réservation en temps réel",
      "Paiements sécurisés avec Stripe",
      "Chat en direct entre membres",
      "Gestion des abonnements",
      "Interface admin complète",
      "Notifications en temps réel",
      "Statistiques et rapports",
      "API RESTful"
    ],
    tasks: [
      "Développement du backend avec Node.js",
      "Création de l'API RESTful",
      "Intégration des paiements avec Stripe",
      "Mise en place du système de chat",
      "Développement du dashboard admin",
      "Déploiement sur AWS"
    ],
    learnings: [
      "Architecture microservices",
      "Sécurité des applications web",
      "Gestion des paiements en ligne",
      "Communication en temps réel",
      "Gestion des bases de données NoSQL"
    ],
    challenges: [
      "Gestion des conflits de réservation",
      "Mise en place d'un système de paiement sécurisé",
      "Optimisation des performances en temps réel",
      "Scalabilité de l'application"
    ],
    github: null,
    demo: "https://office-studio-demo.com"
  },
  {
    id: 3,
    title: "Avatar Gaming",
    mainImage: "/images/avatar_games.png",
    secondImage: "/images/avatar-game2.png",
    color: "#EFE8D3",
    description: "Agrégateur de Mini-Jeux HTML5 Optimisé SEO avec Intégration AdSense. Une plateforme web personnelle qui offre une collection de jeux HTML5 avec une expérience utilisateur optimisée.",
    context: "Projet développé pour créer une plateforme de jeux HTML5 avec une attention particulière à l'optimisation SEO et la monétisation via AdSense.",
    target: "Joueurs occasionnels, passionnés de jeux HTML5, et utilisateurs cherchant une expérience de jeu fluide et accessible.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SEO",
      "Google AdSense",
      "Hébergement Web",
      "DNS",
      "Performance Web"
    ],
    features: [
      "Interface responsive et interactive",
      "Optimisation SEO avancée",
      "Intégration AdSense",
      "Gestion des performances",
      "Navigation intuitive",
      "Multi-plateforme",
      "Sécurité web",
      "Analyse de trafic"
    ],
    tasks: [
      "Création de l'interface responsive",
      "Intégration des jeux HTML5",
      "Optimisation SEO",
      "Configuration AdSense",
      "Mise en ligne du site",
      "Analyse des performances"
    ],
    learnings: [
      "Techniques avancées de SEO",
      "Gestion de la monétisation",
      "Optimisation des performances",
      "Sécurité web",
      "Analyse de trafic"
    ],
    challenges: [
      "Optimisation du référencement",
      "Gestion des publicités",
      "Performance des jeux",
      "Sécurité des données"
    ],
    github: null,
    demo: null
  },
  {
    id: 4,
    title: "PuissanceX",
    mainImage: "/images/connect4.png",
    color: "#706D63",
    description: "PuissanceX est une version moderne et évolutive du jeu classique Connect 4, développée en Java avec une architecture MVC propre et propulsée par le framework Boardifier. Le jeu est jouable en console et est conçu pour accueillir une future interface graphique JavaFX.",
    context: "Projet développé pour créer une version améliorée du jeu Connect 4, avec une attention particulière portée à l'architecture logicielle et l'intégration d'intelligence artificielle.",
    target: "Passionnés de jeux de stratégie, développeurs intéressés par l'IA, et joueurs cherchant une expérience de jeu moderne.",
    technologies: [
      "Java 17",
      "Maven",
      "Boardifier (MVC framework)",
      "JavaFX (à venir)",
      "Deeplearning4j (IA avancée, à venir)",
      "JUnit 5"
    ],
    features: [
      "Modes de jeu variés (Humain vs Humain, Humain vs IA, IA vs IA)",
      "Paramétrage avancé (taille du plateau, condition de victoire, niveau de difficulté)",
      "Intelligence artificielle intégrée (Minimax et Deep Learning)",
      "Architecture modulaire MVC",
      "Tests unitaires avec JUnit 5",
      "Interface console intuitive",
      "Système de menu dynamique",
      "Gestion des états de jeu"
    ],
    tasks: [
      "Implémentation de l'architecture MVC",
      "Développement de l'algorithme Minimax",
      "Création de l'interface console",
      "Mise en place des tests unitaires",
      "Intégration du framework Boardifier",
      "Développement du système de menu"
    ],
    learnings: [
      "Architecture MVC avec Java",
      "Implémentation d'algorithmes d'IA",
      "Développement d'interfaces console",
      "Tests unitaires avec JUnit",
      "Gestion de projet avec Maven"
    ],
    challenges: [
      "Optimisation de l'algorithme Minimax",
      "Gestion des états de jeu complexes",
      "Création d'une interface utilisateur intuitive",
      "Intégration future de JavaFX"
    ],
    github: "https://github.com/gh-Constant/SAE_PuissanceX",
    demo: null
  }
]; 