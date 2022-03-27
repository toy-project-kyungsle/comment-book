import React from 'react';
import TextAreas from '@components/molecules/TextAreas';
import { BtnContainer, Form } from './styles';
import Paragraph from '@components/atoms/Paragraph';
import InputBox from '../InputBox';

function SubmitForm(props) {
  const { className, onSubmit, email, password, value, retype, onChageRetype, onChange, error, signUp } = props;
  return (
    <Form onSubmit={onSubmit} data-mode={className}>
      <div className="inner" data-mode={className}>
        <TextAreas
          email={email}
          password={password}
          signUp={signUp}
          retype={retype}
          onChageRetype={onChageRetype}
          onChange={onChange}
        />
        <BtnContainer data-mode={className}>
          <InputBox inputClassName="SubmitForm" type="submit" value={value} />
        </BtnContainer>
      </div>
      <Paragraph className="SubmitForm">{error}</Paragraph>
    </Form>
  );
}

export default SubmitForm;
