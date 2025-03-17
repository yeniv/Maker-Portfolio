import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [hoverBox, setHoverBox] = useState({ left: 0, width: 0, visible: false });
  const [hideNav, setHideNav] = useState(false)
  const navRef = useRef(null);

  // Categories for project filtering
  const categories = [
    { id: 'all', label: 'Tristan 🐝' },
    { id: 'web-apps', label: 'Web apps' },
    { id: 'ads', label: 'Ads' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'films', label: 'Films' }
  ];

  // Handle mouse movements for the hover effect
  const handleMouseMove = (e, item) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    setHoverBox({
      left: rect.left - navRect.left,
      width: rect.width,
      height: rect.height,
      visible: true
    });
  };

  const handleMouseLeave = () => {
    setHoverBox({ ...hoverBox, visible: false });
  };

  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setHideNav(true)
    } else {
      setHideNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])   

  // Check if we're on the home or projects page
  const isProjectsPage = location.pathname === '/' || location.pathname.startsWith('/projects');

  // Get the current category from the URL
  const currentCategory = location.pathname.split('/projects/')[1] || 'all';

  return (
    <header className="header">
      {/* Project category navigation */}
      <nav className="categories-nav" ref={navRef} onMouseLeave={handleMouseLeave}>
        {/* Hover box that follows mouse */}
        {hoverBox.visible && (
          <div
            className="hover-box"
            style={{
              left: `${hoverBox.left}px`,
              width: `${hoverBox.width}px`,
              height: `${hoverBox.height}px`,
            }}
          />
        )}

        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.id === 'all' ? '/' : `/projects/${category.id}`}
            className={isProjectsPage && currentCategory === category.id ? 'active' : ''}
            onMouseMove={handleMouseMove}
          >
            {category.label}
          </Link>
        ))}
      </nav>
      <nav className={`secondary-nav ${hideNav ? 'hide' : ''}`}>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        {/* <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link> */}
        <a target="_blank" href="/tristan-viney-resume.pdf" download>CV</a>
      </nav>
    </header>
  );
};

export default Header;