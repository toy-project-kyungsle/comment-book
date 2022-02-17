import React from 'react';
import { Background, Container, Alert, Mysns, Copyright } from './styles';

function Footer() {
  return (
    <Background>
      <Container>
        <Alert>
          <p align="right">All designs and animations were made by the author himself.</p>
          <p align="right">So unauthorized distribution is prohibited.</p>
        </Alert>
        <Mysns>
          <div className="mysns_container">
            <a href="https://github.com/keinn51" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://basemenks.tistory.com/" target="_blank" rel="noreferrer">
              Blog
            </a>
            <a href="https://www.instagram.com/keinn51/" target="_blank" rel="noreferrer">
              Insta
            </a>
            <a href="https://www.facebook.com/sooks447/" target="_blank" rel="noreferrer">
              FaceBook
            </a>
          </div>
        </Mysns>
        <Copyright>
          <p align="right">@ 2022 BookComment from Kyungsle</p>
        </Copyright>
      </Container>
    </Background>
  );
}

export default Footer;
