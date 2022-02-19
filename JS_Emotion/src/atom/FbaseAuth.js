import { atom } from 'recoil';

const FbaseAuth = atom({
  key: 'firebase/login',
  default: false,
});

export { FbaseAuth };
