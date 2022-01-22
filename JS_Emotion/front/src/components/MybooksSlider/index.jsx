import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Favorites from '@atom/Favorite';
import { Container, Controller, Slides, SlidesViewer } from './styles';
import MyBooks from '@components/MyBooks';

function MybooksSlider() {
  const [mybooks] = useRecoilState(Favorites);
  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + 470);
  };

  const onClickR = () => {
    if (trans <= -1380) {
      return;
    }
    setTrans((current) => current - 470);
  };

  return (
    <Container>
      <SlidesViewer>
        <Slides style={{ transform: `translateX(${trans}px)` }}>
          {mybooks.map((book) => {
            return <MyBooks key={book.id} title={book.title} coverImg={book.coverLargeUrl} isbn={book.isbn} />;
          })}
        </Slides>
      </SlidesViewer>
      <Controller>
        <button className="Left" onClick={onClickL}>{`<`}</button>
        <button className="Right" onClick={onClickR}>
          {'>'}
        </button>
      </Controller>
    </Container>
  );
}

export default MybooksSlider;
