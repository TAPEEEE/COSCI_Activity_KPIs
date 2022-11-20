import React from 'react';
import DashboardStatCard from '../../components/DashboardStatCard';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import AdminActivityTable from '../../components/AdminActivityTable';

type AdminDashboardProps = {
  //
};

const AdminDashboard: React.FC<any> = () => {
  return (
    <>
      <div className="h-full bg-gray-100">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 font-Kanit">
            <div className="lg:flex lg:justify-between">
              <h1 className="text-[28px] font-medium tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-7xl my-5">
          <DashboardStatCard />
        </div>

        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white my-8 shadow-md rounded-lg">
          <h1 className="font-Kanit font-medium text-2xl mx-5 my-5">
            กิจกรรมล่าสุด
          </h1>
          <div className="mx-5 my-5">
            <AdminActivityTable
              name_event={''}
              start_date={''}
              end_date={''}
              event_type={''}
              event_img={''}
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white my-8 shadow-md rounded-lg">
          <h1 className="font-Kanit font-medium text-2xl mx-5 my-5">
            คำร้องล่าสุด
          </h1>
          <div className="mx-5 my-5">
            <AdminActivityTable
              name_event={''}
              start_date={''}
              end_date={''}
              event_type={''}
              event_img={''}
            />
          </div>
        </div>
        <div className="mt-28">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
