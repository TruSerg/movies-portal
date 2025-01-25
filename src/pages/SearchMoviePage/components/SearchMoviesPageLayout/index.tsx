import { FC } from "react";
import { SerializedError } from "@reduxjs/toolkit";

import {
  ISearchMoviesDataErrorObject,
  ISearchMoviesErrorObject,
} from "../../../../interfaces/searchMoviesErrorsInterfaces";
import { IMovie } from "../../../../interfaces/searchMoviesDataInterfaces";
import { Box } from "@mantine/core";
import CustomLoader from "../../../../components/Loaders/Loader";
import ErrorComponent from "../../../../components/ErrorComponent";
import { getRequestErrors } from "../../../../utils/getRequestErrors";
import Heading from "../../../../components/Heading";
import MoviesCard from "../../../../components/MoviesCard";
import BasicPagination from "../../../../components/Pagination";
import CustomModal from "../../../../components/Modal";

interface SearchMoviesPageLayoutProps {
  isMoviesLoading: boolean;
  isMoviesFetching: boolean;
  isGenresLoading: boolean;
  isModalOpen: boolean;
  isMoviesError: boolean;
  moviesError:
    | ISearchMoviesErrorObject
    | ISearchMoviesDataErrorObject
    | SerializedError
    | undefined;
  searchedMoviesList: IMovie[];
  totalPages: number;
  searchedMoviesQuantity: number;
  movieTitle: string;
  currentPage: number;
  isAddMovieToFavorite: (id: number) => boolean;
  handlePageChange: (page: number) => void;
  handleAddMovieToFavorite: (id: number) => void;
  handleRemoveMovieFromFavorite: (id: number) => void;
  handleModalClose: () => void;
  handleGetMovieDetails: (id: number) => void;
}

const SearchMoviesPageLayout: FC<SearchMoviesPageLayoutProps> = ({
  isMoviesLoading,
  isMoviesFetching,
  isGenresLoading,
  isMoviesError,
  isModalOpen,
  moviesError,
  searchedMoviesList,
  totalPages,
  movieTitle,
  searchedMoviesQuantity,
  currentPage,
  handleAddMovieToFavorite,
  handleRemoveMovieFromFavorite,
  isAddMovieToFavorite,
  handlePageChange,
  handleModalClose,
  handleGetMovieDetails,
}) => {
  return (
    <>
      <main className="m-[0_auto] w-full max-w-[1010px] pb-10 pl-[15px] pr-[15px] pt-10 xl:pb-5 xl:pt-5 lg:text-[28px] sm:text-[24px]">
        <Box className="relative mb-6 min-h-[80vh]">
          {isMoviesLoading || isMoviesFetching || isGenresLoading ? (
            <CustomLoader className="absolute left-1/2 top-1/2 mr-[-50%] translate-x-[-50%] translate-y-[-50%]" />
          ) : (
            <>
              {isMoviesError ? (
                <ErrorComponent error={getRequestErrors(moviesError) ?? ""} />
              ) : (
                <>
                  {searchedMoviesQuantity ? (
                    <Heading
                      text={`Найдено ${searchedMoviesQuantity} фильмов!`}
                      className="mb-10 text-[32px] font-bold xl:mb-5 lg:text-[24px] sm:mb-3 sm:text-[18px]"
                    />
                  ) : null}

                  {searchedMoviesQuantity === 0 && (
                    <ErrorComponent error="Ничего не найдено!" />
                  )}

                  <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-2">
                    {searchedMoviesList?.map(
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
                </>
              )}
            </>
          )}
        </Box>
        {totalPages ? (
          <BasicPagination
            className="flex justify-end"
            currentPage={currentPage}
            pageCount={totalPages > 500 ? 500 : totalPages}
            handlePageChange={handlePageChange}
          />
        ) : null}
      </main>

      <CustomModal
        opened={isModalOpen}
        handleClose={handleModalClose}
        title="Оценка фильма"
      >
        <Box className="border-gray border-t pt-3">
          <Heading
            text={`Чтобы добавить ${movieTitle} в избранное, необходимо авторизоваться!`}
            className="mb-4 text-[18px] font-bold lg:text-[16px] sm:mb-3 sm:text-[14px]"
          />
        </Box>

        {/* <CustomUnstyledButton
          handleClick={() => handleAddFavoriteMovie(movieId, rating)}
          className="rounded-lg pb-[10px] pl-[20px] pr-[20px] pt-[10px] text-sm text-purple-500 transition-all delay-150 ease-in-out hover:bg-purple-500 hover:text-white"
        >
          Сохранить
        </CustomUnstyledButton> */}
      </CustomModal>
    </>
  );
};

export default SearchMoviesPageLayout;
