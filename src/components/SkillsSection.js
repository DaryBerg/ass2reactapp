import React, { useEffect, useState } from 'react';
import './SkillsSection.css'; // Import your CSS file

const SkillsSection = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const skillsBars = document.querySelectorAll('.skill-bar');

    const options = {
      threshold: 0.8
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
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

    setShowSkills(true); // Once component mounts, set to true to show skills

    return () => {
      skillsBars.forEach(bar => {
        skillObserver.unobserve(bar);
      });
    };
  }, []); // Run only once on component mount

  return (
    <section className="skills-section">
      {showSkills && (
            <section class="skills-section">
            <div class="container">
                <h2>Skills</h2>
                <div class="skill">
                    <span class="skill-label">HTML</span>
                    <div class="skill-bar" data-progress="90%"></div>
                </div>
                <div class="skill">
                    <span class="skill-label">CSS</span>
                    <div class="skill-bar" data-progress="80%"></div>
                </div>
                <div class="skill">
                    <span class="skill-label">Java</span>
                    <div class="skill-bar" data-progress="70%"></div>
                </div>
                <div class="skill">
                    <span class="skill-label">React</span>
                    <div class="skill-bar" data-progress="0%"></div>
                </div>
                <div class="skill">
                    <span class="skill-label">Python</span>
                    <div class="skill-bar" data-progress="40%"></div>
                </div>
            </div>
        </section>
      )}
    </section>
  );
};

export default SkillsSection;
