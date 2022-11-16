import { NavLink } from 'react-router-dom';
import { NavWrapper } from './AuthNav.styled';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <NavWrapper>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </NavWrapper>
  );
};
