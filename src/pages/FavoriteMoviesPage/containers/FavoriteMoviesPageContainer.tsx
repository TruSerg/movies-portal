import { useEffect } from "react";
import { useFavoriteMovies, usePagination } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import { useGetMovieGenresQuery } from "../../../store/movies.api";
import {
  findMovie,
  handleMoviesListChange,
} from "../../../store/searchMoviesSlice";
import FavoriteMoviesPageLayout from "../components/FavoriteMoviesPageLayout";

const FavoriteMoviesPageContainer = () => {
  const dispatch = useAppDispatch();
  const { moviesList, movie } = useAppSelector((state) => state.searchMovies);

  const { favoriteMovies, handleRemoveFavoriteMovie, isAddMovieToFavorite } = useFavoriteMovies();
  const { list, isPageLoading, currentPage, totalPages, handlePageChange } =
    usePagination(moviesList);

  console.log("favoriteMovies: ", favoriteMovies);

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

  const handleFindMovie = (id: number) => {
    dispatch(findMovie(id));
  };

  console.log("list: ", list);

  useEffect(() => {
    dispatch(handleMoviesListChange(favoriteMovies));
  }, [dispatch, favoriteMovies]);

  const movieTitle = movie?.title;
  const movieId = movie?.id;

  return (
    <FavoriteMoviesPageLayout
      isPageLoading={isPageLoading}
      isGenresLoading={isGenresLoading}
      totalPages={totalPages}
      currentPage={currentPage}
      favoriteMovies={favoriteMovies}
      list={list}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handleFindMovie={handleFindMovie}
      handlePageChange={handlePageChange}
    />
  );
};

export default FavoriteMoviesPageContainer;
