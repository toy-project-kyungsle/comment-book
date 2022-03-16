import { useCallback, useState } from 'react';

const useSlideBtn = (
  initialData: number,
  bookCount: number,
  ImgWidth: number,
  ImgLeftRighMargin: number,
): [number, React.Dispatch<React.SetStateAction<number>>, () => void, () => void] => {
  const [trans, setTrans] = useState(initialData);

  const onClickL = useCallback(() => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + (ImgWidth * 4 + ImgLeftRighMargin * 6));
  }, [ImgLeftRighMargin, ImgWidth, trans]);

  const onClickR = useCallback(() => {
    if (trans <= -(((bookCount - 4) / 4) * (ImgWidth * 4 + ImgLeftRighMargin * 6))) {
      return;
    }
    setTrans((current) => current - (ImgWidth * 4 + ImgLeftRighMargin * 6));
  }, [ImgLeftRighMargin, ImgWidth, bookCount, trans]);

  return [trans, setTrans, onClickL, onClickR];
};

export default useSlideBtn;
