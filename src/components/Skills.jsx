// src/components/Skills.jsx
import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Python (Basics)",
  "Power BI",
  "Excel",
];

export default function Skills() {
  return (
    <>
      <div className="skills-list">
        {skills.map((s) => (
          <div key={s} className="skill-pill">
            {s}
          </div>
        ))}
      </div>
    </>
  );
}
