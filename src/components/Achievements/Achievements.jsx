import React from 'react';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements" className="achievements section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Achievements</h2>
                <div className="achievements-grid">
                    <div className="achievement-card animate-on-scroll">
                        <div className="achievement-icon">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                        </div>
                        <h3 className="achievement-title">National Hackathon Finalist</h3>
                        <p className="achievement-location">NIT Delhi</p>
                        <p className="achievement-description">
                            Selected among the top 50 teams from over 10,000 registrations at Code Slayer Hackathon.
                            HackCBSB.0 Finalist, Delhi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
