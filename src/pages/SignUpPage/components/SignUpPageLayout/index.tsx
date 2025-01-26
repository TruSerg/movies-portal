import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../../routes/routeNames";

import { ISignUpFormData } from "../../../../interfaces/signUpUserInterfaces";

import CustomButton from "../../../../components/Buttons/CustomButton";
import CustomForm from "../../../../components/CustomForm";
import FormInput from "../../../../components/Inputs/FormInputs/InputText";
import Heading from "../../../../components/Heading";
import InputPassword from "../../../../components/Inputs/FormInputs/InputPassword";

interface SignUpPageLayoutProps {
  isFocus: boolean;
  isFormValid: boolean;
  isUserNameValid: boolean;
  isPasswordValid: boolean;
  isPasswordConfirmValid: boolean;
  formData: ISignUpFormData;
  handleFormFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: globalThis.KeyboardEvent) => void;
  checkInputFormBlur: () => void;
  checkInputFormFocus: () => void;
}

const SignUpPageLayout: FC<SignUpPageLayoutProps> = ({
  isFocus,
  isFormValid,
  isUserNameValid,
  isPasswordValid,
  isPasswordConfirmValid,
  formData,
  handleFormFieldChange,
  handleFormSubmit,
  checkInputFormBlur,
  checkInputFormFocus,
}) => {
  return (
    <main className="m-auto flex min-h-[80vh] w-full max-w-[1010px] flex-col items-center justify-center pb-10 pl-[15px] pr-[15px] pt-10 xl:pb-5 xl:pt-5 lg:text-[28px] sm:text-[24px]">
      <CustomForm
        id="SignUpForm"
        handleSubmit={handleFormSubmit}
        className="mb-2 flex w-full max-w-[450px] flex-col justify-center gap-5 rounded-md border border-solid border-purple-300 p-5 sm:p-3"
      >
        <Heading
          text="Регистрация"
          className="mb-5 text-center text-[28px] font-bold lg:mb-3 lg:text-[24px] sm:mb-2 sm:text-[22px]"
        />
        <FormInput
          value={formData.userName}
          name="userName"
          type="text"
          label="Имя"
          error={isFocus ? (isUserNameValid ? "" : "Заполните поле!") : ""}
          placeholder="Имя..."
          handleChange={handleFormFieldChange}
          handleBlur={checkInputFormBlur}
          handleFocus={checkInputFormFocus}
        />
        <InputPassword
          value={formData.password}
          name="password"
          type="password"
          label="Пароль"
          error={
            isFocus
              ? isPasswordValid
                ? ""
                : "Пароль должен иметь не менее трёх символов!"
              : ""
          }
          placeholder="Пароль..."
          handleChange={handleFormFieldChange}
          handleBlur={checkInputFormBlur}
          handleFocus={checkInputFormFocus}
        />
        <InputPassword
          value={formData.passwordConfirm}
          name="passwordConfirm"
          type="password"
          label="Подтвердить пароль"
          error={
            isFocus
              ? isPasswordConfirmValid
                ? ""
                : "Пароли не совпадают!"
              : ""
          }
          placeholder="Подтвердить пароль..."
          handleChange={handleFormFieldChange}
          handleBlur={checkInputFormBlur}
          handleFocus={checkInputFormFocus}
        />
        <CustomButton
          form="SignUpForm"
          type="submit"
          color="#c084fc"
          variant="outline"
          radius="md"
          disabled={!isFormValid}
          className="h-10 w-full transition delay-150 ease-in-out lg:h-8 sm:h-7 sm:text-sm"
        >
          Зарегистрироваться
        </CustomButton>
      </CustomForm>

      <p className="text-center text-base text-gray-500 sm:text-sm">
        Уже есть аккаунт?{" "}
        <Link
          className="text-purple-500 transition-colors delay-150 ease-in-out hover:text-purple-700"
          to={ROUTES.SIGNIN_PAGE}
        >
          Войти
        </Link>
      </p>
    </main>
  );
};

export default SignUpPageLayout;
