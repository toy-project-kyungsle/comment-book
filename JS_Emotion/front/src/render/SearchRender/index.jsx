import React from 'react';
import { ImgDiv, Letters, Movie, Show, Title } from '@render/SearchRender/styles';

function SearchRender({ title, coverImg, price, discount, author, description, link, pubdate }) {
  return (
    <Movie>
      <Show>
        {/* Img */}
        <ImgDiv>
          <img src={coverImg} alt={title} />
        </ImgDiv>
        <Letters>
          <Title>
            <div>
              <h3>
                <a href={link}>{title}</a>
              </h3>
            </div>
          </Title>
          <p>{price ? `price: ${price}` : null}</p>
          <p>{discount ? `discount: ${discount} ` : null}</p>
          <p>{author ? `author: ${author} ` : null}</p>
          <p>{pubdate ? `pubdate: ${pubdate} ` : null}</p>
          <p>{description ? (description.length > 180 ? `${description.slice(0, 180)}...` : description) : null}</p>
        </Letters>
      </Show>
    </Movie>
  );
}

export default SearchRender;
