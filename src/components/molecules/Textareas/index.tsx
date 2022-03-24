import { Wrapper } from './styles';
import React from 'react';
import InputBox from '@components/molecules/InputBox';

interface Props {
  email: string;
  password: string;
  signUp: boolean;
  retype: string;
  onChageRetype: (e: any) => void;
  onChange: (e: any) => void;
}

function TextAreas({ email, password, signUp, retype, onChageRetype, onChange }: Props) {
  return (
    <Wrapper>
      <InputBox
        tagClassName="AuthInputTag"
        tagText="Email"
        inputClassName="AuthInput"
        inputName="email"
        type="text"
        isRequired={true}
        value={email}
        onChange={onChange}
      />
      <InputBox
        tagClassName="AuthInputTag"
        tagText="Password"
        inputClassName="AuthInput"
        inputName="password"
        type="password"
        isRequired={true}
        value={password}
        onChange={onChange}
      />
      {signUp && (
        <InputBox
          tagClassName="AuthInputTag"
          tagText="Retype"
          inputClassName="AuthInput"
          inputName="retype"
          type="text"
          isRequired={true}
          value={retype}
          onChange={onChageRetype}
          placeholder="비밀번호를 다시 적어주세요"
        />
      )}
    </Wrapper>
  );
}

export default TextAreas;
