import Span from '@components/atoms/Span';
import SliderModal from '@components/molecules/SliderModal';
import useSort from '@hooks/notReUsable/useSort';
import useToggle from '@hooks/reuUsable/useToggle';
import { IFbookData } from '@utils/objects/types';
import React, { useEffect } from 'react';
import { Background, TopBox } from './styles';

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
  const ToggleArr = ['Category', 'Rating', 'Year'];

  useEffect(() => {
    getBookInfo(sortTagObj['cg'], sortTagObj['rt'], sortTagObj['yr']);
  }, [getBookInfo, sortTagObj]);

  return (
    <Background>
      <TopBox>
        <div className="upperContainer">
          <div>
            <Span className="SliderTopTitle">My books</Span>
          </div>
          <div>
            {ToggleArr.map((name: string) => (
              <Span onClick={onClickToggle} className="SliderTopToggle">
                {name}
              </Span>
            ))}
          </div>
        </div>
        <div className="selectedCgCon">
          {Object.values(sortTagObj)
            .filter((e) => e !== '')
            .map((e) => (
              <div>
                <Span className="default">{e}</Span>
              </div>
            ))}
        </div>
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
