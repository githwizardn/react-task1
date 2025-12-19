React Task 1: Component Props & Mapping
This is a Next.js project focused on mastering data flow between components using React props and the .map() function.

🚀 Project Overview
This project demonstrates how to pass arrays of data from a parent component (page.js) down to child components (Navbar and Footer). It features an extravagant glassmorphism design and is fully responsive for mobile devices.

Key Features
Dynamic Navigation: A navList array is passed to the Navbar and rendered dynamically.

Social Media Objects: A socialNetworks array containing objects (names and URLs) is passed to the Footer.

CSS Modules: Professional styling using scoped .module.css files to prevent class name conflicts.

Responsive Design: Mobile-first approach using CSS Media Queries to stack links on smaller screens.

Custom Brand: Updated metadata and a custom alien favicon icon.

🛠️ Getting Started
First, install the dependencies:

Bash

npm install
Then, run the development server:

Bash

npm run dev
Open http://localhost:3000 with your browser to see the result.

📁 Project Structure
src/app/page.js: The main entry point where data arrays are defined.

src/components/navbar/: Contains the Navbar logic and styles.

src/components/footer/: Contains the Footer logic and "extravagant" styles.

src/app/layout.js: The root layout handling fonts and global metadata.

🎓 Concepts Learned
Props: Passing data between components.

Array Mapping: Using {list.map()} to generate JSX elements.

Next.js Optimization: Leveraging next/font for performance.

Git Hygiene: Using .gitignore to keep the repository clean.
 