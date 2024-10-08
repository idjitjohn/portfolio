import { basicFormatDate } from "../../services/functions"


const xps = [
  {
    role: 'Front-end Developer',
    start: '2024 04',
    company: 'Clenzics Technologies',
    domain: 'Software',
    mission: 'Management software for hydrological resources in Côte d\'Ivoire',
    techs: 'React JS, Typescript, Visx',
    tasks: [
      'Real-time visualization of the state of all rivers in the country',
      'System for purchasing files containing measurements from hydrological stations',
      'Management and publication of bulletins and news from the ministry'
    ],
  },
  {
    role: 'Full Stack Developer',
    start: '2024 01',
    company: 'AZPlus',
    domain: 'Software',
    mission: 'Mobile Super-App for product and service sales in Madagascar',
    techs: 'React Native, Node JS, Firebase, MVola API, Orange Money Merchant payment',
    tasks: [
      "Setting up the architecture for product management",
      "Implementing payment and user tracking services",
      "Deploying the application on Play Store and App Store"
    ],
  },
  {
    role: 'Full Stack Developer',
    start: '2023 09',
    company: 'Nancia SARL',
    domain: 'Sales',
    mission: `Setting up an offline synchronized cash register and stock management application`,
    techs: 'Vue.JS, Electron.JS, MongoDB, IndexedDB',
    tasks: [
      `Creating a module for offline and synchronized data management`,
      `Implementing a stock management and inter-store transfer system`,
      `Setting up a cash register management system`
    ]
  },
  {
    role: 'Full Stack Developer',
    start: '2023 05',
    company: 'PAJMA',
    domain: 'Public Services',
    mission: 'Software for managing public investment programs',
    techs: 'Next JS, React JS, Typescript, Recoil JS, React Hook Form',
    tasks: [
      'Management of provinces, zones',
      'Web application for project management',
      'Web application for monitoring physical and financial results'
    ],
  },
  {
    role: 'FullStack Developer',
    start: '2023 03',
    company: 'WoodDevelop', 
    domain: 'Sales',
    mission: 'Debugging and implementation of new features',
    techs: 'CSS, PHP, Symfony, Javascript',
    tasks: [
      'Fixing bugs that occur during furniture orders',
      'Implementation of draft order functionality',
    ],
  },
  {
    role: 'Front Developer',
    start: '2023 01',
    company: 'WoodDevelop',
    domain: '3D Modeling',
    mission: 'Creation of a 3D modelling application',
    techs: 'SCSS, React, Typescript, Three.js',
    tasks: [
      'Inserting and Editing 3D Models',
      'Storing and opening saved projects',
      'Sending and interpreting OpenGL data to Three.js'
    ],
  },
  {
    role: 'Front-End Developer',
    start: '2022 09',
    company: 'Razer Inc',
    domain: 'Gaming',
    mission: 'Desktop application for interaction with haptic hardware',
    techs: 'SCSS, React, Typescript, Electron, D3',
    tasks: [
      'Creating a Note Editor using D3',
      'Access to C++ functions from within express.js by using ffi',
      'User interface design and integration'
    ],
  },
  {
    role: 'FullStack Developper',
    start: '2022 07',
    company: 'FiharySoft',
    domain: 'Sales',
    mission: 'Setting up a Frontend CMS, customizable from Google sheets',
    techs: 'Laravel, Material UI, React, Sheets API, MVola API, Stripe, Vanilla Pay, SCSS',
    tasks: [
      'Google Sheets PHP API',
      'Implementation of a Laravel API using Google Sheets as database',
      'Integration of the platform\'s presentation pages'
    ],
  },
  {
    role: 'Développeur Backend',
    start: '2022 05',
    company: 'Tana Team',
    domain: 'FinTech',
    mission: 'Bridge and identification for an NFT sales platform',
    techs: 'NodeJS, SQLite, OAuth2, Google Sign-In',
    tasks: [
      'Preparation of a bridge to the blockchain API',
      'Google Sign-In Integration',
      'Creating an OAuth2 authentication mode using QRCode'
    ]
  },
  {
    role: 'Tech Lead',
    start: '2022 03',
    company: 'Relia Consulting',
    domain: 'Software',
    mission: `Update of the software for the management and collection of municipal taxes`,
    techs: 'HTML, JavaFX, JavaScript, Kotlin, SASS, SQLite',
    tasks: [
      `Adding new features as search and user menu`,
      `Addition of backup and restore module`,
      `Interface redesigning and implementation of a more intuitive UI`,
    ]
  },
  {
    role: 'FullStack Developper',
    start: '2022 02',
    company: 'Fianarantsoa\'s CHU',
    domain: 'Health',
    mission: `Patient room management system`,
    techs: 'Express JS, MySQL, Next.JS, Node.JS, ReactJS, React Native, SASS',
    tasks: [
      `Creating an architecture for an offline-first application`,
      `Data extraction and use of third party APIs`,
      `Lodging and meal voucher management`,
      `Mobile version of verification with less features`
    ]
  },
  {
    role: 'FullStack Developper',
    start: '2022 01',
    company: 'Promabio SARL',
    domain: 'Agribusiness',
    mission: `Setting up a business website`,
    techs: 'CMS, Facebook Ads, Google Ad Words, Laravel, MySQL, SASS',
    tasks: [
      "Setting up a Content Manager System to ensure a dynamic site",
      "Setting up mail templates editor",
      "Conversion Optimization with SEO and Advertising"
    ]
  },  
  {
    role: 'Responsable Innovation',
    start: '2021 10',
    company: 'Fihary Soft',
    domain: 'Agency & Consulting',
    mission: `Maintaining, debugging, and creating some other tools`,
    techs: 'Amazon AWS, Angular, Google AdWords, MongoDB, Node.js, PHP, ReactJS, React Native, SASS, Search Engine Optimization (SEO)',
    tasks: [
      "Implementation of tools to track visit conversions",
      "Optimized service for digitalization solutions",
      "Mobile applications and productivity-enhancing PWAs",
      "Internal File Sharing Application",
      "SEO and website optimization"
    ]
  },
  {
    role: 'FullStack Developper',
    start: '2021 07',
    company: 'Cherie Chéri',
    domain: 'Social',
    mission: `Event and Dating app`,
    techs: 'Amazon AWS, Express JS, Firebase, SendinBlue, ConnectyCube, Next.JS, ReactJS, React Native, SASS, Socket.io, Stripe',
    tasks: [
      'Website, iOS and Android application development',
      'Integrate ConnectyCube to implement a chat system for the platform',
      'Stripe integration for credit and subscribing payments',
      'Integrate Email Notifications using SendInBlue',
      'Implemented versioning and continuous integration management on the AWS cloud',
      'Building a structure for event and appointment management'
    ]
  },
  {
    role: 'Front Developper',
    start: '2021 05',
    company: 'Arkeup',
    domain: 'Banking',
    mission: `Implementation of a tracking interface and manipulation of a robot to browse multiple sites and aggregate their data to validate a client's eligibility`,
    techs: 'React, Material UI, Node.JS, UIPath',
    tasks: [
      'Creating an intuitive interface for searching',
      'Implementation of a Node.JS bridge to ensure communication from the front end to the bot',
    ]
  },
  {
    role: 'Mobile Developper',
    start: '2020 04',
    company: 'Etech Consulting',
    domain: 'HealthTech',
    mission: 'Tracking app for your protection in case of an epidemic',
    techs: 'Android, Kotlin, Node.JS',
    tasks: [
      'Automatically scan and store nearby Bluetooth devices',
      'Create a data-matching server and notify users of risks'
    ]
  },
  {
    role: 'Full Stack Developper',
    start: '2019 07',
    company: 'Etech Consulting',
    domain: 'Software',
    mission: 'Asset management platform development',
    techs: ' Android, Animation 3D, Autodesk Revit Architecture, Google Cloud Platform, iOS, MongoDB, Node.js, ReactJS, React Native, SASS, Socket.io',
    tasks: [
      "Using Autodesk View for virtual tours of building models",
      "Building a Network of Connected Things (IOT)",
      "Creating a mobile application using AR technology for virtual tours and motion tracking"
    ]
  },

  {
    role: 'FullStack Developper',
    start: '2019 02',
    company: 'Waffapo',
    domain: 'Tourism',
    mission: `Creation of a business site for a tourism company`,
    techs: 'Content Design, Facebook Graph API, Graphic Design, Laravel, SASS, IOT',
    tasks: [
      'Customization and creation of bundles with the CMS October',
      'Automatic Mail Distribution System - Embedded Posts',
      'Conception and Design',
      'Google Analytics integration'
    ]
  },
  {
    role: 'FullStack Developper',
    start: '2018 04',
    company: 'Institution réligieuse',
    domain: 'Training / Learning',
    mission: `Deploying a Desktop(Web-based) Application`,
    techs: 'CMake, Qt, C++, React Native, SASS, SQLite',
    tasks: [
      'Implementation of a content copy protection system',
      'Creating a module to read PDF content using the Poppler lib',
      'Automatic backup system and data encryption',
      'Video Player Module - Encrypted Video Stream Player',
      'Notification and event management mixed application'
    ]
  },
  {
    role: 'FullStack Developper',
    start: '2019 06',
    company: 'Funhece',
    domain: 'HealthTech',
    mission: `Create patient and medication management PWA`,
    techs: 'Git, MongoDB, PostgreSQL, ReactJS, SASS, Java, Socket.IO, Spring boot, WebSocket',
    tasks: [
      `Pharmacy inventory tracking`,
      'Managing Consultations and Doctor Availability',
      'Chat and file transmission system',
      'Monitoring and sales tools',
      'Global and distributed database implementation for each center',
      'Real-time reactive platform socket module integration'
    ]
  },
  {
    role: 'FullStack Developper',
    start: '2017 10',
    company: 'Finance and Budget Department',
    domain: 'Finance',
    mission: `Automation of retirement benefit payments`,
    techs: 'Qt, C++, CMake, CSS',
    tasks: [
      `Creation of profiles and categorization of candidates`,
      `Calculation and automation of retirement benefits`,
      `Create parity between physical and digital records`
    ]
  },
  {
    role: 'FullStack Developper',
    start: '2017 03',
    company: 'Tapakala Eden Garden',
    domain: 'Real Estate and Hotel Industry',
    mission: `Optimization of the interface (redesign) Bug fixing`,
    techs: 'Git, MySQL, SASS, PHP, Symfony',
    tasks: [
      `Optimizing SEO and Visitor Conversion`,
      `Redesigning the website`,
      `Implementation of Google Analytics and back office tracking`,
      `Implementation of a Back-Office Platform`
    ]
  },
  {
    role: 'Integrator',
    start: '2021 11',
    company: "Sviesa.lt",
    mission: 'Re-create content and mini-games from Adobe Flash to HTML5',
    domain: 'Education',
    techs: 'HTML5, SCSS, Javascript',
    tasks: [
      'Creating HTML5 eLearning Games',
      'Converting Flash animations to HTML5'
    ]
  },
  {
    role: 'FullStack Developper',
    start: '2021 10',
    company: "Baiskoafu",
    mission: 'Bank of Maldives API (BML-Connect)',
    domain: 'Entertainment',
    techs: 'Wordpress, SCSS, Javascript, PHP',
    tasks: [
      'Payment integration and subscription system'
    ]
  },
  {
    role: 'FullStack Developer',
    start: '2021 06',
    company: "WWF Old School",
    mission: 'In-app purchase integration',
    domain: 'Divertissement',
    techs: 'React Native, Firebase, Javascript, PHP, Laravel',
    tasks: [
      'Subscription system integration via in-app purchase',
      'Firebase / Serverless / Push Notification: Integration',
      'Laravel Backoffice Implementation'
    ]
  }
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