# ✨ ASTERIA

### 面向商科学生的 AI 商业研究助手

[English](README.md) | 简体中文

---

## 🚀 项目简介

ASTERIA 是一款专为**商科学生、商业案例竞赛团队及科研人员**打造的 AI 商业研究平台。

它将商业研究过程中涉及的**项目管理、资料上传、PDF 阅读、AI 分析、研究规划和报告生成**整合到统一工作空间中，帮助用户更高效地完成商业分析任务。

传统商业研究往往需要在浏览器、PDF 阅读器、Excel、ChatGPT 等多个工具之间频繁切换，而 ASTERIA 希望提供一站式 AI Research Workspace，让研究流程更加智能、高效、有条理。

---

## ✨ 核心功能

- 📂 **Research Workspace** —— 商业研究工作区
- 📄 **PDF 文档解析** —— 自动提取 PDF 文本内容
- 🤖 **AI 商业分析** —— 基于 AI 生成咨询风格分析结果
- 📚 **Evidence Library** —— 统一管理研究资料
- 📝 **Research Brief** —— 定义研究背景与目标
- 📋 **Research Plan** —— 自动生成研究计划
- 🌍 **中英文界面切换**
- ☁️ **Vercel 在线部署**
- ⚡ **支持本地 AI（Ollama）与云端 AI（Gemini）**

---

# 🖥 项目预览


### Dashboard

![Dashboard](./docs/dashboard.png)

---

### Workspace

![Workspace](./docs/workspace.png)

---

### AI Analysis

![Analysis](./docs/analysis.png)

---

# 🏗 系统架构

```text
                用户
                  │
                  ▼
          Research Workspace
                  │
      ┌───────────┴───────────┐
      ▼                       ▼
Research Brief        Evidence Library
      │                       │
      └───────────┬───────────┘
                  ▼
             PDF Parser
                  ▼
          AI Analysis Engine
                  ▼
      Consulting-style Report
```

---

# 🛠 技术栈

| 分类 | 技术 |
|------|------|
| 前端 | Next.js、React、TypeScript |
| UI | Tailwind CSS |
| AI | Gemini API、Ollama |
| 文档处理 | PDF Parser |
| 部署 | Vercel |
| 版本管理 | GitHub |

---

# 📂 项目结构

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

# 🚀 快速开始

克隆仓库

```bash
git clone https://github.com/shijinggao9-ops/asteria-ai.git
```

安装依赖

```bash
npm install
```

启动开发环境

```bash
npm run dev
```

浏览器访问

```text
http://localhost:3000
```

---

# 🌐 在线体验

**Live Demo**

https://asteria-weo179a96-shijinggao9-ops-projects.vercel.app/

---

# 🛣 开发路线（Roadmap）

- [x] Research Workspace
- [x] 项目管理
- [x] PDF 文档解析
- [x] AI 商业分析
- [x] 中英文界面
- [x] 在线部署
- [ ] PDF 报告导出
- [ ] Multi-Agent 协同分析
- [ ] 知识库（Knowledge Base）
- [ ] 团队协作

---

# 💡 项目愿景

ASTERIA 希望成为面向商科领域的 AI 原生研究平台（AI-Native Business Research Platform）。

我们的目标并不是简单地接入大模型，而是构建一套围绕商业研究流程设计的智能工作空间，让用户将更多精力放在商业思考与决策，而不是重复的信息搜集与整理工作上。

未来，ASTERIA 将进一步支持知识库、多智能体协作、自动报告生成等能力，为商业教育、案例竞赛及学术研究提供更加智能的研究体验。

---

# 👨‍💻 作者

**高士景（Shijing Gao）**

南京大学 商学院

GitHub：

https://github.com/shijinggao9-ops

---

# ⭐ 支持项目

如果 ASTERIA 对你有所帮助，欢迎为本项目点一个 **⭐ Star**。

你的支持将成为项目持续迭代的重要动力！
