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
    <div className="footer">
      <div className="socialMedia">
        {socials.map((social) => {
          return (
            <a href={social.link} target="_blank" rel="noreferrer">
              {social.icon}
            </a>
          )
        })}
      </div>
      <p> &copy; Siwani Jaiswal</p>
      <h2>Made with ❤️ by Sibu</h2>
    </div>
  );
}

export default Footer;
