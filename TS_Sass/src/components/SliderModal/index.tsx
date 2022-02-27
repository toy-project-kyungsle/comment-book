import DeleteSameElem from '@utils/DeleteSameElem';
import React from 'react';
import { ClassifyingModal } from './styles';

interface Props {
  categoryList: string[];
  editYearList: number[];
  categoryListOpen: boolean;
  ratingListOpen: boolean;
  yearListOpen: boolean;
  onClickCateorySort: (e: any) => void;
  onClickRatingSort: (e: any) => void;
  onClickYearSort: (e: any) => void;
  onClickCloseBtn: (e: any) => void;
  onClickResetBtn: (e: any) => void;
}

function SliderModal({
  categoryList,
  editYearList,
  categoryListOpen,
  ratingListOpen,
  yearListOpen,
  onClickCateorySort,
  onClickRatingSort,
  onClickYearSort,
  onClickCloseBtn,
  onClickResetBtn,
}: Props) {
  const ratingSection = ['0~1', '1~2', '2~3', '3~4', '4~5'];

  return categoryListOpen || ratingListOpen || yearListOpen ? (
    <ClassifyingModal>
      <div className="modal_grid">
        {categoryList && categoryListOpen
          ? categoryList.map((name: string) => {
              return (
                <div className="content" onClick={onClickCateorySort}>
                  <div className="contentInner">
                    <div>{name}</div>
                  </div>
                </div>
              );
            })
          : null}
        {ratingListOpen
          ? ratingSection.map((elem) => {
              return (
                <div className="content" onClick={onClickRatingSort}>
                  <div className="contentInner">
                    <div>{elem}</div>
                  </div>
                </div>
              );
            })
          : null}
        {yearListOpen && editYearList
          ? DeleteSameElem(editYearList)
              ?.sort((a, b) => b - a)
              ?.map((year) => {
                return (
                  <div className="content" onClick={onClickYearSort}>
                    <div className="contentInner">
                      <div>{year}</div>
                    </div>
                  </div>
                );
              })
          : null}
      </div>
      <div>
        <button className="closeBtn" onClick={onClickCloseBtn}>
          <img
            src="https://user-images.githubusercontent.com/79993356/154801650-d6a3e43d-4ba0-4107-a3c2-dfaeca5eb6af.png"
            alt="null"
          ></img>
        </button>
        <button className="resetBtn" onClick={onClickResetBtn}>
          <img
            src="https://user-images.githubusercontent.com/79993356/154805451-4852137e-f850-49f9-814e-6cfc937494ae.svg"
            alt="null"
            id="cg"
          ></img>
        </button>
      </div>
    </ClassifyingModal>
  ) : null;
}

export default SliderModal;
