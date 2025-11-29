import React, { useState } from "react";

export default function Hero() {
  const [showMsg, setShowMsg] = useState(false);
  const [showHover, setShowHover] = useState(false);

  function onRobotClick() {
    setShowHover(false); // hide hover text
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-name">Aarya Dharmadhikari</h1>

          <p className="hero-subtitle">
            Aspiring Data Analyst • ML & Web Dev Enthusiast • startup explorer
          </p>

          <div className="hero-ctas">
            <a className="btn primary" href="/Aarya_Resume.pdf" download>
              ⬇ Resume
            </a>
            <a className="btn ghost" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — ROBOT */}
        <div className="hero-right">
          <div
            className="robot-wrap"
            onMouseEnter={() => setShowHover(true)}
            onMouseLeave={() => setShowHover(false)}
            onClick={onRobotClick}
          >
            <img src="/robot.png" alt="robot" className="robot-img" />

            {/* Hover Tooltip */}
            {showHover && !showMsg && (
              <div className="robot-tooltip">Click me!</div>
            )}

            {/* Click Message */}
            {showMsg && <div className="robot-msg">Hi — Welcome!</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
