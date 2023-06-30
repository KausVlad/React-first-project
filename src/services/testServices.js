import { $api } from '../http/httpConfig';

export const testServices = async () => {
  return $api.get('/t');
};
