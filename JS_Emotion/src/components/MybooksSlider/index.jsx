import React, { useEffect, useState } from 'react';
import { Container, Controller, Slides, SlidesViewer, Background, ImgWidth, ImgLeftRighMargin } from './styles';
import MyBookImg from '@components/MyBookImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { dbService, authService } from '@utils/fbase';
import { getDocs, collection } from 'firebase/firestore';

function MybooksSlider() {
  const [trans, setTrans] = useState(0);
  const [mybooks, setMybooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

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
    const dbBooks = await getDocs(collection(dbService, `UserEval_${authService.currentUser.uid}`));

    dbBooks.forEach((e) => setMybooks((prev) => [e.data(), ...prev]));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      if (isLoggedIn) getBookInfo();
    });
  }, [isLoggedIn]);

  return loading ? (
    <div>loading..</div>
  ) : (
    <Background>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '50px' }}>
          <p style={{ fontSize: `70px`, fontFamily: "'Rowdies', cursive" }}>All the Book I read</p>
        </div>
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
