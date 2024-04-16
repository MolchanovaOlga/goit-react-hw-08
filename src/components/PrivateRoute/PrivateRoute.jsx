import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  selectUserIsLoggedIn,
  selectUserIsRefreshing,
} from '../../redux/auth/selectors';

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);
  console.log(isRefreshing);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
