import React, { useEffect } from 'react';

const SkillsSection = () => {
  useEffect(() => {
    const skillsBars = document.querySelectorAll('.skill-bar');

    const options = {
      threshold: 0.8,
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.progress;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    skillsBars.forEach((bar) => {
      skillObserver.observe(bar);
    });

    return () => {
      skillObserver.disconnect();
    };
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
        {/* Add more skills with similar structure */}
      </div>
    </section>
  );
};

export default SkillsSection;
