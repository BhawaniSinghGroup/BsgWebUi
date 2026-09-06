export interface ServiceDetail {
  slug: string;
  title: string;
  value: string;
  description: string;
  metaDescription: string;
  problems: string[];
  whatWeDeliver: string[];
  capabilities: string[];
  engagementApproach: string[];
  technologies: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'software-development',
    title: 'Custom Software Development',
    value: 'Replace workarounds with software that fits the business.',
    description: 'Purpose-built systems shaped around how your organization actually works.',
    metaDescription: 'Custom software development services. We build purpose-built systems designed around your business needs, not off-the-shelf constraints.',
    problems: [
      'Existing software does not match your unique business processes.',
      'Manual workarounds are slowing your team down.',
      'You need capabilities that generic platforms cannot provide.',
      'Custom integrations with your existing systems are becoming critical.'
    ],
    whatWeDeliver: [
      'A software system designed around your actual workflows and business logic.',
      'Clear architecture that your team can maintain and evolve.',
      'Practical implementation that improves efficiency without organizational disruption.',
      'Documentation and knowledge transfer so your team owns the system.'
    ],
    capabilities: [
      'Full-stack application development',
      'Domain-driven design',
      'Database design and optimization',
      'System integration',
      'Modernization of legacy systems',
      'API development',
      'Business logic implementation'
    ],
    engagementApproach: [
      'Understand your business processes and constraints.',
      'Design a clear technical architecture aligned with your goals.',
      'Build iteratively with regular feedback and validation.',
      'Deliver with quality, documentation and your team ready to own it.',
      'Support initial operation and optimization.'
    ],
    technologies: ['.NET', 'ASP.NET Core', 'C#', 'PostgreSQL', 'SQL Server', 'REST APIs', 'Modular monoliths']
  },
  {
    slug: 'web-development',
    title: 'Web Application Development',
    value: 'Make complex workflows easier to use and easier to scale.',
    description: 'Secure, clear and resilient experiences for customers, teams and operations.',
    metaDescription: 'Web application development. We build secure, responsive web applications that simplify complex workflows for your users and teams.',
    problems: [
      'Your web applications are slow or difficult to use.',
      'Your systems cannot handle peak traffic reliably.',
      'Building new features takes longer than it should.',
      'Your web platform is not competitive with modern alternatives.'
    ],
    whatWeDeliver: [
      'A fast, responsive web application that your users actually enjoy.',
      'Clean architecture that makes adding features straightforward.',
      'Security and reliability built in from the start.',
      'Performance optimized for modern browsers and networks.',
      'A platform that scales with your business.'
    ],
    capabilities: [
      'Modern responsive web UI development',
      'Progressive web applications',
      'Real-time features and live updates',
      'SEO optimization',
      'Performance optimization',
      'Accessibility compliance',
      'Backend API development'
    ],
    engagementApproach: [
      'Define user needs and key workflows.',
      'Design an intuitive, modern interface.',
      'Build incrementally with user testing and feedback.',
      'Optimize for performance and reliability.',
      'Deploy with monitoring and continuous improvement.'
    ],
    technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'REST APIs', 'Azure', 'Docker']
  },
  {
    slug: 'mobile-development',
    title: 'Mobile & Cross-Platform Development',
    value: 'Reach users wherever work happens without multiplying complexity.',
    description: 'Mobile capabilities that extend your product and keep people moving.',
    metaDescription: 'Mobile app development services. Cross-platform mobile solutions that reach your users on iOS and Android without multiplying development complexity.',
    problems: [
      'You need mobile capability but cannot afford native development on multiple platforms.',
      'Your mobile app needs to integrate seamlessly with your web and desktop systems.',
      'Your team is mobile-first but your technology is not.',
      'Maintaining separate iOS and Android codebases is unsustainable.'
    ],
    whatWeDeliver: [
      'A native-quality mobile application running on iOS and Android.',
      'Shared code that reduces maintenance burden and improves consistency.',
      'Integration with your existing backend services and data.',
      'Performance and user experience that matches native apps.',
      'An application you can update and improve independently.'
    ],
    capabilities: [
      'Cross-platform mobile development',
      '.NET MAUI applications',
      'Native platform integration',
      'Offline-first capabilities',
      'Push notifications and background services',
      'Mobile data synchronization',
      'App store deployment'
    ],
    engagementApproach: [
      'Understand mobile workflow requirements.',
      'Design for mobile-first user experience.',
      'Build with code sharing to reduce complexity.',
      'Test across devices and networks.',
      'Launch and iterate based on user feedback.'
    ],
    technologies: ['.NET MAUI', 'C#', 'iOS', 'Android', 'REST APIs', 'Azure']
  },
  {
    slug: 'api-integration',
    title: 'API Development & System Integration',
    value: 'Remove silos and create a more dependable flow of information.',
    description: 'Connect the systems, data and services your business depends on.',
    metaDescription: 'API development and system integration. We connect your systems, data and services to create a more coherent and efficient technology landscape.',
    problems: [
      'Your business systems are disconnected — data flows between spreadsheets.',
      'Manual data entry and reconciliation is error-prone and costly.',
      'Information does not flow where it needs to when it needs to.',
      'Your systems cannot talk to third-party services or partners.'
    ],
    whatWeDeliver: [
      'Well-designed APIs that let your systems communicate reliably.',
      'Automated data flow that removes manual entry and reconciliation.',
      'Connection to third-party services that your business depends on.',
      'Visibility into how data moves through your organization.',
      'The ability to add new integrations as your needs change.'
    ],
    capabilities: [
      'REST API design and development',
      'Integration with third-party services',
      'Data transformation and mapping',
      'Event-driven architecture',
      'Message queuing and async workflows',
      'API security and authentication',
      'Integration testing and monitoring'
    ],
    engagementApproach: [
      'Map your systems and data flows.',
      'Design integration architecture.',
      'Build APIs and connections with proper error handling.',
      'Test thoroughly for data integrity and reliability.',
      'Monitor and optimize ongoing integration performance.'
    ],
    technologies: ['REST APIs', 'ASP.NET Core', '.NET', 'Event-driven systems', 'Azure', 'Docker']
  },
  {
    slug: 'software-modernization',
    title: 'Software Modernization',
    value: 'Improve what matters without putting the business on pause.',
    description: 'A pragmatic path from legacy constraints to a stronger technical foundation.',
    metaDescription: 'Software modernization and legacy system upgrades. We help you improve your technical foundation without disrupting ongoing business operations.',
    problems: [
      'Legacy systems are becoming harder and more expensive to maintain.',
      'You cannot add new features without significant risk.',
      'Your team is struggling to hire and retain developers for old technology.',
      'The cost of fixing bugs and making changes is accelerating.'
    ],
    whatWeDeliver: [
      'A clearer technical strategy for moving away from legacy constraints.',
      'Incremental improvements that reduce risk and cost.',
      'Modern architecture that makes future development easier.',
      'Preserved business logic and data—no starting from scratch.',
      'The ability to continue operating while improving your foundation.'
    ],
    capabilities: [
      'Legacy system assessment',
      'Incremental modernization strategy',
      'Code extraction and refactoring',
      'Platform migration',
      'Database upgrades and optimization',
      'API-first architecture',
      'Parallel running and cutover strategy'
    ],
    engagementApproach: [
      'Assess the current system and identify the highest-value improvements.',
      'Plan a pragmatic path that reduces risk and cost.',
      'Execute incrementally, validating at each step.',
      'Maintain business continuity throughout the process.',
      'Hand over a stronger, more maintainable system.'
    ],
    technologies: ['.NET', 'ASP.NET Core', 'Modern databases', 'Cloud infrastructure', 'API architecture', 'Docker']
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    value: 'Ship with confidence, visibility and room to grow.',
    description: 'Infrastructure and delivery practices that make change safer and faster.',
    metaDescription: 'Cloud infrastructure and DevOps services. We help you build reliable, scalable cloud infrastructure and implement deployment practices that make change safe.',
    problems: [
      'Your deployments are risky or take too long.',
      'You have limited visibility into how your applications perform.',
      'Scaling your infrastructure is manual and error-prone.',
      'Your team spends time on infrastructure instead of features.'
    ],
    whatWeDeliver: [
      'Automated infrastructure as code that is version-controlled and reproducible.',
      'CI/CD pipelines that make deployments safe, fast and reliable.',
      'Comprehensive monitoring and logging that show you what is happening.',
      'Scalable infrastructure that grows with your traffic.',
      'Your team focused on features, not infrastructure firefighting.'
    ],
    capabilities: [
      'Cloud architecture and design',
      'Infrastructure as code',
      'CI/CD pipeline development',
      'Container orchestration',
      'Monitoring and observability',
      'Security and compliance',
      'Cost optimization'
    ],
    engagementApproach: [
      'Assess your current infrastructure and deployment process.',
      'Design cloud architecture appropriate for your scale and growth.',
      'Build and implement CI/CD pipelines.',
      'Set up monitoring, logging and alerting.',
      'Optimize for cost, reliability and performance over time.'
    ],
    technologies: ['Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code', 'Monitoring tools', 'GitHub']
  },
  {
    slug: 'automation',
    title: 'Automation',
    value: 'Give teams time back for work that needs human judgment.',
    description: 'Turn repetitive work into reliable, well-designed digital processes.',
    metaDescription: 'Business process automation services. We automate repetitive manual work so your teams can focus on tasks that require judgment and creativity.',
    problems: [
      'Your team spends hours on repetitive manual tasks.',
      'Human error is causing problems in critical processes.',
      'You cannot scale operations without hiring significantly more people.',
      'Integration between systems requires manual data entry or workarounds.'
    ],
    whatWeDeliver: [
      'Automated workflows that replace manual processes.',
      'Reduced errors through consistent, rule-based execution.',
      'The ability to scale operations without proportional headcount growth.',
      'Clear visibility into automated process execution and results.',
      'Processes your team can monitor and adjust as needed.'
    ],
    capabilities: [
      'Process analysis and design',
      'Workflow automation development',
      'Robotic process automation',
      'Scheduled job automation',
      'Integration-driven automation',
      'Error handling and monitoring',
      'Continuous improvement'
    ],
    engagementApproach: [
      'Identify the manual processes with the highest impact.',
      'Design an automated workflow that is reliable and maintainable.',
      'Implement with proper error handling and monitoring.',
      'Test thoroughly before moving to production.',
      'Monitor and optimize the automated process over time.'
    ],
    technologies: ['.NET', 'Workflow engines', 'REST APIs', 'Scheduling', 'Message queues', 'Azure', 'Data transformation']
  },
  {
    slug: 'technology-consulting',
    title: 'Technology Consulting & Architecture',
    value: 'Create clarity before investing in the next line of code.',
    description: 'Independent technical thinking for important decisions and difficult problems.',
    metaDescription: 'Technology consulting and architecture services. We provide independent technical expertise to help you make better technology decisions for your business.',
    problems: [
      'You need clarity on a difficult technology decision.',
      'Your current architecture has become unclear or unmaintainable.',
      'You are not sure if your current path is the right one.',
      'You need an honest, external view on your technology strategy.'
    ],
    whatWeDeliver: [
      'Clear analysis of your technology landscape and constraints.',
      'Informed recommendations grounded in your business goals.',
      'Architecture that is appropriate for your scale and team.',
      'A roadmap for technology improvements.',
      'Confidence in your next steps.'
    ],
    capabilities: [
      'System architecture review',
      'Technology strategy development',
      'Vendor and platform evaluation',
      'Team capability assessment',
      'Risk analysis',
      'Scalability assessment',
      'Cost-benefit analysis'
    ],
    engagementApproach: [
      'Understand your business goals and constraints.',
      'Analyze your current technology and organization.',
      'Evaluate options and trade-offs.',
      'Provide clear recommendations.',
      'Support implementation of chosen direction.'
    ],
    technologies: ['Architecture patterns', 'Modern platforms', 'Cloud strategy', 'API design', 'Team scaling', 'Technology roadmaps']
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find(service => service.slug === slug);
}