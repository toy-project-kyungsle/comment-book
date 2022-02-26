import { EnterContainer } from './styles';
import React from 'react';

function AuthTextArea({ email, password, onChange }) {
  return (
    <EnterContainer>
      <div>
        <div className="inputTag">
          Email
        </div>
        <input className="email" name="email" type="text" required value={email} onChange={onChange} />
      </div>
      <div>
        <div className="inputTag">
          Password
        </div>
        <input className="password" name="password" type="password" required value={password} onChange={onChange} />
      </div>
    </EnterContainer>
  );
}

export default AuthTextArea;
