import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`app ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <header className="header">
        <h1 className="logo">Jalaj Sharma</h1>

        {/* Hamburger Menu Icon */}
        <div className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation */}
        <nav className={`navigation ${mobileMenuOpen ? 'mobile-navigation' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-button ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => handleNavigation(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="main">
        {/* Use conditional rendering based on the current active section */}
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <footer className="footer">
        {/* Add social media icons and additional contact information */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/j-sharma93/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-icon.png" alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="https://github.com/jalajsharma93" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-icon.png" alt="GitHub" className="footer-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
