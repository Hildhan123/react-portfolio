import React from 'react';

function Portfolio() {

  return (
    <section className="vg-page page-portfolio" id="portfolio">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead">Portfolio</div>
        </div>
        <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
        <div className="filterable-button py-3 wow fadeInUp" data-toggle="selected">
          <button className="btn btn-theme-outline selected" data-filter="*">All</button>
          <button className="btn btn-theme-outline" data-filter=".apps">Apps</button>
          <button className="btn btn-theme-outline" data-filter=".web">Web</button>
          <button className="btn btn-theme-outline" data-filter=".games">Games</button>
          <button className="btn btn-theme-outline" data-filter=".video">Video</button>
        </div>

        <div className="gridder my-3">
          <div className="grid-item apps wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-18(2).jpeg" data-fancybox data-caption="<h5 className='fg-theme'>Tekno Shop</h5> <p>Apps for Laptop Shop (Made by Flutter)</p>">
              <img src="assets/img/work/work-18(2).jpeg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Tekno Shop</h5>
                <p>Apps for Laptop Shop (Made by Flutter)</p>
              </div>
            </div>
          </div>

          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-10.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Sistem Informasi Laundry</h5> <p>Website about Laundry Information</p>">
              <img src="assets/img/work/work-10.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Sistem Informasi Laundry</h5>
                <p>Website about Laundry Information (Made by Laravel)</p>
              </div>
            </div>
          </div>

          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-17.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Line Tracer Design Contest 2022 UM</h5> <p>See my work <a href='http://ltdc.um.ac.id'>Here</a></p>">
              <img src="assets/img/work/work-17.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Line Tracer Design Contest 2022 UM</h5>
                <p>Website for Line Tracer Design Contest 2022 (Made by Laravel)</p>
              </div>
            </div>
          </div>
          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-19.jpg" data-fancybox data-caption="<h5 className='fg-theme'>PKM KITA</h5> <p>Website about Program Kreatifitas Mahasiswa Center (Made by Laravel)</p>">
              <img src="assets/img/work/work-19.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">PKM KITA</h5>
                <p>Website about Program Kreatifitas Mahasiswa Center (Made by Laravel)</p>
              </div>
            </div>
          </div>
          <div className="grid-item games wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-11.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Dancing Line 2D</h5> <p>See my work <a href='http://www.zonegamesid.com/2021/12/dancing-line-2d-membuat-game-dengan-unity.html'>Here</a></p>">
              <img src="assets/img/work/work-11.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Dancing Line 2D</h5>
                <p>Unity Games</p>
              </div>
            </div>
          </div>
          <div className="grid-item games web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-12.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Computer And Virus Beta</h5> <p><a href='/project/computerandvirusbeta'> Try it here</a></p>">
              <img src="assets/img/work/work-12.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Computer and Virus Beta</h5>
                <p>Web App Games, GDevelop5 Project</p>
              </div>
            </div>
          </div>
          <div className="grid-item video wow zoomIn">
            <div className="img-place" data-src="<iframe width='560' height='315' src='https://www.youtube.com/embed/a1aqc0QCMJg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" data-fancybox data-caption="<h5 className='fg-theme'>XII Mipa 8</h5> <p>My ClassName Documentation</p>">
              <img src="assets/img/work/work-13.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">XII Mipa 8</h5>
                <p>My ClassName Video Documentation</p>
              </div>
            </div>
          </div>
          <div className="grid-item video ios wow zoomIn">
            <div className="img-place" data-src="<iframe width='560' height='315' src='https://www.youtube.com/embed/TJPRE7Ufcyo' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" data-fancybox data-caption="<h5 className='fg-theme'>Line Tracer Design and Contest (LTDC) 2021</h5> <p>Bumber LTDC 2021</p>">
              <img src="assets/img/work/work-14.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Line Tracer Design and Contest (LTDC) 2021</h5>
                <p>Bumber LTDC 2021</p>
              </div>
            </div>
          </div>
          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-16.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Workshop Elektro</h5> <p><a href='http://elektro.um.ac.id/wse'>http://elektro.um.ac.id/wse</a></p>">
              <img src="assets/img/work/work-16.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Workshop Elektro</h5>
                <p>Official Website Workshop Elektro (Made by Wordpress)</p>
              </div>
            </div>
          </div>
          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-20.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Poltekbang</h5> <p>Website about Poltekbang Information System (Made by Laravel)</p>">
              <img src="assets/img/work/work-20.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Poltekbang</h5>
                <p>Website about Poltekbang Information System (Made by Laravel)</p>
              </div>
            </div>
          </div>
          <div className="grid-item games wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-22.jpg" data-fancybox data-caption="<h5 className='fg-theme'>TILANG</h5> <p>See my gameplay <a href='https://youtu.be/R8fVaqckvoE'>Here</a></p>">
              <img src="assets/img/work/work-22.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">TILANG</h5>
                <p>Unity Games, Gematik Game Competition 2022</p>
              </div>
            </div>
          </div>
          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-21.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Melijo.id</h5> <p>My team startup website (Made by Wordpress)</p>">
              <img src="assets/img/work/work-21.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Melijo.id</h5>
                <p>My team startup website (Made by Wordpress)</p>
              </div>
            </div>
          </div>
          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-23.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Arsip Demak</h5> <p>Made by Laravel❤</p>">
              <img src="assets/img/work/work-23.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Arsip Demak</h5>
                <p>Made by Laravel❤</p>
              </div>
            </div>
          </div>
          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-24.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Siminsa (Sistem Informasi Desa)</h5> <p>My internship project at Dinkominfo Demak</p>">
              <img src="assets/img/work/work-24.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Siminsa (Sistem Informasi Desa)</h5>
                <p>My internship project at Dinkominfo Demak</p>
              </div>
            </div>
          </div>
          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-25.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Herbify Landing Page</h5> <p>Create various backend APIs, landing page, and admin page.</p>">
              <img src="assets/img/work/work-25.jpg" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">Herbify Landing Page</h5>
                <p>Create various backend APIs, landing page, and admin page.</p>
              </div>
            </div>
          </div>
          <div className="grid-item web wow zoomIn">
            <div className="img-place" data-src="assets/img/work/work-26.png" data-fancybox data-caption="<h5 className='fg-theme'>E-voting</h5> <p>Create e-vote application for school BINA AMAL SEMARANG.</p>">
              <img src="assets/img/work/work-26.png" alt="" />
              <div className="img-caption">
                <h5 className="fg-theme">E-voting</h5>
                <p>Create e-vote application for school BINA AMAL SEMARANG.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
