"use client";

import React, { useState, ChangeEvent } from "react";
import { Input, Select, Button } from "antd";
import NewsletterSection from "../../_components/newsletter-section";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Option } = Select;

type FloatingLabelInputProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
};

const FloatingLabelInput = ({
  label,
  value,
  onChange,
  ...props
}: FloatingLabelInputProps) => (
  <div className="relative mb-2">
    <input
      {...props}
      value={value}
      onChange={onChange}
      className="block w-full px-3 pt-6 pb-2 text-base bg-transparent border border-gray-300 rounded appearance-none focus:outline-none focus:border-[#b71c1c] peer"
      placeholder=" "
    />
    <label
      className={`absolute left-2 top-2 px-1 !bg-white z-20 text-gray-500 duration-200 transform origin-top-left pointer-events-none
        peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-[#b71c1c] peer-focus:font-bold
        ${value ? "-translate-y-5 scale-90 text-[#b71c1c] font-bold" : ""}`}
      style={{
        fontSize: value ? "0.85rem" : "1rem",
        background:
          value || props.type === "password" ? "white" : "transparent",
      }}
    >
      {label}
    </label>
  </div>
);

type FloatingLabelTextAreaProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
};

const FloatingLabelTextArea = ({
  label,
  value,
  onChange,
  ...props
}: FloatingLabelTextAreaProps) => (
  <div className="relative mb-2">
    <textarea
      {...props}
      value={value}
      onChange={onChange}
      className="block w-full px-3 pt-6 pb-2 text-base bg-transparent border border-gray-300 rounded appearance-none focus:outline-none focus:border-[#b71c1c] peer resize-none"
      placeholder=" "
    />
    <label
      className={`absolute left-2 top-2 px-1 !bg-white z-20 text-gray-500 duration-200 transform origin-top-left pointer-events-none
        peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-[#b71c1c] peer-focus:font-bold
        ${value ? "-translate-y-5 scale-90 text-[#b71c1c] font-bold" : ""}`}
      style={{
        fontSize: value ? "0.85rem" : "1rem",
        background: value ? "white" : "transparent",
      }}
    >
      {label}
    </label>
  </div>
);

interface ContactFormState {
  name: string;
  email: string;
  department: string;
  subject: string;
  message: string;
}

const ContactUsPage = () => {
  const [form, setForm] = useState<{
    firstName: string;
    lastName: string;
    userName: string;
    displayName: string;
    nativeLanguage: string;
    otherLanguages: string[];
    phone: string;
    additionalPhone: string;
    email: string;
    additionalEmail: string;
    bio: string;
    name: string;
    department: string;
    subject: string;
    message: string;
  }>({
    firstName: "",
    lastName: "",
    userName: "",
    displayName: "",
    nativeLanguage: "",
    otherLanguages: [],
    phone: "",
    additionalPhone: "",
    email: "",
    additionalEmail: "",
    bio: "",
    name: "",
    department: "",
    subject: "",
    message: "",
  });

  return (
    <>
      <section className="w-full min-h-[500px] flex flex-col md:flex-row items-stretch bg-gradient-to-br from-[#b71c1c] to-[#e53935] py-16 px-0 md:px-0">
        {/* Left Side - Contact Info */}
        <div className="flex-1 flex flex-col justify-center pl-0 md:pl-24 pr-0 md:pr-8 py-8">
          <h2 className="text-white text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-white text-base mb-2">
            We can't wait to hear from you!
            <br />
            You SQUAWK, we WILCO
          </p>
          <div className="mt-6 space-y-4 text-white text-base">
            <div className="flex items-start gap-3">
              <EnvironmentOutlined className="text-xl mt-1" />
              <span>P.O. Box 270439, Fruitland, UT 84027</span>
            </div>
            <div className="flex items-start gap-3">
              <PhoneOutlined className="text-xl mt-1" />
              <span>833-I-Fly-Inn (833-435-9466)</span>
            </div>
            <div className="flex items-start gap-3">
              <PhoneOutlined className="text-xl mt-1" />
              <span>321-I-Fly-Inn (321-435-9466)</span>
            </div>
            <div className="flex items-start gap-3">
              <MailOutlined className="text-xl mt-1" />
              <span>PIC@Fly-Inn.com</span>
            </div>
          </div>
        </div>
        {/* Right Side - Contact Form */}
        <div className="flex-1 flex justify-center items-center py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
            <form className="space-y-4">
              <FloatingLabelInput
                label="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                type="text"
                autoComplete="off"
              />
              <FloatingLabelInput
                label="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                type="email"
                autoComplete="off"
              />
              <div className="relative mb-2">
                <select
                  value={form.department}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, department: e.target.value }))
                  }
                  className="block w-full px-3 pt-6 pb-2 text-base bg-transparent border border-gray-300 rounded appearance-none focus:outline-none focus:border-[#b71c1c] peer"
                >
                  <option value="General">General</option>
                  <option value="Support">Support</option>
                  <option value="Sales">Sales</option>
                  <option value="Other">Other</option>
                </select>
                <label
                  className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 duration-200 transform origin-left pointer-events-none
                    peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-[#b71c1c]
                    ${
                      form.department
                        ? "-translate-y-5 scale-90 text-[#b71c1c]"
                        : ""
                    }`}
                >
                  Department
                </label>
              </div>
              <FloatingLabelInput
                label="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm((f) => ({ ...f, subject: e.target.value }))
                }
                type="text"
                autoComplete="off"
              />
              <FloatingLabelTextArea
                label="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                rows={4}
              />
              <div className="flex justify-center pt-2">
                <Button
                  type="primary"
                  className="bg-[#b71c1c] text-white !px-10 py-2 rounded text-base font-semibold hover:bg-[#a11a1a]"
                  size="large"
                >
                  SEND
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
};

export default ContactUsPage;
