import { EnterContainer } from './styles';
import React from 'react';

interface Props {
  email: string;
  password: string;
  signUp: boolean;
  retype: string;
  onChageRetype: (e: any) => void;
  onChange: (e: any) => void;
}

function AuthTextArea({ email, password, signUp, retype, onChageRetype, onChange }: Props) {
  return (
    <EnterContainer>
      <div>
        <div className="inputTag">Email</div>
        <input className="email" name="email" type="text" required value={email} onChange={onChange} />
      </div>
      <div>
        <div className="inputTag">Password</div>
        <input className="password" name="password" type="password" required value={password} onChange={onChange} />
      </div>
      {signUp && (
        <div>
          <div className="inputTag">Retype</div>
          <input
            className="retypeText"
            name="retype"
            type="text"
            required
            value={retype}
            placeholder="비밀번호를 다시 적어주세요"
            onChange={onChageRetype}
          />
        </div>
      )}
    </EnterContainer>
  );
}

export default AuthTextArea;
