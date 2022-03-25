import React from 'react';
import { StextArea } from './styles';

interface Props {
  className: string;
  onChange: (e: any) => void;
  value: string | number;
  maxLength?: number;
}

function TextArea(props: Props) {
  const { className, onChange, value, maxLength } = props;
  return <StextArea data-mode={className} onChange={onChange} value={value} maxLength={maxLength}></StextArea>;
}

export default TextArea;
