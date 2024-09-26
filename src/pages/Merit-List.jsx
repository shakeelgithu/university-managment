import React from "react";

const departments = [
  {
    name: "Computer Science",
    students: [
      { name: "Alice", score: 95 },
      { name: "Bob", score: 89 },
    ],
  },
  {
    name: "Business Administration",
    students: [
      { name: "Charlie", score: 92 },
      { name: "David", score: 85 },
    ],
  },
  // Add more departments as needed
];

function MeritList() {
  return (
    <div className="merit-list-container">
      <h2>Merit List</h2>
      {departments.map((department, index) => (
        <div key={index} className="department-section">
          <h3>{department.name}</h3>
          <table className="merit-list-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Score (%)</th>
              </tr>
            </thead>
            <tbody>
              {department.students.map((student, idx) => (
                <tr key={idx}>
                  <td>{student.name}</td>
                  <td>{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default MeritList;
