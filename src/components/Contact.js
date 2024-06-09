import React from 'react';

const Contact = () => {
  return (
    <div className="container py-3" id="contact">
      <h2 className="fw-normal text-center">Contact</h2>
      <div className="row py-3">
        <div className="col-md-6">
          <div className="card-page">
            <h3 className="fg-theme">Get in Touch</h3>
            <p>Hildhan Fauzul Hakim</p>
            <p>hildhanfauzulhakim@gmail.com</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-page">
            <h3 className="fg-theme">Social Media</h3>
            <a href="https://github.com/Hildhanfauzulhakim" className="btn btn-fab"><span className="ti-github"></span></a>
            <a href="https://www.linkedin.com/in/hildhan-fauzul-hakim-458624225/" className="btn btn-fab"><span className="ti-linkedin"></span></a>
            <a href="https://www.instagram.com/hildhanfh/" className="btn btn-fab"><span className="ti-instagram"></span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
