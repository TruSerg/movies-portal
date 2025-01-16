import { Image } from "@mantine/core";

import NoImage from "../../../static/img/no-image-big.jpg";

const NoImageBig = () => (
  <Image
    className="w-full"
    src={NoImage}
    width="200"
    height="300"
    alt="No image"
  />
);

export default NoImageBig;
