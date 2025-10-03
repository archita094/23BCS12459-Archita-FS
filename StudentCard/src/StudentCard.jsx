import React from "react";
import "./StudentCard.css"; 

const StudentCard = ({ name, roll, course }) => {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Roll Number:</strong> {roll}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
};

export default StudentCard;
