import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import { Box, UnstyledButton } from "@mantine/core";

import { ROUTES } from "../../routes/routeNames";

import CustomMenu from "../Menu";
import BasicInput from "../Inputs/SearchInput";

interface SideBarLayoutProps {
  pathname: string;
  inputValue: string;
  handleInputValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SideBarLayout: FC<SideBarLayoutProps> = ({
  pathname,
  inputValue,
  handleInputValueChange,
}) => {
  return (
    <Box className="min-h-screen w-[100%] max-w-[280px] bg-purple-100 p-6 xl:flex xl:min-h-0 xl:max-w-[1470px] xl:flex-col xl:items-start xl:gap-5 xl:pl-[15px] xl:pr-[15px]">
      <Box className="mb-10 flex items-center gap-2 xl:mb-0">
        <span className="text-[28px] font-semibold text-purple-500 sm:text-[24px]">
          TMDB
        </span>
        <span className="h-6 w-16 rounded-full bg-purple-500 sm:h-5 sm:w-14"></span>
      </Box>
      <Box className="mb-8 flex flex-col flex-wrap gap-2 xl:mb-0 xl:flex-row">
        <Link
          to={ROUTES.HOME_PAGE}
          className={
            pathname === ROUTES.HOME_PAGE
              ? "whitespace-nowrap rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 sm:p-2 sm:text-sm"
              : "whitespace-nowrap rounded-lg bg-transparent p-[10px] text-base text-black transition-colors hover:text-purple-500 sm:text-sm"
          }
        >
          По жанрам
        </Link>
        <CustomMenu>
          <UnstyledButton
            className={
              pathname === ROUTES.MOVIES_PAGE
                ? "rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 sm:p-2 sm:text-sm"
                : "rounded-lg bg-transparent p-[10px] text-base text-black transition-colors hover:text-purple-500 sm:text-sm"
            }
          >
            Фильмы
          </UnstyledButton>
        </CustomMenu>
        <Link
          to={ROUTES.TRENDING_MOVIES_PAGE}
          className={
            pathname === ROUTES.TRENDING_MOVIES_PAGE
              ? "whitespace-nowrap rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 sm:p-2 sm:text-sm"
              : "whitespace-nowrap rounded-lg bg-transparent p-[10px] text-base text-black transition-colors hover:text-purple-500 sm:text-sm"
          }
        >
          В тренде
        </Link>
        <Link
          to={ROUTES.FAVORITE_MOVIES_PAGE}
          className={
            pathname === ROUTES.FAVORITE_MOVIES_PAGE
              ? "rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 sm:p-2 sm:text-sm"
              : "rounded-lg bg-transparent p-[10px] text-base text-black transition-colors hover:text-purple-500 sm:text-sm"
          }
        >
          Избранное
        </Link>
      </Box>
      <BasicInput
        className="w-full max-w-[400px]"
        searchValue={inputValue}
        placeholder="Поиск..."
        handleChange={handleInputValueChange}
      />
    </Box>
  );
};

export default SideBarLayout;
