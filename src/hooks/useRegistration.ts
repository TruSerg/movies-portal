import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../routes/routeNames";

import { saveUserName, signUpUser } from "../store/signUpSlice";

import { useAppDispatch, useAppSelector } from "./useStoreHooks";
import useLocalStorage from "./useLocalStorage";
import useForm from "./useForm";
import useModal from "./useModal";

const useRegistration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [key, setKey] = useState("");
  const [user, setUser] = useLocalStorage(key, "");

  const { isAuth, userName } = useAppSelector((state) => state.signUpUser);

  const { formData, handleFormFieldChange, handleFormReset } = useForm({
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

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

          handleModalOpen();
        } else {
          setErrorMessage("У вас уже есть аккаунт!");

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

  const handleGoToRegistration = () => {
    navigate(ROUTES.SIGNUP_PAGE);
  };

  const handleGoToSignIn = () => {
    navigate(ROUTES.SIGNIN_PAGE);
  };

  const handleModalOpenToRegistration = () => {
    if (!isAuth) {
      handleModalOpen();
    }
  };

  return {
    isModalOpen,
    isUserNameValid,
    isPasswordValid,
    isPasswordConfirmValid,
    isFormValid,
    errorMessage,
    user,
    formData,
    handleFormFieldChange,
    handleFormReset,
    handleFormSubmit,
    logOut,
    removeAccount,
    handleGoToRegistration,
    handleGoToSignIn,
    handleModalOpenToRegistration,
    handleModalClose,
  };
};

export default useRegistration;
