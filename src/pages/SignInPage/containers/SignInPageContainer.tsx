import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../routes/routeNames";

import {
  changeErrorMessage,
  saveUserName,
  signUpUser,
} from "../../../store/signUpSlice";

import { useForm, useVisible } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";

import SignInPageLayout from "../components/SignInPageLayout";

const SignInPageContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { errorMessage } = useAppSelector((state) => state.signUpUser);

  const { isVisible, handleVisible, handleHidden } = useVisible();
  const {
    isFocus,
    formData,
    handleFormFieldChange,
    handleFormReset,
    checkInputFormBlur,
    checkInputFormFocus,
  } = useForm({
    userName: "",
    password: "",
  });

  const isUserNameValid = formData.userName.toLowerCase().length > 0;
  const isPasswordValid = formData.password.length > 3;

  const isFormValid = isUserNameValid && isPasswordValid;

  const handleFormSubmit = (e: globalThis.KeyboardEvent) => {
    if (isFormValid) {
      e.preventDefault();

      if (localStorage.getItem(formData.userName)) {
        console.log(localStorage.getItem(formData.userName)?.toLowerCase());

        const userPasswordFromLc = localStorage
          .getItem(formData.userName)
          ?.replace(/["]/g, "");

        const currentUserPassword = formData.password;

        if (userPasswordFromLc === currentUserPassword) {
          dispatch(signUpUser(true));
          dispatch(saveUserName(formData.userName));

          handleFormReset();

          navigate(ROUTES.HOME_PAGE);
        } else {
          dispatch(changeErrorMessage("Неправильно введён пароль!"));
        }
      } else {
        dispatch(changeErrorMessage("Пользователь с таким именем не найден!"));
      }
    }
  };

  useEffect(() => {
    if (errorMessage) {
      handleVisible();
    }

    const errorBlockVisibleTimeout = setTimeout(() => {
      dispatch(changeErrorMessage(""));

      handleHidden();
    }, 5000);

    return () => clearTimeout(errorBlockVisibleTimeout);
  }, [dispatch, errorMessage]);

  return (
    <SignInPageLayout
      isFocus={isFocus}
      isVisible={isVisible}
      isFormValid={isFormValid}
      isUserNameValid={isUserNameValid}
      isPasswordValid={isPasswordValid}
      errorMessage={errorMessage}
      formData={formData}
      handleFormFieldChange={handleFormFieldChange}
      handleFormSubmit={handleFormSubmit}
      checkInputFormBlur={checkInputFormBlur}
      checkInputFormFocus={checkInputFormFocus}
    />
  );
};

export default SignInPageContainer;
