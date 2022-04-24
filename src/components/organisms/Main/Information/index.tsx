import { Background, BackgroundImg, MoreBackgroundImg, Wrapper } from './styles';
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
  const TitleBoxClassArr = ['Main--Info--TB--Title', 'Main--Info--TB--Inner', 'Main--Info--TB--Inner'];
  const TitleBoxTextArr = [
    'How to use',
    '오늘도 Book Comment를 찾아주셔서 감사합니다.',
    '원하시는 책을 검색해 후기를 달아보세요. 내가 읽었던 책들도 보여준답니다. 책을 검색해보세요!',
  ];
  const InfoBoxClassArr = [
    'Main--Info--IB--Title',
    'Main--Info--IB--Inner',
    'Main--Info--IB--Title',
    'Main--Info--IB--Inner',
    'Main--Info--IB--Title',
    'Main--Info--IB--Inner',
  ];
  const InfoBoxTextArr = ['Read', `${bookCount}개 읽으셨습니다`, 'Best Book', bestBook, 'Best Category', bestCategory];

  return (
    !loading && (
      <Background>
        <MoreBackgroundImg />
        <BackgroundImg />
        <Wrapper>
          <Header />
          <SpanBox className="Main--Info--TitleBox" classNameArr={TitleBoxClassArr} textArr={TitleBoxTextArr} />
          <SpanBox className="Main--Info--TextBox" classNameArr={InfoBoxClassArr} textArr={InfoBoxTextArr} />
        </Wrapper>
      </Background>
    )
  );
}

export default MainInfo;
