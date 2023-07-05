import { NavLink, useNavigate } from 'react-router-dom';
import './AuthAdmin.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addApiKey,
  deleteApiKey,
  getAllApiKeys,
} from '../../store/apiKeys/apiKeys.actions';
import { useEffect, useState } from 'react';
import { checkAuth } from '../../store/auth/auth.actions';

export const AuthAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { apiList } = useSelector((state) => state.apiKeys);
  const { isAuth, userName } = useSelector((state) => state.auth);

  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    if (!isAuth) {
      dispatch(checkAuth());
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    dispatch(getAllApiKeys({ emailName: userName }));
  }, [dispatch, userName]);

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate('/');
  //   }
  // }, []);

  const handleClick = (index) => {
    dispatch(deleteApiKey({ emailName: userName, apiKeyIndex: index }));
  };

  console.log(isAuth, userName, apiList);

  return (
    <div className="auth-admin-container">
      <div className="auth-admin">
        <NavLink to="/">Back to weather ↩</NavLink>
        <h1>Manage you apiKey</h1>
        <input
          type="text"
          placeholder="Add new apiKey (32 characters)"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button
          onClick={() => dispatch(addApiKey({ emailName: userName, apiKey }))}
        >
          test
        </button>
        {apiList.map((apiKey, index) => {
          return (
            <p key={index} onClick={() => handleClick(index)}>
              {apiKey}
            </p>
          );
        })}
      </div>
    </div>
  );
};
