import React from 'react';

const Home = () => {
  return (
    <div className="vg-page page-home" id="home" style={{ backgroundImage: 'url(assets/img/bg_image_3.jpg)' }}>
      <div className="caption wow zoomInUp">
        <h1 className="fw-normal">Welcome Welcome</h1>
        <h2 className="fw-medium fg-theme">I'm Hildhan Fauzul Hakim, call me Hildhan</h2>
        <p className="tagline">I am fresh graduated from Information Technology(IT) at State University of Malang</p>
        <a className="btn btn-theme-outline" href="/assets/file/CV English_Hildhan Fauzul Hakim.pdf">Download CV</a>
      </div>
    </div>
  );
};

export default Home;
