import React from 'react';
import './BioSection.css'; // Import corresponding CSS file

const BioSection = () => {
  return (
    <section className="bio-section">
      <div className="container" id="bio">
        <h2>Bio</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          praesentium eos tempore labore doloribus veritatis debitis tempora,
          error ullam. Accusantium earum quam dolor aut praesentium dicta
          blanditiis delectus voluptatibus ipsa.
        </p>
        {/* Additional paragraphs or content */}
      </div>
    </section>
  );
};

export default BioSection;
