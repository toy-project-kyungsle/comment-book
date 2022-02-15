import useInput from '@hooks/useinput';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, LeftSection, RightSection } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { authService } from '@utils/fbase';

function Header() {
  const [search, setSearch, onChangeSearch] = useInput('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    alert('로그아웃 되셨습니다!');
  };

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') return navigate(`/search/${search}/10/1`);
    },
    [navigate, search],
  );

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <Container>
      <LeftSection>
        <Link to={`/`}>Favorites</Link>
      </LeftSection>
      <RightSection>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={onChangeSearch}
            onKeyDown={onKeyDown}
          ></input>
        </div>
        <div>
          <Link to={`/search/${search}/10/1`}>
            <button className="searchBtn">
              <FontAwesomeIcon icon={faSearch} style={{ color: `grey`, fontSize: '15px' }} />
            </button>
          </Link>
        </div>
        <div>{isLoggedIn ? <p onClick={onLogOutClick}>Logout</p> : <Link to="/auth">Login</Link>}</div>
      </RightSection>
    </Container>
  );
}

export default Header;
