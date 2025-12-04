import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background"></div>

            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hi, my name is</p>
                    <h1 className="hero-title">Balaji V.</h1>
                    <h2 className="hero-subtitle">I build things for the web.</h2>

                    <p className="hero-description">
                        I'm a Full Stack Developer specializing in building exceptional digital experiences.
                        Currently, I'm focused on building accessible, human-centered products at SaiKet System.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="cta-button primary">
                            Check out my work
                        </a>
                        <a href="/assets/resume.pdf" download className="cta-button">
                            Resume
                        </a>
                    </div>
                </div>

                <div className="code-window">
                    <div className="window-header">
                        <div className="window-dot red"></div>
                        <div className="window-dot yellow"></div>
                        <div className="window-dot green"></div>
                        <div className="window-title">developer.js</div>
                    </div>
                    <div className="window-body">
                        <div className="code-line">
                            <span className="line-number">1</span>
                            <span><span className="keyword">const</span> <span className="function">developer</span> <span className="operator">=</span> <span className="keyword">new</span> <span className="function">Developer</span>();</span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">2</span>
                            <span></span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">3</span>
                            <span>developer.<span className="function">name</span> <span className="operator">=</span> <span className="string">"Balaji V"</span>;</span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">4</span>
                            <span>developer.<span className="function">role</span> <span className="operator">=</span> <span className="string">"Full Stack Dev"</span>;</span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">5</span>
                            <span>developer.<span className="function">skills</span> <span className="operator">=</span> [</span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">6</span>
                            <span>&nbsp;&nbsp;<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"MongoDB"</span></span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">7</span>
                            <span>];</span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">8</span>
                            <span></span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">9</span>
                            <span><span className="comment">// Ready to build the future</span></span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">10</span>
                            <span>developer.<span className="function">code</span>();</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
