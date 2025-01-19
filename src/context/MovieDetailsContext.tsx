import { FC, ReactNode, createContext } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

import { useLazyGetMovieDetailsQuery, useLazyGetMovieVideoQuery } from "../store/movies.api";

import { ROUTES } from "../routes/routeNames";

import {
  IMovieDetails,
  IVideoResponse,
} from "../interfaces/searchMoviesDataInterfaces";
import {
  ISearchMoviesDataErrorObject,
  ISearchMoviesErrorObject,
} from "../interfaces/searchMoviesErrorsInterfaces";

interface MovieDetailsContextProps {
  isMovieLoading: boolean;
  isMovieFetching: boolean;
  isMovieError: boolean;
  movieError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  movieVideo: IVideoResponse | undefined;
  movie: IMovieDetails | undefined;
  handleGetMovieDetails: (id: number) => void;
}

export const MovieDetailsContext = createContext<MovieDetailsContextProps>({
  isMovieLoading: false,
  isMovieFetching: false,
  isMovieError: false,
  movieError: {},
  movieVideo: {} as IVideoResponse,
  movie: {} as IMovieDetails,
  handleGetMovieDetails: () => {},
});

export const MovieDetailsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [
    getMovieDetails,
    {
      data: movie,
      isLoading: isMovieLoading,
      isFetching: isMovieFetching,
      isError: isMovieError,
      error: movieError,
    },
  ] = useLazyGetMovieDetailsQuery();

  const [getMovieVideo, { data: movieVideo }] = useLazyGetMovieVideoQuery();

  const handleGetMovieDetails = (id: number) => {
    getMovieDetails(id);
    getMovieVideo(id);

    navigate(ROUTES.MOVIE_DETAILS_PAGE);
  };

  return (
    <MovieDetailsContext.Provider
      value={{
        isMovieLoading,
        isMovieError,
        isMovieFetching,
        movieError,
        movie,
        movieVideo,
        handleGetMovieDetails,
      }}
    >
      {children}
    </MovieDetailsContext.Provider>
  );
};
