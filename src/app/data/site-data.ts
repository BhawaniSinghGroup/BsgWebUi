export interface CardItem { title: string; text: string; eyebrow?: string; }
export interface ServiceItem extends CardItem { value: string; }

export const services: ServiceItem[] = [
  { title: 'Custom software', text: 'Purpose-built systems shaped around how your organization actually works.', value: 'Replace workarounds with software that fits the business.' },
  { title: 'Web applications', text: 'Secure, clear and resilient experiences for customers, teams and operations.', value: 'Make complex workflows easier to use and easier to scale.' },
  { title: 'Mobile & cross-platform', text: 'Mobile capabilities that extend your product and keep people moving.', value: 'Reach users wherever work happens without multiplying complexity.' },
  { title: 'APIs & integration', text: 'Connect the systems, data and services your business depends on.', value: 'Remove silos and create a more dependable flow of information.' },
  { title: 'Modernization', text: 'A pragmatic path from legacy constraints to a stronger technical foundation.', value: 'Improve what matters without putting the business on pause.' },
  { title: 'Cloud & DevOps', text: 'Infrastructure and delivery practices that make change safer and faster.', value: 'Ship with confidence, visibility and room to grow.' },
  { title: 'Automation', text: 'Turn repetitive work into reliable, well-designed digital processes.', value: 'Give teams time back for work that needs human judgment.' },
  { title: 'Consulting & architecture', text: 'Independent technical thinking for important decisions and difficult problems.', value: 'Create clarity before investing in the next line of code.' }
];

export const industries = ['Healthcare', 'Financial services', 'Retail', 'Professional services', 'Technology', 'Logistics', 'Startups', 'Small & medium businesses', 'Enterprise'];
export const technologies = { Frontend: ['Angular', 'TypeScript', 'Blazor'], Backend: ['.NET', 'ASP.NET Core', 'C#'], Mobile: ['.NET MAUI'], Architecture: ['REST APIs', 'Modular monoliths', 'Microservices', 'Event-driven systems'], Infrastructure: ['Docker', 'CI/CD', 'GitHub', 'Azure'], Data: ['PostgreSQL', 'SQL Server'] };
export const principles = ['Business-first thinking', 'Engineering excellence', 'Integrity', 'Transparent communication', 'Practical solutions', 'Long-term thinking', 'Scalable architecture', 'Continuous improvement'];
