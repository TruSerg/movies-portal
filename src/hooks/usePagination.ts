import { useEffect, useState } from 'react';
import { IMovie } from '../interfaces/searchMoviesDataInterfaces';

const usePagination = (array?: IMovie[]) => {
	const [list, setList] = useState<IMovie[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isPageLoading, setIsPageLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [moviesPerPage] = useState(20);

	const indexOfLastMovie = currentPage * moviesPerPage;

	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

	const currentList = array?.slice(indexOfFirstMovie, indexOfLastMovie);

	useEffect(() => {
		const pagination = setTimeout(() => {
			setIsPageLoading(false);
			setList(currentList ? currentList : []);

			if (array?.length !== 0) {
				setTotalPages(Math.ceil(array ? array.length / moviesPerPage : 0));
			}
		}, 500);

		return () => {
			clearTimeout(pagination);
		};
	}, [currentPage, array, moviesPerPage]);

	const handlePageChange = (page: number) => {
		setIsPageLoading(true);

		if (page !== currentPage) {
			setCurrentPage(page);
		}
	};

	return { list, isPageLoading, currentPage, totalPages, handlePageChange };
};

export default usePagination;
