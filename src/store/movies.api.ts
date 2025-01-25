import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { BASE_URL, TOKEN } from "../const";
import {
  IGenre,
  IMovie,
  IMovieDetails,
  IVideoResponse,
  MoviesSearchParams,
  MoviesServerResponse,
  ServerResponse,
} from "../interfaces/searchMoviesDataInterfaces";
import {
  ISearchMoviesDataErrorObject,
  ISearchMoviesErrorObject,
} from "../interfaces/searchMoviesErrorsInterfaces";

export const moviesApi = createApi({
  reducerPath: "movies/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${TOKEN}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    ISearchMoviesErrorObject | ISearchMoviesDataErrorObject,
    unknown
  >,
  endpoints: (builder) => ({
    getMovieGenres: builder.query<IGenre[], void>({
      query: () => `/genre/movie/list?language=ru`,
      transformResponse: (response: ServerResponse) => response?.genres,
    }),
    searchMovies: builder.query<MoviesServerResponse, MoviesSearchParams>({
      query: ({
        currentPage,
        sortValue,
        moviesGenreValue,
        releaseYear,
        from,
        to,
      }) =>
        `discover/movie?include_adult=false&include_video=true&language=ru&page=${currentPage}&sort_by=${sortValue}&primary_release_year=${releaseYear}&vote_average.gte=${from}&vote_average.lte=${to}&with_genres=${moviesGenreValue}'`,
    }),
    trendingMovies: builder.query<MoviesServerResponse, MoviesSearchParams>({
      query: ({ currentPage }) =>
        `trending/movie/day?include_video=true&language=ru&page=${currentPage}`,
    }),
    getMoviesByFilter: builder.query<MoviesServerResponse, MoviesSearchParams>({
      query: ({ moviesFilterValue, currentPage }) =>
        `movie/${moviesFilterValue}?include_video=true&language=ru&page=${currentPage}`,
    }),
    searchMoviesByTitle: builder.query<
      MoviesServerResponse,
      MoviesSearchParams
    >({
      query: ({ currentPage, debouncedSearchMovieInputValue }) =>
        `search/movie?query=${debouncedSearchMovieInputValue}&include_adult=false&language=ru&page=${currentPage}`,
    }),
    getMovieDetails: builder.query<IMovieDetails, number>({
      query: (movieId) => `movie/${movieId}?language=ru`,
    }),
    getMovieVideo: builder.query<IVideoResponse, number>({
      query: (movieId) => `movie/${movieId}/videos?language=ru`,
    }),
  }),
});

export const {
  useGetMovieGenresQuery,
  useLazySearchMoviesQuery,
  useTrendingMoviesQuery,
  useLazyGetMoviesByFilterQuery,
  useLazySearchMoviesByTitleQuery,
  useLazyGetMovieDetailsQuery,
  useLazyGetMovieVideoQuery,
} = moviesApi;
