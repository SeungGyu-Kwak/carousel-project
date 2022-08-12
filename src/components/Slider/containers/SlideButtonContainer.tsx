import SlideButton from '../components/SlideButton';

type Props = {
  handleSwipe: (idx: number) => void;
  direction: string;
};
const SlideButtonContainer = ({ handleSwipe, direction }: Props) => {
  return <SlideButton handleSwipe={handleSwipe} direction={direction} />;
};

export default SlideButtonContainer;
