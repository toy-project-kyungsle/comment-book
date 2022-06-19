import { IbookData } from '@utils/objects/types';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface Props {
  search?: string;
  display?: string;
}
type rtn = [[] | IbookData[], boolean, () => void, () => void];

const useSearch = (props: Props): rtn => {
  const { search, display } = props;
  const [books, setBooks] = useState<IbookData[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [lstNum, setLstNum] = useState(1);
  const navigate = useNavigate();

  const onClickOutBtn = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onClickNextBtn = useCallback(() => {
    setLstNum((prev) => prev + 1);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.SERVER_ADR}/search/${search}/${display}/${lstNum}`).then((res) => {
      setBooks(res.data.items);
      setLoading(false);
    });
  }, [display, lstNum, search, setBooks, setLoading]);

  return [books, loading, onClickOutBtn, onClickNextBtn];
};

export default useSearch;
