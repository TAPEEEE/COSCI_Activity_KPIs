import { FC, memo } from 'react';
import { Formik, Form, Field } from 'formik';

interface StudentRegister {
  user_id: string;
  name: string;
  password: string;
  student_id: string;
  teacher: string;
  major: string;
  email: string;
  tel: string;
}

const AddActivityTest: FC = () => {
  const initialValues: StudentRegister = {
    user_id: '',
    name: '',
    password: '',
    student_id: '',
    teacher: '',
    major: '',
    email: '',
    tel: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        console.log(JSON.stringify(values, null, 3));
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <div>
          <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
            ชื่อ - สกุล
          </label>
          <input
            type="text"
            id="name"
            name="name"
            disabled
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
            className="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
            อาจารย์ที่ปรึกษา
          </label>
          <input
            value="test"
            type="text"
            id="teacher"
            name="teacher"
            disabled
            className="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
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
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
            รหัสผ่าน
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-900 block mb-1 mt-5">
            ยืนยันรหัสผ่าน
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-900 block mb-1 mt-5 ">
            ยืนยันรหัสผ่าน
          </label>
          <input
            type="text"
            id="tel"
            name="tel"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full h-10 p-2.5"
          />
        </div>
        <button className="w-full mt-5 text-white bg-[#006b9c] hover:bg-[#00567e] focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          สมัครสมาชิก
        </button>
      </Form>
    </Formik>
  );
};

export default memo(AddActivityTest);
