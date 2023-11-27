import React, { useEffect } from 'react';
import './SkillsSection.css'; // Import CSS file for styling

const SkillsSection = () => {

  useEffect(() => {
    // Use useEffect hook to perform side-effects
    const skillsBars = document.querySelectorAll('.skill-bar'); // Select all elements with class 'skill-bar'

    const options = {
      threshold: 0.8 // Set options for IntersectionObserver
    };

    const skillObserver = new IntersectionObserver(function(entries, observer) {
      // Create IntersectionObserver to track elements entering the viewport
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When an element is intersecting the viewport
          entry.target.style.width = entry.target.dataset.progress; // Set width based on 'data-progress'
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    }, options);

    skillsBars.forEach(bar => {
      skillObserver.observe(bar); // Observe each 'skill-bar' element
    });
  }, []); // Empty dependency array to run the effect only once (on mount)

  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        {/* Placeholder elements for skills with progress bars */}
        <div className="skill">
          <span className="skill-label">HTML</span>
          <div className="skill-bar" data-progress="90%"></div>
        </div>

        <div className="skill">
          <span className="skill-label">CSS</span>
          <div className="skill-bar" data-progress="80%"></div>
        </div>

        <div className="skill">
          <span className="skill-label">Java</span>
          <div className="skill-bar" data-progress="70%"></div>
        </div>

        <div className="skill">
          <span className="skill-label">React</span>
          <div className="skill-bar" data-progress="0%"></div>
        </div>

        <div className="skill">
          <span className="skill-label">Python</span>
          <div className="skill-bar" data-progress="40%"></div>
        </div>

        {/* Add more skills as needed */}
        
      </div>
    </section>
  );
};

export default SkillsSection;
