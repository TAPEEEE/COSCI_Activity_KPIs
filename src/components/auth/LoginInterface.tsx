import React from 'react';
import { TextField } from '@mui/material';
import { Button } from 'antd';
import '../../pages/LoginPages/LoginPages.css';
import { useNavigate } from 'react-router-dom';
import alertTermAndConditions from '../../utils/alertTeamAndConditions';

const LoginInterface: React.FC<any> = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/register');
  }
  return (
    <>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 font-Kanit w-80">
        <form className="space-y-3" action="#">
          <h3 className="text-xl font-medium text-gray-900 ">เข้าสู่ระบบ</h3>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2 mt-5">
              บัวศรีไอดี
            </label>
            <input
              type="text"
              name="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="co6XXXXXXXX"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              รหัสผ่าน
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
            />
          </div>
          <div className="flex items-start">
            <a
              href="#"
              className="text-sm text-[#00567e] hover:underline ml-auto"
            >
              ลืมรหัสผ่าน?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#006b9c] hover:bg-[#00567e] focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            เข้าสู่ระบบ
          </button>

          <button
            onClick={alertTermAndConditions}
            type="button"
            className="mt-2 w-full text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            สมัครสมาชิก
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginInterface;
