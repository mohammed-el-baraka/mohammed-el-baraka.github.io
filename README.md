# Mohammed El Baraka — Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live-Portfolio-7c3aed?style=for-the-badge&logo=google-chrome&logoColor=white)](https://mohammed-el-baraka.github.io)
[![Netlify Status](https://img.shields.io/badge/Netlify-Serverless_AI-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com)
[![Google Gemini](https://img.shields.io/badge/Gemini_3.6_Flash-AI_Assistant-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)

A modern, high-performance portfolio showcasing projects in **Industrial Management**, **Operations Research & Optimization**, **Machine Learning**, and **Biomedical Modeling**. Built with a lightweight, vanilla stack and enhanced by a serverless **AI Engineering Assistant** powered by Google Gemini 3.6 Flash.

---

## 🌟 Key Architecture & Features

### 1. 🤖 Serverless AI Engineering Assistant
Each engineering project features an interactive AI assistant that answers technical questions in real time:
* **Grounded Knowledge Base:** The AI dynamically ingests detailed technical markdown reports from [`projects/*.md`](projects/) into its prompt context to explain exact mathematical formulations (e.g. Linear Programs, 2D diffusion PDEs), optimization constraints, algorithms, and benchmark accuracy.
* **Serverless Execution:** Powered by Netlify Functions ([`netlify/functions/ai.js`](netlify/functions/ai.js)).
* **Zero API Key Leakage:** `GEMINI_API_KEY` is injected exclusively on the serverless backend via Netlify environment variables—never exposed to client browsers or committed to version control.
* **One-Click Analysis Chips & Freeform Input:**
  * `✨ How was this built?` (Methodology & tools)
  * `⚡ 3-Bullet Summary` (Executive summary with measurable KPIs)
  * `📐 Math & Algorithms` (Mathematical models, loss functions, PuLP LP formulations)
  * `📈 Results & Impact` (Validation metrics and business/engineering gains)
  * Custom question input bar for deep technical questions.

```
                    ┌────────────────────────────────────────┐
                    │ Visitor on Portfolio / Case Study Page │
                    └───────────────────┬────────────────────┘
                                        │
                         1. Asks question or clicks chip
                                        │
                                        ▼
             ┌──────────────────────────────────────────────────────┐
             │ POST /.netlify/functions/ai                          │
             │ Payload: { customPrompt, reportMarkdown, language }  │
             └──────────────────────────┬───────────────────────────┘
                                        │
                  2. Netlify Serverless Function (Backend)
                  • Reads process.env.GEMINI_API_KEY
                  • Injects project report as ground truth
                                        │
                                        ▼
             ┌──────────────────────────────────────────────────────┐
             │ Google Gemini 3.6 Flash API                          │
             │ Analyzes report & generates structured markdown      │
             └──────────────────────────┬───────────────────────────┘
                                        │
                  3. Returns formatted response to client
                                        │
                                        ▼
                    ┌────────────────────────────────────────┐
                    │ Rendered in Liquid Glass AI Modal / UI │
                    └────────────────────────────────────────┘
```

---

### 2. 📄 Dynamic Case Studies ([`project.html`](project.html))
Dedicated project case study pages loaded dynamically via URL parameter (e.g. `project.html?id=mental-health-analytics`):
* **Impact Metrics Badge:** Quick glance at project outcomes (e.g. `92.4% Classification Accuracy`, `+18.5% Margin Gain`).
* **Direct Action Hub:** Direct links to **GitHub Repository**, **Live Interactive Demo**, **Technical Report (PDF)**, and **Slides & Presentation**.
* **Integrated AI Q&A Assistant:** Real-time conversational interface specific to the selected project.
* **Seamless Pagination:** Next/Previous project footer controls.

---

### 3. 🗓️ Google Photos-Style Chronological Timeline
* Projects are sorted chronologically and grouped by year (`2024`, `2023`, etc.) with minimalist monospace date tags and category badges.

---

### 4. 🌍 7-Language Internationalization (i18n)
Native client-side language switching without page reloads, complete with country flags:
* 🇬🇧 **English** (EN)
* 🇫🇷 **Français** (FR)
* 🇲🇦 **العربية** (AR - with full RTL layout support)
* 🇪🇸 **Español** (ES)
* 🇩🇪 **Deutsch** (DE)
* 🇨🇳 **中文** (ZH)
* 🇧🇷 **Português** (PT)

---

### 5. 📑 Integrated Native PDF Viewer
* In-app document modals utilizing PDF.js for seamless viewing of project reports, presentation slide decks, and resume without external redirects.

---

## 🗂️ Project Structure

```text
├── index.html                   # Main landing page & portfolio overview
├── project.html                 # Dynamic project case study showcase template
├── style.css                    # Liquid glassmorphism, Aurora animations & typography
├── app.js                       # Frontend state, i18n switcher, AI modal & timeline rendering
├── data.js                      # Centralized metadata for projects, skills & 7 languages
│
├── netlify/
│   └── functions/
│       └── ai.js                # Serverless Node function for secure Gemini API calls
│
├── projects/                    # Technical markdown knowledge base for AI context
│   ├── mental-health-analytics.md
│   ├── red-fruit-optimization.md
│   ├── powerbi-dashboard.md
│   ├── rsa-cryptography.md
│   ├── biomedical-diffusion.md
│   └── robotics-vision.md
│
├── assets/                      # Documents (PDFs), images, icons, and logos
└── netlify.toml                 # Netlify serverless routing configuration
```

---

## 💻 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/mohammed-el-baraka/mohammed-el-baraka.github.io.git
cd mohammed-el-baraka.github.io
```

### 2. Run locally

#### Option A: Using Netlify CLI (Recommended to test Serverless AI)
```bash
# Install Netlify CLI if needed
npm install -g netlify-cli

# Run local development server with serverless functions
netlify dev
```

#### Option B: Using Python HTTP Server (Static preview)
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000` in your browser.

---

## ⚙️ Environment Variables (Netlify Deployment)

To enable live AI answers on your deployed site:
1. Open your **Netlify Dashboard** &rarr; select this site.
2. Go to **Site configuration** &rarr; **Environment variables**.
3. Add variable:
   * **Key:** `GEMINI_API_KEY`
   * **Value:** `your_google_gemini_api_key_here`

---

## 📬 Contact & Connect

* **Author:** Mohammed EL BARAKA
* **Education:** Industrial Management Engineering Graduate, EMINES — Université Mohammed VI Polytechnique (UM6P)
* **LinkedIn:** [mohammed-el-baraka-151244302](https://www.linkedin.com/in/mohammed-el-baraka-151244302/)
* **Email:** [mohammed.elbaraka@emines.um6p.ma](mailto:mohammed.elbaraka@emines.um6p.ma)
