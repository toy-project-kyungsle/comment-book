import { useNavigate } from 'react-router-dom';

const useSearchSubmit = (endPoint: string) => {
  const navigate = useNavigate();
  return () => navigate(endPoint);
};

export default useSearchSubmit;
