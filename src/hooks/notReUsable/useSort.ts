import { useCallback, useState } from 'react';

interface Props {
  cg: string;
  rt: string;
  yr: string;
}

type rtnProps = [Props, React.Dispatch<React.SetStateAction<Props>>, (e: any) => void];

const useInput = (initialData: Props, setTrans: React.Dispatch<React.SetStateAction<number>>): rtnProps => {
  const [sortTagObj, setSortTagObj] = useState(initialData);
  const handler = useCallback(
    (e) => {
      console.log(e.target.className);
      if (e.target.id !== '') {
        setSortTagObj((prev) => {
          return { ...prev, [e.target.id]: e.target.innerText };
        });
      }
      setTrans(0);
    },
    [setTrans],
  );
  return [sortTagObj, setSortTagObj, handler];
};

export default useInput;
