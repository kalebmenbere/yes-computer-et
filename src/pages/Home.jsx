import { Link } from "react-router-dom";
import { 
  FaTools, FaLaptop, FaShippingFast, FaHeadset, FaShieldAlt,
  FaMoneyBillWave, FaStar, FaChevronRight, FaPrint, FaMicrochip, FaDatabase,
  FaPhone, FaCalendarCheck, FaShoppingCart, FaUser
} from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const products = [
    { id: 1, name: "Gaming PC Pro", price: "$1,299", category: "Computers", rating: 4.8, img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Mechanical Keyboard", price: "$89", category: "Accessories", rating: 4.5, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Laser Jet Enterprise", price: "$349", category: "Printers", rating: 4.3, img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "4K Stream Cam", price: "$59", category: "Accessories", rating: 4.7, img: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&q=80&w=400" },
  ];

  const services = [
    { id: 1, title: "Hardware Repair", desc: "Component-level fixes for GPU, PSU, and Logic Boards.", icon: <FaMicrochip />, price: "From $79" },
    { id: 2, title: "Software & OS", desc: "Virus removal and professional OS optimization.", icon: <FaLaptop />, price: "From $49" },
    { id: 3, title: "Managed Printing", desc: "Network setup and industrial maintenance.", icon: <FaPrint />, price: "From $39" },
    { id: 4, title: "Data Recovery", desc: "Forensic-level retrieval from failed drives.", icon: <FaDatabase />, price: "From $99" },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <FaStar /> Trusted Tech Support Since 2015
            </div>
            <h1 className="hero-title">
              Empowering Your <span className="highlight">Digital World</span>
            </h1>
            <p className="hero-description">
              Expert hardware repair, precision printing solutions, and premium tech sales. 
              We don't just fix computers; we optimize your lifestyle.
            </p>
            
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                <FaCalendarCheck /> Book Repair
              </Link>
              <Link to="/products" className="btn btn-outline">
                <FaShoppingCart /> Shop Products
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Repairs Done</span>
              </div>
              <div className="stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Turnaround</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Our Core Services</h2>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.id} className="service-card">
              <div className="card-icon">{s.icon}</div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-description">{s.desc}</p>
              <div className="card-footer">
                <span className="card-price">{s.price}</span>
                <Link to="/contact" className="card-link">
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Preview */}
      <section className="products-section">
        <div className="section-header">
          <span className="section-subtitle">Inventory</span>
          <h2 className="section-title">Featured Hardware</h2>
        </div>
        <div className="products-grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-image">
                <img src={p.img} alt={p.name} loading="lazy" />
                <span className="product-category">{p.category}</span>
              </div>
              <div className="product-content">
                <div className="product-rating">
                  <FaStar /> {p.rating}
                </div>
                <h3 className="product-name">{p.name}</h3>
                <div className="product-footer">
                  <span className="product-price">{p.price}</span>
                  <button className="product-add-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="emergency-section">
        <div className="emergency-content">
          <div className="emergency-text">
            <h2>Critical System Failure?</h2>
            <p>Our emergency rapid-response team is on standby.</p>
          </div>
          <div className="emergency-actions">
            <a href="tel:+251911234567" className="emergency-phone">
              <FaPhone /> Call Now: +251 91 123 4567
            </a>
            <button className="emergency-btn">Request Dispatch</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Join the Inner Circle</h2>
            <p>Get exclusive tech tips and early access to hardware drops.</p>
          </div>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CEO Section */}
      <section className="ceo-section">
        <div className="ceo-content">
          <div className="ceo-avatar">
            <FaUser />
          </div>
          <div className="ceo-info">
            <h3>Yabtsega Menbere</h3>
            <p className="ceo-title">CEO & Founder</p>
            <p className="ceo-quote">
              "We believe in technology that works for you, not against you. 
              Our mission is to provide reliable, professional tech solutions 
              that enhance your productivity and peace of mind."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}