import { NavLink } from 'react-router-dom';
import './Menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/auth.actions';

export function Menu() {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);
  console.log(`isAuth: ${isAuth}`);

  return (
    <div className="menu">
      <NavLink className="about-link" to="/about">
        About
      </NavLink>
      <NavLink to="/login">Log in</NavLink>
      {isAuth && <a onClick={() => dispatch(logout())}>Log out</a>}
    </div>
  );
}
