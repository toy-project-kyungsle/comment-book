import React from 'react';
import { Background, Wrapper, SearchBar } from './styles';
import Span from '@components/atoms/Span';
import InputButton from '@components/molecules/InputButton';

function Search() {
  return (
    <Background>
      <Wrapper>
        <div className="search">
          <Span className="MainPage--Search">Search Book</Span>
        </div>
        <SearchBar>
          <InputButton className="MainPage--Search" InputPlaceHolder="Free search book you want!" />
        </SearchBar>
      </Wrapper>
    </Background>
  );
}

export default Search;
