import { createSlice } from "@reduxjs/toolkit";

import { IGenre, IMovie } from "../interfaces/searchMoviesDataInterfaces";

interface SearchMoviesState {
  movie: IMovie;
  moviesList: IMovie[];
  ratedMovies: IMovie[];
  genresList: IGenre[];
  moviesFilterValue: string;
  moviesFilterValueTitle: string;
}

const initialState: SearchMoviesState = {
  movie: {} as IMovie,
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
    findMovie(state, { payload }) {
      const movie = state.moviesList.find((item) => item.id === payload);
      state.movie = { ...state.movie, ...movie };
    },
  },
});

export const {
  changeMovieFilterValue,
  changeTitleMovies,
  handleGenresListChange,
  handleMoviesListChange,
  findMovie,
} = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
