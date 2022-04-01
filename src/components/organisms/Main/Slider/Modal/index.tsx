import Button from '@components/atoms/Button';
import Image from '@components/atoms/Image';
import SpanBox from '@components/molecules/SpanBox';
import DeleteSameElem from '@utils/funtions/DeleteSameElem';
import React from 'react';
import { ClassifyingModal, Modalgrid } from './styles';

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
        <Button className="sliderClose" onClick={onClickCloseBtn}>
          <Image
            className="sliderClose"
            src="https://user-images.githubusercontent.com/79993356/154801650-d6a3e43d-4ba0-4107-a3c2-dfaeca5eb6af.png"
          ></Image>
        </Button>
        <Button className="sliderReset" onClick={onClickSort}>
          <Image
            className="sliderReset"
            src="https://user-images.githubusercontent.com/79993356/154805451-4852137e-f850-49f9-814e-6cfc937494ae.svg"
            id={listOpenArr[0] ? 'cg' : listOpenArr[1] ? 'rt' : listOpenArr[2] ? 'yr' : null}
          ></Image>
        </Button>
      </div>
    </ClassifyingModal>
  ) : null;
}

export default SliderModal;
