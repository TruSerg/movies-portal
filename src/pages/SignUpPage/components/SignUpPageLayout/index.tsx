import { ChangeEvent, FC } from "react";

import { ISignUpFormData } from "../../../../interfaces/signUpUserInterfaces";

import CustomButton from "../../../../components/Buttons/CustomButton";
import CustomForm from "../../../../components/CustomForm";
import FormInput from "../../../../components/Inputs/FormInputs/InputText";
import Heading from "../../../../components/Heading";
import InputPassword from "../../../../components/Inputs/FormInputs/InputPassword";

interface SignUpPageLayoutProps {
  isFormValid: boolean;
  formData: ISignUpFormData;
  handleFormFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: globalThis.KeyboardEvent) => void;
}

const SignUpPageLayout: FC<SignUpPageLayoutProps> = ({
  isFormValid,
  formData,
  handleFormFieldChange,
  handleFormSubmit,
}) => {
  return (
    <main className="m-auto flex min-h-[80vh] w-full max-w-[1010px] items-center justify-center pb-10 pl-[15px] pr-[15px] pt-10 xl:pb-5 xl:pt-5 lg:text-[28px] sm:text-[24px]">
      <CustomForm
        id="SignUpForm"
        handleSubmit={handleFormSubmit}
        className="flex w-full max-w-[450px] flex-col justify-center gap-5 rounded-md border border-solid border-purple-300 p-5"
      >
        <Heading
          text="Регистрация"
          className="mb-5 text-center text-[28px] font-bold"
        />
        <FormInput
          value={formData.userName}
          name="userName"
          type="text"
          label="Имя"
          placeholder="Имя..."
          handleChange={handleFormFieldChange}
        />
        <InputPassword
          value={formData.password}
          name="password"
          type="password"
          label="Пароль"
          placeholder="Пароль..."
          handleChange={handleFormFieldChange}
        />
        <InputPassword
          value={formData.passwordConfirm}
          name="passwordConfirm"
          type="password"
          label="Подтвердить пароль"
          placeholder="Подтвердить пароль..."
          handleChange={handleFormFieldChange}
        />
        <CustomButton
          form="SignUpForm"
          type="submit"
          color="#c084fc"
          variant="outline"
          radius="md"
          disabled={!isFormValid}
          className="h-10 w-full transition delay-150 ease-in-out lg:h-8 sm:h-7 sm:max-w-[70px] sm:text-sm"
        >
          Зарегистрироваться
        </CustomButton>
      </CustomForm>
    </main>
  );
};

export default SignUpPageLayout;
