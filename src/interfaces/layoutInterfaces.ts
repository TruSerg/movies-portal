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
  moviesList: IMovie[];
  genres: IGenre[];
  handleFormSubmit: (e: globalThis.KeyboardEvent) => void;
  handleMovieValueChange: (value: string, genres: IGenre[]) => void;
  handleRateFromChange: (value: string) => void;
  handleRateToChange: (value: string) => void;
  handleSortValueChange: (value: string) => void;
  handleYearPickerValueChange: (value: DateValue) => void;
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
  moviesError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  moviesFilterValueTitle: string;
  moviesList: IMovie[];
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
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
  trendingMoviesError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  totalPages: number;
  currentPage: number;
  moviesList: IMovie[];
  isAddMovieToFavorite: (id: number) => boolean;
  handlePageChange: (page: number) => void;
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

export interface SearchMoviesPageLayoutProps {
  isMoviesLoading: boolean;
  isMoviesFetching: boolean;
  isGenresLoading: boolean;
  isMoviesError: boolean;
  moviesError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  searchedMoviesList: IMovie[];
  totalPages: number;
  searchedMoviesQuantity: number;
  currentPage: number;
  isAddMovieToFavorite: (id: number) => boolean;
  handlePageChange: (page: number) => void;
  handleAddMovieToFavorite: (id: number) => void;
  handleRemoveMovieFromFavorite: (id: number) => void;
  handleGetMovieDetails: (id: number) => void;
}

export interface MovieDetailsPageLayoutProps {
  isAuth: boolean;
  isModalOpen: boolean;
  isMovieLoading: boolean;
  isMovieFetching: boolean;
  isMovieError: boolean;
  isFavorite: boolean;
  movieError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  newMovie: IMovie;
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
  handleAddMovie: (newMovie: IMovie) => void;
  handleGoToRegistration: () => void;
  handleModalOpenToRegistration: () => void;
  handleModalClose: () => void;
}
