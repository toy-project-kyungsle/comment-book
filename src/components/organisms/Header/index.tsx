import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, LeftSection, RightSection } from './styles';
import { connect } from 'react-redux';
import Paragraph from '@components/atoms/Paragraph';
import SearchAuthForm from '@components/molecules/SearchAuthForm';
import { reduxState } from '@utils/types';
import useAuthClick from '@hooks/useAuthClick';

function Header({ isLoggedIn }) {
  const [onClickLogin, onClickLogout] = useAuthClick();

  return (
    <Wrapper>
      <LeftSection>
        <Link to={`/`}>Book Comment</Link>
      </LeftSection>
      <RightSection>
        <SearchAuthForm className="Header" />
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

function mapStateToProps(state: reduxState) {
  return { isLoggedIn: state['isLoggedIn'] };
}

export default connect(mapStateToProps)(Header);
