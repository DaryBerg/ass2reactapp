import React from 'react';

const FunFactsSection = () => {
  // Your fun facts data, you can use state or props to manage this data
  const funFacts = [
    'Fun Fact 1',
    'Fun Fact 2',
    // Add more fun facts as needed
  ];

  return (
    <section className="fun-facts-section">
      <div className="container">
        <h2>Fun Facts</h2>
        <ul>
          {funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FunFactsSection;
