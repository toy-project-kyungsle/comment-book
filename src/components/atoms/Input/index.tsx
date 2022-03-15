import React from 'react';
import { css } from '@emotion/css';

interface Props {
  className: string;
  name: string;
  type: string;
  value: string;
  isRequired: boolean;
  onChange: (e: any) => void;
  placeholder?: string;
}

function Input(props: Props) {
  const { className, name, type, value, isRequired, onChange, placeholder } = props;

  return (
    <input
      className={
        className === 'AuthInput' &&
        css`
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 12px;
          border: none;
          border-bottom: 1px solid;
          width: 200px;
          text-align: center;
        `
      }
      name={name}
      type={type}
      required={isRequired && true}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
