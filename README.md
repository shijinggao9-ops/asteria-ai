<div align="center">

# ✨ ASTERIA

### AI Business Research Copilot

<p align="center">
An AI-powered business research platform for business students, case competitions, and researchers.
</p>

<p align="center">

<a href="https://asteria-weo179a96-shijinggao9-ops-projects.vercel.app/">
<img src="https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel"/>
</a>

<a href="https://github.com/shijinggao9-ops/asteria-ai">
<img src="https://img.shields.io/github/stars/shijinggao9-ops/asteria-ai?style=for-the-badge"/>
</a>

<img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs"/>

<img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript"/>

<img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss"/>

<img src="https://img.shields.io/badge/Ollama-Local_AI-green?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Gemini-AI-orange?style=for-the-badge"/>

</p>

English | [简体中文](README.zh-CN.md)

</div>

---

# 🚀 Overview

ASTERIA is an AI-powered Business Research Copilot designed specifically for business students, consulting case competition teams, and researchers.

Instead of switching between PDFs, search engines, spreadsheets, and AI chatbots, ASTERIA integrates the entire business research workflow into one intelligent workspace.

Users can upload research materials, organize evidence, conduct AI-powered business analysis, and generate consulting-style reports—all within a single platform.

---

# ✨ Features

- 📂 Research Workspace
- 📄 Intelligent PDF Parsing
- 🤖 AI-powered Business Analysis
- 📚 Evidence Library
- 📝 Research Brief
- 📋 Research Planning
- 🌍 English / Chinese Interface
- ☁️ Online Deployment (Vercel)
- ⚡ Local AI Support (Ollama)

---

# 🖥 Preview


## Dashboard

![Dashboard](./docs/dashboard.png)

---

## Workspace

![Workspace](./docs/workspace.png)

---

## AI Analysis

![Analysis](./docs/analysis.png)

---

# 🏗 System Architecture

```text
                 User
                   │
                   ▼
        Research Workspace
                   │
      ┌────────────┴────────────┐
      ▼                         ▼
Research Brief          Evidence Library
      │                         │
      └────────────┬────────────┘
                   ▼
             PDF Parser
                   ▼
          AI Analysis Engine
                   ▼
       Consulting-style Report
```

---

# ⚙ Tech Stack

| Category | Technology |
|-----------|------------|
| Frontend | Next.js · React · TypeScript |
| Styling | Tailwind CSS |
| AI | Ollama · Gemini API |
| Document | PDF Parser |
| Deployment | Vercel |
| Version Control | GitHub |

---

# 📂 Project Structure

```text
asteria-ai

├── frontend
│   ├── app
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── services
│   ├── types
│   └── utils
│
├── docs
│   ├── dashboard.png
│   ├── workspace.png
│   ├── analysis.png
│   └── architecture.png
│
├── README.md
├── README.zh-CN.md
└── LICENSE
```

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/shijinggao9-ops/asteria-ai.git
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🌐 Live Demo

**Online Preview**

https://asteria-weo179a96-shijinggao9-ops-projects.vercel.app/

---

# 🛣 Roadmap

- [x] Research Workspace
- [x] Project Management
- [x] PDF Parsing
- [x] AI Business Analysis
- [x] English / Chinese UI
- [x] Online Deployment
- [ ] Report Export (PDF)
- [ ] Multi-Agent Workflow
- [ ] Knowledge Base
- [ ] Team Collaboration

---

# 💡 Vision

ASTERIA aims to become an AI-native business research platform that empowers business students to focus on thinking rather than repetitive information collection.

Our goal is to bridge the gap between AI and business education by providing an intelligent, structured, and collaborative research experience.

---

# 👨‍💻 Author

**Shijing Gao**

Business School, Nanjing University

GitHub

https://github.com/shijinggao9-ops

---

# ⭐ Support

If you find ASTERIA helpful, consider giving this repository a ⭐.

It helps more people discover the project.
