import { FC } from "react";
import { Link } from "react-router-dom";


interface CustomLinkProps {
  href: string;
  text: string;
}

const CustomLink: FC<CustomLinkProps> = ({ href, text }) => (
  <Link
    to={href}
    className="whitespace-nowrap rounded-lg bg-purple-500 p-[10px] text-base font-bold text-white transition delay-150 ease-in-out hover:bg-purple-600 sm:p-2 sm:text-sm"
  >
    {text}
  </Link>
);

export default CustomLink;
