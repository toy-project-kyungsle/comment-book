import React, { useEffect } from 'react';
import { Books, Container, Footer, List } from '@router/Search/styles';
import { useParams } from 'react-router';
import axios from 'axios';
import useInput from '@hooks/useinput';
import SearchRender from '@render/SearchRender';
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
      console.log(res.data.items);
      setLoading(false);
    });
  }, [display, search, setBooks, setLoading, start]);

  return (
    <Container>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Books>
          {books.map((book) => (
            <SearchRender
              key={book.isbn}
              title={book.title}
              coverImg={book.image}
              price={book.price}
              discount={book.discount}
              author={book.author}
              description={book.description}
              link={book.link}
              pubdate={book.pubdate}
            />
          ))}
        </Books>
      )}
      {loading ? null : (
        <Footer>
          <List>
            {List_arr.map((lst) => {
              return (
                <Link key={lst} to={`/search/${search}/${display}/${(lst - 1) * 10 + 1}`}>
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
