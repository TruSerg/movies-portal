import { FC, useEffect, useState } from 'react';

import {
	useGetMovieGenresQuery,
	useLazySearchMoviesQuery,
} from '../../../store/movies.api';

import {
	findMovie,
	handleMoviesListChange,
} from '../../../store/searchMoviesSlice';

import { getRequestErrors } from '../../../utils/getRequestErrors';

import { useAppDispatch, useAppSelector } from '../../../hooks/useStoreHooks';
import {
	usePagination,
	useRatedMovies,
	useSelect,
	useYearPickerInput,
} from '../../../hooks';

import HomePageLayout from '../components/HomePageLayout';

const HomePageContainer: FC = () => {
	const dispatch = useAppDispatch();
	const [isFirstRequest, setIsFirstRequest] = useState(false);

	const { moviesList } = useAppSelector(state => state.searchMovies);

	const { handleAddFavoriteMovie, isAddMovieToFavorite } = useRatedMovies();
	const {
		moviesGenreValue,
		rateFrom,
		rateTo,
		sortValue,
		handleMovieValueChange,
		handleRateFromChange,
		handleRateToChange,
		handleSortValueChange,
	} = useSelect();
	const { currentPage, handlePageChange } = usePagination();
	const { yearPickerValue, handleYearPickerValueChange } = useYearPickerInput();

	const {
		data: genres,
		isLoading: isGenresLoading,
		isFetching: isGenresFetching,
		isError: isGenresError,
		error: genresError,
	} = useGetMovieGenresQuery();

	const [
		fetchSearchMovies,
		{
			data: movies,
			isLoading: isMoviesLoading,
			isFetching: isMoviesFetching,
			isError: isMoviesError,
			error: moviesError,
		},
	] = useLazySearchMoviesQuery();

	const handleFormSubmit = (e: globalThis.KeyboardEvent) => {
		e.preventDefault();

		if (moviesGenreValue) {
			handlePageChange(1);
			fetchSearchMovies({
				currentPage,
				sortValue,
				moviesGenreValue,
				releaseYear: yearPickerValue,
				from: rateFrom,
				to: rateTo,
			});
			setIsFirstRequest(true);
		}
	};

	useEffect(() => {
		if (isFirstRequest) {
			fetchSearchMovies({
				currentPage,
				sortValue,
				moviesGenreValue,
				releaseYear: yearPickerValue,
				from: rateFrom,
				to: rateTo,
			});
		}
	}, [isFirstRequest, currentPage, sortValue]);

	const totalPages = movies?.total_pages;
	const genresErrorChange = getRequestErrors(genresError);

	const handleFindMovie = (id: number) => {
		dispatch(findMovie(id));
	};

	useEffect(() => {
		dispatch(handleMoviesListChange(movies?.results));
	}, [dispatch, movies]);

	return (
		<HomePageLayout
			isGenresError={isGenresError}
			isGenresLoading={isGenresLoading}
			isGenresFetching={isGenresFetching}
			isFirstRequest={isFirstRequest}
			isMoviesLoading={isMoviesLoading}
			isMoviesFetching={isMoviesFetching}
			isMoviesError={isMoviesError}
			moviesError={moviesError}
			totalPages={totalPages ? totalPages : 0}
			genresErrorChange={genresErrorChange ? genresErrorChange : ''}
			yearPickerValue={yearPickerValue ? yearPickerValue : null}
			currentPage={currentPage}
			moviesList={moviesList}
			genres={genres ? genres : []}
			handleFormSubmit={handleFormSubmit}
			handleMovieValueChange={handleMovieValueChange}
			handleRateFromChange={handleRateFromChange}
			handleRateToChange={handleRateToChange}
			handleSortValueChange={handleSortValueChange}
			handleYearPickerValueChange={handleYearPickerValueChange}
			handleAddFavoriteMovie={handleAddFavoriteMovie}
			isAddMovieToFavorite={isAddMovieToFavorite}
			handleFindMovie={handleFindMovie}
			handlePageChange={handlePageChange}
		/>
	);
};

export default HomePageContainer;
