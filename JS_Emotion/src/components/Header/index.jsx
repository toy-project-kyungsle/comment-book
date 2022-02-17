import useInput from '@hooks/useinput';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, LeftSection, RightSection } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { authService } from '@utils/fbase';

function Header({ isLoggedin, setIsLoggedin, setShowLoginModal }) {
  const [search, , onChangeSearch] = useInput('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();

  const onLogOutClick = () => {
    setIsLoggedin(false);
    authService.signOut();
    alert('로그아웃 되셨습니다!');
  };

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') return navigate(`/search/${search}/10/1`);
    },
    [navigate, search],
  );

  const onClickLogin = useCallback(() => {
    setShowLoginModal(true);
  }, [setShowLoginModal]);

  const onClickSearchBtn = useCallback(() => {
    return navigate(`/search/${search}/10/1`);
  }, [navigate, search]);

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
          <span>
            <button className="searchBtn">
              <FontAwesomeIcon icon={faSearch} style={{ color: `grey`, fontSize: '15px' }} onClick={onClickSearchBtn} />
            </button>
          </span>
        </div>
        <div className="auth">
          {isLoggedin ? <p onClick={onLogOutClick}>Logout</p> : <p onClick={onClickLogin}>Login</p>}
        </div>
      </RightSection>
    </Container>
  );
}

export default Header;
