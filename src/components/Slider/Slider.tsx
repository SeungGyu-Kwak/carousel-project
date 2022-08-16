import React from 'react';
import SlideButton from './components/SlideButton';
import SlideButtonContainer from './containers/SlideButtonContainer';
import './styles/slider.css';

type Props = {
  slides: string[];
  items: { pic: string; id: number }[];
  itemIndex: number;
  slideTransition: string;
  currentIndex: number;
  getItemIndex: (idx: number) => number;
  setcurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  handleSwipe: (idx: number) => void;
};
const Slider = ({
  slides,
  currentIndex,
  slideTransition,
  setcurrentIndex,
  handleSwipe,
  // imgArr,
  getItemIndex,
  itemIndex,
  items,
}: Props) => {
  return (
    <div className='slider-area'>
      <div className='slider'>
        <SlideButtonContainer
          direction='prev'
          handleSwipe={() => handleSwipe(-1)}
        />
        <SlideButtonContainer
          direction='next'
          handleSwipe={() => handleSwipe(1)}
        />
        <div className='slider-list'>
          <div
            className='slider-track'
            style={{
              transform: `translateX(${
                (-100 / slides.length) * (0.5 + currentIndex)
              }%)`,
              transition: slideTransition,
            }}>
            {slides.map((slide, slideIndex) => {
              itemIndex = getItemIndex(slideIndex);

              return (
                <div
                  key={slideIndex}
                  className={`slider-item ${
                    currentIndex === slideIndex ? 'current-slide' : ''
                  }`}>
                  <a>
                    <img src={items[itemIndex].pic} alt={`이미지`} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
