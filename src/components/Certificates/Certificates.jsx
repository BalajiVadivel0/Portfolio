import React from 'react';
import './Certificates.css';

const Certificates = () => {
    const certificates = [
        {
            title: "Backend Development Certificate",
            issuer: "Professional Certification",
            date: "2025",
            link: "#"
        },
        {
            title: "Ethical Hacking Certificate",
            issuer: "Cybersecurity Certification",
            date: "2025",
            link: "#"
        },
        {
            title: "Android Development Course",
            issuer: "Google (via Eduskills)",
            date: "2025",
            link: "#"
        },
        {
            title: "Full Stack Development Bootcamp",
            issuer: "GDG, CIT",
            date: "Participation Certificate",
            link: "#"
        },
        {
            title: "AWS Cloud Practitioner Essentials",
            issuer: "Amazon Web Services",
            date: "2024",
            link: "#"
        },
        {
            title: "IBM SkillsBuild & Cisco Certifications",
            issuer: "IBM & Cisco",
            date: "AI Fundamentals, Cybersecurity, Data Science, IoT & Digital Transformation",
            link: "#"
        }
    ];

    return (
        <section id="certificates" className="certificates section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Certificates & Achievements</h2>
                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div key={index} className="certificate-card animate-on-scroll">
                            <div className="certificate-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            </div>
                            <h3 className="certificate-title">{cert.title}</h3>
                            <p className="certificate-issuer">{cert.issuer}</p>
                            <p className="certificate-date">{cert.date}</p>
                            <a href={cert.link} className="certificate-link">View Certificate</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
