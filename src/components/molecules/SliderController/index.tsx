import Button from '@components/atoms/Button';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  className: string;
  onClickL: () => void;
  onClickR: () => void;
}

function SliderController(props: Props) {
  const { className, onClickL, onClickR } = props;
  return (
    <div data-mode={className}>
      <Button className={className + 'Left'} onClick={onClickL}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#00000030' }} />
      </Button>
      <Button className={className + 'Right'} onClick={onClickR}>
        <FontAwesomeIcon icon={faChevronRight} style={{ color: '#00000030' }} />
      </Button>
    </div>
  );
}

export default SliderController;
