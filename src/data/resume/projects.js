/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const projects = [
    {
      name: 'STORE LOCATOR',
      position: 'The Body Shop, Indonesia',
      type: 'professional',
      // url: 'https://smileidentity.com',
      // startDate: 'July 2021',
      // summary: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups`,
      highlights: [
        'Developed a module using React, Redux & GoogleMaps API that could locate retail stores using geo-location of user which reduced average search time by 25%,resulting in quicker access to store locations for customers.',
        'Incorporated this module into 5 projects which decreased development cost by approximately $20,000.'
      ],
    },
    {
      name: 'PAYMENT MODULE INTEGRATION',
      position: 'WhiteStuff, United Kingdom',
      type: 'professional',
      // url: 'https://smileidentity.com',
      // startDate: 'July 2021',
      // summary: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups`,
      highlights: [
        'Integrated Adyen payment module and incorporated multiple safety checks, including PCI compliance and fraud detection,resulting in a 99.9% transaction success rate.',
        'Achieved a 15% reduction in page load time by implementing code splitting techniques.'
      ],
    },
    {
      name: 'SPA MICROSITE',
      position: 'Oreo, India',
      type: 'professional',
      // url: 'https://smileidentity.com',
      // startDate: 'July 2021',
      // summary: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups`,
      highlights: [
        'Piloted a microsite using Vue, Vue Router and Tailwind CSS, supported by an Express backend resulting in over 50,000 engagements within the first three days ofrelease.',
        'Integrated AI image generation and OTP-based authentication by seamlessly leveraging AWS Lambda functions.'
      ],
    },
    {
      name: 'CONTEXT SEARCH CHROME EXTENSION',
      position: 'Personal',
      type: 'personally',
      // url: 'https://smileidentity.com',
      // startDate: 'July 2021',
      // summary: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups`,
      highlights: [
        'Developed a browser extension allowing multi-word searches on webpages.',
        'Optimized search results by employing advanced tree traversal techniques to calculate the proximity and association,resulting in a 30% increase in relevant search results.'
      ],
    },
    {
      name: 'GAME OF MAFIA',
      position: 'Personal',
      type: 'personally',
      // url: 'https://smileidentity.com',
      // startDate: 'July 2021',
      // summary: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups`,
      highlights: [
        'Implemented a multiplayer connectivity application using React, Express and websockets that enabled real-time communication between players.',
        'Optimized gameplay by centralizing orchestration logic on the backend, streamlining role distribution, player action management, and game event resolution.'
      ],
    },
    // {
    //   name: 'Skeptical Investments',
    //   position: 'Co-founder',
    //   url: 'http://skepticalinvestments.biz',
    //   startDate: '2017-04-01',
    //   summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    //   YC companies.`,
    //   highlights: [
    //     'Created the InstaSafe. Fast, automated investment docs for YC companies.',
    //     'Advise several startups in the fund.',
    //   ],
    // },
    // {
    //   name: 'Arthena',
    //   position: 'Co-founder & C.T.O.',
    //   url: 'https://arthena.com',
    //   startDate: '2014-01-01',
    //   endDate: '2022-01-01',
    //   summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
    //   <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
    //   We develop quantitative strategies to predict the value of fine art and build investment products.
    //   I ran a 20-person product and engineering org for 8 years. We were acquired by
    //   <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
    //   highlights: [
    //     'Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.',
    //     'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.',
    //     "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.",
    //     "Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.",
    //     'Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
    //   ],
    // },
    // {
    //   name: 'Enveritas',
    //   position: 'ML Engineering Contractor',
    //   url: 'http://enveritas.org',
    //   startDate: '2016-09-01',
    //   endDate: '2018-01-01',
    //   summary: `Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.
    //   I joined on day one and helped build a variety of tools to collect and analyze data. I also advised
    //   on technical strategy, helped hire engineers, and advised on their YC application.`,
    //   highlights: [
    //     'Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.',
    //     'Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.',
    //     'Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM\'s, and other techniques.',
    //   ],
    // },
    // {
    //   name: 'Zenysis',
    //   position: 'Software Engineering Contractor',
    //   url: 'https://zenysis.com',
    //   startDate: '2016-02-01',
    //   endDate: '2016-03-01',
    //   summary: `Zenysis develops data analysis and visualization tools for government agencies and international organizations.
    //   Their solutions help improve decision-making by integrating and analyzing large-scale datasets from various sources.
    //   I was the second contributor to the codebase. We built data visualization tools and tackled complex data ingestion
    //   challenges for the Ethiopian Ministry of Health.`,
    //   highlights: [
    //     'Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.',
    //     'Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations.',
    //   ],
    // },
    // {
    //   name: 'Matroid',
    //   position: 'Co-founder',
    //   url: 'https://matroid.com',
    //   startDate: '2015-07-01',
    //   endDate: '2016-01-01',
    //   summary: `Matroid is a computer vision platform for creating and deploying detectors. Detectors help customers identify objects,
    //   events, or patterns in images and videos without requiring machine learning or coding expertise. I played a crucial role in
    //   defining the company's vision. I was responsible for architecting and building the initial product. I left shortly after the
    //   Series A to focus on Arthena.`,
    //   highlights: [
    //     'Developed end to end machine learning pipeline to train visual classifiers from keywords using Caffe, Node.JS, Redis, MongoDB, and other technologies.',
    //   ],
    // },
    // {
    //   name: 'Planet',
    //   position: 'Missions Intern',
    //   url: 'https://planet.com',
    //   startDate: '2014-06-01',
    //   endDate: '2015-01-01',
    //   highlights: [
    //     'Built models to improve image quality, signal to noise ratio, and dynamic range.',
    //     'Performed statistical analysis of image quality in Matlab and Python.  Developed flight software in C++.',
    //     'Organized first hackathon, prototyped hardware, and designed and built photography equipment for rocket launches.',
    //   ],
    // },
    // {
    //   name: 'Planetary Resources',
    //   position: 'Avionics Intern',
    //   startDate: '2014-01-01',
    //   endDate: '2014-05-01',
    //   url: 'http://planetaryresources.com',
    //   highlights: [
    //     'Developed simulations in Matlab for Attitude Determination and Control Subsystem.',
    //     'Developed processes for in lab testing and characterization of various subsystems.',
    //     'Assembled flight hardware in cleanroom.',
    //   ],
    // },
    // {
    //   name: 'Facebook',
    //   position: 'Software Engineer Intern',
    //   url: 'https://facebook.com',
    //   startDate: '2013-06-01',
    //   endDate: '2013-09-01',
    //   highlights: [
    //     'Developed software in python for automated testing of servers.',
    //     'Performed statistical analysis with R, HIVE to assist in triage of malfunctioning servers.',
    //     'Worked with vendors and ODM\'s during triage to assist in risk mitigation.',
    //   ],
    // },
    // {
    //   name: 'SEDS-USA',
    //   position: 'At Large Board Member',
    //   url: 'http://seds.org',
    //   startDate: '2013-10-01',
    //   endDate: '2014-10-01',
    //   highlights: [
    //     'Elected to Board of Directors of the USA\'s largest student space advocacy group based on 5+ years of work with SEDS.',
    //     'Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SEDS nationally and internationally, and photographing conferences.',
    //   ],
    // },
    // {
    //   name: 'UB Nanosatellite Program',
    //   position: 'Co-founder, Program Manager',
    //   url: 'https://ubnl.space/',
    //   startDate: '2010-10-01',
    //   endDate: '2012-06-01',
    //   highlights: [
    //     'Coauthored grant to build a multi-spectral imaging satellite as part of the AFRL University Nanosatellite Program.',
    //     'Lead a team of 60 students through satellite development life cycle. Served as a technical expert, acquired intimate working knowledge of satellite subsystems.  Solicited funding through NASA, AFOSR, and several corporate sponsors.',
    //   ],
    // },
  ];
  
  export default projects;
  