import { createSlice } from "@reduxjs/toolkit";

import { IGenre } from "../interfaces/searchMoviesDataInterfaces";

interface SearchMoviesState {
  searchMovieValue: string;
  moviesFilterValue: string;
  moviesFilterValueTitle: string;
  genresList: IGenre[];
}

const initialState: SearchMoviesState = {
  searchMovieValue: "",
  moviesFilterValue: "",
  moviesFilterValueTitle: "",
  genresList: [],
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

    handleSearchMovieValueChange(state, { payload }) {
      state.searchMovieValue = payload;
    },
  },
});

export const {
  changeMovieFilterValue,
  changeTitleMovies,
  handleGenresListChange,
  handleSearchMovieValueChange,
} = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
