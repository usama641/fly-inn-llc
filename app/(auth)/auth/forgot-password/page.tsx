"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Input } from "antd";
import type { InputRef } from "antd";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { OTPInputField } from "@/components/shared/otp-input";

export default function SignupPage() {
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Yup schema for OTP validation
  const otpSchema = Yup.object().shape({
    otp: Yup.string().required("OTP is required").min(4, "Enter 4 digits"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { otp: "" },
    resolver: yupResolver(otpSchema),
  });

  const onSubmit = (data: { otp: string }) => {
    // TODO: Replace with your OTP verification logic
  };

  return (
    <div className="flex flex-col w-full min-h-screen md:flex-row">
      {/* Left side - Red background with airplane */}
      <div className="relative hidden overflow-hidden bg-red-700 md:flex md:w-1/2">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/airplane-bg-reset.png"
            alt="Airplane"
            fill
            className="object-cover mix-blend-luminosity"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col p-6 md:p-12">
          <h1 className="mb-2 text-2xl font-bold text-white md:mb-4 md:text-5xl">
            Password Reset
          </h1>
          <p className="text-lg text-white md:text-2xl">
            One stop Solution to all your Aviation Needs.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-4 bg-white md:w-1/2 sm:p-6 md:min-h-0">
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

          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:mb-8 md:text-2xl text-start">
            Forgot Password?
          </h2>

          <Form layout="vertical" className="w-full">
            <div className="mb-4 input-container">
              <label className="block mb-1 text-sm floating-label md:text-base">
                Enter your Email Address
              </label>
              <Input className="w-full h-10 custom-input md:h-12" />
            </div>
            <div className="mb-4 text-sm text-gray-700 md:text-base">
              We'll send over an OTP in your Inbox, Use that to Login
            </div>
            <div className="flex justify-center mb-4 md:mb-6">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full  !h-12 px-8 mt-2 text-base text-white bg-red-700 border-none rounded-md md:w-1/2 md:h-12 md:mt-4 md:text-lg hover:bg-red-800"
              >
                Request OTP
              </Button>
            </div>
          </Form>

          <form
            className="w-full mt-6 md:mt-8"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <h1 className="mb-2 text-lg font-bold text-black md:mb-4 md:text-xl">
              Enter OTP
            </h1>
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="otp"
                className="block mb-1 text-base font-medium text-gray-700"
              >
                Enter the 4-digit OTP sent to your email
              </label>
              <Controller
                name="otp"
                control={control}
                render={({ field }) => (
                  <div className="flex justify-center gap-2 md:gap-4">
                    <OTPInputField
                      {...field}
                      size={4}
                      pattern="numeric"
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </div>
                )}
              />
              {errors.otp && (
                <div className="text-danger text-center mt-2 text-sm">
                  {errors.otp.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 text-lg font-semibold bg-red-700 hover:bg-red-800 text-white rounded-md transition-colors duration-200"
            >
              Submit
            </button>

            <div className="text-center mt-4">
              <button
                type="button"
                disabled={isResendDisabled}
                className="text-red-700 h-12 px-8 disabled:opacity-50"
              >
                Request OTP again in{" "}
                {String(Math.floor(timer / 60)).padStart(2, "0")}:
                {String(timer % 60).padStart(2, "0")}
              </button>
            </div>

            <div className="mt-4 text-center md:mt-6">
              <span className="text-gray-700">Don't have an Account? </span>
              <Link
                href="/auth/signup"
                className="font-medium text-red-700 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
