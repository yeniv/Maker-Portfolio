import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const { category } = useParams();
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Filter projects based on the selected category
    // Only show featured projects if the category is all 
    if (!category || category === 'all') {
      setFilteredProjects(projectsData.filter(project => project.featured));
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  }, [category]);

  // Breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 3, // 3 columns on desktop
    768: 2,     // 2 columns on tablet
    480: 1      // 1 column on mobile
  };

  return (
    <div className="projects-page">
      <Masonry
        key={category || 'all'}
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Masonry>
    </div>
  );
};

export default ProjectsPage;