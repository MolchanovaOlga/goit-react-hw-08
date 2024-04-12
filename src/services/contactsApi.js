import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const requestSignUp = async formData => {
  const response = await axios.post('/users/signup', formData);
  console.log(response);
  return response.data;
};

export const requestSignIn = async formData => {
  const response = await axios.post('/users​/login', formData);
  console.log(response);
  return response.data;
};

export const requestLogOut = async () => {
  const response = await axios.post('/users/logout');
  console.log(response);
  return response.data;
};

export const requestGetCurrentUser = async () => {
  const response = await axios.get('/users/current');
  console.log(response);
  return response.data;
};
