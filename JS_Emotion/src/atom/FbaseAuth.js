import { atom } from 'recoil';
import { authService } from '@utils/fbase';
import { useState } from 'react';

function FbaseAuth() {
  const [authResult, setAuthResult] = useState(false);

  authService.onAuthStateChanged((user) => {
    if (user) {
      setAuthResult(true);
    } else {
      setAuthResult(false);
    }
  });

  return atom({
    key: 'firebase/login',
    default: authResult,
  });
}

export { FbaseAuth };
