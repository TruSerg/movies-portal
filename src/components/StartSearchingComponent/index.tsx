import { Box, Image, Text } from "@mantine/core";

import StartSearchingImage from "../../static/img/search-movies-image.png";

const StartSearchingComponent = () => (
  <Box className="min-h-[450px] w-full max-w-[450px]">
    <Image
      className="mb-5"
      src={StartSearchingImage}
      alt="Start searching image"
    />
    <Text
      c="dimmed"
      className="text-center text-2xl font-bold lg:text-xl sm:text-lg"
    >
      Начните поиск фильмов
    </Text>
  </Box>
);

export default StartSearchingComponent;
