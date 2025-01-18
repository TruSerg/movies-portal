import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, UnstyledButton } from '@mantine/core';

import { useLazySearchMoviesByTitleQuery } from '../../store/movies.api';

import { useDebounce, useInput } from '../../hooks';

import CustomMenu from '../Menu';
import BasicInput from '../Inputs/SearchInput';

const SideBar = () => {
	const { pathname } = useLocation();

	const { value, handleChange } = useInput('');
	const debouncedSearchMovieInputValue = useDebounce(value);

	const [
		fetchSearchMoviesByTitle,
		{
			data: movies,
			isLoading: isMoviesLoading,
			isFetching: isMoviesFetching,
			isError: isMoviesError,
			error: moviesError,
		},
	] = useLazySearchMoviesByTitleQuery();

	console.log('movies: ', movies);

	useEffect(() => {
		fetchSearchMoviesByTitle(
			debouncedSearchMovieInputValue.trim().toLowerCase()
		);
	}, [fetchSearchMoviesByTitle, debouncedSearchMovieInputValue]);

	return (
		<Box className='min-h-screen w-[100%] max-w-[280px] bg-purple-100 p-6 xl:flex xl:min-h-0 xl:max-w-[1470px] xl:items-center xl:justify-between xl:gap-5 xl:pl-[15px] xl:pr-[15px] md:flex-col md:items-start'>
			<Box className='mb-10 flex items-center gap-2 xl:mb-0'>
				<span className='text-[28px] font-semibold text-purple-500 sm:text-[24px]'>
					TMDB
				</span>
				<span className='h-6 w-16 rounded-full bg-purple-500 sm:h-5 sm:w-14'></span>
			</Box>
			<Box className='flex flex-col gap-2 xl:flex-row xl:items-center mb-8'>
				<Link
					to='/'
					className={
						pathname === '/'
							? 'whitespace-nowrap rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 sm:p-2 sm:text-sm'
							: 'whitespace-nowrap rounded-lg bg-transparent p-[10px] text-base text-black transition-colors hover:text-purple-500 sm:text-sm'
					}
				>
					Поиск
				</Link>
				<CustomMenu>
					<UnstyledButton
						className={
							pathname === '/movies'
								? 'rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 sm:p-2 sm:text-sm'
								: 'rounded-lg bg-transparent p-[10px] text-base text-black transition-colors hover:text-purple-500 sm:text-sm'
						}
					>
						Фильмы
					</UnstyledButton>
				</CustomMenu>
				<Link
					to='/trending'
					className={
						pathname === '/trending'
							? 'rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 sm:p-2 sm:text-sm'
							: 'rounded-lg bg-transparent p-[10px] text-base text-black transition-colors hover:text-purple-500 sm:text-sm'
					}
				>
					В тренде
				</Link>
				<Link
					to='/rated'
					className={
						pathname === '/rated'
							? 'rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 sm:p-2 sm:text-sm'
							: 'rounded-lg bg-transparent p-[10px] text-base text-black transition-colors hover:text-purple-500 sm:text-sm'
					}
				>
					Мой рейтинг
				</Link>
			</Box>
			<BasicInput
				searchValue={value}
				placeholder='Поиск...'
				handleChange={handleChange}
			/>
		</Box>
	);
};

export default SideBar;
