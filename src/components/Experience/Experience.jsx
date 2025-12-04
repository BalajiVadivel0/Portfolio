import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            date: "October 2025 - November 2025",
            title: "Full Stack Developer Intern",
            company: "SaiKet System",
            description: "Worked as a Full Stack Developer Intern, developing end-to-end web applications using modern technologies. Built responsive frontends with React.js and robust backends with Node.js and Express.js. Worked on database design, API development, and implementing full-stack solutions for real-world projects.",
            skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB", "Full Stack"]
        },
        {
            date: "May 2025 - June 2025",
            title: "Backend Developer Intern",
            company: "Zero2Site",
            description: "Developed backend APIs and MongoDB integration for the company's web platform in Chennai. Worked on server-side logic, database design, and API development using Node.js and Express.js. Gained hands-on experience in building scalable backend systems and real-time applications.",
            skills: ["Node.js", "Express.js", "MongoDB", "API Development"]
        }
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Professional Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item animate-on-scroll">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">{exp.date}</div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <p className="timeline-description">{exp.description}</p>
                                <div className="timeline-skills">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="timeline-skill">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
