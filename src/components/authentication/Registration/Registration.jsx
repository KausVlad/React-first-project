import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reg } from '../../../store/auth/auth.actions';
import { NavLink, useNavigate } from 'react-router-dom';
import { resetError } from '../../../store/auth/auth.slice';

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

  const passMatchCheck = (pas1, pas2) => {
    if (pas1 === pas2) {
      setPasMatch(true);
    } else {
      setPasMatch(false);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      dispatch(reg({ email, password }));
    } else {
      setPasMatch(false);
    }
  };

  return (
    <div className="form-container">
      <div className="auth-form">
        <h2>Registration form</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            onChange={(e) => {
              dispatch(resetError());
              setEmail(e.target.value);
            }}
            value={email}
          />
          <p className="error error-email">
            {error === 'User already exists' && 'User already exists'}
          </p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            onChange={(e) => {
              dispatch(resetError());
              setPassword(e.target.value);
            }}
            value={password}
          />
          <input
            type="password"
            name="confirm-password"
            autoComplete="off"
            placeholder="confirm password"
            required
            onChange={(e) => {
              passMatchCheck(e.target.value, password);
              dispatch(resetError());
              setPasswordConfirm(e.target.value);
            }}
            value={passwordConfirm}
          />
          <p className="error error-password-match">
            {!pasMatch && 'Passwords do not match.'}{' '}
            {error ===
              'Invalid email or password. Password must be 3-30 characters.' &&
              'Invalid email or password. Password must be 3-30 characters.'}
          </p>
          <button type="submit">Sign up</button>
        </form>
        <NavLink to="/login">if you have a profile Log in</NavLink>
      </div>
    </div>
  );
}
