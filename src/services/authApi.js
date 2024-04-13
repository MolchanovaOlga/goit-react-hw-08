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
  const response = await instance.post('/users/signup', formData);
  setToken(response.data.token);
  return response.data;
};

export const requestSignIn = async formData => {
  const response = await instance.post('/users/login', formData);
  setToken(response.data.token);
  return response.data;
};

export const requestLogOut = async () => {
  const response = await instance.post('/users/logout');
  console.log(response);
  return response.data;
};

export const requestGetCurrentUser = async () => {
  const response = await instance.get('/users/current');
  console.log(response);
  return response.data;
};
