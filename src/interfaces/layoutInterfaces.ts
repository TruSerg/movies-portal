import { SerializedError } from "@reduxjs/toolkit";
import { DateValue } from "@mantine/dates";

import {
  ISearchMoviesDataErrorObject,
  ISearchMoviesErrorObject,
} from "./searchMoviesErrorsInterfaces";
import {
  IGenre,
  IMovie,
  IMovieDetails,
  IProductionCompany,
} from "./searchMoviesDataInterfaces";

export interface HomePageLayoutProps {
  isGenresError: boolean;
  isGenresLoading: boolean;
  isGenresFetching: boolean;
  isFirstRequest: boolean;
  isMoviesLoading: boolean;
  isMoviesFetching: boolean;
  isMoviesError: boolean;
  isModalOpen: boolean;
  moviesError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  moviesGenreValue: string;
  totalPages: number;
  genresErrorChange: string;
  yearPickerValue: DateValue | number;
  currentPage: number;
  movieTitle: string;
  moviesList: IMovie[];
  genres: IGenre[];
  handleFormSubmit: (e: globalThis.KeyboardEvent) => void;
  handleMovieValueChange: (value: string, genres: IGenre[]) => void;
  handleRateFromChange: (value: string) => void;
  handleRateToChange: (value: string) => void;
  handleSortValueChange: (value: string) => void;
  handleYearPickerValueChange: (value: DateValue) => void;
  handleModalClose: () => void;
  handleAddMovieToFavorite: (id: number) => void;
  handleRemoveMovieFromFavorite: (id: number) => void;
  isAddMovieToFavorite: (id: number) => boolean;
  handlePageChange: (page: number) => void;
  handleGetMovieDetails: (id: number) => void;
}

export interface MoviesPageLayoutProps {
  isMoviesLoading: boolean;
  isMoviesFetching: boolean;
  isMoviesError: boolean;
  isGenresLoading: boolean;
  isModalOpen: boolean;
  moviesError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  moviesFilterValueTitle: string;
  movieTitle: string;
  moviesList: IMovie[];
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  handleModalClose: () => void;
  handleAddMovieToFavorite: (id: number) => void;
  handleRemoveMovieFromFavorite: (id: number) => void;
  isAddMovieToFavorite: (id: number) => boolean;
  handleGetMovieDetails: (id: number) => void;
}

export interface TrendingPageLayoutProps {
  isTrendingMoviesLoading: boolean;
  isTrendingMoviesFetching: boolean;
  isGenresLoading: boolean;
  isTrendingMoviesError: boolean;
  isModalOpen: boolean;
  trendingMoviesError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  totalPages: number;
  currentPage: number;
  movieTitle: string;
  moviesList: IMovie[];
  isAddMovieToFavorite: (id: number) => boolean;
  handlePageChange: (page: number) => void;
  handleModalClose: () => void;
  handleAddMovieToFavorite: (id: number) => void;
  handleRemoveMovieFromFavorite: (id: number) => void;
  handleGetMovieDetails: (id: number) => void;
}

export interface FavoriteMoviesPageLayoutProps {
  isPageLoading: boolean;
  isGenresLoading: boolean;
  totalPages: number;
  currentPage: number;
  favoriteMovies: IMovie[];
  slicedMoviesList: IMovie[];
  handleRemoveMovieFromFavorite: (id: number) => void;
  isAddMovieToFavorite: (id: number) => boolean;
  handlePageChange: (page: number) => void;
  handleGetMovieDetails: (id: number) => void;
}

export interface MovieDetailsPageLayoutProps {
  isMovieLoading: boolean;
  isMovieFetching: boolean;
  isMovieError: boolean;
  isFavorite: boolean;
  movieError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  movie: IMovieDetails;
  image: string;
  title: string;
  date: string;
  rate: number;
  popularity: number;
  duration: number;
  budget: number;
  grossWorldwide: number;
  genresList: IGenre[];
  isShowDetailsBlock: string | IProductionCompany[];
  movieTrailerId: string;
  movieDescription: string;
  movieProduction: IProductionCompany[];
  handleRemoveMovie: (id: number) => void;
  handleAddMovie: (id: number) => void;
}
