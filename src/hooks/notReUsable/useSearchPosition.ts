import useInput from '@hooks/reuUsable/useinput';
import { useEffect } from 'react';

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

  let conHeightVar: string,
    sBackRightVar: string,
    sBackLeftVar: string,
    sBackHeightVar: string,
    sBackWidthVar: string,
    imgLeftVar: string,
    imgBottomVar: string,
    letterLeftVar: string,
    letterBottomVar: string;

  if (window.matchMedia('(max-width: 800px)').matches) {
    conHeightVar =
      viewNum === 1 ? '250px' : viewNum === 2 ? '450px' : viewNum === 3 ? '350px' : viewNum === 4 ? '500px' : '0';
  } else {
    conHeightVar =
      viewNum === 1 ? '250px' : viewNum === 2 ? '215px' : viewNum === 3 ? '290px' : viewNum === 4 ? '270px' : '0';
  }
  sBackRightVar = viewNum === 1 ? null : viewNum === 2 ? '0px' : viewNum === 3 ? null : viewNum === 4 ? '0px' : '0';
  sBackLeftVar = viewNum === 1 ? '0px' : viewNum === 2 ? null : viewNum === 3 ? '0px' : viewNum === 4 ? null : '0';
  sBackHeightVar =
    viewNum === 1 ? '250px' : viewNum === 2 ? '400px' : viewNum === 3 ? '255px' : viewNum === 4 ? '450px' : '0';
  sBackWidthVar =
    viewNum === 1 ? '350px' : viewNum === 2 ? '350px' : viewNum === 3 ? '290px' : viewNum === 4 ? '315px' : '0';
  imgLeftVar =
    viewNum === 1 ? '90px' : viewNum === 2 ? '92px' : viewNum === 3 ? '160px' : viewNum === 4 ? '-30px' : '0';
  imgBottomVar =
    viewNum === 1 ? '80px' : viewNum === 2 ? '85px' : viewNum === 3 ? '70px' : viewNum === 4 ? '137px' : '0';
  letterLeftVar =
    viewNum === 1 ? '90px' : viewNum === 2 ? '92px' : viewNum === 3 ? '70px' : viewNum === 4 ? '58px' : '0';
  letterBottomVar =
    viewNum === 1 ? '26px' : viewNum === 2 ? '26px' : viewNum === 3 ? '20px' : viewNum === 4 ? '45px' : '0';

  useEffect(() => {
    setConHeight(conHeightVar);
    setSBackRight(sBackRightVar);
    setSBackLeft(sBackLeftVar);
    setSBackHeight(sBackHeightVar);
    setSBackWidth(sBackWidthVar);
    setImgLeft(imgLeftVar);
    setImgBottom(imgBottomVar);
    setLetterLeft(letterLeftVar);
    setLetterBottom(letterBottomVar);
  }, [
    conHeightVar,
    imgBottomVar,
    imgLeftVar,
    letterBottomVar,
    letterLeftVar,
    sBackHeightVar,
    sBackLeftVar,
    sBackRight,
    sBackRightVar,
    sBackWidthVar,
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

  return [conHeight, sBackRight, sBackLeft, sBackHeight, sBackWidth, imgLeft, imgBottom, letterLeft, letterBottom];
};

export default useSearchPosition;
