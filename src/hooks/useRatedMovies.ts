import { IMovie } from '../interfaces/searchMoviesDataInterfaces';

import { useAppSelector } from './useStoreHooks';
import useLocalStorage from './useLocalStorage';

const useRatedMovies = () => {
	const [ratedMovies, setRatedMovies] = useLocalStorage(
		'ratedMovies',
		[] as IMovie[]
	);

	const { moviesList } = useAppSelector(state => state.searchMovies);

	const handleAddFavoriteMovie = (id: number) => {
		moviesList.filter(movie => {
			if (movie.id === id) {
				setRatedMovies([...ratedMovies, movie]);
			}
		});
	};

	const handleRemoveFavoriteMovie = (id: number) => {
		setRatedMovies(ratedMovies.filter((movie: IMovie) => movie.id !== id));
	};

	const isAddMovieToFavorite = (id: number) => {
		return ratedMovies?.findIndex((movie: IMovie) => movie.id === id) !== -1;
	};

	return {
		ratedMovies,
		handleAddFavoriteMovie,
		handleRemoveFavoriteMovie,
		isAddMovieToFavorite,
	};
};

export default useRatedMovies;
