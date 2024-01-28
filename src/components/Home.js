
import React from 'react';

const Home = () => {
  return (
    <div className="content">
      <div className="intro">
        <h1 className="title">Hello, I'm Jalaj Sharma</h1>
        <p className="subtitle">A Passionate Software Developer</p>
      </div>
      <div className="overview">
        <p>
          Welcome to my digital space where creativity meets functionality. With over 7 years of hands-on experience, I thrive in designing and implementing reliable, high-performance, and scalable software platforms.
        </p>
        <p>
          Explore my portfolio to discover how I turn ideas into reality, navigate through innovative solutions, and contribute to the ever-evolving world of technology.
        </p>
        {/* Add LinkedIn and GitHub icons with local images */}
        <div className="social-icons">
        </div>
      </div>
    </div>
  );
};

export default Home;