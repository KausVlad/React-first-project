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
import del from '../SearchCity/svg/cancel.svg';
import { setSelectedApiKey } from '../../store/apiKeys/apiKeys.slice';

export const AuthAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { apiList, selectedApiKey, selectedApiKeyIndex } = useSelector(
    (state) => state.apiKeys
  );
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

  const handleDelete = (index) => {
    dispatch(deleteApiKey({ emailName: userName, apiKeyIndex: index }));
  };

  const handleSelect = (index) => {
    dispatch(setSelectedApiKey([apiList[index], index]));
  };

  const isButtonDisabled = apiKey.length !== 32;

  console.log(isAuth, userName, apiList, selectedApiKey);

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
          disabled={isButtonDisabled}
          onClick={() => dispatch(addApiKey({ emailName: userName, apiKey }))}
        >
          Add new API key
        </button>
        {apiList.map((apiKey, index) => {
          return (
            <div
              key={index}
              className={index === selectedApiKeyIndex ? 'selected' : ''}
            >
              <p onClick={() => handleSelect(index)}>{apiKey}</p>
              <img onClick={() => handleDelete(index)} src={del} alt="del" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
