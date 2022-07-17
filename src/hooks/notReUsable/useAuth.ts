import { setIsLoggedIn, setShowLoginModal } from '@redux/store';
import { authService } from '@utils/funtions/fbaseApp';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import useInput from '../reuUsable/useinput';
import store from '@redux/store';

type rtn = [string, string, (e: any) => void, string, string, (e: any) => void, (e: any) => void, (e: any) => void];

const useLogin = (initialData: string, signUp: boolean): rtn => {
  const [email, setEmail] = useState(initialData);
  const [password, setPassword] = useState(initialData);
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
          alert('회원가입 되었습니다');
          setError('');
        } else {
          setError('비밀번호 확인이 다릅니다!');
          return;
        }
      } else {
        alert('로그인 되었습니다');
        await signInWithEmailAndPassword(authService, email, password);
      }
      store.dispatch(setShowLoginModal(false));
      store.dispatch(setIsLoggedIn(true));
    } catch (error) {
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
    alert('로그인 되었습니다');
    store.dispatch(setShowLoginModal(false));
    store.dispatch(setIsLoggedIn(true));
  };

  return [email, password, onChange, error, retype, onChageRetype, onSubmit, onSocialClick];
};

export default useLogin;
