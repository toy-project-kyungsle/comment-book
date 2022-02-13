import CategoryList from '@atom/CategoryList';

function GetDetailedName(categoryID) {
  let tempArr = CategoryList[categoryID]?.match(/(.+)>(.+)/);
  if (tempArr?.length > 2) return tempArr[2];
  return '';
}

export default GetDetailedName;
