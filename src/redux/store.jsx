import {configureStore} from '@reduxjs/toolkit';
import { filtersReducer, tasksReducer } from './slices';
import { tasksApi } from './taskAPI';

export const store = configureStore({
  reducer:{
    tasks: tasksReducer,
    filters: filtersReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware(),tasksApi.middleware],
})


