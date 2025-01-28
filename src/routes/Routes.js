import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./routeNames";

const HomePageContainer = lazy(
  () => import("../pages/HomePage/containers/HomePageContainer"),
); 
const MoviesPageContainer = lazy(
  () => import("../pages/MoviesPage/containers/MoviesPageContainer"),
);
const TrendingMoviesPageContainer = lazy(
  () =>
    import(
      "../pages/TrendingMoviesPage/containers/TrendingMoviesPageContainer"
    ),
);
const FavoriteMoviesPageContainer = lazy(
  () =>
    import(
      "../pages/FavoriteMoviesPage/containers/FavoriteMoviesPageContainer"
    ),
);
const MovieDetailsPageContainer = lazy(
  () =>
    import("../pages/MovieDetailsPage/containers/MovieDetailsPageContainer"),
);
const SearchMoviesPageContainer = lazy(
  () => import("../pages/SearchMoviePage/containers/SearchMoviesPageContainer"),
);
const SignupPageContainer = lazy(
  () => import("../pages/SignUpPage/containers/SignUpPageContainer"),
);
const SignInPageContainer = lazy(
  () => import("../pages/SignInPage/containers/SignInPageContainer"),
);
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

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
