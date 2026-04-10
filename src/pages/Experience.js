import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'
import { useTheme } from "../helpers/ThemeContext";

function Experience() {
  const { isDarkMode } = useTheme();

  return (
    <div className="experience-container section-container">
      <div className="section-header">
        <h4 className="section-subtitle">MY PROFESSIONAL JOURNEY</h4>
        <h2 className="section-title">My <span className="gradient-text">Experience</span></h2>
      </div>

      <VerticalTimeline lineColor={isDarkMode ? "#1e293b" : "#e2e8f0"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#8b5cf6", color: "#fff", boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)' }}
          contentStyle={{ 
            background: isDarkMode ? "rgba(15, 23, 42, 0.4)" : "rgba(255, 255, 255, 0.4)", 
            color: "var(--text-primary)", 
            border: "1px solid var(--glass-border)", 
            borderRadius: "24px",
            boxShadow: 'none'
          }}
          contentArrowStyle={{ borderRight: isDarkMode ? "7px solid rgba(15, 23, 42, 0.4)" : "7px solid rgba(255, 255, 255, 0.4)" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Pandit Deendayal Energy University</h3>
          <h4 className="vertical-timeline-element-subtitle">Gandhinagar, Gujarat</h4>
          <p>B.Tech in Computer Science and Engineering | CGPA: 9.48</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan. 2024 - July 2024"
          iconStyle={{ background: "#8b5cf6", color: "#fff", boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)' }}
          contentStyle={{ 
            background: isDarkMode ? "rgba(15, 23, 42, 0.4)" : "rgba(255, 255, 255, 0.4)", 
            color: "var(--text-primary)", 
            border: "1px solid var(--glass-border)", 
            borderRadius: "24px",
            boxShadow: 'none'
          }}
          contentArrowStyle={{ borderRight: isDarkMode ? "7px solid rgba(15, 23, 42, 0.4)" : "7px solid rgba(255, 255, 255, 0.4)" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Surekha Technologies | Ahmedabad</h4>
          <p>Trained in ReactJS and Liferay; worked on internal projects and contributed to improving the main company website's performance and UX.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov. 2024 - June 2025"
          iconStyle={{ background: "#8b5cf6", color: "#fff", boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)' }}
          contentStyle={{ 
            background: isDarkMode ? "rgba(15, 23, 42, 0.4)" : "rgba(255, 255, 255, 0.4)", 
            color: "var(--text-primary)", 
            border: "1px solid var(--glass-border)", 
            borderRadius: "24px",
            boxShadow: 'none'
          }}
          contentArrowStyle={{ borderRight: isDarkMode ? "7px solid rgba(15, 23, 42, 0.4)" : "7px solid rgba(255, 255, 255, 0.4)" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Helmsman Consultancy | Ahmedabad</h4>
          <p>Developed a telemedicine platform serving 1000+ patients. Integrated Agora for real-time video consultations, built end-to-end appointment scheduling, and configured Cashfree for payments.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2025 - Present"
          iconStyle={{ background: "#8b5cf6", color: "#fff", boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.2)' }}
          contentStyle={{ 
            background: isDarkMode ? "rgba(15, 23, 42, 0.4)" : "rgba(255, 255, 255, 0.4)", 
            color: "var(--text-primary)", 
            border: "1px solid var(--glass-border)", 
            borderRadius: "24px",
            boxShadow: 'none'
          }}
          contentArrowStyle={{ borderRight: isDarkMode ? "7px solid rgba(15, 23, 42, 0.4)" : "7px solid rgba(255, 255, 255, 0.4)" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Aasma Technology Solutions | Ahmedabad</h4>
          <p>Developing frontend modules for a government Institute Management System using React & Tailwind. Contributing to an AI-driven compliance audit platform and maintaining internal productivity tools.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;