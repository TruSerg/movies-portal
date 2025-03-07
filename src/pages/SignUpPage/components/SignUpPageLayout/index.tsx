import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mantine/core";

import { ROUTES } from "../../../../routes/routeNames";

import { ISignUpFormData } from "../../../../interfaces/signUpUserInterfaces";

import CustomButton from "../../../../components/Buttons/CustomButton";
import CustomForm from "../../../../components/CustomForm";
import FormInput from "../../../../components/Inputs/FormInputs/InputText";
import Heading from "../../../../components/Heading";
import InputPassword from "../../../../components/Inputs/FormInputs/InputPassword";
import CustomModal from "../../../../components/Modal";
import CustomUnstyledButton from "../../../../components/Buttons/UnstyledButton";

interface SignUpPageLayoutProps {
  isVisible: boolean;
  isFormValid: boolean;
  isUserNameValid: boolean;
  isPasswordValid: boolean;
  isPasswordConfirmValid: boolean;
  isModalOpen: boolean;
  isInputNameFocus: boolean;
  isInputPasswordFocus: boolean;
  isInputConfirmPasswordFocus: boolean;
  errorMessage: string;
  formData: ISignUpFormData;
  handleFormFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: globalThis.KeyboardEvent) => void;
  handleModalClose: () => void;
  handleGoToSignIn: () => void;
  checkInputNameBlur: () => void;
  checkInputPasswordBlur: () => void;
  checkInputConfirmPasswordBlur: () => void;
}

const SignUpPageLayout: FC<SignUpPageLayoutProps> = ({
  isVisible,
  isFormValid,
  isUserNameValid,
  isPasswordValid,
  isPasswordConfirmValid,
  isModalOpen,
  isInputNameFocus,
  isInputPasswordFocus,
  isInputConfirmPasswordFocus,
  errorMessage,
  formData,
  handleFormFieldChange,
  handleFormSubmit,
  handleModalClose,
  handleGoToSignIn,
  checkInputNameBlur,
  checkInputPasswordBlur,
  checkInputConfirmPasswordBlur,
}) => {
  return (
    <>
      <main className="m-auto flex min-h-[80vh] w-full max-w-[1010px] flex-col items-center justify-center pb-10 pl-[15px] pr-[15px] pt-10 xl:pb-5 xl:pt-5 lg:text-[28px] sm:text-[24px]">
        <CustomForm
          id="SignUpForm"
          handleSubmit={handleFormSubmit}
          className="mb-2 flex w-full max-w-[450px] flex-col justify-center gap-5 rounded-md border border-solid border-purple-300 p-5 sm:p-3"
        >
          <Heading
            text="Регистрация"
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
          <InputPassword
            value={formData.passwordConfirm}
            name="passwordConfirm"
            type="password"
            label="Подтвердить пароль"
            error={
              isInputConfirmPasswordFocus
                ? isPasswordConfirmValid
                  ? ""
                  : "Пароли не совпадают!"
                : ""
            }
            placeholder="Подтвердить пароль..."
            handleChange={handleFormFieldChange}
            handleBlur={checkInputConfirmPasswordBlur}
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

      <CustomModal
        opened={isModalOpen}
        handleClose={handleModalClose}
        title="Поздравляем!"
      >
        <Box className="border-gray border-t pt-3">
          <Heading
            text="Вы успешно авторизовались!"
            className="mb-4 text-[18px] font-bold lg:text-[16px] sm:mb-3 sm:text-[14px]"
          />
        </Box>

        <CustomUnstyledButton
          handleClick={handleGoToSignIn}
          className="w-full rounded-lg pb-[10px] pl-[20px] pr-[20px] pt-[10px] text-center text-base text-purple-500 transition-all delay-150 ease-in-out hover:bg-purple-500 hover:text-white"
        >
          Войти
        </CustomUnstyledButton>
      </CustomModal>
    </>
  );
};

export default SignUpPageLayout;
