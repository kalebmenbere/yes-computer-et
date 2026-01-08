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
  FaTrophy
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
      number: "01",
      title: "Book Appointment",
      description: "Schedule online or call for immediate assistance",
      icon: <FaCalendarCheck />
    },
    {
      number: "02",
      title: "Free Diagnosis",
      description: "We assess the issue and provide transparent pricing",
      icon: <FaCogs />
    },
    {
      number: "03",
      title: "Expert Service",
      description: "Our certified technicians fix your device efficiently",
      icon: <FaTools />
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Thorough testing and warranty included",
      icon: <FaCheckCircle />
    }
  ];

  return (
    <div className="modern-services-page">
      {/* Hero Banner */}
      <section className="modern-hero-banner">
        <div className="modern-hero-content">
          <div className="modern-hero-badge">
            <FaStar /> Trusted Tech Partner Since 2015
          </div>
          <h1 className="modern-hero-title">
            Expert Computer Repair & <span className="highlight">IT Support</span>
          </h1>
          <p className="modern-hero-description">
            Professional solutions for homes and businesses. Fast, reliable, and affordable tech services 
            with certified technicians and guaranteed satisfaction.
          </p>
          <div className="modern-hero-cta">
            <a href="tel:+1234567890" className="modern-cta-primary">
              <FaPhoneAlt /> Call Now: (123) 456-7890
            </a>
            <button className="modern-cta-secondary">
              <FaCalendarCheck /> Book Service Online
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="modern-expertise-section">
        <div className="modern-expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="modern-expertise-card">
              <div 
                className="modern-expertise-icon"
                style={{ backgroundColor: `${area.color}15`, color: area.color }}
              >
                {area.icon}
              </div>
              <div className="modern-expertise-content">
                <h3 className="modern-expertise-count">{area.count}</h3>
                <p className="modern-expertise-label">{area.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Services */}
      <section className="modern-services-section">
        <div className="modern-section-header">
          <h2 className="modern-section-title">Our Specialized Services</h2>
          <p className="modern-section-subtitle">
            Comprehensive tech solutions tailored to your needs
          </p>
        </div>

        <div className="modern-services-tabs">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              className={`modern-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="modern-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="modern-services-features">
          {serviceFeatures[activeTab].map((feature, index) => (
            <div key={index} className="modern-feature-card">
              <div className="modern-feature-icon">
                {feature.icon}
              </div>
              <div className="modern-feature-content">
                <h4 className="modern-feature-title">{feature.title}</h4>
                <p className="modern-feature-desc">{feature.desc}</p>
                <button className="modern-feature-btn">
                  Learn More <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="modern-packages-section">
        <div className="modern-section-header">
          <h2 className="modern-section-title">Service Packages</h2>
          <p className="modern-section-subtitle">
            Choose the perfect plan for your tech needs
          </p>
        </div>

        <div className="modern-packages-grid">
          {servicePackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`modern-package-card ${pkg.popular ? 'popular' : ''}`}
            >
              {pkg.popular && (
                <div className="modern-popular-badge">
                  Most Popular
                </div>
              )}
              
              <div className="modern-package-header">
                <h3 className="modern-package-tier">{pkg.tier}</h3>
                <div className="modern-package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="period">/{pkg.period}</span>
                </div>
              </div>

              <ul className="modern-package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="modern-package-feature">
                    <FaCheckCircle className="feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="modern-package-btn">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="modern-process-section">
        <div className="modern-section-header">
          <h2 className="modern-section-title">How We Work</h2>
          <p className="modern-section-subtitle">
            Simple, transparent, and efficient service process
          </p>
        </div>

        <div className="modern-process-timeline">
          {processSteps.map((step, index) => (
            <div key={index} className="modern-process-step">
              <div className="modern-step-number">{step.number}</div>
              <div className="modern-step-icon">
                {step.icon}
              </div>
              <div className="modern-step-content">
                <h3 className="modern-step-title">{step.title}</h3>
                <p className="modern-step-desc">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="modern-step-connector">
                  <FaChevronRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="modern-cta-card">
          <div className="modern-cta-content">
            <h2 className="modern-cta-title">Ready to Fix Your Tech Issues?</h2>
            <p className="modern-cta-subtitle">
              Get professional help today. We offer free diagnostics and transparent pricing.
            </p>
            <div className="modern-cta-actions">
              <a href="tel:+1234567890" className="modern-cta-action-primary">
                <FaPhoneAlt /> Call for Immediate Help
              </a>
              <button className="modern-cta-action-secondary">
                <FaCalendarCheck /> Schedule Online
              </button>
            </div>
            <div className="modern-cta-guarantee">
              <FaHandshake />
              <span>100% Satisfaction Guaranteed • 6-Month Warranty</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}