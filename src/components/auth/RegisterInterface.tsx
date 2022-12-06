import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { Button } from 'antd';
import '../../pages/LoginPages/LoginPages.scss';

interface userprops {
  name: string;
}

const RegisterInterface: FC<userprops> = (props) => {
  const name = props;

  return (
    <>
      <label className="text-sm font-medium text-gray-900 block mb-2 mt-5">
        รหัสประจำตัวนิสิต
      </label>
      <input
        type="text"
        name="text"
        id="email"
        value={name.toString()}
        disabled
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
      />
    </>
  );
};

export default RegisterInterface;
