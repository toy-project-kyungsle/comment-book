import React, { useEffect } from 'react';
import { Books, Container, Empty, Footer, List, Ment } from './styles';
import { useParams } from 'react-router';
import axios from 'axios';
import useInput from '@hooks/useinput';
import SearchRender from '@components/SearchRender';
import { Link } from 'react-router-dom';

function Search() {
  const { search, display, start } = useParams();
  const [books, setBooks] = useInput([]);
  const [loading, setLoading] = useInput(false);
  const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3085/search/${search}/${display}/${start}`).then((res) => {
      setBooks(res.data.items);
      // console.log(res.data.items);
      setLoading(false);
    });
  }, [display, search, setBooks, setLoading, start]);

  return (
    <Container>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Ment>Click to add!</Ment>

          {books.length > 0 ? (
            <Books>
              {books.map((book) => (
                <SearchRender
                  key={book.isbn}
                  isbn={book.isbn}
                  title={book.title}
                  coverImg={book.coverLargeUrl}
                  priceStandard={book.priceStandard}
                  priceSales={book.priceSales}
                  author={book.author}
                  description={book.description}
                  link={book.link}
                  pubDate={book.pubDate}
                />
              ))}
            </Books>
          ) : (
            <Empty>Noting Else...</Empty>
          )}
        </>
      )}
      {loading ? null : (
        <Footer>
          <List>
            {List_arr.map((lst) => {
              return (
                <Link key={lst} to={`/search/${search}/${display}/${lst}`}>
                  {lst}
                </Link>
              );
            })}
          </List>
        </Footer>
      )}
    </Container>
  );
}

export default Search;
