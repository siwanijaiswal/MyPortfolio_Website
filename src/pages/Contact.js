import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';
import "../styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "jaiswalsiwani123@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-container section-container" id="contact">
      <div className="bg-text-contact">CONTACT</div>
      
      <div className="section-header">
        <div className="status-badge">
          <span className="pulse"></span> Available for new projects
        </div>
        <h4 className="section-subtitle">SAY HELLO</h4>
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
      </div>

      <div className="contact-premium-grid">
        {/* Email Card */}
        <div className="premium-contact-card glass-card fade-in">
          <div className="premium-icon-box">
            <FaEnvelope />
            <div className="icon-glow"></div>
          </div>
          <div className="premium-card-content">
            <span className="premium-label">Email Me</span>
            <h3 className="premium-value">{email}</h3>
            <button 
              onClick={copyToClipboard} 
              className={`premium-copy-btn ${copied ? 'success' : ''}`}
            >
              {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy Address</>}
            </button>
          </div>
        </div>

        {/* Location Card */}
        <div className="premium-contact-card glass-card fade-in delay-1">
          <div className="premium-icon-box">
            <FaMapMarkerAlt />
            <div className="icon-glow"></div>
          </div>
          <div className="premium-card-content">
            <span className="premium-label">Location</span>
            <h3 className="premium-value">Ahmedabad, India</h3>
            <p className="premium-subtext">Gujarat | Available for Remote Work</p>
          </div>
        </div>

        {/* Social Card */}
        <div className="premium-contact-card glass-card fade-in delay-2">
          <div className="premium-icon-box">
            <FaLinkedin />
            <div className="icon-glow"></div>
          </div>
          <div className="premium-card-content">
            <span className="premium-label">Let's Connect</span>
            <div className="premium-social-row">
              <a href="https://www.linkedin.com/in/siwani-jaiswal/" target="_blank" rel="noreferrer" className="social-pill linkedin">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/siwanijaiswal" target="_blank" rel="noreferrer" className="social-pill github">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;