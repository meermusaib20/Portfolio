import profile from "../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-card hero-center">

        <img
          src={profile}
          alt="Mir Musaib"
          className="hero-avatar"
        />

        <h1>Mir Musaib</h1>

        <p className="subtitle">
          AI / ML Engineer — Building Intelligent Systems
        </p>

        <p className="description">
          I build AI-powered applications, ML pipelines, and
          production-ready systems with clean architecture.
        </p>

        {/* HERO CTA GRID */}
        <div className="hero-cta-grid">
          <a href="#projects" className="cta primary">Projects</a>
          <a href="#skills" className="cta outline">Skills</a>
          <a href="#about" className="cta primary">About</a>

          <a href="#education" className="cta outline">Education</a>
          <a href="#contact" className="cta primary">Contact</a>
          <a href="#resume" className="cta outline">Resume</a>
        </div>

      </div>
    </section>
  );
};

export default Hero;