import Button from '@components/atoms/Button';
import Image from '@components/atoms/Image';
import SpanBox from '@components/molecules/SpanBox';
import DeleteSameElem from '@utils/funtions/DeleteSameElem';
import React from 'react';
import { ClassifyingModal, Modalgrid } from './styles';
import xmarkImg from './xmark.png';
import rotateImg from './rotate.svg';

interface Props {
  categoryList: string[];
  editYearList: number[];
  listOpenArr: boolean[];
  onClickSort: (e: any) => void;
  onClickCloseBtn: (e: any) => void;
}

function SliderModal({ categoryList, editYearList, listOpenArr, onClickSort, onClickCloseBtn }: Props) {
  const ratingSection = ['0~1', '1~2', '2~3', '3~4', '4~5'];

  return listOpenArr.some((e) => e) ? (
    <ClassifyingModal>
      <Modalgrid>
        {categoryList &&
          listOpenArr[0] &&
          categoryList.map((name: string) => {
            return (
              <SpanBox
                className="SliderFilterModal"
                onClickArr={[onClickSort]}
                textArr={[name]}
                classNameArr={['SliderFilterLetter']}
                IdArr={['cg']}
              />
            );
          })}
        {listOpenArr[1] &&
          ratingSection.map((elem) => {
            return (
              <SpanBox
                className="SliderFilterModal"
                onClickArr={[onClickSort]}
                textArr={[elem]}
                classNameArr={['SliderFilterLetter']}
                IdArr={['rt']}
              />
            );
          })}
        {editYearList &&
          listOpenArr[2] &&
          DeleteSameElem(editYearList)
            .sort((a, b) => b - a)
            .map((year) => {
              return (
                <SpanBox
                  className="SliderFilterModal"
                  onClickArr={[onClickSort]}
                  textArr={[year]}
                  classNameArr={['SliderFilterLetter']}
                  IdArr={['yr']}
                />
              );
            })}
      </Modalgrid>
      <div>
        <Button className="MainPage--Slider--Modal--Close" onClick={onClickCloseBtn}>
          <Image className="MainPage--Slider--Modal--Close" src={xmarkImg}></Image>
        </Button>
        <Button className="MainPage--Slider--Modal--Reset" onClick={onClickSort}>
          <Image
            className="MainPage--Slider--Modal--Reset"
            src={rotateImg}
            id={listOpenArr[0] ? 'cg' : listOpenArr[1] ? 'rt' : listOpenArr[2] ? 'yr' : null}
          ></Image>
        </Button>
      </div>
    </ClassifyingModal>
  ) : null;
}

export default SliderModal;
