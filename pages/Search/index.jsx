import React from 'react';
import { Container } from '@pages/Search/styles';
import { useParams } from 'react-router';
import axios from 'axios';

function Search() {
  const { search } = useParams();

  axios.get('http://localhost:3085/search').then((res) => console.log(res));

  console.log(typeof search);

  return <Container>Hello</Container>;
}

export default Search;
