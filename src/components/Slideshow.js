import React, { useState } from 'react';
import './Slideshow.css';
import image1Src from './slideshowImages/gojoslayyy.jpg';
import image2Src from './slideshowImages/hello_kitty.jpg';
import image3Src from './slideshowImages/pookie.jpg';

const Slideshow = ({ images, currentImageIndex, setCurrentImageIndex }) => {
  const importedImages = [image1Src, image2Src, image3Src];

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + importedImages.length) % importedImages.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % importedImages.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slideshow">
      <div className="slide">
        <img src={importedImages[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      </div>
      <button className="prevButton" onClick={goToPreviousSlide}>&#10094;</button>
      <button className="nextButton" onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
};

const ShowSlideshow = ({ currentImageIndex, images, setCurrentImageIndex }) => {
  return (
    <div className="slideshow container">
      <div className="numbertext">{currentImageIndex + 1} / 3</div>
      <h1>Slideshow</h1>
      <Slideshow
        images={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

const ParentComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1Src, image2Src, image3Src];

  return (
    <div>
      <ShowSlideshow
        currentImageIndex={currentImageIndex}
        images={images}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

export default ParentComponent;
