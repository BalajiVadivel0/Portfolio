import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import './App.css';

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        const hiddenElements = document.querySelectorAll('.animate-on-scroll');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="App">
            <Cursor />
            <ParticlesBackground />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Certificates />
            <Achievements />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
