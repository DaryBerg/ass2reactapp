// Import the React library for building React components
import React from "react";

// Import the CSS file for styling
import "./ToggleMode.css";

// Define the functional component named ToggleMode
const ToggleMode = () => {
  // Function to toggle the 'dark-mode' class on the body element
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  // Return JSX for rendering the component
  return (
    // Header element serves as the container for the component
    <header>
      <div>
        <h1>Your Name</h1>
        {/* Button for toggling dark/light mode, onClick calls toggleDarkMode */}
        <button className="toggle-mode" onClick={toggleDarkMode}>
          Toggle Dark/Light Mode
        </button>
      </div>
    </header>
  );
};

// Export the ToggleMode component as the default export
export default ToggleMode;
