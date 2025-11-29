// src/App.jsx
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./index.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // simple loader
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // add theme class on root element for CSS rules
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <>
      {loading && <Loader />}

      <div className="app">
        <header className="navbar">
          <div className="brand"></div>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setDarkMode((s) => !s)}
            title={darkMode ? "Switch to light" : "Switch to dark"}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </header>

        <main>
          <section id="hero" className="fade-section hero-section">
            <Hero />
          </section>

          <div className="container">
            <section id="about" className="fade-section about-section">
              <About />
            </section>

            <section id="projects" className="fade-section" style={{ marginTop: 48 }}>
              <h2 className="section-title">Projects</h2>
              <Projects />
            </section>

            <section id="skills" className="fade-section" style={{ marginTop: 48 }}>
              <h2 className="section-title">Skills</h2>
              <Skills />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
