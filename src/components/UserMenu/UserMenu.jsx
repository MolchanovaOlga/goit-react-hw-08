import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/auth/selectors';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  return (
    <div className={css.container}>
      <span>Hello, {userData.name}!</span>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
