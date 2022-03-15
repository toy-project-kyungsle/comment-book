import React from 'react';
import { css } from '@emotion/css';

interface Props {
  src: string;
  alt: string;
  height: string;
  width: string;
  margin: string;
}

function Img(props: Props) {
  const { src, alt, height, width, margin } = props;
  return (
    <img
      className={css`
        height: ${height};
        width: ${width};
        margin: ${margin};
      `}
      src={src}
      alt={alt}
    ></img>
  );
}

export default Img;
