import React, { useEffect, useState } from 'react';

const Minibar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 200; // Adjust offset as necessary

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="minibar">
            <div className="header">
                <div className="brand"></div>
            </div>
            <div className="content">
                <ul className="main-menu">
                    <li className={`menu-item ${activeSection === 'home' ? 'active' : ''}`}>
                        <a href="#home" className="menu-link">
                            <span className="icon ti-home"></span>
                            <span className="caption">Home</span>
                        </a>
                    </li>
                    <li className={`menu-item ${activeSection === 'about' ? 'active' : ''}`}>
                        <a href="#about" className="menu-link">
                            <span className="icon ti-user"></span>
                            <span className="caption">About</span>
                        </a>
                    </li>
                    <li className={`menu-item ${activeSection === 'services' ? 'active' : ''}`}>
                        <a href="#services" className="menu-link">
                            <span className="icon ti-layout"></span>
                            <span className="caption">Service</span>
                        </a>
                    </li>
                    <li className={`menu-item ${activeSection === 'portfolio' ? 'active' : ''}`}>
                        <a href="#portfolio" className="menu-link">
                            <span className="icon ti-briefcase"></span>
                            <span className="caption">Portfolio</span>
                        </a>
                    </li>
                    <li className={`menu-item ${activeSection === 'certificate' ? 'active' : ''}`}>
                        <a href="#certificate" className="menu-link">
                            <span className="icon ti-bookmark"></span>
                            <span className="caption">Certificate</span>
                        </a>
                    </li>
                    <li className={`menu-item ${activeSection === 'project' ? 'active' : ''}`}>
                        <a href="#project" className="menu-link">
                            <span className="icon ti-book"></span>
                            <span className="caption">Project</span>
                        </a>
                    </li>
                    <li className={`menu-item ${activeSection === 'contact' ? 'active' : ''}`}>
                        <a href="#contact" className="menu-link">
                            <span className="icon ti-location-pin"></span>
                            <span className="caption">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Minibar;
