import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Registr</NavLink>
    </nav>
  );
};

export default Navigation;
