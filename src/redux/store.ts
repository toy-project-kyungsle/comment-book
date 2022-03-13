import { createStore } from 'redux';

const Auth = 'Auth';

const reducer = (state = false, action: { type: string; value: boolean }) => {
  return action.value;
};

export const setAuth = (bool: boolean) => ({ type: Auth, value: bool });

export default createStore(reducer);
