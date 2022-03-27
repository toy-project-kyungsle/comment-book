import React from 'react';
import { Background, Wrapper, SearchBar } from './styles';
import Span from '@components/atoms/Span';
import InputButton from '@components/molecules/InputButton';

function MainSearch() {
  return (
    <Background>
      <Wrapper>
        <div className="search">
          <Span className="MainSearch">Search Book</Span>
        </div>
        <SearchBar>
          <InputButton className="MainSearch" InputPlaceHolder="Free search book you want!" />
        </SearchBar>
      </Wrapper>
    </Background>
  );
}

export default MainSearch;
