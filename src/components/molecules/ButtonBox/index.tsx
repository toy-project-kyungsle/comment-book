import Button from '@components/atoms/Button';
import React from 'react';

interface Props {
  className?: string;
  divOnClick?: (e: any) => void;
  classNameArr?: string[];
  onClickArr: ((e: any) => void)[];
  btnChildArr?: any;
}

function ButtonBox(props: Props) {
  const { className, divOnClick, classNameArr, onClickArr, btnChildArr } = props;
  return (
    <div data-mode={className} onClick={divOnClick}>
      {onClickArr &&
        onClickArr.map((clickFunc, i) => (
          <Button
            className={
              classNameArr ? (classNameArr[i] ? classNameArr[i] : classNameArr[classNameArr.length - 1]) : className
            }
            onClick={clickFunc}
            key={className[i]}
          >
            {btnChildArr && btnChildArr[i]}
          </Button>
        ))}
    </div>
  );
}

export default ButtonBox;
