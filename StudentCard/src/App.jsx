import React from "react";
import StudentCard from "./StudentCard";
import './App.css'

const students = [
  { name: "Archita Srivastava", roll: "101", course: "Computer Science" },
  { name: "Rohini Sharma", roll: "102", course: "Mechanical Engineering" },
  { name: "Priya Singh", roll: "103", course: "Electrical Engineering" },
  { name: "Anjali Verma", roll: "104", course: "Civil Engineering" }
];

const App = () => {
  return (
    <div className="container">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          roll={student.roll}
          course={student.course}
        />
      ))}
    </div>
  );
};

export default App;
