import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-home mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-links">
              <li>Federal Urdu University of Arts, Science & Technology</li>
              <li>Kuri Road Islamabad, 45570, Pakistan</li>
              <li>Office: +92-9252861-64</li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <h4 className="footer-title">Location</h4>
            <div className="mapouter">
              <iframe
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=FUUAST Islamabad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Map showing location of FUUAST Islamabad" // Added title for accessibility
                sandbox="allow-same-origin allow-scripts allow-popups"
                style={{ width: '100%', height: '225px', border: '0' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className='text-white' /> */}
      <div className="footer-bottom">
        <p className="mb-0 ">&copy; {new Date().getFullYear()} Federal Urdu University. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
