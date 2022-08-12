import { useState } from 'react';
import Slider from '../Slider';
import images from '../assets/images';
const SliderContainer = () => {
  const slides = ['#33a', '#8c9', '#f3e074'];
  const imgArr = [
    { pic: images.exImage1, id: 1 },
    { pic: images.exImage2, id: 2 },
    { pic: images.exImage3, id: 3 },
    { pic: images.exImage4, id: 4 },
    { pic: images.exImage5, id: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSwipe = (direction: number) => {
    handleSldie(currentIndex + direction);
  };

  const handleSldie = (index: number) => {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    setCurrentIndex(index);
  };

  return (
    <Slider
      slides={slides}
      imgArr={imgArr}
      currentIndex={currentIndex}
      setcurrentIndex={setCurrentIndex}
      handleSwipe={handleSwipe}
    />
  );
};

export default SliderContainer;
