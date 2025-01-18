import { IMovie } from '../interfaces/searchMoviesDataInterfaces';

import { useAppSelector } from './useStoreHooks';
import useLocalStorage from './useLocalStorage';

const useFavoriteMovies = () => {
	const [favoriteMovies, setFavoriteMovies] = useLocalStorage(
    "favoriteMovies",
    [] as IMovie[],
  );

	const { moviesList } = useAppSelector(state => state.searchMovies);

	const handleAddFavoriteMovie = (id: number) => {
		moviesList.filter(movie => {
			if (movie.id === id) {
				setFavoriteMovies([...favoriteMovies, movie]);
			}
		});
	};

	const handleRemoveFavoriteMovie = (id: number) => {
		setFavoriteMovies(
      favoriteMovies.filter((movie: IMovie) => movie.id !== id),
    );
	};

	const isAddMovieToFavorite = (id: number) => {
		return favoriteMovies?.findIndex((movie: IMovie) => movie.id === id) !== -1;
	};

	return {
    favoriteMovies,
    handleAddFavoriteMovie,
    handleRemoveFavoriteMovie,
    isAddMovieToFavorite,
  };
};

export default useFavoriteMovies;
