import CategoriesRecommend from '@components/CategoriesRecommend';
import { Container, InfoLetters, Background } from './styles';
import React from 'react';

function MyInfo() {
  return (
    <Background>
      <p style={{ margin: `0px auto 50px auto`, fontSize: `80px`, fontFamily: "'Rowdies', cursive" }}>
        My Book Collection
      </p>
      <Container>
        <InfoLetters>
          <div className="name">Kyungsle</div>
          <div className="letterBox">
            <div className="title">{'읽은 책수'}</div>
            <div>100</div>
            <div className="title">{`Best Book`}</div>
            <div>스피노자는 왜 라이프니츠를 몰래 만났나</div>
            <div className="title">{`Friends`}</div>
            <div>Jimin Jisookim jaham</div>
          </div>
        </InfoLetters>
        <CategoriesRecommend />
      </Container>
    </Background>
  );
}

export default MyInfo;
