import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Dhrubatara Boarding High School, Chapali, Kathmandu
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bhanu Bhakta Memorial Secondary School, Panipokhari, Kathmandu
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            12th Degree
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">
            Pandit Deendayal Energy University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            B.Tech Degree
          </h4>
          <p>Computer Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Intern At LetsGrowMore
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>
            Made 5 frontend Projects
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;