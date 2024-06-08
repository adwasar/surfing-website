import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderResult from 'src/components/OrderResult';

interface OrderSuccessfulProps {}

const OrderSuccessful: FC<OrderSuccessfulProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.data;
  const result = data?.result;
  const message = data?.message;

  useEffect(() => {
    if (!data) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (!data) {
    return null;
  }

  return (
    <>
      <OrderResult result={result} message={message} />;
    </>
  );
};

export default OrderSuccessful;
