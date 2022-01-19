import React from 'react';
import Favorites from '@utils/db';

function CategoriesRecommend() {
  console.log(Favorites);
  return (
    <div>
      {Favorites.map((book) => (
        <span>{book.categoryName}</span>
      ))}
    </div>
  );
}

export default CategoriesRecommend;
