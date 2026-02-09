const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>

      <div className="grid">
        <div className="card">
          <h3>AI / Machine Learning</h3>
          <p>Python, Scikit-learn, TensorFlow, Keras, Pandas, NumPy</p>
        </div>

        <div className="card">
          <h3>Data & Visualization</h3>
          <p>Matplotlib, Seaborn, Jupyter Notebook, Google Colab</p>
        </div>

        <div className="card">
          <h3>Web Development</h3>
          <p>React, JavaScript, HTML, CSS, PHP</p>
        </div>

        <div className="card">
          <h3>Databases & Tools</h3>
          <p>MySQL, MongoDB, Git, GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;