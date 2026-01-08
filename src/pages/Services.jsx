import { useState } from "react";
import "./Services.css";
import { 
  FaTools, 
  FaLaptop, 
  FaPrint, 
  FaNetworkWired, 
  FaHeadset, 
  FaShieldAlt,
  FaDatabase,
  FaMobileAlt,
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaStar
} from "react-icons/fa";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaLaptop />,
      title: "Computer Repair & Maintenance",
      description: "Comprehensive hardware and software solutions for all computer brands and models.",
      details: [
        "Motherboard & Component Repair",
        "Virus & Malware Removal",
        "Operating System Installation",
        "Performance Optimization",
        "Hardware Upgrades & Installation"
      ],
      price: "From $79",
      time: "1-4 hours",
      urgency: ["24/7 Emergency", "Same-day Service"],
      popular: true
    },
    {
      id: 2,
      icon: <FaPrint />,
      title: "Printer Services",
      description: "Complete printer setup, repair, and maintenance for home and office.",
      details: [
        "Printer Installation & Setup",
        "Network Printer Configuration",
        "Cartridge Replacement",
        "Print Quality Issues",
        "Scanner & Copier Repair"
      ],
      price: "From $49",
      time: "1-2 hours",
      urgency: ["On-site Service"]
    },
    {
      id: 3,
      icon: <FaNetworkWired />,
      title: "Networking Solutions",
      description: "Professional network setup, troubleshooting, and security configuration.",
      details: [
        "WiFi Network Setup & Optimization",
        "Router Configuration",
        "Network Security Setup",
        "Ethernet Installation",
        "Business Network Setup"
      ],
      price: "From $99",
      time: "2-6 hours",
      urgency: ["Business Solutions"]
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "Technical Support",
      description: "Remote and on-site technical support for home and business users.",
      details: [
        "Software Troubleshooting",
        "Email & Application Setup",
        "Data Backup Solutions",
        "Remote Desktop Support",
        "IT Consultation"
      ],
      price: "From $39/hour",
      time: "Flexible",
      urgency: ["Remote Support Available"]
    },
    {
      id: 5,
      icon: <FaTools />,
      title: "Hardware Installation",
      description: "Professional installation of computer components and accessories.",
      details: [
        "RAM & SSD Installation",
        "Graphics Card Installation",
        "Power Supply Replacement",
        "Laptop Screen Replacement",
        "Cooling System Installation"
      ],
      price: "From $59",
      time: "1-3 hours",
      urgency: ["Warranty Included"]
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Security & Data Services",
      description: "Complete data protection and cybersecurity solutions.",
      details: [
        "Data Recovery Services",
        "Antivirus Installation",
        "Firewall Configuration",
        "Data Backup Systems",
        "Security Audits"
      ],
      price: "From $129",
      time: "2-8 hours",
      urgency: ["Emergency Recovery"]
    }
  ];

  const accessories = [
    { name: "Wireless Keyboards & Mice", category: "Input Devices" },
    { name: "Gaming Headsets & Speakers", category: "Audio" },
    { name: "Webcams & Conference Cameras", category: "Video" },
    { name: "Monitors & Display Units", category: "Displays" },
    { name: "USB Hubs & Adapters", category: "Connectivity" },
    { name: "External Storage Devices", category: "Storage" },
    { name: "Surge Protectors & UPS", category: "Power" },
    { name: "Laptop Bags & Accessories", category: "Portable" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Small Business Owner",
      text: "Yes Computer ET fixed our office network in just 2 hours! Professional and reliable service.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Home Office User",
      text: "Great printer setup service. They explained everything clearly and the price was fair.",
      rating: 5
    },
    {
      name: "Jessica Williams",
      company: "Student",
      text: "Emergency laptop repair saved my semester. Fast service and friendly technicians!",
      rating: 5
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Professional Tech Services</h1>
          <p className="hero-subtitle">
            Comprehensive computer maintenance, repair, and support services for homes and businesses.
            Trusted by hundreds of satisfied customers.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat">
              <span className="stat-number">30-min</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat">
              <span className="stat-number">6-month</span>
              <span className="stat-label">Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="section-header">
          <h2>Our Core Services</h2>
          <p>Professional solutions for all your tech needs</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className={`service-card ${selectedService === service.id ? 'expanded' : ''}`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              {service.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-meta">
                <div className="meta-item">
                  <FaDollarSign />
                  <span>{service.price}</span>
                </div>
                <div className="meta-item">
                  <FaClock />
                  <span>{service.time}</span>
                </div>
              </div>

              <div className="urgency-tags">
                {service.urgency.map((tag, index) => (
                  <span key={index} className="urgency-tag">{tag}</span>
                ))}
              </div>

              {/* Expanded Details */}
              {selectedService === service.id && (
                <div className="service-details">
                  <h4>Service Includes:</h4>
                  <ul>
                    {service.details.map((detail, index) => (
                      <li key={index}>
                        <FaCheckCircle className="check-icon" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button className="book-service-btn">
                    <FaCalendarCheck /> Book This Service
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Section */}
      <section className="accessories-section">
        <div className="section-header">
          <h2>Accessories & Parts</h2>
          <p>Quality accessories and replacement parts for all your tech needs</p>
        </div>

        <div className="accessories-grid">
          {accessories.map((item, index) => (
            <div key={index} className="accessory-card">
              <h3>{item.name}</h3>
              <span className="accessory-category">{item.category}</span>
              <button className="browse-btn">Browse Products</button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple, transparent process for all our services</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Contact Us</h3>
            <p>Call or book online to describe your issue</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Diagnosis</h3>
            <p>We assess the problem and provide a quote</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Service</h3>
            <p>Our certified technicians fix your device</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Delivery</h3>
            <p>Get your device back with warranty</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Trusted by businesses and individuals alike</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>Need Immediate Tech Support?</h2>
          <p>Call us now for same-day emergency service or schedule an appointment</p>
          <div className="cta-buttons">
            <a href="tel:+1234567890" className="cta-button primary">
              <FaHeadset /> Call Now: (123) 456-7890
            </a>
            <button className="cta-button secondary">
              <FaCalendarCheck /> Schedule Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}