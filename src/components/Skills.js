import React from 'react';

const Skills = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center fg-dark">My Soft Skills</h1>
      <div className="row py-3">
        <div className="col-md-6">
          <h4>Personal skills</h4>
          <ul className="list-group list-group-flush">
            <li className="fg-theme fw-medium list-group-item">Teamwork</li>
            <li className="fg-theme fw-medium list-group-item">Communication</li>
            <li className="fg-theme fw-medium list-group-item">Willingness to learn</li>
            <li className="fg-theme fw-medium list-group-item">Flexibility</li>
            <li className="fg-theme fw-medium list-group-item">Adaptability</li>
            <li className="fg-theme fw-medium list-group-item">Critical thinking</li>
            <li className="fg-theme fw-medium list-group-item">Creativity</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Preferred Language</h4>
          <div className="progress-wrapper">
            <span className="caption">Bahasa Indonesia</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '100%' }}>100%</div>
            </div>
          </div>
          <div className="progress-wrapper">
            <span className="caption">English</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '80%' }}>80%</div>
            </div>
          </div>
          <div className="progress-wrapper">
            <span className="caption">Japanese</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '20%' }}>20%</div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center fg-dark">My Hard Skills</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-11">
          <h4 className="text-center">Coding skills</h4>
          <div className="progress-wrapper justify-content-around text-center">
            <span className="badge badge-pill bg-theme text-white">Javascript</span>
            <span className="badge badge-pill bg-theme text-white">PHP</span>
            <span className="badge badge-pill bg-theme text-white">HTML</span>
            <span className="badge badge-pill bg-theme text-white">CSS</span>
            <span className="badge badge-pill bg-theme text-white">SQL</span>
            <span className="badge badge-pill bg-theme text-white">C++</span>
            <span className="badge badge-pill bg-theme text-white">Java</span>
            <span className="badge badge-pill bg-theme text-white">Python</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
