import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from './Navigation.module.css';

import { selectUserIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <div className={css.navigationContainer}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
};

export default Navigation;
