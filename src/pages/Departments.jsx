import React from "react";
// import { FaArrowRight } from 'react-icons/fa';


function Departments() {
  // const [isHovered, setIsHove] = useState(false); // Moved inside the component
  // const [hovered, setHovered] = useState(false); // Moved inside the component

  return (
    <div>
   <div class="it-department-container">
  <section class="hero-section d-flex align-items-center text-center">
    <div class="container">
      <h1 class="display-4">IT Department</h1>
      <p class="lead">Innovative Technology Solutions for a Digital Future</p>
      <a href="#services" class="btn btn-lg btn-primary px-5 py-3 mt-4">Explore Services</a>
    </div>
  </section>

  <section id="services" class="services-section py-5">
    <div class="container text-center">
      <h2 class="section-title mb-5">Our Services</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card service-card shadow-lg">
            <div class="card-body">
              <i class="service-icon bi bi-cloud-upload-fill"></i>
              <h5 class="card-title">Cloud Solutions</h5>
              <p class="card-text">Seamless and scalable cloud services to empower your business operations.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card service-card shadow-lg">
            <div class="card-body">
              <i class="service-icon bi bi-shield-lock-fill"></i>
              <h5 class="card-title">Cybersecurity</h5>
              <p class="card-text">Top-notch security measures to protect your data and systems.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card service-card shadow-lg">
            <div class="card-body">
              <i class="service-icon bi bi-gear-fill"></i>
              <h5 class="card-title">Tech Support</h5>
              <p class="card-text">Expert technical support available 24/7 to resolve any issues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="teams-section py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Meet Our Teams</h2>
        <p class="section-subtitle">Dedicated professionals at your service</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card team-card shadow-sm">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="Development Team" />
            <div class="card-body">
              <h5 class="card-title">Development Team</h5>
              <p class="card-text">Innovating and building custom software solutions for our institution.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card team-card shadow-sm">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="Support Team" />
            <div class="card-body">
              <h5 class="card-title">Support Team</h5>
              <p class="card-text">Ready to troubleshoot and assist with IT-related challenges.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card team-card shadow-sm">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="Security Team" />
            <div class="card-body">
              <h5 class="card-title">Security Team</h5>
              <p class="card-text">Ensuring the safety and integrity of systems and data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="contact-section py-5 text-center">
    <div class="container">
      <h2 class="section-title">Need Assistance?</h2>
      <p class="lead">Reach out to our IT department for any queries or support.</p>
      <a href="mailto:it-support@university.com" class="btn btn-lg btn-outline-light shadow-sm">Contact Us</a>
    </div>
  </section>
</div>


    </div>
  );
}

export default Departments;
