import { createSlice } from "@reduxjs/toolkit";

import { IGenre, IMovie } from "../interfaces/searchMoviesDataInterfaces";

interface SearchMoviesState {
  movieTitle: string;
  searchMovieValue: string;
  moviesFilterValue: string;
  moviesFilterValueTitle: string;
  moviesList: IMovie[];
  genresList: IGenre[];
}

const initialState: SearchMoviesState = {
  movieTitle: "",
  searchMovieValue: "",
  moviesFilterValue: "",
  moviesFilterValueTitle: "",
  moviesList: [],
  genresList: [],
};

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState,
  reducers: {
    changeMovieTitle(state, { payload }) {
      state.movieTitle = payload;
    },
    changeMovieFilterValue(state, { payload }) {
      state.moviesFilterValue = payload;
    },
    changeTitleMovies(state, { payload }) {
      state.moviesFilterValueTitle = payload;
    },
    handleGenresListChange(state, { payload }) {
      state.genresList.push(payload);
    },
    handleMoviesListChange(state, { payload }) {
      state.moviesList = payload;
    },
    handleSearchMovieValueChange(state, { payload }) {
      state.searchMovieValue = payload;
    },
  },
});

export const {
  changeMovieTitle,
  changeMovieFilterValue,
  changeTitleMovies,
  handleGenresListChange,
  handleMoviesListChange,
  handleSearchMovieValueChange,
} = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
