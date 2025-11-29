import React from "react";
import "./loader.css"; // keep your loader CSS file - ensure path is correct

export default function Loader() {
  return (
    <div className="loader">
      <div className="pulse" aria-hidden />
    </div>
  );
}
