import { configureStore } from "@reduxjs/toolkit";

import { moviesApi } from "./movies.api";
import searchMoviesReducer from "./searchMoviesSlice";
import signUpUserReducer from "./signUpSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    searchMovies: searchMoviesReducer,
    signUpUser: signUpUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
