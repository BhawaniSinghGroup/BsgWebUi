export interface CardItem { title: string; text: string; eyebrow?: string; }
export interface ServiceItem extends CardItem { value: string; }

export const services: ServiceItem[] = [
  { title: 'Websites & web apps', text: 'Clear, responsive digital experiences for a new business, a customer journey or an internal tool.', value: 'Put your idea online with a focused, professional experience.' },
  { title: 'Product prototypes', text: 'Turn an early concept into something tangible that can be tested, shared and improved.', value: 'Move from a good idea to a useful first version.' },
  { title: 'Automation & integration', text: 'Connect everyday tools and simplify repetitive work with practical digital workflows.', value: 'Spend less time on manual tasks and more on the work that matters.' },
  { title: 'Technical guidance', text: 'A thoughtful second opinion on product choices, website direction and technology decisions.', value: 'Make the next step clearer before investing more time or money.' }
];

export const industries = ['Healthcare', 'Financial services', 'Retail', 'Professional services', 'Technology', 'Logistics', 'Startups', 'Small & medium businesses', 'Enterprise'];
export const technologies = { Web: ['Angular', 'TypeScript', 'Responsive design'], Backend: ['.NET', 'ASP.NET Core', 'C#'], Integration: ['REST APIs', 'Automation', 'Practical workflows'], Delivery: ['GitHub', 'Docker', 'CI/CD'], Data: ['PostgreSQL', 'SQL Server'] };
export const principles = ['Honest communication', 'Useful work over empty promises', 'Care for people and the planet', 'Thoughtful, practical decisions', 'Quality in the details', 'Long-term thinking'];
