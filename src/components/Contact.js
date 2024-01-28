import React from 'react';

const Contact = () => {
  return (
    <div className="content">
      <div className="intro">
        <h2 className="section-title">Contact Me</h2>
      </div>
      <div className="contact-overview">
        <p>
          I'm open to new opportunities and collaborations. Feel free to reach out to me through the following channels:
        </p>
        <div className="contact-info">
          <div className="contact-item">
            ✉️ <p>Email: tojalaj@gmail.com</p>
          </div>
          <div className="contact-item">
            🌐{' '}
            <p>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/j-sharma93/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </p>
          </div>
          <div className="contact-item">
            📚{' '}
            <p>
              GitHub:{' '}
              <a href="https://github.com/jalajsharma93" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;