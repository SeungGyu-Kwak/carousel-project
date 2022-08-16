import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import Slider from '../Slider';
import images from '../assets/images';

const items = [
  { pic: images.exImage1, id: 1 },
  { pic: images.exImage2, id: 2 },
  { pic: images.exImage3, id: 3 },
  { pic: images.exImage4, id: 4 },
  { pic: images.exImage5, id: 5 },
];
// const items = ['#FF0000', '#FF6600', '#FFFF00'];
const itemIndex: number = 0;

const SliderContainer = () => {
  const [transitionTime, setTransitionTime] = useState(0);
  const [slides, setSlides] = useState<any[]>(items);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideTransition, setTransition] = useState(`transform 500ms ease 0s`);

  const replaceSlide = useCallback(
    (index: number) => {
      setTimeout(() => {
        setTransition('');
        setCurrentIndex(index);
      }, 500);
    },
    [currentIndex],
  );

  const handleSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      //console.log('index', index);

      if (index - 2 < 0) {
        index = index + items.length;
        replaceSlide(index);
      } else if (index - 2 >= items.length) {
        index = index - items.length;
        replaceSlide(index);
      }
      setTransition(`transform 500ms ease 0s`);
    },
    [replaceSlide],
  );

  const handleSwipe = (direction: number) => {
    handleSlide(currentIndex + direction);
  };

  const getItemIndex = (index: number) => {
    index = index - 2;
    if (index < 0) {
      index = index + items.length;
    } else if (index >= items.length) {
      index = index - items.length;
    }
    return index;
  };

  useLayoutEffect(() => {
    setSlides((prev: any[]) => [...prev.slice(0, 2), ...prev, prev.slice(1)]);
    handleSwipe(-1);
  }, []);
  console.log(slides.length);
  return (
    <Slider
      slides={slides}
      items={items}
      currentIndex={currentIndex}
      setcurrentIndex={setCurrentIndex}
      handleSwipe={handleSwipe}
      itemIndex={itemIndex}
      getItemIndex={getItemIndex}
      slideTransition={slideTransition}
    />
  );
};

export default SliderContainer;
