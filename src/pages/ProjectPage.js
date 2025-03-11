import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './ProjectPage.css';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === id);
    setProject(foundProject);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  // Breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 2, // 3 columns on desktop
    768: 1,     // 2 columns on tablet
    480: 1      // 1 column on mobile
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  }

  if (!project) {
    return <div className="error">Project not found</div>;
  }

  return (
    <div className="project-page">
      <div className="project-header">
        <h1>{project.title}</h1>
        <h3 className="project-category">{project.category}</h3>
      </div>

    {/* Don't show hero image for films */}
    {/* Skip to player -- with a thumbnail */}
      { project.mainImage && (
        <div className="project-main-image">
          <img
            src={project.mainImage}
            alt={project.title}
            // onError={(e) => {
            //   e.target.src = "/api/placeholder/800/500";
            //   e.target.alt = "Project image placeholder";
            // }}
          />
        </div>
      )}

      { project.youTubeVideo && (
        <div class="video-container">
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${project.youTubeVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      )}

      <div className="project-content">
        <div className="project-description">
          { project.fullDescription }
        </div>
        <div className="project-meta">
          {project.toolkit && (
            <div className="meta-section">
              <h3>Toolkit</h3>
              <ul>
                {project.toolkit.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {project.client && (
            <div className="meta-section">
              <h3>Client</h3>
              <p>{project.client}</p>
            </div>
          )}
        </div>
      </div>
      
      { project.imageGallery && (
        <div className="project-image-gallery">
          <Masonry
            key={ project.category }
            breakpointCols={project.imageGalleryCols || breakpointColumnsObj }
            className="masonry-grid"
            columnClassName="projecct-image-gallery-masonry-grid-column"
          >
            {project.imageGallery.map(image => (
              <img src={image} />
            ))}
          </Masonry>
        </div>
      )}

      <div className="navigation-links">
        <Link to="/">← Back to projects</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;