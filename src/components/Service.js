import React from 'react';

const Service = () => {
  return (
    <section className="vg-page page-service" id="services">
      <h1 className="text-center wow fadeInUp">Services</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 wow fadeInUp">
            <div className="card card-body">
              <div className="iconic">
                <span className="ti-layout"></span>
                <img src="assets/img/logo/shoppe.png" style={{width:'40%', height:'40%'}}/>
              </div>
              <h4 className="fg-theme">Jasa Pembuatan Website (Website creation services)</h4>
              <p>Click for detailed information</p>
              <a target="_blank" href="https://shopee.co.id/hildhanhakim" className="btn btn-theme btn-rounded">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
