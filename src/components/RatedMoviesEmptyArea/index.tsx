import { Box, Image, Text } from "@mantine/core";

import RatedEmptyAreaImage from "../../static/img/rated-empty-area.png";
import CustomLink from "../CustomLink";

const RatedMoviesEmptyArea = () => (
  <Box className="flex min-h-[80vh] flex-col items-center justify-center">
    <Image
      className="mb-5"
      src={RatedEmptyAreaImage}
      width={400}
      height={400}
      alt="Empty area image"
    />
    <Text
      c="dimmed"
      className="mb-4 text-center text-2xl font-bold lg:text-xl sm:text-lg"
    >
      Вы еще не оценили ни одного фильма
    </Text>

    <CustomLink href="/" text="Искать фильмы" />
  </Box>
);

export default RatedMoviesEmptyArea;
