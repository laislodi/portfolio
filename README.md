# Portfolio

This is a personal portfolio website built with React to showcase projects, skills, and experience. The site is designed to provide an interactive and visually appealing experience while ensuring responsiveness and performance.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [React Fundamentals Used](#react-fundamentals-used)
- [CSS Details](#css-details)
- [Installation and Setup](#installation-and-setup)
- [Deployment](#deployment)
- [License](#license)

## Overview
The portfolio consists of multiple sections, each highlighting different aspects of my work and expertise. The website is structured as a single-page application (SPA) with smooth scrolling and interactive components.

## Features
- Responsive design
- Smooth scrolling navigation
- Dynamic project showcase
- Contact form
- Theming and animations

## Project Structure
<details>
   <summary>Click here to see the Project Structure</summary>

```
portfolio/
|-- public/
│   │-- Experience-dark.png
│   │-- Experience-light.png
│   │-- logo-purple-sm.png
│   │-- logo-purple.png
│   │-- TechSkills-light.png
│   │-- thumbnail-dark.png
│   │-- thumbnail-light.png
│-- src/
│   │-- assets/
│   │   |-- data/
│   │   |   |-- data.jsx
│   │   |   |-- resume.jsx
│   │   |-- images/
│   │   |   |-- apollo.png
│   │   |   |-- bash-shell-logo.png
│   │   |   |-- bootstrap.png
│   │   |   |-- confluence.svg
│   │   |   |-- css3.png
│   │   |   |-- django.png
│   │   |   |-- docker-logo.png
│   │   |   |-- empathy.svg
│   │   |   |-- feedback.svg
│   │   |   |-- git-logo.png
│   │   |   |-- github-logo.png
│   │   |   |-- graphql-query.png
│   │   |   |-- html5.png
│   │   |   |-- investigating.svg
│   │   |   |-- java-logo.png
│   │   |   |-- javascript.png
│   │   |   |-- jenkins-logo.png
│   │   |   |-- jest.svg
│   │   |   |-- jira.svg
│   │   |   |-- knowledge-share.svg
│   │   |   |-- logo-purple.png
│   │   |   |-- mysql.png
│   │   |   |-- postgresql-logo.png
│   │   |   |-- python-logo.png
│   │   |   |-- react-logo.png
│   │   |   |-- restfull-api.png
│   │   |   |-- self-motivated.svg
│   │   |   |-- soft-skill-mentorship.png
│   │   |   |-- soft-skill-creativity-innovation.png
│   │   |   |-- soft-skill-communication.png
│   │   |   |-- spring-framework.png
│   │   |   |-- tailwind.svg
│   │   |   |-- typescript.png
│   │   |   |-- unix.png
│   │-- components/
│   │   │-- Education/
│   │   |   |-- Education.jsx
│   │   |   |-- Education.css
│   │   |   |-- Education.test.jsx
│   │   │-- Experience/
│   │   |   |-- Experience.jsx
│   │   |   |-- Experience.css
│   │   |   |-- Experience.test.jsx
│   │   │-- Footer/
│   │   |   |-- Footer.jsx
│   │   |   |-- Footer.css
│   │   |   |-- Footer.test.jsx
│   │   │-- Header/
│   │   |   |-- Header.jsx
│   │   |   |-- Header.css
│   │   |   |-- Header.test.jsx
│   │   │-- Menu/
│   │   |   |-- Menu.jsx
│   │   |   |-- Menu.css
│   │   |   |-- Menu.test.jsx
│   │   │-- Projects/
│   │   |   |-- Projects.jsx
│   │   |   |-- Projects.css
│   │   |   |-- Projects.test.jsx
│   │   │-- Skills/
│   │   |   |-- store
│   │   |   |   |-- filter-content.jsx
│   │   |   |-- Filter.jsx
│   │   |   |-- FilterOptions.jsx
│   │   |   |-- SoftSkills.jsx
│   │   |   |-- SoftSkills.css
│   │   |   |-- SoftSkills.test.jsx
│   │   |   |-- TechSkills.jsx
│   │   |   |-- TechSkills.css
│   │   |   |-- TechSkills.test.jsx
│   │-- App.jsx
│   │-- index.jsx
│   │-- index.css
│   │-- setupTests.js
│-- .gitignore
│-- index.html
│-- package.json
│-- README.md
│-- tsconfig.json
│-- vite.config.js
```
</details>

## React Fundamentals Used
- **Functional Components**: Each section of the portfolio is structured as a functional component (e.g., `Hero.js`, `About.js`, `Projects.js`).
- **Props**: Used to pass data dynamically to reusable components.
- **State Management**: `useState` is used for handling UI state (e.g., toggling navigation menu).
- **React Hooks**: `useEffect` is used for side effects like animations.
- **Event Handling**: Handlers for buttons, form submissions, and navigation interactions.
- **React Router**: Used to manage navigation smoothly across different sections of the site.

## CSS Details
The styling follows a modular approach with separate CSS files for each component. The key CSS techniques used include:
- **Flexbox & Grid**: Used to structure layouts and align elements responsively.
- **CSS Variables**: For consistent theming and color usage.
- **Animations & Transitions**: Smooth scrolling and hover effects using CSS `transition` and `keyframes`.
- **Media Queries**: Ensuring responsiveness across different screen sizes.

## Installation and Setup
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/laislodi/portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173/portfolio/` in your browser.

## Deployment
The portfolio can be deployed using services like Vercel or Netlify. To build for production, run:
```bash
npm run build
```

## License
This project is open-source and available under the MIT License.
