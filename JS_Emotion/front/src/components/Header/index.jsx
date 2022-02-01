import useInput from '@hooks/useinput';
import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Container, LeftSection, RightSection } from './styles';

function Header() {
  const [search, setSearch, onChangeSearch] = useInput();

  return (
    <Background>
      <Container>
        <LeftSection>
          <div>
            <Link to={`/`}>Favorites</Link>
          </div>
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
        </LeftSection>
        <RightSection>
          {/* <div>
          <button>book</button>
          <button>movie</button>
          <button>drama</button>
        </div> */}
          <Link to="/login">Login</Link>
        </RightSection>
      </Container>
    </Background>
  );
}

export default Header;
