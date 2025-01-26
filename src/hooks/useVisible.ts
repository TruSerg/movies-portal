import { ReactNode, useEffect, useState } from "react";

const useVisible = (value: ReactNode) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(true);
  };

  const handleHidden = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (value) {
      handleVisible();
    }

    const errorBlockVisibleTimeout = setTimeout(() => {
      handleHidden();
    }, 5000);

    return () => clearTimeout(errorBlockVisibleTimeout);
  }, [value]);

  return { isVisible, handleVisible, handleHidden };
};

export default useVisible;
