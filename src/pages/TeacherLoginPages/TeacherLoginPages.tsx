import React, { FC } from 'react';
import '../LoginPages/LoginPages.scss';
import logo from '../../assets/COSCI_logo.png';
import { useNavigate } from 'react-router-dom';
import TeacherLoginInterface from '../../components/auth/TeacherLoginInterface';

type AdminUserCRUDProps = {
  //
};

const LoginPages: FC = () => {
  return (
    <>
      <body className="w-screen h-screen bgimg overflow-auto">
        <img
          src={logo}
          className="w-44 mt-2.5 ml-5 sm:w-48 sm:mt-5 sm:ml-5 md:w-48 md:ml-20 lg:w-48 lg:ml-40 xl:w-60"
          alt="COSCI_logo"
        />
        <div className="my-auto mt-24">
          <div className="flex justify-center">
            <TeacherLoginInterface />
          </div>
        </div>
      </body>
    </>
  );
};

export default LoginPages;
