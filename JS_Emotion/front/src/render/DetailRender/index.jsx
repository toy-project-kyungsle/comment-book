import React from 'react';
import { Container, Description, ImgDiv, LeftSection, Letters, RightSection, ShortView, Comment } from './styles';

function DetailRender({ title, coverImg, priceStandard, priceSales, author, description, link, pubDate, genre }) {
  return (
    <Container>
      <LeftSection>
        <ShortView>
          <ImgDiv>
            <img src={coverImg} alt={title} />
          </ImgDiv>
          <Letters>
            <h3>
              <a href={link}>{title}</a>
            </h3>
            <p>{author ? `author: ${author} ` : null}</p>
            <p>{genre ? `genre: ${genre} ` : null}</p>
            <p>{priceStandard && priceSales ? `price: ${priceStandard} ➡ ${priceSales}` : null}</p>
            <p>{pubDate ? `pubdate: ${pubDate} ` : null}</p>
          </Letters>
        </ShortView>
        <Description>
          <p>{description ? (description.length > 800 ? `${description.slice(0, 800)}...` : description) : null}</p>
        </Description>
      </LeftSection>
      <RightSection>
        <div>
          <Comment>
            <div>
              <p>Kyunglse</p>
              <p>Nice Book!</p>
            </div>
            <div>
              <p>Star</p>
            </div>
          </Comment>
          <Comment>
            <div>
              <p>Kyunglse</p>
              <p>Nice Book!</p>
            </div>
            <div>
              <p>Star</p>
            </div>
          </Comment>
          <Comment>
            <div>
              <p>Kyunglse</p>
              <p>Nice Book!</p>
            </div>
            <div>
              <p>Star</p>
            </div>
          </Comment>
          <Comment>
            <div>
              <p>Kyunglse</p>
              <p>Nice Book!</p>
            </div>
            <div>
              <p>Star</p>
            </div>
          </Comment>
          <Comment>
            <div>
              <p>Kyunglse</p>
              <p>Nice Book!</p>
            </div>
            <div>
              <p>Star</p>
            </div>
          </Comment>
          <Comment>
            <div>
              <p>Kyunglse</p>
              <p>Nice Book!</p>
            </div>
            <div>
              <p>Star</p>
            </div>
          </Comment>
        </div>
      </RightSection>
    </Container>
  );
}

export default DetailRender;
