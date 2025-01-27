import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import { Box, Image, UnstyledButton } from "@mantine/core";

import { ROUTES } from "../../routes/routeNames";

import CustomMenu from "../Menu";
import BasicInput from "../Inputs/SearchInput";
import CustomUnstyledButton from "../Buttons/UnstyledButton";

interface SideBarLayoutProps {
  isAuth: boolean;
  userName: string;
  pathname: string;
  inputValue: string;
  handleInputValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  logOut: () => void;
  removeAccount: () => void;
}

const SideBarLayout: FC<SideBarLayoutProps> = ({
  isAuth,
  userName,
  pathname,
  inputValue,
  handleInputValueChange,
  logOut,
  removeAccount,
}) => {
  return (
    <Box className="min-h-screen w-[100%] max-w-[280px] bg-purple-100 p-6 xl:flex xl:min-h-0 xl:max-w-[1470px] xl:flex-col xl:gap-8 xl:pl-[15px] xl:pr-[15px]">
      <Box className="mb-14 flex flex-col xl:mb-0 xl:flex-row xl:justify-between xl:gap-5 sm:flex-col sm:justify-end">
        <Link
          to={ROUTES.HOME_PAGE}
          className="mb-14 flex items-center gap-2 sm:mb-0"
        >
          <span className="text-[28px] font-semibold text-purple-500 sm:text-[24px]">
            TMDB
          </span>
          <span className="h-6 w-16 rounded-full bg-purple-500 sm:h-5 sm:w-14"></span>
        </Link>

        <Box className="flex flex-col items-center gap-2 sm:gap-1">
          <Image
            className="h-7 w-7 sm:h-5 sm:w-5"
            src="/userIcon.svg"
            alt="User icon"
          />

          {isAuth ? (
            <>
              <span className="text-xl font-bold text-purple-500 sm:text-lg">
                {userName}
              </span>
              <Box className="flex items-center gap-2">
                <CustomUnstyledButton
                  handleClick={logOut}
                  className="whitespace-nowrap p-2 text-sm transition-colors delay-150 ease-in-out hover:text-purple-500 sm:text-xs"
                >
                  Выйти
                </CustomUnstyledButton>
                <CustomUnstyledButton
                  handleClick={removeAccount}
                  className="whitespace-nowrap p-2 text-sm transition-colors delay-150 ease-in-out hover:text-purple-500 sm:text-xs"
                >
                  Удалить аккаунт
                </CustomUnstyledButton>
              </Box>
            </>
          ) : (
            <Box className="flex items-center gap-1">
              <Link
                to={ROUTES.SIGNIN_PAGE}
                className={
                  pathname === ROUTES.SIGNIN_PAGE
                    ? "whitespace-nowrap rounded-lg bg-purple-200 p-2 text-sm font-bold text-purple-500 transition-all delay-150 ease-in-out sm:p-2 sm:text-xs"
                    : "whitespace-nowrap rounded-lg bg-transparent p-2 text-sm text-black transition-all delay-150 ease-in-out hover:text-purple-500 sm:text-xs"
                }
              >
                Войти
              </Link>
              <Link
                to={ROUTES.SIGNUP_PAGE}
                className={
                  pathname === ROUTES.SIGNUP_PAGE
                    ? "whitespace-nowrap rounded-lg bg-purple-200 p-2 text-sm font-bold text-purple-500 transition-all delay-150 ease-in-out sm:p-2 sm:text-xs"
                    : "whitespace-nowrap rounded-lg bg-transparent p-2 text-sm text-black delay-150 ease-in-out hover:text-purple-500 sm:text-xs"
                }
              >
                Регистрация
              </Link>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="mb-8 flex flex-col flex-wrap gap-2 xl:gap-6 xl:mb-0 xl:flex-row">
        <Link
          to={ROUTES.HOME_PAGE}
          className={
            pathname === ROUTES.HOME_PAGE
              ? "whitespace-nowrap rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 transition-all delay-150 ease-in-out sm:p-2 sm:text-sm"
              : "whitespace-nowrap rounded-lg bg-transparent p-[10px] text-base text-black transition-all delay-150 ease-in-out hover:text-purple-500 sm:text-sm"
          }
        >
          Поиск по жанрам
        </Link>

        <CustomMenu>
          <UnstyledButton
            className={
              pathname === ROUTES.MOVIES_PAGE
                ? "rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 transition-all delay-150 ease-in-out sm:p-2 sm:text-sm"
                : "rounded-lg bg-transparent p-[10px] text-base text-black transition-all delay-150 ease-in-out hover:text-purple-500 sm:text-sm"
            }
          >
            Фильмы
          </UnstyledButton>
        </CustomMenu>
        <Link
          to={ROUTES.TRENDING_MOVIES_PAGE}
          className={
            pathname === ROUTES.TRENDING_MOVIES_PAGE
              ? "whitespace-nowrap rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 transition-all delay-150 ease-in-out sm:p-2 sm:text-sm"
              : "whitespace-nowrap rounded-lg bg-transparent p-[10px] text-base text-black transition-all delay-150 ease-in-out hover:text-purple-500 sm:text-sm"
          }
        >
          В тренде
        </Link>

        <Link
          to={ROUTES.FAVORITE_MOVIES_PAGE}
          className={
            pathname === ROUTES.FAVORITE_MOVIES_PAGE
              ? "rounded-lg bg-purple-200 p-[10px] text-base font-bold text-purple-500 transition-all delay-150 ease-in-out sm:p-2 sm:text-sm"
              : "rounded-lg bg-transparent p-[10px] text-base text-black transition-all delay-150 ease-in-out hover:text-purple-500 sm:text-sm"
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
