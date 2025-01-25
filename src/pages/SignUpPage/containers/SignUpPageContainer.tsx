import { useRegistration } from "../../../hooks";

import SignUpPageLayout from "../components/SignUpPageLayout";

const SignUpPageContainer = () => {
  const {
    isFormValid,
    formData,
    handleFormFieldChange,
    handleFormSubmit,
  } = useRegistration();

  return (
    <SignUpPageLayout
      isFormValid={isFormValid}
      formData={formData}
      handleFormFieldChange={handleFormFieldChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

export default SignUpPageContainer;
