import { useState } from "react";

const useVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(true);
  };

  const handleHidden = () => {
    setIsVisible(false);
  };

  return { isVisible, handleVisible, handleHidden };
};

export default useVisible;
