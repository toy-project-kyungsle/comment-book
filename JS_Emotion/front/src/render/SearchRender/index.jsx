import React from 'react';
import { ImgDiv, Letters, Movie, Show, Title } from '@render/SearchRender/styles';

function SearchRender({ title, coverImg, priceStandard, priceSales, author, description, link, pubDate }) {
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
          <p>{priceStandard ? `price: ${priceStandard}` : null}</p>
          <p>{priceSales ? `discount: ${priceSales} ` : null}</p>
          <p>{author ? `author: ${author} ` : null}</p>
          <p>{pubDate ? `pubdate: ${pubDate} ` : null}</p>
          <p>{description ? (description.length > 180 ? `${description.slice(0, 180)}...` : description) : null}</p>
        </Letters>
      </Show>
    </Movie>
  );
}

export default SearchRender;
