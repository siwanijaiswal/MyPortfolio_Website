import React from "react";
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import "../styles/Footer.css";

function Footer() {
  const socials = [
    {
      name: "Instagram",
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/jaiswal.siwani123/"
    },
    {
      name: "Twitter",
      icon: <AiFillTwitterSquare />,
      link: "https://twitter.com/JaiswalSiwani55"
    },
    {
      name: "Github",
      icon: <AiFillGithub />,
      link: "https://github.com/siwanijaiswal"
    },
    {
      name: "Linkedin",
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/siwani-jaiswal/"
    },
  ]
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo footer-logo">
            <span className="gradient-text">SJ</span>
          </div>
          <p className="footer-tagline">Computer Engineering Student & Web Developer</p>
        </div>
        
        <div className="footer-right">
          <div className="socialMedia">
            {socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noreferrer" className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>
          <div className="footer-info">
            <p className="copyright">&copy; {new Date().getFullYear()} Siwani Jaiswal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
