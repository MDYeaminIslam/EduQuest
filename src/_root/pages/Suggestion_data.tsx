export interface Difficulty {
  level: string;
  suggestions: string[];
}

export interface Occupation {
  label: string;
  difficulties: Difficulty[];
}

export const occupations: Occupation[] = [
  {
    label: 'Software Engineer',
    difficulties: [
      {
        level: 'Staring',
        suggestions: [
          'Focus on Building foundational skills, gaining experience, exploring different areas.',
          'Master core programming languages and development tools (e.g., Python, Java, JavaScript, Git).',
          'Get involved in open-source projects.',
          'Participate in coding bootcamps or online courses to sharpen specific skills.',
          'Consider internships or junior positions at startups or established companies.',
          'Network with other developers and mentors.',
          'Resource - Coursera: https://www.coursera.org/collections/software-engineer-career',
          'Resource -edX: https://www.edx.org/learn/computer-science',
          'Resource -FreeCodeCamp: https://www.freecodecamp.org/',
          'Resource -Open source project ideas: https://opensource.guide/how-to-contribute/',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Focus on Specializing in a specific domain, advancing technical skills, taking on leadership roles.',
          'Deepen your knowledge in a chosen area (e.g., web development, machine learning, security).',
          'Contribute to larger projects with more responsibility.',
          'Consider pursuing professional certifications (e.g., AWS Certified Solutions Architect).',
          'Mentor junior developers and share your knowledge.',
          'Begin networking with senior developers and industry leaders.',
          'Resources:-Udacity Nanodegrees: https://www.udacity.com/',
          'Resources:-Pluralsight: https://www.pluralsight.com/',
          'Resources:-A Cloud Guru: https://www.pluralsight.com/cloud-guru',
          'Resources:-Google IT Certifications: https://cloud.google.com/learn/certification',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Focus on Leading teams, driving innovation, taking on managerial roles.',
          'Build strong communication and interpersonal skills.',
          'Mentor junior developers and take on leadership roles within projects.',
          'Consider pursuing management or leadership training programs.',
          'Stay up-to-date on industry trends and emerging technologies.',
          'Network with other senior developers and executives.',
          'Resource:- Harvard Business School Online: https://online.hbs.edu/',
          'Resource:-Stanford Executive Education: https://www.gsb.stanford.edu/exec-ed',
          'MIT Sloan Executive Education: https://exec.mit.edu/s/',
          'Forbes list of Top Executive Education Programs: https://fortune.com/education/articles/',
          'Resource:-10-executive-leadership-programs-that-should-be-on-every-business-leaders-radar/',
        ],
      },
    ],
  },
  {
    label: 'Doctor',
    difficulties: [
      {
        level: 'basic',
        suggestions: [
          'Basic medical study',
          'Intermediate level Biology study',
        ],
      },
      {
        level: 'intermediate',
        suggestions: ['Build small projects', 'Join hackathons'],
      },
      {
        level: 'advanced',
        suggestions: [
          'Contribute to open source projects',
          'Get professional certifications',
        ],
      },
    ],
  },
  // Add more occupations with difficulties and suggestions here
];
