import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTelegramPlane, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaLaptopCode
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <FaLaptopCode className="logo-icon" />
              <div className="logo-text">
                <span className="logo-accent">YES</span>
                <span className="logo-main">COMPUTER</span>
              </div>
            </Link>
            <p className="footer-desc">
              Your trusted partner for professional computer maintenance, 
              genuine hardware sales, and enterprise-grade tech support in Ethiopia.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop Hardware</Link></li>
              <li><Link to="/services">Repair Services</Link></li>
              <li><Link to="/contact">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Laptop Repair</Link></li>
              <li><Link to="/services">Data Recovery</Link></li>
              <li><Link to="/services">Printer Service</Link></li>
              <li><Link to="/services">Network Setup</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col contact-col">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Infront of Menahariya ,Holeta Town, Oromia, ET</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <span>+251 911 000 000</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>support@yescomputer.et</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} Yes Computer ET. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}