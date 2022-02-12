import useInput from '@hooks/useinput';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Background, Container, LeftSection, RightSection } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { authService } from '@utils/fbase';

function Header() {
  const [search, , onChangeSearch] = useInput();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const onLogOutClick = () => {
    authService.signOut();
    alert('로그아웃 되셨습니다!');
  };

  // console.log(authService.currentUser);

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
          <div>{isLoggedIn ? <p onClick={onLogOutClick}>Logout</p> : <Link to="/auth">Login</Link>}</div>
        </RightSection>
      </Container>
    </Background>
  );
}

export default Header;
