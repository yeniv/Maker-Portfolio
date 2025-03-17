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
    { id: 'all', label: 'Tristan 🍕' },
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
        <a target="_blank" href="/tristan-viney-resume.pdf" download>CV<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="currentColor" />
          <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="currentColor" />
        </svg></a>
      </nav>
    </header>
  );
};

export default Header;