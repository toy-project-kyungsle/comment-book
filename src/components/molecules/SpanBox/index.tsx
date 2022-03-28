import Span from '@components/atoms/Span';
import React from 'react';
import { Wrapper } from './styles';

interface Props {
  className: string;
  divOnClick?: (e: any) => void;
  classNameArr?: string[];
  textArr: any[];
  onClickArr?: ((e: any) => void)[];
  children?: any;
}

function SpanBox(props: Props) {
  const {
    className,
    divOnClick,
    classNameArr,
    textArr,
    onClickArr,
    children
  } = props;
  return (
    <Wrapper data-mode={className} onClick={divOnClick}>
      {textArr && textArr.map((text, i) => (
        <Span className={classNameArr && className[i] ? classNameArr[i] : className} onClick={onClickArr && onClickArr[i]}>
          {text}
        </Span>
      ))}
      {children}
    </Wrapper>
  );
}

export default SpanBox;
