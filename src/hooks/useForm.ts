import { useState, useCallback, ChangeEvent } from "react";

const useForm = (initialFormData: any) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((state: any) => {
      const { name, value } = e.target;

      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleFormReset = useCallback(() => {
    setFormData(initialFormData);
  }, [initialFormData]);

  return { formData, handleFormFieldChange, handleFormReset };
};

export default useForm;
