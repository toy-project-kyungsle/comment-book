import React from 'react';
import { Container } from '@router/Search/styles';
import { useParams } from 'react-router';
import axios from 'axios';
import useInput from '@hooks/useinput';

function Search() {
  const { search, display } = useParams();
  const [books, setBooks] = useInput();

  if (search && display) {
    axios.get(`http://localhost:3085/search/${search}/${display}`).then((res) => {
      setBooks(res);
    });
  }

  return <Container>Hello</Container>;
}

export default Search;
