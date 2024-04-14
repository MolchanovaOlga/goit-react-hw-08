import { useSelector } from 'react-redux';

import css from './AppBar.module.css';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
