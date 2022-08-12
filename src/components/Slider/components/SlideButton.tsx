import { ReactComponent as ArrowIcon } from '../assets/ic_arrow.svg';
import '../styles/slidebutton.css';

type Props = {
  handleSwipe: (idx: number) => void;
  direction: string;
};
const SlideButton = ({ handleSwipe, direction }: Props) => {
  return (
    <button
      onClick={() => handleSwipe(-1)}
      className={`btn-slide-control btn-${direction}`}>
      <ArrowIcon width='16' height='16' fill='#333' />
    </button>
  );
};

export default SlideButton;
