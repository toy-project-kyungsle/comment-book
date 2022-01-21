import React, { useEffect } from 'react';
import Favorites from '@atom/Favorite';
import { useRecoilState } from 'recoil';
import useInput from '@hooks/useinput';
import getCategoryName from '@utils/getCategoryName';

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
    <div>
      <span>{sortedCategory}</span>
    </div>
  );
}

export default CategoriesRecommend;
