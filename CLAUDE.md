# Mohammed El Baraka - Portfolio - AI Agent Guidelines

This file provides critical context and guidelines for AI agents (like Claude) working on this project. Please review this before making any modifications to the codebase.

## 🏗️ Project Architecture & Stack
This is a lightweight, purely static frontend application. **Do not introduce heavy frameworks (like React, Vue, or Angular) or build tools (like Webpack or Vite) unless explicitly requested.**

*   **Core**: HTML5, Vanilla JavaScript (`app.js`), structured data (`data.js`).
*   **Styling**: Tailwind CSS (via CDN or pre-compiled) + Custom CSS (`style.css`).
*   **Third-party Libraries**: PDF.js (for rendering resumes and reports).

## 📁 Project Structure
- `index.html`: Main entry point. Semantic HTML structure.
- `app.js`: Core application logic (DOM manipulation, event listeners, PDF rendering, modals, multi-language switching logic).
- `data.js`: Centralized data store containing all localized strings, projects, and skills.
- `style.css`: Custom CSS for keyframe animations, specific typography, and glassmorphic effects that fall outside Tailwind utilities.

## 🛠️ Development Guidelines

### 1. Data and Content (i18n)
*   **Always** update `data.js` when adding or modifying text content. 
*   The project uses a custom multi-language system (English, French, Arabic, Spanish, German, Chinese, Portuguese). 
*   Ensure that any new text elements added to the UI are reflected across all supported languages in `data.js`.

### 2. Styling Rules
*   Prefer **Tailwind CSS** utility classes in `index.html` for layout, spacing, and basic typography.
*   Use `style.css` for complex UI components, custom animations, or overriding standard utilities.
*   Maintain the clean, modern, and tech-focused aesthetic (glassmorphism, subtle hover interactions).

### 3. JavaScript Logic
*   Keep `app.js` strictly Vanilla JS (ES6+).
*   Avoid adding unnecessary dependencies or npm packages.
*   Use clean DOM manipulation techniques.

### 4. Code Style & Formatting
*   Keep HTML semantic and accessible (use proper ARIA tags where necessary).
*   Format JavaScript cleanly and use descriptive variable names.
*   Preserve existing comments.

## 🚀 Running the Project
To test changes, you only need a local static server:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`.
