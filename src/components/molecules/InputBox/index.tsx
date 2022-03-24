import Input from '@components/atoms/Input';
import React from 'react';
import { TagDiv, Wrapper } from './styles';

interface Props {
  tagClassName?: string;
  inputClassName: string;
  tagText?: string;
  inputName?: string;
  type: string;
  isRequired?: boolean;
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
}

function InputBox(props: Props) {
  const { tagClassName, tagText, inputClassName, inputName, type, isRequired, value, onChange, placeholder } = props;
  return (
    <Wrapper data-mode={tagClassName}>
      <TagDiv data-mode={tagClassName}>{tagText}</TagDiv>
      <Input
        className={inputClassName}
        name={inputName}
        type={type}
        isRequired={isRequired}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

export default InputBox;
