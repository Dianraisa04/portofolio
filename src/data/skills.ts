import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Data',
    description: 'Core languages and data analysis libraries for machine learning, pipeline development, and software engineering.',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Dart' },
      { name: 'SQL', highlight: true },
      { name: 'Pandas', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'Scikit-learn', highlight: true },
      { name: 'PyTorch', highlight: true },
      { name: 'TensorFlow' },
      { name: 'Git', highlight: true }
    ]
  },
  {
    title: 'AI & Data Science',
    description: 'Foundational architectures and specialized models for NLP, topic modeling, computer vision, and graph learning.',
    skills: [
      { name: 'Machine Learning', highlight: true },
      { name: 'Deep Learning', highlight: true },
      { name: 'NLP', highlight: true },
      { name: 'BERTopic', highlight: true },
      { name: 'Computer Vision', highlight: true },
      { name: 'Knowledge Graphs', highlight: true },
      { name: 'Model Evaluation' },
      { name: 'OpenCV' },
      { name: 'MediaPipe' }
    ]
  },
  {
    title: 'Networking & Systems',
    description: 'Infrastructure, enterprise routing protocols, network simulation, operating systems, and IoT telemetry.',
    skills: [
      { name: 'Computer Networks', highlight: true },
      { name: 'Network Layer Protocols', highlight: true },
      { name: 'VLAN Configuration' },
      { name: 'OSPF Dynamic Routing', highlight: true },
      { name: 'eNSP Simulator', highlight: true },
      { name: 'Linux', highlight: true },
      { name: 'IoT Telemetry' }
    ]
  },
  {
    title: 'Web, Mobile & Cloud',
    description: 'Modern development frameworks for interactive client interfaces, cloud state, and REST microservices.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Flutter' },
      { name: 'Vite' },
      { name: 'Firebase Firestore' },
      { name: 'REST APIs', highlight: true },
      { name: 'Postman' }
    ]
  },
  {
    title: 'Professional & Governance',
    description: 'Cross-functional analytical thinking, team leadership, mentorship, and operational compliance audit.',
    skills: [
      { name: 'Analytical Thinking', highlight: true },
      { name: 'Systematic Problem Solving', highlight: true },
      { name: 'Team Mentoring', highlight: true },
      { name: 'Internal Audit & Governance' },
      { name: 'Curriculum Design' },
      { name: 'Time Management' }
    ]
  },
  {
    title: 'Languages',
    description: 'Linguistic proficiencies for international technical collaboration and research dissemination.',
    skills: [
      { name: 'Indonesian (Native/Fluent)', highlight: true },
      { name: 'English (Professional Working)', highlight: true }
    ]
  }
];
