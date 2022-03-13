import SliderModal from '@components/SliderModal';
import { IFbookData } from '@utils/types';
import React, { useCallback, useEffect, useState } from 'react';
import { Background, TopBox } from './styles';

interface Props {
  mybooks: IFbookData[];
  getBookInfo: (categorySelected: string, ratingSelected: string, yearSelected: string) => void;
  setTrans: React.Dispatch<React.SetStateAction<number>>;
  categoryList: string[];
}

function SliderTopBox({ mybooks, getBookInfo, setTrans, categoryList }: Props) {
  const [categorySelected, setCategorySelected] = useState('');
  const [ratingSelected, setRatingSelected] = useState('');
  const [yearSelected, setYearSelected] = useState('');

  const [categoryListOpen, setCategoryListOpen] = useState(false);
  const [ratingListOpen, setRatingListOpen] = useState(false);
  const [yearListOpen, setYearListOpen] = useState(false);

  const [editYearList, setEditYearList] = useState<number[]>([]);

  const onClickCateorySort = useCallback(
    async (e) => {
      setCategorySelected(e.target.innerText);
      setTrans(0);
      // await getBookInfo();
    },
    [setCategorySelected, setTrans],
  );

  const onClickRatingSort = useCallback(
    async (e) => {
      setRatingSelected(e.target.innerText);
      setTrans(0);
      // await getBookInfo();
    },
    [setRatingSelected, setTrans],
  );

  const onClickYearSort = useCallback(
    async (e) => {
      setYearSelected(e.target.innerText);
      setTrans(0);
      // await getBookInfo();
    },
    [setTrans, setYearSelected],
  );

  const onClickCataoryToggle = useCallback(() => {
    setCategoryListOpen(true);
    setRatingListOpen(false);
    setYearListOpen(false);
  }, [setCategoryListOpen, setRatingListOpen, setYearListOpen]);

  const onClickRatingToggle = useCallback(() => {
    setRatingListOpen(true);
    setCategoryListOpen(false);
    setYearListOpen(false);
  }, [setCategoryListOpen, setRatingListOpen, setYearListOpen]);

  const onClickYearToggle = useCallback(() => {
    setYearListOpen(true);
    setCategoryListOpen(false);
    setRatingListOpen(false);
  }, [setCategoryListOpen, setRatingListOpen, setYearListOpen]);

  const onClickCloseBtn = useCallback(() => {
    setYearListOpen(false);
    setCategoryListOpen(false);
    setRatingListOpen(false);
  }, [setCategoryListOpen, setRatingListOpen, setYearListOpen]);

  const onClickResetBtn = useCallback(
    (e) => {
      if (e.target.id === 'cg') {
        setCategorySelected('');
      } else if (e.target.id === 'rt') {
        setRatingSelected('');
      } else if (e.target.id === 'yr') {
        setYearSelected('');
      }
    },
    [setCategorySelected, setRatingSelected, setYearSelected],
  );

  useEffect(() => {
    getBookInfo(categorySelected, ratingSelected, yearSelected);
  }, [categorySelected, getBookInfo, ratingSelected, yearSelected]);

  useEffect(() => {
    if (mybooks.length > 0) {
      mybooks.forEach((elem) => {
        if (!editYearList.includes(new Date(elem.editDate).getFullYear())) {
          setEditYearList((prev) => [new Date(elem.editDate).getFullYear(), ...prev]);
        }
      });
    }
  }, [editYearList, mybooks]);

  return (
    <Background>
      <TopBox>
        <div className="upperContainer">
          <div className="title">My books</div>
          <div className="classify">
            <span onClick={onClickCataoryToggle}>Category</span>
            <span onClick={onClickRatingToggle}>Rating</span>
            <span onClick={onClickYearToggle}>Year</span>
          </div>
        </div>
        <div className="selectedCgCon">
          {categorySelected !== '' ? (
            <div>
              <span>{categorySelected}</span>
            </div>
          ) : null}
          {ratingSelected !== '' ? (
            <div>
              <span>{ratingSelected}</span>
            </div>
          ) : null}
          {yearSelected !== '' ? (
            <div>
              <span>{yearSelected}</span>
            </div>
          ) : null}
        </div>
        <SliderModal
          categoryList={categoryList}
          editYearList={editYearList}
          onClickCloseBtn={onClickCloseBtn}
          onClickResetBtn={onClickResetBtn}
          categoryListOpen={categoryListOpen}
          ratingListOpen={ratingListOpen}
          yearListOpen={yearListOpen}
          onClickCateorySort={onClickCateorySort}
          onClickRatingSort={onClickRatingSort}
          onClickYearSort={onClickYearSort}
        />
      </TopBox>
    </Background>
  );
}

export default SliderTopBox;
