import React from "react";

const Footer = () => {
    return (
        <div className="vg-footer">
            <h1 className="text-center">Virtual Folio</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 py-3">
                        <div className="footer-info">
                            <p>Where to find me</p>
                            <hr className="divider" />
                            <p className="fs-large fg-white">Griya Bhakti Praja Blok D-13, Mangunjiwan, Demak, Central Java, Indonesia</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 py-3">
                        <div className="float-lg-right">
                            <p>Follow me</p>
                            <hr className="divider" />
                            <ul className="list-unstyled">
                                <li><a href="https://www.instagram.com/hakim_hildhan">Instagram</a></li>
                                <li><a href="https://ms-my.facebook.com/hildhan.hakim">Facebook</a></li>
                                <li><a href="https://www.youtube.com/channel/UCsE0ohyJsrVtOynmC43dHOw">Youtube</a></li>
                                <li><a href="https://www.linkedin.com/in/hildhan-fauzul-hakim/">Linkedin</a></li>
                                <li><a href="https://github.com/Hildhan123">Github</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 py-3">
                        <div className="float-lg-right">
                            <p>Contact me</p>
                            <hr className="divider" />
                            <ul className="list-unstyled">
                                <li>hildhan123@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <p className="text-center mb-0 mt-4">Copyright &copy;2021 - {new Date().getFullYear()} | Credit to <a href="https://www.macodeid.com/">MACode ID</a> for this template {/* This template is made with <span className="ti-heart fg-theme-red"></span> by <a href="https://www.macodeid.com/">MACode ID</a> */}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;