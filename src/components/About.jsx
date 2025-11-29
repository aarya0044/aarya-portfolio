// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <>
      <div className="about-left">
        <h2>About</h2>

        <p>
          Hi, I’m Aarya — someone who loves exploring everything from AI and ML
          to full-stack web development and analytics. I’m obsessed with
          understanding how tech works behind the scenes and turning ideas into
          real products.
        </p>

        <p>
          Data fascinates me — I enjoy cleaning it, analyzing it, and finding
          stories hidden in patterns. I’m always experimenting with new tools —
          cloud platforms, modern JavaScript frameworks, and basic ML models.
          I’m the kind of person who gets excited about new trends and learns
          something new every week.
        </p>

        <p>
          I enjoy building user-friendly projects that feel clean, modern, and
          useful. With a startup-style mindset, I love brainstorming fresh ideas
          and figuring out how they can help people. My goal: keep learning,
          keep building, and keep growing in this fast-moving tech world.
        </p>
      </div>

      <div className="about-right">
        <img
          src="/my_photo.jpg"
          alt="Aarya"
          className="round-photo"
          loading="lazy"
        />
      </div>
    </>
  );
}
