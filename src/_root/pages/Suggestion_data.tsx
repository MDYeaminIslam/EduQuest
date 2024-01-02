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
        level: 'Starting',
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
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
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
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
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
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
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
  {
    label: 'Mechanical Engineer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master core engineering fundamentals (thermodynamics, mechanics, materials science, design).',
          'Maintain a strong GPA to secure better opportunities.',
          'Seek internships in relevant industries (shipbuilding, power generation, textile machinery, automotive).',
          'Attend industry events and build professional connections.',
          'Learn CAD software (SolidWorks, CATIA, AutoCAD) and consider additional skills (coding, project management).',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          "Consider a Master's degree in a specialized field (mechatronics, energy engineering, industrial automation).",
          'Choose a specialization (machine design, thermal engineering, manufacturing, control systems).',
          'Take on challenging projects that demonstrate problem-solving and leadership skills.',
          'Pursue professional certifications (PE, CSWP) to enhance credentials.',
          'Find a mentor in your chosen field for guidance and career advice.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Explore management roles (project manager, department head) or entrepreneurship.',
          'Develop soft skills (communication, teamwork, negotiation, conflict resolution).',
          'Stay updated with new technologies and advancements in the field.',
          'Contribute to the community by mentoring, participating in professional organizations, or teaching.',
          'Consider starting your own venture related to your expertise.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Civil Engineer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master core engineering principles (mechanics, materials science, structures, hydrology).',
          'Maintain strong academic performance for scholarship opportunities or better job prospects.',
          'Seek internships in relevant public sectors (PWD, Roads & Highways Dept., Railways) or private construction companies.',
          'Network with senior engineers and build connections at professional events.',
          'Develop AutoCAD, Revit, or Civil 3D skills for design and drafting expertise.',
          'Consider additional skills like surveying, project management, or GIS for a competitive edge.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Explore postgraduate options in specialized fields like geotechnical engineering, water resources, or structural engineering.',
          'Focus on a technical niche like building design, transportation engineering, or infrastructure development.',
          'Gain experience in project management, cost estimation, and construction supervision.',
          'Pursue professional certifications like PE (Professional Engineer) or LEED (Leadership in Energy and Environmental Design).',
          'Actively participate in professional organizations like IEB (Institution of Engineers, Bangladesh) to expand your network.',
          'Contribute to improving sustainable construction practices within your projects.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like project manager, department head, or consultant.',
          'Develop strong communication and presentation skills for client interaction and negotiation.',
          'Stay updated with emerging technologies like BIM (Building Information Modeling) and digital construction tools.',
          "Actively contribute to solving Bangladesh's infrastructure challenges through innovative solutions.",
          'Become involved in community development projects to enhance your social impact.',
          'Consider entrepreneurship by starting your own construction company or consultancy firm.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Chemical Engineer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Solidify fundamental knowledge in chemistry, thermodynamics, fluid mechanics, and process engineering.',
          'Maintain good academic standing to open doors to better opportunities.',
          'Seek internships in relevant industries like pharmaceuticals, textiles, food processing, or fertilizer production.',
          'Network with senior engineers and attend industry events to build connections.',
          'Master laboratory skills for chemical analysis and experimentation.',
          'Consider additional skills like coding (Python, MATLAB) or data analysis for future value.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Explore postgraduate options in specific areas like bioengineering, green chemistry, or polymer science.',
          'Specialize in a technical niche like process design, reactor engineering, or product development.',
          'Gain experience in plant operation, process optimization, and scale-up of chemical processes.',
          'Pursue professional certifications like CChem (Chartered Chemist) or CPE (Certified Plant Engineer).',
          'Actively participate in professional organizations like BCS (Bangladesh Chemical Society) to expand your network.',
          'Contribute to developing sustainable and environmentally friendly processes within your industry.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like process manager, production head, or technical consultant.',
          'Develop strong communication and project management skills to lead teams and complex projects.',
          'Stay updated with advancements in automation, digitalization, and advanced materials in the chemical industry.',
          "Contribute to solving Bangladesh's challenges in areas like clean water, sanitation, or renewable energy production.",
          'Become a mentor and share your knowledge with young chemical engineers.',
          'Consider entrepreneurship by starting your own chemical manufacturing or consulting firm.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Human Resource Manager',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Solidify core HR principles: recruitment, compensation & benefits, employee relations, training & development.',
          'Maintain strong academic performance for better job prospects and potential scholarship opportunities.',
          'Seek internships in HR departments of various organizations to gain practical experience.',
          'Network with HR professionals, attend industry events, and build professional connections.',
          'Develop strong communication, interpersonal, and organizational skills.',
          'Consider additional skills like data analysis, HR software proficiency, or foreign language (preferably Bangla).',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific HR area like talent acquisition, performance management, or employee engagement.',
          'Pursue HR certifications like CIPD (Chartered Institute of Personnel and Development) or SHRM (Society for Human Resource Management).',
          'Gain experience in project management, leading HR initiatives, and implementing HR policies.',
          'Develop strong negotiation and conflict resolution skills for effective problem-solving.',
          'Stay updated with HR trends and technology advancements in Bangladesh and globally.',
          "Consider pursuing a Master's degree in HR Management or related field for career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like HR Manager, Head of Training & Development, or HR Consultant.',
          'Develop strategic HR skills aligned with organizational goals and contribute to business decisions.',
          'Become an expert in employee relations and create a positive and productive work environment.',
          "Contribute to building Bangladesh's workforce by implementing best HR practices and training programs.",
          'Mentor and coach other HR professionals, guide their career development.',
          'Consider starting your own HR consulting firm or specializing in niche HR services.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Finance Manager',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Solidify core finance principles: financial analysis, accounting, investment, risk management.',
          'Maintain strong academic performance to open doors to better job opportunities.',
          'Seek internships in relevant areas like banks, financial institutions, or corporate finance departments.',
          'Attend industry events, network with finance professionals, and build connections.',
          'Develop strong analytical, problem-solving, and communication skills.',
          'Consider additional skills like coding (Python, R), financial modeling, or data analysis.',

          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific finance area like corporate finance, investment banking, or financial analysis.',
          'Pursue professional certifications like CFA (Chartered Financial Analyst) or CIMA (Chartered Institute of Management Accountants).',
          'Gain experience in financial modeling, project valuation, or risk assessment.',
          'Develop strong teamwork and collaboration skills for working with diverse teams.',
          'Stay updated with financial markets and regulations in Bangladesh and globally.',
          "Consider a Master's degree in Finance, Financial Economics, or related field for career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Finance Director, Investment Manager, or Financial Consultant.',
          'Develop strategic financial planning skills aligned with organizational goals and contribute to business decisions.',
          'Become an expert in financial analysis and provide valuable insights for informed decision-making.',
          "Contribute to the development of Bangladesh's financial sector by promoting ethical and sustainable practices.",
          'Mentor and coach other finance professionals, guide their career development.',
          'Consider starting your own financial consulting firm or specializing in niche financial services.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Marketing Manager',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master core marketing principles: consumer behavior, branding, advertising, digital marketing.',
          'Maintain strong academic performance to open doors to better job opportunities.',
          'Seek internships in marketing departments, advertising agencies, or digital marketing firms.',
          'Network with marketing professionals, attend industry events, and build connections.',
          'Develop strong communication, analytical, and creative problem-solving skills.',
          'Learn essential digital marketing tools and platforms (social media, Google Analytics, SEO).',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific marketing area like digital marketing, brand management, or media planning.',
          'Pursue professional certifications like CIM (Chartered Institute of Marketing) or Google Ads Certifications.',
          'Gain experience in campaign management, budget allocation, and performance measurement.',
          'Develop strong negotiation and project management skills for leading marketing initiatives.',
          'Stay updated with emerging marketing trends and technologies like AI, personalization, and influencer marketing.',
          "Consider a Master's degree in Marketing or related field for career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Head of Marketing, Brand Manager, or Marketing Consultant.',
          'Develop strategic marketing plans aligned with business goals and drive marketing effectiveness.',
          'Lead and inspire marketing teams to deliver successful campaigns and brand awareness.',
          "Contribute to Bangladesh's marketing landscape by fostering ethical and sustainable marketing practices.",
          'Mentor and coach other marketing professionals, guide their career development.',
          'Consider starting your own marketing agency or consulting firm, specializing in niche marketing services.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Accountant Manager',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master core accounting principles: financial statements, bookkeeping, taxation, cost accounting.',
          'Maintain strong academic performance to open doors to better job opportunities.',
          'Seek internships in accounting departments, audit firms, or tax advisory firms.',
          'Network with accounting professionals, attend industry events, and build connections.',
          'Develop strong analytical, problem-solving, and attention to detail skills.',
          'Learn accounting software (QuickBooks, Tally) and consider additional skills like data analysis or coding.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific accounting area like financial accounting, auditing, or forensic accounting.',
          'Pursue professional certifications like CPA (Certified Public Accountant) or ACCA (Association of Chartered Certified Accountants).',
          'Gain experience in financial reporting, internal controls, or tax compliance.',
          'Develop strong communication and interpersonal skills for collaborating with teams and clients.',
          'Stay updated with Bangladeshi accounting standards and tax regulations.',
          "Consider a Master's degree in Accounting, Taxation, or related field for career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Finance Manager, Head of Accounting, or Accounting Consultant.',
          'Develop strategic financial planning skills aligned with organizational goals and contribute to business decisions.',
          'Lead and mentor accounting teams, ensuring accuracy and compliance in financial operations.',
          "Contribute to improving Bangladesh's accounting practices by promoting ethical and transparent standards.",
          'Share your expertise by mentoring and coaching other accounting professionals.',
          'Consider starting your own accounting firm or consulting practice, specializing in niche accounting services.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Architect',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master core architectural principles: design basics, construction technology, building codes, sustainability.',
          'Maintain strong academic performance for scholarship opportunities or better job prospects.',
          'Seek internships in architectural firms, construction companies, or government agencies.',
          'Network with senior architects, attend industry events, and build connections.',
          'Develop strong drafting and design skills (AutoCAD, Revit, SketchUp).',
          'Consider additional skills like 3D modeling, parametric design, or project management tools.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Pursue professional registration as an architect with the Institute of Architects, Bangladesh (IAB).',
          'Specialize in a specific architectural area like residential, commercial, or sustainable design.',
          'Gain experience in project management, design development, and construction documentation.',
          'Develop strong communication and client interaction skills for effective project collaboration.',
          'Stay updated with emerging architectural trends and technologies like BIM (Building Information Modeling).',
          "Consider a Master's degree in Architecture or related field for advanced design knowledge.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Project Architect, Design Principal, or Architectural Consultant.',
          'Develop strategic design vision aligned with client needs and societal context.',
          'Lead and mentor architectural teams to deliver high-quality and innovative projects.',
          "Contribute to Bangladesh's architectural landscape by promoting sustainable and context-sensitive design.",
          'Engage in community development projects or participate in professional organizations like IAB to give back.',
          'Consider starting your own architectural practice or specializing in niche architectural services.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Textile engineer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Solidify core textile engineering principles: fiber science, yarn production, fabric manufacturing, textile testing.',
          'Maintain strong academic performance to open doors to better job opportunities in the competitive market.',
          'Seek internships in spinning mills, garment factories, textile testing labs, or government textile agencies.',
          'Network with senior textile engineers, attend industry events, and build connections within the textile sector.',
          'Develop strong technical skills in relevant machinery operation and fabric analysis.',
          'Consider additional skills like CAD software for textile design, basic coding, or data analysis.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific textile engineering area like yarn spinning, fabric weaving, finishing processes, or quality control.',
          'Pursue professional certifications like CText (Certified Textile Engineer) or CTIF (Chartered Textile Institute Fellow).',
          'Gain experience in production optimization, process improvement, and quality control procedures.',
          'Develop strong problem-solving, analytical, and decision-making skills to tackle technical challenges.',
          'Stay updated with technological advancements in the textile industry like advanced materials, automation, and sustainable practices.',
          "Consider a Master's degree in Textile Engineering or related field for advanced technical knowledge and career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Production Manager, Quality Assurance Manager, or Technical Consultant.',
          'Develop strategic planning and management skills to contribute to organizational goals and improve efficiency.',
          'Lead and mentor textile engineering teams to drive innovation and solve complex technical problems.',
          "Contribute to Bangladesh's textile industry by promoting sustainable and responsible manufacturing practices.",
          'Share your expertise through training programs, research projects, or consulting services.',
          'Consider starting your own textile manufacturing unit or consulting firm specializing in niche textile processes.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Network Engineer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master fundamental networking concepts: TCP/IP, routing, switching, network security.',
          'Maintain strong academic performance to open doors to better job opportunities.',
          'Seek internships in IT departments, network service providers, or data centers.',
          'Network with senior network engineers, attend industry events, and build connections.',
          'Develop strong troubleshooting and problem-solving skills for resolving network issues.',
          'Learn essential network configuration tools (Cisco Packet Tracer, GNS3, Wireshark).',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Pursue professional certifications like CCNA (Cisco Certified Network Associate) or CCENT (Cisco Certified Entry Networking Technician).',
          'Specialize in a specific network area like cloud networking, cybersecurity, or wireless networking.',
          'Gain experience in network deployment, troubleshooting, and performance optimization.',
          'Develop collaboration and communication skills for working effectively with IT teams and clients.',
          'Stay updated with emerging network technologies like SDN (Software-Defined Networking) and network automation.',
          "Consider a Master's degree in Computer Science or Networking for career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Network Architect, Security Engineer, or Network Consultant.',
          'Develop strategic network planning skills aligned with organizational goals and security best practices.',
          'Lead and mentor network engineering teams to design, implement, and manage complex networks.',
          "Contribute to Bangladesh's IT infrastructure development by promoting secure and high-performance networks.",
          'Share your expertise through training programs, research projects, or consulting services.',
          'Consider starting your own network consulting firm or specializing in niche network services.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Automation Engineer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master core automation principles: PLC programming, sensors and actuators, industrial robotics, control systems.',
          'Maintain strong academic performance to open doors to better job opportunities in the growing automation sector.',
          'Seek internships in manufacturing companies, automation firms, or research institutions focusing on automation.',
          'Network with senior automation engineers, attend industry events, and build connections within the automation community.',
          'Develop strong hands-on skills with programming languages like Ladder Logic, Python, and SCADA software.',
          'Consider additional skills like CAD software for automation design, basic coding, or data analysis.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific automation area like industrial automation, building automation, or robotics.',
          'Pursue professional certifications like ISA-CISA (Certified Industrial Automation Engineer) or ABB Certified Automation Specialist.',
          'Gain experience in designing, implementing, and troubleshooting automated systems.',
          'Develop strong project management and communication skills to lead automation projects effectively.',
          'Stay updated with emerging automation technologies like AI, Machine Learning, and Industrial IoT.',
          "Consider a Master's degree in Automation Engineering or related field for advanced technical knowledge and career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Automation Manager, Chief Robotics Engineer, or Automation Consultant.',
          'Develop strategic automation planning skills aligned with organizational goals and operational efficiency.',
          'Lead and mentor automation engineering teams to drive innovation and implement complex automation solutions.',
          "Contribute to Bangladesh's industrial development by promoting efficient and sustainable automation practices.",
          'Share your expertise through training programs, research projects, or consulting services.',
          "Consider starting your own automation company or specializing in niche automation solutions for Bangladesh's industries.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Media & Journalism',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Develop strong writing and communication skills across various media formats (print, digital, audio, video).',
          'Maintain strong academic performance to open doors to better job opportunities in your chosen media field.',
          'Seek internships in media houses, news agencies, or online platforms to gain practical experience.',
          'Network with experienced media professionals, attend industry events, and build connections within the media community.',
          'Develop research and storytelling skills to create compelling content that resonates with Bangladeshi audiences.',
          'Consider additional skills like photography, videography, editing software, or digital marketing.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific media area like investigative journalism, documentary filmmaking, or digital media production.',
          'Pursue professional certifications or training programs relevant to your chosen field.',
          'Gain experience in reporting, editing, producing, or broadcasting various media content.',
          'Develop strong collaboration and teamwork skills to work effectively within media teams.',
          'Stay updated with emerging media trends and technologies like online publishing, social media journalism, and data-driven storytelling.',
          "Consider a Master's degree in Journalism, Media Studies, or related field for career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Editor-in-Chief, Content Manager, or Media Consultant.',
          'Develop strategic media planning skills aligned with organizational goals and audience engagement.',
          'Lead and mentor media teams to create impactful content and drive audience growth.',
          "Contribute to Bangladesh's media landscape by promoting ethical journalism, freedom of expression, and responsible reporting.",
          'Share your expertise through training programs, workshops, or independent media projects.',
          'Consider starting your own media outlet or specializing in niche content creation for your chosen media format.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'University Lecturer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master your subject domain expertise and keep updated with the latest research in your field.',
          'Develop engaging and effective teaching styles to cater to diverse student learning styles.',
          'Gain practical teaching experience through assistantships, guest lectures, or online teaching platforms.',
          'Network with senior faculty members, attend academic conferences, and build academic connections.',
          'Develop strong communication and interpersonal skills to connect with students and colleagues.',
          'Consider pursuing post-graduate studies (MSc, PhD) for further academic qualifications and career advancement.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific area within your subject domain and contribute to research in that field.',
          'Publish your research findings in peer-reviewed journals and present them at academic conferences.',
          'Develop effective course materials and curriculum designs to enhance student learning outcomes.',
          'Mentor and guide undergraduate research projects and supervise postgraduate students.',
          'Seek opportunities to participate in university committees and contribute to academic governance.',
          'Consider pursuing professional development programs in teaching-learning methodologies or educational technology.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Head of Department, Dean of Faculty, or University Administrator.',
          'Develop strategic academic planning skills aligned with university goals and educational quality standards.',
          'Lead and mentor faculty teams to cultivate a vibrant academic environment and promote scholarly activities.',
          "Contribute to Bangladesh's higher education landscape by fostering research excellence and innovative teaching practices.",
          'Engage in community outreach programs, industry collaborations, and international academic partnerships.',
          'Consider establishing your own academic consulting firm or specializing in curriculum development or educational research.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Environmental Engineer/Scientist',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master core environmental principles: air, water, soil pollution, waste management, environmental regulations.',
          'Maintain strong academic performance to open doors to better job opportunities in the growing environmental sector.',
          'Seek internships in environmental consultancies, government agencies, or NGOs working on environmental issues.',
          'Network with senior environmental professionals, attend industry events, and build connections within the environmental community.',
          'Develop strong field sampling, data analysis, and reporting skills for environmental assessments.',
          'Consider additional skills like GIS, remote sensing, or environmental modelling for future value.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Specialize in a specific environmental area like air pollution control, water treatment, sustainable energy, or waste management.',
          'Pursue professional certifications like CEnv (Chartered Environmentalist) or PEng (Professional Engineer) with the Institution of Engineers, Bangladesh.',
          'Gain experience in environmental impact assessments, pollution control strategies, or environmental monitoring projects.',
          'Develop strong project management, communication, and collaboration skills to work effectively with diverse stakeholders.',
          'Stay updated with emerging environmental technologies like green infrastructure, renewable energy, and circular economy.',
          "Consider a Master's degree in Environmental Engineering, Environmental Science, or related field for career advancement.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles like Environmental Manager, Sustainability Consultant, or Research Scientist.',
          'Develop strategic environmental planning skills aligned with organizational goals and sustainable development principles.',
          'Lead and mentor environmental teams to implement solutions for environmental challenges, such as climate change and resource depletion.',
          "Contribute to Bangladesh's environmental development by promoting sustainable practices, policy advocacy, and community engagement.",
          'Share your expertise through training programs, research projects, or consulting services for private and public sectors.',
          "Consider starting your own environmental consulting firm or specializing in niche environmental solutions for Bangladesh's unique context.",
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },
  {
    label: 'Advocate/lawyer',
    difficulties: [
      {
        level: 'Starting',
        suggestions: [
          'Master the fundamentals of Bangladeshi law through rigorous academic study and training.',
          'Develop strong research and analytical skills to interpret legal texts and case precedents.',
          'Gain practical experience through internships in law firms, chambers of senior advocates, or legal aid organizations.',
          'Network with experienced lawyers, attend court proceedings, and build connections within the legal community.',
          'Sharpen your communication and written advocacy skills to present arguments effectively in court.',
          'Consider specializing in a specific area of law like criminal law, civil law, corporate law, or environmental law.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Intermediate',
        suggestions: [
          'Pass the Bangladesh Bar Council examination and obtain your practicing license as an Advocate.',
          'Seek mentorship from experienced lawyers and build your own client base through independent practice or joining a law firm.',
          'Gain courtroom experience by handling various cases and developing strong litigation skills.',
          'Stay updated with evolving legal amendments and judicial pronouncements in Bangladesh.',
          'Build strong ethical reputation and integrity as a lawyer, upholding the principles of justice and fair representation.',
          'Consider pursuing post-graduate legal studies (LL.M.) for specialization and career advancement.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
      {
        level: 'Advanced',
        suggestions: [
          'Consider leadership roles within legal chambers, law firms, or public interest organizations.',
          'Develop strategic legal planning skills to advise clients on complex legal matters and business transactions.',
          'Mentor and guide junior lawyers and contribute to legal education and training programs.',
          "Contribute to shaping Bangladesh's legal landscape through advocacy for legal reforms and public interest litigation.",
          'Consider teaching law at universities or becoming an expert witness in specialized legal fields.',
          'Build a strong reputation as a leading legal practitioner in your chosen area of expertise.',
          'NB: - This is just a path not a rule. For better understanding, please consult with your seniors, search on google and youtube and also consult with your teachers.',
        ],
      },
    ],
  },

  // Add more occupations with difficulties and suggestions here
];
