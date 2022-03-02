import React, { useCallback, useEffect, useState } from 'react';
import { Controller, Slides, SlidesViewer, ImgWidth, ImgLeftRighMargin, SlidesBackground } from './styles';
import MyBookImg from '@components/MyBookImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { dbService, authService } from '@utils/fbase';
import { getDoc, doc } from 'firebase/firestore';
import GetDetailedName from '@utils/GetDetailedName';
import { useRecoilValue } from 'recoil';
import { FbaseAuth } from '@atom/FbaseAuth';
import DeleteSameElem from '@utils/DeleteSameElem';
import SliderTopBox from '@components/SliderTopBox';
import { IFbookData } from '@utils/types';

interface Props {
  loading: boolean;
  setLoadNum: React.Dispatch<React.SetStateAction<number>>;
}

function MybooksSlider({ loading, setLoadNum }: Props) {
  const [trans, setTrans] = useState(0);
  const [mybooks, setMybooks] = useState<IFbookData[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const isLoggedIn = useRecoilValue(FbaseAuth('slider'));

  const getCategoryList = useCallback(async () => {
    if (isLoggedIn) {
      let CTBooks: any = null;
      if (authService.currentUser)
        CTBooks = (await getDoc(doc(dbService, 'UserEval', authService.currentUser.uid))).data();
      const CTBooksArr: IFbookData[] | [] = CTBooks ? Object.values(CTBooks) : [];

      setCategoryList(
        DeleteSameElem(CTBooksArr.map((e) => e['categoryId']))
          .map((e) => GetDetailedName(e))
          .filter((e) => e !== '')
          .sort((a, b) => (a < b ? -1 : a === b ? 0 : 1)),
      );
    }
    setLoadNum((prev) => prev + 1);
  }, [isLoggedIn, setLoadNum]);

  const getBookInfo = useCallback(
    async (categorySelected: string, ratingSelected: string, yearSelected: string) => {
      if (isLoggedIn) {
        let dbBooks: any = null;
        if (authService.currentUser)
          dbBooks = (await getDoc(doc(dbService, 'UserEval', authService.currentUser.uid))).data();
        const dbBooksArr: IFbookData[] | [] = dbBooks ? Object.values(dbBooks) : [];

        setMybooks(
          dbBooksArr.filter((elem: IFbookData | undefined) => {
            let result = [true, true, true];
            if (categorySelected !== '') {
              result[0] = GetDetailedName((elem as IFbookData).categoryId) === categorySelected;
            }
            if (ratingSelected !== '') {
              let tempArr = ratingSelected.match(/(.+)~(.+)/);
              result[1] =
                (elem as IFbookData).rating >= Number(tempArr[1]) && (elem as IFbookData).rating <= Number(tempArr[2]);
            }
            if (yearSelected !== '') {
              result[2] = new Date((elem as IFbookData).editDate).getFullYear().toString() === yearSelected;
            }

            return result.every((e) => e === true);
          }),
        );
      }
    },
    [isLoggedIn],
  );

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + (ImgWidth * 4 + ImgLeftRighMargin * 6));
  };

  const onClickR = () => {
    if (trans <= -(((mybooks.length - 4) / 4) * (ImgWidth * 4 + ImgLeftRighMargin * 6))) {
      return;
    }
    setTrans((current) => current - (ImgWidth * 4 + ImgLeftRighMargin * 6));
  };

  useEffect(() => {
    if (isLoggedIn) {
      getBookInfo('', '', '');
      getCategoryList();
    } else {
      setLoadNum((prev) => prev + 1);
    }
  }, [getBookInfo, getCategoryList, isLoggedIn, setLoadNum]);

  return !isLoggedIn ? null : loading ? null : (
    <>
      <SliderTopBox mybooks={mybooks} getBookInfo={getBookInfo} setTrans={setTrans} categoryList={categoryList} />

      <SlidesBackground>
        <div className="container">
          <SlidesViewer>
            <Slides data-trans={trans} data-bookCount={mybooks.length}>
              {mybooks?.map((book) => {
                return (
                  <MyBookImg
                    key={book.isbn}
                    title={book.title}
                    coverImg={book.coverLargeUrl}
                    isbn={book.isbn}
                    shortcomment={book.shortComment}
                    rating={book.rating}
                  />
                );
              })}
            </Slides>
          </SlidesViewer>
          <Controller>
            <button className="Left" onClick={onClickL}>
              <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#00000030' }} />
            </button>
            <button className="Right" onClick={onClickR}>
              <FontAwesomeIcon icon={faChevronRight} style={{ color: '#00000030' }} />
            </button>
          </Controller>
        </div>
      </SlidesBackground>
    </>
  );
}

export default MybooksSlider;
