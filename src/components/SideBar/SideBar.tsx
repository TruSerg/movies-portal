import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "../../routes/routeNames";

import { handleSearchMovieValueChange } from "../../store/searchMoviesSlice";
import { useLazySearchMoviesByTitleQuery } from "../../store/movies.api";

import { useDebounce, useInput, usePagination } from "../../hooks";
import { useAppDispatch } from "../../hooks/useStoreHooks";

import SideBarLayout from "./SideBarLayout";

const SideBar = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { currentPage } = usePagination();
  const {
    inputValue,
    handleInputValueChange,
  } = useInput("");
  const debouncedSearchMovieInputValue = useDebounce(inputValue);

  const [searchMoviesByTitle] = useLazySearchMoviesByTitleQuery();

  useEffect(() => {
    if (debouncedSearchMovieInputValue.length > 3) {
      searchMoviesByTitle({ currentPage, debouncedSearchMovieInputValue });

      navigate(ROUTES.SEARCH_MOVIES_PAGE);
    }
  }, [currentPage, searchMoviesByTitle, debouncedSearchMovieInputValue]);

  useEffect(() => {
    dispatch(handleSearchMovieValueChange(inputValue));
  }, [dispatch, inputValue]);

  return (
    <SideBarLayout
      pathname={pathname}
      inputValue={inputValue}
      handleInputValueChange={handleInputValueChange}
 
    />
  );
};

export default SideBar;
