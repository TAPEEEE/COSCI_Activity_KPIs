import { FC, memo } from 'react';
import '../assets/css/Components.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Form, Field } from 'formik';

interface ActivityValues {
  name_event: string;
  event_detail: string;
}

const AddActivityTest: FC = () => {
  const initialValues: ActivityValues = { name_event: '', event_detail: '' };
  return (
    <div className="block rounded-lg shadow-lg bg-white max-w-100 p-6 font-Kanit lg:px-16">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          console.log(JSON.stringify(values, null, 3));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label className="mb-1 text-md" htmlFor="name_event">
            ชื่อกิจกรรม
          </label>
          <div className="form-group mb-5">
            <Field
              id="event_name"
              name="name_event"
              placeholder="ชื่อกิจกรรม"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
            />
          </div>
          <div className="form-group mb-8">
            <label className="mb-1 text-md" htmlFor="event_detail">
              รายละเอียดกิจกรรม
            </label>
            <Field
              id="event_detail"
              name="event_detail"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
              placeholder="รายละเอียดกิจกรรม"
            />
          </div>

          <button
            className="w-full px-6 py-2.5 mr-5 bg-green-600 text-md text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default memo(AddActivityTest);
