import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Core',
    description: 'Core languages used across machine learning research, backend services, and application development.',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Dart' },
      { name: 'C++' },
      { name: 'SQL' },
      { name: 'HTML5 / CSS3' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Frameworks and mathematical foundations for predictive models, deep learning, and evaluation.',
    skills: [
      { name: 'PyTorch', highlight: true },
      { name: 'TensorFlow / Keras' },
      { name: 'Scikit-learn', highlight: true },
      { name: 'NumPy & Pandas', highlight: true },
      { name: 'Data Preprocessing' },
      { name: 'Model Evaluation' },
      { name: 'Feature Engineering' }
    ]
  },
  {
    title: 'NLP & Computer Vision',
    description: 'Specialized architectures for semantic text understanding, topic modeling, and visual perception.',
    skills: [
      { name: 'BERTopic', highlight: true },
      { name: 'OpenCV', highlight: true },
      { name: 'MediaPipe', highlight: true },
      { name: 'Hugging Face Transformers' },
      { name: 'Sentence Transformers' },
      { name: 'CNN / ResNet' },
      { name: 'TF-IDF & Embeddings' }
    ]
  },
  {
    title: 'Web, Mobile & IoT',
    description: 'Application frameworks for interactive demos, user interfaces, and embedded telemetry.',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Vite' },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Flutter', highlight: true },
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'ESP32 / IoT' },
      { name: 'REST APIs' }
    ]
  },
  {
    title: 'Developer Tools & Cloud',
    description: 'Version control, experimentation environments, containerization, and collaboration workflows.',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Jupyter Notebook', highlight: true },
      { name: 'VS Code' },
      { name: 'Docker' },
      { name: 'Firebase' },
      { name: 'Postman' },
      { name: 'Linux CLI' }
    ]
  }
];
