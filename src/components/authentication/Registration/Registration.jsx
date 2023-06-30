import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reg } from '../../../store/auth/auth.actions';

export function Registration() {
  const dispatch = useDispatch();

  const { status, testU, error, userName } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(status, testU, error, userName);

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
      <button onClick={() => dispatch(reg({ email, password }))}>
        Sign up
      </button>
    </div>
  );
}
