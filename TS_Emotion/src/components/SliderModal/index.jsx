import DeleteSameElem from '@utils/DeleteSameElem';
import React from 'react';
import { ClassifyingModal } from './styles';

function SliderModal({
  categoryListOpen,
  categoryList,
  onClickCateorySort,
  onClickCloseBtn,
  onClickResetBtn,
  ratingListOpen,
  yearListOpen,
  onClickRatingSort,
  editYearList,
  onClickYearSort,
}) {
  const ratingSection = ['0~1', '1~2', '2~3', '3~4', '4~5'];

  return categoryListOpen || ratingListOpen || yearListOpen ? (
    <ClassifyingModal>
      <div className="modal_grid">
        {categoryList && categoryListOpen
          ? categoryList.map((name) => {
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
        {yearListOpen
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
