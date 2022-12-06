import React, { ChangeEvent, useState } from 'react';
import './RegisterPages.css';
import logo from '../../assets/COSCI_logo.png';
import RegisterInterface from '../../components/auth/RegisterInterface';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentUploadList } from '../../store/studentUpload/selector';
import { fetchStudentUploadList } from '../../store/studentUpload/thunk';

const RegisterPages: React.FC<any> = () => {
  const [userID, setUserID] = useState<String>('');
  const [isFind, setIsFine] = useState<Boolean>(false);

  const setUserIDHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserID(event.target.value);
  };

  const dispatch = useDispatch();
  const studnetUploadListData = useSelector(getStudentUploadList);

  function UserFetch() {
    dispatch(fetchStudentUploadList({ user_id: userID }));
    setIsFine(true);
    console.log(JSON.stringify(studnetUploadListData, undefined, 5));
  }

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
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 font-Kanit w-80">
              <div className="space-y-5">
                <h3 className="text-xl font-medium text-gray-900 ">
                  สมัครสมาชิก
                </h3>
                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2 mt-5">
                    รหัสประจำตัวนิสิต
                  </label>
                  <input
                    type="text"
                    onChange={setUserIDHandler}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="6XXXXXXXXXX"
                  />
                </div>

                <button
                  onClick={UserFetch}
                  className="w-full text-white bg-[#006b9c] hover:bg-[#00567e] focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  ค้นหารหัสประจำตัว
                </button>
                <div className="flex items-start">
                  <a
                    href="/"
                    className="text-sm text-[#00567e] hover:underline ml-auto"
                  >
                    กลับหน้าเข้าสู่ระบบ
                  </a>
                </div>
                {isFind && <RegisterInterface name={''} />}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default RegisterPages;
