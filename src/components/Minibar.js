import React from 'react';

const Minibar = () => {
    return (
        <div class="minibar">
            <div class="header">
                <div class="brand">

                </div>
            </div>
            <div class="content">
                <ul class="main-menu">
                    <li class="menu-item active">
                        <a href="#home" class="menu-link">
                            <span class="icon ti-home"></span>
                            <span class="caption">Home</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#about" class="menu-link">
                            <span class="icon ti-user"></span>
                            <span class="caption">About</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#services" class="menu-link">
                            <span class="icon ti-layout"></span>
                            <span class="caption">Service</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#portfolio" class="menu-link">
                            <span class="icon ti-briefcase"></span>
                            <span class="caption">Portfolio</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#certificate" class="menu-link">
                            <span class="icon ti-bookmark"></span>
                            <span class="caption">Certificate</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#project" class="menu-link">
                            <span class="icon ti-book"></span>
                            <span class="caption">Project</span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#contact" class="menu-link">
                            <span class="icon ti-location-pin"></span>
                            <span class="caption">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Minibar;