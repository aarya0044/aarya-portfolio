import React, { useState } from "react";

/*
  Expects public/robot.png
  On click: show quick popup "Hi — Welcome!"
  On hover: subtle lift
*/
export default function Robot() {
  const [msg, setMsg] = useState(false);

  function handleClick() {
    setMsg(true);
    setTimeout(() => setMsg(false), 1600);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="robot-wrap"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        title="Click me!"
      >
        <img src="/robot.png" alt="robot" className="robot-img" />
        <div className="robot-ring" aria-hidden />
      </div>

      {msg && <div className="robot-msg">Hi — Welcome!</div>}
    </div>
  );
}
