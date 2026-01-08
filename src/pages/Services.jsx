import { useState } from "react";
import "./Services.css";
import { 
  FaTools, 
  FaLaptop, 
  FaPrint, 
  FaNetworkWired, 
  FaHeadset, 
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaStar,
  FaCalendarCheck,
  FaChevronRight,
  FaPhoneAlt,
  FaCogs,
  FaUserFriends,
  FaHandshake,
  FaShippingFast,
  FaTrophy,
  FaArrowRight
} from "react-icons/fa";

export default function Services() {
  const [activeTab, setActiveTab] = useState("repair");

  const serviceTabs = [
    { id: "repair", label: "Computer Repair", icon: <FaTools /> },
    { id: "networking", label: "Networking", icon: <FaNetworkWired /> },
    { id: "support", label: "Tech Support", icon: <FaHeadset /> },
    { id: "security", label: "Security", icon: <FaShieldAlt /> },
  ];

  const serviceFeatures = {
    repair: [
      { icon: <FaLaptop />, title: "Laptop Repair", desc: "Screen replacement, battery issues, keyboard repair" },
      { icon: <FaCogs />, title: "Hardware Upgrade", desc: "RAM, SSD, graphics card installation" },
      { icon: <FaPrint />, title: "Printer Services", desc: "Setup, maintenance, and troubleshooting" },
      { icon: <FaShippingFast />, title: "Quick Service", desc: "Same-day service available" }
    ],
    networking: [
      { icon: <FaNetworkWired />, title: "WiFi Setup", desc: "Home & office wireless network installation" },
      { icon: <FaShieldAlt />, title: "Network Security", desc: "Firewall & VPN configuration" },
      { icon: <FaUserFriends />, title: "Business Networks", desc: "Multi-device office network setup" },
      { icon: <FaCogs />, title: "Router Configuration", desc: "Optimization for speed and coverage" }
    ],
    support: [
      { icon: <FaHeadset />, title: "Remote Support", desc: "Quick assistance from anywhere" },
      { icon: <FaUserFriends />, title: "On-site Support", desc: "Personalized in-person service" },
      { icon: <FaCogs />, title: "Software Setup", desc: "Installation & configuration" },
      { icon: <FaClock />, title: "24/7 Availability", desc: "Emergency support when you need it" }
    ],
    security: [
      { icon: <FaShieldAlt />, title: "Virus Removal", desc: "Complete malware cleanup" },
      { icon: <FaCogs />, title: "Data Backup", desc: "Secure cloud & local backup solutions" },
      { icon: <FaNetworkWired />, title: "Firewall Setup", desc: "Advanced threat protection" },
      { icon: <FaTrophy />, title: "Security Audit", desc: "Comprehensive system assessment" }
    ]
  };

  const servicePackages = [
    {
      tier: "Basic",
      price: "$79",
      period: "one-time",
      features: [
        "Diagnostic Assessment",
        "Virus/Malware Scan",
        "Basic Software Troubleshooting",
        "30-minute Response Time",
        "Email Support"
      ],
      popular: false
    },
    {
      tier: "Professional",
      price: "$149",
      period: "one-time",
      features: [
        "Complete Diagnostic & Repair",
        "Hardware Installation",
        "Data Backup & Transfer",
        "15-minute Response Time",
        "Phone & Email Support",
        "30-day Warranty"
      ],
      popular: true
    },
    {
      tier: "Enterprise",
      price: "$299",
      period: "monthly",
      features: [
        "Priority 24/7 Support",
        "Unlimited Remote Assistance",
        "Network Security Setup",
        "5-minute Response Time",
        "Dedicated Technician",
        "90-day Warranty",
        "Quarterly System Check"
      ],
      popular: false
    }
  ];

  const expertiseAreas = [
    { count: "500+", label: "Devices Repaired", icon: <FaLaptop />, color: "#3498db" },
    { count: "99%", label: "Satisfaction Rate", icon: <FaStar />, color: "#f39c12" },
    { count: "24/7", label: "Support Available", icon: <FaClock />, color: "#2ecc71" },
    { count: "30-min", label: "Avg Response Time", icon: <FaShippingFast />, color: "#9b59b6" }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Book Appointment",
      description: "Schedule online or call for immediate assistance",
      icon: <FaCalendarCheck />,
      color: "#3498db"
    },
    {
      number: "2",
      title: "Free Diagnosis",
      description: "We assess the issue and provide transparent pricing",
      icon: <FaCogs />,
      color: "#2ecc71"
    },
    {
      number: "3",
      title: "Expert Service",
      description: "Our certified technicians fix your device efficiently",
      icon: <FaTools />,
      color: "#e74c3c"
    },
    {
      number: "4",
      title: "Quality Assurance",
      description: "Thorough testing and warranty included",
      icon: <FaCheckCircle />,
      color: "#9b59b6"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FaStar /> Trusted Tech Partner Since 2015
          </div>
          <h1 className="hero-title">
            Expert Computer Repair & <span className="highlight">IT Support</span>
          </h1>
          <p className="hero-description">
            Professional solutions for homes and businesses. Fast, reliable, and affordable tech services 
            with certified technicians and guaranteed satisfaction.
          </p>
          <div className="hero-cta">
            <a href="tel:+251911234567" className="cta-primary">
              <FaPhoneAlt /> Call Now: +251 91 123 4567
            </a>
            <button className="cta-secondary">
              <FaCalendarCheck /> Book Service Online
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="expertise-section">
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="expertise-card">
              <div 
                className="expertise-icon"
                style={{ backgroundColor: `${area.color}15`, color: area.color }}
              >
                {area.icon}
              </div>
              <div className="expertise-content">
                <h3 className="expertise-count">{area.count}</h3>
                <p className="expertise-label">{area.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Services */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Specialized Services</h2>
          <p className="section-subtitle">
            Comprehensive tech solutions tailored to your needs
          </p>
        </div>

        <div className="services-tabs">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              className={`service-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="services-features">
          {serviceFeatures[activeTab].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
                <button className="feature-btn">
                  Learn More <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="packages-section">
        <div className="section-header">
          <h2 className="section-title">Service Packages</h2>
          <p className="section-subtitle">
            Choose the perfect plan for your tech needs
          </p>
        </div>

        <div className="packages-grid">
          {servicePackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`package-card ${pkg.popular ? 'popular' : ''}`}
            >
              {pkg.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}
              
              <div className="package-header">
                <h3 className="package-tier">{pkg.tier}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="period">/{pkg.period}</span>
                </div>
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="package-feature">
                    <FaCheckCircle className="feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="package-btn">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Process Timeline */}
      <section className="process-section">
        <div className="section-header">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            Simple, transparent, and efficient service process
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-circle" style={{ borderColor: step.color }}>
                <span className="step-number" style={{ color: step.color }}>
                  {step.number}
                </span>
                <div className="step-icon" style={{ color: step.color }}>
                  {step.icon}
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line" style={{ backgroundColor: step.color }}></div>
                  <FaArrowRight className="connector-arrow" style={{ color: step.color }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Fix Your Tech Issues?</h2>
            <p className="cta-subtitle">
              Get professional help today. We offer free diagnostics and transparent pricing.
            </p>
            <div className="cta-actions">
              <a href="tel:+251911234567" className="cta-action-primary">
                <FaPhoneAlt /> Call for Immediate Help
              </a>
              <button className="cta-action-secondary">
                <FaCalendarCheck /> Schedule Online
              </button>
            </div>
            <div className="cta-guarantee">
              <FaHandshake />
              <span>100% Satisfaction Guaranteed • 6-Month Warranty</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}