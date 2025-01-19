import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import MoviesPageContainer from "../pages/MoviesPage/containers/MoviesPageContainer";
import TrendingMoviesPageContainer from "../pages/TrendingMoviesPage/containers/TrendingMoviesPageContainer";
import FavoriteMoviesPageContainer from "../pages/FavoriteMoviesPage/containers/FavoriteMoviesPageContainer";
import MovieDetailsPageContainer from "../pages/MovieDetailsPage/containers/MovieDetailsPageContainer";

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

      <Route path="*" element={<Navigate to={ROUTES.HOME_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
