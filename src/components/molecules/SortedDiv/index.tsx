import React from 'react';
import { Wrapper } from './styles';

interface Props {
  className: string;
  onClick?: (e: any) => void;
  text: string;
  id?: string;
}

function SortedDiv(props: Props) {
  const { className, onClick, text, id } = props;
  return (
    <Wrapper data-mode={className} onClick={onClick}>
      <div className="contentInner">
        <div id={id}>{text}</div>
      </div>
    </Wrapper>
  );
}

export default SortedDiv;
