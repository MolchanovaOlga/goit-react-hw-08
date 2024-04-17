import { useSelector } from 'react-redux';

import css from './LoginPage.module.css';

import LoginForm from '../../components/LoginForm/LoginForm';
import { selectUserIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const LoginPage = () => {
  const loading = useSelector(selectUserIsLoading);
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <div className={css.container}>
        <LoginForm />
        {loading && <Loader />}
      </div>
    </>
  );
};

export default LoginPage;
