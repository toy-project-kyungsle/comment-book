import useInput from '@hooks/useinput';
import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Container, LeftSection, RightSection } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [search, setSearch, onChangeSearch] = useInput();

  return (
    <Background>
      <Container>
        <LeftSection>
          <div className="PageName">
            <div>
              <Link to={`/`}>Favorites</Link>
            </div>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Search Movie!" value={search} onChange={onChangeSearch}></input>
              <Link to={`/search/${search}/10/1`}>
                <button>
                  <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: 'wheat' }} />
                </button>
              </Link>
            </form>
          </div>
        </LeftSection>
        <RightSection>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </RightSection>
      </Container>
    </Background>
  );
}

export default Header;
