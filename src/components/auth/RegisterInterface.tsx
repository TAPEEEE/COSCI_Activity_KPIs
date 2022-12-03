import React from 'react';
import { TextField } from '@mui/material';
import { Button } from 'antd';
import '../../pages/LoginPages/LoginPages.css';

const RegisterInterface: React.FC<any> = () => {
  return (
    <>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 font-Kanit w-80">
        <form className="space-y-5" action="#">
          <h3 className="text-xl font-medium text-gray-900 ">สมัครสมาชิก</h3>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2 mt-5">
              รหัสประจำตัวนิสิต
            </label>
            <input
              type="number"
              name="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="6XXXXXXXXXX"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-[#006b9c] hover:bg-[#00567e] focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            สมัครสมาชิก
          </button>
          <div className="flex items-start">
            <a
              href="/"
              className="text-sm text-[#00567e] hover:underline ml-auto"
            >
              กลับหน้าเข้าสู่ระบบ
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterInterface;
