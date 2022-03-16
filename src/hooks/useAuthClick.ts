import { useCallback, useState } from 'react';

const useAuthClick = (initialData: any) => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, handler];
};

export default useAuthClick;
