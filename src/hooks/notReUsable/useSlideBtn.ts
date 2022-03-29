import { ImgLeftRighMargin, ImgWidth } from '@components/organisms/MybooksSlider/styles';
import { useCallback, useState, useEffect } from 'react';

const useSlideBtn = (
  initialData: number,
  bookCount: number,
): [number, React.Dispatch<React.SetStateAction<number>>, () => void, () => void] => {
  const [trans, setTrans] = useState(initialData);
  const [transWidth, setTransWidth] = useState(0);
  const [transLeftLimit, setTransLeftLimit] = useState(0);

  const getTransValue = useCallback(() => {
    if (window.matchMedia('(max-width: 1000px) and (min-width: 735px)').matches) {
      setTransWidth(ImgWidth * 3 + ImgLeftRighMargin * (2 * 2));
      setTransLeftLimit(-(((bookCount - 3) / 3) * (ImgWidth * 3 + ImgLeftRighMargin * (2 * 2))));
    } else if (window.matchMedia('(max-width: 735px) and (min-width: 470px)').matches) {
      setTransWidth(ImgWidth * 2 + ImgLeftRighMargin * (2 * 1));
      setTransLeftLimit(-(((bookCount - 2) / 2) * (ImgWidth * 2 + ImgLeftRighMargin * (2 * 1))));
    } else if (window.matchMedia('(max-width: 470px)').matches) {
      setTransWidth(ImgWidth);
      setTransLeftLimit(-(bookCount * ImgWidth));
    } else {
      setTransWidth(ImgWidth * 4 + ImgLeftRighMargin * (2 * 3));
      setTransLeftLimit(-(((bookCount - 4) / 4) * (ImgWidth * 4 + ImgLeftRighMargin * 6)));
    }
  }, [bookCount]);

  useEffect(() => {
    getTransValue();
    window.addEventListener('resize', getTransValue);
    return () => {
      window.removeEventListener('resize', getTransValue);
    };
  }, [getTransValue]);

  useEffect(() => {
    return () => {
      setTrans(0);
    };
  }, [transWidth]);

  // console.log('rerender!');

  const onClickL = useCallback(() => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + transWidth);
  }, [trans, transWidth]);

  const onClickR = useCallback(() => {
    if (trans <= transLeftLimit) {
      return;
    }
    setTrans((current) => current - transWidth);
  }, [trans, transLeftLimit, transWidth]);

  return [trans, setTrans, onClickL, onClickR];
};

export default useSlideBtn;
