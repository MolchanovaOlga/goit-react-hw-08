import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../redux/auth/selectors';

import css from './UserMenu.module.css';
import { logoutUser } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className={css.container}>
      <span className={css.span}>Hello, {userData.name}!</span>
      <button className={css.button} onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
