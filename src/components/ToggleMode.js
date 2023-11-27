import React from "react";
import "./ToggleMode.css"; // Import your CSS file

const ToggleMode = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header>
      <div>
        <h1>Your Name</h1>
        <button className="toggle-mode" onClick={toggleDarkMode}>
          Toggle Dark/Light Mode
        </button>
      </div>
    </header>
  );
};

export default ToggleMode;
