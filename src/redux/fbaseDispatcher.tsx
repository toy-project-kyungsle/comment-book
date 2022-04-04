import { authService } from '@utils/funtions/fbaseApp';
import store, { setIsLoggedIn } from '@redux/store';

function FbaseAuth() {
  authService.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(setIsLoggedIn(true));
    } else {
      store.dispatch(setIsLoggedIn(false));
    }
  });
}
export default FbaseAuth;
