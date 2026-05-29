# Mohammed El Baraka - Portfolio

This repository contains the source code for my personal portfolio website, designed to showcase my skills, projects, and professional background.

## Architecture and Stack

The portfolio is built using a modern, lightweight frontend stack with a focus on high performance, accessibility, and clean design.

*   **HTML5 / Vanilla JavaScript**: The core structure and logic of the application rely on standard web technologies to ensure fast loading times and maximum browser compatibility.
*   **Tailwind CSS**: Used for rapid, utility-first styling to build a responsive and highly customizable user interface without the overhead of heavy component libraries.
*   **Custom CSS**: Dedicated stylesheets manage complex animations, glassmorphic effects, and specific typography rules that fall outside standard utility classes.
*   **PDF.js**: Integrated for seamlessly rendering and displaying project reports, presentations, and resume files natively within the browser, avoiding external redirects.

## Project Structure

The codebase is organized to separate data, logic, and presentation:

*   `index.html`: The main entry point containing the semantic HTML structure.
*   `style.css`: Custom CSS containing variables, keyframe animations, and advanced component styles.
*   `app.js`: The application logic handling DOM manipulation, modal interactions, PDF rendering, and smooth scrolling.
*   `data.js`: A centralized data store containing all localized strings, project descriptions, and static skill content. This separation allows for easy content updates without modifying the core logic.

## Key Features

*   **Multi-language Support**: A custom internationalization system built natively in JavaScript, supporting seamless switching between English, French, Arabic, Spanish, German, Chinese, and Portuguese without page reloads.
*   **Integrated Document Viewer**: Utilizing PDF.js to load documents directly inside application modals.
*   **Responsive Design**: Mobile-first approach using Tailwind CSS to ensure the layout adapts gracefully to any screen size.
*   **Modern Aesthetics**: Incorporates a clean, tech-focused design with subtle hover interactions and premium typography.

## Local Development

To run this project locally, you only need to serve the static files using a local web server.

1. Clone the repository:
   ```bash
   git clone https://github.com/mohammed-el-baraka/mohammed-el-baraka.github.io.git
   ```

2. Navigate to the directory:
   ```bash
   cd mohammed-el-baraka.github.io
   ```

3. Start a local server (using Python 3 as an example):
   ```bash
   python3 -m http.server 8000
   ```

4. Open your browser and navigate to `http://localhost:8000`.

## Deployment

The website is statically hosted on GitHub Pages, with seamless continuous deployment configured from the `main` branch. Any commits pushed to this branch will automatically trigger a build and update the live site.
