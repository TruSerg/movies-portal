import { createSlice } from "@reduxjs/toolkit";

import { IGenre, IMovie } from "../interfaces/searchMoviesDataInterfaces";

interface SearchMoviesState {
  searchMovieValue: string;
  moviesList: IMovie[];
  ratedMovies: IMovie[];
  genresList: IGenre[];
  moviesFilterValue: string;
  moviesFilterValueTitle: string;
}

const initialState: SearchMoviesState = {
  searchMovieValue: "",
  moviesList: [],
  ratedMovies: [],
  genresList: [],
  moviesFilterValue: "",
  moviesFilterValueTitle: "",
};

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState,
  reducers: {
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
  changeMovieFilterValue,
  changeTitleMovies,
  handleGenresListChange,
  handleMoviesListChange,
  handleSearchMovieValueChange,
} = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
