import { CertificationItem } from '../types';

export const certifications: CertificationItem[] = [
  {
    id: 'hcia-ai',
    title: 'Huawei Certified ICT Associate (HCIA) – Artificial Intelligence',
    issuer: 'Huawei Technologies',
    date: '2024',
    score: '960 / 1000',
    description: 'Certified expertise in AI principles, machine learning workflows, deep learning frameworks, Python programming for AI, and Huawei Ascend computing architectures.',
    skills: ['Deep Learning', 'Machine Learning', 'Computer Vision', 'NLP', 'Ascend AI']
  },
  {
    id: 'huawei-ict-competition-computing',
    title: 'Huawei ICT Competition 2024–2025 National Finalist (Computing Track)',
    issuer: 'Huawei Technologies & Ministry of Higher Education',
    date: '2024 - 2025',
    score: 'National Finalist',
    description: 'Competed at the national level demonstrating advanced problem solving, high-performance computing, openEuler OS, and AI application engineering under strict contest benchmarks.',
    skills: ['High Performance Computing', 'Linux / openEuler', 'AI Algorithms', 'Cloud Systems']
  },
  {
    id: 'huawei-ict-network',
    title: 'Huawei ICT Competition – 1st Prize Winner (Network Track)',
    issuer: 'Huawei Technologies',
    date: '2023',
    score: '1st Prize Winner',
    description: 'Awarded 1st Prize in the Huawei ICT Competition Network Track, demonstrating exceptional expertise in enterprise network architecture, routing & switching protocols, and network security.',
    skills: ['Computer Networks', 'Routing & Switching', 'Network Security', 'Enterprise Systems'],
    docImage: '/images/huawei-network-self.png',
    gallery: [
      {
        url: '/images/huawei-network-self.png',
        title: 'Huawei ICT Competition 1st Prize Award Ceremony',
        caption: 'Dian Raisa Gumilar receiving the 1st Prize recognition at the Huawei ICT Competition ceremony.'
      },
      {
        url: '/images/huawei-network-team.png',
        title: 'Competition Team & Delegation',
        caption: 'Delegation team on stage celebrating the 1st Prize victory in the Huawei Network Track.'
      }
    ]
  }
];
