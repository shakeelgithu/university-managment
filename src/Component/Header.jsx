import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid ps-0 pe-0">
    <header className="header-style sticky-top ">
      <nav className="navbar navbar-expand-lg p-4">
        <Link className="navbar-brand ms-3" to="/">
          <span className="text-white">Logo</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {/* Dropdown for Criteria and Lists */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Criteria & Lists
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link className="dropdown-item" to="/eligibility">Eligibility Criteria</Link></li>
                <li><Link className="dropdown-item" to="/merit-list">Merit List</Link></li>
                <li><Link className="dropdown-item" to="/accounts">Accounts</Link></li>
              </ul>
            </li>

            {/* Dropdown for Academics and IT */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academics & IT
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><Link className="dropdown-item" to="/academics">Academics</Link></li>
                <li><Link className="dropdown-item" to="/it-department">IT Department</Link></li>
              </ul>
            </li>

            {/* Dropdown for News and Events */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News & Events
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><Link className="dropdown-item" to="/news">News Articles</Link></li>
                <li><Link className="dropdown-item" to="/events">Events Calendar</Link></li>
              </ul>
            </li>

            {/* Dropdown for Announcements and Research */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown4"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Announcements & Research
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li><Link className="dropdown-item" to="/announcements">Announcements</Link></li>
                <li><Link className="dropdown-item" to="/research-projects">Research Projects</Link></li>
                <li><Link className="dropdown-item" to="/research-publications">Research Publications</Link></li>
              </ul>
            </li>

            {/* Dropdown for Contact and Maps */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown5"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact & Maps
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown5">
                <li><Link className="dropdown-item" to="/contact-info">General Contact Info</Link></li>
                <li><Link className="dropdown-item" to="/campus-maps">Campus Maps and Directions</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>

      </nav>
    </header>
    </div>
  );
};

export default Header;
