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
        <div className="forflex">
          <div>
            <img
              src="https://user-images.githubusercontent.com/79993356/154572455-82bfef3f-431c-43ec-b2b8-136e4a287517.png"
              alt="null"
            ></img>
          </div>
          <div id="google" onClick={onSocialClick}>
            <div>Google</div>
          </div>
        </div>

        <div className="forflex">
          <div>
            <img
              src="https://user-images.githubusercontent.com/79993356/154572449-3850b95d-9b30-4ac5-a894-743c9d3d77f8.png"
              alt="null"
            ></img>
          </div>
          <div id="github" onClick={onSocialClick}>
            <div>Github</div>
          </div>
        </div>
      </InnerContainer>
    </SosialLogin>
  );
}

export default AuthSocialLogin;
