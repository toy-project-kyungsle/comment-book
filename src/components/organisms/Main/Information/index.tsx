import { Background, BackgroundImg, MoreBackgroundImg, PositionDiv } from './styles';
import React from 'react';
import Header from '@components/organisms/Main/Header';
import useMyInfo from '@hooks/notReUsable/useMyInfo';
import SpanBox from '@components/molecules/SpanBox';

interface Props {
  loading: boolean;
  setLoadNum: React.Dispatch<React.SetStateAction<number>>;
}

function MainInfo({ loading, setLoadNum }: Props) {
  const [bookCount, bestBook, bestCategory] = useMyInfo(setLoadNum);
  const TitleBoxClassArr = ['MyInfo TB title', 'MyInfo TB inner', 'MyInfo TB inner'];
  const TitleBoxTextArr = [
    'How to use',
    '오늘도 Book Comment를 찾아주셔서 감사합니다.',
    '원하시는 책을 검색해 후기를 달아보세요. 내가 읽었던 책들도 보여준답니다. 책을 검색해보세요!',
  ];
  const InfoBoxClassArr = [
    'MyInfo IB title',
    'MyInfo IB info',
    'MyInfo IB title',
    'MyInfo IB info',
    'MyInfo IB title',
    'MyInfo IB info',
  ];
  const InfoBoxTextArr = ['Read', `${bookCount}개 읽으셨습니다`, 'Best Book', bestBook, 'Best Category', bestCategory];

  return (
    !loading && (
      <Background>
        <MoreBackgroundImg />
        <BackgroundImg />
        <PositionDiv>
          <Header />
          <SpanBox className="MyInfoTiTleBox" classNameArr={TitleBoxClassArr} textArr={TitleBoxTextArr} />
          <SpanBox className="MyInfoTextBox" classNameArr={InfoBoxClassArr} textArr={InfoBoxTextArr} />
        </PositionDiv>
      </Background>
    )
  );
}

export default MainInfo;
