import { useNavigate } from 'react-router-dom';

const useNavi = (endPoint: string) => {
  const navigate = useNavigate();
  return () => navigate(endPoint);
};

export default useNavi;
