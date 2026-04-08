import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../helpers/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="pill-navbar glass-card">
        <div className="logo-section">
          <span className="gradient-text logo-text">SJ</span>
        </div>

        <div className={`nav-links ${expandNavbar ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              offset={-100}
              onClick={() => setExpandNavbar(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" title="Toggle Theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button 
            className="mobile-toggle" 
            onClick={() => setExpandNavbar(!expandNavbar)}
          >
            {expandNavbar ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
