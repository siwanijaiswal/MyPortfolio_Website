import React from "react";
import "../styles/Home.css";
import jais_resume from "../assets/jais_resume.pdf";

function Home() {
    const front_end = [
        "HTML", "CSS", "ReactJS", "AngularJS", "BootStrap", "Javascript", "StyledComponents"
    ]
    const back_end = [
        "NodeJS", "MySQL", "MongoDB", "DigitalOcean", "PHP"
    ]
    const languages = [
        "C", "C++", "JavaScript", "Python",
    ]
    return (
        <div className="home">
            <div className="aboutttt" >
                <div className="my-image">
                    <img className="img-i" alt="" />
                </div>
                <div className="about">
                    <h2 className="about-me "> Hi, I'm Siwani Jaiswal</h2>
                    <h2>A Computer Engineering Student</h2>
                    <p className="prompt">
                        <p>I'm a Web developer with a passion for learning and creating.I love to learn about new
                            technologies and apply to my work.I'm currently learning Data Structures and Algorithm. I'm Machine learning enthusiasts and open source contributor.I believe in learning together.</p>
                    </p>
                    <div className="profile-option">
                        <a href={jais_resume} download="siwanijaiswal_resume.pdf">
                            <button className=" highlighted-btn">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>

            <h1 className="header-text" >My Skills</h1>
            <div className="skills">
                <div className="list">
                    <div className="item">
                        <h3 > Front-End</h3>
                        {
                            front_end.map((skill, index) => {
                                return <span key={index}>- {skill}</span>
                            })
                        }
                    </div>
                    <div className="item">
                        <h3>Back-End</h3>
                        {
                            back_end.map((skill, index) => {
                                return <span key={index}>- {skill}</span>
                            })
                        }
                    </div>
                    <div className="item">
                        <h3>Languages</h3>
                        {
                            languages.map((skill, index) => {
                                return <span key={index}>- {skill}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Home;
