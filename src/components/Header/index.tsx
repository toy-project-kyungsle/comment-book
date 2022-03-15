import useInput from '@hooks/useinput';
import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, LeftSection, RightSection } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { authService } from '@utils/fbaseApp';
// import { useRecoilState } from 'recoil';
// import { FbaseAuth } from '@atom/FbaseAuth';
import { connect } from 'react-redux';
import { setAuth } from '@redux/store';

function Header({ setShowLoginModal, isLoggedIn, setisLoggedIn }) {
  const [search, , onChangeSearch] = useInput('');
  // const [isLoggedIn, setisLoggedIn] = useRecoilState(FbaseAuth('header'));
  let navigate = useNavigate();

  const onLogOutClick = () => {
    setisLoggedIn(false);
    authService.signOut();
    alert('로그아웃 되셨습니다!');
  };

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') return navigate(`/search/${search}/4`);
    },
    [navigate, search],
  );

  const onClickLogin = useCallback(() => {
    setShowLoginModal(true);
  }, [setShowLoginModal]);

  const onClickSearchBtn = useCallback(() => {
    return navigate(`/search/${search}/4`);
  }, [navigate, search]);

  return (
    <Container>
      <LeftSection>
        <Link to={`/`}>Book Comment</Link>
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
          {isLoggedIn ? <p onClick={onLogOutClick}>Logout</p> : <p onClick={onClickLogin}>Login</p>}
        </div>
      </RightSection>
    </Container>
  );
}

function mapStateToProps(state) {
  return { isLoggedIn: state };
}

function mapDispatchToProps(dispatch) {
  return {
    setisLoggedIn: (bool) => dispatch(setAuth(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
