import { FC } from "react";
import { Box } from "@mantine/core";

import { TrendingPageLayoutProps } from "../../../../interfaces/layoutInterfaces";

import { getRequestErrors } from "../../../../utils/getRequestErrors";

import CustomLoader from "../../../../components/Loaders/Loader";
import ErrorComponent from "../../../../components/ErrorComponent";
import Heading from "../../../../components/Heading";
import MoviesCard from "../../../../components/MoviesCard";
import BasicPagination from "../../../../components/Pagination";

const TrendingPageLayout: FC<TrendingPageLayoutProps> = ({
  isTrendingMoviesLoading,
  isTrendingMoviesFetching,
  isGenresLoading,
  isTrendingMoviesError,
  trendingMoviesError,
  totalPages,
  currentPage,
  moviesList,
  isAddMovieToFavorite,
  handleAddMovieToFavorite,
  handleRemoveMovieFromFavorite,
  handlePageChange,
  handleGetMovieDetails,
}) => {
  return (
    <main className="m-[0_auto] w-full max-w-[1010px] pb-10 pl-[15px] pr-[15px] pt-10 xl:pb-5 xl:pt-5 lg:text-[28px] sm:text-[24px]">
      <Box className="relative mb-6 min-h-[80vh]">
        {isTrendingMoviesLoading ||
        isTrendingMoviesFetching ||
        isGenresLoading ? (
          <CustomLoader className="absolute left-1/2 top-1/2 mr-[-50%] translate-x-[-50%] translate-y-[-50%]" />
        ) : (
          <>
            {isTrendingMoviesError ? (
              <ErrorComponent
                error={getRequestErrors(trendingMoviesError) ?? ""}
              />
            ) : (
              <>
                <Heading
                  text="На пике популярности"
                  className="mb-10 text-[32px] font-bold xl:mb-5 lg:text-[24px] sm:mb-3 sm:text-[18px]"
                />

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
  );
};

export default TrendingPageLayout;
