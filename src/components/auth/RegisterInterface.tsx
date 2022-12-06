import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { getStudentUploadList } from '../../store/studentUpload/selector';

interface userprops {
  name: string;
}

const RegisterInterface: FC<userprops> = (props) => {
  const name = props;

  return (
    <>
      <div className="mb-24">
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          บัวศรีไอดี
        </label>
        <input
          type="text"
          id="email"
          disabled
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          ชื่อ - สกุล
        </label>
        <input
          type="text"
          id="email"
          disabled
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          วิชาเอก
        </label>
        <input
          type="text"
          id="email"
          disabled
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          อาจารย์ที่ปรึกษา
        </label>
        <input
          value="test"
          type="text"
          id="email"
          disabled
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          Email (g.swu.ac.th*)
        </label>
        <input
          placeholder="example@g.sw.ac.th"
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          รหัสผ่าน
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          ยืนยันรหัสผ่าน
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <button className="w-full text-white bg-[#006b9c] hover:bg-[#00567e] focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        สมัครสมาชิก
      </button>
    </>
  );
};

export default RegisterInterface;
