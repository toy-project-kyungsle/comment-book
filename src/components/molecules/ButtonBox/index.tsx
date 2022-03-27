import Button from '@components/atoms/Button';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  className: string;
  firstOnClick: () => void;
  secondOnClick: () => void;
}

function ButtonBox(props: Props) {
  const { className, firstOnClick, secondOnClick } = props;
  return (
    <div data-mode={className}>
      <Button className={className + 'Left'} onClick={firstOnClick}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#00000030' }} />
      </Button>
      <Button className={className + 'Right'} onClick={secondOnClick}>
        <FontAwesomeIcon icon={faChevronRight} style={{ color: '#00000030' }} />
      </Button>
    </div>
  );
}

export default ButtonBox;
