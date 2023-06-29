import { $api } from '../http/httpConfig';

const loginServices = async (email, password) => {
  return $api.post('/login', { email, password });
};

const registrationService = async (email, password) => {
  return $api.post('/reg', { email, password });
};

const logoutService = async () => {
  return $api.post('/logout');
};

export { loginServices, registrationService, logoutService };
