import React, { ChangeEvent, useState } from 'react';
import './RegisterPages.scss';
import logo from '../../assets/COSCI_logo.png';
import RegisterInterface from '../../components/auth/RegisterInterface';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentUploadList } from '../../store/studentUpload/selector';
import { fetchStudentUploadList } from '../../store/studentUpload/thunk';
import { PostStudentUploadListRequest } from '../../service';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterPages: React.FC<any> = () => {
  const [userID, setUserID] = useState<String>('');
  const [isFind, setIsFine] = useState<Boolean>(false);
  const Timer = (ms) => new Promise((r) => setTimeout(r, ms));
  const dispatch = useDispatch();
  const studnetUploadListData = useSelector(getStudentUploadList);

  function UserFetch(id: PostStudentUploadListRequest) {
    dispatch(fetchStudentUploadList(id));
  }

  const formik = useFormik({
    initialValues: {
      user_id: '',
    },
    validationSchema: Yup.object({
      user_id: Yup.string()
        .min(11, 'รหัสประจำตัวนิสิตต้องมี 11 ตัวเท่านั้น')
        .max(11, 'รหัสประจำตัวนิสิตต้องมี 11 ตัวเท่านั้น')
        .required('กรุณากรอกรหัสประจำตัวนิสิต'),
    }),
    onSubmit: async (values) => {
      UserFetch(values);
      await Timer(800);

      setIsFine(true);
      console.log(JSON.stringify(studnetUploadListData, undefined, 5));
    },
  });

  return (
    <>
      <body className="w-screen h-screen bgimg overflow-auto">
        <img
          src={logo}
          className="w-44 mt-2.5 ml-5 sm:w-48 sm:mt-5 sm:ml-5 md:w-48 md:ml-20 lg:w-48 lg:ml-40 xl:w-60"
          alt="COSCI_logo"
        />
        <div className="my-auto mt-16 mb-28 mx-3">
          <div className="flex justify-center">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 font-Kanit w-96 lg:w-96 md:max-w-sm sm:max-w-sm">
              <div className="space-y-5">
                <h3 className="text-xl font-medium text-gray-900 ">
                  สมัครสมาชิก
                </h3>
                <form onSubmit={formik.handleSubmit}>
                  {!isFind && (
                    <>
                      <label className="text-sm font-medium text-gray-900 block mb-2 mt-5">
                        รหัสประจำตัวนิสิต
                      </label>

                      <input
                        id="user_id"
                        type="text"
                        name="user_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
                        placeholder="6XXXXXXXXXX"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.user_id}
                      />
                      {formik.touched.user_id && formik.errors.user_id ? (
                        <div className="text-red-600 text-sm mt-1">
                          {formik.errors.user_id}
                        </div>
                      ) : null}
                    </>
                  )}

                  {!isFind && (
                    <>
                      <button
                        type="submit"
                        className=" mt-5 w-full text-white bg-[#006b9c] hover:bg-[#00567e] focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        ค้นหารหัสประจำตัว
                      </button>
                    </>
                  )}
                </form>
                {!isFind && (
                  <>
                    <div className="flex items-start">
                      <a
                        href="/"
                        className="text-sm text-[#00567e] hover:underline ml-auto"
                      >
                        กลับหน้าเข้าสู่ระบบ
                      </a>
                    </div>
                  </>
                )}

                {isFind && (
                  <RegisterInterface
                    object={studnetUploadListData}
                    reLoad={isFind}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default RegisterPages;
