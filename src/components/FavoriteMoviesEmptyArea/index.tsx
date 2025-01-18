import { Box, Image, Text } from "@mantine/core";

import FavoriteEmptyAreaImage from "../../static/img/rated-empty-area.png";
import CustomLink from "../CustomLink";

const FavoriteMoviesEmptyArea = () => (
  <Box className="flex min-h-[80vh] flex-col items-center justify-center">
    <Box className="min-h-[500px] w-full max-w-[500px] text-center">
      <Image
        className="mb-5"
        src={FavoriteEmptyAreaImage}
        alt="Empty area image"
      />
      <Text
        c="dimmed"
        className="mb-4 text-center text-2xl font-bold lg:text-xl sm:text-lg"
      >
        Вы еще не добавили ни одного фильма
      </Text>

      <CustomLink href="/" text="На главную" />
    </Box>
  </Box>
);

export default FavoriteMoviesEmptyArea;
