import { configureStore } from "@reduxjs/toolkit";

import { moviesApi } from "./movies.api";
import searchMoviesReducer from "./searchMoviesSlice";
import signUpUserReducer from "./signUpSlice";
import favoritesMoviesReducer from "./favoriteMoviesSlice";

import { logger } from "../middleware/logger";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    searchMovies: searchMoviesReducer,
    signUpUser: signUpUserReducer,
    favoriteMovies: favoritesMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
