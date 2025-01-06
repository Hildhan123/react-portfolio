import React from 'react';

const calculateAge = (birthDate) => {
  const dob = new Date(birthDate);
  const month_diff = Date.now() - dob.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  return Math.abs(year - 1970);
};

const About = () => {
  const age = calculateAge("07/15/2002");

  return (
    <section className="vg-page page-about" id="about">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <div className="img-place wow zoomIn">
              <img src="assets/img/person_3.jpg" alt="Photo Profile"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="caption wow fadeInRight">
              <h2 className="fg-dark">Hildhan Fauzul Hakim</h2>
              <p className="fg-theme fw-medium">Fullstack Developer | Software Engineer | Game Developer enthusiast</p>
              <p>Take your failure for an experience. My biggest hope is to be able to study/work abroad.</p>
              <ul className="theme-list">
                <li className="fg-dark"><b>Birth:</b> Demak, Central Java, Indonesia</li>
                <li className="fg-dark"><b>Lives In:</b> Demak, Central Java, Indonesia</li>
                <li className="fg-dark"><b>Age:</b> {age}</li>
                <li className="fg-dark"><b>Gender:</b> Male</li>
                <li className="fg-dark"><b>Passion:</b> Passion with things related to the technology and website</li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
      <div className="container mt-5">
        <h1 className="text-center fg-dark wow fadeInUp">My Soft Skills</h1>
        <div className="row py-3">
          <div className="col-md-6">
            <h4 className="wow fadeInUp">Personal skills</h4>
            <ul className="list-group list-group-flush">
              <li className="fg-theme fw-medium list-group-item">Hard Worker</li>
              <li className="fg-theme fw-medium list-group-item">Teamwork</li>
              <li className="fg-theme fw-medium list-group-item">Communication</li>
              <li className="fg-theme fw-medium list-group-item">Willingness to learn</li>
              <li className="fg-theme fw-medium list-group-item">Flexibility</li>
              <li className="fg-theme fw-medium list-group-item">Adaptability</li>
              <li className="fg-theme fw-medium list-group-item">Creativity</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="wow fadeInUp">Prefered Languange</h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Bahasa Indonesia  </span><img src="https://img.icons8.com/color/20/000000/indonesia.png"/>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">English  </span><img src="https://img.icons8.com/doodle/20/000000/great-britain.png"/>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">85%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Japanese  </span><img src="https://img.icons8.com/color/20/000000/japan.png"/>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">40%</div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center fg-dark wow fadeInUp">My Hard Skills</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-md-11 ">
              <h4 className="wow fadeInUp text-center">Coding skills</h4>
                <div className="progress-wrapper wow fadeInUp justify-content-around text-center">
                    <span className="badge badge-pill bg-theme text-white">Javascript</span>
                    <span className="badge badge-pill bg-theme text-white">PHP</span>
                    <span className="badge badge-pill bg-theme text-white">HTML</span>
                    <span className="badge badge-pill bg-theme text-white">CSS</span>
                    <span className="badge badge-pill bg-theme text-white">SQL</span>
                    <span className="badge badge-pill bg-theme text-white">C++</span>
                    <span className="badge badge-pill bg-theme text-white">Java</span>
                    <span className="badge badge-pill bg-theme text-white">Python</span>
                    <span className="badge badge-pill bg-theme text-white">Typescript</span>
                </div>
            </div>
            <div className="col-md-11 ">
              <h4 className="wow fadeInUp text-center">Web skills</h4>
                <div className="progress-wrapper wow fadeInUp justify-content-around text-center">
                  <span className="badge badge-pill bg-theme text-white">Node.js</span>
                  <span className="badge badge-pill bg-theme text-white">React</span>
                  <span className="badge badge-pill bg-theme text-white">Next.js</span>
                  <span className="badge badge-pill bg-theme text-white">tRPC</span>
                  <span className="badge badge-pill bg-theme text-white">Laravel</span>
                  <span className="badge badge-pill bg-theme text-white">Wordpress</span>
                  <span className="badge badge-pill bg-theme text-white">SEO</span>
                  <span className="badge badge-pill bg-theme text-white">Conten Management</span>
                  <span className="badge badge-pill bg-theme text-white">UI/UX(Canva, FIgma)</span>
                  <span className="badge badge-pill bg-theme text-white">Analytic (Google)</span>
              </div>
            </div>
            <div className="col-md-10 ">
              <h4 className="wow fadeInUp text-center">Other Skill</h4>
                <div className="progress-wrapper wow fadeInUp justify-content-around text-center">
                  <span className="badge badge-pill bg-theme text-white">Git</span>
                  <span className="badge badge-pill bg-theme text-white">Rest Api</span>
                  <span className="badge badge-pill bg-theme text-white">Cloud Computing</span>
                  <span className="badge badge-pill bg-theme text-white">Google Cloud Platform (GCP)</span>
                  <span className="badge badge-pill bg-theme text-white">Amazon Web Services (AWS)</span>
                  <span className="badge badge-pill bg-theme text-white">Cloud Engineer</span>
                  <span className="badge badge-pill bg-theme text-white">Flutter</span>
                  <span className="badge badge-pill bg-theme text-white">Unity (Game Engine)</span>
                  <span className="badge badge-pill bg-theme text-white">GDevelop (Game Engine)</span>
                  <span className="badge badge-pill bg-theme text-white">Video Editing</span>
              </div>
            </div>
          </div>
      </div> 
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 wow fadeInRight">
            <h2 className="fg-dark">Education</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title"> Jul 2020 - Jan 2024</div>
                <div className="details">
                  <h5>Information Technology (IT) / Computer Science</h5>
                  <small className="fg-theme">State University of Malang (UM)</small>
                  <p>I am very active in University. I participate in competitions, organizations, projects, freelance and startup work. I have IT experience in full Stack Engineer and Game Programming. My GPA is 3.85 out of 4.00.
                    <br/>Many my project was from this study. <a href="#portfolio" className="fg-theme">See below</a>
                  </p>
                </div>
              </li>
              <li>
                <div className="title"> Feb 2023 - Jul 2023</div>
                <div className="details">
                  <h5>Cloud Computing</h5>
                  <small className="fg-theme">Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka</small>
                  <p>One semester program from the Indonesian Ministry of Education (Kemdikbud). Bangkit Academy exists as a collaboration that provides many courses, one of which is cloud computing.
                  </p>
                </div>
              </li>
              <li>
                <div className="title"> Jul 2022 - Aug 2022</div>
                <div className="details">
                  <h5>Huawei Cloud Computing Course</h5>
                  <small className="fg-theme">DIGITALTALENT Scholarship FGA 2022</small>
                  <p>One month course learning about cloud computing from huawei. This course or program also comes from Indonesian Ministry of Education (Kemdikbud).
                  </p>
                </div>
              </li>
              <li>
                <div className="title"> May 2022 - Dec 2022</div>
                <div className="details">
                  <h5>Backend Developer & Multi-Platfrom App Developer Course</h5>
                  <small className="fg-theme">DICODING IDCAMP Scholarship 2022</small>
                  <p>Online course scholarships from dicoding that study Backend Developer & Multi-Platfrom App Developer
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
            <h2 className="fg-dark">Experience</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">Aug 2024 - present</div>
                <div className="details">
                  <h5>Engineer</h5>
                  <small className="fg-theme">Expact Inc.</small>
                  <p>Remote engineer at Expact Inc. Shizuoka, Japan. Here I learn many things like AWS, trpc, Next.js, and even Japanese.</p>
                </div>
              </li>
              <li>
                <div className="title">Feb 2024 - Aug 2024</div>
                <div className="details">
                  <h5>Programming & Coding Mentor (Part-time)</h5>
                  <small className="fg-theme">Timedoor Academy</small>
                  <p>Mentoring kids and teens for programming and coding languange such as javascript, python, AI, game programming, AR/VR, etc</p>
                </div>
              </li>
              <li>
                <div className="title">Jul 2023 - present</div>
                <div className="details">
                  <h5>Chief Data Officer (Remote)</h5>
                  <small className="fg-theme">Herbify</small>
                  <p>Legally was Chief Data Officer (CDO) but still helping the backend team to create various APIs and website</p>
                </div>
              </li>
              <li>
                <div className="title">Jun 2023 - Jul 2023</div>
                <div className="details">
                  <h5>Fullstack Developer Internship</h5>
                  <small className="fg-theme">Dinas Komunikasi dan Informatika (Dinkominfo) Demak</small>
                  <p>My Internship program which is creating systems and application called siminsa. See my work below <a href="#portfolio" className="fg-theme">here</a></p>
                </div>
              </li>
              <li>
                <div className="title">Jul 2022 - Jul 2023</div>
                <div className="details">
                  <h5>Chief Technology Officer (CTO) </h5>
                  <small className="fg-theme">Melijo.id</small>
                  <p>Melijo.id is my team start up. In here i work as Chief Technology Officer(CTO) who take care of various technologies
                  </p>
                </div>
              </li>
              <li>
                <div className="title">Jun 2021 - Dec 2022</div>
                <div className="details">
                  <h5>Workshop Elektro (Organization)</h5>
                  <small className="fg-theme">elektro.um.ac.id/wse</small>
                  <p>Its very fun organization but its a tough too. 
                    Many soft skill and hard skill I learn from here. Soft skill like Time management, Communication, etc. 
                    I got hard skill too like creating website. <a href="#portfolio" className="fg-theme">See below</a> 
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
