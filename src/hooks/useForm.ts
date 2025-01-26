import { useState, useCallback, ChangeEvent } from "react";

const useForm = (initialFormData: any) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isFocus, setIsFocus] = useState(false);

  const handleFormFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((state: any) => {
      const { name, value } = e.target;

      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleFormReset = () => {
    setFormData(initialFormData);
  };

  const checkInputFormBlur = () => {
    setIsFocus(false);
  };

  const checkInputFormFocus = () => {
    setIsFocus(true);
  };

  return {
    isFocus,
    formData,
    handleFormFieldChange,
    handleFormReset,
    checkInputFormBlur,
    checkInputFormFocus,
  };
};

export default useForm;
