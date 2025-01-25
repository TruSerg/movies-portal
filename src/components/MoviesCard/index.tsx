import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "@mantine/core";
import { Box, Card, Text } from "@mantine/core";

import { ROUTES } from "../../routes/routeNames";

import { useGetMovieGenresQuery } from "../../store/movies.api";

import { useReplaceGenreId, useResize } from "../../hooks";
import { useAppSelector } from "../../hooks/useStoreHooks";

import { IGenre } from "../../interfaces/searchMoviesDataInterfaces";
import { IMAGE_URL } from "../../const";

import Heading from "../Heading";
import DateComponent from "../DateComponent";
import PopularityComponent from "../PopularityComponent";
import NoImageSmall from "../NoImage/NoImageSmall";
import NoImageBig from "../NoImage/NoImageBig";
import CustomUnstyledButton from "../Buttons/UnstyledButton";
import RateComponent from "../RateComponent";

interface CustomCardProps {
  date: string;
  popularity: number;
  link: string;
  image: string;
  title: string;
  rate: number;
  isFavorite: boolean;
  list: number[];
  handleGoToDetails: () => void;
  handleAddMovie?: () => void;
  handleRemoveMovie: () => void;
}

const MoviesCard: FC<CustomCardProps> = ({
  date,
  popularity,
  link,
  image,
  title,
  rate,
  isFavorite,
  list,
  handleGoToDetails,
  handleAddMovie,
  handleRemoveMovie,
}) => {
  const navigate = useNavigate();

  const { isAuth } = useAppSelector((state) => state.signUpUser);

  const handleGoToRegistration = () => {
    navigate(ROUTES.SIGNUP_PAGE);
  };

  const { data: genres } = useGetMovieGenresQuery();

  const { genresList, replaceGenreIdToGenreString } = useReplaceGenreId();
  const { isScreenLg } = useResize();

  useEffect(() => {
    replaceGenreIdToGenreString(genres as IGenre[], list);
  }, [genres, replaceGenreIdToGenreString, list]);

  return (
    <Card radius="md" shadow="sm" className="relative w-full sm:p-2">
      {isFavorite ? (
        <CustomUnstyledButton
          handleClick={isAuth ? handleRemoveMovie : handleGoToRegistration}
          className="absolute right-1 top-1 z-50 flex-shrink-0 cursor-pointer p-3 lg:right-4 lg:top-4 sm:right-2 sm:top-2"
        >
          <Image
            className="h-7 w-7 sm:h-5 sm:w-5"
            src="/addedFavorite.svg"
            alt="Added favorite icon"
          />
        </CustomUnstyledButton>
      ) : (
        <CustomUnstyledButton
          handleClick={isAuth ? handleAddMovie : handleGoToRegistration}
          className="absolute right-1 top-1 z-50 flex-shrink-0 cursor-pointer p-3 lg:right-4 lg:top-4 sm:right-2 sm:top-2"
        >
          <Image
            className="h-7 w-7 sm:h-5 sm:w-5"
            src="/addToFavorite.svg"
            alt="Add to favorite icon"
          />
        </CustomUnstyledButton>
      )}

      <Link
        to={link}
        onClick={handleGoToDetails}
        className="flex max-w-[482px] 2xl:max-w-full"
      >
        <Box className="grid flex-1 grid-cols-[119px_1fr] gap-4 lg:flex lg:flex-col lg:gap-2">
          {image ? (
            <Image
              className="lg:w-full"
              src={`${IMAGE_URL}${image}`}
              width="100"
              height="170"
              alt={title}
            />
          ) : isScreenLg ? (
            <NoImageBig />
          ) : (
            <NoImageSmall />
          )}

          <Box className="break-word flex h-full flex-col">
            <Box className="flex items-start justify-between gap-4">
              <Heading
                tag="h2"
                text={title}
                className="mb-2 text-xl font-semibold leading-tight text-purple-500 xl:text-lg xl:leading-tight lg:text-base lg:leading-tight sm:mb-1 sm:text-sm sm:leading-tight"
              />

              <Box className="h-10 w-10"></Box>
            </Box>

            <DateComponent
              c="dimmed"
              className="mb-2 text-base sm:mb-1 sm:text-sm"
              date={date}
              dateFormat="YYYY"
            />

            <Box className="mb-2 flex items-center gap-2 sm:mb-1">
              <RateComponent rate={rate} />

              <PopularityComponent rate={rate} popularity={popularity} />
            </Box>

            {genresList?.length ? (
              <>
                <Box className="mt-auto flex flex-wrap gap-x-1 lg:text-sm">
                  <Text
                    c="dimmed"
                    className="text-md leading-tight lg:text-sm sm:text-xs"
                  >
                    Жанр:
                  </Text>

                  {genresList?.map((genre: string) => (
                    <Text
                      key={genre}
                      className="text-md leading-tight first-letter:uppercase lg:text-sm sm:text-xs [&:not(:last-child)]:after:content-[',']"
                    >
                      {genre}
                    </Text>
                  ))}
                </Box>
              </>
            ) : null}
          </Box>
        </Box>
      </Link>
    </Card>
  );
};

export default MoviesCard;
