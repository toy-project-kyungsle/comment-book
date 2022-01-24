import React, { useEffect } from 'react';
import Favorites from '@atom/Favorite';
import { useRecoilState } from 'recoil';
import useInput from '@hooks/useinput';
import getCategoryName from '@utils/getCategoryName';
import { Container, InfoCategory } from './styles';

function CategoriesRecommend() {
  // console.log(Favorites);
  const [favoriteBooks] = useRecoilState(Favorites);
  const [sortedCategory, setSortedCategory] = useInput([]);

  useEffect(() => {
    let CategoryObj = {};
    let CategoryArr = [];

    favoriteBooks.forEach((book) => {
      let objKey = getCategoryName(book);
      CategoryObj[objKey] ? (CategoryObj[objKey] += 1) : (CategoryObj[objKey] = 1);
    });

    CategoryArr = Object.entries(CategoryObj);

    setSortedCategory(
      CategoryArr.sort((a, b) => b[1] - a[1])
        .map((elem) => elem.shift())
        .flat(),
    );
  }, [favoriteBooks, setSortedCategory]);

  return (
    <Container>
      <div className="name">내 카테고리 순위</div>
      <div className="categoryBox">
        {sortedCategory.map((category, idx) => (idx <= 4 ? <div className="category">{category}</div> : null))}
      </div>
    </Container>
  );
}

export default CategoriesRecommend;
