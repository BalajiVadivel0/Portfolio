import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Authenticated PDF Generator",
            description: "App for secure PDF generation with user login. Future features include file conversion and PDF operations. Built with modern web technologies for document management.",
            tags: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
            links: [
                { name: "View Project", url: "https://github.com/BalajiVadivel0/auth-pdf-generator" },
                { name: "Source Code", url: "https://github.com/BalajiVadivel0/auth-pdf-generator" }
            ]
        },
        {
            title: "Realtime Chat App",
            description: "Realtime messaging app using Socket.IO. Users can join rooms and chat instantly with a clean UI. Features instant message delivery and room-based communication.",
            tags: ["Node.js", "Express", "Socket.IO", "HTML", "CSS", "JavaScript"],
            links: [
                { name: "View Project", url: "https://github.com/BalajiVadivel0/chat-app" },
                { name: "Source Code", url: "https://github.com/BalajiVadivel0/chat-app" }
            ]
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card animate-on-scroll">
                            <div className="project-image">
                                <div className="image-placeholder"></div>
                            </div>
                            <div className="project-overlay">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                            {link.name}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
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

export default Projects;
