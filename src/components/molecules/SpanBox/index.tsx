import Span from '@components/atoms/Span';
import React from 'react';
import { Wrapper } from './styles';

interface Props {
  className: string;
  divOnClick?: (e: any) => void;
  classNameArr?: string[];
  IdArr?: string[];
  textArr: any[];
  onClickArr?: ((e: any) => void)[];
  children?: any;
}

function SpanBox(props: Props) {
  const { className, divOnClick, classNameArr, IdArr, textArr, onClickArr, children } = props;
  return (
    <Wrapper data-mode={className} onClick={divOnClick}>
      {textArr &&
        textArr.map((text, i) => (
          <Span
            className={
              classNameArr ? (className[i] ? classNameArr[i] : classNameArr[classNameArr.length - 1]) : className
            }
            id={IdArr ? (IdArr[i] ? IdArr[i] : IdArr[IdArr.length - 1]) : null}
            onClick={onClickArr && (onClickArr[i] ? onClickArr[i] : onClickArr[onClickArr.length - 1])}
            key={`${className}${i}`}
          >
            {text}
          </Span>
        ))}
      {children}
    </Wrapper>
  );
}

export default SpanBox;
