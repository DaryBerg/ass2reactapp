import React, { useState } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('demo');
    const captionText = document.getElementById('caption');

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    captionText.innerHTML = dots[slideIndex - 1].alt;
  };

  return (
    <div className="container" id="slideshow">
      <h2>Slideshow</h2>
      <div className="mySlides">
        <div className="numbertext">1 / 3</div>
        <img src="gojoslayyy.jpg" style={{ width: '100%' }} alt="Slide 1" className="demo" />
      </div>
      {/* Add more slides similarly */}

      {/* Next and previous buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
  );
};

export default Slideshow;
