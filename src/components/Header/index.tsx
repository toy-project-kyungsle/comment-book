import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, LeftSection, RightSection } from './styles';
import { authService } from '@utils/fbaseApp';
import { connect } from 'react-redux';
import { setAuth } from '@redux/store';
import Paragraph from '@components/atoms/Paragraph';
import SearchAuthForm from '@components/molecules/SearchAuthForm';

function Header({ setShowLoginModal, isLoggedIn, setisLoggedIn }) {
  const onClickLogout = () => {
    setisLoggedIn(false);
    authService.signOut();
    alert('로그아웃 되셨습니다!');
  };

  const onClickLogin = useCallback(() => {
    setShowLoginModal(true);
  }, [setShowLoginModal]);

  return (
    <Wrapper>
      <LeftSection>
        <Link to={`/`}>Book Comment</Link>
      </LeftSection>
      <RightSection>
        <SearchAuthForm formName="Header" />
        <div className="auth">
          {isLoggedIn ? (
            <Paragraph className="HeaderAuth" onClick={onClickLogout}>
              Logout
            </Paragraph>
          ) : (
            <Paragraph className="HeaderAuth" onClick={onClickLogin}>
              Login
            </Paragraph>
          )}
        </div>
      </RightSection>
    </Wrapper>
  );
}

function mapStateToProps(state: boolean) {
  return { isLoggedIn: state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setisLoggedIn: (bool: boolean) => dispatch(setAuth(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
