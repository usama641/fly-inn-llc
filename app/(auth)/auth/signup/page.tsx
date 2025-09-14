"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Input, Checkbox } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useApp } from "../../../../providers/AppMessageProvider";
import { useApiMutation } from "../../../../http-service";
import { useRouter } from "next/navigation";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

const defaultValues = {
  user_name: "",
  email: "",
  password: "",
  password_confirm: "",
  termsAgreed: false,
  newsletter: false,
};
const SignupPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { message } = useApp();
  const router = useRouter();
  const signupSchema = yup.object({
    user_name: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*]/,
        "Password must contain at least one special character (!, @, #, $, %, ^, &, *)"
      ),
    password_confirm: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
    termsAgreed: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
    phone: yup
      .string()
      .required("Cell phone number is required")
      .test(
        "is-valid-phone",
        "The phone number is incomplete or invalid. Please check your entry",
        (value) => {
          // If value is null, undefined, or empty string,
          // let the 'required' rule handle it.
          if (!value) {
            return true;
          }
          // Explicitly return boolean result of validation functions
          return isPossiblePhoneNumber(value) && isValidPhoneNumber(value);
        }
      ),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(signupSchema),
    defaultValues,
  });

  const {
    mutate: registerUser,
    isPending,
    isError: isAddError,
    error: addError,
  } = useApiMutation<any>({
    endpoint: `/auth/sign-up`,
    method: "post",
    config: {
      onSuccess: (res: any) => {
        message.success("Account created successfully!");
        reset(defaultValues);
        router.push("/auth/login");
      },
      onError: (res: any) => {
        console.log({ res });
        message.error(
          res?.response?.data?.message ||
            "An error occurred during signup. Please try again."
        );
      },
    },
  });

  const onSubmit = async (data: any) => {
    const { termsAgreed, newsletter, ...rest } = data;
    registerUser(rest);
  };

  return (
    <div className="flex flex-col w-full min-h-screen md:flex-row">
      {/* Left side - Red background with airplane */}
      <div className="relative hidden overflow-hidden bg-red-700 md:flex md:w-1/2">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/airplane-bg-signup.png"
            alt="Airplane"
            fill
            className="object-cover mix-blend-luminosity"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col p-6 md:p-12">
          <h1 className="mb-2 text-2xl font-bold text-white md:mb-4 md:text-5xl">
            Ready for Take Off?
          </h1>
          <p className="text-lg text-white md:text-2xl">
            One stop Solution to all your Aviation Needs.
          </p>
        </div>
      </div>

      {/* Right side - Signup form */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 bg-white md:w-1/2 sm:p-6">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/assets/images/FlyInn Logo.png"
              alt="FLY-INN Logo"
              width={160}
              height={80}
              className="w-32 h-auto md:w-48"
            />
          </div>

          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:mb-8 md:text-3xl text-start">
            Sign Up
          </h2>

          <Button
            type="default"
            size="large"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            icon={<FcGoogle className="mr-2" />}
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Continue with Google
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <div className="input-container">
              <label className="block mb-1 text-sm">Username</label>
              <Controller
                name="user_name"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" className="w-full" />
                )}
              />
              {errors.user_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.user_name.message?.toString()}
                </p>
              )}
            </div>

            <div className="input-container">
              <label className="block mb-1 text-sm">Email Address</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    size="large"
                    className="w-full"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>

            <Controller
              name="phone"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className="flex flex-col" id="phone">
                  <PhoneInput
                    placeholder="Enter phone number"
                    defaultCountry="US"
                    value={value}
                    international={false}
                    countryCallingCodeEditable={false}
                    withCountryCallingCode={true}
                    initialValueFormat="national"
                    onChange={(value) => {
                      onChange(value);
                    }}
                    className={` border h-10 pl-2.5 rounded-[8px] border-[#d9d9d9] text-base border-solid`} // Removing outline and focus ring
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message?.toString()}
                    </p>
                  )}
                </div>
              )}
            />

            <div className="input-container">
              <label className="block mb-1 text-sm">Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    iconRender={(visible) =>
                      visible ? <EyeInvisibleOutlined /> : <EyeOutlined />
                    }
                    visibilityToggle={{ visible: passwordVisible }}
                    onChange={(e) => {
                      field.onChange(e);
                      setPasswordVisible(false);
                    }}
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message?.toString()}
                </p>
              )}
            </div>

            <div className="input-container">
              <label className="block mb-1 text-sm">Confirm Password</label>
              <Controller
                name="password_confirm"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    iconRender={(visible) =>
                      visible ? <EyeInvisibleOutlined /> : <EyeOutlined />
                    }
                    visibilityToggle={{ visible: confirmPasswordVisible }}
                    onChange={(e) => {
                      field.onChange(e);
                      setConfirmPasswordVisible(false);
                    }}
                  />
                )}
              />
              {errors.password_confirm && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password_confirm.message?.toString()}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3  mt-4">
              <div>
                <Controller
                  name="termsAgreed"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-start">
                      <Checkbox
                        {...field}
                        checked={field.value}
                        onChange={field.onChange}
                        id="terms-agreed"
                      />
                      <label
                        htmlFor="terms-agreed"
                        className="ml-2 text-xs text-gray-700 md:text-sm cursor-pointer"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-red-700 hover:underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-red-700 hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  )}
                />
                {errors.termsAgreed && (
                  <p className="text-red-500 text-xs ">
                    {errors.termsAgreed.message?.toString()}
                  </p>
                )}
              </div>

              <Controller
                name="newsletter"
                control={control}
                render={({ field }) => (
                  <div className="flex items-start">
                    <Checkbox
                      {...field}
                      checked={field.value}
                      onChange={field.onChange}
                      id="newsletter"
                    />
                    <label
                      htmlFor="newsletter"
                      className="ml-2 text-xs text-gray-700 md:text-sm cursor-pointer"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>
                )}
              />
            </div>

            <div className="flex justify-center mt-6">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full  text-white"
                loading={isPending}
              >
                Create my Account
              </Button>
            </div>

            <div className="mt-4 text-center">
              <span className="text-gray-700">Already have an Account? </span>
              <Link
                href="/auth/login"
                className=" text-red-700 hover:underline"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
