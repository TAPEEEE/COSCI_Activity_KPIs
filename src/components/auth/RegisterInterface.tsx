import { FC, memo, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PatchStudentRegisterRequest } from '../../service/registerstudent/types';
import { CombinedState } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StudentUploadListUpdateStudentUploadListAction } from '../../store/studentUpload/action';
import { fetchStudentRegister } from '../../store/studentRegister/thunk';
import { useDispatch } from 'react-redux';

interface PreFilledProps {
  object: {
    user_id: string;
    name: string;
    major: string;
    teacher: string;
    register_check: boolean;
  };
  reLoad: boolean;
}

const RegisterInterface: FC<PreFilledProps> = (props) => {
  const dataHook = props;
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    setReload(dataHook.reLoad);
  });

  const dispatch = useDispatch();
  function UserRegister(data: PatchStudentRegisterRequest) {
    dispatch(fetchStudentRegister(data));
  }

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      name: dataHook.object.name,
      password: '',
      confirmpassword: '',
      student_id: dataHook.object.user_id,
      teacher: dataHook.object.teacher,
      major: dataHook.object.major,
      email: '',
      tel: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('รูปแบบ Email ไม่ถูกต้อง')
        .required('กรุณากรอก Email'),
      password: Yup.string()
        .min(8, 'รหัสผ่านต้องมากกว่า 8 ตัว')
        .required('กรุณากรอกรหัสผ่าน'),
      confirmpassword: Yup.string().when('password', {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          'รหัสผ่านผ่านไม่ตรงกัน',
        ),
      }),
      tel: Yup.string()
        .matches(phoneRegExp, 'กรอกเบอร์โทรศัพท์ไม่ถูกต้อง')
        .min(10, 'กรอกเบอร์โทรศัพท์ไม่ถูกต้อง')
        .max(10, 'กรอกเบอร์โทรศัพท์ไม่ถูกต้อง'),
    }),
    onSubmit: (values) => {
      console.log(values);
      UserRegister(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          รหัสประจำตัวนิสิต
        </label>
        <input
          type="text"
          id="student_id"
          name="student_id"
          disabled
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.student_id}
          className="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          ชื่อ - สกุล
        </label>
        <input
          type="text"
          id="name"
          name="name"
          disabled
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          วิชาเอก
        </label>
        <input
          type="text"
          id="major"
          name="major"
          disabled
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.major}
          className="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          อาจารย์ที่ปรึกษา
        </label>
        <input
          type="text"
          id="teacher"
          name="teacher"
          disabled
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.teacher}
          className="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          Email (g.swu.ac.th เท่านั้น)
        </label>
        <input
          placeholder="example@g.sw.ac.th"
          type="text"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          รหัสผ่าน
        </label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
          ยืนยันรหัสผ่าน
        </label>
        <input
          type="text"
          id="confirmpassword"
          name="confirmpassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmpassword}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.confirmpassword}
          </div>
        ) : null}
      </div>
      <div>
        <label className="text-sm font-medium text-gray-900 block mb-1 mt-5 ">
          เบอร์โทรศัพท์
        </label>
        <input
          type="text"
          id="tel"
          name="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tel}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
        />
        {formik.touched.tel && formik.errors.tel ? (
          <div className="text-red-600 text-sm mt-1">{formik.errors.tel}</div>
        ) : null}
      </div>
      <button className="w-full mt-5 text-white bg-[#006b9c] hover:bg-[#00567e] focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        สมัครสมาชิก
      </button>
    </form>
  );
};

export default RegisterInterface;
function dispatch(
  arg0: ThunkAction<
    void,
    CombinedState<{
      activityList: never;
      studentUploadList: never;
      studentRegister: never;
    }>,
    void,
    StudentUploadListUpdateStudentUploadListAction
  >,
) {
  throw new Error('Function not implemented.');
}
