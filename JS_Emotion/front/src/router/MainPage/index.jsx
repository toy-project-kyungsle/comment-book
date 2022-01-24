import React from 'react';
import { Container, Footer } from './styles';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';
import Friends from '@components/Friends';
import HotNewBooksSlider from '@components/HotNewBooksSlider';

function MainPage() {
  return (
    <Container>
      <MyInfo />
      <MybooksSlider />
      <Friends />
      <HotNewBooksSlider />
      <Footer>Copyright to Kyungsle</Footer>
    </Container>
  );
}

export default MainPage;
