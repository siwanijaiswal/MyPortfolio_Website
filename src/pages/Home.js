import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import jais_resume from "../assets/Siwani_resume.pdf";
import myimg from "../assets/myimg.jpeg";

function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Computer Engineer", "Web Developer", "ML Enthusiast", "Open Source Contributor"];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const handleTyping = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1));
      setTypingSpeed(50);
    } else {
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(100);
    }

    if (!isDeleting && text === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1500); // Pause at end
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  const languages = ["TypeScript", "JavaScript", "C/C++", "Python"];
  const tech_stacks = ["ReactJs", "NextJs", "NodeJs", "Tailwind CSS", "HTML", "CSS"];
  const databases_tools = ["MongoDB", "Firebase", "MySQL", "Git", "Postman", "Figma"];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text-content">
          <h4 className="welcome-text">WELCOME TO MY WORLD</h4>
          <h1 className="name-header">
            Hi, I'm <span className="gradient-text">Siwani Jaiswal</span>
          </h1>
          <h2 className="typewriter-container">
            a <span className="typewriter-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-bio">
            I am a Software Developer with 2 years of experience specializing in React and modern web technologies, passionate about building high-performance, dynamic applications.
          </p>
          <div className="hero-actions">
            <a href={jais_resume} download="siwanijaiswal_resume.pdf" className="btn-primary">
              Download CV
            </a>
          </div>
        </div>
        
        <div className="hero-image-section">
          <div className="image-frame">
            <div className="inner-frame">
              <img src={myimg} alt="Siwani Jaiswal" className="profile-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="expertise-section section-container">
        <h2 className="section-title">What <span className="gradient-text">I Do</span></h2>
        <div className="expertise-grid">
          <div className="expertise-card glass-card">
            <h3>Tech Stacks</h3>
            <div className="skill-bubbles">
              {tech_stacks.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
          <div className="expertise-card glass-card">
            <h3>Languages</h3>
            <div className="skill-bubbles">
              {languages.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
          <div className="expertise-card glass-card">
            <h3>Databases & Tools</h3>
            <div className="skill-bubbles">
              {databases_tools.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
