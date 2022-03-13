import { createStore } from 'redux';

const Auth = 'Auth';

const reducer = (state = false, action) => {
  return action.value;
};

const store = createStore(reducer);

export const setAuth = (bool) => ({ type: Auth, value: bool });

export default store;
