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
  const { isFocus, checkInputFormBlur, checkInputFormFocus } = useForm(null);

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
      isModalOpen={isModalOpen}
      isFocus={isFocus}
      isVisible={isVisible}
      isFormValid={isFormValid}
      isUserNameValid={isUserNameValid}
      isPasswordValid={isPasswordValid}
      isPasswordConfirmValid={isPasswordConfirmValid}
      errorMessage={errorMessage}
      formData={formData}
      handleFormFieldChange={handleFormFieldChange}
      handleFormSubmit={handleFormSubmit}
      checkInputFormBlur={checkInputFormBlur}
      checkInputFormFocus={checkInputFormFocus}
      handleModalClose={handleModalClose}
      handleGoToSignIn={handleGoToSignIn}
    />
  );
};

export default SignUpPageContainer;
