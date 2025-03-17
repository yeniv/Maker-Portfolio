import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './ProjectCard.css';

const ProjectCard = ({ project, onPortraitClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use Intersection Observer to detect when card is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: .4, // Trigger when 40% of the card is visible
    rootMargin: '0px 0px 0px 0px' // Add some margin to trigger earlier
  });

  // Use an effect to set visibility with a slight delay to avoid flickering
  useEffect(() => {
    if (inView) {
      // Use a small timeout to ensure stable animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Handle click for portrait images
  const handlePortraitClick = (e) => {
    e.preventDefault();
    onPortraitClick(project.id);
  };

  return (
    <div
      ref={ref}
      className={`project-card ${project.category} ${isVisible ? 'visible' : ''}`}
      style={{ willChange: 'opacity, transform' }} // Optimize for animation performance
    >
      {/* For portrait category, pass click to parent component */}
      {project.category === 'portraits' ? (
        <a href="#" onClick={handlePortraitClick}>
          <div className="project-image-container">
            <p className="project-title">
              {project.title} · {project.category}
            </p>
            <img
              src={project.thumbnail}
              alt={project.title || 'Portrait'}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </a>
      ) : (
        /* For non-portrait categories, navigate to project detail page */
        <Link to={`/project/${project.id}`}>
          <div className="project-image-container">
            <p className="project-title">
              {project.title} · {project.category}
            </p>
            <img
              src={project.thumbnail}
              alt={project.title}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;