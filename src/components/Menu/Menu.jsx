import { NavLink } from 'react-router-dom';
import './Menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/auth.actions';

export function Menu() {
  const dispatch = useDispatch();

  const { isAuth, userName } = useSelector((state) => state.auth);
  console.log(`isAuth: ${isAuth}`, `userName: ${userName}`);

  return (
    <div className="menu">
      <NavLink className="about-link" to="/about">
        About
      </NavLink>
      {isAuth ? (
        <>
          <a>{userName}</a>
          <a onClick={() => dispatch(logout())}>Log out</a>
        </>
      ) : (
        <NavLink to="/login">Log in</NavLink>
      )}
      {!isAuth && <NavLink to="/registration">Sign up</NavLink>}
    </div>
  );
}
