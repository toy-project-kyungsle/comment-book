import React, { useCallback, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import '@utils/fbaseApp';
import { authService } from '@utils/fbaseApp';
import { Background, BtnContainer, Container, SignUpOrLogin } from './styles';
import AuthTextArea from '@components/organisms/AuthInput';
import AuthSocialLogin from '@components/molecules/SocialLogin';
import useInput from '@hooks/useinput';
import { connect } from 'react-redux';
import { setIsLoggedIn, setShowLoginModal } from '@redux/store';
import { reduxState } from '@utils/types';

const Auth = ({ setShowLoginModal, showLoginModal, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setSingUp] = useState(false);
  const [error, setError] = useState('');
  const [retype, , onChageRetype] = useInput('');

  const onChange = (event: { target: { name: string; value: string } }) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      if (signUp) {
        if (password === retype) {
          await createUserWithEmailAndPassword(authService, email, password);
          setError('');
        } else {
          setError('비밀번호 확인이 다릅니다!');
          return;
        }
      } else {
        await signInWithEmailAndPassword(authService, email, password);
      }
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } catch (error) {
      console.dir(error);
      setError(error.code);
    }
  };

  const onSocialClick = async (event: { target: { innerText: string } }) => {
    const name: string = event.target.innerText;
    let provider: GoogleAuthProvider;
    if (name === 'Google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'Github') {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(authService, provider);
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const closeLoginModal = useCallback(() => {
    setShowLoginModal(false);
  }, [setShowLoginModal]);

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onClickSignUporLogin = () => setSingUp((prev) => !prev);

  return (
    showLoginModal && (
      <Background onClick={closeLoginModal}>
        <Container onClick={stopPropagation}>
          <form onSubmit={onSubmit}>
            <div className="inner">
              <AuthTextArea
                email={email}
                password={password}
                signUp={signUp}
                retype={retype}
                onChageRetype={onChageRetype}
                onChange={onChange}
              />
              <BtnContainer>
                <div>
                  <input type="submit" value={signUp ? 'Sign up' : 'Log In'} />
                </div>
              </BtnContainer>
            </div>
            <p className="error">{error}</p>
          </form>
          <SignUpOrLogin>
            {signUp ? (
              <>
                <span className="guide">이미 계정이 있으신가요?</span>
                <span onClick={onClickSignUporLogin} className="toggle">
                  Log in
                </span>
              </>
            ) : (
              <>
                <span className="guide">회원가입을 원하시나요?</span>
                <span onClick={onClickSignUporLogin} className="toggle">
                  Sing up
                </span>
              </>
            )}
          </SignUpOrLogin>
          <AuthSocialLogin onSocialClick={onSocialClick} />
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
    setIsLoggedIn: (bool: boolean) => dispatch(setIsLoggedIn(bool)),
    setShowLoginModal: (bool: boolean) => dispatch(setShowLoginModal(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
