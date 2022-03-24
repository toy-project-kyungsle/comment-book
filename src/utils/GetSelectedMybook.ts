import { IFbookData } from '@utils/types';
import GetDetailedName from './GetCategoryName';

interface Params {
  dbBooksArr: IFbookData[] | [];
  categorySelected: string;
  ratingSelected: string;
  yearSelected: string;
}

type rtn = IFbookData[] | [];

function GetSelectedMybook({ dbBooksArr, categorySelected, ratingSelected, yearSelected }: Params): rtn {
  return dbBooksArr.filter((elem: IFbookData | undefined) => {
    let result = [true, true, true];
    if (categorySelected !== '') {
      result[0] = GetDetailedName((elem as IFbookData).categoryId) === categorySelected;
    }
    if (ratingSelected !== '') {
      let tempArr = ratingSelected.match(/(.+)~(.+)/);
      result[1] =
        (elem as IFbookData).rating >= Number(tempArr[1]) && (elem as IFbookData).rating <= Number(tempArr[2]);
    }
    if (yearSelected !== '') {
      result[2] = new Date((elem as IFbookData).editDate).getFullYear().toString() === yearSelected;
    }

    return result.every((e) => e === true);
  });
}

export default GetSelectedMybook;
