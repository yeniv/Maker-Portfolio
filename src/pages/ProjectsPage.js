import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import './ProjectsPage.css';
import Lightbox from '../components/Lightbox';

const ProjectsPage = () => {
  const { category } = useParams();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    startIndex: 0,
    images: []
  });

  useEffect(() => {
    // Filter projects based on the selected category
    // Only show featured projects if the category is all 
    if (!category || category === 'all') {
      setFilteredProjects(projectsData.filter(project => project.featured));
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  }, [category]);

  const defaultBreakpointColumns = {
    default: 3 , // 3 columns on desktop
    768: 2,     // 2 columns on tablet
    480: 1      // 1 column on mobile
  };

  const portraitBreakpointColumns = {
    default: 3 , // 3 columns on desktop
    950: 3,     // 2 columns on tablet
    700: 2,     // 2 columns on tablet
    480: 1      // 1 column on mobile
  };

  // Function to open lightbox for portrait category
  const openPortraitLightbox = (portraitId) => {
    // Get all portrait projects
    const portraitProjects = projectsData.filter(p => p.category === 'portraits');

    // Create array of portrait images for the lightbox
    const portraitImages = portraitProjects.map(p => p.mainImage);

    // Find the index of the clicked portrait
    const clickedIndex = portraitProjects.findIndex(p => p.id === portraitId);

    // Open lightbox
    setLightbox({
      isOpen: true,
      startIndex: clickedIndex >= 0 ? clickedIndex : 0,
      images: portraitImages
    });
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
  };

  return (
    <div className={`projects-page ${category}`}>
      <Masonry
        key={category || 'all'}
        breakpointCols={category == 'portraits' ? portraitBreakpointColumns : defaultBreakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onPortraitClick={openPortraitLightbox}
          />
        ))}
      </Masonry>

      {/* Lightbox for portrait images */}
      {lightbox.isOpen && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.startIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default ProjectsPage;