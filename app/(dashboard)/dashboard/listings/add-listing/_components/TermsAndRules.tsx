/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select, Input, InputNumber, Slider, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { rules, timesOptions, welcomeMessageList } from "@/constants/stays";
import { useApiGet } from "@/http-service";
import ReactQuillEditor from "@/components/shared/ReactQuillEditor";

const { Option } = Select;
const { TextArea } = Input;

// Type definitions
interface CancellationPolicy {
  id: string | number;
  type: string;
  group_name: string;
  before_check_in: string;
}

interface RuleOption {
  id: string | number;
  value: string;
  label: string;
}

interface WelcomeMessageOption {
  key: string;
  value: string;
  label: string;
}

const TermsAndRules: React.FC = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext(); // Access form context

  // const { data: cancellationPolicyList } = useApiGet({
  //   endpoint: `/cancellation-policy`,
  //   queryKey: ["cancellation-policy"],
  //   config: {
  //     select: (data: any) => {
  //       return data?.data?.docs;
  //     },
  //   },
  // });

    const { data: cancellationPolicyList, refetch } = useApiGet({
      endpoint: `/stay/cancellation-policy`,
      queryKey: ["cancellation-policy"],
      config: {
        select: (data: any) =>
          data?.data?.docs?.map((item: any) => ({
            id: item.id,
            title: item.name,
            type: item.type === 1 ? "long" : "short",
            before: item.before_check_in,
            after: item.after_check_in,
          })) || [],
      },
    });

    console.log("cancellationPolicyList", cancellationPolicyList);

  const smokingAllowed = watch("smoking_allowed");
  const rulesPetAllowed = watch("rules_pet_allowed");
  const partyAllowed = watch("party_allowed");
  const childrenAllowed = watch("children_allowed");

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" id="terms-and-rules">
      <h2 className="flex items-center text-xl font-bold text-gray-800 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-orange-600 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        Terms & Rules
      </h2>

      <div className="text-gray-600 mb-6">
        Set your property's terms, rules, and policies for guests
      </div>

      {/* Cancellation Policies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short Cancellation Policy
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Brief cancellation terms for guests
          </p>
          <Controller
            name="cancellation_policy_short"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select cancellation policy"
                  status={errors.cancellation_policy_short ? "error" : ""}
                  className="w-full"
                >
                  {cancellationPolicyList?.length > 0 ? (
                    cancellationPolicyList
                      ?.filter(
                        (item: CancellationPolicy) => item?.type === "short"
                      )
                      ?.map((option: CancellationPolicy) => (
                        <Option key={option.id} value={option.id}>
                          {option.title} : {option.after}
                        </Option>
                      ))
                  ) : (
                    <Option value="" disabled>
                      No cancellation policy found
                    </Option>
                  )}
                </Select>
                {errors.cancellation_policy_short?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.cancellation_policy_short.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Long Cancellation Policy
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Detailed cancellation terms for guests
          </p>
          <Controller
            name="cancellation_policy_long"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select cancellation policy"
                  status={errors.cancellation_policy_long ? "error" : ""}
                  className="w-full"
                >
                  {cancellationPolicyList
                    ?.filter(
                      (item: CancellationPolicy) => item?.type === "long"
                    )
                    ?.map((option: CancellationPolicy) => (
                      <Option key={option.id} value={option.id}>
                        {option.title} : {option.before}
                      </Option>
                    ))}
                </Select>
                {errors.cancellation_policy_long?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.cancellation_policy_long.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* Booking and Check-in/out Times */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Days of Booking
          </label>
          <p className="text-sm text-gray-500 mb-3">Minimum stay requirement</p>
          <Controller
            name="min_day_booking"
            control={control}
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  size="large"
                  placeholder="e.g. 1"
                  min={1}
                  status={errors?.min_day_booking ? "error" : ""}
                  className="w-full"
                />
                {errors?.min_day_booking?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.min_day_booking.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Days of Booking
          </label>
          <p className="text-sm text-gray-500 mb-3">Maximum stay limit</p>
          <Controller
            name="max_day_booking"
            control={control}
            render={({ field }) => (
              <div>
                <InputNumber
                  {...field}
                  size="large"
                  placeholder="e.g. 30"
                  min={1}
                  status={errors?.max_day_booking ? "error" : ""}
                  className="w-full"
                />
                {errors?.max_day_booking?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.max_day_booking.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check In After
          </label>
          <p className="text-sm text-gray-500 mb-3">Earliest check-in time</p>
          <Controller
            name="check_in_after"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select a time"
                  status={errors.check_in_after ? "error" : ""}
                  className="w-full"
                >
                  {timesOptions.map((option: string) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                {errors.check_in_after?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.check_in_after.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check Out Before
          </label>
          <p className="text-sm text-gray-500 mb-3">Latest check-out time</p>
          <Controller
            name="check_out_before"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select a time"
                  status={errors.check_out_before ? "error" : ""}
                  className="w-full"
                >
                  {timesOptions.map((option: string) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
                {errors.check_out_before?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.check_out_before.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      {/* Smoking Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Smoking Allowed
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Whether smoking is permitted
          </p>
          <Controller
            name="smoking_allowed"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select option"
                  status={errors?.smoking_allowed ? "error" : ""}
                  className="w-full"
                >
                  <Option value={1}>Yes</Option>
                  <Option value={0}>No</Option>
                </Select>
                {errors?.smoking_allowed?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.smoking_allowed.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          {+smokingAllowed === 1 && (
            <>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Smoking Rules
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Specific smoking guidelines
              </p>
              <Controller
                name="smoking_rules"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      size="large"
                      placeholder="Write your condition here"
                      status={errors?.smoking_rules ? "error" : ""}
                      className="w-full"
                    />
                    {errors?.smoking_rules?.message && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {errors.smoking_rules.message?.toString()}
                      </p>
                    )}
                  </div>
                )}
              />
            </>
          )}
        </div>
      </div>

      {/* Pet Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pet Allowed
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Whether pets are permitted
          </p>
          <Controller
            name="rules_pet_allowed"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select option"
                  status={errors?.rules_pet_allowed ? "error" : ""}
                  className="w-full"
                >
                  <Option value={1}>Yes</Option>
                  <Option value={0}>No</Option>
                </Select>
                {errors?.rules_pet_allowed?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.rules_pet_allowed.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          {+rulesPetAllowed === 1 && (
            <>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet Rules
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Specific pet guidelines
              </p>
              <Controller
                name="pet_rules"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      size="large"
                      placeholder="Write your condition here"
                      status={errors?.pet_rules ? "error" : ""}
                      className="w-full"
                    />
                    {errors?.pet_rules?.message && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {errors.pet_rules.message?.toString()}
                      </p>
                    )}
                  </div>
                )}
              />
            </>
          )}
        </div>
      </div>

      {/* Party Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Parties Allowed
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Whether parties are permitted
          </p>
          <Controller
            name="party_allowed"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select option"
                  status={errors?.party_allowed ? "error" : ""}
                  className="w-full"
                >
                  <Option value={1}>Yes</Option>
                  <Option value={0}>No</Option>
                </Select>
                {errors?.party_allowed?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.party_allowed.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          {+partyAllowed === 1 && (
            <>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Party Rules
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Specific party guidelines
              </p>
              <Controller
                name="party_rules"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      size="large"
                      placeholder="Write your condition here"
                      status={errors?.party_rules ? "error" : ""}
                      className="w-full"
                    />
                    {errors?.party_rules?.message && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {errors.party_rules.message?.toString()}
                      </p>
                    )}
                  </div>
                )}
              />
            </>
          )}
        </div>
      </div>

      {/* Children Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col justify-between">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Children Allowed
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Whether children are permitted
          </p>
          <Controller
            name="children_allowed"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  size="large"
                  placeholder="Select option"
                  status={errors?.children_allowed ? "error" : ""}
                  className="w-full"
                >
                  <Option value={1}>Yes</Option>
                  <Option value={0}>No</Option>
                </Select>
                {errors?.children_allowed?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    <i className="fa fa-exclamation-circle mr-1"></i>
                    {errors.children_allowed.message?.toString()}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col justify-between">
          {+childrenAllowed === 1 && (
            <>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Children Rules
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Specific children guidelines
              </p>
              <Controller
                name="children_rules"
                control={control}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      size="large"
                      placeholder="Write your condition here"
                      status={errors?.children_rules ? "error" : ""}
                      className="w-full"
                    />
                    {errors?.children_rules?.message && (
                      <p className="text-red-500 text-sm mt-2">
                        <i className="fa fa-exclamation-circle mr-1"></i>
                        {errors.children_rules.message?.toString()}
                      </p>
                    )}
                  </div>
                )}
              />
            </>
          )}
        </div>
      </div>

      {/* Age Ranges for Children */}
      {childrenAllowed === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Children Ages (Months)
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Age range for children: {watch("children_ages")?.[0] || 0} -{" "}
              {watch("children_ages")?.[1] || 24} months
            </p>
            <Controller
              name="children_ages"
              control={control}
              render={({ field }) => (
                <div>
                  <Slider
                    {...field}
                    range
                    min={0}
                    max={24}
                    marks={{
                      0: "0m",
                      6: "6m",
                      12: "12m",
                      18: "18m",
                      24: "24m",
                    }}
                    tooltip={{
                      formatter: (value: ReactNode) => `${value} months`,
                    }}
                  />
                </div>
              )}
            />
          </div>

          <div className="flex flex-col justify-between">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Infant Ages (Years)
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Age range for infants: {watch("infant_ages")?.[0] || 0} -{" "}
              {watch("infant_ages")?.[1] || 17} years
            </p>
            <Controller
              name="infant_ages"
              control={control}
              render={({ field }) => (
                <div>
                  <Slider
                    {...field}
                    range
                    min={0}
                    max={17}
                    marks={{
                      0: "0y",
                      5: "5y",
                      10: "10y",
                      15: "15y",
                      17: "17y",
                    }}
                    tooltip={{
                      formatter: (value: ReactNode) => `${value} years`,
                    }}
                  />
                </div>
              )}
            />
          </div>
        </div>
      )}

      {/* House Rules */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          House Rules (List Below)
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Select rules to add to your listing
        </p>
        <Controller
          name="rules_instructions"
          control={control}
          render={({ field }) => (
            <div>
              <Select
                {...field}
                size="large"
                placeholder="Select a rule to add"
                status={errors.rules_instructions ? "error" : ""}
                className="w-full"
                onChange={(currentValue: string) => {
                  field.onChange(currentValue);

                  const prevRulesMessage = getValues("rules");
                  if (
                    currentValue &&
                    !prevRulesMessage.includes(currentValue)
                  ) {
                    const newChange = `${prevRulesMessage}\n${currentValue}`;
                    setValue("rules", newChange, { shouldValidate: true });
                  }
                }}
              >
                {rules.map((option: RuleOption) => (
                  <Option key={option.id} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
          )}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Edit House Rules
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Customize your house rules for guests
        </p>
        <div
          className={`${
            errors?.rules?.message ? "border-red-500" : "border-gray-300"
          } rounded-md border`}
          id="rules"
        >
          <Controller
            name="rules"
            control={control}
            render={({ field }) => (
              <ReactQuillEditor
                name="rules"
                placeholder="Rules of your property..."
                rows={6}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        {errors?.rules?.message && (
          <p className="text-red-500 text-sm mt-2">
            <i className="fa fa-exclamation-circle mr-1"></i>
            {errors.rules.message?.toString()}
          </p>
        )}
      </div>

      {/* Welcome Message */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Welcome Information (List Below)
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Select welcome messages to add
        </p>
        <Controller
          name="welcome_message_instructions"
          control={control}
          render={({ field }) => (
            <div>
              <Select
                {...field}
                size="large"
                placeholder="Select a welcome message to add"
                status={errors.welcome_message_instructions ? "error" : ""}
                className="w-full"
                onChange={(currentValue: string) => {
                  field.onChange(currentValue);

                  const prevWelcomeMessage = getValues("welcome_message");
                  if (
                    currentValue &&
                    !prevWelcomeMessage.includes(currentValue)
                  ) {
                    const newChange = `${prevWelcomeMessage}\n${currentValue}`;
                    setValue("welcome_message", newChange, {
                      shouldValidate: true,
                    });
                  }
                }}
              >
                {welcomeMessageList.map((option: WelcomeMessageOption) => (
                  <Option key={option.key} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
          )}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Edit Welcome Message
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Customize your welcome message for guests
        </p>
        <div
          className={`${
            errors?.welcome_message?.message
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md border`}
          id="welcome_message"
        >
          <Controller
            name="welcome_message"
            control={control}
            render={({ field }) => (
              <ReactQuillEditor
                name="welcome_message"
                placeholder="Welcome message of your property..."
                rows={6}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        {errors?.welcome_message?.message && (
          <p className="text-red-500 text-sm mt-2">
            <i className="fa fa-exclamation-circle mr-1"></i>
            {errors.welcome_message.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(TermsAndRules);
