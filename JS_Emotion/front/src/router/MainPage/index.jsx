import React from 'react';
import {
  Container,
  Header,
  InfoDiv,
  Categories,
  Footer,
  MyBooksCollection,
  HotBooksCollection,
} from '@router/MainPage/styles';
import { Link } from 'react-router-dom';
import useInput from '@hooks/useinput';
import MyBooks from '@components/MyBooks';
import HotBooks from '@components/HotBooks';

function MainPage() {
  const [search, setSearch, onChangeSearch] = useInput();

  return (
    <Container>
      <Header>
        <div className="Section">
          <div>title</div>
          <div>
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Search Movie!"
                  value={search}
                  onChange={onChangeSearch}
                  onMouseOut={() => {
                    setSearch('');
                  }}
                ></input>
                <Link to={`/search/${search}/10/1`}>
                  <button>Search</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="Section">
          <div>selectbtn</div>
          <Link to="/login">Login</Link>
        </div>
      </Header>
      <InfoDiv>InfoDiv</InfoDiv>
      <MyBooksCollection>
        <MyBooks />
      </MyBooksCollection>
      <Categories>
        <Link to="/categories">categories</Link>
      </Categories>
      <HotBooksCollection>
        <HotBooks />
      </HotBooksCollection>
      <Footer>Copyright to Kyungsle</Footer>
    </Container>
  );
}

export default MainPage;
