import { FC } from "react";
import { Box, rem } from "@mantine/core";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";

import { HomePageLayoutProps } from "../../../../interfaces/layoutInterfaces";

import { getRequestErrors } from "../../../../utils/getRequestErrors";

import {
  movieFromRateList,
  movieSortList,
  movieToRateList,
} from "../../../../const";

import CustomForm from "../../../../components/CustomForm";
import Heading from "../../../../components/Heading";
import SelectLoader from "../../../../components/Loaders/SelectLoader";
import CustomSelect from "../../../../components/CustomSelect";
import YearPickerComponent from "../../../../components/Inputs/YearPickerInput";
import CustomLoader from "../../../../components/Loaders/Loader";
import ErrorComponent from "../../../../components/ErrorComponent";
import StartSearchingComponent from "../../../../components/StartSearchingComponent";
import MoviesCard from "../../../../components/MoviesCard";
import BasicPagination from "../../../../components/Pagination";
import CustomButton from "../../../../components/Buttons/CustomButton";

const HomePageLayout: FC<HomePageLayoutProps> = ({
  isGenresError,
  isGenresLoading,
  isGenresFetching,
  isFirstRequest,
  isMoviesLoading,
  isMoviesFetching,
  isMoviesError,
  moviesError,
  moviesGenreValue,
  totalPages,
  genresErrorChange,
  yearPickerValue,
  currentPage,
  moviesList,
  genres,
  handleFormSubmit,
  handleMovieValueChange,
  handleRateFromChange,
  handleRateToChange,
  handleSortValueChange,
  handleYearPickerValueChange,
  handleAddMovieToFavorite,
  handleRemoveMovieFromFavorite,
  isAddMovieToFavorite,
  handlePageChange,
  handleGetMovieDetails,
}) => {
  return (
    <main className="m-[0_auto] w-full max-w-[1010px] pb-10 pl-[15px] pr-[15px] pt-10 xl:m-0 xl:max-w-full xl:pb-5 xl:pt-5">
      <Heading
        text="Фильмы"
        className="mb-10 text-[32px] font-bold xl:mb-5 lg:text-[24px] sm:mb-3 sm:text-[18px]"
      />
      <CustomForm
        className="mb-6 grid grid-cols-[2fr_1fr] gap-4 lg:grid-cols-1 sm:mb-3 sm:gap-1"
        handleSubmit={handleFormSubmit}
        id="searchMoviesForm"
      >
        <Box className="grid grid-cols-2 gap-4 md:gap-2 sm:grid-cols-1 sm:gap-1">
          <CustomSelect
            data={
              isGenresError
                ? [`${genresErrorChange}`]
                : (genres?.map(({ name }) => name) ?? [])
            }
            label="Жанры"
            placeholder={
              isGenresError ? `${genresErrorChange}` : "Выберите жанр"
            }
            handleChange={(value) =>
              handleMovieValueChange(value ?? "", genres ?? [])
            }
            rightSection={
              isGenresLoading || isGenresFetching ? (
                <SelectLoader />
              ) : (
                <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
              )
            }
          />

          <YearPickerComponent
            label="Год выпуска"
            placeholder="Выберите год выпуска"
            rightSection={
              !yearPickerValue ? (
                <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
              ) : null
            }
            handleChange={(value) => handleYearPickerValueChange(value)}
          />
        </Box>

        <Box className="grid grid-cols-2 items-end gap-2 lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-2 sm:grid-cols-2">
          <CustomSelect
            clearable={true}
            data={movieFromRateList}
            label="Рейтинг"
            placeholder="От"
            handleChange={(value) => handleRateFromChange(value ?? "")}
          />

          <CustomSelect
            clearable={true}
            data={movieToRateList}
            placeholder="До"
            handleChange={(value) => handleRateToChange(value ?? "")}
          />
        </Box>
      </CustomForm>

      <Box className="mb-6 flex justify-end sm:mb-3">
        <CustomButton
          form="searchMoviesForm"
          type="submit"
          color="#c084fc"
          variant="outline"
          radius="md"
          disabled={moviesGenreValue ? false : true}
          className="flex w-full max-w-[100px] items-center justify-end justify-center transition delay-150 ease-in-out lg:h-8 sm:h-7 sm:max-w-[70px] sm:text-sm"
        >
          {moviesGenreValue ? (
            <IconSearch className="h-5 w-5 lg:h-4 lg:w-4 sm:h-3 sm:w-3" />
          ) : null}
        </CustomButton>
      </Box>

      {isFirstRequest && (
        <Box className="mb-6 grid grid-cols-3 gap-2 lg:grid-cols-2 sm:grid-cols-1">
          <CustomSelect
            className="col-start-3 lg:col-start-2"
            data={movieSortList}
            label="Сортировка"
            placeholder="Выбор сортировки"
            handleChange={(value) => handleSortValueChange(value ?? "")}
            rightSection={
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
            }
          />
        </Box>
      )}

      <Box className="relative mb-6 flex min-h-[60vh] items-start justify-center">
        {isMoviesLoading || isMoviesFetching ? (
          <CustomLoader className="absolute left-1/2 top-1/2 mr-[-50%] translate-x-[-50%] translate-y-[-50%] sm:h-1 sm:w-1" />
        ) : (
          <>
            {isMoviesError ? (
              <ErrorComponent error={getRequestErrors(moviesError) ?? ""} />
            ) : (
              <>
                {!moviesList?.length ? (
                  <StartSearchingComponent />
                ) : (
                  <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-2">
                    {moviesList?.map(
                      ({
                        id,
                        poster_path,
                        title,
                        vote_average,
                        release_date,
                        popularity,
                        genre_ids,
                      }) => {
                        return (
                          <MoviesCard
                            key={id}
                            link={`/details/${id}`}
                            image={poster_path}
                            title={title}
                            rate={vote_average}
                            date={release_date}
                            popularity={popularity}
                            list={genre_ids}
                            isFavorite={isAddMovieToFavorite(id)}
                            handleAddMovie={() => handleAddMovieToFavorite(id)}
                            handleRemoveMovie={() =>
                              handleRemoveMovieFromFavorite(id)
                            }
                            handleGoToDetails={() => handleGetMovieDetails(id)}
                          />
                        );
                      },
                    )}
                  </ul>
                )}
              </>
            )}
          </>
        )}
      </Box>
      {totalPages > 0 ? (
        <BasicPagination
          className="flex justify-end"
          currentPage={currentPage}
          pageCount={totalPages > 500 ? 500 : totalPages}
          handlePageChange={handlePageChange}
        />
      ) : null}
    </main>
  );
};

export default HomePageLayout;
