import Image from '@components/atoms/Image';
import ImgWrapper from '@components/molecules/ImgWrapper';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookContainer } from './styles';

interface Props {
  coverImg: string;
  title: string;
  isbn: string;
  shortcomment?: string;
  rating?: number;
}

function LinkBox({ coverImg, title, isbn, shortcomment, rating }: Props) {
  const [reload, setReload] = useState('doing');

  useEffect(() => {
    setReload('doing');
    setTimeout(() => {
      setReload('done');
    }, 1000);
  }, [isbn]);

  return (
    <BookContainer data-mode={reload}>
      <Link to={`/comment/${isbn}`}>
        <Image className="SliderImg" src={coverImg} alt={title} />
        <ImgWrapper className="SliderImg" shortcomment={shortcomment} rating={rating} />
      </Link>
    </BookContainer>
  );
}

export default LinkBox;
