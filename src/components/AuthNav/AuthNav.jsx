import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './AuthNav.module.css';

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.authNavContainer}>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
