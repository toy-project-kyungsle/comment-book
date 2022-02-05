import React from 'react';
import { ImgDiv, Letters, Container, Show, Title } from '@render/SearchRender/styles';
import { Link } from 'react-router-dom';

function SearchRender({ isbn, title, coverImg, priceStandard, priceSales, author, description, link, pubDate }) {
  return (
    <Container>
      <Link to={`/comment/${isbn}`}>
        {console.log(isbn)}
        <Show>
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
            <p>{description ? (description.length > 140 ? `${description.slice(0, 140)}...` : description) : null}</p>
          </Letters>
        </Show>
      </Link>
    </Container>
  );
}

export default SearchRender;
