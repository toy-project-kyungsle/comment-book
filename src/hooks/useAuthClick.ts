import { setIsLoggedIn, setShowLoginModal } from '@redux/store';
import { authService } from '@utils/fbaseApp';
import store from '@redux/store';

const useAuthClick = () => {
  const onClickLogout = () => {
    store.dispatch(setIsLoggedIn(false));
    authService.signOut();
    alert('로그아웃 되셨습니다!');
  };

  const onClickLogin = () => {
    store.dispatch(setShowLoginModal(true));
  };

  return [onClickLogin, onClickLogout];
};

export default useAuthClick;
