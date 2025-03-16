import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './ProjectPage.css';
import '../components/Header.css';
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
    return <p className="error">Project not found</p>;
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
        <div className="video-container">
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${project.youTubeVideo}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      )}

      <div className="project-content">
        <div className="project-description">
          { project.fullDescription }
        </div>
        <div className="project-meta">
          {project.buttons && (
            <div className="project-buttons">
              {
                project.buttons.map(p => (
                  <a className='button' target="_blank" rel="noreferrer" href={p[1]}>{p[0]}</a>
                ))
              }
            </div>
          )}
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
            breakpointCols={ breakpointColumnsObj }
            className="masonry-grid"
            columnClassName="projecct-image-gallery-masonry-grid-column"
          >
            {project.imageGallery.map(image => (
              <img src={image} alt=''/>
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