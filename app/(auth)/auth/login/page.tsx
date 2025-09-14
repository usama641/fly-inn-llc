"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Input } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useApp } from "../../../../providers/AppMessageProvider";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { message } = useApp();
  const router = useRouter();
  interface LoginFormData {
    email_or_displayname: string;
    password: string;
  }

  const loginSchema = yup.object({
    email_or_displayname: yup
      .string()
      .required("Email or username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email_or_displayname: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);
      setIsLoading(true);

      const result = await signIn("credentials", {
        email_or_displayname: data.email_or_displayname,
        password: data.password,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/dashboard");
        message.success("Login successful! Redirecting...");
      } else {
        message.error(result?.error || "Invalid email or password");
      }
    } catch (error) {
      message.error("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen md:flex-row">
      {/* Left side - Red background with airplane */}
      <div className="relative hidden overflow-hidden bg-red-700 md:flex md:w-1/2">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/airplane-bg.png"
            alt="Airplane"
            fill
            className="object-cover mix-blend-luminosity"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col p-6 md:p-12">
          <h1 className="mb-2 text-2xl font-bold text-white md:mb-4 md:text-5xl">
            Welcome Back!
          </h1>
          <p className="text-lg text-white md:text-2xl">
            One stop Solution to all your Aviation Needs.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
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
            Sign In
          </h2>

          <Button
            type="default"
            size="large"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            icon={<FcGoogle className="mr-2" />}
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Sign in with Google
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

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="mb-3 input-container">
              <label className="block mb-1 text-sm">Email Address</label>
              <Controller
                name="email_or_displayname"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    size="large"
                    className="w-full "
                  />
                )}
              />
              {errors.email_or_displayname && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email_or_displayname.message}
                </p>
              )}
            </div>

            <div className="mb-3 input-container">
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between">
              <Link
                href="/forgot-password"
                className="text-sm text-gray-600 hover:text-red-700"
              >
                Forgot Password?
              </Link>
              <Link
                href="/auth/signup"
                className="text-sm text-gray-600 hover:text-red-700"
              >
                Create Account
              </Link>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full  text-white"
              loading={isLoading}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
