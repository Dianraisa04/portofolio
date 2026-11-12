import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'temporal-hkg-bertopic-collaboration-recommendation',
    title: 'Temporal Research Collaboration Recommendation with BERTopic & Heterogeneous Knowledge Graphs',
    summary: 'A large-scale scholarly recommendation framework combining BERTopic neural topic modeling with a Heterogeneous Knowledge Graph (149k nodes, 2.3M edges) and FastNode2Vec, strictly evaluated under a leak-free temporal link prediction protocol on 51,502 Scopus papers.',
    category: 'AI & Machine Learning',
    tags: ['BERTopic', 'Knowledge Graph', 'FastNode2Vec', 'Link Prediction', 'NLP', 'Temporal Evaluation', 'Python', 'Scopus'],
    featured: true,
    demoUrl: '#',
    overview: 'A large-scale scholarly recommendation system that maps topical relevance and structural co-authorship patterns from 51,502 Scopus-indexed Computer Science articles (2021–2025) into a heterogeneous knowledge graph of over 149k nodes, ranking unlinked collaborators through structural and graph representation fusion.',
    problem: 'Rapid publication volume makes manual collaborator identification difficult. Purely structural methods miss topically aligned researchers lacking shared contacts, text-only methods disregard collaboration topologies, and typical random edge splits introduce temporal data leakage that inflates performance estimates.',
    approach: 'Extracted 500 cohesive topics from publication titles and abstracts using BERTopic (Sentence-BERT, UMAP, HDBSCAN, c-TF-IDF). Constructed a heterogeneous knowledge graph comprising author, publication, and topic nodes linked by authorship, publication-topic, and co-authorship relations. Learned 128-dimensional node embeddings with FastNode2Vec. Candidate pairs sharing non-outlier topics were ranked via hybrid score fusion (0.4 embedding cosine similarity, 0.3 Adamic-Adar, 0.2 Jaccard, 0.1 Common Neighbors). Evaluated forecasting capabilities using a temporal link prediction setup (pre-2025 training vs. 2025 first-time collaborations) with architectural audits to isolate and correct representation leakage.',
    contribution: [
      'Engineered an end-to-end integration of contextual topic modeling and heterogeneous knowledge graphs over 51,502 Scopus publications.',
      'Designed a score-decomposable hybrid ranking scheme balancing topological and semantic signals.',
      'Established a leakage-controlled temporal evaluation methodology based on macro-averaged per-query ranking and empirically identified substantial metric inflation caused by embedding data leakage.'
    ],
    results: [
      'Generated top-20 prospective collaboration pairs exhibiting high thematic and structural proximity.',
      'Demonstrated that uncorrected temporal leakage inflated ROC-AUC to ~0.999, whereas retraining embeddings exclusively on historical data yielded an authentic, statistically robust ROC-AUC of 0.801 that significantly outperforms leak-free structural baselines (0.686).'
    ],
    metrics: [
      { label: 'ROC-AUC Score', value: '0.801', description: 'Composite model significantly outperforming structural baseline (0.686)' },
      { label: 'Ranking Recall@20', value: '> 0.99', description: 'High-recall top candidate retrieval vs. 0.373 structural baseline' },
      { label: 'Indexed Papers', value: '51,502', description: 'Scopus articles forming 149,275 graph nodes and 2,299,184 edges' },
      { label: 'Topic Coherence', value: '0.7148 Cv', description: '500 non-outlier topics with 0.655 topic diversity' }
    ]
  },
  {
    id: 'collab-identifier-bertopic-prototype',
    title: 'Collab Identifier: Research Collaboration Theme Discovery with BERTopic',
    summary: 'An interactive desktop and GUI analytical prototype combining BERTopic topic modeling, Cosine Similarity, and generative AI labeling (Mistral) to uncover latent thematic alignments and inter-institutional research collaboration opportunities.',
    category: 'NLP & Data Science',
    tags: ['BERTopic', 'NLP', 'Cosine Similarity', 'Research Intelligence', 'Topic Modeling', 'Python', 'Generative AI', 'PyQt'],
    featured: true,
    demoUrl: '#',
    overview: 'A comparative scientometric intelligence platform that models publication corpora from independent institutions separately, quantifies semantic topic proximity, and visualizes direct and complementary collaboration avenues accompanied by expert-validated topic labels.',
    problem: 'Discovering inter-institutional collaboration opportunities is challenging in interdisciplinary fields. Conventional bibliometric approaches (bibliographic coupling, citation analysis) are largely retrospective and reliant on explicit metadata, offering limited ability to uncover emerging opportunities from latent textual alignment.',
    approach: 'Processed Scopus abstracts from PRSDI-BRIN and UNP Kediri through independent BERTopic pipelines to preserve distinct institutional semantics. Computed cross-model thematic alignment via pairwise Cosine Similarity. Leveraged an LLM (Mistral API) to synthesize c-TF-IDF keyword distributions into concise academic labels. Categorized collaboration potential into direct and complementary themes with an interactive threshold, verified via retrospective validation by professional librarians and academic researchers.',
    contribution: [
      'Developed a modular NLP analytics pipeline supporting independent corpus modeling and cross-institutional thematic matching.',
      'Built an interactive GUI displaying coherence evaluations, topic distributions, similarity heatmaps, and keyword word clouds.',
      'Executed empirical threshold sensitivity analyses and validated AI-generated outputs through rigorous multi-criteria human assessment.'
    ],
    results: [
      'Identified coherent prospective collaboration themes across institutions while outperforming classical LDA in topic coherence.',
      'Empirical validation by 34 domain experts corroborated that top computationally aligned recommendations were academically feasible, relevant, and practically actionable.'
    ],
    metrics: [
      { label: 'Topic Coherence Cv', value: '+0.0886', description: 'BERTopic outperformed classical LDA on both PRSDI-BRIN and university corpora' },
      { label: 'Validation Reliability', value: '0.962 α', description: "High inter-rater reliability among 34 academic researchers (Cronbach's Alpha)" },
      { label: 'Feasibility Score', value: '4.18 / 5.0', description: 'Top collaboration theme rating by domain experts' }
    ]
  },
  {
    id: 'facial-expression-recognition',
    title: 'Real-Time Facial Expression Recognition',
    summary: 'Deep learning computer vision system classifying micro-expressions and primary emotional states in real-time video streams.',
    category: 'Computer Vision',
    tags: ['PyTorch', 'OpenCV', 'Deep Learning', 'CNN', 'ResNet', 'MediaPipe'],
    featured: true,
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
      { label: 'Test Accuracy', value: '74.2%', description: 'Evaluated on FER-2013 test benchmarks' },
      { label: 'Inference Speed', value: '38+ FPS', description: 'Real-time throughput on standard consumer GPU' },
      { label: 'Emotions Tracked', value: '7 Classes', description: 'Primary human affective emotional states' }
    ]
  },
  {
    id: 'asl-gesture-translator',
    title: 'American Sign Language (ASL) Gesture Translator',
    summary: 'Vision-based sign language interpreter translating hand gestures and fingerspelling into alphanumeric text in real time.',
    category: 'Computer Vision',
    tags: ['MediaPipe Hands', 'OpenCV', 'TensorFlow', 'Python', 'NumPy', 'Real-time Vision'],
    featured: true,
    demoUrl: '#',
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
      { label: 'Sign Accuracy', value: '96.5%', description: 'Tested across 26 alphabet postures in ambient conditions' },
      { label: 'Frame Rate', value: '30 FPS', description: 'Smooth real-time landmark processing on standard CPU' },
      { label: 'Alphabet Support', value: 'A-Z + Ops', description: 'Full static alphabet plus sentence space operations' }
    ]
  },
  {
    id: 'iot-smart-hydroponic-monitoring',
    title: 'IoT-Enabled Automated Hydroponic Monitoring and Control System',
    summary: 'An automated hydroponic infrastructure combining multi-sensor telemetry (pH, turbidity, temperature, humidity) with web-based real-time monitoring and remote actuator controls.',
    category: 'Mobile & IoT',
    tags: ['IoT', 'Microcontrollers', 'Web Dashboard', 'Sensors', 'Actuators', 'Automation', 'Telemetry'],
    featured: true,
    demoUrl: '#',
    image: '/images/projects/hydroponics/1.png',
    gallery: [
      '/images/projects/hydroponics/1.png',
      '/images/projects/hydroponics/2.png',
      '/images/projects/hydroponics/3.png'
    ],
    overview: 'An end-to-end cultivation management platform that captures vital environmental and water metrics, streams data as structured JSON, and allows remote control over actuators like DC pumps.',
    problem: 'Maintaining optimal nutrient and water parameters in hydroponics requires frequent, precise adjustments; manual monitoring is labor-intensive and prone to delayed corrective actions.',
    approach: 'Interfaced analog and digital sensors with a microcontroller, formatted telemetry into JSON payloads, and integrated a web dashboard to track environmental changes and trigger DC water pumps remotely.',
    contribution: [
      'Engineered the multi-sensor acquisition firmware for pH, turbidity, temperature, and humidity sensors.',
      'Structured lightweight JSON API payloads for reliable hardware-to-cloud telemetry streaming.',
      'Established bidirectional control between the cloud dashboard and physical DC water pump actuators.'
    ],
    results: [
      'Achieved continuous environmental visibility and reliable remote actuator triggering without requiring manual physical sampling.',
      'Successfully validated on live hydroponic setups with steady parameter regulation.'
    ],
    impacts: [
      { title: 'Maintenance Efficiency', description: 'Eliminates tedious manual water testing, drastically lowering human error in agricultural maintenance.' },
      { title: 'Crop Protection Benefit', description: 'Maintains chemical and physical water balance through immediate parameter visibility, preventing root stress and plant loss.' },
      { title: 'Comprehensive Telemetry', description: 'Delivers real-time telemetry across temperature, humidity, pH, and water turbidity directly to the operator dashboard.' }
    ]
  },
  {
    id: 'mobile-educational-quiz-app',
    title: 'Cloud-Integrated Mobile Educational Quiz Application',
    summary: 'A cross-platform educational assessment app leveraging Firebase Cloud Firestore and REST APIs for real-time question retrieval and seamless state management.',
    category: 'Mobile & IoT',
    tags: ['Mobile App', 'Firebase Firestore', 'REST API', 'Cloud Database', 'Education', 'Mobile UI'],
    featured: false,
    demoUrl: '#',
    image: '/images/projects/quiz-app/1.png',
    gallery: [
      '/images/projects/quiz-app/1.png',
      '/images/projects/quiz-app/2.png',
      '/images/projects/quiz-app/3.png',
      '/images/projects/quiz-app/4.png',
      '/images/projects/quiz-app/5.png'
    ],
    overview: 'A dynamic quiz platform designed to stream educational question banks from cloud endpoints and persistent Firestore collections, eliminating hardcoded content.',
    problem: 'Static quiz applications cannot update questions or curricula dynamically without requiring users to download complete application updates.',
    approach: 'Connected a mobile front-end to Firebase Cloud Firestore and remote APIs, decoupling application logic from question repositories to enable instant content management.',
    contribution: [
      'Architected the Firestore database collections and security rules.',
      'Implemented asynchronous API data consumers and offline-capable question caching.',
      'Built intuitive mobile evaluation flows with instant score feedback.'
    ],
    results: [
      'Delivered a responsive mobile evaluation interface capable of pulling and presenting live question updates seamlessly.',
      'Tested with multi-subject question pools with smooth transitions.'
    ],
    impacts: [
      { title: 'Content Agility', description: 'Empowers educators to add or revise question banks in real time via the cloud without mandating application reinstallation.' },
      { title: 'Learning Accessibility', description: 'Provides learners with a portable, frictionless self-assessment tool accessible anywhere on mobile devices.' },
      { title: 'Cloud-Connected Storage', description: 'Real-time synchronization ensures scores and progress are preserved safely across sessions.' }
    ]
  },
  {
    id: 'bm25-recipe-information-retrieval',
    title: 'Recipe Information Retrieval System Using BM25',
    summary: 'An efficient information retrieval engine designed to parse culinary documents, standardize unstructured text through NLP preprocessing, and deliver highly relevant recipe search results using the Okapi BM25 ranking function.',
    category: 'NLP & Data Science',
    tags: ['Information Retrieval', 'BM25', 'NLP', 'Text Processing', 'Python', 'Search Engine'],
    featured: false,
    demoUrl: '#',
    overview: 'A dedicated document management and retrieval system allowing users to ingest food recipe records and retrieve accurate culinary instructions with sub-second execution speeds.',
    problem: 'Unstructured culinary recipes with inconsistent naming conventions and formats cause significant search frictions, leading to low relevance and sluggish query response times in standard text search engines.',
    approach: 'Implemented automated document ingestion with schema validation, applied NLP preprocessing steps (tokenization, stopword filtering, and stemming), and indexed document frequencies using Okapi BM25 probabilistic relevance scoring.',
    contribution: [
      'Engineered the end-to-end document intake workflow with automated schema validation.',
      'Built the textual normalization and tokenization pipeline for culinary vocabulary.',
      'Implemented the core Okapi BM25 query-scoring and ranked retrieval engine.'
    ],
    results: [
      'Delivered consistent and accurate search retrieval over culinary corpora with high fault tolerance and low latency.',
      'Reduced search friction with structured ingredient and preparation step ranking.'
    ],
    impacts: [
      { title: 'Operational Efficiency', description: 'Eliminated manual search bottlenecks by providing instant, relevant document ranking across structured and semi-structured culinary data.' },
      { title: 'Sub-Second Query Latency', description: 'Maintained an average query execution time under 200 ms with sub-second index searches.' },
      { title: 'Data Integrity', description: 'Minimized ingestion failures and user query mismatches through automated file validation and standardized token normalization.' }
    ]
  },
  {
    id: 'iot-flood-detection-warning',
    title: 'Flood Detection and Early Notification System',
    summary: 'An embedded IoT disaster mitigation system utilizing an Arduino Uno, multi-level water sensors, and the Blynk platform to provide real-time water telemetry and multi-tier early warning notifications.',
    category: 'Mobile & IoT',
    tags: ['IoT', 'Arduino Uno', 'Blynk', 'Embedded C++', 'Sensors', 'Disaster Mitigation'],
    featured: false,
    demoUrl: '#',
    overview: 'A localized flood monitoring apparatus that continuously measures water elevation changes and broadcasts instant warnings through on-site hardware displays and mobile push alerts.',
    problem: 'Flooding causes severe property damage and human risks due to rapid water accumulation and the absence of immediate, accessible early-warning systems at the community level.',
    approach: 'Interfaced submersion sensors with an Arduino Uno microcontroller to continuously sample water levels, map signals into discrete risk categories, trigger LCD/LED indicators, and transmit push warnings via the Blynk platform.',
    contribution: [
      'Assembled the physical sensor-microcontroller circuit and waterproof housing.',
      'Programmed threshold categorization firmware with multi-stage warning logic.',
      'Configured localized audible/visual alerts and established cloud mobile telemetry via Blynk.'
    ],
    results: [
      'Successfully deployed an operational monitoring prototype that reliably triggers real-time alerts as water levels shift across designated thresholds.',
      'Delivered instant mobile notifications to residents before water reached hazardous elevations.'
    ],
    impacts: [
      { title: 'Community Risk Mitigation', description: 'Significantly shortens emergency response delays for local residents by issuing automated warnings before floodwaters breach danger levels.' },
      { title: 'Multi-Stage Alert Thresholds', description: 'Clear tiered monitoring: Safe (< 10 cm), Alert (20 cm), and Danger (>= 30 cm) with automated status transitions.' },
      { title: 'Round-the-Clock Usability', description: 'Enables remote 24/7 water level oversight, eliminating the hazard of manual physical inspections during severe downpours.' }
    ]
  },
  {
    id: 'pygame-seasonal-transformations',
    title: 'Applied Computer Graphics: Seasonal Changes Simulation',
    summary: 'An interactive 2D graphical simulation demonstrating seasonal transitions and weather dynamics using Pygame and core geometric affine transformations.',
    category: 'Software & Graphics',
    tags: ['Computer Graphics', 'Pygame', 'Python', 'Geometric Transformations', 'Simulation', 'Algorithms'],
    featured: false,
    demoUrl: '#',
    overview: 'An educational simulation modeling environmental shifts such as solar rotation, variable precipitation, and dynamic cloud movements using programmatic transformations.',
    problem: 'Understanding abstract mathematical transformations (rotation, translation, scaling) in computer graphics is challenging without interactive visual feedback.',
    approach: 'Implemented affine transformation matrices to manipulate graphic primitives and sprite assets, coordinating user interaction loops and weather state transitions using Python and Pygame.',
    contribution: [
      'Programmed mathematical transformation matrices for rotation, translation, and scaling of scene elements.',
      'Designed procedural particle systems for rain, snow, and dynamic lighting transitions.',
      'Implemented responsive user event handlers for real-time parameter tweaking.'
    ],
    results: [
      'Built a smooth, interactive educational program that illustrates graphics transformation concepts effectively on lightweight hardware.',
      'Maintained high FPS rendering using vectorized coordinates.'
    ],
    impacts: [
      { title: 'Educational Utility', description: 'Transforms abstract algebraic transformation principles into clear visual demonstrations of weather physics for learners.' },
      { title: 'Computational Efficiency', description: 'Delivers responsive frame rates and dynamic animation cycles without reliance on heavy third-party rendering engines.' },
      { title: 'Algorithmic Understanding', description: 'Provides clear programmatic examples of affine matrix operations applicable to game development and simulation.' }
    ]
  }
];

export const projectCategories = [
  'All',
  'AI & Machine Learning',
  'NLP & Data Science',
  'Computer Vision',
  'Mobile & IoT',
  'Software & Graphics'
] as const;
