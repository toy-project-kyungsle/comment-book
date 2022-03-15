import Input from '@components/atoms/Input';
import React from 'react';

function InputBox(props) {
  const { tagClassName, tagText, inputClassName, inputName, type, isRequired, value, onChange, placeholder } = props;
  return (
    <div>
      <div className={tagClassName}>{tagText}</div>
      <Input
        className={inputClassName}
        name={inputName}
        type={type}
        isRequired={isRequired}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
