import useInput from '@hooks/reuUsable/useinput';
import { useCallback, useEffect } from 'react';

const useSearchPosition = (viewNum: any) => {
  const [conHeight, setConHeight] = useInput('0');
  const [sBackRight, setSBackRight] = useInput('0');
  const [sBackLeft, setSBackLeft] = useInput('0');
  const [sBackHeight, setSBackHeight] = useInput('0');
  const [sBackWidth, setSBackWidth] = useInput('0');
  const [imgLeft, setImgLeft] = useInput('0');
  const [imgBottom, setImgBottom] = useInput('0');
  const [letterLeft, setLetterLeft] = useInput('0');
  const [letterBottom, setLetterBottom] = useInput('0');

  const getPosition = useCallback(() => {
    if (window.matchMedia('(max-width: 800px)').matches) {
      setConHeight(
        viewNum === 1 ? '250px' : viewNum === 2 ? '450px' : viewNum === 3 ? '350px' : viewNum === 4 ? '500px' : '0',
      );
    } else {
      setConHeight(
        viewNum === 1 ? '250px' : viewNum === 2 ? '215px' : viewNum === 3 ? '290px' : viewNum === 4 ? '270px' : '0',
      );
    }
    setSBackRight(viewNum === 1 ? null : viewNum === 2 ? '0px' : viewNum === 3 ? null : viewNum === 4 ? '0px' : '0');
    setSBackLeft(viewNum === 1 ? '0px' : viewNum === 2 ? null : viewNum === 3 ? '0px' : viewNum === 4 ? null : '0');
    setSBackHeight(
      viewNum === 1 ? '250px' : viewNum === 2 ? '400px' : viewNum === 3 ? '255px' : viewNum === 4 ? '450px' : '0',
    );
    setSBackWidth(
      viewNum === 1 ? '350px' : viewNum === 2 ? '350px' : viewNum === 3 ? '290px' : viewNum === 4 ? '315px' : '0',
    );
    setImgLeft(
      viewNum === 1 ? '90px' : viewNum === 2 ? '92px' : viewNum === 3 ? '160px' : viewNum === 4 ? '-30px' : '0',
    );
    setImgBottom(
      viewNum === 1 ? '80px' : viewNum === 2 ? '85px' : viewNum === 3 ? '70px' : viewNum === 4 ? '137px' : '0',
    );
    setLetterLeft(
      viewNum === 1 ? '90px' : viewNum === 2 ? '92px' : viewNum === 3 ? '70px' : viewNum === 4 ? '58px' : '0',
    );
    setLetterBottom(
      viewNum === 1 ? '26px' : viewNum === 2 ? '26px' : viewNum === 3 ? '20px' : viewNum === 4 ? '45px' : '0',
    );
  }, [
    setConHeight,
    setImgBottom,
    setImgLeft,
    setLetterBottom,
    setLetterLeft,
    setSBackHeight,
    setSBackLeft,
    setSBackRight,
    setSBackWidth,
    viewNum,
  ]);

  useEffect(() => {
    getPosition();
    window.addEventListener('resize', getPosition);
    return () => {
      window.removeEventListener('resize', getPosition);
    };
  }, [getPosition]);

  return [conHeight, sBackRight, sBackLeft, sBackHeight, sBackWidth, imgLeft, imgBottom, letterLeft, letterBottom];
};

export default useSearchPosition;
