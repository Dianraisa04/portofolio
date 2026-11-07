import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'brin-research-intern',
    role: 'Research Intern / AI Contributor',
    organization: 'Badan Riset dan Inovasi Nasional (BRIN)',
    location: 'Bandung, Indonesia',
    period: '2024',
    type: 'Research',
    description: 'Contributed to AI research projects focusing on data preprocessing, text analysis, and machine learning experimentation on large-scale national datasets.',
    contributions: [
      'Assisted senior researchers in designing preprocessing pipelines and feature extraction for unstructured text and scientific publications.',
      'Conducted benchmarking of various topic modeling and NLP representations, including BERTopic and TF-IDF baselines.',
      'Documented experimental methodologies, reproducibility standards, and evaluation metrics for internal research reports.'
    ],
    skills: ['Python', 'NLP', 'Data Preprocessing', 'BERTopic', 'Research Methodology', 'Git']
  },
  {
    id: 'ml-lab-assistant',
    role: 'Machine Learning Laboratory Assistant',
    organization: 'Institut Teknologi Nasional (ITENAS)',
    location: 'Bandung, Indonesia',
    period: '2023 - 2024',
    type: 'Work',
    description: 'Guided and supervised undergraduate informatics students in practical machine learning, deep learning architectures, and Python data science courses.',
    contributions: [
      'Facilitated hands-on laboratory practicums covering supervised learning, classification, clustering, neural networks, and model evaluation.',
      'Designed practical assignments, code grading rubrics, and mentored students through troubleshooting PyTorch and Scikit-learn bugs.',
      'Delivered workshops on exploratory data analysis and model deployment best practices using modern developer tools.'
    ],
    skills: ['Machine Learning', 'PyTorch', 'Scikit-learn', 'Python', 'Mentoring', 'Curriculum Design']
  },
  {
    id: 'computer-lab-assistant',
    role: 'Laboratory Assistant - Core Informatics',
    organization: 'Informatics Department, ITENAS',
    location: 'Bandung, Indonesia',
    period: '2022 - 2023',
    type: 'Work',
    description: 'Supported instructional staff in guiding foundational programming and systems courses for junior students.',
    contributions: [
      'Conducted laboratory sessions for Object-Oriented Programming, Data Structures, and Database Management Systems.',
      'Assisted over 80+ students per semester in debugging logic issues and adopting clean code principles.',
      'Maintained lab computing environment images and developer tools setup.'
    ],
    skills: ['Python', 'SQL', 'Algorithms & Data Structures', 'Linux', 'Teaching']
  },
  {
    id: 'hmif-leadership',
    role: 'Staff of Internal Audit & Cadre Development',
    organization: 'Himpunan Mahasiswa Informatika (HMIF) ITENAS',
    location: 'Bandung, Indonesia',
    period: '2023 - 2024',
    type: 'Community',
    description: 'Served in student association governance, operational compliance reviews, and leadership development for informatics cohorts.',
    contributions: [
      'Conducted periodic evaluations and accountability reviews of student association programs and financial expenditures.',
      'Supervised operational adherence to institutional regulations, ensuring organizational governance and transparency.',
      'Designed and executed leadership training, character building, and orientation curricula for incoming informatics students.'
    ],
    skills: ['Leadership', 'Organizational Governance', 'Curriculum Design', 'Public Speaking', 'Mentoring']
  },
  {
    id: 'itenas-education',
    role: 'Bachelor of Informatics (S.Kom.)',
    organization: 'Institut Teknologi Nasional (ITENAS)',
    location: 'Bandung, Indonesia',
    period: '2020 - 2024',
    type: 'Education',
    description: 'Graduated in Informatics with a strong academic concentration on Artificial Intelligence, Machine Learning, Computer Vision, and Software Engineering.',
    contributions: [
      'Conducted final capstone research centered on Artificial Intelligence and NLP recommendation systems.',
      'Active participant in competitive programming and national technology competitions (Huawei ICT Competition).',
      'Consistent academic excellence in AI, Deep Learning, Image Processing, and Software Architecture.'
    ],
    skills: ['Artificial Intelligence', 'Computer Vision', 'NLP', 'Software Engineering', 'System Design']
  }
];
