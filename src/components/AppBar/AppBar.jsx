import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav />}
    </header>
  );
};

export default AppBar;
