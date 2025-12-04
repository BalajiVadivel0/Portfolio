import React from 'react';
import './Education.css';

const Education = () => {
    const education = [
        {
            date: "2024 - 2028",
            degree: "B.E. in Computer Science Engineering",
            school: "Chennai Institute of Technology",
            description: "Currently pursuing Bachelor of Engineering in Computer Science with a CGPA of 8.22. Focusing on software development, data structures, algorithms, and web technologies. Active participant in hackathons and coding competitions.",
            skills: ["Data Structures", "Algorithms", "Software Engineering", "Web Development"]
        },
        {
            date: "2023 - 2024",
            degree: "Higher Secondary Certificate (HSLC)",
            school: "Sowdambikaa Matric. Boys Hr. Sec. School, Turaiyur",
            description: "Completed higher secondary education with a grade of 87.66%. Strong foundation in mathematics, physics, and computer science.",
            skills: ["Mathematics", "Physics", "Computer Science"]
        }
    ];

    return (
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Education Journey</h2>
                <div className="timeline">
                    {education.map((edu, index) => (
                        <div key={index} className="timeline-item animate-on-scroll">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">{edu.date}</div>
                                <h3 className="timeline-title">{edu.degree}</h3>
                                <h4 className="timeline-company">{edu.school}</h4>
                                <p className="timeline-description">{edu.description}</p>
                                <div className="timeline-skills">
                                    {edu.skills.map((skill, i) => (
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

export default Education;
