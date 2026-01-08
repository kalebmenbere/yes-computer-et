import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Shop" },
    { path: "/services", label: "Repairs" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
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
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
              <span className="link-indicator"></span>
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="navbar-actions">
          <Link to="/contact" className="nav-cta-button">
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
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mobile-cta-btn" 
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}