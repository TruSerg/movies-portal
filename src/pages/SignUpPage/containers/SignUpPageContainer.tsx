import { useForm, useRegistration } from "../../../hooks";

import SignUpPageLayout from "../components/SignUpPageLayout";

const SignUpPageContainer = () => {
  const {
    isFormValid,
    isUserNameValid,
    isPasswordValid,
    isPasswordConfirmValid,
    formData,
    handleFormFieldChange,
    handleFormSubmit,
  } = useRegistration();

  const { isFocus, checkInputFormBlur, checkInputFormFocus } = useForm({});

  return (
    <SignUpPageLayout
      isFocus={isFocus}
      isFormValid={isFormValid}
      isUserNameValid={isUserNameValid}
      isPasswordValid={isPasswordValid}
      isPasswordConfirmValid={isPasswordConfirmValid}
      formData={formData}
      handleFormFieldChange={handleFormFieldChange}
      handleFormSubmit={handleFormSubmit}
      checkInputFormBlur={checkInputFormBlur}
      checkInputFormFocus={checkInputFormFocus}
    />
  );
};

export default SignUpPageContainer;
