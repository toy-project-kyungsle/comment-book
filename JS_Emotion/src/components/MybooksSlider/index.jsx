import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Favorites from '@atom/Favorite';
import { Container, Controller, Slides, SlidesViewer, Background, ImgWidth, ImgLeftRighMargin } from './styles';
import MyBookImg from '@components/MyBookImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

function MybooksSlider() {
  const [mybooks] = useRecoilState(Favorites);
  const [trans, setTrans] = useState(0);

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

  return (
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
                    shortcomment={book.eval?.shortcomment}
                    rating={book.eval?.rating}
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
