import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkAuth,
  login,
  logout,
  testFetch,
} from '../../../store/auth/auth.actions';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, isAuth, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(`status: ${status}`, `isAuth: ${isAuth}`, `error : ${error}`);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })).catch((error) => {
      console.log('Login failed:', error);
    });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => dispatch(login({ email, password }))}>
        11Login11
      </button>
      <button onClick={() => dispatch(checkAuth())}>\XXXX\</button>
      <button onClick={() => dispatch(testFetch())}>\FFFFFF\</button>
      <NavLink to="/registration">Sign up</NavLink>
    </div>
  );
}
