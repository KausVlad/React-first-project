import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reg } from '../../../store/auth/auth.actions';
import { NavLink, useNavigate } from 'react-router-dom';

export function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, isAuth, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [pasMatch, setPasMatch] = useState(true);

  console.log(`status: ${status}`, `isAuth: ${isAuth}`, `error : ${error}`);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      dispatch(reg({ email, password }));
    } else {
      setPasMatch(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p>{error === 'User already exists' && 'User already exists'}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          required
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <p>{error || (!pasMatch && 'Passwords do not match')}</p>
        <button type="submit">Sign up</button>
      </form>
      <NavLink to="/login">if you have a profile Log in</NavLink>
    </div>
  );
}
