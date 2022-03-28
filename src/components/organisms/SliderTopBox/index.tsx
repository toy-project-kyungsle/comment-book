import Span from '@components/atoms/Span';
import SliderModal from '@components/organisms/SliderModal';
import useSort from '@hooks/notReUsable/useSort';
import useToggle from '@hooks/reuUsable/useToggle';
import { IFbookData } from '@utils/objects/types';
import React, { useEffect } from 'react';
import { Background, TopBox, UpperBox, SelectedBox } from './styles';
import SpanBox from '@components/molecules/SpanBox';

interface Props {
  mybooks: IFbookData[];
  getBookInfo: (categorySelected: string, ratingSelected: string, yearSelected: string) => void;
  setTrans: React.Dispatch<React.SetStateAction<number>>;
  categoryList: string[];
  editYearList: number[];
}

function SliderTopBox({ getBookInfo, setTrans, categoryList, editYearList }: Props) {
  const [sortTagObj, , onClickSort] = useSort({ cg: '', rt: '', yr: '' }, setTrans);
  const [listOpenArr, , onClickToggle] = useToggle([false, false, false]);
  const ToggleTextArr = ['Category', 'Rating', 'Year'];

  useEffect(() => {
    getBookInfo(sortTagObj['cg'], sortTagObj['rt'], sortTagObj['yr']);
  }, [getBookInfo, sortTagObj]);

  return (
    <Background>
      <TopBox>
        <UpperBox>
          <SpanBox className="SliderTopTitle" textArr={['My books']} />
          <SpanBox className="SliderTopToggle" textArr={ToggleTextArr} onClickArr={[onClickToggle]} />
        </UpperBox>
        <SelectedBox>
          {Object.values(sortTagObj)
            .filter((e) => e !== '')
            .map((e) => (
              <SpanBox className="SliderSelected" textArr={[e]} />
            ))}
        </SelectedBox>
        <SliderModal
          categoryList={categoryList}
          editYearList={editYearList}
          onClickCloseBtn={onClickToggle}
          listOpenArr={listOpenArr}
          onClickSort={onClickSort}
        />
      </TopBox>
    </Background>
  );
}

export default SliderTopBox;
