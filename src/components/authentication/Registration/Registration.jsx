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
      alert('Passwords do not match');
    }
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
        <input
          type="password"
          name="confirm-password"
          placeholder="confirm password"
          required
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <button type="submit">Sign up</button>
      </form>
      <NavLink to="/login">if you have a profile Log in</NavLink>
    </div>
  );
}
