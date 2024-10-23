import { basicFormatDate } from "../../services/functions"


const xps = [
  {
    role: 'Développeur Front',
    start: '2024 04',
    company: 'Clenzics Technologies', 
    domain: 'Software',
    mission: 'Logiciel de gestion des ressources hydrologique de la Côte d\'Ivoire',
    techs: 'React JS, Typescript, Visx',
    image: require('./missions/prici.png'),
    logo: require('./missions/clenzics.png'),
    tasks: [
      'Visualisation en temps réel de l\'état de toutes les rivières du pays',
      'Systeme d\'achat de fichier contenant les mesures des stations hydrologique',
      'Gestion et publication des bulletins et actualités du ministère'
    ],
  },
  {
    role: 'Développeur Full Stack',
    start: '2024 01',
    company: 'AZPlus', 
    domain: 'Software',
    image: require('./missions/azplus.png'),
    logo: require('./missions/azplus-logo.png'),
    mission: 'Super-App mobile pour la vente de produit et service à Madagascar',
    techs: 'React Native, Node JS, Firebase, MVola API, Orange Money Merchant payment',
    tasks: [
      "Mise en place de l'architecture pour la gestion des produits",
      "Mise en place des services de paiement et de suivi des utilisateurs",
      "Déploiement de l'application sur Play Store et App Store"
    ],
  },
  {
    role: 'Développeur FullStack',
    start: '2023 09',
    company: 'Nancia SARL',
    domain: 'Vente',
    image: require('./missions/nancia.png'),
    logo: require('./missions/nancia-logo.svg').default,
    mission: `Mise en place d'une application de gestion de caisse et de stock hors ligne synchronisé`,
    techs: 'Vue.JS, Electron.JS, MongoDB, IndexedDB',
    tasks: [
      `Création d'un module de gestion de données hors ligne et synchronisé`,
      `Mise en place d'un systeme de gestion de stock et transfert en tre magasin`,
      `Mise en place d'un systeme de gestion de caisse`
    ]
  },
  {
    role: 'Développeur Full Stack',
    start: '2023 05',
    name: "PAJMA",
    company: 'Agence Française de développement',
    image: require('./missions/afd-prev.png'),
    logo: require('./missions/afd.png'),
    domain: 'Services Publiques',
    mission: 'Logiciel de gestion des programmes d\'investissement public',
    techs: 'Next JS, React JS, Typescript, Recoil JS, React Hook Form',
    tasks: [
      'Gestion des provinces, régions et districts',
      'Application web de Gestion des projets',
      'Application web de Suivi de la réalisation physique et financière'
    ],
  },
  {
    role: 'Développeur Full Stack',
    start: '2023 03',
    company: 'WoodDevelop',
    image: require('./missions/wd-2.png'),
    logo: require('./missions/wd-logo.png'),
    domain: 'Vente',
    mission: 'Debuggage et mise en place de nouvelles fonctionalités',
    techs: 'CSS, PHP, Symfony, Javascript',
    tasks: [
      'Réparations de bugs survenant durant les commandes de meubles',
      'Mise en place de fonctionalité de brouillon de commande',
    ],
  },
  {
    role: 'Développeur Front',
    start: '2023 01',
    company: 'WoodDevelop',
    domain: 'Modelisation 3D',
    image: require('./missions/wd.png'),
    logo: require('./missions/wd-logo.png'),
    mission: 'Création d\'une application de de modelisatin 3D',
    techs: 'SCSS, React, Typescript, Three.js',
    tasks: [
      'Insertion et manipulation de modèle 3D',
      'Sauvegarde et ouverture de projets',
      'Envoi et interpretation de données depuis OpenGL vers Three.js'
    ],
  },
  {
    role: 'Développeur Front',
    start: '2022 09',
    company: 'Razer Inc',
    domain: 'Gaming',
    image: require('./missions/razer.png'),
    logo: require('./missions/razer-logo.png'),
    mission: 'Application desktop pour interagir avec des matériels haptiques',
    techs: 'SCSS, React, Typescript, Electron, D3',
    tasks: [
      'Création d’éditeur de note avec D3',
      'Accès aux fonctions C++ depuis node avec ffi',
      'Intégration et modifications des interfaces'
    ],
  },
  {
    role: 'Développeur FullStack',
    start: '2022 07',
    company: 'FiharySoft',
    domain: 'Vente',
    image: require('./missions/fsapp.jpg'),
    logo: require('./missions/fs-logo.jpg'),
    mission: 'Mise en place de CMS vitrine de vente personnalisable depuis Google sheets',
    techs: 'Laravel, Material UI, React, Sheets API, MVola API, Stripe, Vanilla Pay, SCSS',
    tasks: [
      'Google Sheets PHP API',
      'Mise en place d’un API Laravel utilisant Google Sheets comme Base de donnée',
      'Intégration des pages de présentation de la plateforme'
    ],
  },
  {
    role: 'Développeur Backend',
    start: '2022 05',
    company: 'Tana Team',
    domain: 'FinTech',
    mission: 'Bridge et d’identification pour une plateforme de vente de NFT',
    techs: 'NodeJS, SQLite, OAuth2, Google Sign-In',
    tasks: [
      'Préparation du bridge vers l’API de blockchain',
      'Integration Google Sign-In',
      'Création d’un mode d’authentification OAuth2 via QRCode'
    ]
  },
  {
    role: 'Tech Lead',
    start: '2022 03',
    company: 'Relia Consulting',
    domain: 'Software',
    image: require('./missions/tafita.png'),
    logo: require('./missions/tafita-logo.png'),
    mission: `Mise à jour du logiciel de gestion et récolte d'impôt communale`,
    techs: 'HTML, JavaFX, JavaScript, Kotlin, SASS, SQLite',
    tasks: [
      `Ajout de nouvelles règles de gestions pour prise en charge des différents types de propriétés`,
      `Ajout de module de sauvegarde et de restauration`,
      `Remise à neuf de l'interface et mise en place d'un UI plus intuitif`,
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2022 02',
    company: 'Centre Hospitalier Universitaire',
    domain: 'HealthTech',
    image: require('./missions/chua-heb.webp'),
    logo: require('./missions/chua-logo.png'),
    mission: `Système de gestion d'hébergement de patients`,
    techs: 'Express JS, MySQL, Next.JS, Node.JS, ReactJS, React Native, SASS',
    tasks: [
      `Mise en place d'un système simple pour avoir une application offline-first`,
      `Extraction de données et utilisation d'API tierces`,
      `Gestion de recettes d'hébergement et de cartes repas`,
      `Version Mobile de checking avec fonctions reduites`
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2022 01',
    company: 'Promabio SARL',
    domain: 'Agroalimentaire',
    image: require('./missions/pmb.png'),
    logo: require('./missions/pmb-logo.png'),
    mission: `Mise en place d'un site de présentation de produit, vente de vanille`,
    techs: 'Facebook Ads, Google Ad Words, Laravel, MySQL, SASS',
    tasks: [
      `Création d'un gestionnaire de contenu pour assurer un site dynamique sans l'intervention du développeur`,
      `Mise en place d'un éditeur de template de mail`,
      `Optimisation de la conversion avec SEO et Ads`
    ]
  },  
  {
    role: 'Responsable Innovation',
    start: '2021 10',
    company: 'Fihary Soft',
    domain: 'Agence et Conseil',
    image: require('./missions/fs.png'),
    logo: require('./missions/fs-logo.jpg'),
    mission: `Maintenance, débogage et création d’outils internes`,
    techs: 'Amazon AWS, Angular, Google AdWords, MongoDB, Node.js, PHP, ReactJS, React Native, SASS, Search Engine Optimization',
    tasks: [
      `Mise en place d'outils de suivi de conversion de visites`,
      `Solutions optimisées de numérisation de services`,
      `Création d'applications mobiles et de PWA orienté productivité`,
      `Application de partage de fichier interne`,
      `SEO et optimisation du site`
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2021 07',
    company: 'Cherie Chéri',
    domain: 'Social',
    mission: `Réseau social pour couple et célibataire`,
    image: require('./missions/cheriecheri.png'),
    logo: require('./missions/cheriecheri-logo.png'),
    techs: 'Amazon AWS, Firebase, Brevo, ConnectyCube, ReactJS, React Native, Socket.io, Stripe',
    tasks: [
      `Création d'une application iOS / Android`,
      `Mise en place d'un système de messagerie`,
      `Intégration de Stripe pour les payements de crédits et d'abonnements`,
      `Intégration des envoi de notifications mails via SendInBlue`,
    ]
  },
  {
    role: 'Développeur Front',
    start: '2021 05',
    company: 'Arkeup',
    domain: 'Banking',
    image: require('./missions/arkeup.png'),
    logo: require('./missions/arkeup-logo.jpg'),
    mission: 'Mise en place d’un interface de suivi et manipulation d’un robot pour parcourir plusieurs sites et regrouper leurs données afin de valider l’éligibilité d’un client pour un prêt',
    techs: 'React, Material UI, Node.JS, UIPath',
    tasks: [
      `Création d’une interface intuitive pour les recherches`,
      `Mise en place d’un bridge Node.JS pour assurer les communication de l’interface vers le bot`,
    ]
  },
  {
    role: 'Développeur Mobile',
    start: '2020 04',
    company: 'Etech Consulting',
    domain: 'HealthTech',
    image: require('./missions/etech.png'),
    logo: require('./missions/etech-logo.webp'),
    mission: 'App de tracking pour moderer une épidémie',
    techs: 'Android, Kotlin, Node.JS',
    tasks: [
      `Scan et stockage automatique d’appareils bluetooth à proximite`,
      `Mise en place d’un serveur pour le regroupement de données et la notification d’un utilisateur en cas de risque`
    ]
  },
  {
    role: 'Développeur Full Stack',
    start: '2019 07',
    company: 'Etech Consulting',
    domain: 'Software',
    image: require('./missions/etech.png'),
    logo: require('./missions/etech-logo.webp'),
    mission: 'Développement d’une plateforme de gestion de patrimoine',
    techs: 'Android, Gcp, iOS, MongoDB, Node.js, ReactJS, React Native, Socket.io',
    tasks: [
      `Visites virtuelles de maquettes de bâtiments en 3D`,
      `Mise en place d'un réseau d'IOT`,
      `Mise en place d'une application AR/VR mobile.`
    ]
  },

  {
    role: 'Développeur FullStack',
    start: '2019 02',
    company: 'Waffapo',
    domain: 'Software',
    mission: `Création d'un site vitrine pour un client`,
    techs: 'Facebook Graph API, Laravel, SASS',

    image: require('./missions/wafapoo.png'),
    logo: require('./missions/waffapo-logo.png'),
    tasks: [
      `Personnalisation et création de bundle avec October CMS`,
      `Mise en place d'un système de distribution de mail automatiques - Embedded Posts`,
      `Conception et design du contenu`,
      `Intégration de google Analytics`
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2018 04',
    company: 'Particulier',
    domain: 'Formation / Apprentissage',
    mission: `Mise en place d'une application Desktop / Web pour un particulier`,
    techs: 'CMake, Qt, C++, React Native, SASS, SQLite',
    tasks: [
      `Mise en place d'un système pour empêcher les copies de contenu`,
      `Création d'un module de lecture de contenu PDF`,
      `Système de backup automatique et encryption de données`,
      `Module de lecture vidéo - lecteur de stream vidéo encrypté`,
      `Application mobile de Notification et de gestion d'event`
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2019 06',
    company: 'Funhece',
    domain: 'HealthTech',
    mission: `Création d'un PWA pour la gestion des patients et des produits pharmaceutiques`,
    techs: 'Git, MongoDB, PostgreSQL, ReactJS, SASS, Java, Socket.IO, Spring boot',
    image: require('./missions/harena.jpg'),
    logo: require('./missions/harena-logo.webp'),
    tasks: [
      `Suivi de Stock de Pharmacie`,
      `Gestion des consultations et disponibilités des medecins`,
      `Système de chat et d'envoi de fichiers`,
      `Outils de supervision et de recette`,
      `Mise en place d'une base de donnée globale et distribuée pour chaque centre`,
      `Integration d'un module socket pour du realtime`
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2017 10',
    company: 'Ministère des Finances et du Budget',
    domain: 'Finance',
    mission: `Automatissation des deblocages des dossiers de pension`,
    techs: 'Qt, C++, CMake, CSS',
    tasks: [
      `Profilage et catégorisation des demandeurs `,
      `Automatisation et calculs des pensions`,
      `Création d'un parallélisme entre les dossiers physique et numériques`
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2017 03',
    company: 'Tapakala Eden Garden',
    domain: 'Immobilier et Hôtellerie',
    image: require('./missions/tapakala.png'),
    logo: require('./missions/tapakala-logo.webp'),
    mission: `Optimisation d'interfaces (refonte) Résolution de bugs`,
    techs: 'Git, MySQL, SASS, PHP, Symfony',
    tasks: [
      `SEO et une optimisation de la conversion des visites`,
      `Refonte du design du site web`,
      `Ajouts de Google Analytics et un suivi en backoffice`,
      `Mise en place d'une application backoffice`
    ]
  },
  {
    role: 'Intégrateur',
    start: '2021 11',
    company: "Sviesa.lt",
    mission: 'Refonte de contenus et jeux Adobe Flash',
    domain: 'Education',
    techs: 'HTML5, SCSS, Javascript',
    tasks: [
      'Création de jeux educative avec HTML5 à partir de version Adobe Flash',
      'Modification d\'animations Flash vers du HTML5'
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2021 10',
    company: "Baiskoafu",
    image: require('./missions/baiskoafu.png'),
    logo: require('./missions/baiskoafu-logo.png'),
    mission: 'Intégration Bank of maldives API (BML-Connect)',
    domain: 'Divertissement',
    techs: 'Wordpress, SCSS, Javascript, PHP, React Native',
    tasks: [
      'Integration de mode de payment et Système d\'abonnement'
    ]
  },
  {
    role: 'Développeur FullStack',
    start: '2021 06',
    company: "WWF Old School",
    image: require('./missions/wwfoldschool.png'),
    logo: require('./missions/wwfoldschool-logo.jpg'),
    mission: 'Integration In-app purchase',
    domain: 'Divertissement',
    techs: 'React Native, Firebase, Javascript, PHP, Laravel',
    tasks: [
      'Integration de système d\'abonnement via In-app purchase',
      'Integration Firebase / Serverless / Push Notification',
      'Mise en place de Backoffice Laravel'
    ]
  },
]
xps.sort(({start: s1}, {start: s2}) => s1 > s2 ? -1 : 1)

const toYear = start => start.split(' ').map((val, i) => {
  if(i == 0) return val
  else return basicFormatDate.monthNames.fr[parseInt(val) - 1]
})

export default xps
export const merged = Object.values(xps.reduce((mgd, xp) => {
  const [year] = toYear(xp.start)
  if(!mgd[year]) mgd[year] = {domains: [], techs: [], year}
  const {domains, techs} = mgd[year]
  xp.techs.split(',').map(one => one.trim()).forEach(one => { if(!techs.includes(one)) techs.push(one) })
  techs.sort()
  if(!domains.includes(xp.domain)) domains.push(xp.domain)
  return mgd
}, {})).reverse()