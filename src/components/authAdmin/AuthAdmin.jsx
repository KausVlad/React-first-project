import { NavLink } from 'react-router-dom';
import './AuthAdmin.scss';

export const AuthAdmin = () => {
  return (
    <div className="auth-admin-container">
      <div className="auth-admin">
        <NavLink to="/">Back to weather ↩</NavLink>
        <h1>AuthAdmin</h1>
      </div>
    </div>
  );
};
