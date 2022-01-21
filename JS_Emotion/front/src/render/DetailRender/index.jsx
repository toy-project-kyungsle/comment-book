import React from 'react';
import { Container, Description, ImgDiv, LeftSection, Letters, RightSection, ShortView, Comment } from './styles';

function DetailRender({ title, coverImg, priceStandard, priceSales, author, description, link, pubDate }) {
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
            <p>{priceStandard ? `price: ${priceStandard}` : null}</p>
            <p>{priceSales ? `discount: ${priceSales} ` : null}</p>
            <p>{author ? `author: ${author} ` : null}</p>
            <p>{pubDate ? `pubdate: ${pubDate} ` : null}</p>
          </Letters>
        </ShortView>
        <Description>
          <p>{description ? (description.length > 180 ? `${description.slice(0, 180)}...` : description) : null}</p>
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
