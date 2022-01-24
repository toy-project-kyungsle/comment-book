import React from 'react';
import { Container, Footer, HotBooksCollection } from './styles';
import HotBooks from '@components/HotBooks';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';
import FriendsBook from '@components/FriendsBook';

function MainPage() {
  return (
    <Container>
      <MybooksSlider />
      <MyInfo />
      <FriendsBook />
      <HotBooksCollection>
        <HotBooks />
      </HotBooksCollection>
      <Footer>Copyright to Kyungsle</Footer>
    </Container>
  );
}

export default MainPage;
