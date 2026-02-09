import { useEffect, useState } from "react";
import resume from "../assets/docs/Mir_Musaib_Resume.pdf";

const sections = [
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const sectionTop = element.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo"></div>

        <div className="nav-links">
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>

          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </a>

          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>

          <a
            href={resume}
            download
            className="resume-btn"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;