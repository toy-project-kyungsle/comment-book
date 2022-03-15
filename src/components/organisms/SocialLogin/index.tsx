import SocialTag from '@components/molecules/SocialTag';
import React from 'react';
import { InnerContainer, SosialLogin } from './styles';

interface Props {
  onSocialClick: (event: any) => void;
}

function AuthSocialLogin({ onSocialClick }: Props) {
  return (
    <SosialLogin>
      <div className="guide">소셜 로그인도 가능합니다</div>
      <InnerContainer>
        <SocialTag
          onSocialClick={onSocialClick}
          imgSrc="https://user-images.githubusercontent.com/79993356/154572455-82bfef3f-431c-43ec-b2b8-136e4a287517.png"
          imgHeight="20px"
          imgWidth="20px"
          imgMagin=" 0 10px 3px 0"
          DivID="google"
          DivText="Google"
        />

        <SocialTag
          onSocialClick={onSocialClick}
          imgSrc="https://user-images.githubusercontent.com/79993356/154572449-3850b95d-9b30-4ac5-a894-743c9d3d77f8.png"
          imgHeight="20px"
          imgWidth="20px"
          imgMagin=" 0 10px 3px 0"
          DivID="github"
          DivText="Github"
        ></SocialTag>
      </InnerContainer>
    </SosialLogin>
  );
}

export default AuthSocialLogin;
