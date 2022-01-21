import { atom } from 'recoil';

const Users = atom({
  key: 'Favorites',
  default: [{}],
});

export default Users;
