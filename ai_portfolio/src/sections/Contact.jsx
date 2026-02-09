const Contact = () => {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>

      <div className="card contact-card">

        <p>
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:meermusaib20@gmail.com">
            meermusaib20@gmail.com
          </a>
        </p>

        <p>
          💻 <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/meermusaib20"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/meermusaib20
          </a>
        </p>

        <p>
          🔗 <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/mir-musaib"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mir-musaib
          </a>
        </p>

        <p>
          📍 <strong>Location:</strong>{" "}
          <a
            href="https://www.google.com/maps/place/Jammu+and+Kashmir"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jammu & Kashmir, India
          </a>
        </p>

      </div>
    </section>
  );
};

export default Contact;