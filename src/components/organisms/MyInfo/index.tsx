import { InfoBox, Background, BackgroundImg, TitleBox, MoreBackgroundImg, PositionDiv } from './styles';
import React from 'react';
import Header from '@components/organisms/Header';
import Paragraph from '@components/atoms/Paragraph';
import useMyInfo from '@hooks/notReUsable/useMyInfo';
import Span from '@components/atoms/Span';

interface Props {
  loading: boolean;
  setLoadNum: React.Dispatch<React.SetStateAction<number>>;
}

function MyInfo({ loading, setLoadNum }: Props) {
  const [bookCount, bestBook, bestCategory] = useMyInfo(setLoadNum);

  return loading ? null : (
    <>
      <Background>
        <MoreBackgroundImg />
        <BackgroundImg />
        <PositionDiv>
          <Header />
          <TitleBox>
            <Span className="MyInfo TB title">How to use</Span>
            <Span className="MyInfo TB inner">오늘도 Book Comment를 찾아주셔서 감사합니다.</Span>
            <Span className="MyInfo TB inner">
              원하시는 책을 검색해 후기를 달아보세요. 내가 읽었던 책들도 보여준답니다. 책을 검색해보세요!
            </Span>
          </TitleBox>
          <InfoBox>
            <div>
              <Span className="MyInfo IB title">{'Read'}</Span>
            </div>
            <div>
              <Span className="MyInfo IB info">{bookCount}개 읽으셨습니다</Span>
            </div>
            <div>
              <Span className="MyInfo IB title">{`Best Book`}</Span>
            </div>
            <div>
              <Span className="MyInfo IB info">{bestBook}</Span>
            </div>
            <div>
              <Span className="MyInfo IB title">{`Best Category`}</Span>
            </div>
            <div>
              <Span className="MyInfo IB info">{bestCategory}</Span>
            </div>
          </InfoBox>
        </PositionDiv>
      </Background>
    </>
  );
}

export default MyInfo;
