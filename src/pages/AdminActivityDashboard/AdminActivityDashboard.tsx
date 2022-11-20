import React, { useEffect, useState } from 'react';
import AdminActivityTable from '../../components/AdminActivityTable';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import axios from 'axios';
import moment from 'moment';

type AdminActivityDashboardProps = {
  //
};

const data1 = [
  {
    name_event: 'ลอยกระทง',
    detail_event: 'งานวันลอยกระทง งานวันลอยกระทง งานวันลอยกระทง งานวันลอยกระทง',
    start_date: '2022-11-09T19:13:59.408Z',
    end_date: '2022-11-09T18:30:00.000Z',
    posted_timestamp: 1668021239408,
    event_type: 'กิจกรรมเลือก',
    event_img: 'imgactivity.png',
    activity_hour: '1',
    event_status: true,
    permissions_type: 'student',
  },
  {
    name_event: 'COSCI OpenHouse',
    detail_event: 'COSCI OpenHouse COSCI OpenHouse COSCI OpenHouse ',
    start_date: '2022-11-09T19:17:43.528Z',
    end_date: '2022-11-17T19:00:00.000Z',
    posted_timestamp: 1668021463528,
    event_type: 'กิจกรรมบำเพ็ญสาธารณประโยชน์',
    event_img: 'imgactivity.png',
    activity_hour: '25',
    event_status: true,
    permissions_type: 'student',
  },
];

interface KPIProps {
  name_event: string;
  detail_event: string;
  start_date: undefined;
  end_date: undefined;
  posted_timestamp: undefined;
  event_type: string;
  event_img: string;
  activity_hour: number;
  event_status: boolean;
  permissions_type: string;
}

const AdminActivityDashboard: React.FC<any> = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/admin-add-activity');
  }

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          'http://localhost:8081/api/admin/admin-kpi-dashboard',
        );
        setData(response.data.kpi);
      } catch (error) {
        console.error('Error');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <body className="h-full bg-gray-100 font-Kanit">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 font-Kanit">
            <div className="lg:flex lg:justify-between">
              <h1 className="text-[28px] font-medium tracking-tight text-gray-900">
                จัดการกิจกรรม
              </h1>
            </div>
          </div>
        </header>

        <div className="mx-3">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white my-8 shadow-md rounded-lg">
            <div className="flex justify-between">
              <h1 className="font-Kanit font-medium text-2xl mx-5 my-5">
                กิจกรรมล่าสุด
              </h1>
              <button
                onClick={handleClick}
                type="button"
                className="font-Kanit mt-4 mb-4 mr-4 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
              >
                เพิ่มกิจกรรม
              </button>
            </div>

            <div className="mx-5 my-5">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden rounded-lg">
                      <table className="min-w-full text-center">
                        <thead className="border-b bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              รูปภาพ
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              ชื่อกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              ประเภทกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              เวลาเริ่มกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              เวลาจบกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              จัดการกิจกรรม
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data1.map((item) => (
                            <AdminActivityTable
                              name_event={item.name_event}
                              start_date={item.start_date}
                              end_date={item.end_date}
                              event_type={item.event_type}
                              event_img={item.event_img}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white my-8 shadow-md rounded-lg">
            <div className="flex justify-between">
              <h1 className="font-Kanit font-medium text-2xl mx-5 my-5">
                กิจกรรมล่าสุด
              </h1>
              <button
                onClick={handleClick}
                type="button"
                className="font-Kanit mt-4 mb-4 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
              >
                เพิ่มกิจกรรม
              </button>
            </div>

            <div className="mx-5 my-5">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden rounded-lg">
                      <table className="min-w-full text-center">
                        <thead className="border-b bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              รูปภาพ
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              ชื่อกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              ประเภทกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              เวลาเริ่มกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              เวลาจบกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              จัดการกิจกรรม
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data1.map((item) => (
                            <AdminActivityTable
                              name_event={item.name_event}
                              start_date={item.start_date}
                              end_date={item.end_date}
                              event_type={item.event_type}
                              event_img={item.event_img}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <Footer />
        </div>
      </body>
    </>
  );
};

export default AdminActivityDashboard;
