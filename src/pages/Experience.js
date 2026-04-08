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
          date="2017"
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
          <h3 className="vertical-timeline-element-title">Dhrubatara Boarding High School</h3>
          <p>Chapali, Kathmandu | High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
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
          <h3 className="vertical-timeline-element-title">Bhanu Bhakta Memorial Secondary School</h3>
          <h4 className="vertical-timeline-element-subtitle">Panipokhari, Kathmandu | 12th Degree</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
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
          <h3 className="vertical-timeline-element-title">Pandit Deendayal Energy University</h3>
          <h4 className="vertical-timeline-element-subtitle">B.Tech in Computer Engineering</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
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
          <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">LetsGrowMore | Remote</h4>
          <p>Developed 5 comprehensive projects focusing on user experience and responsive design.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;