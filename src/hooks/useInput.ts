import { ChangeEvent, useState } from "react";

const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    handleInputValueChange,
  };
};
export default useInput;
