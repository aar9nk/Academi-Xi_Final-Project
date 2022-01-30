import React, { useState } from 'react';
import SliderSites from './SliderSites';
import "../../src/index.css";

function ImageSlider({ slides }) {
const [currentSlide, setCurrentSlide] = useState(0);
const length = slides.length;

    function nextSlide() {
        setCurrentSlide(currentSlide === length -1 ? 0 : currentSlide +1)
    }

    function previousSlide() {
        setCurrentSlide(currentSlide === 0 ? length -1 : currentSlide -1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    //not sure I'm meant to use if statements in react as it's bad practice???

    
  return(
      <div className='slider'>
          <h3 className="left-slide" onClick={previousSlide}>&#x261A;</h3>
          <h3 className="right-slide" onClick={nextSlide}>&#x261B;</h3>          
          {SliderSites.map((slide, index) => {
              return(
                  <div key={index}>
                      {index === currentSlide && (
                    <img src={slide.image} alt="Website" className="images"/>
                    )}
            </div>      

              )
          })}
      </div>
  ) 
}

export default ImageSlider;
