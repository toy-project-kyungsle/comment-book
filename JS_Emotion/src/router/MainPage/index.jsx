import React from 'react';
import { Container, Footer } from './styles';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';

function MainPage() {
  return (
    <Container>
      <MyInfo />
      <MybooksSlider />
      <Footer>
        <div className="Copyright">Copyright to Kyungsle</div>
      </Footer>
    </Container>
  );
}

export default MainPage;
