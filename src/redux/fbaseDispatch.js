import { authService } from '@utils/fbase';
import { connect } from 'react-redux';
import { setAuth } from '@redux/store';

function FbaseAuth({ storeAuth }) {
  authService.onAuthStateChanged((user) => {
    if (user) {
      storeAuth(true);
    } else {
      storeAuth(false);
    }
  });
}

function mapDispatchToProps(dispatch) {
  return {
    storeAuth: (bool) => dispatch(setAuth(bool)),
  };
}

export default connect(null, mapDispatchToProps)(FbaseAuth);
