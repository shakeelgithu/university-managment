import React from "react";
// import { FaArrowRight } from 'react-icons/fa';


function Calendar() {
  // const [isHovered, setIsHove] = useState(false); // Moved inside the component
  // const [hovered, setHovered] = useState(false); // Moved inside the component

  return (
    <div>
    <header className="header">
        <h1>Event Calendar</h1>
      </header>
      <div className="container-Calendar">
        <div className="main-content">
          <div className="events">
            <h2>Summer 2024</h2>

            {/* Event 1 */}
            <div className="event-item">
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-XDi2rR1RprQHY3aEd4FXZOFp.png"
                alt="Event 1"
                width="100"
                height="100"
              />
              <div className="date">
                09
                <span>SEP</span>
              </div>
              <div className="details">
                <h3>JS-Zindigi Startup Competition – Islamabad Region 2024</h3>
              </div>
            </div>

            {/* Event 2 */}
            <div className="event-item">
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-FMo9UYFQdMixGOBPCiOziUdi.png"
                alt="Event 2"
                width="100"
                height="100"
              />
              <div className="date">
                15
                <span>AUG</span>
              </div>
              <div className="details">
                <h3>The Use of Machine Learning in Management Science Research</h3>
              </div>
            </div>

            {/* Event 3 */}
            <div className="event-item">
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-iTmynL1pFh3vcEADFePkVXg1.png"
                alt="Event 3"
                width="100"
                height="100"
              />
              <div className="date">
                25
                <span>JUL</span>
              </div>
              <div className="details">
                <h3>SZABIST University and S&amp;P Global – Visit</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Events</h2>
          <ul>
            <li>
              <a href="/">Summer 2024</a>
            </li>
            <li>
              <a href="/">Spring 2024</a>
            </li>
            <li>
              <a href="/">Fall 2023</a>
            </li>
            <li>
              <a href="/">Summer 2023</a>
            </li>
            <li>
              <a href="/">Spring 2023</a>
            </li>
            <li>
              <a href="/">Fall 2022</a>
            </li>
          </ul>
        </aside>
      </div>

    </div>
  );
}

export default Calendar;