import React, { useEffect } from 'react';
import './SkillsSection.css'

const SkillsSection = () => {

  useEffect(() => {
    const skillsBars = document.querySelectorAll('.skill-bar');

    const options = {
      threshold: 0.8
    };

    const skillObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.progress;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    skillsBars.forEach(bar => {
      skillObserver.observe(bar);
    });
  }, []);

  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills</h2>
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
