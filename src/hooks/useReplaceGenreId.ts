import { useCallback, useState } from "react";

import { IGenre } from "../interfaces/searchMoviesDataInterfaces";

const useReplaceGenreId = () => {
  const [genresList, setGenresList] = useState<string[]>([]);

  const replaceGenreIdToGenreString = useCallback(
    (genresArr: IGenre[], arr: number[]) => {
      if (genresArr) {
        const genresObj = Object.fromEntries(
          genresArr?.map(({ id, name }) => [id, name]),
        );

        const newArr = arr?.map((genreId) => {
          return genresObj[genreId];
        });

        setGenresList(newArr.slice(0, 3));
      }
    },
    [],
  );

  return { genresList, replaceGenreIdToGenreString };
};

export default useReplaceGenreId;
