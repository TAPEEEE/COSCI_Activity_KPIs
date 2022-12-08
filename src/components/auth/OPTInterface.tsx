import React, { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from 'antd';
import '../../pages/LoginPages/LoginPages.scss';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { getStudentUploadList } from '../../store/studentUpload/selector';

interface PreFilledProps {
  object: {
    user_id: string;
    name: string;
    role: string;
    email: string;
    tel: string;
    register_check: boolean;
  };
}

const OTPInterface: FC = () => {
  const Timer = (ms: number | undefined) =>
    new Promise((r) => setTimeout(r, ms));
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      otp: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .min(6, 'กรุณากรอก OTP 6 หลัก')
        .max(6, 'กรุณากรอก OTP 6 หลัก')
        .required('กรุณากรอก OTP'),
    }),
    onSubmit: (values) => {
      navigate('/login');
    },
  });

  return (
    <>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 font-Kanit w-80">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="text-md font-medium text-gray-900 block mb-1 mt-2">
              กรอก Email และ OTP เพื่อยืนยันตัวตน
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5 mt-5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          <div>
            <input
              type="text"
              id="otp"
              name="otp"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5 mt-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.otp}
            />
            {formik.touched.otp && formik.errors.otp ? (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.otp}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full mt-5 text-white bg-[#006b9c] hover:bg-[#00567e] focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            สมัครสมาชิก
          </button>
        </form>
      </div>
    </>
  );
};

export default OTPInterface;
