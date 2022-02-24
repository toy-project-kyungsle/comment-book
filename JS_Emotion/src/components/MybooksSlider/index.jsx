import React, { useCallback, useEffect, useState } from 'react';
import { Controller, Slides, SlidesViewer, ImgWidth, ImgLeftRighMargin, TopBox, SlidesBackground } from './styles';
import MyBookImg from '@components/MyBookImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { dbService, authService } from '@utils/fbase';
import { getDoc, doc } from 'firebase/firestore';
import GetDetailedName from '@utils/GetDetailedName';
import { useRecoilValue } from 'recoil';
import { FbaseAuth } from '@atom/FbaseAuth';
import SliderModal from '@components/SliderModal';
import DeleteSameElem from '@utils/DeleteSameElem';

function MybooksSlider({ loading, setLoadNum }) {
  const [trans, setTrans] = useState(0);
  const [mybooks, setMybooks] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [editYearList, setEditYearList] = useState([]);

  const [categoryListOpen, setCategoryListOpen] = useState(false);
  const [ratingListOpen, setRatingListOpen] = useState(false);
  const [yearListOpen, setYearListOpen] = useState(false);

  const [categorySelected, setCategorySelected] = useState('');
  const [ratingSelected, setRatingSelected] = useState('');
  const [yearSelected, setYearSelected] = useState('');

  const isLoggedIn = useRecoilValue(FbaseAuth());

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + (ImgWidth * 4 + ImgLeftRighMargin * 6));
    console.log(ImgLeftRighMargin, ImgWidth);
  };

  const onClickR = () => {
    if (trans <= -(((mybooks.length - 4) / 4) * (ImgWidth * 4 + ImgLeftRighMargin * 6))) {
      return;
    }
    setTrans((current) => current - (ImgWidth * 4 + ImgLeftRighMargin * 6));
  };

  const getCategoryList = useCallback(async () => {
    if (isLoggedIn) {
      const CTBooks = await (await getDoc(doc(dbService, 'UserEval', authService?.currentUser?.uid))).data();
      const CTBooksArr = CTBooks ? Object.values(CTBooks) : [];

      setCategoryList(
        DeleteSameElem(CTBooksArr?.map((e) => e['categoryId']))
          ?.map((e) => GetDetailedName(e))
          ?.filter((e) => e !== '')
          ?.sort((a, b) => (a < b ? -1 : a === b ? 0 : 1)),
      );
    }
    setLoadNum((prev) => prev + 1);
  }, [isLoggedIn, setLoadNum]);

  const getBookInfo = useCallback(async () => {
    if (isLoggedIn) {
      const dbBooks = (await getDoc(doc(dbService, 'UserEval', authService?.currentUser?.uid)))?.data();
      const dbBooksArr = dbBooks ? Object.values(dbBooks) : [];

      setMybooks(
        dbBooksArr.filter((elem) => {
          let result = [true, true, true];
          if (categorySelected !== '') {
            result[0] = GetDetailedName(elem.categoryId) === categorySelected;
          }
          if (ratingSelected !== '') {
            let tempArr = ratingSelected.match(/(.+)~(.+)/);
            result[1] = elem.rating >= tempArr[1] && elem.rating <= tempArr[2];
          }
          if (yearSelected !== '') {
            result[2] = new Date(elem.editDate).getFullYear().toString() === yearSelected;
          }

          return result.every((e) => e === true);
        }),
      );
    }
  }, [categorySelected, isLoggedIn, ratingSelected, yearSelected]);

  const onClickCateorySort = useCallback(async (e) => {
    setCategorySelected(e.target.innerText);
    setTrans(0);
    // await getBookInfo();
  }, []);

  const onClickRatingSort = useCallback(async (e) => {
    setRatingSelected(e.target.innerText);
    setTrans(0);
    // await getBookInfo();
  }, []);

  const onClickYearSort = useCallback(async (e) => {
    setYearSelected(e.target.innerText);
    setTrans(0);
    // await getBookInfo();
  }, []);

  const onClickCataoryToggle = useCallback(() => {
    setCategoryListOpen(true);
    setRatingListOpen(false);
    setYearListOpen(false);
  }, []);

  const onClickRatingToggle = useCallback(() => {
    setRatingListOpen(true);
    setCategoryListOpen(false);
    setYearListOpen(false);
  }, []);

  const onClickYearToggle = useCallback(() => {
    setYearListOpen(true);
    setCategoryListOpen(false);
    setRatingListOpen(false);
  }, []);

  const onClickCloseBtn = useCallback(() => {
    setYearListOpen(false);
    setCategoryListOpen(false);
    setRatingListOpen(false);
  }, []);

  const onClickResetBtn = useCallback((e) => {
    if (e.target.id === 'cg') {
      setCategorySelected('');
    } else if (e.target.id === 'rt') {
      setRatingSelected('');
    } else if (e.target.id === 'yr') {
      setYearSelected('');
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getBookInfo();
      getCategoryList();
    } else {
      setLoadNum((prev) => prev + 1);
    }
  }, [getBookInfo, getCategoryList, isLoggedIn, setLoadNum]);

  useEffect(() => {
    if (mybooks.length > 0) {
      mybooks.forEach((elem) => {
        if (!editYearList.includes(new Date(elem.editDate).getFullYear())) {
          setEditYearList((prev) => [new Date(elem.editDate).getFullYear(), ...prev]);
        }
      });
    }
  }, [editYearList, mybooks]);

  return !isLoggedIn ? null : loading ? null : (
    <>
      <TopBox>
        <div className="upperContainer">
          <div className="title">My books</div>
          <div className="classify">
            <span onClick={onClickCataoryToggle}>Category</span>
            <span onClick={onClickRatingToggle}>Rating</span>
            <span onClick={onClickYearToggle}>Year</span>
          </div>
        </div>
        {/* SelectedCategory */}
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
        {/* category */}
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

      <SlidesBackground>
        <div className="container">
          <SlidesViewer>
            <Slides trans={trans} bookCount={mybooks.length}>
              {mybooks?.map((book) => {
                return (
                  <MyBookImg
                    key={book.id}
                    title={book.title}
                    coverImg={book.coverLargeUrl}
                    isbn={book.isbn}
                    shortcomment={book.shortComment}
                    rating={book.rating}
                    bookState={mybooks}
                  />
                );
              })}
            </Slides>
          </SlidesViewer>
          <Controller>
            <button className="Left" onClick={onClickL}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="Right" onClick={onClickR}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Controller>
        </div>
      </SlidesBackground>
    </>
  );
}

export default MybooksSlider;
