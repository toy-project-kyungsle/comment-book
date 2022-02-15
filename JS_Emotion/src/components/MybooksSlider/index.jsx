import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, Controller, Slides, SlidesViewer, Background, ImgWidth, ImgLeftRighMargin, TopBox } from './styles';
import MyBookImg from '@components/MyBookImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { dbService, authService } from '@utils/fbase';
import { getDoc, doc } from 'firebase/firestore';
import GetDetailedName from '@utils/GetDetailedName';

const ratingSection = ['0~1', '1~2', '2~3', '3~4', '4~5'];

function MybooksSlider() {
  const [trans, setTrans] = useState(0);
  const [mybooks, setMybooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState({});
  const [editYearList, setEditYearList] = useState([]);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + (ImgWidth * 2 + ImgLeftRighMargin * 4));
    console.log(ImgLeftRighMargin, ImgWidth);
  };

  const onClickR = () => {
    if (trans <= -(((mybooks.length - 4) / 2) * (ImgWidth * 2 + ImgLeftRighMargin * 4))) {
      return;
    }
    setTrans((current) => current - (ImgWidth * 2 + ImgLeftRighMargin * 4));
  };

  const getBookInfo = async () => {
    const dbBooks = await getDoc(doc(dbService, 'UserEval', authService.currentUser.uid));

    setMybooks(Object.values(dbBooks.data()));
  };

  const getCategoryList = async () => {
    const CTBooks = await getDoc(doc(dbService, 'BookCategoryList', 'DetailCateory'));

    setCategoryList(CTBooks.data());
    setLoading(false);
  };

  const onClickCateorySort = useCallback(
    (e) => {
      setMybooks((prev) => prev.filter((elem) => categoryList[elem.categoryId] === e.target.innerText));
    },
    [categoryList],
  );

  const onClickRatingSort = useCallback((e) => {
    let tempArr = e.target.innerText?.match(/(.+)~(.+)/);
    if (tempArr?.length > 2) {
      setMybooks((prev) => prev.filter((elem) => elem.rating >= tempArr[1] && elem.rating <= tempArr[2]));
    }
  }, []);

  const onClickYearSort = (e) => {
    // console.log(e.target.innerText);
    setMybooks((prev) =>
      prev.filter((elem) => new Date(elem.editDate).getFullYear().toString() === e.target.innerText),
    );
  };

  const deleteSameElem = useCallback((arr) => {
    let result = [];
    new Set(arr).forEach((e) => result.push(e));
    return result.sort((a, b) => b - a);
  }, []);

  useEffect(() => {
    setLoading(true);
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      if (isLoggedIn) {
        getBookInfo();
        getCategoryList();
      }
    });
  }, [isLoggedIn]);

  useEffect(() => {
    if (mybooks.length > 0) {
      mybooks.forEach((elem) => {
        if (!editYearList.includes(new Date(elem.editDate).getFullYear())) {
          setEditYearList((prev) => [new Date(elem.editDate).getFullYear(), ...prev]);
        }
      });
    }
  }, [editYearList, mybooks]);

  // console.log(categoryList);

  return loading ? (
    <div>loading..</div>
  ) : (
    <Background>
      <Container>
        <TopBox>
          <div className="container">
            <div>My books</div>
            <div>
              <span>Category</span>
              <span>Rating</span>
              <span>Date</span>
            </div>
          </div>
        </TopBox>
        {/* <div>
            {categoryList
              ? Object.entries(categoryList).map((name) => {
                  return <p onClick={onClickCateorySort}>{name[1]}</p>;
                })
              : null}
          </div>
          <div>
            {ratingSection.map((elem) => {
              return <p onClick={onClickRatingSort}>{elem}</p>;
            })}
          </div>
          <div>
            {deleteSameElem(editYearList)?.map((year) => {
              return <p onClick={onClickYearSort}>{year}</p>;
            })}
          </div> */}
        <div>
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
                  />
                );
              })}
            </Slides>
          </SlidesViewer>
          <Controller>
            <button className="Left" onClick={onClickL}>
              <FontAwesomeIcon icon={faCaretSquareLeft} />
            </button>
            <button className="Right" onClick={onClickR}>
              <FontAwesomeIcon icon={faCaretSquareRight} />
            </button>
          </Controller>
        </div>
      </Container>
    </Background>
  );
}

export default MybooksSlider;
