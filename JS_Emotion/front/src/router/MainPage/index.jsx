import React from 'react';
import { Container, Footer } from './styles';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';
import Friends from '@components/Friends';

function MainPage() {
  return (
    <Container>
      <MyInfo />
      <MybooksSlider />
      <Friends />
      {/* <HotNewBooksSlider /> */}
      <Footer>
        <div className="Copyright">Copyright to Kyungsle</div>
      </Footer>
    </Container>
  );
}

export default MainPage;
