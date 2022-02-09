import React, { useEffect } from 'react';
import Favorites from '@atom/Favorite';
import { useRecoilState } from 'recoil';
import useInput from '@hooks/useinput';
import GetName from '@utils/GetDetailedName';
import { Container } from './styles';
import CategoryImg from '@atom/CategoryImg';

function CategoriesRecommend() {
  // console.log(Favorites);
  const [favoriteBooks] = useRecoilState(Favorites);
  const [sortedCategoryID, setSortedCategoryID] = useInput([]);

  useEffect(() => {
    let CategoryIDObj = {};
    let CategoryIDArr = [];

    favoriteBooks.forEach((book) => {
      CategoryIDObj[book.categoryId] ? (CategoryIDObj[book.categoryId] += 1) : (CategoryIDObj[book.categoryId] = 1);
    });

    CategoryIDArr = Object.entries(CategoryIDObj);

    setSortedCategoryID(
      CategoryIDArr.sort((a, b) => b[1] - a[1])
        .map((elem) => elem.shift())
        .flat(),
    );
  }, [favoriteBooks, setSortedCategoryID]);

  return (
    <Container>
      <div className="name">내 카테고리 순위</div>
      <div className="categoryContainer">
        {sortedCategoryID?.map((category, idx) =>
          idx <= 4 ? (
            <div className="CategoryBox">
              <div className="categoryImg">
                <img src={CategoryImg[category].img} alt=""></img>
              </div>
              <div className="categoryName">{GetName(category)}</div>
            </div>
          ) : null,
        )}
      </div>
    </Container>
  );
}

export default CategoriesRecommend;
