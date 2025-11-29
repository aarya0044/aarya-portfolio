// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">© 2025 Aarya Dharmadhikari</div>

        <div className="footer-links" aria-hidden>
          <a
            href="https://github.com/aarya0044"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="footer-icon"
          >
            {/* simple GitHub SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.8 1.9 1.1.1-.9.4-1.5.8-1.9-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C18 6 19 6.2 19 6.2c.6 1.6.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6C20.2 21.4 23.5 17 23.5 12 23.5 5.6 18.4.5 12 .5z"
                fill="currentColor"
                opacity="0.95"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/aarya-dharmadhikari-b282b027a"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="footer-icon"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM8 8h4.8v1.9h.1c.7-1.3 2.6-2.6 5.4-2.6 5.8 0 6.9 3.7 6.9 8.5V22h-5v-6.7c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V22H8V8z"
                fill="currentColor"
                opacity="0.95"
              />
            </svg>
          </a>

          <a
            href="mailto:aaryadharmadhikari9850@gmail.com"
            title="Email"
            className="footer-icon"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 13.3L.4 4.6V19c0 1.1.9 2 2 2h19.2c1.1 0 2-.9 2-2V4.6L12 13.3zM12 11.2L23.6 2H.4L12 11.2z"
                fill="currentColor"
                opacity="0.95"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
