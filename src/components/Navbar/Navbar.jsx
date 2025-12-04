import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'certificates', 'contact'];

            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', href: 'home' },
        { name: 'About', href: 'about' },
        { name: 'Skills', href: 'skills' },
        { name: 'Experience', href: 'experience' },
        { name: 'Education', href: 'education' },
        { name: 'Projects', href: 'projects' },
        { name: 'Certificates', href: 'certificates' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <div className="nav-logo" onClick={(e) => scrollToSection(e, 'home')}>
                    Portfolio
                </div>

                <button
                    className={`nav-toggle ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={`#${link.href}`}
                                className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
                                onClick={(e) => scrollToSection(e, link.href)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
