import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "../../routes/routeNames";

import { handleSearchMovieValueChange } from "../../store/searchMoviesSlice";
import { useLazySearchMoviesByTitleQuery } from "../../store/movies.api";

import {
  useDebounce,
  useInput,
  usePagination,
  useRegistration,
} from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";

import SideBarLayout from "./SideBarLayout";

const SideBar = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuth, userName } = useAppSelector((state) => state.signUpUser);

  const { logOut, removeAccount } = useRegistration();
  const { currentPage } = usePagination();
  const { inputValue, handleInputValueChange } = useInput("");
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
      isAuth={isAuth}
      userName={userName}
      pathname={pathname}
      inputValue={inputValue}
      handleInputValueChange={handleInputValueChange}
      logOut={logOut}
      removeAccount={removeAccount}
    />
  );
};

export default SideBar;
