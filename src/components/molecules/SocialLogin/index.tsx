import ImageBox from '@components/molecules/ImageBox';
import React from 'react';
import { InnerContainer, Wrapper } from './styles';
import Span from '@components/atoms/Span';

interface Props {
  onSocialClick: (event: any) => void;
}

function AuthSocialLogin({ onSocialClick }: Props) {
  return (
    <Wrapper>
      <div className="guide">소셜 로그인도 가능합니다</div>
      <InnerContainer>
        <ImageBox
          className="SocialLogin"
          onSocialClick={onSocialClick}
          src="https://user-images.githubusercontent.com/79993356/154572455-82bfef3f-431c-43ec-b2b8-136e4a287517.png"
        >
          <Span className="default" onClick={onSocialClick}>
            {'Google'}
          </Span>
        </ImageBox>

        <ImageBox
          className="SocialLogin"
          onSocialClick={onSocialClick}
          src="https://user-images.githubusercontent.com/79993356/154572449-3850b95d-9b30-4ac5-a894-743c9d3d77f8.png"
        >
          <Span className="default" onClick={onSocialClick}>
            {'Github'}
          </Span>
        </ImageBox>
      </InnerContainer>
    </Wrapper>
  );
}

export default AuthSocialLogin;
