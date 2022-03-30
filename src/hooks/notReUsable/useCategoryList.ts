import DeleteSameElem from '@utils/funtions/DeleteSameElem';
import { authService, dbService } from '@utils/funtions/fbaseApp';
import GetDetailedName from '@utils/funtions/GetCategoryName';
import { IFbookData } from '@utils/objects/types';
import { doc, getDoc } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import store from '@redux/store';

type rtn = [string[], number[]];

const useCategoryList = (setLoadNum: (e: any) => void, mybooks: any): rtn => {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [editYearList, setEditYearList] = useState<number[]>([]);
  const isLoggedIn = store.getState()['isLoggedIn'];

  const getCategoryList = useCallback(async () => {
    if (isLoggedIn) {
      let CTBooks: any = null;
      if (authService.currentUser)
        CTBooks = (await getDoc(doc(dbService, 'UserEval', authService.currentUser.uid))).data();
      const CTBooksArr: IFbookData[] | [] = CTBooks ? Object.values(CTBooks) : [];

      setCategoryList(
        DeleteSameElem(CTBooksArr.map((e) => e['categoryId']))
          .map((e) => GetDetailedName(e))
          .filter((e) => e !== '')
          .sort((a, b) => (a < b ? -1 : a === b ? 0 : 1)),
      );
    }
    setLoadNum((prev) => prev + 1);
  }, [isLoggedIn, setLoadNum]);

  useEffect(() => {
    if (isLoggedIn) getCategoryList();
    if (mybooks.length > 0) {
      mybooks.forEach((elem: IFbookData) => {
        // console.log(elem.editDate);
        if (!editYearList.includes(new Date(elem.editDate).getFullYear())) {
          setEditYearList((prev) => [new Date(elem.editDate).getFullYear(), ...prev]);
        }
      });
    }
  }, [editYearList, getCategoryList, isLoggedIn, mybooks]);

  return [categoryList, editYearList];
};

export default useCategoryList;
