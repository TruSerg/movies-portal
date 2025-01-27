import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import MoviesPageContainer from "../pages/MoviesPage/containers/MoviesPageContainer";
import TrendingMoviesPageContainer from "../pages/TrendingMoviesPage/containers/TrendingMoviesPageContainer";
import FavoriteMoviesPageContainer from "../pages/FavoriteMoviesPage/containers/FavoriteMoviesPageContainer";
import MovieDetailsPageContainer from "../pages/MovieDetailsPage/containers/MovieDetailsPageContainer";
import SearchMoviesPageContainer from "../pages/SearchMoviePage/containers/SearchMoviesPageContainer";
import SignupPageContainer from "../pages/SignUpPage/containers/SignUpPageContainer";
import SignInPageContainer from "../pages/SignInPage/containers/SignInPageContainer";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<HomePageContainer />} />
      <Route path={ROUTES.MOVIES_PAGE} element={<MoviesPageContainer />} />
      <Route
        path={ROUTES.TRENDING_MOVIES_PAGE}
        element={<TrendingMoviesPageContainer />}
      />
      <Route
        path={ROUTES.FAVORITE_MOVIES_PAGE}
        element={<FavoriteMoviesPageContainer />}
      />
      <Route
        path={ROUTES.MOVIE_DETAILS_PAGE}
        element={<MovieDetailsPageContainer />}
      />
      <Route
        path={ROUTES.SEARCH_MOVIES_PAGE}
        element={<SearchMoviesPageContainer />}
      />
      <Route path={ROUTES.SIGNUP_PAGE} element={<SignupPageContainer />} />

      <Route path={ROUTES.SIGNIN_PAGE} element={<SignInPageContainer />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
