# Mohammed El Baraka — Portfolio Website

Welcome to the GitHub repository for my personal portfolio website! This site showcases my work, projects, and leadership roles as an engineering student specializing in Industrial Management and Data Science.

🔗 **Live Website:** [mohammed-el-baraka.github.io](https://mohammed-el-baraka.github.io)

---

## 🌟 About Me
I am an Industrial Management engineering student at the **Mohammed VI Polytechnic University (UM6P) - EMINES**. My academic background, rooted in intensive mathematics and physics preparation, drives me to solve complex real-world challenges by bridging the gap between engineering theory and practical application.

My main areas of interest and expertise include:
*   **Data Science & Machine Learning** (Predictive analytics, NLP, classification models)
*   **Operations Research & Optimization** (Linear programming, resource optimization)
*   **Software & Dashboards** (Python, Java, Power BI, VBA)
*   **Robotics & Computer Vision** (Image processing, 3D modeling)

---

## 🚀 Key Features

*   **🌍 Multi-lingual Support:** Switch between **English, Français, العربية, Español, 中文, and Português** seamlessly. Language choices are saved to `localStorage` for returning visits, and the layout supports right-to-left (RTL) rendering for Arabic.
*   **🤖 AI-Powered Explanations:** Integrates the **Google Gemini API** (`gemini-2.0-flash`) via serverless backend functions. Recruiters and visitors can click **"✨ Explain"** or **"✨ Summarize"** on any project to get an instant explanation tailored for non-technical audiences, or click on a skill badge to receive an industry-oriented explanation.
*   **📄 Integrated PDF Viewer:** Features an in-app overlay viewer to read project reports, presentations, and my resume directly, avoiding annoying external redirects.
*   **🎨 Premium Glassmorphism UI:** Built with custom CSS gradients, modern typography (Playfair Display and Lato), subtle micro-animations, and styled using Tailwind CSS for a responsive, futuristic dark-theme interface.

---

## 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3, JavaScript (ES6+), Tailwind CSS (via CDN)
*   **Serverless Backend:** Netlify Functions (Node.js)
*   **AI Integration:** Google Gemini API (`gemini-2.0-flash` model)
*   **Document Processing:** PDF.js (for extracting text from project files to contextualize Gemini prompts)

---

## 📂 Repository Structure

```text
├── index.html                  # Main webpage containing layout and translations
├── README.md                   # Repository documentation (this file)
├── my_resume.pdf               # Current resume file
├── site.webmanifest            # Web manifest for PWA/icons
├── favicon.ico / pngs          # Page icons and assets
├── me.png / me.jpg             # Profile pictures
├── netlify.toml                # Netlify configuration file
├── netlify/
│   └── functions/
│       └── gemini.js           # Serverless endpoint to interact securely with Gemini API
├── presentations/              # Project presentation files (PDF)
├── reports/                    # Detailed project report files (PDF)
└── qrcode.png                  # Contact details QR code
```

---

## 💻 Running Locally

To run the static frontend locally, you can use any simple HTTP server (e.g., Python's `http.server`, Live Server VS Code extension, or `http-server` npm package).

However, to use the **AI-powered features** (which require the serverless function), you should run the site using the **Netlify CLI**:

### 1. Prerequisites
Make sure you have Node.js installed, then install the Netlify CLI globally:
```bash
npm install -g netlify-cli
```

### 2. Clone the Repository
```bash
git clone https://github.com/mohammed-el-baraka/mohammed-el-baraka.github.io.git
cd mohammed-el-baraka.github.io
```

### 3. Set up Environment Variables
Create a `.env` file in the root directory and add your Gemini API Key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start the Dev Server
Run the project using Netlify Dev, which automatically boots up the frontend server and mounts the local serverless function:
```bash
netlify dev
```
The site will be available at `http://localhost:8888`.

---

## 📈 Featured Projects

1.  **Predictive Analytics for Student Mental Health:** Machine Learning models (Scikit-learn, NLTK) analyzing survey responses to classify stress, anxiety, and depression levels in students.
2.  **Red Fruit Production Optimization:** Linear programming optimization (Pulp, Python) to maximize yields and profits in agricultural greenhouses.
3.  **Bank Statement Integration with Power BI:** Interactive financial dashboard automating transaction parsing and data visualization.
4.  **Attacks Against Shared Module RSA:** Simulation and cryptanalysis of RSA cryptosystem weaknesses using SageMath and Python.
5.  **Oxygen Diffusion in Pulmonary Acinus:** Mathematical modeling and numerical solving (NumPy, SciPy) of 2D gas diffusion in lungs.
6.  **Robotics and Image Detection:** Robotic arm/car prototype with OpenCV computer vision and SolidWorks CAD modeling.

---

## 🤝 Connect with Me

*   **LinkedIn:** [/in/mohammed-el-baraka-151244302](https://www.linkedin.com/in/mohammed-el-baraka-151244302/)
*   **Instagram:** [@mohammed_el.baraka](https://www.instagram.com/mohammed_el.baraka/)
*   **X (Twitter):** [@mohammed__w4](https://x.com/mohammed__w4)
*   **Email:** [mohammed.elbaraka@emines.um6p.ma](mailto:mohammed.elbaraka@emines.um6p.ma)
*   **WhatsApp:** [+212 666-774426](https://wa.me/+212666774426)
