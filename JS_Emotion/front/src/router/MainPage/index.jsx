import React from 'react';
import { Container, Categories, Footer, MyBooksCollection, HotBooksCollection } from '@router/MainPage/styles';
import MyBooks from '@components/MyBooks';
import HotBooks from '@components/HotBooks';
import CategoriesRecommend from '@components/CategoriesRecommend';

function MainPage() {
  return (
    <Container>
      <MyBooksCollection>
        <MyBooks />
      </MyBooksCollection>
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
