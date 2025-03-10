# Tristan Viney Portfolio

A clean, minimal personal portfolio website built with React.

## Features

- Responsive masonry layout for projects display
- Project filtering by category
- Interactive navigation with hover effects
- Page transitions and animations
- Project detail pages with custom routes
- Contact form with validation
- Clean and minimal design

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd tristan-viney-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` directory, ready to deploy.

## Project Structure

```
src/
├── components/      # Reusable components
│   ├── Header.js    # Main navigation component
│   └── ProjectCard.js  # Project card component
├── pages/           # Page components
│   ├── ProjectsPage.js   # Main projects listing page
│   ├── ProjectDetail.js  # Individual project page
│   ├── About.js      # About page
│   └── Contact.js    # Contact page
├── App.js           # Main app component
├── index.js         # Entry point
└── App.css          # Global styles
```

## Customization

### Adding Your Projects

Edit the `projectsData` array in `src/pages/ProjectsPage.js` to add your own projects. Each project should have the following structure:

```javascript
{
  id: 1,                      // Unique identifier
  title: 'Project Title',     // Project title
  category: 'web-apps',       // Category (web-apps, ads, portraits, films)
  image: '/images/project.jpg', // Project image path
  description: 'Short description' // Brief description
}
```

For more detailed project information, edit the `projectsData` array in `src/pages/ProjectDetail.js`.

### Customizing Styles

Global styles are defined in `src/App.css`. Component-specific styles are in their respective CSS files.

## Technologies Used

- React
- React Router
- React Masonry CSS
- Intersection Observer API for animations

## License

This project is licensed under the MIT License.