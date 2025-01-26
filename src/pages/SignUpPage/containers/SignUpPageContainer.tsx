import { useForm, useRegistration, useVisible } from "../../../hooks";

import SignUpPageLayout from "../components/SignUpPageLayout";

const SignUpPageContainer = () => {
  const {
    isFormValid,
    isUserNameValid,
    isPasswordValid,
    isPasswordConfirmValid,
    isModalOpen,
    errorMessage,
    formData,
    handleFormFieldChange,
    handleFormSubmit,
    handleModalClose,
    handleGoToSignIn,
  } = useRegistration();

  const { isFocus, checkInputFormBlur, checkInputFormFocus } = useForm(null);
  const { isVisible } = useVisible(errorMessage);

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
