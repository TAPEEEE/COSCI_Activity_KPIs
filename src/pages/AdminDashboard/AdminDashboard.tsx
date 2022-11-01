import React from 'react';
import DashboardStatCard from '../../components/DashboardStatCard';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';

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
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <DashboardStatCard />
        </div>

        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="font-Kanit font-medium text-2xl mx-2 my-3">
            กิจกรรมล่าสุด
          </h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
