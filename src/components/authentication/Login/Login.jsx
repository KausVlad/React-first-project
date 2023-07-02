import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkAuth,
  login,
  logout,
  testFetch,
} from '../../../store/auth/auth.actions';

export function Login() {
  const dispatch = useDispatch();

  const { status, isLoading, isAuth, error } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(status, isAuth, error);

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        onClick={() => {
          dispatch(login({ email, password }));
        }}
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>\out\</button>
      <button onClick={() => dispatch(checkAuth())}>\XXXX\</button>
      <button onClick={() => dispatch(testFetch())}>\FFFFFF\</button>

      <NavLink to="/registration">Sign up</NavLink>
    </div>
  );
}
