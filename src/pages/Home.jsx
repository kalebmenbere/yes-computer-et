import { Link } from "react-router-dom";
import { 
  FaTools, FaLaptop, FaShippingFast, FaHeadset, FaShieldAlt,
  FaMoneyBillWave, FaStar, FaChevronRight, FaPrint, FaMicrochip, FaDatabase 
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
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-visual">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="badge-glow">Reliable Tech Support Since 2010</div>
          <h1>Empowering Your <span className="text-gradient">Digital World</span></h1>
          <p>
            Expert hardware repair, precision printing solutions, and premium tech sales. 
            We don't just fix computers; we optimize your lifestyle.
          </p>
          
          <div className="hero-btns">
            <Link to="/services" className="btn-glow">
              <FaTools /> Book Repair
            </Link>
            <Link to="/products" className="btn-outline">
              Shop Gear
            </Link>
          </div>

          <div className="trust-pills">
            <div className="pill"><b>5k+</b> Repairs Done</div>
            <div className="pill"><b>24h</b> Turnaround</div>
            <div className="pill"><b>98%</b> Score</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-showcase">
        <div className="section-title">
          <span className="accent">Expertise</span>
          <h2>Our Core Services</h2>
        </div>
        <div className="glass-grid">
          {services.map(s => (
            <div key={s.id} className="glass-card">
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="card-footer">
                <span className="price-tag">{s.price}</span>
                <Link to="/contact" className="icon-btn"><FaChevronRight /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Preview */}
      <section className="product-preview">
        <div className="section-title">
          <span className="accent">Inventory</span>
          <h2>Featured Hardware</h2>
        </div>
        <div className="product-shelf">
          {products.map(p => (
            <div key={p.id} className="item-card">
              <div className="item-img-wrapper">
                <img src={p.img} alt={p.name} />
                <span className="item-cat">{p.category}</span>
              </div>
              <div className="item-info">
                <div className="item-rating"><FaStar /> {p.rating}</div>
                <h3>{p.name}</h3>
                <div className="item-bottom">
                  <span className="item-price">{p.price}</span>
                  <button className="add-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency & Newsletter */}
      <div className="bottom-sections">
        <section className="emergency-banner">
          <div className="em-text">
            <h2>Critical System Failure?</h2>
            <p>Our emergency rapid-response team is on standby.</p>
          </div>
          <div className="em-action">
            <a href="tel:5558324349" className="em-phone">📞 (555) 832-4349</a>
            <button className="pulse-btn">Request Dispatch</button>
          </div>
        </section>

        <section className="newsletter-minimal">
          <h2>Join the Inner Circle</h2>
          <p>Get exclusive tech tips and early access to hardware drops.</p>
          <form className="minimal-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
}