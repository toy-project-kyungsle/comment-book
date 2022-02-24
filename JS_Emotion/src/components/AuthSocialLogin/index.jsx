import React from 'react';
import { SosialLogin } from './styles';

function AuthSocialLogin({ onSocialClick }) {
  return (
    <SosialLogin>
      <div>or Social Login</div>
      <div className="innerSocial">
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
      </div>
    </SosialLogin>
  );
}

export default AuthSocialLogin;
