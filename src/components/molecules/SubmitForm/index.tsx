import React from 'react';
import InputBoxes from '@components/molecules/AuthInputBox';
import { BtnWrapper, Form } from './styles';
import Paragraph from '@components/atoms/Paragraph';
import InputBox from '../InputBox';

function SubmitForm(props) {
  const { className, onSubmit, email, value, onChageRetype, onChange, error, signUp } = props;
  return (
    <Form onSubmit={onSubmit} data-mode={className}>
      <div className="inner" data-mode={className}>
        <InputBoxes email={email} signUp={signUp} onChageRetype={onChageRetype} onChange={onChange} />
        <BtnWrapper data-mode={className}>
          <InputBox inputClassName="SubmitForm" type="submit" value={value} />
        </BtnWrapper>
      </div>
      <Paragraph className="SubmitForm">{error}</Paragraph>
    </Form>
  );
}

export default SubmitForm;
