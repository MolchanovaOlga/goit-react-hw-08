import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
