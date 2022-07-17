import { Wrapper } from './styles';
import React from 'react';
import InputBox from '@components/molecules/InputBox';

interface Props {
  email: string;
  signUp: boolean;
  onChageRetype: (e: any) => void;
  onChange: (e: any) => void;
}

function AuthInputBox({ email, signUp, onChageRetype, onChange }: Props) {
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
        placeholder="이메일을 적어주세요"
      />
      <InputBox
        tagClassName="AuthInputTag"
        tagText="Password"
        inputClassName="AuthInput"
        inputName="password"
        type="password"
        isRequired={true}
        onChange={onChange}
        placeholder="비밀번호를 적어주세요"
      />
      {signUp && (
        <InputBox
          tagClassName="AuthInputTag"
          tagText="Retype"
          inputClassName="AuthInput"
          inputName="retype"
          type="password"
          isRequired={true}
          onChange={onChageRetype}
          placeholder="비밀번호를 다시 적어주세요"
        />
      )}
    </Wrapper>
  );
}

export default AuthInputBox;
