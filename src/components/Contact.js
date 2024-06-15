import React from 'react';

const Contact = () => {
  return (
    <div className="vg-page page-contact" id="contact">
      <h1 className="text-center fg-dark wow fadeInUp">Contact</h1>
      <div className="container-fluid">
        <div className="row py-5 justify-content-center">
          <ul>
            <li>
              <p className="fg-theme fw-medium">Email : hildhan123@gmail.com</p>
            </li>
            <li>
              <a className="fg-theme fw-medium" href="https://www.instagram.com/hakim_hildhan">
                <span className="icon ti-instagram"></span>
                <span className="caption">@hakim_hildhan</span>
              </a>
            </li>
            <li>
              <a className="fg-theme fw-medium" href="https://ms-my.facebook.com/hildhan.hakim">
                <span className="icon ti-facebook"></span>
                <span className="caption">Hildhan Hakim</span>
              </a>
            </li>
            <li>
              <a className="fg-theme fw-medium" href="https://www.youtube.com/channel/UCsE0ohyJsrVtOynmC43dHOw">
                <span className="icon ti-youtube"></span>
                <span className="caption">Hildhan Fauzul Hakim</span>
              </a>
            </li>
            <li>
              <a className="fg-theme fw-medium" href="https://www.linkedin.com/in/hildhan-fauzul-hakim/">
                <span className="icon ti-linkedin"></span>
                <span className="caption">Hildhan Fauzul Hakim</span>
              </a>
            </li>
            <li>
              <a className="fg-theme fw-medium" href="https://github.com/Hildhan123">
                <span className="icon ti-github"></span>
                <span className="caption">Hildhan123</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
