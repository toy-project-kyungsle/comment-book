import React from 'react';
import { Container, Footer, HotBooksCollection } from './styles';
import HotBooks from '@components/HotBooks';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';

function MainPage() {
  return (
    <Container>
      <MybooksSlider />
      <MyInfo />
      <HotBooksCollection>
        <HotBooks />
      </HotBooksCollection>
      <Footer>Copyright to Kyungsle</Footer>
    </Container>
  );
}

export default MainPage;
