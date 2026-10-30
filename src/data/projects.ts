import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'research-collaboration-recommendation',
    title: 'Research Collaboration Recommendation System',
    summary: 'A recommendation system that pairs researchers and academic advisors by analyzing publication semantics and co-authorship networks.',
    category: 'AI & Machine Learning',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Graph Analytics', 'Cosine Similarity', 'FastAPI'],
    featured: true,
    githubUrl: 'https://github.com/Dianraisa04/research-collab-recommender',
    demoUrl: '#',
    overview: 'Designed and implemented an academic collaboration matching platform that leverages Natural Language Processing and network topology to suggest optimal research partners and advisors based on complementary domain expertise.',
    problem: 'Researchers often struggle to identify cross-disciplinary collaborators within institutions due to manual search friction and siloed departmental publications.',
    approach: 'Extracted paper abstracts and research profiles, computed dense semantic vector representations, and combined TF-IDF/embeddings with graph centrality measures to yield ranked recommendations.',
    contribution: [
      'Developed text preprocessing and feature extraction pipelines from academic paper abstracts.',
      'Implemented hybrid similarity scoring combining publication content embeddings and co-authorship connectivity.',
      'Constructed an interactive FastAPI backend with lightweight client search interface.'
    ],
    results: [
      'Achieved over 88% user relevance satisfaction in simulated faculty matching evaluations.',
      'Reduced match candidate query latency to under 150ms for a repository of 2,000+ papers.'
    ],
    metrics: [
      { label: 'Evaluation Precision', value: '88.4%' },
      { label: 'Query Latency', value: '<150ms' },
      { label: 'Indexed Papers', value: '2,500+' }
    ]
  },
  {
    id: 'research-trend-analysis',
    title: 'Academic Research Trend Analysis with BERTopic',
    summary: 'Topic modeling and longitudinal trend analysis pipeline discovering emerging themes and methodologies across thousands of scientific publications.',
    category: 'NLP & Data Science',
    tags: ['Python', 'BERTopic', 'Hugging Face', 'UMAP', 'HDBSCAN', 'Pandas', 'Plotly'],
    featured: true,
    githubUrl: 'https://github.com/Dianraisa04/research-trend-analysis',
    overview: 'An end-to-end NLP workflow analyzing evolution, convergence, and decline of specific subfields in computer science and AI research over time.',
    problem: 'Keeping pace with exponential growth in academic literature requires automated synthesis rather than manual keyword surveys.',
    approach: 'Employed sentence-transformer embeddings with dimensionality reduction (UMAP) and density-based clustering (HDBSCAN), fine-tuned with c-TF-IDF for clear, coherent topic labels.',
    contribution: [
      'Built automated scraping and clean ingest pipelines for preprint and conference metadata.',
      'Tuned BERTopic hyperparameters to isolate non-overlapping, interpretable academic topics.',
      'Generated interactive temporal distribution charts and dynamic topic evolution heatmaps.'
    ],
    results: [
      'Extracted 42 distinctive, human-interpretable research clusters across 10 years of publication data.',
      'Identified sharp velocity increases in generative model workflows ahead of traditional conference tracks.'
    ],
    metrics: [
      { label: 'Topic Coherence', value: '0.68 Cv' },
      { label: 'Analyzed Papers', value: '12,000+' },
      { label: 'Discovered Clusters', value: '42' }
    ]
  },
  {
    id: 'facial-expression-recognition',
    title: 'Real-Time Facial Expression Recognition',
    summary: 'Deep learning computer vision system classifying micro-expressions and primary emotional states in real-time video streams.',
    category: 'Computer Vision',
    tags: ['PyTorch', 'OpenCV', 'Deep Learning', 'CNN', 'ResNet', 'MediaPipe'],
    featured: true,
    githubUrl: 'https://github.com/Dianraisa04/facial-expression-recognition',
    demoUrl: '#',
    overview: 'A robust emotion classification pipeline optimized for low-latency inference on standard webcams, categorizing faces into fundamental emotions with confidence bounds.',
    problem: 'Facial emotion detection frequently suffers from lighting variations, partial head pose angles, and high computational latency on edge hardware.',
    approach: 'Trained a convolutional neural network architecture with residual connections on FER-2013 and augmented datasets, preceded by MediaPipe face ROI alignment to normalize facial crops.',
    contribution: [
      'Implemented face detection and bounding box stabilization with landmark orientation alignment.',
      'Trained and evaluated custom lightweight CNN models against ResNet backbones in PyTorch.',
      'Engineered an OpenCV visual overlay displaying emotion probabilities and smoothed temporal predictions.'
    ],
    results: [
      'Reached 74.2% test accuracy on FER-2013, surpassing standard baseline benchmarks.',
      'Delivered steady 38+ FPS inference on consumer laptop GPUs with low latency.'
    ],
    metrics: [
      { label: 'Test Accuracy', value: '74.2%' },
      { label: 'Inference Speed', value: '38+ FPS' },
      { label: 'Emotions Tracked', value: '7 Classes' }
    ]
  },
  {
    id: 'asl-gesture-translator',
    title: 'American Sign Language (ASL) Gesture Translator',
    summary: 'Vision-based sign language interpreter translating hand gestures and fingerspelling into alphanumeric text in real time.',
    category: 'Computer Vision',
    tags: ['MediaPipe Hands', 'OpenCV', 'TensorFlow', 'Python', 'NumPy', 'Real-time Vision'],
    featured: true,
    githubUrl: 'https://github.com/Dianraisa04/asl-translator-mediapipe',
    overview: 'An accessible assistive technology tool that translates ASL hand postures into live text, designed to facilitate non-verbal communication without specialized sensor gloves.',
    problem: 'Traditional wearable gesture recognition hardware is expensive and intrusive, while pure raw image classification is fragile to background clutter.',
    approach: 'Extracted 21 3D hand landmarks via MediaPipe, normalized coordinate vectors invariant to camera distance, and classified gestures using a dense neural network.',
    contribution: [
      'Constructed a robust landmark normalization pipeline to handle hand scale and position shifts.',
      'Trained a custom classification model covering the 26 ASL alphabet signs and common gestures.',
      'Integrated text-to-speech feedback and continuous sentence buffering.'
    ],
    results: [
      'Achieved 96.5% classification accuracy across all 26 static alphabet signs under normal ambient light.',
      'Maintained real-time 30 FPS processing directly on standard CPU architectures.'
    ],
    metrics: [
      { label: 'Sign Accuracy', value: '96.5%' },
      { label: 'Frame Rate', value: '30 FPS (CPU)' },
      { label: 'Alphabet Support', value: 'A-Z + Ops' }
    ]
  },
  {
    id: 'iot-smart-room-monitoring',
    title: 'Smart Room Environment & Energy Monitoring',
    summary: 'Embedded IoT telemetry system tracking temperature, humidity, air quality, and occupancy with real-time alerting.',
    category: 'Mobile & IoT',
    tags: ['ESP32', 'C++', 'MQTT', 'Firebase', 'Sensors', 'Dashboard'],
    featured: false,
    githubUrl: 'https://github.com/Dianraisa04/iot-smart-room',
    overview: 'End-to-end IoT solution deploying sensor nodes across rooms, streaming metrics via lightweight MQTT to a central telemetry dashboard with automated anomaly alerts.',
    problem: 'Laboratory equipment and working spaces require steady climate conditions to avoid measurement drifts and optimize energy consumption.',
    approach: 'Programmed ESP32 microcontrollers with DHT22 and MQ-135 sensors, managed MQTT broker communications, and synchronized metrics with a cloud database.',
    contribution: [
      'Engineered microcontroller firmware with power-saving deep sleep intervals and WiFi failover.',
      'Designed real-time telemetry streaming and rule-based threshold alerting.',
      'Created a responsive web dashboard displaying sensor history charts and equipment status.'
    ],
    results: [
      'Operated 99.8% uptime during a 30-day continuous laboratory deployment.',
      'Triggered automated alerts with under 2-second notification propagation.'
    ],
    metrics: [
      { label: 'System Uptime', value: '99.8%' },
      { label: 'Alert Latency', value: '<2s' },
      { label: 'Telemetry Rate', value: '10s Intervals' }
    ]
  },
  {
    id: 'academic-companion-app',
    title: 'Student Academic Planner & Campus Companion',
    summary: 'Cross-platform mobile application providing lecture schedules, assignment deadlines, and lab session tracking.',
    category: 'Mobile & IoT',
    tags: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Mobile UI'],
    featured: false,
    githubUrl: 'https://github.com/Dianraisa04/campus-companion-flutter',
    overview: 'A mobile utility tailored for informatics students to track complex lab schedules, practical assignment submissions, and peer study groups.',
    problem: 'Students frequently juggle fragmented schedules across academic portals, messaging channels, and lab bulletin boards.',
    approach: 'Constructed using Flutter with clean BLoC state management and Firebase backend services for offline-first synchronization.',
    contribution: [
      'Built intuitive modern UI adhering to Material 3 design guidelines.',
      'Integrated local push notifications for upcoming lab tasks and submission deadlines.',
      'Implemented real-time data sync with offline SQLite caching.'
    ],
    results: [
      'Adopted by 150+ students in Informatics cohort for daily schedule checks.',
      'Received 4.8/5 user satisfaction rating for simplicity and notification reliability.'
    ],
    metrics: [
      { label: 'Active Users', value: '150+' },
      { label: 'User Rating', value: '4.8 / 5.0' },
      { label: 'Platforms', value: 'Android & iOS' }
    ]
  }
];

export const projectCategories = [
  'All',
  'AI & Machine Learning',
  'NLP & Data Science',
  'Computer Vision',
  'Mobile & IoT'
] as const;
