import { useCallback, useEffect, useState } from 'react';
import { authService, dbService } from '@utils/funtions/fbaseApp';
import { doc, getDoc } from 'firebase/firestore';
import GetDetailedName from '@utils/funtions/GetCategoryName';
import store from '@redux/store';

const useMyInfo = (setLoadNum: React.Dispatch<React.SetStateAction<number>>) => {
  const [bookCount, setBookCount] = useState(0);
  const [bestBook, setBestBook] = useState('No book');
  const [bestCategory, setBestCategory] = useState('No category');
  const [infoLoading, setInfoLoading] = useState(true);
  const isLoggedIn = store.getState()['isLoggedIn'];

  const getMyInfo = useCallback(async () => {
    const dbBook = (await getDoc(doc(dbService, `UserEval`, authService.currentUser.uid))).data();

    if (dbBook) {
      const dataArr = Object.entries(dbBook);
      dataArr.sort((a, b) => b[1]['rating'] - a[1]['rating']);
      const CategoryObj: any = {};
      dataArr?.forEach((elem) => {
        if (GetDetailedName(elem[1]['categoryId']) !== '') {
          CategoryObj[elem[1]['categoryId']]
            ? (CategoryObj[elem[1]['categoryId']] += 1)
            : (CategoryObj[elem[1]['categoryId']] = 1);
        }
      });
      setBestBook(dataArr[0][1]['title']);
      setBookCount(dataArr.length);
      setBestCategory(GetDetailedName(Number(Object.entries(CategoryObj).sort((a: any, b: any) => b[1] - a[1])[0][0])));
      setInfoLoading(false);
    }
    if (!infoLoading) setLoadNum((prev) => prev + 1);
  }, [infoLoading, setLoadNum]);

  useEffect(() => {
    if (isLoggedIn) getMyInfo();
    else {
      setBookCount(0);
      setBestBook('No book');
      setBestCategory('No category');
      setLoadNum((prev) => prev + 1);
    }
  }, [getMyInfo, isLoggedIn, setLoadNum]);

  return [bookCount, bestBook, bestCategory];
};

export default useMyInfo;
