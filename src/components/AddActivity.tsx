import { FC, memo, SetStateAction, useState } from 'react';
import '../assets/css/Components.css';
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddActivity: FC = () => {
  const [activityTitle, setActivityTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  function clearForm() {
    setEndDate(null);
  }

  return (
    <div className="block rounded-lg shadow-lg bg-white max-w-100 p-6 font-Kanit lg:px-16">
      <form>
        <h3 className="mb-1 text-md">ชื่อกิจกรรม</h3>
        <div className="form-group mb-5">
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
            id="exampleInput125"
            placeholder="ชื่อกิจกรรม"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-4">
            <h3 className="mb-1 text-md">วันเริ่มต้นกิจกรรม</h3>
            <DatePicker
              showTimeSelect
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
              selected={startDate}
              dateFormat="d MMM yyyy h:mmaa"
              onChange={(date: Date) => setStartDate(date)}
            />
          </div>
          <div className="form-group mb-6">
            <h3 className="mb-1 text-md">สิ้นสุดกิจกรรม</h3>
            <DatePicker
              dateFormat="d MMM yyyy h:mmaa"
              showTimeSelect
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={(date: SetStateAction<null>) => setEndDate(date)}
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <h3 className="mb-1 text-md">รายละเอียดกิจกรรม</h3>
          <textarea
            rows="4"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
            placeholder="รายละเอียดกิจกรรม"
          />
        </div>
        <div className="form-group mb-6">
          <h3 className="mb-1 text-md">ชื่อกิจกรรม</h3>
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
            id="exampleInput126"
            placeholder="sdsdsd"
          />
        </div>
        <div className="flex flex-auto justify-between">
          <button
            type="submit"
            className="w-full px-6 py-2.5 mr-5 bg-green-600 text-md text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            เพิ่มกิจกรรม
          </button>

          <button
            onClick={clearForm}
            type="submit"
            className="w-3/6 px-6 py-4 bg-red-50 bg text-red-600 font-medium text-md leading-tight uppercase rounded-md hover:bg-red-400 hover:text-white focus:bg-blue-700  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            ล้างฟอร์ม
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(AddActivity);
function setEndDate(arg0: null) {
  throw new Error('Function not implemented.');
}
