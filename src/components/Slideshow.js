// Import React and useState hook from 'react' for building React components and managing state
import React, { useState } from "react";

// Import the CSS file for styling the slideshow
import "./Slideshow.css";

// Import individual image sources for the slideshow
import image1Src from "./slideshowImages/fall.jpg";
import image2Src from "./slideshowImages/lake.webp";
import image3Src from "./slideshowImages/mountain.jpg";

// Slideshow Component
const Slideshow = ({ images, currentImageIndex, setCurrentImageIndex }) => {
  // Array containing the imported image sources
  const importedImages = [image1Src, image2Src, image3Src];

  // Function to navigate to the previous slide
  const goToPreviousSlide = () => {
    // Calculate the new index, considering the circular nature of the slideshow
    const newIndex =
      (currentImageIndex - 1 + importedImages.length) % importedImages.length;
    // Set the new index using setCurrentImageIndex
    setCurrentImageIndex(newIndex);
  };

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    // Calculate the new index, considering the circular nature of the slideshow
    const newIndex = (currentImageIndex + 1) % importedImages.length;
    // Set the new index using setCurrentImageIndex
    setCurrentImageIndex(newIndex);
  };

  // JSX structure for rendering the slideshow
  return (
    <div className="slideshow">
      {/* Container for displaying the current slide */}
      <div className="slide">
        {/* Image element displaying the current slide */}
        <img
          src={importedImages[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
      </div>
      {/* Button for navigating to the previous slide */}
      <button className="prevButton" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      {/* Button for navigating to the next slide */}
      <button className="nextButton" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

// ShowSlideshow Component
const ShowSlideshow = ({ currentImageIndex, images, setCurrentImageIndex }) => {
  // JSX structure for displaying the slideshow with index and title
  return (
    <div className="slideshow container">
      {/* Display the current slide index as text (e.g., "1/3") */}
      <div className="numbertext">{currentImageIndex + 1} / 3</div>
      {/* Heading for the slideshow */}
      <h1>Slideshow</h1>
      {/* Embed the Slideshow component */}
      <Slideshow
        images={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

// ParentComponent
const ParentComponent = () => {
  // State to manage the current slide index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Array containing the image sources
  const images = [image1Src, image2Src, image3Src];

  // JSX structure for rendering the parent component
  return (
    <div>
      {/* Embed the ShowSlideshow component */}
      <ShowSlideshow
        currentImageIndex={currentImageIndex}
        images={images}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

// Export ParentComponent as the default export of the file
export default ParentComponent;
