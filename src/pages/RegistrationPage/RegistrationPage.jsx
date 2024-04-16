import { useSelector } from 'react-redux';

import css from './RegistrationPage.module.css';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectUserIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';

const RegistrationPage = () => {
  const loading = useSelector(selectUserIsLoading);

  return (
    <div className={css.container}>
      <RegistrationForm />
      {loading && <Loader />}
    </div>
  );
};

export default RegistrationPage;
