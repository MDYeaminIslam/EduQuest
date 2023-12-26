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
          'Resource -Open source project ideas: https://opensource.guide/how-to-contribute/','NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.'
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
          'Resources:-Google IT Certifications: https://cloud.google.com/learn/certification','NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.'
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
          'Resource:-10-executive-leadership-programs-that-should-be-on-every-business-leaders-radar/','NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.'
        ],
      },
    ],
  },
  {
    label: 'Doctor',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Clinical Residency: Pursue residency training in your chosen specialty to gain practical experience and qualify for board certification.',
          ' **Resources:Bangladesh Medical and Dental Council (BMDC) Residency Programs: https://www.bmdc.org.bd/',
          'ECFMG pathways for Residency in the USA: https://www.ecfmg.org/',
          'Research Associate: Join research projects at universities, hospitals, or private research institutions.',
          'Resources:Bangladesh Academy of Sciences (BAS) Research Grants: https://www.bas.org.bd/',
          'Wellcome Trust Research Grants in Bangladesh: https://bcct.gov.bd/',
          'Medical Officer: Gain clinical experience in hospitals, clinics, or rural healthcare settings.',
          'Resources: Bangladesh Public Service Commission (PSC) Medical Officer Recruitment: https://bpsc.gov.bd/',
          'NGO job portals like BracNet & BRACED: https://careers.brac.net/ & https://careers.brac.net/',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialist Physician: Start practicing independently or join a private hospital/clinic after completing residency.',
          'Resources:',
          'Bangladesh Medical and Dental Association (BMDA) Practice Guidelines: https://www.bmdc.org.bd/',
          'Setting up a private clinic: https://bida.gov.bd/',
          "Academic Medicine: Pursue a Master's degree or Ph.D. in your field and join academia as a lecturer or researcher.",
          'Resources:',
          'University Grants Commission (UGC) Scholarships for Postgraduate Studies: https://ugc.gov.bd/',
          'Commonwealth Ph.D. Scholarships for Bangladeshi students: https://cscuk.fcdo.gov.uk/scholarship-country/bangladesh/',
          'Public Health: Work in government agencies, NGOs, or international organizations to improve public health outcomes.',
          'Resources:',
          'World Health Organization (WHO) Bangladesh: https://www.who.int/bangladesh',
          'Centers for Disease Control and Prevention (CDC) Global Health Programs: https://www.cdc.gov/globalhealth/index.html',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consultant Physician:',
          'Gain expertise and leadership skills through Fellowship programs at specialized centers or abroad.',
          'Resources:',
          'BMDC Fellowship Programs: https://bmdf.org/',
          'Commonwealth Medical Fellowships: https://cscuk.fcdo.gov.uk/scholarship-country/bangladesh/',
          'Medical Entrepreneur:',
          'Start your own healthcare business like a diagnostic lab, telemedicine platform, or medical device company.',
          'Resources:',
          'Bangladesh Innovation Fund (BIF): https://bif.org.bd/',
          'Startup incubation programs like IdeaSpace: https://inpacebd.com/',
          'Global Health Expert:',
          'Join international organizations like WHO, MSF, or UN agencies working on global health initiatives and research.',
          'Resources:',
          'WHO Bangladesh: https://www.who.int/bangladesh',
          'Doctors Without Borders (MSF): https://www.msf.org/bangladesh',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Electrical Engineer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Get an entry level position as Junior Engineer/Sub-Assistant Engineer in government service like BREB, DPDC, DESCO etc through the BPSC exam. Study materials can be found here: https://www.bpsc.gov.bd/site/view/syllabus',
          'Apply for Graduate Trainee Engineer (GTE) roles in private power companies like Summit, Walton Group, Rahimafrooz etc.',
          'Do internships and training in sectors like telecom, electronics, solar to gain expertise.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Write the Professional Engineers (PE) exam to get engineering license after 4+ years experience. Details: https://pecexambd.org/',
          'Promote to Assistant Engineer/Executive Engineer in government electrical utilities.',
          'Move into Electrical Design Engineering roles in construction companies and MEP consulting firms.',
          'Consider getting an MBA or MSc in energy management to move into project management roles.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Become Chartered Engineer (CEng) for career advancement after at least 5 years experience. Details: https://iebbd.org/',
          'Promote to managerial grades like Deputy General Manager/General Manager in government organizations through the BPSC exam.',
          'Start getting work as independent consulting engineer for electrical designs and supervision.',
          'Move abroad for electrical engineering roles especially in energy/oil & gas/construction sector in Middle East, SE Asia, Australia etc.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  // Add more occupations with difficulties and suggestions here
];
