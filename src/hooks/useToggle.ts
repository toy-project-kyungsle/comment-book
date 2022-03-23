import { useCallback, useState } from 'react';

type rtnProps = [boolean[], React.Dispatch<React.SetStateAction<boolean[]>>, (e: any) => void];

const useInput = (initialData: boolean[]): rtnProps => {
  const [listOpenArr, setListOpenArr] = useState(initialData);
  const handler = useCallback((e) => {
    switch (e.target.outerText) {
      case 'Category':
        setListOpenArr([true, false, false]);
        break;
      case 'Rating':
        setListOpenArr([false, true, false]);
        break;
      case 'Year':
        setListOpenArr([false, false, true]);
        break;
      default:
        setListOpenArr([false, false, false]);
    }
  }, []);
  return [listOpenArr, setListOpenArr, handler];
};

export default useInput;
