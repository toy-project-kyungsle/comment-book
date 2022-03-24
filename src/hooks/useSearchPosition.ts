import { useEffect, useState } from 'react';

const useSearchPosition = (viewNum: any) => {
  const [conHeight, setConHeight] = useState('0');
  const [sBackLeft, setSBackLeft] = useState('0');
  const [sBackHeight, setSBackHeight] = useState('0');
  const [sBackWidth, setSBackWidth] = useState('0');
  const [imgLeft, setImgLeft] = useState('0');
  const [imgBottom, setImgBottom] = useState('0');
  const [letterLeft, setLetterLeft] = useState('0');
  const [letterBottom, setLetterBottom] = useState('0');

  useEffect(() => {
    setConHeight(
      viewNum === 1 ? '250px' : viewNum === 2 ? '215px' : viewNum === 3 ? '290px' : viewNum === 4 ? '270px' : '0',
    );
    setSBackLeft(
      viewNum === 1 ? '0px' : viewNum === 2 ? '450px' : viewNum === 3 ? '0px' : viewNum === 4 ? '485px' : '0',
    );
    setSBackHeight(
      viewNum === 1 ? '250px' : viewNum === 2 ? '400px' : viewNum === 3 ? '255px' : viewNum === 4 ? '450px' : '0',
    );
    setImgLeft(
      viewNum === 1 ? '90px' : viewNum === 2 ? '92px' : viewNum === 3 ? '160px' : viewNum === 4 ? '-30px' : '0',
    );
    setSBackWidth(
      viewNum === 1 ? '350px' : viewNum === 2 ? '350px' : viewNum === 3 ? '290px' : viewNum === 4 ? '315px' : '0',
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
  }, [viewNum]);

  return [conHeight, sBackLeft, sBackHeight, sBackWidth, imgLeft, imgBottom, letterLeft, letterBottom];
};

export default useSearchPosition;
