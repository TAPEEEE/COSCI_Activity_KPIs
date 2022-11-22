import {
  ChangeEvent,
  FC,
  memo,
  SetStateAction,
  useState,
  MouseEvent,
} from 'react';

import '../assets/css/Components.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import alertSuccess from '../utils/addActivitySuccess';
import alertError from '../utils/addActivityError';
import { useNavigate } from 'react-router-dom';
import { date } from 'yup';

const AddActivity: FC = () => {
  let navigate = useNavigate();
  function handleLink() {
    navigate('/admin-activity-dashboard');
  }
  let closeTextfield = 'bg-gray-300';
  const [placeholder, setPlaceholder] = useState(
    'เฉพาะหมวดบำเพ็ญสาธารณประโยชน์',
  );
  const [name_event, setName_event] = useState<String>('');
  const [detail_event, setDetail_event] = useState<String>('');
  const [event_type, setEvent_type] = useState<String>('กิจกรรมบังคับ');
  const [posted_timestamp, setPosted_timestamp] = useState(Date.now());
  const [isDisabled, setIsDisabled] = useState(true);
  const [event_img, setEvent_img] = useState<String>('imgactivity.png');
  const [event_status, setEvent_status] = useState<Boolean>(true);
  const [permissions_type, setPermissions_type] = useState<String>('student');
  const [start_date, setStart_date] = useState(new Date());
  const [end_date, setEnd_date] = useState<string | undefined>('');
  const [activity_hour, setActivity_hour] = useState<string>('1');

  function checkActivityCat(input: string) {
    if (input == 'กิจกรรมบำเพ็ญสาธารณประโยชน์') {
      setIsDisabled(false);
      setPlaceholder('');
      setActivity_hour('1');
    } else {
      setIsDisabled(true);
      setPlaceholder('เฉพาะหมวดบำเพ็ญสาธารณประโยชน์');
      setActivity_hour('1');
    }
  }

  const setEevntNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName_event(event.target.value);
  };

  const setEevntDetailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDetail_event(event.target.value);
  };

  const setEventTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEvent_type(event.target.value);
    checkActivityCat(event.target.value);
  };

  const setActivityHourHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      setActivity_hour(event.target.value);
    }
  };

  function clearData() {
    setName_event('');
    setEvent_type('');
    setActivity_hour('1');
    setEnd_date(undefined);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!name_event || !event_type || !end_date || !activity_hour) {
      alertError();
      return;
    }

    const addEventData = {
      name_event,
      detail_event,
      start_date,
      end_date,
      posted_timestamp,
      event_type,
      event_img,
      activity_hour,
      event_status,
      permissions_type,
    };
    console.log(JSON.stringify(addEventData, undefined, 4));
    clearData();
    alertSuccess();
    handleLink();
  };

  function clearForm() {
    clearData();
  }

  if (!isDisabled) {
    closeTextfield = 'bg-white';
  }

  return (
    <div className="block rounded-lg shadow-lg bg-white max-w-100 p-6 font-Kanit lg:px-16">
      <div className="form-group mb-6">
        <h3 className="mb-1 text-md">อัพโหลดรูปภาพกิจกรรม</h3>
        <div className="flex justify-center items-center w-full">
          <label className="flex flex-col justify-center items-center w-full h-52 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">คลิกเพื่ออัพโหลด</span> หรือ
                ลากและวางรูปภาพที่นี่
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG or JPG
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <form className="pt-5">
        <label className="mb-1 text-md" htmlFor="activitytitle">
          ชื่อกิจกรรม
        </label>
        <div className="form-group mb-5">
          <input
            name="activityTitle"
            onChange={setEevntNameHandler}
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
            id="exampleInput125"
            placeholder="ชื่อกิจกรรม"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-4">
            <h3 className="mb-1 text-md">กลุ่มกิจกรรม</h3>
            <select
              className="w-full form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
              onChange={setEventTypeHandler}
            >
              <option value="กิจกรรมบังคับ" selected>
                กิจกรรมบังคับ
              </option>
              <option value="กิจกรรมเลือก">กิจกรรมเลือก</option>
              <option value="กิจกรรมบำเพ็ญสาธารณประโยชน์">
                กิจกรรมบำเพ็ญสาธารณประโยชน์
              </option>
            </select>
          </div>
          <div className="form-group mb-5">
            <h3 className="mb-1 text-md">จำนวนชั่วโมง</h3>
            <input
              disabled={isDisabled}
              type="number"
              className={`${closeTextfield} + "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"`}
              id="exampleInput125"
              placeholder={placeholder}
              onChange={setActivityHourHandler}
              value={activity_hour}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-4">
            <h3 className="mb-1 text-md">วันเริ่มต้นกิจกรรม</h3>
            <DatePicker
              showTimeSelect
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-solid border border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
              selected={start_date}
              dateFormat="d MMM yyyy h:mmaa"
              onChange={(date: Date) => setStart_date(date)}
            />
          </div>
          <div className="form-group mb-6">
            <h3 className="mb-1 text-md">สิ้นสุดกิจกรรม</h3>
            <DatePicker
              value={end_date}
              dateFormat="d MMM yyyy h:mmaa"
              showTimeSelect
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
              selected={end_date}
              selectsEnd
              startDate={start_date}
              endDate={end_date}
              minDate={start_date}
              onChange={(date: SetStateAction<string | undefined>) =>
                setEnd_date(date)
              }
            />
          </div>
        </div>
        <div className="form-group mb-24">
          <h3 className="mb-1 text-md">รายละเอียดกิจกรรม</h3>
          <textarea
            onChange={setEevntDetailHandler}
            rows="4"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
            placeholder="รายละเอียดกิจกรรม"
          />
        </div>

        <div className="flex flex-auto justify-between">
          <button
            onClick={handleClick}
            type="button"
            className="w-full px-6 py-2.5 mr-5 bg-green-700 text-md text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            เพิ่มกิจกรรม
          </button>

          <button
            onClick={clearForm}
            type="button"
            className="w-3/6 px-6 py-4 bg-red-50 bg text-red-600 font-medium text-md leading-tight uppercase rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          >
            ล้างฟอร์ม
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(AddActivity);
