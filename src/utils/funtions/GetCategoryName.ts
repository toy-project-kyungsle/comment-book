import CategoryList from '@utils/objects/CategoryList';

function GetDetailedName(categoryID: number) {
  let tempArr = CategoryList[categoryID] ? CategoryList[categoryID].match(/(.+)>(.+)/) : [];
  if (tempArr.length > 2) return tempArr[2];
  return '';
}

export default GetDetailedName;
