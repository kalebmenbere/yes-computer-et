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
  FaArrowRight,
  FaShoppingCart,
  FaCheck,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram,
  FaTimes
} from "react-icons/fa";

export default function Services() {
  const [activeTab, setActiveTab] = useState("repair");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [showOrderBubble, setShowOrderBubble] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: ""
  });

  const serviceTabs = [
    { id: "repair", label: "Computer Repair", icon: <FaTools /> },
    { id: "networking", label: "Networking", icon: <FaNetworkWired /> },
    { id: "support", label: "Tech Support", icon: <FaHeadset /> },
    { id: "security", label: "Security", icon: <FaShieldAlt /> },
  ];

  const allServices = {
    repair: [
      { id: "repair-1", name: "Laptop Screen Replacement", price: 89, icon: <FaLaptop />, desc: "Professional screen replacement service" },
      { id: "repair-2", name: "Battery Replacement", price: 59, icon: <FaCogs />, desc: "Install new high-quality battery" },
      { id: "repair-3", name: "Keyboard Repair", price: 45, icon: <FaTools />, desc: "Fix or replace damaged keyboard" },
      { id: "repair-4", name: "Motherboard Repair", price: 149, icon: <FaLaptop />, desc: "Advanced motherboard troubleshooting" },
      { id: "repair-5", name: "Hard Drive Recovery", price: 199, icon: <FaCogs />, desc: "Data recovery from damaged drives" },
      { id: "repair-6", name: "Water Damage Repair", price: 129, icon: <FaTools />, desc: "Emergency water damage service" }
    ],
    networking: [
      { id: "network-1", name: "Home WiFi Setup", price: 79, icon: <FaNetworkWired />, desc: "Complete home network installation" },
      { id: "network-2", name: "Office Network Setup", price: 299, icon: <FaUserFriends />, desc: "Business network infrastructure" },
      { id: "network-3", name: "Network Security Setup", price: 149, icon: <FaShieldAlt />, desc: "Firewall & VPN configuration" },
      { id: "network-4", name: "Router Optimization", price: 65, icon: <FaCogs />, desc: "Speed and coverage optimization" },
      { id: "network-5", name: "Network Troubleshooting", price: 99, icon: <FaTools />, desc: "Diagnose and fix network issues" },
      { id: "network-6", name: "Mesh WiFi Installation", price: 199, icon: <FaNetworkWired />, desc: "Whole-home coverage setup" }
    ],
    support: [
      { id: "support-1", name: "Remote Technical Support", price: 49, icon: <FaHeadset />, desc: "1-hour remote assistance" },
      { id: "support-2", name: "On-site Technical Support", price: 99, icon: <FaUserFriends />, desc: "In-person support visit" },
      { id: "support-3", name: "Software Installation", price: 39, icon: <FaCogs />, desc: "Professional software setup" },
      { id: "support-4", name: "System Optimization", price: 69, icon: <FaTools />, desc: "Performance tuning and cleanup" },
      { id: "support-5", name: "Virus Removal", price: 79, icon: <FaShieldAlt />, desc: "Complete malware cleanup" },
      { id: "support-6", name: "Data Backup Service", price: 59, icon: <FaCogs />, desc: "Secure data backup solution" }
    ],
    security: [
      { id: "security-1", name: "Security Audit", price: 149, icon: <FaShieldAlt />, desc: "Comprehensive security assessment" },
      { id: "security-2", name: "Antivirus Installation", price: 49, icon: <FaCogs />, desc: "Professional antivirus setup" },
      { id: "security-3", name: "Firewall Configuration", price: 129, icon: <FaNetworkWired />, desc: "Advanced firewall setup" },
      { id: "security-4", name: "VPN Setup", price: 89, icon: <FaShieldAlt />, desc: "Secure VPN configuration" },
      { id: "security-5", name: "Encryption Service", price: 99, icon: <FaTools />, desc: "Data encryption setup" },
      { id: "security-6", name: "Security Monitoring", price: 199, icon: <FaTrophy />, desc: "Monthly security monitoring" }
    ]
  };

  const servicePackages = [
    {
      id: "package-basic",
      tier: "Basic",
      price: 79,
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
      id: "package-pro",
      tier: "Professional",
      price: 149,
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
      id: "package-enterprise",
      tier: "Enterprise",
      price: 299,
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
      title: "Select Services",
      description: "Choose the services you need from our catalog",
      icon: <FaCheckCircle />,
      color: "#3498db"
    },
    {
      number: "2",
      title: "Provide Details",
      description: "Tell us about your device and issues",
      icon: <FaCogs />,
      color: "#2ecc71"
    },
    {
      number: "3",
      title: "Schedule Service",
      description: "Choose convenient date and time",
      icon: <FaCalendarCheck />,
      color: "#e74c3c"
    },
    {
      number: "4",
      title: "Expert Service",
      description: "Our technicians provide quality service",
      icon: <FaTools />,
      color: "#9b59b6"
    }
  ];

  // Toggle service selection
  const toggleServiceSelection = (serviceId, serviceName, price) => {
    setSelectedServices(prev => {
      const exists = prev.find(s => s.id === serviceId);
      if (exists) {
        return prev.filter(s => s.id !== serviceId);
      } else {
        const newService = { id: serviceId, name: serviceName, price };
        if (prev.length === 0 && !showOrderBubble) {
          setShowOrderBubble(true);
        }
        return [...prev, newService];
      }
    });
  };

  // Toggle package selection
  const togglePackageSelection = (pkgId, tier, price) => {
    const serviceId = pkgId;
    const serviceName = `${tier} Package`;
    
    toggleServiceSelection(serviceId, serviceName, price);
  };

  // Calculate total price
  const totalPrice = selectedServices.reduce((total, service) => total + service.price, 0);

  // Clear all selected services
  const clearAllSelectedServices = () => {
    setSelectedServices([]);
    setShowOrderBubble(false);
  };

  // Handle order submission
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    
    // Prepare service details
    const serviceDetails = selectedServices.map(service => 
      `• ${service.name} - $${service.price}`
    ).join('\n');

    // Create detailed message
    const message = `
🛠️ *SERVICE REQUEST* 🛠️

👤 *Customer Information:*
• Name: ${customerInfo.name}
• Phone: ${customerInfo.phone}
• Email: ${customerInfo.email || 'Not provided'}
• Address: ${customerInfo.address}

📋 *Requested Services (${selectedServices.length} items):*
${serviceDetails}

💰 *Total Estimate:* $${totalPrice}

📝 *Additional Notes:*
${customerInfo.notes || 'No additional notes provided'}

⏰ *Request Time:* ${new Date().toLocaleString()}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Telegram Bot URL
    const telegramBotUsername = "your_bot_username";
    const telegramUrl = `https://t.me/${telegramBotUsername}?text=${encodedMessage}`;
    
    // WhatsApp URL
    const whatsappNumber = "1234567890";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open Telegram
    window.open(telegramUrl, '_blank');
    
    // Show success message
    alert(`Service request submitted successfully! Opening Telegram to send your details.\n\nYou can also send via WhatsApp: ${whatsappUrl}`);
    
    // Reset form and close modal
    setIsOrderModalOpen(false);
    setSelectedServices([]);
    setShowOrderBubble(false);
    setCustomerInfo({
      name: "",
      phone: "",
      email: "",
      address: "",
      notes: ""
    });
  };

  // Check if service is selected
  const isServiceSelected = (serviceId) => {
    return selectedServices.some(s => s.id === serviceId);
  };

  // Check if package is selected
  const isPackageSelected = (pkgId) => {
    return selectedServices.some(s => s.id === pkgId);
  };

  return (
    <div className="services-page">
      {/* Chat Order Bubble - Bottom Right */}
      {selectedServices.length > 0 && (
        <div className={`chat-order-bubble ${showOrderBubble ? 'expanded' : 'minimized'}`}>
          <button 
            className="chat-toggle-button"
            onClick={() => setShowOrderBubble(!showOrderBubble)}
          >
            <FaShoppingCart />
            {selectedServices.length > 0 && (
              <span className="chat-toggle-count">{selectedServices.length}</span>
            )}
          </button>
          
          {showOrderBubble && (
            <div className="order-bubble-content">
              <div className="order-bubble-header">
                <h3>
                  <FaShoppingCart /> Your Service Request
                  <span className="bubble-count-badge">{selectedServices.length} services</span>
                </h3>
                <button 
                  className="minimize-bubble"
                  onClick={() => setShowOrderBubble(false)}
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="order-bubble-body">
                <div className="order-bubble-items">
                  {selectedServices.map(service => (
                    <div key={service.id} className="order-bubble-item">
                      <div className="bubble-service-info">
                        <h4 className="bubble-service-name">{service.name}</h4>
                        <span className="bubble-service-price">${service.price}</span>
                      </div>
                      <button 
                        className="remove-bubble-item"
                        onClick={() => toggleServiceSelection(service.id, service.name, service.price)}
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="order-bubble-summary">
                  <div className="bubble-summary-row total">
                    <span>Total Estimate:</span>
                    <span className="bubble-total-price">${totalPrice}</span>
                  </div>
                </div>
              </div>
              
              <div className="order-bubble-footer">
                <div className="bubble-action-buttons">
                  <button 
                    className="clear-bubble-btn"
                    onClick={clearAllSelectedServices}
                  >
                    Clear All
                  </button>
                  <button 
                    className="checkout-bubble-btn"
                    onClick={() => setIsOrderModalOpen(true)}
                  >
                    <FaPaperPlane /> Request Service
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
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
            <button 
              className="cta-secondary"
              onClick={() => {
                if (selectedServices.length > 0) {
                  setIsOrderModalOpen(true);
                } else {
                  setShowOrderBubble(true);
                }
              }}
            >
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
            Select services you need. Multiple services can be selected.
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

        <div className="services-grid">
          {allServices[activeTab].map((service) => {
            const isSelected = isServiceSelected(service.id);
            return (
              <div 
                key={service.id} 
                className={`service-card ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleServiceSelection(service.id, service.name, service.price)}
              >
                <div className="service-card-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-price">${service.price}</div>
                </div>
                <div className="service-card-content">
                  <h4 className="service-name">{service.name}</h4>
                  <p className="service-desc">{service.desc}</p>
                </div>
                <button 
                  className={`service-select-btn ${isSelected ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleServiceSelection(service.id, service.name, service.price);
                  }}
                >
                  {isSelected ? (
                    <>
                      <FaCheck /> Selected
                    </>
                  ) : (
                    <>
                      <FaShoppingCart /> Add Service
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Packages */}
      <section className="packages-section">
        <div className="section-header">
          <h2 className="section-title">Service Packages</h2>
          <p className="section-subtitle">
            Choose complete solution packages for comprehensive service
          </p>
        </div>

        <div className="packages-grid">
          {servicePackages.map((pkg, index) => {
            const isSelected = isPackageSelected(pkg.id);
            return (
              <div 
                key={index} 
                className={`package-card ${pkg.popular ? 'popular' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={() => togglePackageSelection(pkg.id, pkg.tier, pkg.price)}
              >
                {pkg.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}
                
                <div className="package-header">
                  <h3 className="package-tier">{pkg.tier}</h3>
                  <div className="package-price">
                    <span className="price">${pkg.price}</span>
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

                <button 
                  className={`package-btn ${isSelected ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePackageSelection(pkg.id, pkg.tier, pkg.price);
                  }}
                >
                  {isSelected ? (
                    <>
                      <FaCheck /> Package Selected
                    </>
                  ) : (
                    'Select Package'
                  )}
                </button>
              </div>
            );
          })}
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

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="order-modal-overlay">
          <div className="order-modal">
            <div className="modal-header">
              <h2>Complete Service Request</h2>
              <button 
                className="close-modal"
                onClick={() => setIsOrderModalOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-content">
              {/* Selected Services Summary */}
              <div className="selected-services-summary">
                <div className="summary-header">
                  <h3>
                    <FaTools /> Selected Services ({selectedServices.length})
                  </h3>
                  <button 
                    className="edit-selection"
                    onClick={() => {
                      setIsOrderModalOpen(false);
                      setShowOrderBubble(true);
                    }}
                  >
                    Edit Selection
                  </button>
                </div>
                
                <div className="selected-services-list">
                  {selectedServices.map(service => (
                    <div key={service.id} className="selected-service-item">
                      <div className="service-info">
                        <h4>{service.name}</h4>
                        <span className="service-price">${service.price}</span>
                      </div>
                      <button 
                        className="remove-service"
                        onClick={() => toggleServiceSelection(service.id, service.name, service.price)}
                        title="Remove service"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="order-summary">
                  <div className="summary-row total">
                    <span>Total Estimate:</span>
                    <span className="total-price">${totalPrice}</span>
                  </div>
                </div>
              </div>
              
              {/* Customer Information Form */}
              <div className="customer-form-section">
                <div className="form-header">
                  <h3>
                    <FaUser /> Your Information
                  </h3>
                  <p>Provide your details to schedule service</p>
                </div>
                
                <form 
                  className="customer-form"
                  onSubmit={handleOrderSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser /> Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      required 
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhoneAlt /> Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      required 
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope /> Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="address">
                      <FaMapMarkerAlt /> Service Address *
                    </label>
                    <textarea 
                      id="address" 
                      name="address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      required 
                      placeholder="Enter your complete address for service"
                      rows="3"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea 
                      id="notes" 
                      name="notes"
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                      placeholder="Describe your issue, preferred service time, or special requirements..."
                      rows="3"
                    />
                  </div>
                  
                  <div className="form-notice">
                    <p>
                      <FaShieldAlt /> We'll contact you within 30 minutes to confirm details and schedule your service.
                    </p>
                  </div>
                  
                  <div className="form-actions">
                    <button 
                      type="button"
                      className="cancel-btn"
                      onClick={() => setIsOrderModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="submit-order-btn"
                    >
                      <FaTelegram /> Send Request via Telegram
                    </button>
                  </div>
                  
                  <div className="alternative-options">
                    <p className="or-divider">Or send via:</p>
                    <button 
                      type="button"
                      className="whatsapp-btn"
                      onClick={() => {
                        const serviceDetails = selectedServices.map(service => 
                          `• ${service.name} - $${service.price}`
                        ).join('\n');
                        
                        const message = `Service Request%0A%0ACustomer: ${customerInfo.name}%0APhone: ${customerInfo.phone}%0AEmail: ${customerInfo.email}%0AAddress: ${customerInfo.address}%0A%0AServices:%0A${serviceDetails}%0A%0ATotal: $${totalPrice}%0ANotes: ${customerInfo.notes}`;
                        
                        window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                      }}
                    >
                      <FaWhatsapp /> WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Fix Your Tech Issues?</h2>
            <p className="cta-subtitle">
              Select services above and request a quote. We offer free diagnostics and transparent pricing.
            </p>
            <div className="cta-actions">
              <a href="tel:+251911234567" className="cta-action-primary">
                <FaPhoneAlt /> Call for Immediate Help
              </a>
              <button 
                className="cta-action-secondary"
                onClick={() => {
                  if (selectedServices.length > 0) {
                    setIsOrderModalOpen(true);
                  } else {
                    setShowOrderBubble(true);
                  }
                }}
              >
                <FaCalendarCheck /> Schedule Service
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