import ImageBox from '@components/molecules/ImageBox';
import React from 'react';
import { InnerContainer, Wrapper } from './styles';
import Span from '@components/atoms/Span';
import googleImg from '@utils/images/google.webp';
import githubImg from '@utils/images/github.avif';

interface Props {
  onSocialClick: (event: any) => void;
}

function AuthSocialLogin({ onSocialClick }: Props) {
  return (
    <Wrapper>
      <div className="guide">소셜 로그인도 가능합니다</div>
      <InnerContainer>
        <ImageBox className="SocialLogin" onSocialClick={onSocialClick} src={googleImg}>
          <Span className="default" onClick={onSocialClick}>
            {'Google'}
          </Span>
        </ImageBox>

        <ImageBox className="SocialLogin" onSocialClick={onSocialClick} src={githubImg}>
          <Span className="default" onClick={onSocialClick}>
            {'Github'}
          </Span>
        </ImageBox>
      </InnerContainer>
    </Wrapper>
  );
}

export default AuthSocialLogin;
