import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * Після успішної реєстрації додаємо токен в HTTP-заголовок
 */
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    // token.set(data.token);
    return data;
  } catch (error) {
    // TASK: Додати обробку помилки error.message
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 * Після успішної реєстрації додаємо токен в HTTP-заголовок
 */
export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    // token.set(data.token);
    return data;
  } catch (error) {
    // TASK: Додати обробку помилки error.message
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * Пісдя успішного логаута, видаляємо токен із HTTP-заголовка
 */
export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    // token.unset();
  } catch (error) {
    // TASK: Додати обробку помилки error.message
  }
});
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираємо токен із стейта через getState()
 * 2. Якщо токена немає, виходимо не виконуючи ніяких операцій
 * 3. Якщо токен є, додаємо його в HTTP-заголовок і виконуємо операцію
 */
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена немає, виходимо з fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // TASK: Додати обробку помилки error.message
    }
  },
);


