import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Shop" },
    { path: "/services", label: "Repairs" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar-component ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link 
            to="/" 
            className="navbar-logo"
            onClick={handleNavClick}
          >
            <FaLaptopCode className="logo-icon" />
            <div className="logo-text">
              <span className="logo-accent">YES</span>
              <span className="logo-main">COMPUTER</span>
              <span className="logo-country">ET</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {item.label}
              <span className="link-indicator"></span>
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="navbar-actions">
          <Link 
            to="/contact" 
            className="navbar-cta-button"
            onClick={handleNavClick}
          >
            Get Support
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mobile-cta-btn"
            onClick={handleNavClick}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}