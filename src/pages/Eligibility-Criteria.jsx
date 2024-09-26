import React, { useState } from "react";

function Eligibility() {
  const [showPdf, setShowPdf] = useState(false);

  const criteriaList = [
    "Must have a minimum GPA of 3.0.",
    "Completion of all required prerequisite courses.",
    "Submission of a personal statement.",
    "Letters of recommendation required from two faculty members.",
    "Must pass the entrance examination.",
  ];

  // PDF document URL
  const pdfDocument = "https://fuuastisb.edu.pk/AdMission/Elligibility%20Criteria%20Autumn%202024%20(Updated).pdf";

  return (
    <div className="eligibility-container">
      {showPdf ? (
        <div>
          <h3>Eligibility Criteria Document</h3>
          <object
            data={pdfDocument}
            type="application/pdf"
            width="100%"
            height="600px"
          >
            <p>
              It appears you don't have a PDF plugin for this browser.
              No biggie... you can <a href={pdfDocument}>click here to download the PDF</a>.
            </p>
          </object>
          <button onClick={() => setShowPdf(false)} className="btn btn-secondary mt-3">Back to Eligibility Criteria</button>
        </div>
      ) : (
        <div>
          <h2 className="eligibility-title">Eligibility Criteria</h2>
          <ul className="eligibility-list">
            {criteriaList.map((criteria, index) => (
              <li key={index} className="eligibility-item">
                {criteria}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowPdf(true)}
            className="btn btn-primary mt-3"
          >
            View PDF Document
          </button>
        </div>
      )}
    </div>
  );
}

export default Eligibility;
  