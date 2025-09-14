'use client';

import React, { useCallback } from 'react';
import { Row, Col, Card, Button, Typography, Modal, notification } from 'antd';
import { MdError } from 'react-icons/md';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

import { useApiGet, useApiMutation } from "@/http-service";
import MailingAddressSection from '../../_components/MailingAddressSection';
import SocialMediaSection from '../../_components/SocialMediaSection';
import EmergencyContactSection from '../../_components/EmergencyContactSection';
import ImageUploader from '../../_components/UploadAvatar';
import InformationSection from '../../_components/InformationSection';

const { Title, Text } = Typography;

interface EditUserProps {
  user: 'admin' | 'normal';
}

export default function EditUser({ user }: EditUserProps) {
  const params = useParams();
  const queryClient = useQueryClient();

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');

  // ✅ Validation Schema
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    username: Yup.string().required('User Name is required'),
    display_name: Yup.string().required('Display Name is required'),
    phone: Yup.string()
      .required('Phone is required')
      .test(
        'is-valid-phone',
        'Please enter a valid phone number',
        (val) => val && isPossiblePhoneNumber(val) && isValidPhoneNumber(val)
      ),
    email: Yup.string().required('Email is required').email('Must be valid'),
    image: Yup.mixed().required('Profile image is required'),
  });

    const { data: userData, isLoading: loadingUser } = useApiGet({
    endpoint: `/user/${params?.editId}`,
    queryKey: ["user", params?.editId],
  });

  const userInfo = userData?.doc || {};

  console.log("userInfo", userInfo);


  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      first_name: userInfo?.first_name,
      middle_name: "",
      last_name: userInfo?.last_name ,
      display_name: userInfo?.display_name,
      native_language: userInfo?.native_language,
      other_language: userInfo?.other_language ,
      phone: userInfo?.phone ,
      other_phone: userInfo?.other_phone,
      email: userInfo?.email ,
      additional_email: "",
      airmen_certificate_front: "",
      airmen_certificate_back: "",
      driving_license_verified: false,
      id_verified: false,
      email_verified: false,
      provider: "",
      role: [],
      photo: userInfo?.photo,
      image: userInfo?.photo,
      complete_percentage: {
        percentage: 0,
        complete: 0,
        remaining: 0,
        completed_fields: [],
        remaining_fields: [],
      },
      profile_status: "",
      mailing_address: {
        address: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
      },
      contact: {
        name: "",
        relationship: "",
        email: "",
        phone: "",
      },
      bio: "",
      createdAt: "",
      updatedAt: "",
    },
  });

  const {
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = methods;

  // ✅ Mutations
  const { mutate: updateUser, isPending: updatingUser } = useApiMutation({
    endpoint: `/user/${params?.id}`,
    method: 'post',
    config: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user', params?.id] });
        notification.success({ message: 'User updated successfully' });
      },
      onError: (err) => {
        notification.error({
          message: err?.response?.data?.message || 'Failed to update user',
        });
      },
    },
  });

  const { mutate: updateProfile, isPending: updatingProfile } = useApiMutation({
    endpoint: `/profile`,
    method: 'post',
    config: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['current-user'] });
        notification.success({ message: 'Profile updated successfully' });
      },
      onError: (err) => {
        notification.error({
          message: err?.response?.data?.message || 'Failed to update profile',
        });
      },
    },
  });

  // ✅ Handle FormData
  const appendFormData = useCallback((formData: FormData, data: any, parentKey = '') => {
    if (data === null || data === undefined || (typeof data === 'string' && data.trim() === '')) {
      return;
    }

    if (Array.isArray(data)) {
      data.forEach((item, index) => appendFormData(formData, item, `${parentKey}[${index}]`));
    } else if (data instanceof Date) {
      formData.append(parentKey, data.toISOString());
    } else if (data instanceof File || data instanceof Blob) {
      formData.append(parentKey, data);
    } else if (typeof data === 'object') {
      Object.keys(data).forEach((key) =>
        appendFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key)
      );
    } else {
      formData.append(parentKey, data);
    }
  }, []);

  // ✅ Submit
  const onSubmit = useCallback(
    async (values: any) => {
      const { image, ...rest } = values;
      const formData = new FormData();
      formData.append('_method', 'PUT');
      if (image instanceof File) formData.append('image', image);
      appendFormData(formData, rest);
      user === 'admin' ? updateProfile(formData) : updateUser(formData);
    },
    [appendFormData, updateProfile, updateUser, user]
  );

  const onError = (errs: any) => {
    const firstError = Object.keys(errs)[0];
    if (firstError) {
      setModalMessage(errs[firstError].message);
      setModalVisible(true);
    } else {
      setModalMessage('Kindly fill all required fields!');
      setModalVisible(true);
    }
  };

  const image = watch('image');

  return (
    <>
      <div className="p-6">
        <Title level={3}>Profile</Title>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Row gutter={16}>
              <Col xs={24} md={8}>
                <Card className="flex flex-col gap-4">
                  <Controller
                    name="image"
                    control={control}
                    render={({ field: { onChange, value } }) => {

                      console.log("value", value);
                      const objectURL =
                        typeof value === 'string' ? value : value ? URL.createObjectURL(value) : '';
                      return (
                        <div className="flex flex-col gap-2">
                          <ImageUploader
                            error={!!errors.image}
                            value={objectURL}
                            onChange={(file) => onChange(file)}
                          />
                          {errors?.image?.message && (
                            <Text type="danger">{errors.image.message}</Text>
                          )}
                          {image && (
                            <Button danger onClick={() => setValue('image', null)} className="w-fit">
                              Delete
                            </Button>
                          )}
                        </div>
                      );
                    }}
                  />
                </Card>
              </Col>

              <Col xs={24} md={16}>
                <div className="flex flex-col gap-4">
                  <InformationSection userData={userInfo} user={user} />
                  <MailingAddressSection />
                  <EmergencyContactSection />
                  <SocialMediaSection />

                  <div className="flex justify-end gap-4 px-6 py-3 shadow bg-white sticky bottom-0 w-full rounded-lg">
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={updatingUser || updatingProfile}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </FormProvider>
      </div>

      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <div className="flex flex-col items-center gap-3">
          <MdError className="text-red-500 text-4xl" />
          <Text>{modalMessage}</Text>
        </div>
      </Modal>
    </>
  );
}
