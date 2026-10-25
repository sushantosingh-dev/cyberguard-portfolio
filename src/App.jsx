import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">🛡️ SUSHANTO<span>.</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">CYBERSECURITY • WEB DEVELOPMENT</p>
            <h1>Hi, I'm <span>Sushanto Singh</span></h1>
            <h2>Aspiring Cybersecurity Developer</h2>
            <p className="intro">
              B.Tech CSE student passionate about cybersecurity,
              secure web applications, and building useful digital solutions.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">Explore Projects ↗️</a>
              <a className="btn secondary" href="#contact">Contact Me</a>
            </div>
            <p className="availability">● Open to learning and opportunities</p>
          </div>

          <div className="shield-card">
            <div className="shield">🛡️</div>
            <p>CYBER DEFENSE</p>
            <span>Learn • Build • Secure</span>
          </div>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">WHO I AM</p>
          <h2>About <span>Me</span></h2>
          <p className="section-text">
            I'm a Computer Science and Engineering student interested in
            cybersecurity and web development. I enjoy learning security
            concepts and developing projects that help people understand
            digital threats.
          </p>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">WHAT I'VE BUILT</p>
          <h2>Featured <span>Project</span></h2>
          <div className="project-card">
            <div className="project-icon">🛡️</div>
            <p className="project-label">FEATURED PROJECT</p>
            <h3>CyberGuard</h3>
            <p className="project-subtitle">
              Cyber Security Awareness &amp; Threat Detection System
            </p>
            <p className="section-text">
              A cybersecurity platform featuring threat detection,
              password security checks, phishing URL scanning, file scanning,
              scam detection, network security, scan history, security reports,
              and awareness tools.
            </p>
            <div className="tags">
              <span>React</span><span>JavaScript</span>
              <span>Flask</span><span>MongoDB</span>
            </div>
            <a className="btn primary"
              href="https://cyber-guard-frontend-vert.vercel.app"
              target="_blank" rel="noreferrer">
              Open Live Project ↗️
            </a>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Technical <span>Skills</span></h2>
          <div className="skills-grid">
            {["C Programming", "Python", "JavaScript", "HTML & CSS",
              "React.js", "Flask", "MongoDB", "Cybersecurity",
              "Git & GitHub"].map(skill => (
              <div className="skill" key={skill}>✦ {skill}</div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Contact <span>Me</span></h2>
          <p className="section-text">
            Interested in my project or want to connect about technology?
            Feel free to reach out.
          </p>
          <a className="btn primary"
            href="mailto:sskio78588@gmail.com">
            ✉️ Email Me
          </a>
          <a
          className="btn secondary"
          href="/Sushanto-Singh-Resume.pdf"
          download
        >
          Download Resume ↓
        </a>
        </section>
      </main>

      <footer>© 2026 Sushanto Singh · Cybersecurity Portfolio</footer>
    </div>
  );
}

export default App;