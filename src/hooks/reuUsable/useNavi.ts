import { useNavigate } from 'react-router-dom';

const useNavi = (endPoint: string | number) => {
  const navigate = useNavigate();
  return () => navigate(endPoint);
};

export default useNavi;
