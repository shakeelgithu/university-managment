import React from "react";
// import { FaArrowRight } from 'react-icons/fa';


function Announcements() {
  // const [isHovered, setIsHove] = useState(false); // Moved inside the component
  // const [hovered, setHovered] = useState(false); // Moved inside the component

  return (
    <div>
  <div class="header-announcement">
        <h1>University Announcements</h1>
    </div>
    <div class="container-announcement">
        <div class="announcements">
            <h2>Latest Announcements</h2>
            <div class="announcement-item">
                <div class="icon">
                    <i class="fas fa-calendar-alt"></i>
                </div>
                <div class="date">
                    01
                    <span>OCT</span>
                </div>
                <div class="details">
                    <h3>New Semester Registration</h3>
                    <p>Registration for the new semester will start from October 1st. Please ensure to complete your registration before the deadline.</p>
                </div>
            </div>
            <div class="announcement-item">
                <div class="icon">
                    <i class="fas fa-trophy"></i>
                </div>
                <div class="date">
                    15
                    <span>SEP</span>
                </div>
                <div class="details">
                    <h3>Annual Sports Day</h3>
                    <p>The Annual Sports Day will be held on September 15th. All students are encouraged to participate and showcase their talents.</p>
                </div>
            </div>
            <div class="announcement-item">
                <div class="icon">
                    <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <div class="date">
                    30
                    <span>AUG</span>
                </div>
                <div class="details">
                    <h3>Guest Lecture on AI</h3>
                    <p>A guest lecture on Artificial Intelligence will be conducted by Dr. John Doe on August 30th. Don't miss this insightful session.</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default Announcements;
