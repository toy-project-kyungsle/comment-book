import React from 'react';
import { Sinput } from './styles';

interface Props {
  className?: string;
  name?: string;
  type: string;
  value: string;
  isRequired?: boolean;
  onKeyDown?: (e: any) => void;
  onChange: (e: any) => void;
  placeholder?: string;
}

function Input(props: Props) {
  const { className, name, type, value, isRequired = false, onChange, onKeyDown, placeholder } = props;

  return (
    <Sinput
      data-mode={className}
      name={name}
      type={type}
      required={isRequired && true}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
