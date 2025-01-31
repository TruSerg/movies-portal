import { Image } from "@mantine/core";

import NoImageBG from "../../../static/img/no-image-bg.png";

const NoImageBg = () => (
  <Image
    className="w-full"
    src={NoImageBG}
    width="200"
    height="300"
    alt="No image"
  />
);

export default NoImageBg;
