import React from 'react';
import { Container } from '@pages/Search/styles';
import { useParams } from 'react-router';
import axios from 'axios';

function Search() {
  const { search } = useParams();
  const api_url = `https://openapi.naver.com/v1/search/book.json?query=%ED%95%9C%EA%B5%AD&display=10&start=1&d_titl=${search}`;
  const client_id = '9uU2qHN7dYtWTQBpV68p';
  const client_secret = 'Vqc5tG7Frb';

  // api 요청 옵션 (번역: 영어 -> 한글)
  const options = {
    method: 'get',
    url: api_url,
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret,
    },
  };

  axios(options).then((response) => console.log(response));

  console.log(typeof search);

  return <Container>Hello</Container>;
}

export default Search;
