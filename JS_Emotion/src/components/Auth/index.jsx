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
import { Background, BtnContainer, Container, EnterContainer, SignUpOrLogin, SosialLogin } from './styles';
import { useSetRecoilState } from 'recoil';
import { FbaseAuth } from '@atom/FbaseAuth';

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
      setError(error.message);
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
            <EnterContainer>
              <div>
                <div className="inputTag" align="center">
                  Email
                </div>
                <input className="email" name="email" type="text" required value={email} onChange={onChange} />
              </div>
              <div>
                <div className="inputTag" align="center">
                  Password
                </div>
                <input
                  className="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={onChange}
                />
              </div>
            </EnterContainer>
            <BtnContainer>
              <div>
                <input type="submit" value={newAccount ? 'Sign up' : 'Log In'} />
              </div>
            </BtnContainer>
          </div>
          {error}
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
        <SosialLogin>
          <div>or Social Login</div>
          <div className="innerSocial">
            <div className="forflex">
              <div>
                <img
                  src="https://user-images.githubusercontent.com/79993356/154572449-3850b95d-9b30-4ac5-a894-743c9d3d77f8.png"
                  alt="null"
                ></img>
              </div>
              <div id="google" onClick={onSocialClick}>
                <div>Google</div>
              </div>
            </div>

            <div className="forflex">
              <div>
                <img
                  src="https://user-images.githubusercontent.com/79993356/154572455-82bfef3f-431c-43ec-b2b8-136e4a287517.png"
                  alt="null"
                ></img>
              </div>
              <div id="github" onClick={onSocialClick}>
                <div>Github</div>
              </div>
            </div>
          </div>
        </SosialLogin>
      </Container>
    </Background>
  ) : null;
};
export default Auth;
