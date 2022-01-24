import CategoryList from '@atom/CategoryList';

function GetDetailedName(categoryID) {
  // console.log(categoryId);
  return CategoryList[categoryID]?.match(/(.+)>(.+)/)[2];
}

export default GetDetailedName;
