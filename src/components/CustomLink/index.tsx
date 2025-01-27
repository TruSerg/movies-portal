import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import CustomUnstyledButton from "../Buttons/UnstyledButton";

interface CustomLinkProps {
  href: string;
  text?: string;
  children?: ReactNode;
  className: string;
}

const CustomLink: FC<CustomLinkProps> = ({
  href,
  text,
  children,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <CustomUnstyledButton
      handleClick={() => navigate(href)}
      className={className}
    >
      {text ?? children}
    </CustomUnstyledButton>
  );
};

export default CustomLink;
