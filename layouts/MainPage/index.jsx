import React from 'react';
import { Container, Header, InfoDiv, HaveReadBooks, Categories, NewBooks, Footer } from '@layouts/MainPage/styles';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <Container>
      <Header>
        <div className="Section">
          <div>title</div>
          <div>search</div>
        </div>
        <div className="Section">
          <div>selectbtn</div>
          <div>login</div>
        </div>
      </Header>
      <InfoDiv>InfoDiv</InfoDiv>
      <HaveReadBooks>
        <Link to="/mybooks">MyBooks</Link>
      </HaveReadBooks>
      <Categories>
        <Link to="/categories">categories</Link>
      </Categories>
      <NewBooks>NewBooks</NewBooks>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default MainPage;
