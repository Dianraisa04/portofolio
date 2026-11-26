import { CertificationItem, PublicationItem } from '../types';

export const certifications: CertificationItem[] = [
  {
    id: 'hcia-ai',
    title: 'Huawei ICT Associate (HCIA) AI V3.5',
    issuer: 'Huawei Technologies',
    date: 'Aug 2024 – Aug 2027',
    score: '960 / 1000',
    category: 'Certification',
    description: 'Certified in Machine Learning and Deep Learning architectures, Python predictive modeling, MindSpore framework, ResNet-50 image classification, and end-to-end cloud training pipelines using ModelArts. Achieved 960/1000, demonstrating certified readiness for enterprise AI solutions.',
    skills: ['Machine Learning', 'Deep Learning', 'MindSpore', 'ResNet-50', 'ModelArts', 'Python']
  },
  {
    id: 'network-layer-protocols',
    title: 'Basics of Network Layer Protocols',
    issuer: 'Huawei Technologies',
    date: 'Dec 2025 – Dec 2027',
    category: 'Certification',
    description: 'Fundamental network infrastructure concepts, IPv4/IPv6 addressing schemes, packet forwarding mechanisms, and routing protocol operation. Robust technical foundation for diagnosing packet-level bottlenecks, routing anomalies, and multi-subnet networks.',
    skills: ['Computer Networks', 'Network Layer Protocols', 'IPv4 / IPv6', 'Packet Forwarding', 'Routing Protocols']
  },
  {
    id: 'huawei-ict-competition-1st',
    title: '1st Place Winner – Huawei ICT Competition 2025–2026 (National Final, Computing Track)',
    issuer: 'Huawei Technologies Indonesia',
    date: 'Dec 2025',
    score: '1st Place Winner',
    category: 'Award',
    description: 'Outperformed national university teams across Indonesia by solving advanced networking and cloud-computing challenges, demonstrating strong technical execution and problem-solving under competition environments.',
    skills: ['Computing Track', 'Networking & Cloud', 'Advanced Problem Solving', 'High Performance Computing'],
    docImage: '/images/huawei-network-self.png',
    gallery: [
      {
        url: '/images/huawei-network-self.png',
        title: 'Huawei ICT Competition 1st Place Award Ceremony',
        caption: 'Dian Raisa Gumilar receiving the 1st Place National Winner recognition at the Huawei ICT Competition.'
      },
      {
        url: '/images/huawei-network-team.png',
        title: 'National Competition Delegation',
        caption: 'Delegation team celebrating 1st Place Victory in the National Final.'
      }
    ]
  },
  {
    id: 'cum-laude-honors',
    title: 'Graduated with Honors (Cum Laude) – Bachelor of Informatics',
    issuer: 'Institut Teknologi Nasional Bandung (Itenas)',
    date: 'Sep 2026',
    score: 'GPA 3.58 / 4.00',
    category: 'Award',
    description: 'Awarded Cum Laude honors upon completing the Bachelor of Informatics degree with specialization in Artificial Intelligence, Machine Learning, Deep Learning, and Computer Networks.',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Computer Networks']
  }
];

export const publications: PublicationItem[] = [
  {
    id: 'collab-identifier-journal',
    title: 'Collab Identifier: A Prototype for Uncovering Thematic Research Collaboration Opportunities',
    venue: 'Emerald Publishing — Library Hi Tech (Indexed International Journal)',
    date: '10/2026',
    type: 'Journal',
    description: 'Authored the peer-reviewed research paper introducing an NLP- and BERTopic-driven framework to uncover latent research domains and potential cross-institutional collaborations.'
  },
  {
    id: 'bertopic-hkg-conference',
    title: 'Integrating BERTopic and Heterogeneous Knowledge Graphs for Research Recommendation',
    venue: 'IEEE — The 13th International Conference on Computer, Control, Informatics, and its Applications (IC3INA)',
    date: '10/2026',
    type: 'Conference',
    description: 'Co-authored and presented research on designing a temporal collaboration recommendation architecture combining BERTopic with Heterogeneous Knowledge Graphs.'
  },
  {
    id: 'hki-collab-identifier',
    title: 'Registered Software Copyright (HKI): Collab Identifier',
    venue: 'Directorate General of Intellectual Property (DJKI), Ministry of Law and Human Rights RI',
    date: '06/2025',
    type: 'Copyright',
    description: 'Awarded official intellectual property protection for the computer software "Collab Identifier", an analytical platform bridging NLP and Library & Information Science (LIS) to evaluate cross-institutional research synergies.'
  }
];
