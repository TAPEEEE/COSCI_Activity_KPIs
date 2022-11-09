import React from 'react';
import AdminActivityTable from '../../components/AdminActivityTable';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

type AdminActivityDashboardProps = {
  //
};

const data = [
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

const AdminActivityDashboard: React.FC<any> = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/admin-add-activity');
  }
  return (
    <>
      <body className="h-full bg-gray-100">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 font-Kanit">
            <div className="lg:flex lg:justify-between">
              <h1 className="text-[28px] font-medium tracking-tight text-gray-900">
                จัดการกิจกรรม
              </h1>
              <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <button
                  onClick={handleClick}
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
                >
                  เพิ่มกิจกรรม
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white my-8 shadow-md rounded-lg">
          <h1 className="font-Kanit font-medium text-2xl mx-5 my-5">
            กิจกรรมล่าสุด
          </h1>
          <div className="mx-5 my-5">
            <AdminActivityTable />
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
