import { createSlice } from "@reduxjs/toolkit";

import { IMovie } from "../interfaces/searchMoviesDataInterfaces";

interface FavoriteMoviesState {
  favoriteMoviesList: IMovie[];
}

const initialState: FavoriteMoviesState = {
  favoriteMoviesList: [],
};

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    handleMoviesListChange(state, { payload }) {
      state.favoriteMoviesList = payload;
    },
  },
});

export const { handleMoviesListChange } = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
