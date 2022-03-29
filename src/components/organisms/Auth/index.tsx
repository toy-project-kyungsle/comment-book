import React, { useState } from 'react';
import '@utils/funtions/fbaseApp';
import { Background, Container, SignUpOrLogin } from './styles';
import SocialLogin from '@components/molecules/SocialLogin';
import { connect } from 'react-redux';
import { setShowLoginModal } from '@redux/store';
import { reduxState } from '@utils/objects/types';
import SubmitForm from '@components/molecules/SubmitForm';
import useLogin from '@hooks/notReUsable/useAuth';
import Span from '@components/atoms/Span';
import SpanBox from '@components/molecules/SpanBox';

const Auth = ({ setShowLoginModal, showLoginModal }) => {
  const [signUp, setSingUp] = useState(false);
  const [email, password, onChange, error, retype, onChageRetype, onSubmit, onSocialClick] = useLogin('', signUp);
  const [ClassArr, SignUpTextArr, SignUpOnClickArr] = [
    ['AuthGuide', 'AuthToggle'],
    ['이미 계정이 있으신가요?', 'Log in'],
    [null, () => setSingUp((prev) => !prev)],
  ];
  const [LoginTextArr, LoginOnClickArr] = [
    ['회원가입을 원하시나요?', 'Sing up'],
    [null, () => setSingUp((prev) => !prev)],
  ];

  return (
    showLoginModal && (
      <Background onClick={() => setShowLoginModal(false)}>
        <Container onClick={(e) => e.stopPropagation()}>
          <SubmitForm
            className="Auth"
            onSubmit={onSubmit}
            email={email}
            password={password}
            signUp={signUp}
            value={signUp ? 'Sign up' : 'Log In'}
            retype={retype}
            onChageRetype={onChageRetype}
            onChange={onChange}
            error={error}
          />
          <SpanBox
            className="Auth"
            classNameArr={ClassArr}
            textArr={signUp ? SignUpTextArr : LoginTextArr}
            onClickArr={signUp ? SignUpOnClickArr : LoginOnClickArr}
          />
          <SocialLogin onSocialClick={onSocialClick} />
        </Container>
      </Background>
    )
  );
};

function mapStateToProps(state: reduxState) {
  return { showLoginModal: state['showLoginModal'] };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setShowLoginModal: (bool: boolean) => dispatch(setShowLoginModal(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
