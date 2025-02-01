import { useContext } from "react";
import { ActionIcon } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { ThemeContext } from "../../../context/ThemeContext";
import { useResize } from "../../../hooks";

const ThemeModeButton = () => {
  const { isScreenSm } = useResize();
  const { isDarkMode, handleDarkModeChange } = useContext(ThemeContext);

  return (
    <ActionIcon
      onClick={handleDarkModeChange}
      variant="default"
      size={isScreenSm ? "lg": "xl"}
      aria-label="Toggle color scheme"
    >
      {isDarkMode ? (
        <IconSun className="h-[22px] w-[22px] sm:h-[18px]" stroke={1.5} />
      ) : (
        <IconMoon className="h-[22px] w-[22px] sm:h-[18px]" stroke={1.5} />
      )}
    </ActionIcon>
  );
};

export default ThemeModeButton;
