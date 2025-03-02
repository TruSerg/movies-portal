import { useState, ChangeEvent } from "react";

const useForm = (initialFormData: any) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isInputNameFocus, setIsInputNameFocus] = useState(false);
  const [isInputPasswordFocus, setIsInputPasswordFocus] = useState(false);
  const [isInputConfirmPasswordFocus, setIsInputConfirmPasswordFocus] =
    useState(false);

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

  const checkInputNameBlur = () => {
    setIsInputNameFocus(true);
  };

  const checkInputPasswordBlur = () => {
    setIsInputPasswordFocus(true);
  };

  const checkInputConfirmPasswordBlur = () => {
    setIsInputConfirmPasswordFocus(true);
  };

  return {
    formData,
    isInputNameFocus,
    isInputPasswordFocus,
    isInputConfirmPasswordFocus,
    checkInputNameBlur,
    checkInputPasswordBlur,
    checkInputConfirmPasswordBlur,
    handleFormFieldChange,
    handleFormReset,
  };
};

export default useForm;
