import React, {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApiGet, useApiMutation } from "@/http-service";
import { useApp } from "@/providers/AppMessageProvider";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import * as yup from "yup";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";

interface ProfileContextType {
  // Form methods
  methods: any;
  control: any;
  handleSubmit: any;
  setValue: any;
  reset: any;
  errors: any;
  isValid: boolean;

  // API state
  userData: any;
  loadingUserData: boolean;
  updatingProfile: boolean;

  // Profile state
  profileComplete: any;
  profileStatus: "incomplete" | "in-review" | "verified";

  // Functions
  onSubmit: (values: any, event: any) => void;
  onError: (errors: any) => void;

  // Form data
  defaultValues: any;
  documentStatuses: any;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

type DocumentStatus =
  | "not-submitted"
  | "under-review"
  | "rejected"
  | "verified";
interface DocumentSection {
  status: DocumentStatus;
  lastUpdated?: string;
  adminNotes?: string;
}
export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
}) => {
  const { message } = useApp();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const [profileComplete, setProfileComplete] = useState();
  const [profileStatus, setProfileStatus] = useState<
    "incomplete" | "in-review" | "verified"
  >("verified");

  // Mock status data - in real app this would come from API
  const [documentStatuses, setDocumentStatuses] = useState<{
    airmen: DocumentSection;
    driver: DocumentSection;
  }>({
    airmen: {
      status: "under-review",
      lastUpdated: "2024-01-15",
      adminNotes:
        "Front certificate looks good. Back certificate needs better image quality.",
    },
    driver: {
      status: "not-submitted",
    },
  });
  const defaultValues = {
    image: "",
    first_name: undefined,
    last_name: undefined,
    middle_name: undefined,
    display_name: undefined,
    native_language: undefined,
    other_language: [],
    phone: undefined,
    other_phone: undefined,
    email: undefined,
    additional_email: undefined,
    bio: undefined,
    mailing_address: {
      address: undefined,
      apartment: undefined,
      city: undefined,
      state: undefined,
      zip_code: undefined,
      neighbourhood: undefined,
      country: undefined,
    },
    contact: {
      name: undefined,
      relationship: undefined,
      email: undefined,
      phone: undefined,
    },
    social_links: {
      facebook_url: undefined,
      instagram_url: undefined,
      airbnb_url: undefined,
      vrbo_url: undefined,
      youtube_url: undefined,
      twitter_url: undefined,
      linkedin_url: undefined,
      pinterest_url: undefined,
      vimeo_url: undefined,
      top_advisor_url: undefined,
    },
  };

  const profileSchema = yup.object().shape({
    first_name: yup.string().nullable().optional(),
    middle_name: yup.string().nullable().optional(),
    last_name: yup.string().nullable().optional(),
    display_name: yup
      .string()
      .nullable()
      .optional()
      .test(
        "names-required-first",
        "Please enter your first and last name before setting a display name",
        function (value) {
          if (!value) return true; // Allow empty values
          const { first_name, last_name } = this.parent;
          if (!first_name || !last_name) {
            return false;
          }
          return true;
        }
      )
      .test(
        "not-similar-to-other-names",
        "Display name cannot be similar to your first name, last name, or username",
        function (value) {
          if (!value) return true; // Allow empty values

          const { first_name, last_name } = this.parent;
          const normalizedValue = value.toLowerCase().trim();

          // Check if display name contains other names or vice versa
          if (
            first_name &&
            (normalizedValue.includes(first_name.toLowerCase().trim()) ||
              first_name.toLowerCase().trim().includes(normalizedValue))
          ) {
            return false;
          }
          if (
            last_name &&
            (normalizedValue.includes(last_name.toLowerCase().trim()) ||
              last_name.toLowerCase().trim().includes(normalizedValue))
          ) {
            return false;
          }

          return true;
        }
      ),
    native_language: yup.string().nullable().optional(),
    other_language: yup.array().of(yup.string()).nullable().optional(),

    phone: yup
      .string()
      .nullable()
      .optional()
      .test(
        "is-valid-phone",
        "Please enter all required digits and make it valid",
        (value) =>
          !value ||
          !!(
            value &&
            isPossiblePhoneNumber(value) &&
            isValidPhoneNumber(value || "")
          )
      )
      .test(
        "unique-phone",
        "Primary phone and Other phone cannot be the same",
        function (value) {
          const { other_phone } = this.parent;
          return !value || !other_phone || value !== other_phone;
        }
      ),
    other_phone: yup
      .string()
      .nullable()
      .optional()
      .test(
        "is-valid-phone",
        "Please enter all required digits and make it valid",
        (value) =>
          !value ||
          (isPossiblePhoneNumber(value) && isValidPhoneNumber(value || ""))
      )
      .test(
        "unique-phone",
        "Primary phone and Other phone cannot be the same",
        function (value) {
          const { phone, other_phone } = this.parent;
          return !value || !phone || value !== other_phone;
        }
      ),

    additional_email: yup.string().email().nullable().optional(),
    email: yup.string().email().nullable().optional(),
    bio: yup.string().nullable().optional(),

    contact: yup
      .object()
      .shape({
        name: yup.string().nullable().optional(),
        phone: yup
          .string()
          .nullable()
          .optional()
          .test(
            "is-valid-phone",
            "Please enter all required digits and make it valid",
            (value) =>
              !value ||
              (isPossiblePhoneNumber(value) && isValidPhoneNumber(value || ""))
          )
          .test(
            "unique-phone-number",
            "It cannot be same as primary phone or other phone number.",
            function (value) {
              // Get current form values from the form instance
              const currentValues = methods.getValues();
              const { phone, other_phone } = currentValues;
              console.log({ phone, other_phone, value, currentValues });
              if (!value) return true; // Allow empty values

              // Check against primary phone
              if (phone && value === phone) return false;

              // Check against other phone (if it exists)
              if (other_phone && value === other_phone) return false;

              return true;
            }
          ),
        email: yup.string().email().nullable().optional(),
        relationship: yup.string().nullable().optional(),
      })
      .nullable()
      .optional(),
    mailing_address: yup
      .object()
      .shape({
        address: yup.string().nullable().optional(),
        apartment: yup.string().nullable().optional(),
        city: yup.string().nullable().optional(),
        state: yup.string().nullable().optional(),
        zip_code: yup.string().nullable().optional(),
        neighbourhood: yup.string().nullable().optional(),
        country: yup.string().nullable().optional(),
      })
      .nullable()
      .optional(),
    social_links: yup
      .object()
      .shape({
        facebook_url: yup.string().url().nullable().optional(),
        instagram_url: yup.string().url().nullable().optional(),
        airbnb_url: yup.string().url().nullable().optional(),
        vrbo_url: yup.string().url().nullable().optional(),
        youtube_url: yup.string().url().nullable().optional(),
        twitter_url: yup.string().url().nullable().optional(),
        linkedin_url: yup.string().url().nullable().optional(),
        pinterest_url: yup.string().url().nullable().optional(),
        vimeo_url: yup.string().url().nullable().optional(),
        top_advisor_url: yup.string().url().nullable().optional(),
      })
      .nullable()
      .optional(),
  });

  const methods = useForm({
    resolver: yupResolver(profileSchema) as any,
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors, isValid },
  } = methods;

  console.log({ errors }, getValues());

  const { data: userData, isLoading: loadingUserData } = useApiGet({
    endpoint: `/me`,
    queryKey: ["me", session?.user.id],

    config: {
      select: (res) => {
        console.log({ res });
        return res?.data?.doc;
      },
    },
  });
  useEffect(() => {
    if (userData) {
      const { user_name, ...data } = userData || {};
      setProfileComplete(data?.complete_percentage);
      setProfileStatus(data?.profile_status || "incomplete");
      setDocumentStatuses({
        airmen: {
          status: !data?.airmen_certificate_front
            ? "not-submitted"
            : data?.airmen_verified
            ? "verified"
            : "under-review",
        },
        driver: {
          status: !data?.driving_license_front
            ? "not-submitted"
            : data?.driving_license_verified
            ? "verified"
            : "under-review",
        },
      });
      reset({
        email: data?.email,
        first_name: userData?.first_name,
        last_name: userData?.last_name,
        middle_name: userData?.middle_name,
        display_name: userData?.display_name,
        native_language: data?.native_language,
        other_language: data?.other_language,
        phone: data?.phone,
        other_phone: data?.other_phone,
        additional_email: data?.additional_email,
        bio: data?.bio,
        mailing_address: data?.mailing_address,
        contact: data?.contact,
        social_links: data?.social_links,
      });
    }
  }, [userData, reset]);

  const { mutate: updateProfile, isPending: updatingProfile } = useApiMutation({
    endpoint: `/me`,
    method: "patch",
    config: {
      onSuccess: (res) => {
        console.log("invalidated", res);
        queryClient.invalidateQueries({ queryKey: ["me", session?.user.id] });
        message.success("Profile updated successfully!");
      },
      onError: (errRes) => {
        console.log("error", errRes);
        message.error(
          errRes?.response?.data?.message ||
            "An error occurred while updating the user"
        );
      },
    },
  });

  const onSubmit = useCallback(
    async (values: any, event: any) => {
      event.preventDefault();
      console.log({ values });
      const {
        air_men,
        air_men_back,
        driving_license,
        driving_license_back,
        image,
        email,
        ...data
      } = values;

      updateProfile(data);
    },
    [updateProfile]
  );

  const onError = (errors: any) => {
    console.log({ errors });
  };

  const contextValue: ProfileContextType = {
    methods,
    control,
    handleSubmit,
    setValue,
    reset,
    errors,
    isValid,
    userData,
    loadingUserData,
    updatingProfile,
    profileComplete,
    profileStatus,
    onSubmit,
    onError,
    defaultValues,
    documentStatuses,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};
