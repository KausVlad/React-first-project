import { $api } from '../http/httpConfig';

export const loginServices = async (email, password) => {
  return $api.post('/login', { email, password });
};

export const registrationService = async (email, password) => {
  return $api.post('/reg', { email, password });
};

export const logoutService = async () => {
  return $api.post('/logout');
};


