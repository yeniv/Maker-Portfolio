import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './ProjectPage.css';
import '../components/Header.css';
import { projectsData } from '../data/projectsData';
import Lightbox from '../components/Lightbox';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    startIndex: 0
  });

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === id);
    setProject(foundProject);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  // Breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 2, // 2 columns on desktop
    768: 1,     // 1 column on tablet
    480: 1      // 1 column on mobile
  };

  // Open lightbox with the clicked image
  const openLightbox = (index) => {
    setLightbox({
      isOpen: true,
      startIndex: index
    });
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
  };

  // Handle main image click
  const handleMainImageClick = () => {
    if (project.mainImage) {
      openLightbox(0);
    }
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

  // // Prepare images array for lightbox
  // let galleryImages = [];

  // // For portraits or projects with mainImage, include the main image
  // if (project.category === 'web-apps' && project.mainImage) {
  //   galleryImages = [project.mainImage];
  // }

  // // Add gallery images if available
  // if (project.imageGallery && project.imageGallery.length > 0) {
  //   galleryImages = [...galleryImages, ...project.imageGallery];
  // }
  
  let galleryImages = []

  if (project.imageGallery) {
    galleryImages = [...project.imageGallery]
  }

  if (project.mainImage) {
    galleryImages = [project.mainImage, ...galleryImages]
  }

  return (
    <div className="project-page">
      <div className="project-header">
        <h1>{project.title}</h1>
        <h3 className="project-category">{project.category}</h3>
      </div>

      {/* Main image - clickable to open lightbox */}
      {project.mainImage && (
        <div
          className="project-main-image lightbox-trigger"
          onClick={handleMainImageClick}
        >
          <img
            src={project.mainImage}
            alt={project.title}
          />
        </div>
      )}

      {/* YouTube video embed */}
      {project.youTubeVideo && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${project.youTubeVideo}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="project-content">
        <div className="project-description">
          {project.fullDescription}
        </div>
        <div className="project-meta">
          {project.buttons && (
            <div className="project-buttons">
              {
                project.buttons.map((p, index) => (
                  <a
                    key={index}
                    className='button'
                    target="_blank"
                    rel="noreferrer"
                    href={p[1]}
                  >{p[0]}</a>
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

      {/* Image gallery - each image clickable to open lightbox */}
      {project.imageGallery && (
        <div className="project-image-gallery">
          <Masonry
            key={project.category}
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="projecct-image-gallery-masonry-grid-column"
          >
            {project.imageGallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} gallery image ${index + 1}`}
                onClick={() => openLightbox(project.mainImage ? index + 1 : index)}
                className="lightbox-trigger"
              />
            ))}
          </Masonry>
        </div>
      )}

      <div className="navigation-links">
        <Link to="/">← Back to projects</Link>
      </div>

      {/* Lightbox component */}
      {lightbox.isOpen && galleryImages.length > 0 && (
        <Lightbox
          images={galleryImages}
          startIndex={lightbox.startIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default ProjectDetail;