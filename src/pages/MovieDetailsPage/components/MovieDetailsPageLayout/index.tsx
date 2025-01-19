import { FC } from "react";
import { Box, Image, Text } from "@mantine/core";

import { MovieDetailsPageLayoutProps } from "../../../../interfaces/layoutInterfaces";

import { getTimeFromMins } from "../../../../utils/getTimeFormat";
import { replaceCurrencyByComma } from "../../../../utils/replaceCurrencyByComma";

import { IMAGE_URL } from "../../../../const";
import { getRequestErrors } from "../../../../utils/getRequestErrors";

import Heading from "../../../../components/Heading";
import DateComponent from "../../../../components/DateComponent";
import RateComponent from "../../../../components/RateComponent";
import PopularityComponent from "../../../../components/PopularityComponent";
import NoImageBig from "../../../../components/NoImage/NoImageBig";
import CustomUnstyledButton from "../../../../components/Buttons/UnstyledButton";
import CustomLoader from "../../../../components/Loaders/Loader";
import ErrorComponent from "../../../../components/ErrorComponent";

const MovieDetailsPageLayout: FC<MovieDetailsPageLayoutProps> = ({
  isMovieLoading,
  isMovieFetching,
  isMovieError,
  isFavorite,
  movieError,
  newMovie,
  movie,
  image,
  title,
  date,
  rate,
  popularity,
  duration,
  budget,
  grossWorldwide,
  genresList,
  isShowDetailsBlock,
  movieTrailerId,
  movieDescription,
  movieProduction,
  handleRemoveMovie,
  handleAddMovie,
}) => {
  return (
    <main className="m-[0_auto] w-full max-w-[1010px] pb-10 pl-[15px] pr-[15px] pt-10 xl:m-0 xl:max-w-full xl:pb-5 xl:pt-5">
      <Box className="relative mb-6 min-h-[80vh]">
        {isMovieLoading || isMovieFetching ? (
          <CustomLoader className="absolute left-1/2 top-1/2 mr-[-50%] translate-x-[-50%] translate-y-[-50%]" />
        ) : (
          <>
            {movie ? (
              <>
                {isMovieError ? (
                  <ErrorComponent error={getRequestErrors(movieError) ?? ""} />
                ) : (
                  <>
                    <Box className="mb-5 min-h-[400px] rounded-xl bg-white p-6 md:p-3">
                      <Box className="flex flex-1 flex-col">
                        {image ? (
                          <Image
                            className="mb-5 sm:mb-3"
                            src={`${IMAGE_URL}${image}`}
                            width="250"
                            height="352"
                            alt={title}
                          />
                        ) : (
                          <NoImageBig />
                        )}

                        <Box className="break-word flex flex-col gap-3">
                          <Box className="flex items-center justify-between gap-4">
                            <Heading
                              tag="h1"
                              text={title}
                              className="mb-2 text-xl font-semibold leading-tight text-purple-500 xl:text-lg xl:leading-tight lg:text-base lg:leading-tight sm:mb-1 sm:text-sm sm:leading-tight"
                            />
                            {isFavorite ? (
                              <CustomUnstyledButton
                                handleClick={() => handleRemoveMovie(movie.id)}
                                className="z-50 flex-shrink-0 cursor-pointer p-3"
                              >
                                <Image
                                  className="h-7 w-7 sm:h-5 sm:w-5"
                                  src="/addedFavorite.svg"
                                  alt="Added favorite icon"
                                />
                              </CustomUnstyledButton>
                            ) : (
                              <CustomUnstyledButton
                                handleClick={() => handleAddMovie(newMovie)}
                                className="z-50 flex-shrink-0 cursor-pointer p-3"
                              >
                                <Image
                                  className="h-7 w-7 sm:h-5 sm:w-5"
                                  src="/addToFavorite.svg"
                                  alt="Add to favorite icon"
                                />
                              </CustomUnstyledButton>
                            )}
                          </Box>

                          {date && (
                            <DateComponent
                              c="dimmed"
                              className="mb-2 text-base sm:mb-1 sm:text-sm"
                              date={date}
                              dateFormat="YYYY"
                            />
                          )}

                          <Box className="mb-2 flex items-center gap-2 sm:mb-1">
                            <RateComponent rate={rate} />

                            <PopularityComponent
                              rate={rate}
                              popularity={popularity}
                            />
                          </Box>

                          <ul className="mt-auto flex flex-col gap-3 lg:text-sm sm:gap-2">
                            {duration !== 0 && (
                              <li className="flex gap-3 sm:justify-between">
                                <Text
                                  c="dimmed"
                                  className="text-md w-full max-w-40 leading-tight lg:text-sm sm:max-w-0 sm:text-xs"
                                >
                                  Продолжительность
                                </Text>

                                <Text className="text-md leading-tight lg:text-sm sm:text-xs">
                                  {getTimeFromMins(duration)}
                                </Text>
                              </li>
                            )}

                            {date && (
                              <li className="flex gap-3 sm:justify-between">
                                <Text
                                  c="dimmed"
                                  className="text-md w-full max-w-40 leading-tight lg:text-sm sm:max-w-0 sm:text-xs"
                                >
                                  Премьера
                                </Text>
                                <DateComponent
                                  c="#000"
                                  className="text-md leading-tight lg:text-sm sm:text-xs"
                                  date={date}
                                  dateFormat="MMMM D, YYYY"
                                />
                              </li>
                            )}

                            {budget !== 0 && (
                              <li className="flex gap-3 sm:justify-between">
                                <Text
                                  c="dimmed"
                                  className="text-md w-full max-w-40 leading-tight lg:text-sm sm:max-w-0 sm:text-xs"
                                >
                                  Бюджет
                                </Text>

                                <Text className="text-md leading-tight lg:text-sm sm:text-xs">
                                  {`$${replaceCurrencyByComma(budget)}`}
                                </Text>
                              </li>
                            )}

                            {grossWorldwide !== 0 && (
                              <li className="flex items-end gap-3 sm:justify-between">
                                <Text
                                  c="dimmed"
                                  className="text-md w-full max-w-40 leading-tight lg:text-sm sm:max-w-0 sm:text-xs"
                                >
                                  Мировые сборы
                                </Text>

                                <Text className="text-md leading-tight lg:text-sm sm:text-xs">
                                  {`$${replaceCurrencyByComma(grossWorldwide)}`}
                                </Text>
                              </li>
                            )}

                            {genresList?.length !== 0 && (
                              <li className="flex gap-3 sm:justify-between">
                                <Text
                                  c="dimmed"
                                  className="text-md w-full max-w-40 leading-tight lg:text-sm sm:max-w-10 sm:text-xs"
                                >
                                  Жанр
                                </Text>

                                <Box className="flex flex-wrap gap-1">
                                  {genresList?.map(({ id, name }) => (
                                    <Text
                                      key={id}
                                      className="text-md leading-tight first-letter:uppercase lg:text-sm sm:text-xs [&:not(:last-child)]:after:content-[',']"
                                    >
                                      {name}
                                    </Text>
                                  ))}
                                </Box>
                              </li>
                            )}
                          </ul>
                        </Box>
                      </Box>
                    </Box>

                    {isShowDetailsBlock && (
                      <>
                        <Box className="rounded-xl bg-white p-6 sm:p-3">
                          {movieTrailerId && (
                            <Box className="border-b-solid border-b-#D5D6DC mb-5 border-b-[1px] pb-5">
                              <Heading
                                tag="h2"
                                text="Трейлер"
                                className="text-black-500 mb-5 text-xl font-semibold leading-tight xl:text-lg xl:leading-tight lg:text-base lg:leading-tight sm:leading-tight"
                              />

                              <iframe
                                className="min-h-[281px] w-full max-w-[500px] sm:min-h-[200px]"
                                title="movieVideoFrame"
                                src={`https://www.youtube.com/embed/${movieTrailerId}`}
                                allowFullScreen
                              />
                            </Box>
                          )}

                          {movieDescription && (
                            <Box className="border-b-solid border-b-#D5D6DC mb-5 border-b-[1px] pb-5">
                              <Heading
                                tag="h2"
                                text="Описание"
                                className="text-black-500 mb-2 text-xl font-semibold leading-tight xl:text-lg xl:leading-tight lg:text-base lg:leading-tight sm:leading-tight"
                              />

                              <Text className="text-base md:text-sm sm:text-xs">
                                {movieDescription}
                              </Text>
                            </Box>
                          )}

                          {movieProduction.length !== 0 && (
                            <>
                              <Heading
                                tag="h2"
                                text="Производство"
                                className="text-black-500 mb-3 text-xl font-semibold leading-tight xl:text-lg xl:leading-tight lg:text-base lg:leading-tight sm:mb-2 sm:leading-tight"
                              />

                              {movieProduction.map(
                                ({ id, logo_path, name }) => (
                                  <Box
                                    key={id}
                                    className="flex items-center gap-2 [&:not(:last-child)]:mb-3"
                                  >
                                    {logo_path ? (
                                      <Box className="w-10">
                                        <Image
                                          src={`${IMAGE_URL}${logo_path}`}
                                          width="40"
                                          height="40"
                                          alt={name}
                                        />
                                      </Box>
                                    ) : (
                                      <Box className="w-10">
                                        <Image
                                          src={"/emptyLogoProduction.svg"}
                                          width="20"
                                          height="20"
                                          alt={name}
                                        />
                                      </Box>
                                    )}

                                    <Heading
                                      tag="h3"
                                      text={name}
                                      className="text-black-700 text-base font-semibold leading-tight sm:text-sm"
                                    />
                                  </Box>
                                ),
                              )}
                            </>
                          )}
                        </Box>
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <ErrorComponent error="Movie details not found!" />
            )}
          </>
        )}
      </Box>
    </main>
  );
};

export default MovieDetailsPageLayout;
