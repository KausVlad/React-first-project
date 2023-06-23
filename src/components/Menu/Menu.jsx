import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
  return (
    <div className="menu">
      <NavLink className="about-link" to="/about">
        About
      </NavLink>
      <p>Sign in</p>
    </div>
  );
}
