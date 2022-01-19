import React from 'react';
import Favorites from '@utils/db';
import Category_List from '@utils/category_name';

function CategoriesRecommend() {
  console.log(Favorites);
  return (
    <div>
      {Favorites.map((book) => (
        <span>{Category_List[book.categoryId].match(/(.+)>(.+)/)[2]}</span>
      ))}
    </div>
  );
}

export default CategoriesRecommend;
