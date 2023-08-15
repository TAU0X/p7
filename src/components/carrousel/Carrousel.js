import React, { useState } from 'react';
import ArrowRight from '../../assets/arrow-right.svg';
import ArrowLeft from '../../assets/arrow-left.svg';
import './carrousel.scss';
const Carrousel = ({ imageSlider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
  };
  const prevImage = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
  };

  return (
    <div>
      {' '}
      <section
        style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
        className='carousel'
      >
        {imageSlider.length > 1 && (
          <>
            <img
              className='carousel_arrow carousel_arrow_right'
              src={ArrowRight}
              alt='show next slider'
              onClick={nextImage}
            />
            <img
              className='carousel_arrow carousel_arrow_left'
              src={ArrowLeft}
              alt='show previous slider'
              onClick={prevImage}
            />
            <p className='slideCount'>
              {currentIndex + 1} / {imageSlider.length}
            </p>
          </>
        )}
      </section>
    </div>
  );
};

export default Carrousel;
