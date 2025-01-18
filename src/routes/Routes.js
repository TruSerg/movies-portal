import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import MoviesPageContainer from "../pages/MoviesPage/containers/MoviesPageContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<HomePageContainer />} />
      <Route path={ROUTES.MOVIES_PAGE} element={<MoviesPageContainer />} />

      <Route path="*" element={<Navigate to={ROUTES.HOME_PAGE} />} />
    </Routes>
  );
};

export default AppRoutes;
