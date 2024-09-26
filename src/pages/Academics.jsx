import React from "react";


function Academics() {
  const programs = {
    "BS Bachelor Program (4 Years)": [
      "Artificial Intelligence (Evening/Morning)",
      "Business Administration (Morning)",
      "Commerce (Morning)",
      "Computer Engineering (Evening/Morning)",
      "Computer Sciences (Evening/Morning)",
      "Economics (Morning)",
      "Economics with Data Science (Morning)",
      "Economics & Finance (Morning)",
      "Electrical Engineering (Morning)",
      "English (Morning)",
      "International Relations (Morning)",
      "Islamic Studies (Morning)",
      "Mass Communication (Morning)",
      "Mathematical Sciences (Morning)",
      "Physics (Morning)",
      "Software Engineering (Evening/Morning)",
      "Statistics (Morning)",
      "Urdu (Morning)",
    ],
    "BS 3rd Year Program (5th Semester Intake)": [
      "Business Administration (Morning)",
      "Commerce (Morning)",
      "Computer Sciences (Evening/Morning)",
      "Economics (Morning)",
      "Economics & Finance (Morning)",
      "English (Morning)",
      "International Relations (Morning)",
      "Islamic Studies (Morning)",
      "Mass Communication (Morning)",
      "Mathematical Sciences (Morning)",
      "Physics (Morning)",
      "Urdu (Morning)",
    ],
    "Associate Degree Program (2 Years)": [
      "Business Administration (Morning)",
      "Commerce (Morning)",
      "Computer Sciences (Evening/Morning)",
      "Economics (Morning)",
      "Economics & Finance (Morning)",
      "English (Morning)",
      "International Relations (Morning)",
      "Islamic Studies (Morning)",
      "Mass Communication (Morning)",
      "Mathematical Sciences (Morning)",
      "Physics (Morning)",
      "Software Engineering (Evening/Morning)",
      "Statistics (Morning)",
      "Urdu (Morning)",
    ],
    "Master/M.Phil/MS Program": [
      "Business Administration (Morning)",
      "Computer Sciences (Morning)",
      "Electrical Engineering",
      "Economics (Morning)",
      "Islamic Studies (Morning)",
      "Physics (Morning)",
      "Urdu (Morning) Not being offered in Autumn 2024",
    ],
    "Ph.D Program": [
      "Business Administration (Morning)",
      "Computer Science (Morning)",
      "Economics (Morning)",
      "Electrical Engineering (Morning)",
      "Urdu (Morning) Not being offered in Autumn 2024",
    ],
  };

  return (
    <div className="background-academies">
      <div className="container-fluid">
        <div className="home">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="Academies-heading">
                <h6 className="fw-normal text-uppercase fs-5 mt-5 mb-3 Edu-Acd">Academies</h6>
                <h1 className="title">Knowledge in Service of Justice</h1>
              </div>
              <p className="Text-Academmies">
                Notre Dame is a leading American research university that enriches its students with a unique scholarly community.
              </p>
            </div>
          </div>

          <div className="stats stats-academics">
            <h2 className="stats-title fade-in">Academic Achievements</h2>
            <div className="row">
              <div className="col-md-6">
                {/* <ul className="no-bullets stats-primary">
                  <li><strong>20</strong> Rhodes Scholars</li>
                  <li><strong>#1</strong> in the nation in faculty awarded National Endowment for the Humanities fellowships</li>
                  <li><strong>33%</strong> of undergraduates are involved in research</li>
                </ul> */}
              </div>
              <div className="col-md-6">
                {/* <ul className="no-bullets stats-secondary">
                  <li><strong>9:1</strong> student to faculty ratio</li>
                  <li><strong>84%</strong> of Notre Dame pre-med students are admitted to medical school</li>
                  <li><strong>90%</strong> of classes have fewer than 50 students</li>
                  <li><strong>91%</strong> of faculty have doctorate or terminal degrees</li>
                </ul> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="accordion" id="accordionExample">
              {Object.entries(programs).map(([program, subjects], index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {program}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <h6 className="card-subtitle mb-2 text-muted">Subjects Offered:</h6>
                        <ul className="card-text">
                          {subjects.map((subject, subIndex) => (
                            <li key={subIndex}>{subject}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Academics;
