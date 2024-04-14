import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNavContainer}>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default AuthNav;
