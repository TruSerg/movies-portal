import { useEffect } from "react";

import { changeErrorMessage } from "../../../store/signUpSlice";

import { useForm, useRegistration, useVisible } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";

import SignUpPageLayout from "../components/SignUpPageLayout";

const SignUpPageContainer = () => {
  const dispatch = useAppDispatch();

  const { errorMessage } = useAppSelector((state) => state.signUpUser);

  const {
    isFormValid,
    isUserNameValid,
    isPasswordValid,
    isPasswordConfirmValid,
    isModalOpen,
    formData,
    handleFormFieldChange,
    handleFormSubmit,
    handleModalClose,
    handleGoToSignIn,
  } = useRegistration();

  const { isVisible, handleVisible, handleHidden } = useVisible();
  const {
    isInputNameFocus,
    isInputPasswordFocus,
    isInputConfirmPasswordFocus,
    checkInputNameBlur,
    checkInputPasswordBlur,
    checkInputConfirmPasswordBlur,
  } = useForm(null);

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
    <SignUpPageLayout
      isVisible={isVisible}
      isFormValid={isFormValid}
      isUserNameValid={isUserNameValid}
      isPasswordValid={isPasswordValid}
      isPasswordConfirmValid={isPasswordConfirmValid}
      isModalOpen={isModalOpen}
      errorMessage={errorMessage}
      formData={formData}
      isInputNameFocus={isInputNameFocus}
      isInputPasswordFocus={isInputPasswordFocus}
      isInputConfirmPasswordFocus={isInputConfirmPasswordFocus}
      handleFormFieldChange={handleFormFieldChange}
      handleFormSubmit={handleFormSubmit}
      handleModalClose={handleModalClose}
      handleGoToSignIn={handleGoToSignIn}
      checkInputNameBlur={checkInputNameBlur}
      checkInputPasswordBlur={checkInputPasswordBlur}
      checkInputConfirmPasswordBlur={checkInputConfirmPasswordBlur}
    />
  );
};

export default SignUpPageContainer;
