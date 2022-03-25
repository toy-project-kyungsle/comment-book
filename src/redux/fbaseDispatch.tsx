import React from 'react';
import { authService } from '@utils/funtions/fbaseApp';
import { connect } from 'react-redux';
import { setIsLoggedIn } from '@redux/store';

function FbaseAuth({ storeAuth }) {
  authService.onAuthStateChanged((user) => {
    if (user) {
      storeAuth(true);
    } else {
      storeAuth(false);
    }
  });
  return <></>;
}

function mapDispatchToProps(dispatch: any) {
  return {
    storeAuth: (bool: boolean) => dispatch(setIsLoggedIn(bool)),
  };
}

export default connect(null, mapDispatchToProps)(FbaseAuth);
