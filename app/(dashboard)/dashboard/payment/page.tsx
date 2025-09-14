"use client";

import { Button, Input, Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  cardholderName: yup.string().required("Cardholder name is required"),
  cardNumber: yup
    .string()
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiryDate: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format MM/YY")
    .required("Expiry date is required"),
  cvc: yup
    .string()
    .matches(/^[0-9]{3,4}$/, "CVC must be 3 or 4 digits")
    .required("CVC is required"),
});

type FormValues = yup.InferType<typeof schema>;

const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1-");

const formatExpiry = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 4)
    .replace(/(\d{2})(\d{1,2})/, "$1/$2");

const formatCVC = (value: string) => value.replace(/\D/g, "").slice(0, 4);

const FormField = ({
  name,
  label,
  control,
  placeholder,
  maxLength,
  format,
  errors,
}: {
  name: keyof FormValues;
  label: string;
  control: any;
  placeholder: string;
  maxLength?: number;
  format?: (value: string) => string;
  errors: any;
}) => (
  <div className="flex flex-col gap-2 w-full">
    <p className="text-sm font-medium text-gray-900">{label} :</p>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          placeholder={placeholder}
          className="h-11"
          maxLength={maxLength}
          onChange={(e) =>
            field.onChange(format ? format(e.target.value) : e.target.value)
          }
        />
      )}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs">{errors[name]?.message}</p>
    )}
  </div>
);

export default function PaymentMethod() {
  const [newPaymentModal, setNewPaymentModal] = useState(false);
  const [viewPaymentModal, setViewPaymentModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Payment Data", data);
    setNewPaymentModal(false);
  };

  const renderField = (title: string, value: string) => (
    <div className="flex gap-2 items-center">
      <p className="text-base font-medium text-gray-900">{title} :</p>
      <p className="text-sm font-medium text-gray-500">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-6 relative">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Payment Methods
        </h1>

        <div className="relative max-w-[500px] p-8 bg-white border border-[#C0BFBF] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.25)] rounded-[10px]">
          {/* Action Icons */}
          <div
            onClick={() => {
              setViewPaymentModal(!viewPaymentModal);
            }}
            className="flex gap-2 items-center absolute top-4 right-4"
          >
            <FaEye size={16} className="cursor-pointer hover:text-blue-500" />
            <FaTrashAlt
              size={14}
              className="cursor-pointer hover:text-red-500"
            />
          </div>

          <div className="flex items-center gap-6">
            <Image
              src="/assets/images/stripe.jpg"
              alt="Stripe"
              width={124}
              height={84}
              className="object-contain rounded-lg"
              priority
            />
            <div className="flex flex-col gap-4">
              {renderField("Card Holder Name", "John Doe")}
              {renderField("Card Number", "1234 - **** - **** - 5678")}
              <div className="flex gap-8">
                {renderField("Expiry Date", "12/26")}
                {renderField("CVC", "123")}
              </div>
            </div>
          </div>

          <Modal
            title={
              <span className="text-xl font-semibold font-serif text-black">
                Add Payment Method
              </span>
            }
            open={newPaymentModal}
            onCancel={() => setNewPaymentModal(false)}
            footer={null}
            width={900}
            centered
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 mt-8"
            >
              <FormField
                name="cardholderName"
                label="Cardholder Name"
                control={control}
                placeholder="Enter cardholder name"
                errors={errors}
              />
              <FormField
                name="cardNumber"
                label="Card Number"
                control={control}
                placeholder="1234-5678-9012-3456"
                maxLength={19}
                format={formatCardNumber}
                errors={errors}
              />
              <div className="flex gap-4">
                <FormField
                  name="expiryDate"
                  label="Expiry Date"
                  control={control}
                  placeholder="MM/YY"
                  maxLength={5}
                  format={formatExpiry}
                  errors={errors}
                />
                <FormField
                  name="cvc"
                  label="CVC"
                  control={control}
                  placeholder="123"
                  maxLength={4}
                  format={formatCVC}
                  errors={errors}
                />
              </div>

              <div className="flex justify-center w-full">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="bg-[#CE2029] px-6 py-5 font-medium text-md"
                >
                  Add Payment Method
                </Button>
              </div>
            </form>
          </Modal>

          <Modal
            title={
              <span className="text-xl font-semibold font-serif text-black">
                View Payment Method
              </span>
            }
            open={viewPaymentModal}
            onCancel={() => setViewPaymentModal(false)}
            footer={null}
            width={550}
            centered
          >
            <div className="flex items-center justify-between border border-[#C0BFBF] rounded-md p-4 mt-8">
              <Image
                src="/assets/images/stripe.jpg"
                alt="Stripe"
                width={160}
                height={100}
                className="object-contain rounded-lg "
                priority
              />
              <div className="flex flex-col gap-8 p-4">
                {renderField("Card Holder Name", "John Doe")}
                {renderField("Card Number", "1234 - **** - **** - 5678")}
                <div className="flex gap-8">
                  {renderField("Expiry Date", "12/26")}
                  {renderField("CVC", "123")}
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-4 w-full mt-4">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="bg-[#CE2029] px-6 py-5 font-medium text-md w-full"
              >
                Delete Method
              </Button>
              <Button
                onClick={() => setViewPaymentModal(false)}
                type="primary"
                size="large"
                htmlType="submit"
                className="bg-[#CE2029] px-6 py-5 font-medium text-md w-full"
              >
                Close
              </Button>
            </div>
          </Modal>
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          onClick={() => setNewPaymentModal(true)}
          type="primary"
          size="large"
          className="bg-[#CE2029] px-6 py-5 font-medium text-md"
        >
          Add Payment Method
        </Button>
      </div>
    </div>
  );
}
