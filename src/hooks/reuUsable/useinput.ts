import { useCallback, useState } from 'react';

type rtn = [any, React.Dispatch<any>, (e: any) => void];

const useInput = (initialData: any): rtn => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, handler];
};

export default useInput;
