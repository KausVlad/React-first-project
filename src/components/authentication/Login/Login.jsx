import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/auth/auth.actions';
import { resetError } from '../../../store/auth/auth.slice';
import '../auth.scss';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="form-container">
      <div className="auth-form">
        <h2>Login form</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
              dispatch(resetError());
            }}
            value={email}
          />
          <p className="error error-email">
            {error === 'User not found' && 'User not found !'}
          </p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
              dispatch(resetError());
            }}
            value={password}
          />
          <p className="error error-password">
            {error === 'Wrong password' && 'Wrong password'}
          </p>
          <button type="submit">Login</button>
        </form>
        <NavLink to="/registration">No profile? Sign up</NavLink>
      </div>
    </div>
  );
}
