import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import CustomUnstyledButton from "../Buttons/UnstyledButton";

interface CustomLinkProps {
  href: string;
  text?: string;
  children?: ReactNode;
  className: string;
  handleClick?: () => void;
}

const CustomLink: FC<CustomLinkProps> = ({
  href,
  text,
  children,
  className,
  handleClick,
}) => {
  const navigate = useNavigate();

  return (
    <CustomUnstyledButton
      handleClick={() => navigate(href) ?? handleClick}
      className={className}
    >
      {text ?? children}
    </CustomUnstyledButton>
  );
};

export default CustomLink;
