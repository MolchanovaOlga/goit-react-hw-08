import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import css from './Navigation.module.css';

import { selectUserIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <div className={css.navigationContainer}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
