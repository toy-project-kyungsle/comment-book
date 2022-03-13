import { atom } from 'recoil';
import { authService } from '@utils/fbase';
import { useState } from 'react';
import { v1 } from 'uuid';

function FbaseAuth(name: string) {
  const [authResult, setAuthResult] = useState(false);

  authService.onAuthStateChanged((user) => {
    if (user) {
      setAuthResult(true);
    } else {
      setAuthResult(false);
    }
  });

  return atom({
    key: `firebase/${name}/${v1()}`,
    default: authResult,
  });
}

export { FbaseAuth };
