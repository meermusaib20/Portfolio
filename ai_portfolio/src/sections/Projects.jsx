const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="grid">

        <div className="card project">
          <h3>SmartHire — AI Hiring Assistant</h3>
          <p>
            AI-driven recruitment system for automated resume screening
            and candidate evaluation.
          </p>
          <div className="tech-stack">
            <span>Python</span>
            <span>React</span>
            <span>Scikit-learn</span>
          </div>
        </div>

        <div className="card project">
          <h3>Spam Email Classifier</h3>
          <p>
            Machine learning model to classify emails as spam or non-spam
            using TF-IDF and NLP techniques.
          </p>
          <div className="tech-stack">
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>NLP</span>
          </div>
        </div>

        <div className="card project">
          <h3>Spotify Churn Prediction</h3>
          <p>
            Predictive analysis to identify factors influencing user
            churn and retention.
          </p>
          <div className="tech-stack">
            <span>Python</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
          </div>
        </div>

        <div className="card project">
          <h3>Movie Recommendation System</h3>
          <p>
            Recommendation engine using similarity-based filtering
            to suggest movies.
          </p>
          <div className="tech-stack">
            <span>Python</span>
            <span>Pandas</span>
            <span>ML</span>
          </div>
        </div>

        <div className="card project">
          <h3>Weather Data Analysis</h3>
          <p>
            Data analysis and visualization to identify temperature
            trends and seasonal patterns.
          </p>
          <div className="tech-stack">
            <span>Python</span>
            <span>Pandas</span>
            <span>Matplotlib</span>
          </div>
        </div>

        <div className="card project">
          <h3>Hostel Ease — Hostel Management System</h3>
          <p>
            Web-based system to automate room allocation and resident
            operations.
          </p>
          <div className="tech-stack">
            <span>PHP</span>
            <span>MySQL</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="card project">
          <h3>Library Management System</h3>
          <p>
            Online resource management portal for efficient cataloging
            and tracking of library resources.
          </p>
          <div className="tech-stack">
            <span>PHP</span>
            <span>MySQL</span>
            <span>HTML/CSS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;