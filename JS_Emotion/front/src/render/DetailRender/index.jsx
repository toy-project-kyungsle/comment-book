import CommentBox from '@components/CommentBox';
import React from 'react';
import {
  Container,
  Description,
  ImgDiv,
  LeftSection,
  Letters,
  RightSection,
  ShortView,
  Background,
  LetterGrid,
} from './styles';

function DetailRender({ title, coverImg, priceStandard, priceSales, author, description, link, pubDate, genre }) {
  return (
    <Background>
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
              <LetterGrid>
                <div>
                  <span></span>
                  <span></span>
                </div>
                <p>
                  {author ? (
                    <>
                      <span>author</span>
                      <span>{author}</span>
                    </>
                  ) : null}
                </p>
                <p>{genre ? `genre ${genre} ` : null}</p>
                <p>{priceStandard && priceSales ? `price ${priceStandard} ➡ ${priceSales}` : null}</p>
                <p>{pubDate ? `pubdate ${pubDate} ` : null}</p>
                <p>{`rating ⭐️⭐️⭐️⭐️⭐️ `}</p>
              </LetterGrid>
            </Letters>
          </ShortView>
          <Description>
            <p>{description ? (description.length > 800 ? `${description.slice(0, 800)}...` : description) : null}</p>
          </Description>
        </LeftSection>
        <RightSection>
          <div>
            <CommentBox />
            {/* <CommentBox />
            <CommentBox />
            <CommentBox /> */}
          </div>
        </RightSection>
      </Container>
    </Background>
  );
}

export default DetailRender;
