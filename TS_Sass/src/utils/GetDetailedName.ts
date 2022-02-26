import CategoryList from '@atom/CategoryList';

function GetDetailedName(categoryID: string) {
  let tempArr = CategoryList[categoryID] ? CategoryList[categoryID].match(/(.+)>(.+)/) : [];
  if (tempArr.length > 2) return tempArr[2];
  return '';
}

export default GetDetailedName;
