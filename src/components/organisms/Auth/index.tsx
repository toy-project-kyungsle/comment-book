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

const Auth = ({ setShowLoginModal, showLoginModal }) => {
  const [signUp, setSingUp] = useState(false);
  const [email, password, onChange, error, retype, onChageRetype, onSubmit, onSocialClick] = useLogin('', signUp);

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
          <SignUpOrLogin>
            {signUp ? (
              <>
                <Span className="AuthGuide">이미 계정이 있으신가요?</Span>
                <Span onClick={() => setSingUp((prev) => !prev)} className="AuthToggle">
                  Log in
                </Span>
              </>
            ) : (
              <>
                <Span className="AuthGuide">회원가입을 원하시나요?</Span>
                <Span onClick={() => setSingUp((prev) => !prev)} className="AuthToggle">
                  Sing up
                </Span>
              </>
            )}
          </SignUpOrLogin>
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
