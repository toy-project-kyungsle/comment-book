import React, { useCallback, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import '@utils/fbase';
import { authService } from '@utils/fbase';
import { Background, BtnContainer, Container, SignUpOrLogin } from './styles';
import { useSetRecoilState } from 'recoil';
import { FbaseAuth } from '@atom/FbaseAuth';
import AuthTextArea from '@components/AuthTextArea';
import AuthSocialLogin from '@components/AuthSocialLogin';

const Auth = ({ setShowLoginModal, showLoginModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');
  const setIsLoggedIn = useSetRecoilState(FbaseAuth());

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(authService, email, password);
      } else {
        await signInWithEmailAndPassword(authService, email, password);
      }
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } catch (error) {
      console.log(Object.keys(error));
      console.log(Object.values(error));
      setError(error.code);
    }
  };

  const onSocialClick = async (event) => {
    const name = event.target.name;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(authService, provider);
    setIsLoggedIn(true);
  };

  const closeLoginModal = useCallback(() => {
    setShowLoginModal(false);
  }, [setShowLoginModal]);

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return showLoginModal ? (
    <Background onClick={closeLoginModal}>
      <Container onClick={stopPropagation}>
        <form onSubmit={onSubmit}>
          <div className="inner">
            <AuthTextArea email={email} password={password} onChange={onChange} />
            <BtnContainer>
              <div>
                <input type="submit" value={newAccount ? 'Sign up' : 'Log In'} />
              </div>
            </BtnContainer>
          </div>
          <p className="error">{error}</p>
        </form>
        <SignUpOrLogin>
          {newAccount ? null : (
            <>
              <span>If you have no email?</span>
              <span onClick={toggleAccount} className="signup">
                Sing up
              </span>
            </>
          )}
        </SignUpOrLogin>
        <AuthSocialLogin onSocialClick={onSocialClick} />
      </Container>
    </Background>
  ) : null;
};
export default Auth;
