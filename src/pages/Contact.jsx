import { useState } from "react";
import "./Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaBuilding,
  FaComments
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "general"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const serviceTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "repair", label: "Repair Service" },
    { value: "sales", label: "Sales Inquiry" },
    { value: "business", label: "Business Solutions" },
    { value: "other", label: "Other" }
  ];

  const contactMethods = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: ["+1 (123) 456-7890", "+1 (987) 654-3210"],
      action: "tel:+11234567890",
      color: "#3498db",
      description: "Available 24/7 for emergency support"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: ["support@yescomputeret.com", "sales@yescomputeret.com"],
      action: "mailto:support@yescomputeret.com",
      color: "#2ecc71",
      description: "Typically respond within 2 business hours"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: ["123 Tech Street", "San Francisco, CA 94107"],
      action: "https://maps.google.com",
      color: "#e74c3c",
      description: "Open Monday - Friday, 9AM - 6PM"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Emergency Only"],
      action: null,
      color: "#9b59b6",
      description: "Emergency service available 24/7"
    }
  ];

  const socialMedia = [
    { icon: <FaFacebook />, name: "Facebook", url: "#", color: "#1877F2" },
    { icon: <FaTwitter />, name: "Twitter", url: "#", color: "#1DA1F2" },
    { icon: <FaInstagram />, name: "Instagram", url: "#", color: "#E4405F" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#", color: "#0A66C2" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: "general"
      });
    }, 3000);
  };

  return (
    <div className="modern-contact-page">
      {/* Hero Section */}
      <section className="modern-contact-hero">
        <div className="modern-hero-content">
          <h1 className="modern-hero-title">
            Get in <span className="highlight">Touch</span>
          </h1>
          <p className="modern-hero-description">
            We're here to help with all your tech needs. Reach out to us through any channel - 
            we're committed to providing excellent support and quick responses.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">2-hour</span>
              <span className="stat-label">Avg Response</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="modern-section-header">
          <h2 className="modern-section-title">How to Reach Us</h2>
          <p className="modern-section-subtitle">
            Multiple ways to connect with our expert team
          </p>
        </div>

        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className="contact-method-card"
              style={{ 
                '--card-color': method.color,
                borderTopColor: method.color 
              }}
            >
              <div 
                className="method-icon"
                style={{ backgroundColor: method.color + '20', color: method.color }}
              >
                {method.icon}
              </div>
              <h3 className="method-title">{method.title}</h3>
              <p className="method-description">{method.description}</p>
              <div className="method-details">
                {method.details.map((detail, idx) => (
                  <p key={idx} className="method-detail">{detail}</p>
                ))}
              </div>
              {method.action && (
                <a 
                  href={method.action} 
                  className="method-action"
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  {method.title === "Visit Us" ? "Get Directions" : "Contact Now"}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="form-header">
            <h2 className="form-title">Send Us a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          {isSubmitted ? (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="modern-contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser /> Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">
                    <FaBuilding /> Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  {serviceTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaComments /> Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading-text">Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Social Media & Map */}
      <section className="social-map-section">
        <div className="social-container">
          <h2 className="social-title">Connect With Us</h2>
          <p className="social-subtitle">
            Follow us on social media for updates, tips, and tech news
          </p>
          <div className="social-icons">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-icon"
                style={{ backgroundColor: social.color }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-overlay">
              <h3>Our Location</h3>
              <p>123 Tech Street, San Francisco, CA 94107</p>
              <a 
                href="https://maps.google.com" 
                className="map-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="modern-section-header">
          <h2 className="modern-section-title">Frequently Asked Questions</h2>
          <p className="modern-section-subtitle">
            Quick answers to common questions
          </p>
        </div>

        <div className="faq-grid">
          {[
            {
              question: "What are your response times?",
              answer: "We typically respond to emails within 2 business hours. For phone calls, we answer immediately during business hours. Emergency support is available 24/7."
            },
            {
              question: "Do you offer on-site service?",
              answer: "Yes! We provide on-site service for businesses and residential customers within our service area. Additional travel fees may apply for locations outside our primary service zone."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and cash. Business customers can also request invoicing."
            },
            {
              question: "Do you provide warranties on repairs?",
              answer: "Yes! All repairs come with a 6-month warranty on parts and labor. Some services have extended warranty options available."
            }
          ].map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Need Immediate Assistance?</h2>
          <p className="cta-subtitle">
            Call us now for same-day emergency service
          </p>
          <div className="cta-actions">
            <a href="tel:+11234567890" className="cta-button primary">
              <FaPhone /> Emergency Call: (123) 456-7890
            </a>
            <a href="mailto:support@yescomputeret.com" className="cta-button secondary">
              <FaEnvelope /> Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}