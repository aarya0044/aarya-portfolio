// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "ATS-Optimized Resume Builder",
    desc:
      "Interactive webpage built using HTML, CSS, JS. Generates clean ATS-friendly resumes.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://aarya0044.github.io/assignment/"
  },
  {
    title: "Sulakshana Art Portfolio Website",
    desc: "Responsive website to showcase paintings and visual storytelling.",
    tags: ["HTML", "CSS", "JS", "Vercel"],
    link: "https://github.com/aarya0044/artbysulu-website"   
  },
  {
    title: "Talking Notes (Journal + Conversational Assistant)",
    desc: "Journaling web app that analyzes entries & replies conversationally (prototype).",
    tags: ["React", "Node (prototype)", "NLP"],
    link: "https://github.com/aarya0044/TalkingNotes?tab=readme-ov-file"   // placeholder for now
  },
];

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((p, idx) => (
        <article className="card project-card" key={idx}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>

          <div className="tags">
            {p.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 14 }}>
            <a className="btn" href={p.link} target="_blank" rel="noopener noreferrer"> View Project</a>
          </div>
        </article>
      ))}
    </div>
  );
}
