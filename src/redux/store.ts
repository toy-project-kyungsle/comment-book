import { createStore } from 'redux';

const AuthStatus = 'setIsLoggedIn';
const ShowAuthModal = 'setShowLoginModal';

const reducer = (state = { isLoggedIn: false, showLoginModal: false }, action: { type: string; value: boolean }) => {
  switch (action.type) {
    case AuthStatus:
      return Object.assign({}, state, { isLoggedIn: action.value });
    case ShowAuthModal:
      return Object.assign({}, state, { showLoginModal: action.value });
    default:
      return state;
  }
};

export const setIsLoggedIn = (bool: boolean) => ({ type: AuthStatus, value: bool });
export const setShowLoginModal = (bool: boolean) => ({ type: ShowAuthModal, value: bool });

export default createStore(reducer);
