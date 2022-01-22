import React from 'react';
import { Container, Categories, Footer, HotBooksCollection } from '@router/MainPage/styles';
import HotBooks from '@components/HotBooks';
import CategoriesRecommend from '@components/CategoriesRecommend';
import MybooksSlider from '@components/MybooksSlider';

function MainPage() {
  return (
    <Container>
      <MybooksSlider />
      <Categories>
        <CategoriesRecommend></CategoriesRecommend>
      </Categories>
      <HotBooksCollection>
        <HotBooks />
      </HotBooksCollection>
      <Footer>Copyright to Kyungsle</Footer>
    </Container>
  );
}

export default MainPage;
