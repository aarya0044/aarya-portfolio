<header className="navbar">
  <div className="brand"></div>

  <nav className="nav-links">
    <a href="#projects">Projects</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </nav>

  <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? "🌙" : "☀️"}
  </button>
</header>
