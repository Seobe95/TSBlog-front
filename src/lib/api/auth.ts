import client from './client';
import { UserInput, UserFetchReults } from '../../features/authSlice';

export const login = async (user: UserInput) => {
  const { username, password } = user;
  const response = await client.post<UserFetchReults>('/api/auth/login', {
    username,
    password,
  });
  return response.data;
};

export const register = async (user: UserInput) => {
  const { username, password } = user;
  const response = await client.post<UserFetchReults>('/api/auth/register', {
    username,
    password,
  });
  return response.data;
};

export const check = async () => {
  const response = await client.get('/api/auth/check');
  return response.data;
};