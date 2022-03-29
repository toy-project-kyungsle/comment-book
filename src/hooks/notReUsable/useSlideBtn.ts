import { ImgLeftRighMargin, ImgWidth } from '@components/organisms/MybooksSlider/styles';
import { useCallback, useState, useEffect } from 'react';

const useSlideBtn = (
  initialData: number,
  bookCount: number,
): [number, React.Dispatch<React.SetStateAction<number>>, () => void, () => void] => {
  const [trans, setTrans] = useState(initialData);

  let transWidth: number;
  let transLeftLimit: number;

  if (window.matchMedia('(max-width: 1000px) and (min-width: 735px)').matches) {
    transWidth = ImgWidth * 3 + ImgLeftRighMargin * (2 * 2);
    transLeftLimit = -(((bookCount - 3) / 3) * (ImgWidth * 3 + ImgLeftRighMargin * (2 * 2)));
  } else if (window.matchMedia('(max-width: 735px) and (min-width: 470px)').matches) {
    transWidth = ImgWidth * 2 + ImgLeftRighMargin * (2 * 1);
    transLeftLimit = -(((bookCount - 2) / 2) * (ImgWidth * 2 + ImgLeftRighMargin * (2 * 1)));
  } else if (window.matchMedia('(max-width: 470px)').matches) {
    transWidth = ImgWidth;
    transLeftLimit = -(bookCount * ImgWidth);
  } else {
    transWidth = ImgWidth * 4 + ImgLeftRighMargin * (2 * 3);
    transLeftLimit = -(((bookCount - 4) / 4) * (ImgWidth * 4 + ImgLeftRighMargin * 6));
  }

  useEffect(() => {
    return () => {
      setTrans(0);
    };
  }, [transWidth]);

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
