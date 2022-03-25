import Span from '@components/atoms/Span';
import React from 'react';
import { Wrapper } from './styles';

interface Props {
  className: string;
  firstChild: any;
  secondChild?: any;
  thirdChild?: any;
  secondVisible?: boolean;
  thirdVisible?: boolean;
  divOnClick?: (e: any) => void;
  fisrtOnClick?: (e: any) => void;
  secondOnClick?: (e: any) => void;
  thirdOnClick?: (e: any) => void;
  children?: any;
}

function SpanBox(props: Props) {
  const {
    className,
    firstChild,
    secondChild,
    thirdChild,
    secondVisible = false,
    thirdVisible = false,
    divOnClick = null,
    fisrtOnClick = null,
    secondOnClick = null,
    thirdOnClick = null,
    children,
  } = props;
  return (
    <Wrapper data-mode={className} onClick={divOnClick}>
      <Span className={className + 'First'} onClick={fisrtOnClick}>
        {firstChild}
      </Span>
      <Span className={className + 'Second'} onClick={secondOnClick} visibility={secondVisible}>
        {secondChild}
      </Span>
      <Span className={className + 'Third'} onClick={thirdOnClick} visibility={thirdVisible}>
        {thirdChild}
      </Span>
      {children}
    </Wrapper>
  );
}

export default SpanBox;
