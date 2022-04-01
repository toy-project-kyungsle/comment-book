import React from 'react';
import { SlidesBackground, GuideDiv, LoginGuide } from './styles';
import SliderTopBox from '@components/organisms/Main/Slider/TopBox';
import { reduxState } from '@utils/objects/types';
import { connect } from 'react-redux';
import useSlideBtn from '@hooks/notReUsable/useSlideBtn';
import useCategoryList from '@hooks/notReUsable/useCategoryList';
import useBookInfo from '@hooks/notReUsable/useBookInfo';
import SliderViewer from '@components/organisms/Main/Slider/Viewer';
import ButtonBox from '@components/molecules/ButtonBox';
import Image from '@components/atoms/Image';

interface Props {
  loading: boolean;
  setLoadNum: React.Dispatch<React.SetStateAction<number>>;
  isLoggedIn: boolean;
}

function Slider({ loading, setLoadNum, isLoggedIn }: Props) {
  const [mybooks, getBookInfo] = useBookInfo(setLoadNum);
  const [trans, setTrans, onClickL, onClickR] = useSlideBtn(0, mybooks.length);
  const [categoryList, editYearList] = useCategoryList(setLoadNum, mybooks);

  return loading ? null : (
    <>
      <SliderTopBox
        mybooks={mybooks}
        getBookInfo={getBookInfo}
        setTrans={setTrans}
        categoryList={categoryList}
        editYearList={editYearList}
      />

      {isLoggedIn && mybooks.length ? (
        <SlidesBackground>
          <div className="container">
            <SliderViewer trans={trans} mybooks={mybooks} />
            <ButtonBox className="MainSlider" firstOnClick={onClickL} secondOnClick={onClickR} />
          </div>
        </SlidesBackground>
      ) : (
        <div style={{ position: 'relative' }}>
          {isLoggedIn ? (
            <>
              <LoginGuide data-mode="nobook">이제 원하시는 책을 추가해주세요</LoginGuide>
              <div style={{ height: '300px', backgroundColor: '#f2f2f2' }}></div>
            </>
          ) : (
            <>
              <LoginGuide data-mode="nologin">로그인 하시면 사용 가능합니다</LoginGuide>
              <GuideDiv>
                <Image
                  className="MainSlider"
                  src="https://user-images.githubusercontent.com/79993356/157588810-ec0405ad-e472-4226-ac87-6e2cb6f50b0e.gif"
                  alt="null"
                />
              </GuideDiv>
            </>
          )}
        </div>
      )}
    </>
  );
}

function mapStateToProps(state: reduxState) {
  return { isLoggedIn: state['isLoggedIn'] };
}

export default connect(mapStateToProps)(Slider);
