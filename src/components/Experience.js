import React from 'react';

const Experience = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="fg-dark">Education</h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title">Jul 2020 - Jan 2024</div>
              <div className="details">
                <h5>Information Technology (IT)</h5>
                <small className="fg-theme">State University of Malang (UM)</small>
                <p>The study or use of systems (especially computers and telecommunications) for storing, retrieving, and sending information (Wiki).</p>
              </div>
            </li>
            {/* Add other education items here */}
          </ul>
        </div>
        <div className="col-md-6" data-wow-delay="200ms">
          <h2 className="fg-dark">Experience</h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title">Feb 2024 - present</div>
              <div className="details">
                <h5>Programming & Coding Mentor (Part-time)</h5>
                <small className="fg-theme">Timedoor Academy</small>
                <p>Mentoring kids and teens for programming and coding languages such as javascript, python, AI, game programming, AR/VR, etc.</p>
              </div>
            </li>
            {/* Add other experience items here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
