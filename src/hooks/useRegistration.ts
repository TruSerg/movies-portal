import { useState } from "react";

import { saveUserName, signUpUser } from "../store/signUpSlice";

import { useAppDispatch, useAppSelector } from "./useStoreHooks";
import useLocalStorage from "./useLocalStorage";
import useForm from "./useForm";

const useRegistration = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((state) => state.signUpUser);

  const [key, setKey] = useState("");

  const { formData, handleFormFieldChange, handleFormReset } = useForm({
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  const [user, setUser] = useLocalStorage(key, "");

  const isUserNameValid = formData.userName.toLowerCase().length > 0;
  const isPasswordValid = formData.password.length > 3;
  const isPasswordConfirmValid =
    formData.passwordConfirm.length > 3 &&
    formData.password === formData.passwordConfirm;

  const isFormValid =
    isUserNameValid && isPasswordValid && isPasswordConfirmValid;

  const handleFormSubmit = (e: globalThis.KeyboardEvent) => {
    if (isFormValid) {
      e.preventDefault();

      if (formData.password === formData.passwordConfirm) {
        if (!localStorage.getItem(formData.userName)) {
          setKey(formData.userName);
          setUser(formData.password);

          handleFormReset();
        } else {
          console.log("Вы уже зарегистрированы");
          handleFormReset();
        }
      }
    }
  };

  const logOut = () => {
    dispatch(signUpUser(false));
    dispatch(saveUserName(""));
  };

  const removeAccount = () => {
    localStorage.removeItem(userName);
    dispatch(signUpUser(false));
    dispatch(saveUserName(""));
  };

  return {
    isFormValid,
    user,
    formData,
    handleFormFieldChange,
    handleFormReset,
    handleFormSubmit,
    logOut,
    removeAccount,
  };
};

export default useRegistration;
