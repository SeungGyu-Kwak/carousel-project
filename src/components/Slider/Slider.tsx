import React from 'react';
import SlideButton from './components/SlideButton';
import SlideButtonContainer from './containers/SlideButtonContainer';
import './styles/slider.css';

type Props = {
  slides: string[];
  imgArr: { pic: string; id: number }[];
  currentIndex: number;
  setcurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  handleSwipe: (idx: number) => void;
};
const Slider = ({
  slides,
  currentIndex,
  setcurrentIndex,
  handleSwipe,
  imgArr,
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
            }}>
            {slides.map((color, index) => (
              <div key={index} className='slider-item'>
                <div className='item' style={{ background: color }}>
                  <a>{index}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
