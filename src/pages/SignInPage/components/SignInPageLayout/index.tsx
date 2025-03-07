import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../../routes/routeNames";

import { ISignUpFormData } from "../../../../interfaces/signUpUserInterfaces";

import CustomButton from "../../../../components/Buttons/CustomButton";
import CustomForm from "../../../../components/CustomForm";
import FormInput from "../../../../components/Inputs/FormInputs/InputText";
import Heading from "../../../../components/Heading";
import InputPassword from "../../../../components/Inputs/FormInputs/InputPassword";

interface SignInPageLayoutProps {
  isVisible: boolean;
  isFormValid: boolean;
  isUserNameValid: boolean;
  isPasswordValid: boolean;
  isInputNameFocus: boolean;
  isInputPasswordFocus: boolean;

  errorMessage: string;
  formData: ISignUpFormData;
  handleFormFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: globalThis.KeyboardEvent) => void;
  checkInputNameBlur: () => void;
  checkInputPasswordBlur: () => void;
}
const SignInPageLayout: FC<SignInPageLayoutProps> = ({
  isVisible,
  isFormValid,
  isUserNameValid,
  isPasswordValid,
  isInputNameFocus,
  isInputPasswordFocus,
  errorMessage,
  formData,
  handleFormFieldChange,
  handleFormSubmit,
  checkInputNameBlur,
  checkInputPasswordBlur,
}) => {
  return (
    <main className="m-auto flex min-h-[80vh] w-full max-w-[1010px] flex-col items-center justify-center pb-10 pl-[15px] pr-[15px] pt-10 xl:pb-5 xl:pt-5 lg:text-[28px] sm:text-[24px]">
      <CustomForm
        id="SignUpForm"
        handleSubmit={handleFormSubmit}
        className="mb-2 flex w-full max-w-[450px] flex-col justify-center gap-5 rounded-md border border-solid border-purple-300 p-5 sm:p-3"
      >
        <Heading
          text="Вход"
          className="mb-4 text-center text-[28px] font-bold lg:mb-3 lg:text-[24px] sm:mb-2 sm:text-[22px]"
        />

        {isVisible && <span className="text-red-500">{errorMessage}</span>}

        <FormInput
          value={formData.userName}
          name="userName"
          type="text"
          label="Имя"
          error={
            isInputNameFocus ? (isUserNameValid ? "" : "Заполните поле!") : ""
          }
          placeholder="Имя..."
          handleChange={handleFormFieldChange}
          handleBlur={checkInputNameBlur}
        />
        <InputPassword
          value={formData.password}
          name="password"
          type="password"
          label="Пароль"
          error={
            isInputPasswordFocus
              ? isPasswordValid
                ? ""
                : "Пароль должен иметь не менее трёх символов!"
              : ""
          }
          placeholder="Пароль..."
          handleChange={handleFormFieldChange}
          handleBlur={checkInputPasswordBlur}
        />
        <CustomButton
          form="SignUpForm"
          type="submit"
          color="#c084fc"
          variant="outline"
          radius="md"
          disabled={!isFormValid}
          className="h-10 w-full transition delay-150 ease-in-out sm:h-9 sm:text-sm"
        >
          Войти
        </CustomButton>
      </CustomForm>

      <p className="text-center text-base text-gray-500 sm:text-sm">
        Нет аккаунта?{" "}
        <Link
          className="text-purple-500 transition-colors delay-150 ease-in-out hover:text-purple-700"
          to={ROUTES.SIGNUP_PAGE}
        >
          Регистрация
        </Link>
      </p>
    </main>
  );
};

export default SignInPageLayout;
