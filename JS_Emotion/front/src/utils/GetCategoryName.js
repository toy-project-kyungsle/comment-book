import CategoryList from '@atom/CategoryName';

function getCategoryName(book) {
  // console.log(book);
  return CategoryList[book?.categoryId]?.match(/(.+)>(.+)/)[2];
}

export default getCategoryName;
