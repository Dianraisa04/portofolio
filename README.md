# Dian Raisa — Portfolio Website

A personal portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, designed with a **Muted Sage Green Tech** visual identity.

---

## 🎨 Visual Identity & Theme Palette

| Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Main Background** | Soft Sage Gray | `#E8ECE5` | Overall page background & canvas |
| **Primary Text** | Charcoal Green | `#29332D` | Headings, titles, high-contrast text |
| **Secondary Text**| Gray Green | `#5D665D` | Descriptions, metadata, subtitles |
| **Accent** | Forest Green | `#45634F` | CTAs, active pills, links, hover states |
| **Card Surface** | Off White | `#F6F7F3` | Project cards, highlights, containers |
| **Border** | Muted Sage | `#CDD5CA` | Card borders, dividers, subtle outlines |

**Typography**:
- **Headings**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Body & Navigation**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 📁 Project Architecture & Data Decoupling

Content is decoupled from UI components so you can update projects, experience, skills, and certifications without editing JSX/TSX layout code:

```
src/
├── components/          # Reusable UI sections
│   ├── Navbar.tsx       # Brand logo "dian.raisa", responsive nav & resume link
│   ├── Hero.tsx         # Headline, concise summary, status badge & CTAs
│   ├── About.tsx        # ITENAS education, research background & mentorship
│   ├── Projects.tsx     # 2-column grid with category filters & hover elevation
│   ├── ProjectModal.tsx # Detailed case-study modal with problem/approach/metrics
│   ├── Experience.tsx   # Vertical timeline (ML Lab Assistant, BRIN, ITENAS)
│   ├── Skills.tsx       # Categorized badges (no percentage meters)
│   ├── Certifications.tsx # HCIA-AI (960/1000) & Huawei ICT Competition
│   ├── Contact.tsx      # Email copy pill, direct LinkedIn, GitHub, Resume links
│   └── Footer.tsx       # Smooth back-to-top, copyright & social links
├── data/                # Decoupled content data files
│   ├── projects.ts      # 4 core projects + IoT / Mobile works
│   ├── experience.ts    # Chronological career & academic journey
│   ├── skills.ts        # Categorized tools, libraries & frameworks
│   └── certifications.ts# Professional credentials & awards
├── types/
│   └── index.ts         # TypeScript interfaces
├── App.tsx              # Main application page assembler
├── index.css            # Tailwind directives & theme base styles
└── main.tsx             # React DOM root entry
public/
└── resume.pdf           # Downloadable/viewable PDF resume
```

---

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Local Preview of Build
```bash
npm run preview
```

---

## 🛠️ Key Projects Featured
1. **Research Collaboration Recommendation System** (NLP, Graph Analytics, Cosine Similarity, FastAPI)
2. **Academic Research Trend Analysis with BERTopic** (BERTopic, Transformers, UMAP, HDBSCAN)
3. **Real-Time Facial Expression Recognition** (PyTorch, OpenCV, CNN / ResNet, MediaPipe)
4. **American Sign Language (ASL) Gesture Translator** (MediaPipe Hands, OpenCV, TensorFlow)
