import React from 'react';
// import './assets/vendor/themify-icons/css/themify-icons.css';

const About = () => {
  return (
    <div className="vg-page page-about" id="about">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <div className="img-place">
              <img src="assets/img/person_3.jpg" alt="Photo Profile" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="caption">
              <h2 className="fg-dark">Hildhan Fauzul Hakim</h2>
              <p className="fg-theme fw-medium">Fresh graduated from State University of Malang</p>
              <p>Take your failure for an experience. My biggest hope is to be able to study/work abroad.</p>
              <ul className="theme-list">
                <li className="fg-dark"><b>Birth:</b> Demak, Central Java, Indonesia</li>
                <li className="fg-dark"><b>Lives In:</b> Demak, Central Java, Indonesia</li>
                <li className="fg-dark"><b>Age:</b> 21</li>
                <li className="fg-dark"><b>Gender:</b> Male</li>
                <li className="fg-dark"><b>Passion:</b> Passion with things related to the technology and website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
